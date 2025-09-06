
import React from 'react';
import { Link } from 'react-router';

import type { JSX } from 'react';

export default function Footer(): JSX.Element {

  return (
    <div className="flex flex-row justify-around fixed bottom-0 left-0 w-full ">
      <Link to="https://github.com/ViktoriiaPet/rest-client-app">
        <div>GitHub</div>
      </Link>
      <div>2025</div>
      <Link to="https://rs.school/">
        <div>Logo</div>
      </Link>
    </div>
  );
}
