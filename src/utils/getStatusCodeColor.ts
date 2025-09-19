import type { HttpMethod } from '@/types/apiMethods';

export const badgeColor = (code: number): string => {
  if (code < 200) return 'bg-blue-600';
  if (code < 300) return 'bg-green-600';
  if (code < 400) return 'bg-orange-500';
  if (code < 500) return 'bg-red-600';
  return 'bg-rose-600';
};

export const getStatusColor = (statusCode?: number): string => {
  if (!statusCode) return 'bg-gray-300';

  const firstDigit = Math.floor(statusCode / 100);

  switch (firstDigit) {
    case 1:
      return 'bg-purple-300';
    case 2:
      return 'bg-purple-400';
    case 3:
      return 'bg-indigo-500';
    case 4:
      return 'bg-pink-300';
    case 5:
      return 'bg-pink-400';
    default:
      return 'bg-gray-200';
  }
};

export const getMethodTextColor = (method: HttpMethod): string => {
  switch (method) {
    case 'GET':
      return 'text-green-600';
    case 'POST':
      return 'text-orange-600';
    case 'PUT':
      return 'text-yellow-600';
    case 'PATCH':
      return 'text-purple-600';
    case 'DELETE':
      return 'text-rose-600';
    case 'HEAD':
      return 'text-slate-600';
    case 'OPTIONS':
      return 'text-blue-600';
    default:
      return '';
  }
};
