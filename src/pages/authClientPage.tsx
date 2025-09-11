import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router';
import { Button } from '@/components/ui/button';
import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function AuthorizedUserPage(): JSX.Element {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;
  return (
    <nav className="p-[5vw]">
      <div className="text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]">
        WELCOME, {user.displayName}
      </div>
      <div className='flex flex-row gap-[2vw]'>
        <NavLink to="/auth/restfull" end>
        <Button variant="custom">Restfull</Button>
      </NavLink>
      <NavLink to="/auth/clientVariales" end>
        <Button variant="custom">Variables</Button>
      </NavLink>
      <NavLink to="/auth/clientHistory" end>
        <Button variant="custom">History</Button>
      </NavLink>
      <Outlet />
      </div>
    </nav>
  );
}
