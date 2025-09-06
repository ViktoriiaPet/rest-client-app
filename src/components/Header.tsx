import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import LangToggle from './LangToggle';
import userIcon from '../assets/img/user-icon.jpg';

import type { JSX } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

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
          <Button
            variant="outline"
            className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            {t('SignIn')}
          </Button>
        </NavLink>
        <NavLink to="/singUp" end>
          <Button
            variant="outline"
            className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            {t('SignUp')}
          </Button>
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
