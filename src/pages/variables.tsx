import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import type { JSX } from 'react';

export default function VariablesPage(): JSX.Element {

    const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/signIn" replace />;


  return <div className="p-[5vw]">Variables page</div>;
}
