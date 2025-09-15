import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';

import type { JSX } from 'react';

import { SignButton } from '@/components/SignButton';
import { useAuth } from '@/context/AuthContext.tsx';

import darya from '@/assets/img/Darya.jpg';

export default function HomePage(): JSX.Element {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      void navigate('/mainClint');
    }
  }, [user, navigate]);
  return (
    <div className="p-[5vw] flex flex-col align-middle justify-center items-center">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        {t('auth.welcome')}
      </div>
      <div
        className="flex flex-row mb-[3vw] gap-[2vw] items-stretch
                [&>div]:flex-1 [&>div]:basis-0 [&>div]:min-w-0"
      >
        <div className="flex flex-col border border-purple-600 p-[2vw] rounded-lg">
          <img
            src=""
            alt=""
            className="block w-[200px] h-[200px] object-cover mx-auto"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            Vika
          </div>
          <div>Text about</div>
        </div>
        <div className="flex flex-col border  border-purple-600 p-[2vw] rounded-lg">
          <img
            src={darya}
            alt={t('aboutDarya.photoAlt')}
            className="block w-[200px] h-[200px] object-cover mx-auto"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            {t('aboutDarya.name')}
          </div>
          <div>{t('aboutDarya.text')}</div>
        </div>
        <div className="flex flex-col border  border-purple-600 p-[2vw] rounded-lg">
          <img
            src=""
            alt=""
            className="block w-[200px] h-[200px] object-cover mx-auto"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            Alyona
          </div>
          <div>Text about</div>
        </div>
      </div>
      <div className="flex flex-row gap-[5vw] justify-around">
        <NavLink to="/signIn" end>
          <SignButton text={t('auth.signIn')} />
        </NavLink>
        <NavLink to="/singUp" end>
          <SignButton text={t('auth.signUp')} />
        </NavLink>
      </div>
    </div>
  );
}
