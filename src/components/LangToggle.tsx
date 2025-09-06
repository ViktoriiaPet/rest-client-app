import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import type { JSX } from 'react';

import { Switch } from '@/components/ui/switch';
import { setLanguage } from '@/store/languageSlice';

export default function LangToggle(): JSX.Element {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    void i18n.changeLanguage(lang);
  }, [lang]);

  const changeLanguage = (): void => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    dispatch(setLanguage(newLang));
    void i18n.changeLanguage(newLang);
  };
  const isEnglish = i18n.language === 'en';
  return (
    <div className="flex flex-row gap-3 items-center w-full justify-center">
      <div
        className={`w-1/3 flex justify-end ${
          isEnglish ? 'text-rose-500 font-bold' : 'text-rose-400 font-semibold'
        }`}
      >
        {t('lang.english')}
      </div>
      <Switch onClick={changeLanguage} checked={lang === 'ru'} />
      <div
        className={`w-1/3 flex ${
          isEnglish
            ? 'text-rose-400 font-semibold w-1/3'
            : 'text-rose-500 font-bold w-1/3'
        }`}
      >
        {t('lang.russian')}
      </div>
    </div>
  );
}
