import React from 'react';
import { useTranslation } from 'react-i18next';

import type { JSX } from 'react';

export default function LangToggle(): JSX.Element {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng);
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={() => {
          changeLanguage('en');
        }}
      >
        {t('English')}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={() => {
          changeLanguage('ru');
        }}
      >
        {t('Russian')}
      </button>
    </div>
  );
}
