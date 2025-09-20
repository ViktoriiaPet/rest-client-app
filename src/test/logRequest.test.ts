import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { logRequest, type LogPayload } from '@/utils/logRequest';

vi.mock('firebase/firestore', () => ({
  addDoc: vi.fn(),
  collection: vi.fn(),
  serverTimestamp: vi.fn(),
}));

vi.mock('@/service/firebase', () => ({
  db: { tag: 'DB' },
}));

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

describe('logRequest', () => {
  const basePayload: LogPayload = {
    method: 'GET',
    url: 'https://example.com/api',
    params: { a: '1' },
    headers: { Accept: '*/*' },
    bodyMode: 'none',
    bodyPreview: '',
    latencyMs: 123,
    statusCode: 200,
    statusText: 'OK',
    requestBytes: 10,
    requestHeadersBytes: 4,
    requestBodyBytes: 6,
    responseBytes: 20,
    responseHeadersBytes: 8,
    responseBodyBytes: 12,
    errorType: null,
    errorMessage: null,
    userId: 'u1',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('writes a request document with server timestamp', async () => {
    (serverTimestamp as unknown as Mock).mockReturnValue('TS');
    (collection as unknown as Mock).mockReturnValue('COL_REF');
    (addDoc as unknown as Mock).mockResolvedValue({ id: 'doc1' });

    await logRequest(basePayload);

    expect(collection).toHaveBeenCalledWith({ tag: 'DB' }, 'requests');
    expect(addDoc).toHaveBeenCalledWith('COL_REF', { ...basePayload, createdAt: 'TS' });
  });

  it('rejects when addDoc fails', async () => {
    (serverTimestamp as unknown as Mock).mockReturnValue('TS');
    (collection as unknown as Mock).mockReturnValue('COL_REF');
    (addDoc as unknown as Mock).mockRejectedValue(new Error('boom'));

    await expect(logRequest(basePayload)).rejects.toThrow('boom');
  });
});
