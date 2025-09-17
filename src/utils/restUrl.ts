export type BuildArgs = {
  method: string;
  url: string;
  headers?: Record<string, string>;
};

export type ParsedClientUrl = {
  method: string;
  url: string;
  headers: Record<string, string>;
};

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

export function buildClientUrl({
  method,
  url,
  headers = {},
}: BuildArgs): string {
  const normalizedMethod = (method || 'GET').toUpperCase();
  const encodedUrl = base64UrlEncode(url || '');
  const query = new URLSearchParams(
    Object.entries(headers).filter(([key]) => !!key)
  );
  const qs = query.toString();
  return `/auth/restfull/${normalizedMethod}/${encodedUrl}${qs ? `?${qs}` : ''}`;
}

export function parseClientUrl(params: {
  method?: string;
  urlB64?: string;
  search?: string;
}): ParsedClientUrl {
  return {
    method: (params.method || 'GET').toUpperCase(),
    url: base64UrlDecode(params.urlB64),
    headers: Object.fromEntries(
      new URLSearchParams(params.search || '')
    ) as Record<string, string>,
  };
}
