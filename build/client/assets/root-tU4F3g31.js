const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['assets/firebase-_GfKOiAI.js', 'assets/index.esm-BE3Wjq2f.js'])
) => i.map((i) => d[i]);
import {
  e as gt,
  r as h,
  j as l,
  u as Be,
  a as z,
  w as mt,
  M as yt,
  B as wt,
  O as bt,
  S as vt,
} from './chunk-B7RQU5TL-DOPFqT0B.js';
import { u as xt, _ as St, A as kt } from './AuthContext-B8r0X3Wy.js';
import { i as _t } from './firebase-_GfKOiAI.js';
import { V as Ct } from './VariablesContext-BypoBErZ.js';
import { i as Et } from './i18next-Bhq85MQn.js';
import {
  s as Rt,
  a as Pt,
  g as jt,
  u as J,
} from './useTranslation-0WW_tMsO.js';
import { a as At, c as Tt, P as Ue, b as Ot } from './index-DSc-_UGc.js';
import { u as $e, a as be, B as ve } from './button-B9xj3Fbv.js';
import { u as Nt, a as Dt } from './index-Bi7rVS4R.js';
import { S as xe } from './SignButton-CNXYMYwp.js';
import './index.esm-BE3Wjq2f.js';
import './index-BVdamgSP.js';
var re = { exports: {} },
  oe = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se;
function It() {
  if (Se) return oe;
  Se = 1;
  var e = gt();
  function t(c, f) {
    return (c === f && (c !== 0 || 1 / c === 1 / f)) || (c !== c && f !== f);
  }
  var n = typeof Object.is == 'function' ? Object.is : t,
    r = e.useSyncExternalStore,
    o = e.useRef,
    i = e.useEffect,
    s = e.useMemo,
    a = e.useDebugValue;
  return (
    (oe.useSyncExternalStoreWithSelector = function (c, f, u, d, g) {
      var y = o(null);
      if (y.current === null) {
        var m = { hasValue: !1, value: null };
        y.current = m;
      } else m = y.current;
      y = s(
        function () {
          function b(v) {
            if (!x) {
              if (((x = !0), (k = v), (v = d(v)), g !== void 0 && m.hasValue)) {
                var C = m.value;
                if (g(C, v)) return (p = C);
              }
              return (p = v);
            }
            if (((C = p), n(k, v))) return C;
            var R = d(v);
            return g !== void 0 && g(C, R) ? ((k = v), C) : ((k = v), (p = R));
          }
          var x = !1,
            k,
            p,
            w = u === void 0 ? null : u;
          return [
            function () {
              return b(f());
            },
            w === null
              ? void 0
              : function () {
                  return b(w());
                },
          ];
        },
        [f, u, d, g]
      );
      var S = r(c, y[0], y[1]);
      return (
        i(
          function () {
            ((m.hasValue = !0), (m.value = S));
          },
          [S]
        ),
        a(S),
        S
      );
    }),
    oe
  );
}
var ke;
function Lt() {
  return (ke || ((ke = 1), (re.exports = It())), re.exports);
}
var Mt = Lt();
function Ft(e) {
  e();
}
function Bt() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      Ft(() => {
        let n = e;
        for (; n; ) (n.callback(), (n = n.next));
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) (n.push(r), (r = r.next));
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var _e = { notify() {}, get: () => [] };
function Ut(e, t) {
  let n,
    r = _e,
    o = 0,
    i = !1;
  function s(S) {
    u();
    const b = r.subscribe(S);
    let x = !1;
    return () => {
      x || ((x = !0), b(), d());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function f() {
    return i;
  }
  function u() {
    (o++, n || ((n = e.subscribe(c)), (r = Bt())));
  }
  function d() {
    (o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = _e)));
  }
  function g() {
    i || ((i = !0), u());
  }
  function y() {
    i && ((i = !1), d());
  }
  const m = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: f,
    trySubscribe: g,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return m;
}
var $t = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Ht = $t(),
  zt = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  Vt = zt(),
  qt = () => (Ht || Vt ? h.useLayoutEffect : h.useEffect),
  Wt = qt(),
  Gt = Symbol.for('react-redux-context'),
  Kt = typeof globalThis < 'u' ? globalThis : {};
function Xt() {
  if (!h.createContext) return {};
  const e = (Kt[Gt] ??= new Map());
  let t = e.get(h.createContext);
  return (t || ((t = h.createContext(null)), e.set(h.createContext, t)), t);
}
var O = Xt();
function Qt(e) {
  const { children: t, context: n, serverState: r, store: o } = e,
    i = h.useMemo(() => {
      const c = Ut(o);
      return {
        store: o,
        subscription: c,
        getServerState: r ? () => r : void 0,
      };
    }, [o, r]),
    s = h.useMemo(() => o.getState(), [o]);
  Wt(() => {
    const { subscription: c } = i;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      s !== o.getState() && c.notifyNestedSubs(),
      () => {
        (c.tryUnsubscribe(), (c.onStateChange = void 0));
      }
    );
  }, [i, s]);
  const a = n || O;
  return h.createElement(a.Provider, { value: i }, t);
}
var Zt = Qt;
function pe(e = O) {
  return function () {
    return h.useContext(e);
  };
}
var He = pe();
function ze(e = O) {
  const t = e === O ? He : pe(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return (Object.assign(n, { withTypes: () => n }), n);
}
var Jt = ze();
function Yt(e = O) {
  const t = e === O ? Jt : ze(e),
    n = () => t().dispatch;
  return (Object.assign(n, { withTypes: () => n }), n);
}
var en = Yt(),
  tn = (e, t) => e === t;
function nn(e = O) {
  const t = e === O ? He : pe(e),
    n = (r, o = {}) => {
      const { equalityFn: i = tn } =
          typeof o == 'function' ? { equalityFn: o } : o,
        s = t(),
        { store: a, subscription: c, getServerState: f } = s;
      h.useRef(!0);
      const u = h.useCallback(
          {
            [r.name](g) {
              return r(g);
            },
          }[r.name],
          [r]
        ),
        d = Mt.useSyncExternalStoreWithSelector(
          c.addNestedSub,
          a.getState,
          f || a.getState,
          u,
          i
        );
      return (h.useDebugValue(d), d);
    };
  return (Object.assign(n, { withTypes: () => n }), n);
}
var rn = nn();
const { slice: on, forEach: sn } = [];
function an(e) {
  return (
    sn.call(on.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
function cn(e) {
  return typeof e != 'string'
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((n) => n.test(e));
}
const Ce = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  un = function (e, t) {
    const r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: '/' },
      o = encodeURIComponent(t);
    let i = `${e}=${o}`;
    if (r.maxAge > 0) {
      const s = r.maxAge - 0;
      if (Number.isNaN(s)) throw new Error('maxAge should be a Number');
      i += `; Max-Age=${Math.floor(s)}`;
    }
    if (r.domain) {
      if (!Ce.test(r.domain)) throw new TypeError('option domain is invalid');
      i += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!Ce.test(r.path)) throw new TypeError('option path is invalid');
      i += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      i += `; Expires=${r.expires.toUTCString()}`;
    }
    if (
      (r.httpOnly && (i += '; HttpOnly'),
      r.secure && (i += '; Secure'),
      r.sameSite)
    )
      switch (
        typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
          i += '; SameSite=Strict';
          break;
        case 'lax':
          i += '; SameSite=Lax';
          break;
        case 'strict':
          i += '; SameSite=Strict';
          break;
        case 'none':
          i += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    return (r.partitioned && (i += '; Partitioned'), i);
  },
  Ee = {
    create(e, t, n, r) {
      let o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      (n &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)),
        r && (o.domain = r),
        (document.cookie = un(e, t, o)));
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(';');
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        for (; o.charAt(0) === ' '; ) o = o.substring(1, o.length);
        if (o.indexOf(t) === 0) return o.substring(t.length, o.length);
      }
      return null;
    },
    remove(e, t) {
      this.create(e, '', -1, t);
    },
  };
