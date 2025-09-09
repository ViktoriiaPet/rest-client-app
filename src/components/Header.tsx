import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';

import LangToggle from './LangToggle';
import { SignButton } from './SignButton';
import { Button } from './ui/button';
import userIcon from '../assets/img/user-icon.jpg';

import type { JSX } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
    <nav className="flex flex-row justify-around items-center sticky top-3 ">
      <NavLink to="/" end>
        <img src="/app-logo.svg" width="50" height="50" />
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
            <div className="w-1/4">
              {/* <div>User&apos;s page</div> */}
              <Avatar>
                <AvatarImage src={userIcon} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/signIn" end className="w-1/2 flex justify-end">
            <SignButton text={t('auth.signIn')} />
          </NavLink>
          <NavLink to="/signUp" end className="w-1/2">
            <SignButton text={t('auth.signUp')} />
          </NavLink>
        </>
      )}
      ;
    </nav>
  );
}
