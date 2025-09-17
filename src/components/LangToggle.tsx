import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import type { JSX } from 'react';

import { Switch } from '@/components/ui/switch';
import { setLanguage } from '@/store/languageSlice';

const DEFAULT_LANG: 'en' | 'ru' = 'en';

export default function LangToggle({
  initialLang = DEFAULT_LANG,
}: {
  initialLang?: 'en' | 'ru';
}): JSX.Element {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);
  const { t, i18n } = useTranslation();
  const ssrT = (key: 'lang.english' | 'lang.russian') =>
    typeof window === 'undefined' ? i18n.getFixedT(initialLang)(key) : t(key);

  useEffect(() => {
    void i18n.changeLanguage(lang ?? 'en');
  }, [lang]);

  const changeLanguage = (): void => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    dispatch(setLanguage(newLang));

    if (typeof document !== 'undefined') {
      document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    }

    void i18n.changeLanguage(newLang);

    if (window.location.pathname === '/auth/clientHistory') {
    window.location.reload();
  }
  };
  const isEnglishSSR =
    typeof window === 'undefined' ? initialLang === 'en' : lang === 'en';
  return (
    <div className="flex flex-row gap-3 items-center w-full justify-center">
      <div
        className={`w-1/3 flex justify-end ${
          isEnglishSSR
            ? 'text-pink-600 font-bold'
            : 'text-pink-300 font-semibold'
        }`}
      >
        {ssrT('lang.english')}
      </div>
      <Switch onClick={changeLanguage} checked={lang === 'ru'} />
      <div
        className={`w-1/3 flex ${
          isEnglishSSR
            ? 'text-pink-300 font-semibold w-1/3'
            : 'text-pink-600 font-bold w-1/3'
        }`}
      >
        {ssrT('lang.russian')}
      </div>
    </div>
  );
}
