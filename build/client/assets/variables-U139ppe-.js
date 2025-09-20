const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/TableRow-C24h6VdH.js',
      'assets/chunk-B7RQU5TL-BJE0v3Ur.js',
      'assets/button-B39vLLrY.js',
      'assets/useTranslation-CEuFiQrx.js',
      'assets/TableHeader-BH6tPQ2w.js',
      'assets/VariablesAddBar-8mBpmIP2.js',
    ])
) => i.map((i) => d[i]);
import { _ as i, u } from './AuthContext-CUzW9ehr.js';
import {
  R as l,
  w as m,
  j as e,
  N as b,
  r as j,
} from './chunk-B7RQU5TL-BJE0v3Ur.js';
import { u as v } from './VariablesContext-Bs1XEHzk.js';
import { u as _ } from './useTranslation-CEuFiQrx.js';
const f = l.lazy(() =>
    i(() => import('./TableRow-C24h6VdH.js'), __vite__mapDeps([0, 1, 2, 3]))
  ),
  g = l.lazy(() =>
    i(() => import('./TableHeader-BH6tPQ2w.js'), __vite__mapDeps([4, 1, 3]))
  ),
  V = l.lazy(() =>
    i(
      () => import('./VariablesAddBar-8mBpmIP2.js'),
      __vite__mapDeps([5, 1, 2, 3])
    )
  ),
  N = m(function () {
    const { t: o } = _(),
      { user: c, loading: d } = u(),
      { variables: r, setVariables: n } = v(),
      p = (s) => {
        const a = Object.fromEntries(
          Object.entries(r).filter(([t]) => t !== s)
        );
        n(a);
      },
      x = (s, a) => {
        const t = { ...r, [s]: a };
        n(t);
      };
    return d
      ? e.jsx('div', { children: o('app.loading') })
      : c
        ? e.jsxs('div', {
            className:
              'p-[5vw] flex flex-col align-middle justify-center items-center',
            children: [
              e.jsx('div', {
                className:
                  'text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]',
                children: o('variables.title'),
              }),
              e.jsx('div', {
                children: e.jsxs(j.Suspense, {
                  fallback: 'loading...',
                  children: [
                    e.jsxs('div', {
                      className: 'grid grid-cols-3 gap-4 items-center',
                      children: [e.jsx(V, { onAdd: x }), e.jsx(g, {})],
                    }),
                    e.jsx('div', {
                      className: 'flex flex-col gap-5',
                      children: Object.entries(r).map(([s, a]) =>
                        e.jsx(
                          'div',
                          {
                            children: e.jsx(f, {
                              name: s,
                              value: a,
                              onClick: () => p(s),
                            }),
                          },
                          s
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          })
        : e.jsx(b, { to: '/', replace: !0 });
  });
export { N as default };
