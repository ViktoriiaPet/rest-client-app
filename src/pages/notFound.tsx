import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import type { JSX } from 'react';

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;
  return (
    <main className="grid min-h-[80svh] place-items-center px-4">
      <section className="mx-auto max-w-xl p-8 text-center space-y-4">
        <img
          src="/ice-cream.svg"
          alt="not-found"
          className="mx-auto w-80 h-80"
        />
        <h2 className="text-3xl font-bold">{t('notFound.title')}</h2>
        <p className="opacity-80">{t('notFound.description')}</p>

        <div className="flex gap-3 justify-center">
          <button
            className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
            onClick={() => navigate(-1)}
          >
            {t('notFound.back')}
          </button>
          <Link
            className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
            to="/"
          >
            {t('notFound.home')}
          </Link>
        </div>
      </section>
    </main>
  );
}
