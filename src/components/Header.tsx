import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';

import LangToggle from './LangToggle';
import { SignButton } from './SignButton';
import { Button } from './ui/button';
import userIcon from '../assets/img/user-icon.jpg';

import type { JSX } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';

export default function Header(): JSX.Element | null {
  const { t, ready } = useTranslation();
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

  if (!ready) return null;

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-2 bg-pink-200 border-b-32 border-pink-100">
      <nav className="flex flex-row justify-between items-center">
        <NavLink to="/" end>
          <img src="/app-logo.svg" width="60" height="60" />
        </NavLink>
        <div className="w-[300px] flex items-center justify-center">
          <LangToggle />
        </div>
        <div className="flex flex-row items-center justify-center  w-[200px]"></div>
        {user ? (
          <>
            <Button variant="custom" onClick={handleLogout}>
              {t('LogOut')}
            </Button>
            <NavLink to="/mainClint" end>
              <Button variant="custom">{t('MainPage')}</Button>
            </NavLink>
            <NavLink to="/mainClint" end>
              <div className="w-1/4">
                <Avatar>
                  <AvatarImage src={userIcon} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{user.displayName}</span>
              </div>
            </NavLink>
          </>
        ) : (
          <div className="flex gap-2">
            <NavLink to="/signIn" end className="flex justify-end">
              <SignButton text={t('auth.signIn')} />
            </NavLink>
            <NavLink to="/signUp" end>
              <SignButton text={t('auth.signUp')} />
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
