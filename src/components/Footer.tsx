import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';

import type { JSX } from 'react';

export default function Footer(): JSX.Element | null {
    const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
      useEffect(() => {
      setMounted(true);
    }, []);
  if (!mounted) return null;
  return (
    <footer className="bottom-0 w-full bg-pink-200 px-4 py-2">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <a
          href="https://github.com/ViktoriiaPet/rest-client-app"
          target="_blank"
          rel="noreferrer"
          className="text-purple-600 "
        >
          {t('app.github')}
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
