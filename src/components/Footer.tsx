import React from 'react';
import { useTranslation } from 'react-i18next';

import type { JSX } from 'react';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 w-full">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a
          href="https://github.com/ViktoriiaPet/rest-client-app"
          target="_blank"
          rel="noreferrer"
        >
          {t('Github')}
        </a>

        <span>{year}</span>

        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          Logo
        </a>
      </div>
    </footer>
  );
}
