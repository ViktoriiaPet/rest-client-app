import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getLangFromCookie } from '@/utils/getLangFromCookie';

const clearLang = () => {
  document.cookie = 'lang=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
};

beforeEach(() => {
  clearLang();
});

afterEach(() => {
  clearLang();
});

describe('getLangFromCookie', () => {
  it('returns "en" when cookie is missing', () => {
    clearLang();
    expect(getLangFromCookie()).toBe('en');
  });

  it('returns "ru" when cookie is set to ru', () => {
    document.cookie = 'lang=ru; path=/';
    expect(getLangFromCookie()).toBe('ru');
  });

  it('returns "en" when cookie is set to en', () => {
    document.cookie = 'lang=en; path=/';
    expect(getLangFromCookie()).toBe('en');
  });

  it('returns "en" when document is undefined (SSR)', () => {
    const original = globalThis.document;
    vi.stubGlobal('document', undefined as unknown as Document);
    expect(getLangFromCookie()).toBe('en');
    vi.stubGlobal('document', original);
  });

  it('uses decoded value if cookie is URL-encoded ru', () => {
    document.cookie = `lang=${encodeURIComponent('ru')}; path=/`;
    expect(getLangFromCookie()).toBe('ru');
  });
});
