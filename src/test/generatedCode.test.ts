import { describe, it, expect } from 'vitest';
import { buildHarFromSnapshot } from '@/utils/generatedCode';
import type { RequestSnapshot, KeyValueRow } from '@/types/restFullClient';

const row = (
  id: string,
  key: string,
  value: string,
  enabled = true
): KeyValueRow => ({ id, key, value, enabled });

function makeSnapshot(partial: Partial<RequestSnapshot>): RequestSnapshot {
  const base: RequestSnapshot = {
    method: 'POST',
    url: 'https://example.com/api',
    headers: [],
    params: [],
    body: { mode: 'none' } as unknown as RequestSnapshot['body'],
    variables: {},
  } as RequestSnapshot;

  return {
    ...(base as unknown as RequestSnapshot),
    ...partial,
  } as RequestSnapshot;
}

describe('buildHarFromSnapshot', () => {
  it('filters only enabled + non-empty headers and params', () => {
    const snap = makeSnapshot({
      method: 'GET',
      headers: [
        row('h1', 'X-Foo', 'a', true),
        row('h2', 'X-Bar', 'b', false),
        row('h3', '', 'c', true),
      ],
      params: [
        row('p1', 'q', '1', true),
        row('p2', 'r', '2', false),
        row('p3', '', '3', true),
      ],
    });

    const har = buildHarFromSnapshot(snap, snap.url);
    expect(har.headers).toEqual([{ name: 'X-Foo', value: 'a' }]);
    expect(har.queryString).toEqual([{ name: 'q', value: '1' }]);
  });

  it('uppercases method and omits body for GET', () => {
    const bodyJson = { mode: 'json', jsonText: '{"a":1}' } as const;
    const snap = makeSnapshot({
      method: 'GET',
      body: bodyJson as unknown as RequestSnapshot['body'],
    });

    const har = buildHarFromSnapshot(snap, snap.url);
    expect(har.method).toBe('GET');
    expect(har.postData).toBeUndefined();
  });

  it('omits body for HEAD even if provided', () => {
    const bodyRaw = { mode: 'raw', rawText: 'hello' } as const;
    const snap = makeSnapshot({
      method: 'HEAD',
      body: bodyRaw as unknown as RequestSnapshot['body'],
    });

    const har = buildHarFromSnapshot(snap, snap.url);
    expect(har.method).toBe('HEAD');
    expect(har.postData).toBeUndefined();
  });

  it('maps json body with application/json', () => {
    const bodyJson = { mode: 'json', jsonText: '{"x":42}' } as const;
    const snap = makeSnapshot({
      method: 'POST',
      body: bodyJson as unknown as RequestSnapshot['body'],
    });

    const har = buildHarFromSnapshot(snap, snap.url);
    expect(har.postData).toEqual({
      mimeType: 'application/json',
      text: '{"x":42}',
    });
  });

  it('maps form-data body to multipart/form-data with params', () => {
    const bodyForm = {
      mode: 'form-data',
      formData: [
        row('f1', 'name', 'Darya', true),
        row('f2', 'skip', 'nope', false),
        row('f3', '', 'empty', true),
      ],
    } as const;

    const snap = makeSnapshot({
      method: 'POST',
      body: bodyForm as unknown as RequestSnapshot['body'],
    });

    const har = buildHarFromSnapshot(snap, snap.url);
    expect(har.postData).toEqual({
      mimeType: 'multipart/form-data',
      params: [{ name: 'name', value: 'Darya' }],
    });
  });

  it('maps raw body; uses header Content-Type if present, else defaults', () => {
    const snapWithCT = makeSnapshot({
      method: 'POST',
      headers: [row('h1', 'Content-Type', 'text/xml; charset=utf-8', true)],
      body: {
        mode: 'raw',
        rawText: '<x/>',
      } as unknown as RequestSnapshot['body'],
    });
    const har1 = buildHarFromSnapshot(snapWithCT, snapWithCT.url);
    expect(har1.postData).toEqual({
      mimeType: 'text/xml; charset=utf-8',
      text: '<x/>',
    });

    const snapNoCT = makeSnapshot({
      method: 'POST',
      headers: [],
      body: {
        mode: 'raw',
        rawText: 'hi',
      } as unknown as RequestSnapshot['body'],
    });
    const har2 = buildHarFromSnapshot(snapNoCT, snapNoCT.url);
    expect(har2.postData).toEqual({
      mimeType: 'text/plain; charset=utf-8',
      text: 'hi',
    });
  });
});
