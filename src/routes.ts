import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes';

import PrivateRoute from '@/components/PrivateRoute';

export default [
  index('./pages/home.tsx'),

  layout('./layouts/layout.tsx', [
    route('mainClint', './pages/authClientPage.tsx'),
    route('signIn', './pages/signIn.tsx'),
    route('signUp', './pages/signUp.tsx'),
    route('auth/clientVariales', './pages/variables.tsx'),
    route('auth/clientHistory', './pages/history.tsx'),
    route('*', './pages/notFound.tsx'),
  ]),
] satisfies RouteConfig;
