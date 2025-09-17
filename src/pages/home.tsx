import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';

import type { JSX } from 'react';

import { SignButton } from '@/components/SignButton';
import { useAuth } from '@/context/AuthContext.tsx';
import { ErrorModal } from '@/components/ErrorModal.tsx';
import darya from '@/assets/img/Darya.jpg';
import alyona from '@/assets/img/alyona.jpg';

export default function HomePage(): JSX.Element {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      void navigate('/mainClint');
    }
  }, [user, navigate]);
  return (
    <div className="p-[5vw] flex flex-col align-middle justify-center items-center">
      {/* <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Вызвать ошибку
        </button>

        <ErrorModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          statusCode={400}
          message="Ошибка сервера. Попробуйте позже."
        />
      </div> */}

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
            className="block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            Vika
          </div>
          <div>Text about</div>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-bold text-center text-l mb-2 mt-2"
          >
            Github link
          </a>
        </div>
        <div className="flex flex-col border  border-purple-600 p-[2vw] rounded-lg">
          <img
            src={darya}
            alt={t('aboutDarya.photoAlt')}
            className="block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            {t('aboutDarya.name')}
          </div>
          <div>{t('aboutDarya.text')}</div>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-bold text-center text-l mb-2 mt-2"
          >
            {t('aboutDarya.linkGitHub')}
          </a>
        </div>
        <div className="flex flex-col border  border-purple-600 p-[2vw] rounded-lg">
          <img
            src={alyona}
            alt={t('aboutAlyona.photoAlt')}
            className="block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
          />
          <div className="text-purple-600 font-bold text-center text-xl mb-2 mt-2">
            {t('aboutAlyona.name')}
          </div>
          <div>{t('aboutAlyona.text')}</div>
          <a
            href="https://github.com/alyona317"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-bold text-center text-l mb-2 mt-2"
          >
            {t('aboutAlyona.linkGitHub')}
          </a>
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
