import { describe, it, expect, vi } from 'vitest';

vi.mock('@/types/restFullClient', () => ({
  LANGS: ['curl', 'node'] as const,
  TARGETS: {
    curl: ['shell', 'curl', {}],
    node: ['node', 'fetch', {}],
  } as const,
}));

vi.mock('httpsnippet-lite', () => {
  class HTTPSnippet {
    har: unknown;
    constructor(har: unknown) {
      this.har = har;
    }
    async convert(target: string, client: string) {
      return `${target}:${client}`;
    }
  }
  return { default: HTTPSnippet, HTTPSnippet };
});

import type {
  RequestSnapshot,
  KeyValueRow,
  BodyMode,
} from '@/types/restFullClient';
import {
  buildUrl,
  buildHarFromSnapshot,
  generateSnippets,
  firstAvailableLanguage,
  type CodeByLang,
  type HarRequest,
} from '@/utils/generatedCode';
import type { HttpMethod } from '@/types/apiMethods';

const row = (key: string, value: string, enabled = true): KeyValueRow => ({
  id: key,
  key,
  value,
  enabled,
});

const snapshot = (over: Partial<RequestSnapshot> = {}): RequestSnapshot => ({
  method: 'GET',
  url: 'https://api.example.com/path',
  params: [],
  headers: [],
  body: { mode: 'none' as BodyMode, jsonText: '', formData: [], rawText: '' },
  ...over,
});

describe('buildUrl', () => {
  it('returns null for invalid url', () => {
    const s = snapshot({ url: 'not a url' });
    expect(buildUrl(s)).toBeNull();
  });
  it('merges enabled params into query string', () => {
    const s = snapshot({
      url: 'https://api.example.com/path?x=1',
      params: [
        row('x', '9'),
        row('a', 'b'),
        row('', 'z'),
        row('off', 'y', false),
      ],
    });
    expect(buildUrl(s)).toBe('https://api.example.com/path?x=9&a=b');
  });
});

describe('buildHarFromSnapshot', () => {
  it('builds HAR for JSON body', () => {
    const s = snapshot({
      method: 'post' as HttpMethod,
      headers: [row('Accept', 'application/json')],
      body: { mode: 'json', jsonText: '{"a":1}', formData: [], rawText: '' },
    });
    const url = 'https://api.example.com/u';
    const har = buildHarFromSnapshot(s, url);
    const expected: HarRequest = {
      method: 'POST',
      url,
      httpVersion: 'HTTP/1.1',
      headers: [{ name: 'Accept', value: 'application/json' }],
      queryString: [],
      postData: { mimeType: 'application/json', text: '{"a":1}' },
    };
    expect(har).toEqual(expected);
  });

  it('builds HAR for form-data body', () => {
    const s = snapshot({
      method: 'PUT',
      body: {
        mode: 'form-data',
        jsonText: '',
        rawText: '',
        formData: [row('f1', 'v1'), row('skip', 'v', false)],
      },
    });
    const har = buildHarFromSnapshot(s, 'https://x/y');
    expect(har.postData?.mimeType).toBe('multipart/form-data');
    expect(har.postData?.params).toEqual([{ name: 'f1', value: 'v1' }]);
  });

  it('builds HAR for raw body with explicit content-type', () => {
    const s = snapshot({
      method: 'PATCH',
      headers: [row('Content-Type', 'application/xml')],
      body: { mode: 'raw', jsonText: '', rawText: '<a/>', formData: [] },
    });
    const har = buildHarFromSnapshot(s, 'https://x/y');
    expect(har.postData?.mimeType).toBe('application/xml');
    expect(har.postData?.text).toBe('<a/>');
  });

  it('defaults raw content-type when header missing', () => {
    const s = snapshot({
      method: 'PATCH',
      body: { mode: 'raw', jsonText: '', rawText: 'hello', formData: [] },
    });
    const har = buildHarFromSnapshot(s, 'https://x/y');
    expect(har.postData?.mimeType).toBe('text/plain; charset=utf-8');
  });

  it('omits body for GET/HEAD', () => {
    const s1 = snapshot({
      method: 'GET',
      body: { mode: 'json', jsonText: '{}', formData: [], rawText: '' },
    });
    const s2 = snapshot({
      method: 'HEAD',
      body: { mode: 'raw', rawText: 'x', jsonText: '', formData: [] },
    });
    expect(buildHarFromSnapshot(s1, 'https://x').postData).toBeUndefined();
    expect(buildHarFromSnapshot(s2, 'https://x').postData).toBeUndefined();
  });

  it('includes headers and queryString filtered/enabled only', () => {
    const s = snapshot({
      params: [row('a', '1'), row('', 'z'), row('off', 'n', false)],
      headers: [row('H1', 'v'), row('', 'x')],
    });
    const har = buildHarFromSnapshot(s, 'https://x');
    expect(har.headers).toEqual([{ name: 'H1', value: 'v' }]);
    expect(har.queryString).toEqual([{ name: 'a', value: '1' }]);
  });
});

describe('generateSnippets + firstAvailableLanguage', () => {
  it('generates code per mocked targets', async () => {
    const s = snapshot({
      method: 'POST',
      body: { mode: 'json', jsonText: '{"n":1}', formData: [], rawText: '' },
    });
    const code = await generateSnippets(s, 'https://api.example.com/p');
    type L = 'curl' | 'node';
    const c = code as Partial<Record<L, string>>;
    expect(c.curl).toBe('shell:curl');
    expect(c.node).toBe('node:fetch');
  });

  it('picks first available language in configured order', () => {
    type L = 'curl' | 'node';
    const onlyNode = { node: 'x' } as Partial<
      Record<L, string>
    > as unknown as CodeByLang;
    const both = { curl: 'a', node: 'b' } as Partial<
      Record<L, string>
    > as unknown as CodeByLang;
    expect(firstAvailableLanguage(onlyNode)).toBe('node');
    expect(firstAvailableLanguage(both)).toBe('curl');
    expect(firstAvailableLanguage({} as unknown as CodeByLang)).toBeNull();
  });
});
