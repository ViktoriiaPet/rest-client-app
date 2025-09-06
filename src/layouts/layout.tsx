
import React from 'react';
import { Outlet } from 'react-router';

import type { JSX } from 'react';

export default function Root(): JSX.Element {
  return <Outlet />;
}
