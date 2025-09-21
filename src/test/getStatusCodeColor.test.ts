import {
  badgeColor,
  getMethodTextColor,
  getStatusColor,
} from '@/utils/getStatusCodeColor';
import type { HttpMethod } from '@/types/apiMethods';
import { describe, it, expect } from 'vitest';

describe('badgeColor', () => {
  it('maps status code ranges to Tailwind classes', () => {
    const cases: Array<[number, string]> = [
      [100, 'bg-blue-600'],
      [199, 'bg-blue-600'],
      [200, 'bg-green-600'],
      [250, 'bg-green-600'],
      [299, 'bg-green-600'],
      [300, 'bg-orange-500'],
      [399, 'bg-orange-500'],
      [400, 'bg-red-600'],
      [499, 'bg-red-600'],
      [500, 'bg-rose-600'],
      [600, 'bg-rose-600'],
    ];

    for (const [code, expected] of cases) {
      expect(badgeColor(code)).toBe(expected);
    }
  });
});

describe('getMethodTextColor', () => {
  it('returns correct color for known methods', () => {
    const cases: Array<[HttpMethod, string]> = [
      ['GET', 'text-green-600'],
      ['POST', 'text-orange-600'],
      ['PUT', 'text-yellow-600'],
      ['PATCH', 'text-purple-600'],
      ['DELETE', 'text-rose-600'],
      ['HEAD', 'text-slate-600'],
      ['OPTIONS', 'text-blue-600'],
    ];

    for (const [method, expected] of cases) {
      expect(getMethodTextColor(method)).toBe(expected);
    }
  });

  it('falls back to empty string for unknown methods', () => {
    expect(getMethodTextColor('' as HttpMethod)).toBe('');
  });
});

describe('getStatusColor', () => {
  it('returns gray when no status provided', () => {
    expect(getStatusColor(undefined)).toBe('bg-gray-300');
    expect(getStatusColor(0)).toBe('bg-gray-300');
  });

  it('maps first digit buckets to Tailwind classes', () => {
    const cases: Array<[number, string]> = [
      [100, 'bg-purple-300'],
      [199, 'bg-purple-300'],
      [200, 'bg-purple-400'],
      [250, 'bg-purple-400'],
      [299, 'bg-purple-400'],
      [300, 'bg-indigo-500'],
      [399, 'bg-indigo-500'],
      [400, 'bg-pink-300'],
      [499, 'bg-pink-300'],
      [500, 'bg-pink-400'],
      [599, 'bg-pink-400'],
      [600, 'bg-gray-200'],
      [777, 'bg-gray-200'],
    ];

    for (const [code, expected] of cases) {
      expect(getStatusColor(code)).toBe(expected);
    }
  });
});
