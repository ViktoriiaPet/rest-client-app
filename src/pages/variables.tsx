import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function VariablesPage(): JSX.Element {
    const { t } = useTranslation();
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="p-[5vw] flex flex-col align-middle justify-center items-center">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        {t('variables.title')}
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <input
            name="variableName"
            type="text"
            placeholder={t('variables.variableName')}
            // value={formData.email}
            // onChange={handleChange}
            className="pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
          />
          <input
            name="variableValue"
            type="text"
            placeholder={t('variables.variableValue')}
            // value={formData.email}
            // onChange={handleChange}
            className="pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
          />
          <div className=" flex justify-center items-center">
            <Button variant="custom" type="submit">
              {t('variables.addButton')}
            </Button>
          </div>

          <div className="text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center">
            {t('variables.variableName')}
          </div>
          <div className="text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center">
            {t('variables.variableValue')}
          </div>
          <div className="text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center ">
            {t('variables.delete')}
          </div>

          {/* Данные */}
          <div className="text-center">Данные 1</div>
          <div className="text-center">Данные 2</div>
          <div className=" flex justify-center items-center">
            <Button variant="custom" type="submit">
              {t('variables.delete')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
