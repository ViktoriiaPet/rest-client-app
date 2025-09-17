import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('firebase/firestore', () => ({
  addDoc: vi.fn(),
  collection: vi.fn(() => ({ __tag: 'collection' })),
  serverTimestamp: vi.fn(() => '__server_ts__'),
}));

vi.mock('@/service/firebase', () => ({
  db: { __tag: 'db' },
}));

import { addDoc, collection } from 'firebase/firestore';
import { logRequest } from '@/utils/logRequest';
import type { LogPayload } from '@/utils/logRequest';

beforeEach(() => {
  vi.clearAllMocks();
});

function firstCall() {
  const calls = (addDoc as unknown as { mock: { calls: unknown[][] } }).mock
    .calls;
  return calls[0] as [unknown, Record<string, unknown>];
}

describe('logRequest', () => {
  it('truncates bodyPreview and writes server timestamp', async () => {
    const payload: LogPayload = {
      method: 'GET',
      url: 'https://api.test',
      headers: { a: 'b' },
      bodyMode: 'json',
      bodyPreview: 'x'.repeat(9000),
      latencyMs: 123,
      statusCode: 200,
      statusText: 'OK',
      userId: 'u1',
    };
    await logRequest(payload);
    expect(collection).toHaveBeenCalledWith(expect.anything(), 'requests');
    expect(addDoc).toHaveBeenCalledTimes(1);
    const [, docArg] = firstCall();
    expect(docArg.createdAt).toBe('__server_ts__');
    expect(String(docArg.bodyPreview).length).toBe(8192);
    expect(docArg.method).toBe('GET');
    expect(docArg.url).toBe('https://api.test');
    expect(docArg.latencyMs).toBe(123);
    expect(docArg.statusCode).toBe(200);
    expect(docArg.statusText).toBe('OK');
    expect(docArg.userId).toBe('u1');
  });

  it('omits bodyPreview when absent', async () => {
    const payload: LogPayload = {
      method: 'POST',
      url: 'https://api.test/2',
      latencyMs: 5,
      statusCode: 204,
    };
    await logRequest(payload);
    const [, docArg] = firstCall();
    expect(docArg.bodyPreview).toBeUndefined();
  });
});
