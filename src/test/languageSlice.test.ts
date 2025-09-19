import { describe, it, expect, beforeEach } from 'vitest';
import reducer, { setLanguage } from '@/store/languageSlice';

describe('languageSlice', () => {
  const initialState: { lang: "en" | "ru" | null } = { lang: 'en' };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the initial state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ lang: 'en' });
  });

  it('should handle setLanguage action', () => {
    const state = reducer(initialState, setLanguage('ru'));
    expect(state.lang).toBe('ru');
    expect(localStorage.getItem('i18nextLng')).toBe('ru');
  });

  it('should update language from en to ru', () => {
    let state = reducer({ lang: 'en' as "en" | "ru" | null }, setLanguage('ru'));
    expect(state.lang).toBe('ru');
    expect(localStorage.getItem('i18nextLng')).toBe('ru');

    state = reducer(state, setLanguage('en'));
    expect(state.lang).toBe('en');
    expect(localStorage.getItem('i18nextLng')).toBe('en');
  });

});
