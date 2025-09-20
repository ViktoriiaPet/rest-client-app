import { describe, it, expect, beforeAll } from 'vitest';
import { buildClientUrl, parseClientUrl } from '@/utils/restUrl';

beforeAll(() => {
  if (typeof globalThis.atob === 'undefined') {
    globalThis.atob = (b64: string) =>
      Buffer.from(b64, 'base64').toString('binary');
  }
  if (typeof globalThis.btoa === 'undefined') {
    globalThis.btoa = (bin: string) =>
      Buffer.from(bin, 'binary').toString('base64');
  }
});

describe('buildClientUrl / parseClientUrl (minimal)', () => {
  it('uses defaults when values missing', () => {
    const built = buildClientUrl({ method: '', url: '' });
    expect(built).toBe('/auth/restfull/GET/');

    const parsed = parseClientUrl({});
    expect(parsed.method).toBe('GET');
    expect(parsed.url).toBe('');
    expect(parsed.headers).toEqual({});
  });

  it('normalizes method and round-trips url via base64url', () => {
    const original = 'https://example.com/a?b=1&c=2';
    const built = buildClientUrl({ method: 'post', url: original });
    const parts = built.split('/');
    expect(parts[3]).toBe('POST');

    const b64seg = parts[4].split('?')[0];
    expect(b64seg).not.toMatch(/[=+/]/);

    const parsed = parseClientUrl({ method: 'post', urlB64: b64seg });
    expect(parsed.method).toBe('POST');
    expect(parsed.url).toBe(original);
    expect(parsed.headers).toEqual({});
  });

  it('serializes non-empty header keys to query and parses back', () => {
    const built = buildClientUrl({
      method: 'GET',
      url: 'http://x',
      headers: { a: '1', b: 'two words', '': 'skip' },
    });
    const qs = built.split('?')[1] ?? '';
    expect(qs).toContain('a=1');
    expect(qs).toMatch(/(?:^|&)b=two\+words(?:&|$)/);

    const [urlB64, search] = (built.split('/')[4] ?? '').split('?');
    const parsed = parseClientUrl({ urlB64, search });
    expect(parsed.headers).toEqual({ a: '1', b: 'two words' });
  });
});
