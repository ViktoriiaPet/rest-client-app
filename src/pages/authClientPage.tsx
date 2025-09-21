import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function AuthorizedUserPage(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  if (loading) return <div>{t('app.loading')}</div>;
  if (!user) return <Navigate to="/" replace />;
  return (
    <nav className="p-[5vw] text-center flex flex-col items-center gap-3">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        {t('auth.welcome')}, {user.displayName}
      </div>
      <div
        className="flex flex-row mb-[3vw] gap-[2vw] items-stretch
                [&>div]:flex-1 [&>div]:basis-0 [&>div]:min-w-0"
      >
        <NavLink
          className="bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100"
          to="/auth/restfull"
          end
        >
          <div>{t('clientPage.restfull')}</div>
        </NavLink>
        <NavLink
          className="bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100"
          to="/auth/clientVariales"
          end
        >
          <div>{t('clientPage.variables')}</div>
        </NavLink>
        <NavLink
          className="bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100"
          to="/auth/clientHistory"
          end
        >
          <div>{t('clientPage.history')}</div>
        </NavLink>
      </div>

      <Outlet />
    </nav>
  );
}
