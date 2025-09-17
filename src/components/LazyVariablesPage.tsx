import React, { Suspense } from 'react';

export const LazyVariablesPage = () => (
  <Suspense fallback={<div>Loading Variables...</div>}>
    {React.createElement(React.lazy(() => import('../pages/variables.tsx')))}
  </Suspense>
);
