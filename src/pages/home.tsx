import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
import type { JSX } from 'react';

import { SignButton } from '@/components/SignButton';
import { useAuth } from '@/context/AuthContext.tsx';

import darya from '@/assets/img/Darya.jpg';
import alyona from '@/assets/img/alyona.jpg';
import vika from '@/assets/img/vika.jpg';

export default function HomePage(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (user) {
      void navigate('/mainClint');
    }
  }, [user, navigate]);
  if (!mounted) return null;
  return (
    <div className="p-[5vw] flex flex-col align-middle justify-center items-center">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        {t('auth.welcome')}
      </div>
      <div
        className="flex flex-row mb-[3vw] gap-[2vw] items-stretch
                [&>div]:flex-1 [&>div]:basis-0 [&>div]:min-w-0"
      >
        <div className="flex flex-col border border-purple-600 p-[2vw] rounded-lg">
          <img
            src={vika}
            alt={t('aboutVika.photoAlt')}
            className="block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            {t('aboutVika.name')}
          </div>
          <div>{t('aboutVika.text')}</div>
          <a
            href="https://github.com/ViktoriiaPet"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-bold text-center text-l mb-2 mt-auto"
          >
            {t('aboutVika.linkGitHub')}
          </a>
        </div>
        <div className="flex flex-col border  border-purple-600 p-[2vw] rounded-lg">
          <img
            src={darya}
            alt={t('aboutDarya.photoAlt')}
            className="block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            {t('aboutDarya.name')}
          </div>
          <div>{t('aboutDarya.text')}</div>
          <a
            href="https://github.com/darinadaniuk/rs_react"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-bold text-center text-l mb-2 mt-auto"
          >
            {t('aboutDarya.linkGitHub')}
          </a>
        </div>
        <div className="flex flex-col border border-purple-600 p-[2vw] rounded-lg">
          <img
            src={alyona}
            alt={t('aboutAlyona.photoAlt')}
            className="block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            {t('aboutAlyona.name')}
          </div>
          <div>{t('aboutAlyona.text')}</div>
          <a
            href="https://github.com/alyona317"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-bold text-center text-l mb-2 mt-auto"
          >
            {t('aboutAlyona.linkGitHub')}
          </a>
        </div>
      </div>
      <div className="text-sm space-y-4 mb-4">
        <div>
          <p>
            {t('info.projectText')}{' '}
            <a
              href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/final.md"
              className="text-purple-600 font-bold text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('info.projectLink')}
            </a>
          </p>
          <p>
            {t('info.courseText')}{' '}
            <a
              href="https://rs.school/courses/reactjs"
              className="text-purple-600 font-bold text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('info.courseLink')}
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-[5vw] justify-around">
        <NavLink to="/signIn" end>
          <SignButton text="auth.signIn" />
        </NavLink>
        <NavLink to="/signUp" end>
          <SignButton text="auth.signUp" />
        </NavLink>
      </div>
    </div>
  );
}
