import React from 'react';
import { NavLink } from 'react-router';

import type { JSX } from 'react';

export default function HomePage(): JSX.Element {
  return (
    <div className="p-[5vw]">
      <div>Start Page (Welcome)</div>
      <div className="flex flex-row gap-[5vw]">
        <NavLink to="/singIn" end>
          <button>Sing In</button>
        </NavLink>
        <NavLink to="/singUp" end>
          <button>Sing Up</button>
        </NavLink>
      </div>
    </div>
  );
}
