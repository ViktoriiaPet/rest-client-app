import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

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
      <NavLink to="/singIn" end>
        <div>{t('SignIn')}</div>
      </NavLink>
      <NavLink to="/singUp" end>
        <div>{t('SignUp')}</div>
      </NavLink>
      <NavLink to="/mainClint" end>
        <div>Authorized user&apos;s page</div>
      </NavLink>
    </nav>
  );
}