var ln = {
    name: 'cookie',
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < 'u') return Ee.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: o,
        cookieOptions: i,
      } = t;
      n && typeof document < 'u' && Ee.create(n, e, r, o, i);
    },
  },
  fn = {
    name: 'querystring',
    lookup(e) {
      let { lookupQuerystring: t } = e,
        n;
      if (typeof window < 'u') {
        let { search: r } = window.location;
        !window.location.search &&
          window.location.hash?.indexOf('?') > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf('?')
          ));
        const i = r.substring(1).split('&');
        for (let s = 0; s < i.length; s++) {
          const a = i[s].indexOf('=');
          a > 0 && i[s].substring(0, a) === t && (n = i[s].substring(a + 1));
        }
      }
      return n;
    },
  },
  dn = {
    name: 'hash',
    lookup(e) {
      let { lookupHash: t, lookupFromHashIndex: n } = e,
        r;
      if (typeof window < 'u') {
        const { hash: o } = window.location;
        if (o && o.length > 2) {
          const i = o.substring(1);
          if (t) {
            const s = i.split('&');
            for (let a = 0; a < s.length; a++) {
              const c = s[a].indexOf('=');
              c > 0 &&
                s[a].substring(0, c) === t &&
                (r = s[a].substring(c + 1));
            }
          }
          if (r) return r;
          if (!r && n > -1) {
            const s = o.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(s)
              ? s[typeof n == 'number' ? n : 0]?.replace('/', '')
              : void 0;
          }
        }
      }
      return r;
    },
  };
let L = null;
const Re = () => {
  if (L !== null) return L;
  try {
    if (((L = typeof window < 'u' && window.localStorage !== null), !L))
      return !1;
    const e = 'i18next.translate.boo';
    (window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e));
  } catch {
    L = !1;
  }
  return L;
};
var hn = {
  name: 'localStorage',
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && Re()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t;
    n && Re() && window.localStorage.setItem(n, e);
  },
};
let M = null;
const Pe = () => {
  if (M !== null) return M;
  try {
    if (((M = typeof window < 'u' && window.sessionStorage !== null), !M))
      return !1;
    const e = 'i18next.translate.boo';
    (window.sessionStorage.setItem(e, 'foo'),
      window.sessionStorage.removeItem(e));
  } catch {
    M = !1;
  }
  return M;
};
var pn = {
    name: 'sessionStorage',
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && Pe()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && Pe() && window.sessionStorage.setItem(n, e);
    },
  },
  gn = {
    name: 'navigator',
    lookup(e) {
      const t = [];
      if (typeof navigator < 'u') {
        const { languages: n, userLanguage: r, language: o } = navigator;
        if (n) for (let i = 0; i < n.length; i++) t.push(n[i]);
        (r && t.push(r), o && t.push(o));
      }
      return t.length > 0 ? t : void 0;
    },
  },
  mn = {
    name: 'htmlTag',
    lookup(e) {
      let { htmlTag: t } = e,
        n;
      const r = t || (typeof document < 'u' ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == 'function' &&
          (n = r.getAttribute('lang')),
        n
      );
    },
  },
  yn = {
    name: 'path',
    lookup(e) {
      let { lookupFromPathIndex: t } = e;
      if (typeof window > 'u') return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n)
        ? n[typeof t == 'number' ? t : 0]?.replace('/', '')
        : void 0;
    },
  },
  wn = {
    name: 'subdomain',
    lookup(e) {
      let { lookupFromSubdomainIndex: t } = e;
      const n = typeof t == 'number' ? t + 1 : 1,
        r =
          typeof window < 'u' &&
          window.location?.hostname?.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (r) return r[n];
    },
  };
