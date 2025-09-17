import { badgeColor, getMethodTextColor } from '@/utils/getStatusCodeColor';
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
