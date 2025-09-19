import { describe, it, expect } from 'vitest';
import { store } from '@/store';
import { setLanguage } from '@/store/languageSlice';

describe('Redux store', () => {
  it('should have initial state', () => {
    const state = store.getState();
    expect(state.language.lang).toBe('en');
  });

  it('should handle setLanguage action', () => {
    store.dispatch(setLanguage('ru'));
    const state = store.getState();
    expect(state.language.lang).toBe('ru');

    store.dispatch(setLanguage('en'));
    expect(store.getState().language.lang).toBe('en');
  });
});
