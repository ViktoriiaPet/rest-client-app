import {
  w as o,
  r as n,
  j as e,
  N as d,
  a as s,
  O as u,
} from './chunk-B7RQU5TL-BAM8tVsL.js';
import { u as c } from './AuthContext-DbrGQ4pj.js';
import { u as p } from './useTranslation-CbMF285u.js';
const g = o(function () {
  const [a, i] = n.useState(!1),
    { t } = p(),
    { user: r, loading: l } = c();
  return (
    n.useEffect(() => {
      i(!0);
    }, []),
    a
      ? l
        ? e.jsx('div', { children: t('app.loading') })
        : r
          ? e.jsxs('nav', {
              className: 'p-[5vw] text-center flex flex-col items-center gap-3',
              children: [
                e.jsxs('div', {
                  className:
                    'text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]',
                  children: [t('auth.welcome'), ', ', r.displayName],
                }),
                e.jsxs('div', {
                  className: `flex flex-row mb-[3vw] gap-[2vw] items-stretch
                [&>div]:flex-1 [&>div]:basis-0 [&>div]:min-w-0`,
                  children: [
                    e.jsx(s, {
                      className:
                        'bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100',
                      to: '/auth/restfull',
                      end: !0,
                      children: e.jsx('div', {
                        children: t('clientPage.restfull'),
                      }),
                    }),
                    e.jsx(s, {
                      className:
                        'bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100',
                      to: '/auth/clientVariales',
                      end: !0,
                      children: e.jsx('div', {
                        children: t('clientPage.variables'),
                      }),
                    }),
                    e.jsx(s, {
                      className:
                        'bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100',
                      to: '/auth/clientHistory',
                      end: !0,
                      children: e.jsx('div', {
                        children: t('clientPage.history'),
                      }),
                    }),
                  ],
                }),
                e.jsx(u, {}),
              ],
            })
          : e.jsx(d, { to: '/', replace: !0 })
      : null
  );
});
export { g as default };
