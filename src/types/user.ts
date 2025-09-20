import type { HttpMethod } from './apiMethods';

export type RequestData = {
  id: string;
  userId: string;

  method: HttpMethod;
  url: string;
  headers: Record<string, string>;
  body?: Record<string, string>;

  statusCode: number;
  duration: number;
  requestSize: number;
  responseSize: number;
  errorDetails?: string;
  timestamp: number;
};
