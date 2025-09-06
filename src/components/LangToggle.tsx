import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { JSX } from 'react';

import { Switch } from '@/components/ui/switch';

export default function LangToggle(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<'en' | 'ru'>(
    i18n.language === 'ru' ? 'ru' : 'en'
  );
  const isEnglish = i18n.language === 'en';

  const changeLanguage = (): void => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    void i18n.changeLanguage(newLang);
    setLang(newLang);
  };
  return (
    <div className="flex flex-row gap-3 items-center">
      <div
        className={
          isEnglish ? 'text-rose-500 font-bold' : 'text-rose-400 font-semibold'
        }
      >
        {t('lang.english')}
      </div>
      <Switch onClick={changeLanguage} />
      <div
        className={
          isEnglish ? 'text-rose-400 font-semibold' : 'text-rose-500 font-bold'
        }
      >
        {' '}
        {t('lang.russian')}
      </div>
    </div>
  );
}
