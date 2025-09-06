import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import LangToggle from './LangToggle';
import userIcon from '../assets/img/user-icon.jpg';

import type { JSX } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SignButton } from './SignButton';

export default function Header(): JSX.Element {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-row justify-around items-center sticky top-3">
      <NavLink to="/" end>
        <img src="/app-logo.svg" width="50" height="50" />
      </NavLink>
      <div>
        <LangToggle />
      </div>
      <div className="flex flex-row justify-around ">
        <NavLink to="/singIn" end>
          <SignButton text={t('auth.signIn')} />
        </NavLink>
        <NavLink to="/singUp" end>
          <SignButton text={t('auth.signUp')} />
        </NavLink>
      </div>

      <NavLink to="/mainClint" end>
        <div>
          {/* <div>User&apos;s page</div> */}
          <Avatar>
            <AvatarImage src={userIcon} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </NavLink>
    </nav>
  );
}
