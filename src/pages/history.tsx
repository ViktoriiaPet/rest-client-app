import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { HistoryComponent } from '../components/History';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function HistoryPage(): JSX.Element {
  const { user, loading } = useAuth();
  const { t } = useTranslation();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="p-[5vw]">
      <div>{t('app.history')}</div>
      <HistoryComponent />
    </div>
  );
}
