import React from 'react';
import { useTranslation } from 'react-i18next';

import type { JSX } from 'react';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="bottom-0 w-full">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a
          href="https://github.com/ViktoriiaPet/rest-client-app"
          target="_blank"
          rel="noreferrer"
          className="text-purple-600 "
        >
          {t('Github')}
        </a>

        <span className="text-purple-600">2025</span>

        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <img
            className="w-[40px]"
            src="https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg"
            alt="rss logo"
          />
        </a>
      </div>
    </footer>
  );
}
