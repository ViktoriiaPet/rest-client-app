import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/service/firebase';

export interface LogPayload {
  method: string;
  url: string;
  params?: Record<string, string>;
  headers?: Record<string, string>;
  bodyMode?: string;
  bodyPreview?: string;
  latencyMs: number;
  statusCode: number;
  statusText?: string;
  requestTimestamp?: string;
  requestSizeBytes?: number;
  responseSizeBytes?: number;
  errorType?: string | null;
  errorMessage?: string | null;
  userId?: string | null;
}

export async function logRequest(payload: LogPayload) {
  const safePreview = payload.bodyPreview?.slice(0, 8192);
  const doc = {
    ...payload,
    bodyPreview: safePreview,
    createdAt: serverTimestamp(),
  };
  await addDoc(collection(db, 'requests'), doc);
}