let Ve = !1;
try {
  (document.cookie, (Ve = !0));
} catch {}
const qe = [
  'querystring',
  'cookie',
  'localStorage',
  'sessionStorage',
  'navigator',
  'htmlTag',
];
Ve || qe.splice(1, 1);
const bn = () => ({
  order: qe,
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  convertDetectedLanguage: (e) => e,
});
class We {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.type = 'languageDetector'), (this.detectors = {}), this.init(t, n));
  }
  init() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ((this.services = t),
      (this.options = an(n, this.options || {}, bn())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (o) => o.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(ln),
      this.addDetector(fn),
      this.addDetector(hn),
      this.addDetector(pn),
      this.addDetector(gn),
      this.addDetector(mn),
      this.addDetector(yn),
      this.addDetector(wn),
      this.addDetector(dn));
  }
  addDetector(t) {
    return ((this.detectors[t.name] = t), this);
  }
  detect() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      n = [];
    return (
      t.forEach((r) => {
        if (this.detectors[r]) {
          let o = this.detectors[r].lookup(this.options);
          (o && typeof o == 'string' && (o = [o]), o && (n = n.concat(o)));
        }
      }),
      (n = n
        .filter((r) => r != null && !cn(r))
        .map((r) => this.options.convertDetectedLanguage(r))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
          ? n[0]
          : null
    );
  }
  cacheUserLanguage(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    n &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(t) > -1) ||
        n.forEach((r) => {
          this.detectors[r] &&
            this.detectors[r].cacheUserLanguage(t, this.options);
        }));
  }
}
We.type = 'languageDetector';
const vn = {
    type: '3rdParty',
    init(e) {
      (Rt(e.options.react), Pt(e));
    },
  },
  xn = (e, t = {}) =>
    function (r) {
      function o({ forwardedRef: s, ...a }) {
        const [c, f, u] = J(e, { ...a, keyPrefix: t.keyPrefix }),
          d = { ...a, t: c, i18n: f, tReady: u };
        return (
          t.withRef && s
            ? (d.ref = s)
            : !t.withRef && s && (d.forwardedRef = s),
          h.createElement(r, d)
        );
      }
      ((o.displayName = `withI18nextTranslation(${jt(r)})`),
        (o.WrappedComponent = r));
      const i = (s, a) =>
        h.createElement(o, Object.assign({}, s, { forwardedRef: a }));
      return t.withRef ? h.forwardRef(i) : o;
    },
  Sn = {
    signIn: 'Sign in',
    signUp: 'Sign up',
    welcome: 'Welcome',
    welcomeBack: 'Welcome Back',
    isAccount: 'Already have an account?',
    logOut: 'Log Out',
  },
  kn = { name: 'Name', email: 'Email', password: 'Password', submit: 'Submit' },
  _n = { english: 'English', russian: 'Russian' },
  Cn = {
    title: 'RESTClient',
    history: 'History',
    historyRequests: 'History Requests',
    variables: 'Variables',
    mainPage: 'Main page',
    github: 'Github',
    loading: 'Loading',
  },
  En = {
    method: 'Method',
    endpointUrl: 'Endpoint URL',
    headers: 'Headers',
    headerKey: 'Header Key',
    headerValue: 'Header Value',
    code: 'Code',
    body: 'Body',
    response: 'Response',
    status: 'Status',
    copyJSON: 'Copy JSON',
    params: 'Params',
    addParam: 'Add param',
    addHeader: 'Add header',
    addField: 'Add field',
    rawBody: 'Raw body',
    invalidUrl: 'Invalid URL',
  },
  Rn = {
    noRequests: "You haven't executed any requests",
    hint: "It's empty here. Try:",
  },
  Pn = {
    usernameRequired: 'Enter username',
    usernameLetters: 'Username can only contain letters',
    emailInvalid: 'Enter a valid email',
    passwordInvalid:
      'Password must be at least 8 characters and include uppercase, lowercase and a number',
  },
  jn = {
    title: '404 — Page not found',
    description: 'The page you’re looking for doesn’t exist or has moved.',
    back: 'Go back',
    home: 'Go home',
  },
  An = { title: 'Something went wrong', tryAgain: 'Try again' },
  Tn = {
    send: 'Send',
    copy: 'Copy',
    close: 'Close',
    error: 'Error',
    prettify: 'Prettify',
  },
  On = { restfull: 'Restfull', variables: 'Variables', history: 'History' },
  Nn = {
    addButton: 'Add',
    variableName: 'Variable name',
    variableValue: 'Variable value',
    delete: 'Delete',
  },
  Dn = {
    photoAlt: "Darya's photo",
    name: 'Dasha',
    text: "Hi! My name is Dasha. I currently live in Ottawa, Canada, where I've been for the past three years after moving here with my family and our two cats. In my free time, I enjoy knitting and reading.",
    linkGitHub: 'GitHub link',
  },
  In = {
    photoAlt: "Alyona's photo",
    name: 'Alyona',
    text: 'Hi :) My name is Alyona. I live in Saint Petersburg, Russia. I love traveling and discovering new things.',
    linkGitHub: 'GitHub link',
  },
  Ln = {
    photoAlt: "Vika's photo",
    name: 'Vika',
    text: 'Hi, I’m Vika. I live in Barcelona and I’m diligently learning Spanish. My hobbies are everything related to handicrafts: sewing, knitting, sculpting. 😊',
    linkGitHub: 'GitHub link',
  },
  Mn = {
    generatedCode: 'Generated code',
    generating: 'Generating snippets…',
    chooseLanguage: 'Choose language…',
    notAvailable: 'Not available for this request',
    urlInvalid: 'URL is missing or invalid',
    genFailed: 'Failed to generate code',
    codeText: 'Send a request to generate code',
    codeBtn: 'Show Code',
    noResponse: 'Click send to get a response',
  },
  Fn = {
    projectText:
      'Final assignment for the RS School React course, implemented according to the spec:',
    projectLink: 'final task',
    courseText:
      'The Rolling Scopes School React course — free, community-driven training:',
    courseLink: 'rs.school/react',
  },
  Bn = {
    auth: Sn,
    form: kn,
    lang: _n,
    app: Cn,
    request: En,
    emptyState: Rn,
    validation: Pn,
    notFound: jn,
    errorBoundary: An,
    buttons: Tn,
    clientPage: On,
    variables: Nn,
    aboutDarya: Dn,
    aboutAlyona: In,
    aboutVika: Ln,
    restfull: Mn,
    info: Fn,
  },
  Un = {
    signIn: 'Войти',
    signUp: 'Регистрация',
    welcome: 'Добро пожаловать',
    welcomeBack: 'С возвращением',
    isAccount: 'Уже есть аккаунт?',
    logOut: 'Выйти',
  },
  $n = {
    name: 'Имя',
    email: 'Электронная почта',
    password: 'Пароль',
    submit: 'Отправить',
  },
  Hn = { english: 'Английский', russian: 'Русский' },
  zn = {
    title: 'RESTClient',
    history: 'История',
    historyRequests: 'Запросы истории',
    variables: 'Переменные',
    mainPage: 'Главная страница',
    github: 'Гитхаб',
    loading: 'Загрузка',
  },
  Vn = {
    method: 'Метод',
    endpointUrl: 'URL эндпоинта',
    headers: 'Заголовки',
    headerKey: 'Ключ заголовка',
    headerValue: 'Значение заголовка',
    code: 'Код',
    body: 'Тело',
    response: 'Ответ',
    status: 'Статус',
    copyJSON: 'Скопировать JSON',
    params: 'Параметры',
    addParam: 'Добавить параметры',
    addHeader: 'Добавить заголовки',
    addField: 'Добавить поле',
    rawBody: 'Текст',
    invalidUrl: 'Неверный URL',
  },
  qn = {
    noRequests: 'Вы ещё не выполняли запросы',
    hint: 'Здесь пусто. Попробуйте:',
  },
  Wn = 'Имя',
  Gn = 'Электронная почта',
  Kn = 'Пароль',
  Xn = 'Отправить',
  Qn = 'Уже есть аккаунт?',
  Zn = 'Выйти',
  Jn = 'Главная страница',
  Yn =
    'Я живу в Барселоне и с большим интересом изучаю программирование. Раньше немного занималась аналитикой данных, и именно это подтолкнуло меня глубже погрузиться в сферу IT. Сейчас я параллельно обучаюсь на курсах по фуллстек-разработке и мне нравится ощущать прогресс: каждый новый модуль открывает что-то важное и помогает двигаться дальше. Особенно интересно наблюдать, как шаг за шагом удаётся собирать настоящие проекты, которые работают и приносят пользу. Для меня программирование — это не только про логику и код, но и про возможность воплощать идеи в реальность.',
  er = {
    usernameRequired: 'Введите имя пользователя',
    usernameLetters: 'Имя должно содержать только буквы',
    emailInvalid: 'Введите корректный email',
    passwordInvalid:
      'Пароль должен быть не менее 8 символов и содержать заглавную букву, строчную и цифру',
  },
  tr = {
    title: '404 — Страница не найдена',
    description:
      'Страница, которую вы ищете, не существует или была перемещена.',
    back: 'Назад',
    home: 'На главную',
  },
  nr = { title: 'Что-то пошло не так', tryAgain: 'Попробовать снова' },
  rr = {
    send: 'Отправить',
    copy: 'Копировать',
    close: 'Закрыть',
    error: 'Ошибка',
    prettify: 'Отформатировать',
  },
  or = { restfull: 'Pестфул', variables: 'Переменные', history: 'История' },
  ir = {
    addButton: 'Добавить',
    variableName: 'Название переменной',
    variableValue: 'Значение переменной',
    delete: 'Удалить',
  },
  sr = {
    photoAlt: 'Фото Даши',
    name: 'Даша',
    text: 'Привет! Меня зовут Даша. Сейчас я живу в Оттаве. Мы переехали сюда три года назад всей семьёй с двумя котами. В свободное время я люблю вязать и читать.',
    linkGitHub: 'Ссылка на Гитхаб',
  },
  ar = {
    photoAlt: 'Фото Алёны',
    name: 'Алёна',
    text: 'Привет :) Меня зовут Алёна. Я живу в Санкт-Петербурге. Очень люблю путешествовать и открывать для себя что-то новое.',
    linkGitHub: 'Ссылка на Гитхаб',
  },
  cr = {
    photoAlt: 'Фото Вики',
    name: 'Вика',
    text: 'Привет, я Вика. Я живу в Барселоне и упорно изучаю испанский язык. Мои хобби — всё, что связано с рукоделием: шить, вязать, лепить. 😊',
    linkGitHub: 'Ссылка на Гитхаб',
  },
  ur = {
    generatedCode: 'Сгенерированный код',
    generating: 'Генерация сниппетов…',
    chooseLanguage: 'Выберите язык…',
    notAvailable: 'Недоступно для этого запроса',
    urlInvalid: 'URL отсутствует или недействителен',
    genFailed: 'Не удалось сгенерировать код',
    codeText: 'Отправьте запрос, чтобы сгенерировать код',
    codeBtn: 'Показать код',
    noResponse: 'Нажмите Отправить, чтобы получить ответ',
  },
  lr = {
    projectText:
      'Финальное задание курса React в RS School, выполнено по требованиям:',
    projectLink: 'финальное задание',
    courseText:
      'Курс React в RS School — бесплатное, основанное на сообществе обучение:',
  },
  fr = {
    auth: Un,
    form: $n,
    lang: Hn,
    app: zn,
    request: Vn,
    emptyState: qn,
    Name: Wn,
    Email: Gn,
    Password: Kn,
    Submit: Xn,
    IsAccount: Qn,
    LogOut: Zn,
    MainPage: Jn,
    abouVika: Yn,
    validation: er,
    notFound: tr,
    errorBoundary: nr,
    buttons: rr,
    clientPage: or,
    variables: ir,
    aboutDarya: sr,
    aboutAlyona: ar,
    aboutVika: cr,
    restfull: ur,
    info: lr,
  };
