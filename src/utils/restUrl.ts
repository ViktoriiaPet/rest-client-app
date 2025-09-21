import type { HttpMethod } from '@/types/apiMethods';
import type { BodyMode } from '@/types/restFullClient';

export type BuildArgs = {
  method: string;
  url: string;
  headers?: Record<string, string>;
  bodyMode?: BodyMode;
  bodyText?: string;
  formData?: Array<{ key: string; value: string }>;
};

export type ParsedClientUrl = {
  method: string;
  url: string;
  headers: Record<string, string>;
  bodyMode: BodyMode;
  bodyText?: string;
  formData?: Array<{ key: string; value: string }>;
};

export type RestFullChangePayload = { method: HttpMethod; url: string };

export type RestFullClientProps = {
  method?: HttpMethod;
  onChange?(v: RestFullChangePayload): void;
};

export type StringRecord = Record<string, string>;

export function toRecord(
  rows: { enabled: boolean; key: string; value: string }[]
): StringRecord {
  return Object.fromEntries(
    rows.filter((r) => r.enabled && r.key).map((r) => [r.key, r.value])
  );
}

export function hasHeader(
  headers: Record<string, string>,
  key: string
): boolean {
  const needle = key.toLowerCase();
  return Object.keys(headers).some((k) => k.toLowerCase() === needle);
}

function base64UrlEncode(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function base64UrlDecode(value?: string): string {
  if (!value) return '';
  const padded = value
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

const RESERVED_KEYS = new Set(['__bm', '__body_b64']);

export function buildClientUrl({
  method,
  url,
  headers = {},
  bodyMode = 'none',
  bodyText = '',
  formData,
}: BuildArgs): string {
  const normalizedMethod = (method || 'GET').toUpperCase();
  const encodedUrl = base64UrlEncode(url || '');

  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(headers)) {
    if (!key) continue;
    if (!RESERVED_KEYS.has(key)) search.append(key, value);
  }

  search.set('__bm', bodyMode);
  if (bodyMode === 'form-data') {
    const arr = (formData ?? []).map(({ key, value }) => ({ key, value }));
    search.set('__body_b64', base64UrlEncode(JSON.stringify(arr)));
  } else if (bodyMode === 'json' || bodyMode === 'raw') {
    search.set('__body_b64', base64UrlEncode(bodyText ?? ''));
  }

  const qs = search.toString();
  return `/auth/restfull/${normalizedMethod}/${encodedUrl}${qs ? `?${qs}` : ''}`;
}

export function parseClientUrl(params: {
  method?: string;
  urlB64?: string;
  search?: string;
}): ParsedClientUrl {
  const sp = new URLSearchParams(params.search || '');

  const headers: Record<string, string> = {};
  sp.forEach((v, k) => {
    if (!RESERVED_KEYS.has(k)) headers[k] = v;
  });

  const bodyMode = (sp.get('__bm') as BodyMode) || 'none';
  const rawBodyB64 = sp.get('__body_b64') || '';
  const decoded = base64UrlDecode(rawBodyB64);

  let bodyText: string | undefined;
  let formData: Array<{ key: string; value: string }> | undefined;

  if (bodyMode === 'form-data') {
    try {
      const arr = JSON.parse(decoded);
      if (Array.isArray(arr)) {
        formData = arr.filter(
          (x) => x && typeof x.key === 'string' && typeof x.value === 'string'
        );
      }
    } catch {
      formData = [];
    }
  } else if (bodyMode === 'json' || bodyMode === 'raw') {
    bodyText = decoded;
  }

  return {
    method: (params.method || 'GET').toUpperCase(),
    url: base64UrlDecode(params.urlB64),
    headers,
    bodyMode,
    bodyText,
    formData,
  };
}
