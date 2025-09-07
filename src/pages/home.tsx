import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import type { JSX } from 'react';

import { SignButton } from '@/components/SignButton';

export default function HomePage(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-[5vw]">
      <div className="text-rose-600 text-3xl font-bold mb-8">
        {t('auth.welcome')}
      </div>
      <div className="flex flex-row items-center justify-center  w-[200px]">
        <NavLink to="/singIn" end className="w-1/2 flex justify-end">
          <SignButton text={t('auth.signIn')} />
        </NavLink>
        <NavLink to="/singUp" end className="w-1/2">
          <SignButton text={t('auth.signUp')} />
        </NavLink>
      </div>
    </div>
  );
}
