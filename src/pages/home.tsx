import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';

import type { JSX } from 'react';

import { SignButton } from '@/components/SignButton';
import { useAuth } from '@/context/AuthContext.tsx';

export default function HomePage(): JSX.Element {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      void navigate('/mainClint');
    }
  }, [user, navigate]);
  return (
    <div className="p-[5vw]">
      <div>Start Page (Welcome)</div>
      <div className="flex flex-row gap-[5vw]">
        <NavLink to="/signIn" end>
          <SignButton text={t('auth.signIn')} />
        </NavLink>
        <NavLink to="/singUp" end className="w-1/2">
          <SignButton text={t('auth.signUp')} />
        </NavLink>
      </div>
    </div>
  );
}
