import React from 'react';
import { useTranslation } from 'react-i18next';
import type { JSX } from 'react';

export default function HistoryPage(): JSX.Element {
    const { t } = useTranslation();
  return (
    <div className="p-[5vw]">
      History page
      <div>{t('app.history')}</div>
    </div>
  );
}
