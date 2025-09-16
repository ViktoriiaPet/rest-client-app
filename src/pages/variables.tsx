import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import type { JSX } from 'react';

import { TableHeader } from '@/components/TableHeader';
import { TableRow } from '@/components/TableRow';
import { VariablesAddBar } from '@/components/VariablesAddBar';
import { useAuth } from '@/context/AuthContext';
import { getUserVariables, saveUserVariables } from '@/store/variableStorage';

type Props = {
  userId: string;
};

export default function VariablesPage({ userId }: Props): JSX.Element {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const [variables, setVariables] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = getUserVariables(userId);
    setVariables(saved);
  }, [userId]);

  const deleteVariable = (key: string) => {
    const newVariables = Object.fromEntries(
      Object.entries(variables).filter(([k]) => k !== key)
    );
    setVariables(newVariables);
    saveUserVariables(userId, newVariables);
  };
  const addVariable = (key: string, value: string) => {
    const newVariables = { ...variables, [key]: value };
    setVariables(newVariables);
    saveUserVariables(userId, newVariables);
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="p-[5vw] flex flex-col align-middle justify-center items-center">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        {t('variables.title')}
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <VariablesAddBar onAdd={addVariable} />
          <TableHeader />
        </div>
        <div className="flex flex-col gap-5">
          {Object.entries(variables).map(([name, value]) => (
            <div key={name}>
              <TableRow
                name={name}
                value={value}
                onClick={() => {
                  deleteVariable(name);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
