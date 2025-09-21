const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/RestFullClient-DXzPmPfh.js',
      'assets/chunk-B7RQU5TL-BJE0v3Ur.js',
      'assets/button-B39vLLrY.js',
      'assets/index-CVQxnTqO.js',
      'assets/index-DPaQe_nL.js',
      'assets/index-BEpod36D.js',
      'assets/x-CSwAGfXt.js',
      'assets/useTranslation-CEuFiQrx.js',
      'assets/AuthContext-CUzW9ehr.js',
      'assets/firebase-BROQ1CJd.js',
      'assets/index.esm-BE3Wjq2f.js',
    ])
) => i.map((i) => d[i]);
import { _ as b, u as g } from './AuthContext-CUzW9ehr.js';
import {
  r as d,
  w as C,
  b as T,
  c as x,
  u as y,
  j as i,
  N as U,
} from './chunk-B7RQU5TL-BJE0v3Ur.js';
import { u as j } from './useTranslation-CEuFiQrx.js';
const P = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
function R(e) {
  return Object.fromEntries(
    e.filter((t) => t.enabled && t.key).map((t) => [t.key, t.value])
  );
}
function v(e, t) {
  const r = t.toLowerCase();
  return Object.keys(e).some((o) => o.toLowerCase() === r);
}
function _(e) {
  const t = new TextEncoder().encode(e);
  let r = '';
  for (const o of t) r += String.fromCharCode(o);
  return btoa(r).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
function w(e) {
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
function L({ method: e, url: t, headers: r = {} }) {
  const o = (e || 'GET').toUpperCase(),
    s = _(t || ''),
    a = new URLSearchParams(Object.entries(r).filter(([l]) => !!l)).toString();
  return `/auth/restfull/${o}/${s}${a ? `?${a}` : ''}`;
}
function O(e) {
  return {
    method: (e.method || 'GET').toUpperCase(),
    url: w(e.urlB64),
    headers: Object.fromEntries(new URLSearchParams(e.search || '')),
  };
}
const $ = d.lazy(() =>
    b(
      () => import('./RestFullClient-DXzPmPfh.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    )
  ),
  p = (e) => typeof e == 'string' && P.includes(e.toUpperCase()),
  M = C(function () {
    const { t } = j(),
      { user: r, loading: o } = g(),
      { method: s, urlB64: c } = T(),
      { search: a } = x(),
      l = y(),
      n = d.useMemo(() => O({ method: s, urlB64: c, search: a }), [s, c, a]),
      u = p(n.method) ? n.method : 'GET';
    d.useEffect(() => {
      !o &&
        r &&
        !p(n.method) &&
        l(L({ method: 'GET', url: n.url, headers: n.headers }), {
          replace: !0,
        });
    }, [o, r, n.method, n.url, n.headers, l]);
    const f = d.useCallback(
      ({ method: m }) => {
        const h = m.toUpperCase();
        if (h !== u) {
          const E = `/auth/restfull/${h}${c ? `/${c}` : ''}${a}`;
          l(E, { replace: !0 });
        }
      },
      [l, u, c, a]
    );
    return o
      ? i.jsx('div', { children: t('app.loading') })
      : r
        ? i.jsx('div', {
            className: 'w-full',
            children: i.jsx(d.Suspense, {
              fallback: i.jsx('div', {
                className: 'p-2 text-sm opacity-70',
                children: 'Loading...',
              }),
              children: i.jsx($, { method: u, onChange: f }),
            }),
          })
        : i.jsx(U, { to: '/', replace: !0 });
  });
export { P as D, L as b, v as h, M as r, R as t };
