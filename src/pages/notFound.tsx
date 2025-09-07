import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import type { JSX } from 'react';

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="grid min-h-[100svh] place-items-center px-4">
      <section className="mx-auto max-w-xl p-8 text-center space-y-4">
        <img src="/ice-cream.svg" className="mx-auto w-80 h-80" />
        <h2 className="text-3xl font-bold">{t('notFound.title')}</h2>
        <p className="opacity-80">{t('notFound.description')}</p>

        <div className="flex gap-3 justify-center">
          <button
            className="rounded-2xl px-4 py-2 shadow"
            onClick={() => navigate(-1)}
          >
            {t('notFound.back')}
          </button>
          <Link className="rounded-2xl px-4 py-2 shadow" to="/">
            {t('notFound.home')}
          </Link>
        </div>
      </section>
    </main>
  );
}
