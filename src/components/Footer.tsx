import React from 'react';
import { useTranslation } from 'react-i18next';

import type { JSX } from 'react';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="bottom-0 w-full bg-pink-200 px-4 py-2">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <a
          href="https://github.com/ViktoriiaPet/rest-client-app"
          target="_blank"
          rel="noreferrer"
        >
          {t('app.github')}
        </a>

        <span>2025</span>

        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          Logo
        </a>
      </div>
    </footer>
  );
}
