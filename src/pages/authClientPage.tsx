import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function AuthorizedUserPage(): JSX.Element {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/signIn" replace />;

  return (
    <nav className="p-[5vw]">
      <NavLink to="/auth/clientVariales" end>
        <div>Variables</div>
      </NavLink>
      <NavLink to="/auth/clientHistory" end>
        <div>History</div>
      </NavLink>
      <Outlet />
    </nav>
  );
}
