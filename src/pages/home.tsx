import React from 'react';
import { NavLink } from 'react-router';

import type { JSX } from 'react';

import { Button } from '@/components/ui/button';

export default function HomePage(): JSX.Element {
  return (
    <div className="p-[5vw]">
      <div>Start Page (Welcome)</div>
      <div className="flex flex-row gap-[5vw]">
        <NavLink to="/signIn" end>
          <Button variant="custom">Sign In</Button>
        </NavLink>
        <NavLink to="/signUp" end>
          <Button variant="custom">Sign Up</Button>
        </NavLink>
      </div>
    </div>
  );
}
