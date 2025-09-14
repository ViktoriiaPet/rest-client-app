export type BuildArgs = {
  method: string;
  url: string;
  body?: string | null;
  headers?: Record<string, string>;
};

export type ParsedClientUrl = {
  method: string;
  url: string;
  body: string;
  headers: Record<string, string>;
};

function toBase64Url(b64: string): string {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(b64url: string): string {
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  const pad = b64.length % 4 === 0 ? '' : '='.repeat(4 - (b64.length % 4));
  return b64 + pad;
}

function encodeUtf8ToBase64Url(s: string): string {
  try {
    const bytes = new TextEncoder().encode(s);
    const chars: string[] = [];
    for (const byte of bytes) {
      chars.push(String.fromCharCode(byte));
    }
    const bin = chars.join('');
    const b64 =
      typeof btoa === 'function'
        ? btoa(bin)
        : globalThis.Buffer
          ? globalThis.Buffer.from(bytes).toString('base64')
          : (() => {
              throw new Error('No base64 encoder available');
            })();
    return toBase64Url(b64);
  } catch {
    return '';
  }
}

function decodeBase64UrlToUtf8(b64url?: string): string {
  if (!b64url) return '';
  try {
    const b64 = fromBase64Url(b64url);
    const bin =
      typeof atob === 'function'
        ? atob(b64)
        : globalThis.Buffer
          ? globalThis.Buffer.from(b64, 'base64').toString('binary')
          : (() => {
              throw new Error('No base64 decoder available');
            })();
    const bytes = new Uint8Array(bin.length);
    let i = 0;
    for (const ch of bin) {
      bytes[i++] = ch.charCodeAt(0);
    }
    return new TextDecoder().decode(bytes);
  } catch {
    return '';
  }
}

export const b64 = {
  enc: encodeUtf8ToBase64Url,
  dec: decodeBase64UrlToUtf8,
} as const;

export function buildClientUrl({
  method,
  url,
  body,
  headers = {},
}: BuildArgs): string {
  const m = (method ?? 'GET').toUpperCase();
  const urlB64 = b64.enc(url ?? '');
  const bodySeg = body ? `/${b64.enc(body)}` : '';
  const qs = new URLSearchParams();

  for (const [k, v] of Object.entries(headers)) {
    if (k) qs.set(k, v);
  }

  const qsStr = qs.toString();
  return `/auth/restfull/${m}/${urlB64}${bodySeg}${qsStr ? `?${qsStr}` : ''}`;
}

export function parseClientUrl(params: {
  method?: string;
  urlB64?: string;
  bodyB64?: string;
  search?: string;
}): ParsedClientUrl {
  const method = (params.method ?? 'GET').toUpperCase();
  const url = b64.dec(params.urlB64);
  const body = b64.dec(params.bodyB64);
  const headers = Object.fromEntries(
    new URLSearchParams(params.search ?? '')
  ) as Record<string, string>;

  return { method, url, body, headers };
}
