const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['assets/firebase-yRvBWTGt.js', 'assets/index.esm-DEVYYNpo.js'])
) => i.map((i) => d[i]);
import { r as a, j as P } from './chunk-PVWAREVJ-DHjQzAty.js';
const _ = 'modulepreload',
  y = function (c) {
    return '/' + c;
  },
  m = {},
  v = function (d, u, f) {
    let i = Promise.resolve();
    if (u && u.length > 0) {
      let h = function (n) {
        return Promise.all(
          n.map((e) =>
            Promise.resolve(e).then(
              (r) => ({ status: 'fulfilled', value: r }),
              (r) => ({ status: 'rejected', reason: r })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const o = document.querySelector('meta[property=csp-nonce]'),
        t = o?.nonce || o?.getAttribute('nonce');
      i = h(
        u.map((n) => {
          if (((n = y(n)), n in m)) return;
          m[n] = !0;
          const e = n.endsWith('.css'),
            r = e ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${n}"]${r}`)) return;
          const s = document.createElement('link');
          if (
            ((s.rel = e ? 'stylesheet' : _),
            e || (s.as = 'script'),
            (s.crossOrigin = ''),
            (s.href = n),
            t && s.setAttribute('nonce', t),
            document.head.appendChild(s),
            e)
          )
            return new Promise((E, p) => {
              (s.addEventListener('load', E),
                s.addEventListener('error', () =>
                  p(new Error(`Unable to preload CSS for ${n}`))
                ));
            });
        })
      );
    }
    function l(o) {
      const t = new Event('vite:preloadError', { cancelable: !0 });
      if (((t.payload = o), window.dispatchEvent(t), !t.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const t of o || []) t.status === 'rejected' && l(t.reason);
      return d().catch(l);
    });
  },
  w = a.createContext({
    user: null,
    token: null,
    loading: !0,
    setUser: () => {
      throw new Error('setUser must be used within AuthProvider');
    },
    setToken: () => {
      throw new Error('setUser must be used within AuthProvider');
    },
  }),
  g = ({ children: c }) => {
    const [d, u] = a.useState(null),
      [f, i] = a.useState(null),
      [l, o] = a.useState(!0);
    return (
      a.useEffect(() => {
        if (typeof window > 'u') return;
        let t;
        return (
          (async () => {
            const { auth: h } = await v(
                async () => {
                  const { auth: e } = await import(
                    './firebase-yRvBWTGt.js'
                  ).then((r) => r.f);
                  return { auth: e };
                },
                __vite__mapDeps([0, 1])
              ),
              { onAuthStateChanged: n } = await v(async () => {
                const { onAuthStateChanged: e } = await import(
                  './index.esm-DEVYYNpo.js'
                ).then((r) => r.v);
                return { onAuthStateChanged: e };
              }, []);
            t = n(h, (e) => {
              (async () => {
                if (e) {
                  u(e);
                  const r = await e.getIdToken();
                  i(r);
                } else (u(null), i(null));
                o(!1);
              })();
            });
          })(),
          () => {
            t && t();
          }
        );
      }, []),
      P.jsx(w.Provider, {
        value: { user: d, token: f, loading: l, setUser: u, setToken: i },
        children: c,
      })
    );
  },
  S = () => a.useContext(w);
export { g as A, v as _, S as u };
