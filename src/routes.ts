import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes';

export default [
  index('./pages/home.tsx'),

  layout('./pages/layout.tsx', [
    route('mainClint', './pages/authClientPage.tsx'),
    route('singIn', './pages/singIn.tsx'),
    route('singUp', './pages/singUp.tsx'),
    route('auth/clientVariales', './pages/variables.tsx'),
    route('auth/clientHistory', './pages/history.tsx'),
  ]),
] satisfies RouteConfig;
