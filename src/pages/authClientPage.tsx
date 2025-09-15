import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, Navigate } from 'react-router';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function AuthorizedUserPage(): JSX.Element {
  const { t } = useTranslation();
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <nav className="p-[5vw]">
      <NavLink to="/auth/restfull" end>
        <div>{t('clientPage.restfull')}</div>
      </NavLink>
      <NavLink to="/auth/clientVariales" end>
        <div>{t('clientPage.variables')}</div>
      </NavLink>
      <NavLink to="/auth/clientHistory" end>
        <div>{t('clientPage.history')}</div>
      </NavLink>
      <Outlet />
    </nav>
  );
}
