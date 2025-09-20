import type { RequestSnapshot, KeyValueRow } from '@/types/restFullClient';
import { hasHeader, type StringRecord } from './restUrl';
import { applyVariables } from './variables';
import { DEFAULT_METHODS, type HttpMethod } from '@/types/apiMethods';

export function utf8Bytes(s: string): number {
  return new TextEncoder().encode(s).length;
}

export function headersBytesTotalFromRecord(
  rec: Record<string, string>
): number {
  let sum = 0;
  for (const [k, v] of Object.entries(rec)) sum += utf8Bytes(`${k}: ${v}\r\n`);
  return sum;
}

export function headersToRecord(h: Headers): Record<string, string> {
  const out: Record<string, string> = {};
  h.forEach((v, k) => {
    out[k] = v;
  });
  return out;
}

export async function computeRequestByteSizes(
  url: string,
  method: string,
  headers: Record<string, string>,
  body: BodyInit | undefined
) {
  const req = new Request(url, { method, headers: new Headers(headers), body });
  const requestBodyBytes = req.body
    ? (await new Response(req.body).arrayBuffer()).byteLength
    : 0;
  const finalHeaders = headersToRecord(req.headers);
  const requestHeadersBytes = headersBytesTotalFromRecord(finalHeaders);
  return {
    requestBodyBytes,
    requestHeadersBytes,
    requestBytes: requestHeadersBytes + requestBodyBytes,
    finalHeaders,
  };
}

export function resolveBodyText(
  snapshot: RequestSnapshot,
  vars: Record<string, string | undefined>
): string {
  if (snapshot.body.mode === 'json')
    return applyVariables(snapshot.body.jsonText ?? '', vars);
  if (snapshot.body.mode === 'raw')
    return applyVariables(snapshot.body.rawText ?? '', vars);
  return '';
}

export function mergeQueryParams(
  url: string,
  params: StringRecord
): string | null {
  try {
    const u = new URL(url);
    for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
    return u.toString();
  } catch {
    return null;
  }
}

export function ensureContentType(
  headers: StringRecord,
  snapshot: RequestSnapshot
): StringRecord {
  if (snapshot.body.mode === 'json' && !hasHeader(headers, 'content-type')) {
    return { ...headers, 'Content-Type': 'application/json' };
  }
  return { ...headers };
}

export function buildRequestBody(
  snapshot: RequestSnapshot,
  resolvedBodyText: string,
  vars: Record<string, string | undefined>
): BodyInit | undefined {
  const canSendBody = !['GET', 'HEAD'].includes(snapshot.method);
  if (!canSendBody) return undefined;
  switch (snapshot.body.mode) {
    case 'json':
      return resolvedBodyText;
    case 'form-data': {
      const form = new FormData();
      (snapshot.body.formData ?? [])
        .filter((r) => r.enabled && r.key)
        .forEach((r) => {
          form.append(
            applyVariables(r.key, vars),
            applyVariables(r.value, vars)
          );
        });
      return form;
    }
    case 'raw':
      return resolvedBodyText;
    default:
      return undefined;
  }
}

export function recToRows(
  rec: Record<string, string> | undefined | null
): KeyValueRow[] {
  return Object.entries(rec ?? {}).map(([k, v]) => ({
    id: crypto.randomUUID(),
    enabled: true,
    key: k,
    value: String(v),
  }));
}

export type PrefillState =
  | {
      method?: string;
      url?: string;
      headers?: Record<string, string>;
      params?: Record<string, string>;
      bodyMode?: string;
      bodyText?: string;
    }
  | undefined;

export function fromB64JSON(b64: string): unknown {
  try {
    const decoded = decodeURIComponent(b64);
    if (typeof Buffer !== 'undefined')
      return JSON.parse(Buffer.from(decoded, 'base64').toString('utf8'));
    return JSON.parse(decodeURIComponent(escape(atob(decoded))));
  } catch {
    return undefined;
  }
}

function isHttpMethod(m: string): m is HttpMethod {
  return (DEFAULT_METHODS as readonly string[]).includes(m.toUpperCase());
}
export function normalizeMethod(input?: string | HttpMethod): HttpMethod {
  if (!input) return 'GET';
  if (typeof input !== 'string') return input;
  const upper = input.toUpperCase();
  return isHttpMethod(upper) ? (upper as HttpMethod) : 'GET';
}
