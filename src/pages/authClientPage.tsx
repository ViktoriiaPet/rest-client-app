
import React from 'react';
import { NavLink, Outlet } from 'react-router';

import type { JSX } from 'react';

export default function AuthorizedUserPage(): JSX.Element {
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