function dr() {
  if (typeof document > 'u') return 'en';
  const e = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  return e ? decodeURIComponent(e[1]) : 'en';
}
Et.use(We)
  .use(vn)
  .init({
    debug: !0,
    resources: { en: { translation: Bn }, ru: { translation: fr } },
    lng: dr(),
    fallbackLng: 'en',
    interpolation: { escapeValue: !1 },
  });
class hr extends h.Component {
  state = { hasError: !1 };
  static getDerivedStateFromError(t) {
    return {
      hasError: !0,
      message: t instanceof Error ? t.message : String(t),
    };
  }
  componentDidCatch(t, n) {
    console.error('ErrorBoundary:', t, n);
  }
  retry = () => {
    this.setState({ hasError: !1, message: void 0 });
  };
  render() {
    const { t } = this.props;
    return this.state.hasError
      ? l.jsxs('div', {
          className: 'p-4 space-y-3',
          children: [
            l.jsx('h3', {
              className: 'text-lg font-semibold',
              children: t('errorBoundary.title', 'Something went wrong'),
            }),
            !!this.state.message &&
              l.jsx('p', {
                className: 'text-sm opacity-80 whitespace-pre-wrap break-words',
                children: this.state.message,
              }),
            l.jsx('div', {
              className: 'flex gap-2',
              children: l.jsx('button', {
                type: 'button',
                onClick: this.retry,
                className: 'px-3 py-1 rounded border',
                children: t('errorBoundary.tryAgain', 'Try again'),
              }),
            }),
          ],
        })
      : this.props.children;
  }
}
const pr = xn()(hr),
  gr =
    "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5701_38384)'%3e%3ccircle%20cx='32'%20cy='32'%20r='32'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13%2021.5095V42.5L19.3067%2042.4621V33.9474C20.0567%2033.9474%2020.7616%2033.9775%2021.4049%2034.4267C21.8946%2034.8785%2022.2838%2035.4335%2022.546%2036.054L25.9202%2042.4621H33C31.5957%2039.6675%2030.4706%2036.1327%2028.0552%2034.0104C27.5455%2033.6749%2026.9919%2033.4158%2026.411%2033.241C27.1873%2033.0779%2027.9357%2032.7973%2028.6319%2032.4084C30.3855%2031.3375%2031.3915%2029.3808%2031.3436%2027.3374C31.3798%2026.1328%2031.0495%2024.9466%2030.3988%2023.9441C28.9256%2021.6883%2025.9337%2021.4213%2023.4663%2021.5095H13ZM21.9939%2030.0116H19.3313V25.6975H22.1043C23.4807%2025.5594%2025.1814%2026.1754%2025.0859%2027.8041C25.1499%2029.5621%2023.3647%2029.9127%2021.9939%2030.0116Z'%20fill='%23FFB749'/%3e%3cpath%20d='M39.4768%2035.089L33%2035.4666C33.1262%2037.3671%2034.0021%2039.16%2035.4636%2040.5088C36.9117%2041.8323%2039.5076%2042.4941%2043.2515%2042.4941C46.3564%2042.5823%2049.9058%2041.8146%2051.821%2039.1569C52.5929%2038.0934%2053.0033%2036.8427%2052.9998%2035.564C53.0217%2033.1848%2051.4339%2031.2297%2049.3044%2030.3147C47.2632%2029.4766%2045.1198%2028.8674%2042.9204%2028.5C42.1107%2028.41%2041.3327%2028.1563%2040.6423%2027.757C39.9039%2027.2597%2040.078%2026.2272%2040.735%2025.7596C42.6084%2024.5207%2045.6299%2025.5545%2045.8608%2027.9032L52.2845%2027.5621C52.1703%2025.768%2051.1844%2024.0545%2049.6356%2022.9583C47.6987%2021.8887%2045.4532%2021.3874%2043.1986%2021.5212C41.3493%2021.4527%2039.5037%2021.7218%2037.7682%2022.3128C35.6082%2023.1125%2033.829%2025.064%2033.8344%2027.4525C33.7931%2028.9377%2034.5158%2030.4088%2035.755%2031.3621C37.6454%2032.6238%2039.8325%2033.4582%2042.139%2033.798C43.3833%2033.9637%2044.5727%2034.3795%2045.6224%2035.0159C46.5878%2035.7309%2046.5807%2037.167%2045.5959%2037.8903C44.5078%2038.6532%2042.9034%2038.7416%2041.6818%2038.2468C40.3717%2037.716%2039.6048%2036.4784%2039.4768%2035.089Z'%20fill='%23FFB749'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5701_38384'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function mr() {
  const [e, t] = h.useState(!1),
    { t: n } = J();
  return (
    h.useEffect(() => {
      t(!0);
    }, []),
    e
      ? l.jsx('footer', {
          className: 'bottom-0 w-full bg-pink-200 px-8 py-2',
          children: l.jsxs('div', {
            className:
              'mx-auto w-full  flex items-center justify-between overflow-y-auto pt-0',
            children: [
              l.jsx('a', {
                href: 'https://github.com/ViktoriiaPet/rest-client-app',
                target: '_blank',
                rel: 'noreferrer',
                className:
                  'text-purple-600 font-bold text-center text-l mb-2 mt-2  hover:text-yellow-100 transition-colors',
                children: n('app.github'),
              }),
              l.jsx('span', {
                className:
                  'text-purple-600 font-bold text-center text-l mb-2 mt-2',
                children: '2025',
              }),
              l.jsx('a', {
                href: 'https://rs.school/courses/reactjs',
                target: '_blank',
                rel: 'noreferrer',
                children: l.jsx('img', {
                  className: 'w-[40px]',
                  src: gr,
                  alt: 'rss logo',
                }),
              }),
            ],
          }),
        })
      : null
  );
}
function Ge() {
  if (typeof document > 'u') return 'en';
  const e = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  return e ? decodeURIComponent(e[1]) : 'en';
}
var Y = 'Switch',
  [yr] = Tt(Y),
  [wr, br] = yr(Y),
  Ke = h.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: r,
        checked: o,
        defaultChecked: i,
        required: s,
        disabled: a,
        value: c = 'on',
        onCheckedChange: f,
        form: u,
        ...d
      } = e,
      [g, y] = h.useState(null),
      m = $e(t, (p) => y(p)),
      S = h.useRef(!1),
      b = g ? u || !!g.closest('form') : !0,
      [x, k] = At({ prop: o, defaultProp: i ?? !1, onChange: f, caller: Y });
    return l.jsxs(wr, {
      scope: n,
      checked: x,
      disabled: a,
      children: [
        l.jsx(Ue.button, {
          type: 'button',
          role: 'switch',
          'aria-checked': x,
          'aria-required': s,
          'data-state': Je(x),
          'data-disabled': a ? '' : void 0,
          disabled: a,
          value: c,
          ...d,
          ref: m,
          onClick: Ot(e.onClick, (p) => {
            (k((w) => !w),
              b &&
                ((S.current = p.isPropagationStopped()),
                S.current || p.stopPropagation()));
          }),
        }),
        b &&
          l.jsx(Ze, {
            control: g,
            bubbles: !S.current,
            name: r,
            value: c,
            checked: x,
            required: s,
            disabled: a,
            form: u,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    });
  });
Ke.displayName = Y;
var Xe = 'SwitchThumb',
  Qe = h.forwardRef((e, t) => {
    const { __scopeSwitch: n, ...r } = e,
      o = br(Xe, n);
    return l.jsx(Ue.span, {
      'data-state': Je(o.checked),
      'data-disabled': o.disabled ? '' : void 0,
      ...r,
      ref: t,
    });
  });
Qe.displayName = Xe;
var vr = 'SwitchBubbleInput',
  Ze = h.forwardRef(
    (
      { __scopeSwitch: e, control: t, checked: n, bubbles: r = !0, ...o },
      i
    ) => {
      const s = h.useRef(null),
        a = $e(s, i),
        c = Nt(n),
        f = Dt(t);
      return (
        h.useEffect(() => {
          const u = s.current;
          if (!u) return;
          const d = window.HTMLInputElement.prototype,
            y = Object.getOwnPropertyDescriptor(d, 'checked').set;
          if (c !== n && y) {
            const m = new Event('click', { bubbles: r });
            (y.call(u, n), u.dispatchEvent(m));
          }
        }, [c, n, r]),
        l.jsx('input', {
          type: 'checkbox',
          'aria-hidden': !0,
          defaultChecked: n,
          ...o,
          tabIndex: -1,
          ref: a,
          style: {
            ...o.style,
            ...f,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        })
      );
    }
  );
Ze.displayName = vr;
function Je(e) {
  return e ? 'checked' : 'unchecked';
}
var Ye = Ke,
  xr = Qe;
const et = h.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Ye, {
    className: be(
      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-pink-400 data-[state=unchecked]:bg-input',
      e
    ),
    ...t,
    ref: n,
    children: l.jsx(xr, {
      className: be(
        'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
      ),
    }),
  })
);
et.displayName = Ye.displayName;
function _(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Sr = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  je = Sr,
  ie = () => Math.random().toString(36).substring(7).split('').join('.'),
  kr = {
    INIT: `@@redux/INIT${ie()}`,
    REPLACE: `@@redux/REPLACE${ie()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ie()}`,
  },
  G = kr;
function ge(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function tt(e, t, n) {
  if (typeof e != 'function') throw new Error(_(2));
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(_(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(_(1));
    return n(tt)(e, t);
  }
  let r = e,
    o = t,
    i = new Map(),
    s = i,
    a = 0,
    c = !1;
  function f() {
    s === i &&
      ((s = new Map()),
      i.forEach((b, x) => {
        s.set(x, b);
      }));
  }
  function u() {
    if (c) throw new Error(_(3));
    return o;
  }
  function d(b) {
    if (typeof b != 'function') throw new Error(_(4));
    if (c) throw new Error(_(5));
    let x = !0;
    f();
    const k = a++;
    return (
      s.set(k, b),
      function () {
        if (x) {
          if (c) throw new Error(_(6));
          ((x = !1), f(), s.delete(k), (i = null));
        }
      }
    );
  }
  function g(b) {
    if (!ge(b)) throw new Error(_(7));
    if (typeof b.type > 'u') throw new Error(_(8));
    if (typeof b.type != 'string') throw new Error(_(17));
    if (c) throw new Error(_(9));
    try {
      ((c = !0), (o = r(o, b)));
    } finally {
      c = !1;
    }
    return (
      (i = s).forEach((k) => {
        k();
      }),
      b
    );
  }
  function y(b) {
    if (typeof b != 'function') throw new Error(_(10));
    ((r = b), g({ type: G.REPLACE }));
  }
  function m() {
    const b = d;
    return {
      subscribe(x) {
        if (typeof x != 'object' || x === null) throw new Error(_(11));
        function k() {
          const w = x;
          w.next && w.next(u());
        }
        return (k(), { unsubscribe: b(k) });
      },
      [je]() {
        return this;
      },
    };
  }
  return (
    g({ type: G.INIT }),
    { dispatch: g, subscribe: d, getState: u, replaceReducer: y, [je]: m }
  );
}
function _r(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: G.INIT }) > 'u') throw new Error(_(12));
    if (typeof n(void 0, { type: G.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(_(13));
  });
}
function Cr(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == 'function' && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    _r(n);
  } catch (i) {
    o = i;
  }
  return function (s = {}, a) {
    if (o) throw o;
    let c = !1;
    const f = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u],
        g = n[d],
        y = s[d],
        m = g(y, a);
      if (typeof m > 'u') throw (a && a.type, new Error(_(14)));
      ((f[d] = m), (c = c || m !== y));
    }
    return ((c = c || r.length !== Object.keys(s).length), c ? f : s);
  };
}
function K(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r))
        );
}
function Er(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(_(15));
    };
    const s = { getState: o.getState, dispatch: (c, ...f) => i(c, ...f) },
      a = e.map((c) => c(s));
    return ((i = K(...a)(o.dispatch)), { ...o, dispatch: i });
  };
}
function Rr(e) {
  return ge(e) && 'type' in e && typeof e.type == 'string';
}
var nt = Symbol.for('immer-nothing'),
  Ae = Symbol.for('immer-draftable'),
  P = Symbol.for('immer-state');
