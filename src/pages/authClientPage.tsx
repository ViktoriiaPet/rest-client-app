import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, Navigate } from 'react-router';

import type { JSX } from 'react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function AuthorizedUserPage(): JSX.Element {
  const { t } = useTranslation();
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;
  return (
    <nav className="p-[5vw] text-center flex flex-col items-center gap-3">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        WELCOME, {user.displayName}
      </div>

      <NavLink
        className="hover:text-pink-600 inline-block"
        to="/auth/restfull"
        end
      >
        <div>{t('clientPage.restfull')}</div>
      </NavLink>
      <NavLink
        className="hover:text-pink-600 inline-block"
        to="/auth/clientVariales"
        end
      >
        <div>{t('clientPage.variables')}</div>
      </NavLink>
      <NavLink
        className="hover:text-pink-600 inline-block"
        to="/auth/clientHistory"
        end
      >
        <div>{t('clientPage.history')}</div>
      </NavLink>
      <Outlet />
    </nav>
  );
}
