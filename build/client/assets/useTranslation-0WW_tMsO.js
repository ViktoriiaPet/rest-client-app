import { r as d } from './chunk-B7RQU5TL-DOPFqT0B.js';
const k = (e, t, s, a) => {
    const o = [s, { code: t, ...(a || {}) }];
    if (e?.services?.logger?.forward)
      return e.services.logger.forward(o, 'warn', 'react-i18next::', !0);
    (g(o[0]) && (o[0] = `react-i18next:: ${o[0]}`),
      e?.services?.logger?.warn
        ? e.services.logger.warn(...o)
        : console?.warn && console.warn(...o));
  },
  R = {},
  b = (e, t, s, a) => {
    (g(s) && R[s]) || (g(s) && (R[s] = new Date()), k(e, t, s, a));
  },
  z = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const s = () => {
        (setTimeout(() => {
          e.off('initialized', s);
        }, 0),
          t());
      };
      e.on('initialized', s);
    }
  },
  x = (e, t, s) => {
    e.loadNamespaces(t, z(e, s));
  },
  v = (e, t, s, a) => {
    if (
      (g(s) && (s = [s]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return x(e, s, a);
    (s.forEach((o) => {
      e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }),
      e.loadLanguages(t, z(e, a)));
  },
  P = (e, t, s = {}) =>
    !t.languages || !t.languages.length
      ? (b(t, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: s.lng,
          precheck: (a, o) => {
            if (
              s.bindI18n &&
              s.bindI18n.indexOf('languageChanging') > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !o(a.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  K = (e) => e.displayName || e.name || (g(e) && e.length > 0 ? e : 'Unknown'),
  g = (e) => typeof e == 'string',
  U = (e) => typeof e == 'object' && e !== null,
  j =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  H = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  M = (e) => H[e],
  _ = (e) => e.replace(j, M);
let E = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: _,
};
const X = (e = {}) => {
    E = { ...E, ...e };
  },
  G = () => E;
let F;
const Y = (e) => {
    F = e;
  },
  $ = () => F,
  q = d.createContext();
class B {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const D = (e, t) => {
    const s = d.useRef();
    return (
      d.useEffect(() => {
        s.current = e;
      }, [e, t]),
      s.current
    );
  },
  L = (e, t, s, a) => e.getFixedT(t, s, a),
  W = (e, t, s, a) => d.useCallback(L(e, t, s, a), [e, t, s, a]),
  Q = (e, t = {}) => {
    const { i18n: s } = t,
      { i18n: a, defaultNS: o } = d.useContext(q) || {},
      n = s || a || $();
    if ((n && !n.reportNamespaces && (n.reportNamespaces = new B()), !n)) {
      b(
        n,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next'
      );
      const i = (l, u) =>
          g(u)
            ? u
            : U(u) && g(u.defaultValue)
              ? u.defaultValue
              : Array.isArray(l)
                ? l[l.length - 1]
                : l,
        c = [i, {}, !1];
      return ((c.t = i), (c.i18n = {}), (c.ready = !1), c);
    }
    n.options.react?.wait &&
      b(
        n,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const N = { ...G(), ...n.options.react, ...t },
      { useSuspense: S, keyPrefix: T } = N;
    let r = o || n.options?.defaultNS;
    ((r = g(r) ? [r] : r || ['translation']),
      n.reportNamespaces.addUsedNamespaces?.(r));
    const f =
        (n.isInitialized || n.initializedStoreOnce) &&
        r.every((i) => P(i, n, N)),
      A = W(n, t.lng || null, N.nsMode === 'fallback' ? r : r[0], T),
      I = () => A,
      w = () => L(n, t.lng || null, N.nsMode === 'fallback' ? r : r[0], T),
      [C, m] = d.useState(I);
    let h = r.join();
    t.lng && (h = `${t.lng}${h}`);
    const O = D(h),
      p = d.useRef(!0);
    (d.useEffect(() => {
      const { bindI18n: i, bindI18nStore: c } = N;
      ((p.current = !0),
        !f &&
          !S &&
          (t.lng
            ? v(n, t.lng, r, () => {
                p.current && m(w);
              })
            : x(n, r, () => {
                p.current && m(w);
              })),
        f && O && O !== h && p.current && m(w));
      const l = () => {
        p.current && m(w);
      };
      return (
        i && n?.on(i, l),
        c && n?.store.on(c, l),
        () => {
          ((p.current = !1),
            n && i && i?.split(' ').forEach((u) => n.off(u, l)),
            c && n && c.split(' ').forEach((u) => n.store.off(u, l)));
        }
      );
    }, [n, h]),
      d.useEffect(() => {
        p.current && f && m(I);
      }, [n, T, f]));
    const y = [C, n, f];
    if (((y.t = C), (y.i18n = n), (y.ready = f), f || (!f && !S))) return y;
    throw new Promise((i) => {
      t.lng ? v(n, t.lng, r, () => i()) : x(n, r, () => i());
    });
  };
export { Y as a, K as g, X as s, Q as u };
