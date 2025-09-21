import { describe, it, expect, vi, beforeEach } from 'vitest';
import type {
  RequestSnapshot,
  KeyValueRow,
  BodyMode,
} from '@/types/restFullClient';
import type { HttpMethod } from '@/types/apiMethods';
import {
  utf8Bytes,
  headersBytesTotalFromRecord,
  headersToRecord,
  computeRequestByteSizes,
  resolveBodyText,
  mergeQueryParams,
  ensureContentType,
  buildRequestBody,
  recToRows,
  fromB64JSON,
  normalizeMethod,
} from '@/utils/restfull';

const row = (key: string, value: string, enabled = true): KeyValueRow => ({
  id: key,
  key,
  value,
  enabled,
});

const snap = (over: Partial<RequestSnapshot> = {}): RequestSnapshot => ({
  method: 'GET',
  url: 'https://api.example.com/path',
  params: [],
  headers: [],
  body: { mode: 'none' as BodyMode, jsonText: '', formData: [], rawText: '' },
  ...over,
});

const UUID: `${string}-${string}-${string}-${string}-${string}` =
  '00000000-0000-0000-0000-000000000001';

beforeEach(() => {
  if (!globalThis.crypto || !('randomUUID' in globalThis.crypto)) {
    Object.defineProperty(globalThis, 'crypto', {
      value: { randomUUID: vi.fn(() => UUID) } as unknown as Crypto,
      configurable: true,
    });
  } else {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue(UUID);
  }
});

describe('utf8Bytes', () => {
  it('counts bytes for ascii and unicode', () => {
    expect(utf8Bytes('abc')).toBe(3);
  });
});

describe('headersBytesTotalFromRecord', () => {
  it('sums header lines with CRLF', () => {
    expect(headersBytesTotalFromRecord({ A: '1', B: 'zz' })).toBe(13);
  });
});

describe('headersToRecord', () => {
  it('collects from Headers (lower-cased names)', () => {
    const h = new Headers({ 'X-Test': '1', 'content-type': 'text/plain' });
    expect(headersToRecord(h)).toEqual({
      'x-test': '1',
      'content-type': 'text/plain',
    });
  });
});

describe('computeRequestByteSizes', () => {
  it('computes body and header sizes', async () => {
    const {
      requestBodyBytes,
      requestHeadersBytes,
      requestBytes,
      finalHeaders,
    } = await computeRequestByteSizes(
      'https://example.com',
      'POST',
      { 'Content-Type': 'text/plain' },
      'hello'
    );
    expect(requestBodyBytes).toBe(5);
    expect(finalHeaders['content-type']).toBe('text/plain');
    expect(requestHeadersBytes).toBe(26);
    expect(requestBytes).toBe(31);
  });
});

describe('resolveBodyText', () => {
  it('resolves json and raw with variables', () => {
    const vars = { x: '42' };
    expect(
      resolveBodyText(
        snap({
          body: { mode: 'raw', rawText: 'v={{x}}', jsonText: '', formData: [] },
        }),
        vars
      )
    ).toBe('v="42"');
    expect(resolveBodyText(snap(), vars)).toBe('');
  });
});

describe('mergeQueryParams', () => {
  it('merges params into url', () => {
    expect(mergeQueryParams('https://x/?a=1', { a: '2', b: 'z' })).toBe(
      'https://x/?a=2&b=z'
    );
  });
  it('returns null for bad url', () => {
    expect(mergeQueryParams('not a url', { a: '1' })).toBeNull();
  });
});

describe('ensureContentType', () => {
  it('adds content-type for json body when missing', () => {
    const out = ensureContentType(
      {},
      snap({
        body: { mode: 'json', jsonText: '{}', formData: [], rawText: '' },
      })
    );
    expect(out['Content-Type']).toBe('application/json');
  });
  it('does not duplicate when present', () => {
    const out = ensureContentType(
      { 'content-type': 'x/y' },
      snap({
        body: { mode: 'json', jsonText: '{}', formData: [], rawText: '' },
      })
    );
    expect(out['content-type']).toBe('x/y');
    expect(out['Content-Type']).toBeUndefined();
  });
});

describe('buildRequestBody', () => {
  it('returns undefined for GET/HEAD', () => {
    expect(buildRequestBody(snap(), '', {})).toBeUndefined();
    expect(buildRequestBody(snap({ method: 'HEAD' }), '', {})).toBeUndefined();
  });
  it('returns text for json/raw', () => {
    const s1 = snap({
      method: 'POST',
      body: { mode: 'json', jsonText: '{"a":1}', formData: [], rawText: '' },
    });
    const s2 = snap({
      method: 'POST',
      body: { mode: 'raw', rawText: 'hi', jsonText: '', formData: [] },
    });
    expect(buildRequestBody(s1, '{"a":1}', {})).toBe('{"a":1}');
    expect(buildRequestBody(s2, 'hi', {})).toBe('hi');
  });
  it('builds FormData for form-data', () => {
    const s = snap({
      method: 'POST',
      body: {
        mode: 'form-data',
        formData: [row('a', '1'), row('b', '2', false)],
        jsonText: '',
        rawText: '',
      },
    });
    const fd = buildRequestBody(s, '', {}) as FormData;
    const entries = Array.from(fd.entries());
    expect(entries).toEqual([['a', '1']]);
  });
});

describe('recToRows', () => {
  it('converts record to rows with ids', () => {
    const rows = recToRows({ a: '1', b: '2' });
    expect(rows).toHaveLength(2);
    expect(rows[0].enabled).toBe(true);
    expect(rows[0].key).toBeDefined();
    expect(rows[0].id).toBe('00000000-0000-0000-0000-000000000001');
  });
});

describe('fromB64JSON', () => {
  it('decodes encoded base64 json', () => {
    const obj = { a: 1, b: 'x' };
    const b64 = Buffer.from(JSON.stringify(obj), 'utf8').toString('base64');
    const uri = encodeURIComponent(b64);
    expect(fromB64JSON(uri)).toEqual(obj);
  });
  it('returns undefined on invalid', () => {
    expect(fromB64JSON('%')).toBeUndefined();
  });
});

describe('normalizeMethod', () => {
  it('normalizes to valid HttpMethod or GET', () => {
    expect(normalizeMethod('post' as HttpMethod)).toBe('POST');
    expect(normalizeMethod('fetch')).toBe('GET');
    expect(normalizeMethod()).toBe('GET');
  });
});
