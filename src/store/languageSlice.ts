import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type LanguageState = {
  lang: 'en' | 'ru' | null;
};

const initialState: LanguageState = {
  lang:
    typeof window !== 'undefined' && localStorage.getItem('i18nextLng')
      ? (localStorage.getItem('i18nextLng') as 'en' | 'ru')
      : 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<'en' | 'ru'>) {
      state.lang = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('i18nextLng', action.payload);
      }
    },
    loadLanguageFromStorage(state) {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('lang') as 'en' | 'ru' | null;
        state.lang = saved ?? 'en';
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
