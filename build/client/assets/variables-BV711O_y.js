const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/TableRow-DzR5qJZG.js',
      'assets/chunk-B7RQU5TL-BAM8tVsL.js',
      'assets/button-DEmol27v.js',
      'assets/useTranslation-CbMF285u.js',
      'assets/TableHeader-lwdtHj15.js',
      'assets/VariablesAddBar-C-OPnt8_.js',
    ])
) => i.map((i) => d[i]);
import { _ as l, u as j } from './AuthContext-DbrGQ4pj.js';
import {
  R as o,
  w as b,
  r as i,
  j as e,
  N as v,
} from './chunk-B7RQU5TL-BAM8tVsL.js';
import { u as _ } from './VariablesContext-D9rWs1hi.js';
import { L as g } from './Loader-KYBo_zvB.js';
import { u as V } from './useTranslation-CbMF285u.js';
const h = o.lazy(() =>
    l(() => import('./TableRow-DzR5qJZG.js'), __vite__mapDeps([0, 1, 2, 3]))
  ),
  E = o.lazy(() =>
    l(() => import('./TableHeader-lwdtHj15.js'), __vite__mapDeps([4, 1, 3]))
  ),
  w = o.lazy(() =>
    l(
      () => import('./VariablesAddBar-C-OPnt8_.js'),
      __vite__mapDeps([5, 1, 2, 3])
    )
  ),
  L = b(function () {
    const { t: n } = V(),
      { user: d, loading: u } = j(),
      { variables: a, setVariables: c } = _(),
      [m, p] = i.useState(!1);
    i.useEffect(() => {
      p(!0);
    }, []);
    const x = (s) => {
        const t = Object.fromEntries(
          Object.entries(a).filter(([r]) => r !== s)
        );
        c(t);
      },
      f = (s, t) => {
        const r = { ...a, [s]: t };
        c(r);
      };
    return m
      ? u
        ? e.jsx('div', { children: n('app.loading') })
        : d
          ? e.jsxs('div', {
              className:
                'p-[5vw] flex flex-col align-middle justify-center items-center',
              children: [
                e.jsx('div', {
                  className:
                    'text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]',
                  children: n('variables.title'),
                }),
                e.jsx('div', {
                  children: e.jsxs(i.Suspense, {
                    fallback: e.jsx(g, {}),
                    children: [
                      e.jsxs('div', {
                        className: 'grid grid-cols-3 gap-4 mb-4 items-center',
                        children: [e.jsx(E, {}), e.jsx(w, { onAdd: f })],
                      }),
                      e.jsx('div', {
                        className: 'flex flex-col gap-5',
                        children: Object.entries(a).map(([s, t]) =>
                          e.jsx(
                            'div',
                            {
                              children: e.jsx(h, {
                                name: s,
                                value: t,
                                onClick: () => x(s),
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
          : e.jsx(v, { to: '/', replace: !0 })
      : e.jsx(e.Fragment, {});
  });
export { L as default };