function j(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var F = Object.getPrototypeOf;
function D(e) {
  return !!e && !!e[P];
}
function T(e) {
  return e
    ? rt(e) ||
        Array.isArray(e) ||
        !!e[Ae] ||
        !!e.constructor?.[Ae] ||
        H(e) ||
        te(e)
    : !1;
}
var Pr = Object.prototype.constructor.toString();
function rt(e) {
  if (!e || typeof e != 'object') return !1;
  const t = F(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === Pr;
}
function X(e, t) {
  ee(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function ee(e) {
  const t = e[P];
  return t ? t.type_ : Array.isArray(e) ? 1 : H(e) ? 2 : te(e) ? 3 : 0;
}
function ce(e, t) {
  return ee(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ot(e, t, n) {
  const r = ee(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function jr(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function H(e) {
  return e instanceof Map;
}
function te(e) {
  return e instanceof Set;
}
function N(e) {
  return e.copy_ || e.base_;
}
function ue(e, t) {
  if (H(e)) return new Map(e);
  if (te(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = rt(e);
  if (t === !0 || (t === 'class_only' && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[P];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i],
        a = r[s];
      (a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[s] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[s],
          }));
    }
    return Object.create(F(e), r);
  } else {
    const r = F(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function me(e, t = !1) {
  return (
    ne(e) ||
      D(e) ||
      !T(e) ||
      (ee(e) > 1 &&
        Object.defineProperties(e, {
          set: { value: V },
          add: { value: V },
          clear: { value: V },
          delete: { value: V },
        }),
      Object.freeze(e),
      t && Object.values(e).forEach((n) => me(n, !0))),
    e
  );
}
function V() {
  j(2);
}
function ne(e) {
  return Object.isFrozen(e);
}
var Ar = {};
function I(e) {
  const t = Ar[e];
  return (t || j(0, e), t);
}
var U;
function it() {
  return U;
}
function Tr(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Te(e, t) {
  t &&
    (I('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function le(e) {
  (fe(e), e.drafts_.forEach(Or), (e.drafts_ = null));
}
function fe(e) {
  e === U && (U = e.parent_);
}
function Oe(e) {
  return (U = Tr(U, e));
}
function Or(e) {
  const t = e[P];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Ne(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[P].modified_ && (le(t), j(4)),
        T(e) && ((e = Q(t, e)), t.parent_ || Z(t, e)),
        t.patches_ &&
          I('Patches').generateReplacementPatches_(
            n[P].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Q(t, n, [])),
    le(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== nt ? e : void 0
  );
}
function Q(e, t, n) {
  if (ne(t)) return t;
  const r = t[P];
  if (!r) return (X(t, (o, i) => De(e, r, t, o, i, n)), t);
  if (r.scope_ !== e) return t;
  if (!r.modified_) return (Z(e, r.base_, !0), r.base_);
  if (!r.finalized_) {
    ((r.finalized_ = !0), r.scope_.unfinalizedDrafts_--);
    const o = r.copy_;
    let i = o,
      s = !1;
    (r.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      X(i, (a, c) => De(e, r, o, a, c, n, s)),
      Z(e, o, !1),
      n &&
        e.patches_ &&
        I('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_));
  }
  return r.copy_;
}
function De(e, t, n, r, o, i, s) {
  if (D(o)) {
    const a =
        i && t && t.type_ !== 3 && !ce(t.assigned_, r) ? i.concat(r) : void 0,
      c = Q(e, o, a);
    if ((ot(n, r, c), D(c))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(o);
  if (T(o) && !ne(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    (Q(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != 'symbol' &&
        (H(n) ? n.has(r) : Object.prototype.propertyIsEnumerable.call(n, r)) &&
        Z(e, o));
  }
}
function Z(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && me(t, n);
}
function Nr(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : it(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = ye;
  n && ((o = [r]), (i = $));
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return ((r.draft_ = a), (r.revoke_ = s), a);
}
var ye = {
    get(e, t) {
      if (t === P) return e;
      const n = N(e);
      if (!ce(n, t)) return Dr(e, n, t);
      const r = n[t];
      return e.finalized_ || !T(r)
        ? r
        : r === se(e.base_, t)
          ? (ae(e), (e.copy_[t] = he(r, e)))
          : r;
    },
    has(e, t) {
      return t in N(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(N(e));
    },
    set(e, t, n) {
      const r = st(N(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        const o = se(N(e), t),
          i = o?.[P];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (jr(n, o) && (n !== void 0 || ce(e.base_, t))) return !0;
        (ae(e), de(e));
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        se(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), ae(e), de(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = N(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      j(11);
    },
    getPrototypeOf(e) {
      return F(e.base_);
    },
    setPrototypeOf() {
      j(12);
    },
  },
  $ = {};
X(ye, (e, t) => {
  $[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
});
$.deleteProperty = function (e, t) {
  return $.set.call(this, e, t, void 0);
};
$.set = function (e, t, n) {
  return ye.set.call(this, e[0], t, n, e[0]);
};
function se(e, t) {
  const n = e[P];
  return (n ? N(n) : e)[t];
}
function Dr(e, t, n) {
  const r = st(t, n);
  return r ? ('value' in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function st(e, t) {
  if (!(t in e)) return;
  let n = F(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = F(n);
  }
}
function de(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && de(e.parent_));
}
function ae(e) {
  e.copy_ || (e.copy_ = ue(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Ir = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const i = n;
          n = t;
          const s = this;
          return function (c = i, ...f) {
            return s.produce(c, (u) => n.call(this, u, ...f));
          };
        }
        (typeof n != 'function' && j(6),
          r !== void 0 && typeof r != 'function' && j(7));
        let o;
        if (T(t)) {
          const i = Oe(this),
            s = he(t, void 0);
          let a = !0;
          try {
            ((o = n(s)), (a = !1));
          } finally {
            a ? le(i) : fe(i);
          }
          return (Te(i, r), Ne(o, i));
        } else if (!t || typeof t != 'object') {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === nt && (o = void 0),
            this.autoFreeze_ && me(o, !0),
            r)
          ) {
            const i = [],
              s = [];
            (I('Patches').generateReplacementPatches_(t, o, i, s), r(i, s));
          }
          return o;
        } else j(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function')
          return (s, ...a) => this.produceWithPatches(s, (c) => t(c, ...a));
        let r, o;
        return [
          this.produce(t, n, (s, a) => {
            ((r = s), (o = a));
          }),
          r,
          o,
        ];
      }),
      typeof e?.autoFreeze == 'boolean' && this.setAutoFreeze(e.autoFreeze),
      typeof e?.useStrictShallowCopy == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy));
  }
  createDraft(e) {
    (T(e) || j(8), D(e) && (e = Lr(e)));
    const t = Oe(this),
      n = he(e, void 0);
    return ((n[P].isManual_ = !0), fe(t), n);
  }
  finishDraft(e, t) {
    const n = e && e[P];
    (!n || !n.isManual_) && j(9);
    const { scope_: r } = n;
    return (Te(r, t), Ne(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = I('Patches').applyPatches_;
    return D(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function he(e, t) {
  const n = H(e)
    ? I('MapSet').proxyMap_(e, t)
    : te(e)
      ? I('MapSet').proxySet_(e, t)
      : Nr(e, t);
  return ((t ? t.scope_ : it()).drafts_.push(n), n);
}
function Lr(e) {
  return (D(e) || j(10, e), at(e));
}
function at(e) {
  if (!T(e) || ne(e)) return e;
  const t = e[P];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0), (n = ue(e, t.scope_.immer_.useStrictShallowCopy_)));
  } else n = ue(e, !0);
  return (
    X(n, (r, o) => {
      ot(n, r, at(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Mr = new Ir(),
  ct = Mr.produce;
function ut(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == 'function' ? i(n, r, e) : o(i);
}
var Fr = ut(),
  Br = ut,
  Ur =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? K
              : K.apply(null, arguments);
        };
function Ie(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(A(0));
      return {
        type: e,
        payload: o.payload,
        ...('meta' in o && { meta: o.meta }),
        ...('error' in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Rr(r) && r.type === e),
    n
  );
}
var lt = class B extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, B.prototype));
  }
  static get [Symbol.species]() {
    return B;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new B(...t[0].concat(this))
      : new B(...t.concat(this));
  }
};
function Le(e) {
  return T(e) ? ct(e, () => {}) : e;
}
function q(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function $r(e) {
  return typeof e == 'boolean';
}
var Hr = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let s = new lt();
      return (n && ($r(n) ? s.push(Fr) : s.push(Br(n.extraArgument))), s);
    },
  zr = 'RTK_autoBatch',
  Me = (e) => (t) => {
    setTimeout(t, e);
  },
  Vr =
    (e = { type: 'raf' }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        i = !1,
        s = !1;
      const a = new Set(),
        c =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Me(10)
              : e.type === 'callback'
                ? e.queueNotification
                : Me(e.timeout),
        f = () => {
          ((s = !1), i && ((i = !1), a.forEach((u) => u())));
        };
      return Object.assign({}, r, {
        subscribe(u) {
          const d = () => o && u(),
            g = r.subscribe(d);
          return (
            a.add(u),
            () => {
              (g(), a.delete(u));
            }
          );
        },
        dispatch(u) {
          try {
            return (
              (o = !u?.meta?.[zr]),
              (i = !o),
              i && (s || ((s = !0), c(f))),
              r.dispatch(u)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  qr = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new lt(e);
      return (r && o.push(Vr(typeof r == 'object' ? r : void 0)), o);
    };
function Wr(e) {
  const t = Hr(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0,
    } = e || {};
  let a;
  if (typeof n == 'function') a = n;
  else if (ge(n)) a = Cr(n);
  else throw new Error(A(1));
  let c;
  typeof r == 'function' ? (c = r(t)) : (c = t());
  let f = K;
  o && (f = Ur({ trace: !1, ...(typeof o == 'object' && o) }));
  const u = Er(...c),
    d = qr(u);
  let g = typeof s == 'function' ? s(d) : d();
  const y = f(...g);
  return tt(a, i, y);
}
function ft(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == 'string' ? i : i.type;
      if (!a) throw new Error(A(28));
      if (a in t) throw new Error(A(29));
      return ((t[a] = s), o);
    },
    addAsyncThunk(i, s) {
      return (
        s.pending && (t[i.pending.type] = s.pending),
        s.rejected && (t[i.rejected.type] = s.rejected),
        s.fulfilled && (t[i.fulfilled.type] = s.fulfilled),
        s.settled && n.push({ matcher: i.settled, reducer: s.settled }),
        o
      );
    },
    addMatcher(i, s) {
      return (n.push({ matcher: i, reducer: s }), o);
    },
    addDefaultCase(i) {
      return ((r = i), o);
    },
  };
  return (e(o), [t, n, r]);
}
function Gr(e) {
  return typeof e == 'function';
}
function Kr(e, t) {
  let [n, r, o] = ft(t),
    i;
  if (Gr(e)) i = () => Le(e());
  else {
    const a = Le(e);
    i = () => a;
  }
  function s(a = i(), c) {
    let f = [
      n[c.type],
      ...r.filter(({ matcher: u }) => u(c)).map(({ reducer: u }) => u),
    ];
    return (
      f.filter((u) => !!u).length === 0 && (f = [o]),
      f.reduce((u, d) => {
        if (d)
          if (D(u)) {
            const y = d(u, c);
            return y === void 0 ? u : y;
          } else {
            if (T(u)) return ct(u, (g) => d(g, c));
            {
              const g = d(u, c);
              if (g === void 0) {
                if (u === null) return u;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined'
                );
              }
              return g;
            }
          }
        return u;
      }, a)
    );
  }
  return ((s.getInitialState = i), s);
}
var Xr = Symbol.for('rtk-slice-createasyncthunk');
function Qr(e, t) {
  return `${e}/${t}`;
}
function Zr({ creators: e } = {}) {
  const t = e?.asyncThunk?.[Xr];
  return function (r) {
    const { name: o, reducerPath: i = o } = r;
    if (!o) throw new Error(A(11));
    const s =
        (typeof r.reducers == 'function' ? r.reducers(eo()) : r.reducers) || {},
      a = Object.keys(s),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      f = {
        addCase(p, w) {
          const v = typeof p == 'string' ? p : p.type;
          if (!v) throw new Error(A(12));
          if (v in c.sliceCaseReducersByType) throw new Error(A(13));
          return ((c.sliceCaseReducersByType[v] = w), f);
        },
        addMatcher(p, w) {
          return (c.sliceMatchers.push({ matcher: p, reducer: w }), f);
        },
        exposeAction(p, w) {
          return ((c.actionCreators[p] = w), f);
        },
        exposeCaseReducer(p, w) {
          return ((c.sliceCaseReducersByName[p] = w), f);
        },
      };
    a.forEach((p) => {
      const w = s[p],
        v = {
          reducerName: p,
          type: Qr(o, p),
          createNotation: typeof r.reducers == 'function',
        };
      no(w) ? oo(v, w, f, t) : to(v, w, f);
    });
    function u() {
      const [p = {}, w = [], v = void 0] =
          typeof r.extraReducers == 'function'
            ? ft(r.extraReducers)
            : [r.extraReducers],
        C = { ...p, ...c.sliceCaseReducersByType };
      return Kr(r.initialState, (R) => {
        for (let E in C) R.addCase(E, C[E]);
        for (let E of c.sliceMatchers) R.addMatcher(E.matcher, E.reducer);
        for (let E of w) R.addMatcher(E.matcher, E.reducer);
        v && R.addDefaultCase(v);
      });
    }
    const d = (p) => p,
      g = new Map(),
      y = new WeakMap();
    let m;
    function S(p, w) {
      return (m || (m = u()), m(p, w));
    }
    function b() {
      return (m || (m = u()), m.getInitialState());
    }
    function x(p, w = !1) {
      function v(R) {
        let E = R[p];
        return (typeof E > 'u' && w && (E = q(y, v, b)), E);
      }
      function C(R = d) {
        const E = q(g, w, () => new WeakMap());
        return q(E, R, () => {
          const we = {};
          for (const [ht, pt] of Object.entries(r.selectors ?? {}))
            we[ht] = Jr(pt, R, () => q(y, R, b), w);
          return we;
        });
      }
      return {
        reducerPath: p,
        getSelectors: C,
        get selectors() {
          return C(v);
        },
        selectSlice: v,
      };
    }
    const k = {
      name: o,
      reducer: S,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: b,
      ...x(i),
      injectInto(p, { reducerPath: w, ...v } = {}) {
        const C = w ?? i;
        return (
          p.inject({ reducerPath: C, reducer: S }, v),
          { ...k, ...x(C, !0) }
        );
      },
    };
    return k;
  };
}
function Jr(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return (typeof a > 'u' && r && (a = n()), e(a, ...s));
  }
  return ((o.unwrapped = e), o);
}
var Yr = Zr();
function eo() {
  function e(t, n) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function to({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, s;
  if ('reducer' in r) {
    if (n && !ro(r)) throw new Error(A(17));
    ((i = r.reducer), (s = r.prepare));
  } else i = r;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? Ie(e, s) : Ie(e));
}
function no(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function ro(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function oo({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(A(18));
  const {
      payloadCreator: i,
      fulfilled: s,
      pending: a,
      rejected: c,
      settled: f,
      options: u,
    } = n,
    d = o(e, i, u);
  (r.exposeAction(t, d),
    s && r.addCase(d.fulfilled, s),
    a && r.addCase(d.pending, a),
    c && r.addCase(d.rejected, c),
    f && r.addMatcher(d.settled, f),
    r.exposeCaseReducer(t, {
      fulfilled: s || W,
      pending: a || W,
      rejected: c || W,
      settled: f || W,
    }));
}
function W() {}
function A(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const io = {
    lang:
      typeof window < 'u' && localStorage.getItem('i18nextLng')
        ? localStorage.getItem('i18nextLng')
        : 'en',
  },
  dt = Yr({
    name: 'language',
    initialState: io,
    reducers: {
      setLanguage(e, t) {
        ((e.lang = t.payload),
          typeof window < 'u' && localStorage.setItem('i18nextLng', t.payload));
      },
      loadLanguageFromStorage(e) {
        if (typeof window < 'u') {
          const t = localStorage.getItem('lang');
          e.lang = t ?? 'en';
        }
      },
    },
  }),
  { setLanguage: Fe } = dt.actions,
  so = dt.reducer,
  ao = Ge();
function co({ initialLang: e = ao }) {
  const t = en(),
    n = rn((u) => u.language.lang),
    { t: r, i18n: o } = J(),
    [i, s] = h.useState(!1);
  (h.useEffect(() => {
    s(!0);
  }, []),
    h.useEffect(() => {
      const u = Ge();
      (u && u !== n && (t(Fe(u)), o.changeLanguage(u)), s(!0));
    }, [t, o, n]));
  const a = (u) => (typeof window > 'u' ? o.getFixedT(e)(u) : r(u));
  h.useEffect(() => {
    o.changeLanguage(n ?? 'en');
  }, [n, o]);
  const c = () => {
    const u = n === 'en' ? 'ru' : 'en';
    (t(Fe(u)),
      typeof document < 'u' &&
        (document.cookie = `lang=${u}; path=/; max-age=31536000`),
      o.changeLanguage(u),
      window.location.pathname === '/auth/clientHistory' &&
        window.location.reload());
  };
  if (!i) return null;
  const f = n === 'en';
  return l.jsxs('div', {
    className: 'flex flex-row gap-3 items-center w-full justify-center',
    children: [
      l.jsx('div', {
        className: `w-1/3 flex justify-end ${f ? 'text-pink-600 font-bold' : 'text-pink-300 font-semibold'}`,
        children: a('lang.english'),
      }),
      l.jsx(et, { onClick: c, checked: n === 'ru' }),
      l.jsx('div', {
        className: `w-1/3 flex ${f ? 'text-pink-300 font-semibold w-1/3' : 'text-pink-600 font-bold w-1/3'}`,
        children: a('lang.russian'),
      }),
    ],
  });
}
function uo() {
  const [e, t] = h.useState(!1),
    [n, r] = h.useState(!1),
    o = h.useRef(null);
  (h.useEffect(() => {
    t(!0);
  }, []),
    h.useEffect(() => {
      const m = () => {
        o.current === null &&
          (o.current = requestAnimationFrame(() => {
            const S = window.scrollY || window.pageYOffset;
            (r(S > 8), (o.current = null));
          }));
      };
      return (
        window.addEventListener('scroll', m, { passive: !0 }),
        m(),
        () => {
          (window.removeEventListener('scroll', m),
            o.current && cancelAnimationFrame(o.current));
        }
      );
    }, []));
  const i =
      typeof window < 'u' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    { t: s, ready: a } = J(),
    { user: c, setUser: f, setToken: u } = xt(),
    d = Be(),
    g = async () => {
      try {
        const { logout: y } = await St(
          async () => {
            const { logout: m } = await import('./firebase-_GfKOiAI.js').then(
              (S) => S.f
            );
            return { logout: m };
          },
          __vite__mapDeps([0, 1])
        );
        (await y(), f(null), u(null), d('/'));
      } catch (y) {
        console.error('Log error', y);
      }
    };
  return !e || !a
    ? null
    : l.jsx('header', {
        className: 'sticky top-0 z-50 w-full ',
        children: l.jsx('div', {
          className:
            `sticky top-0  py-2 z-50 w-full backdrop-blur-sm  px-8 py-2 ${i ? '' : 'transition-all duration-300 ease-in-out'} ` +
            (n
              ? 'bg-white/80 border-b border-pink-300 shadow-md'
              : 'bg-transparent border-b-0'),
          children: l.jsxs('nav', {
            className: 'flex flex-row justify-between items-center',
            children: [
              l.jsx(z, {
                to: '/',
                end: !0,
                children: l.jsx('img', {
                  src: '/app-logo.svg',
                  width: '60',
                  height: '60',
                }),
              }),
              l.jsx('div', {
                className: 'w-[300px] flex items-center justify-center',
                children: l.jsx(co, {}),
              }),
              l.jsx('div', {
                className:
                  'flex flex-row items-center justify-center  w-[300px] gap-2',
                children: c
                  ? l.jsxs(l.Fragment, {
                      children: [
                        l.jsx(ve, {
                          variant: 'custom',
                          onClick: g,
                          children: s('auth.logOut'),
                        }),
                        l.jsx(z, {
                          to: '/mainClint',
                          end: !0,
                          className: 'w-1/2',
                          children: l.jsx(ve, {
                            variant: 'custom',
                            children: s('app.mainPage'),
                          }),
                        }),
                      ],
                    })
                  : l.jsxs(l.Fragment, {
                      children: [
                        l.jsx(z, {
                          to: '/signIn',
                          end: !0,
                          className: 'w-1/2 flex justify-end ',
                          children: l.jsx(xe, { text: 'auth.signIn' }),
                        }),
                        l.jsx(z, {
                          to: '/signUp',
                          end: !0,
                          className: 'w-1/2',
                          children: l.jsx(xe, { text: 'auth.signUp' }),
                        }),
                      ],
                    }),
              }),
            ],
          }),
        }),
      });
}
const lo = Wr({ reducer: { language: so } });
function _o() {
  return [{ rel: 'stylesheet', href: './App.css?url' }];
}
const Co = mt(function () {
  const t = Be();
  return (
    h.useEffect(() => {
      const n = _t(t);
      return () => {
        n();
      };
    }, [t]),
    l.jsxs('html', {
      lang: 'en',
      children: [
        l.jsxs('head', {
          children: [
            l.jsx('meta', { charSet: 'UTF-8' }),
            l.jsx(yt, {}),
            l.jsx(wt, {}),
            l.jsx('title', { children: 'My App' }),
          ],
        }),
        l.jsx('body', {
          children: l.jsx(kt, {
            children: l.jsx(Ct, {
              children: l.jsx(Zt, {
                store: lo,
                children: l.jsxs('div', {
                  className: 'bg-pink-100 min-h-screen flex flex-col',
                  children: [
                    l.jsx(uo, {}),
                    l.jsx('main', {
                      className:
                        'flex-1 w-full flex flex-col items-center justify-center bg-pink-100 overflow-y-auto px-8 py-6 pt-0',
                      children: l.jsx('div', {
                        className:
                          'p-[2vw] w-full min-h-[83dvh] rounded-2xl bg-pink-200 flex flex-col items-stretch box-border',
                        children: l.jsx(pr, { children: l.jsx(bt, {}) }),
                      }),
                    }),
                    l.jsx(vt, {}),
                    l.jsx(mr, {}),
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    })
  );
});
export { Co as default, _o as links };
