import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { Button } from '@/components/ui/button';

import LangToggle from './LangToggle';

import type { JSX } from 'react';

export default function Header(): JSX.Element {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-row justify-around sticky top-3">
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
        <div>Authorized user&apos;s page</div>
      </NavLink>
    </nav>
  );
}
