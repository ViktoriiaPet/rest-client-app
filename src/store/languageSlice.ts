import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Lang = 'en' | 'ru';

interface LanguageState {
  lang: 'en' | 'ru';
}

const getSavedLang = (): Lang => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'ru') return saved;
  }
  return 'en';
};

const initialState: LanguageState = {
  lang: getSavedLang(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<'en' | 'ru'>) {
      state.lang = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', action.payload);
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
