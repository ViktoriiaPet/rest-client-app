import type { HttpMethod } from './apiMethods';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type RequestData = {
  id: string;
  userId: string;

  method: HttpMethod;
  url: string; // полный endpoint (с подставленными переменными!)
  headers: Record<string, string>;
  body?: Record<string, string>; // тело запроса, если было (any потому заменим как что-то будет более ясно)

  // аналитика
  statusCode: number; // HTTP статус
  duration: number; // длительность (мс)
  requestSize: number; // размер запроса (байты)
  responseSize: number; // размер ответа (байты)
  errorDetails?: string; // если упал (timeout, network error и т.п.)
  timestamp: number;
};

type VariablesData = Record<string, string>;

type UserVariables = {
  id: string;
  variables: VariablesData;
};

type VariablesKey = 'API_URL' | 'TOKEN' | 'USER_ID';
