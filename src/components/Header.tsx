import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';

import LangToggle from './LangToggle';
import { Button } from './ui/button';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function Header(): JSX.Element {
  const { t } = useTranslation();
  const { user, setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const { logout } = await import('@/service/firebase');
      await logout();
      setUser(null);
      setToken(null);
      void navigate('/');
      console.log('Log out');
    } catch (err) {
      console.error('Log error', err);
    }
  };

  return (
    <nav className="flex flex-row justify-around sticky top-0">
      <NavLink to="/" end>
        <img src="/app-logo.svg" width="50" height="50" />
      </NavLink>
      <div>
        <LangToggle />
      </div>
      {user ? (
        <Button variant="custom" onClick={handleLogout}>
          {t('LogOut')}
        </Button>
      ) : (
        <>
          <NavLink to="/signIn" end>
            <Button variant="custom">{t('SignIn')}</Button>
          </NavLink>
          <NavLink to="/signUp" end>
            <Button variant="custom">{t('SignUp')}</Button>
          </NavLink>
        </>
      )}
      <NavLink to="/mainClint" end>
        <div>Authorized user&apos;s page</div>
      </NavLink>
    </nav>
  );
}
