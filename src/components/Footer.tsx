import React from 'react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import rssLogo from '../../public/rss-logo.svg';

export default function Footer(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <footer className="bottom-0 w-full bg-pink-200 px-8 py-2">
      <div className="mx-auto w-full  flex items-center justify-between overflow-y-auto pt-0">
        <a
          href="https://github.com/ViktoriiaPet/rest-client-app"
          target="_blank"
          rel="noreferrer"
          className="text-purple-600 font-bold text-center text-l mb-2 mt-2  hover:text-yellow-100 transition-colors"
        >
          {t('app.github')}
        </a>

        <span className="text-purple-600 font-bold text-center text-l mb-2 mt-2">
          2025
        </span>

        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-[40px]" src={rssLogo} alt="rss logo" />
        </a>
      </div>
    </footer>
  );
}
