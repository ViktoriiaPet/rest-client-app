const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/RestFullClient-BpXDLfFO.js',
      'assets/chunk-B7RQU5TL-DOPFqT0B.js',
      'assets/button-B9xj3Fbv.js',
      'assets/index-DSc-_UGc.js',
      'assets/index-BVdamgSP.js',
      'assets/index-Bi7rVS4R.js',
      'assets/x-DuRsou1H.js',
      'assets/useTranslation-0WW_tMsO.js',
      'assets/AuthContext-B8r0X3Wy.js',
      'assets/firebase-_GfKOiAI.js',
      'assets/index.esm-BE3Wjq2f.js',
      'assets/Loader-DFBC2RZ3.js',
    ])
) => i.map((i) => d[i]);
import { _ as x, u as C } from './AuthContext-B8r0X3Wy.js';
import {
  r as l,
  w as T,
  b as y,
  c as j,
  u as U,
  j as n,
  N as w,
} from './chunk-B7RQU5TL-DOPFqT0B.js';
import { L as P } from './Loader-DFBC2RZ3.js';
import { u as _ } from './useTranslation-0WW_tMsO.js';
const L = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
function N(e) {
  return Object.fromEntries(
    e.filter((t) => t.enabled && t.key).map((t) => [t.key, t.value])
  );
}
function G(e, t) {
  const r = t.toLowerCase();
  return Object.keys(e).some((o) => o.toLowerCase() === r);
}
function O(e) {
  const t = new TextEncoder().encode(e);
  let r = '';
  for (const o of t) r += String.fromCharCode(o);
  return btoa(r).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
function S(e) {
  if (!e) return '';
  const t = e
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(Math.ceil(e.length / 4) * 4, '='),
    r = atob(t),
    o = new Uint8Array(r.length);
  for (let s = 0; s < r.length; s++) o[s] = r.charCodeAt(s);
  return new TextDecoder().decode(o);
}
function $({ method: e, url: t, headers: r = {} }) {
  const o = (e || 'GET').toUpperCase(),
    s = O(t || ''),
    d = new URLSearchParams(Object.entries(r).filter(([c]) => !!c)).toString();
  return `/auth/restfull/${o}/${s}${d ? `?${d}` : ''}`;
}
function D(e) {
  return {
    method: (e.method || 'GET').toUpperCase(),
    url: S(e.urlB64),
    headers: Object.fromEntries(new URLSearchParams(e.search || '')),
  };
}
const v = l.lazy(() =>
    x(
      () => import('./RestFullClient-BpXDLfFO.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    )
  ),
  m = (e) => typeof e == 'string' && L.includes(e.toUpperCase()),
  H = T(function () {
    const { t } = _(),
      [r, o] = l.useState(!1),
      { user: s, loading: u } = C(),
      { method: d, urlB64: c } = y(),
      { search: i } = j(),
      h = U();
    l.useEffect(() => {
      o(!0);
    }, []);
    const a = l.useMemo(
        () => D({ method: d, urlB64: c, search: i }),
        [d, c, i]
      ),
      p = m(a.method) ? a.method : 'GET';
    l.useEffect(() => {
      !u &&
        s &&
        !m(a.method) &&
        h($({ method: 'GET', url: a.url, headers: a.headers }), {
          replace: !0,
        });
    }, [u, s, a.method, a.url, a.headers, h]);
    const g = l.useCallback(
      ({ method: b }) => {
        const f = b.toUpperCase();
        if (f !== p) {
          const E = `/auth/restfull/${f}${c ? `/${c}` : ''}${i}`;
          h(E, { replace: !0 });
        }
      },
      [h, p, c, i]
    );
    return r
      ? u
        ? n.jsx('div', { children: t('app.loading') })
        : s
          ? n.jsx('div', {
              className: 'w-full',
              children: n.jsx(l.Suspense, {
                fallback: n.jsxs('div', {
                  className:
                    'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
                  children: [t('app.loading'), ' ', n.jsx(P, {})],
                }),
                children: n.jsx(v, { method: p, onChange: g }),
              }),
            })
          : n.jsx(w, { to: '/', replace: !0 })
      : n.jsx(n.Fragment, {});
  });
export { L as D, $ as b, G as h, H as r, N as t };
