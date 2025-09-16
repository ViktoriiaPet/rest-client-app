import type { HttpMethod } from './apiMethods';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type RequestData = {
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

type VariablesData = Record<string, string>;

type UserVariables = {
  id: string;
  variables: VariablesData;
};

type VariablesKey = 'API_URL' | 'TOKEN' | 'USER_ID';
