import React from 'react';
import { NavLink } from 'react-router';
import { useAuth } from '@/context/AuthContext.tsx';
import type { JSX } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';

export default function HomePage(): JSX.Element {
   const {user} = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
       if (user) {
         void navigate('/mainClint');
       }
     }, [user, navigate]);
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
