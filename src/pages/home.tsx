import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import type { JSX } from 'react';

import { Button } from '@/components/ui/button';

export default function HomePage(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="p-[5vw]">
      <div>Start Page (Welcome)</div>
      <div className="flex flex-row gap-[5vw]">
        <NavLink to="/singIn" end>
          <Button
            variant="outline"
            className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            {t('SignIn')}
          </Button>
        </NavLink>
        <NavLink to="/singUp" end>
          <button>Sing Up</button>
        </NavLink>
      </div>
    </div>
  );
}
