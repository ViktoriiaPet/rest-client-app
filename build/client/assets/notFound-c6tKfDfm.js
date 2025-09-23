import {
  w as r,
  u as l,
  r as s,
  j as e,
  L as c,
} from './chunk-B7RQU5TL-DOPFqT0B.js';
import { u as i } from './useTranslation-0WW_tMsO.js';
const x = r(function () {
  const o = l(),
    { t } = i(),
    [n, a] = s.useState(!1);
  return (
    s.useEffect(() => {
      a(!0);
    }, []),
    n
      ? e.jsx('main', {
          className: 'grid min-h-[80svh] place-items-center px-4',
          children: e.jsxs('section', {
            className: 'mx-auto max-w-xl p-8 text-center space-y-4',
            children: [
              e.jsx('img', {
                src: '/ice-cream.svg',
                alt: 'not-found',
                className: 'mx-auto w-80 h-80',
              }),
              e.jsx('h2', {
                className: 'text-3xl font-bold',
                children: t('notFound.title'),
              }),
              e.jsx('p', {
                className: 'opacity-80',
                children: t('notFound.description'),
              }),
              e.jsxs('div', {
                className: 'flex gap-3 justify-center',
                children: [
                  e.jsx('button', {
                    className:
                      'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
                    onClick: () => o(-1),
                    children: t('notFound.back'),
                  }),
                  e.jsx(c, {
                    className:
                      'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
                    to: '/',
                    children: t('notFound.home'),
                  }),
                ],
              }),
            ],
          }),
        })
      : e.jsx(e.Fragment, {})
  );
});
export { x as default };
