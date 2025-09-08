import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import LangToggle from './LangToggle';

import type { JSX } from 'react';

import { ErrorModal } from '@/components/ErrorModal';

export default function Header(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-around sticky top-0">
      <NavLink to="/" end>
        <img src="/app-logo.svg" width="50" height="50" />
      </NavLink>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => {
          setOpen(true);
        }}
      >
        Вызвать ошибку
      </button>

      <ErrorModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
        statusCode={100}
        message="Ошибка сервера. Попробуйте позже."
      />
      <div>
        <LangToggle />
      </div>
      <NavLink to="/signIn" end>
        <div>{t('SignIn')}</div>
      </NavLink>
      <NavLink to="/signUp" end>
        <div>{t('SignUp')}</div>
      </NavLink>
      <NavLink to="/mainClint" end>
        <div>Authorized user&apos;s page</div>
      </NavLink>
    </nav>
  );
}
