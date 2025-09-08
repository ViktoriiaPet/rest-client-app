import React from 'react';
import { Navigate } from 'react-router-dom';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function HistoryPage(): JSX.Element {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return <div className="p-[5vw]">History page</div>;
}
