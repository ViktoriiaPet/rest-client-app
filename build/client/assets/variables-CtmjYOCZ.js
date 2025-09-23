const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/TableRow-ZeZGM2YU.js',
      'assets/chunk-B7RQU5TL-DOPFqT0B.js',
      'assets/button-B9xj3Fbv.js',
      'assets/useTranslation-0WW_tMsO.js',
      'assets/VariablesAddBar-BnIw3FNj.js',
    ])
) => i.map((i) => d[i]);
import { _ as l, u as j } from './AuthContext-B8r0X3Wy.js';
import {
  R as n,
  w as b,
  r as i,
  j as e,
  N as v,
} from './chunk-B7RQU5TL-DOPFqT0B.js';
import { u as _ } from './VariablesContext-BypoBErZ.js';
import { L as g } from './Loader-DFBC2RZ3.js';
import { u as V } from './useTranslation-0WW_tMsO.js';
const h = n.lazy(() =>
    l(() => import('./TableRow-ZeZGM2YU.js'), __vite__mapDeps([0, 1, 2, 3]))
  ),
  E = n.lazy(() =>
    l(
      () => import('./VariablesAddBar-BnIw3FNj.js'),
      __vite__mapDeps([4, 1, 2, 3])
    )
  ),
  L = b(function () {
    const { t: c } = V(),
      { user: d, loading: u } = j(),
      { variables: t, setVariables: o } = _(),
      [m, f] = i.useState(!1);
    i.useEffect(() => {
      f(!0);
    }, []);
    const p = (s) => {
        const r = Object.fromEntries(
          Object.entries(t).filter(([a]) => a !== s)
        );
        o(r);
      },
      x = (s, r) => {
        const a = { ...t, [s]: r };
        o(a);
      };
    return m
      ? u
        ? e.jsx('div', { children: c('app.loading') })
        : d
          ? e.jsx('div', {
              className:
                'p-[5vw] flex flex-col align-middle justify-center items-centerl',
              children: e.jsx('div', {
                children: e.jsxs(i.Suspense, {
                  fallback: e.jsx(g, {}),
                  children: [
                    e.jsx('div', {
                      className:
                        'grid grid-cols-3 gap-4 mb-4 items-center  w-ful',
                      children: e.jsx(E, { onAdd: x }),
                    }),
                    e.jsx('div', {
                      className: 'flex flex-col gap-5',
                      children: Object.entries(t).map(([s, r]) =>
                        e.jsx(
                          'div',
                          {
                            children: e.jsx(h, {
                              name: s,
                              value: r,
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
            })
          : e.jsx(v, { to: '/', replace: !0 })
      : e.jsx(e.Fragment, {});
  });
export { L as default };
