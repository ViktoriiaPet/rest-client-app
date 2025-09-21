import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';
import { useVariables } from '@/context/VariablesContext';
import { Loader } from '@/components/Loader';
const TableRow = React.lazy(() => import('@/components/TableRow'));
const VariablesAddBar = React.lazy(
  () => import('@/components/VariablesAddBar')
);

export default function VariablesPage(): JSX.Element {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const { variables, setVariables } = useVariables();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const deleteVariable = (key: string) => {
    const newVariables = Object.fromEntries(
      Object.entries(variables).filter(([k]) => k !== key)
    );
    setVariables(newVariables);
  };

  const addVariable = (key: string, value: string) => {
    const newVariables = { ...variables, [key]: value };
    setVariables(newVariables);
  };
  if (!mounted) return <></>;
  if (loading) return <div>{t('app.loading')}</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="p-[5vw] flex flex-col align-middle justify-center items-centerl">
      <div>
        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-3 gap-4 mb-4 items-center  w-ful">
            <VariablesAddBar onAdd={addVariable} />
          </div>
          <div className="flex flex-col gap-5">
            {Object.entries(variables).map(([name, value]) => (
              <div key={name}>
                <TableRow
                  name={name}
                  value={value}
                  onClick={() => deleteVariable(name)}
                />
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
