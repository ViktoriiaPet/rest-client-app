import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';

export default function HistoryPage(): JSX.Element {

    const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/signIn" replace />;

  return <div className="p-[5vw]">History page</div>;
}
