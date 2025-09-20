import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/service/firebase';
import type { BodyMode } from '@/types/restFullClient';

export interface LogPayload {
  method: string;
  url: string;
  params?: Record<string, string>;
  headers?: Record<string, string>;
  bodyMode: BodyMode;
  bodyPreview: string;
  latencyMs: number;
  statusCode: number;
  statusText?: string;

  requestBytes: number;
  requestHeadersBytes: number;
  requestBodyBytes: number;

  responseBytes: number;
  responseHeadersBytes: number;
  responseBodyBytes: number;

  errorType?: string | null;
  errorMessage?: string | null;
  userId?: string | null;
}

export async function logRequest(payload: LogPayload): Promise<void> {
  const doc = {
    ...payload,
    createdAt: serverTimestamp(),
  };
  await addDoc(collection(db, 'requests'), doc);
}
