function aa(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const a in n)
        if (a !== 'default' && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o &&
            Object.defineProperty(
              e,
              a,
              o.get ? o : { enumerable: !0, get: () => n[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
function oa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ht = { exports: {} },
  Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r;
function ia() {
  if (_r) return Ze;
  _r = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.fragment');
  function r(n, a, o) {
    var i = null;
    if (
      (o !== void 0 && (i = '' + o),
      a.key !== void 0 && (i = '' + a.key),
      'key' in a)
    ) {
      o = {};
      for (var s in a) s !== 'key' && (o[s] = a[s]);
    } else o = a;
    return (
      (a = o.ref),
      { $$typeof: e, type: n, key: i, ref: a !== void 0 ? a : null, props: o }
    );
  }
  return ((Ze.Fragment = t), (Ze.jsx = r), (Ze.jsxs = r), Ze);
}
var Dr;
function la() {
  return (Dr || ((Dr = 1), (Ht.exports = ia())), Ht.exports);
}
var hl = la(),
  zt = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or;
function sa() {
  if (Or) return W;
  Or = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    n = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    o = Symbol.for('react.consumer'),
    i = Symbol.for('react.context'),
    s = Symbol.for('react.forward_ref'),
    l = Symbol.for('react.suspense'),
    u = Symbol.for('react.memo'),
    d = Symbol.for('react.lazy'),
    m = Symbol.iterator;
  function v(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (m && f[m]) || f['@@iterator']),
        typeof f == 'function' ? f : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    T = {};
  function E(f, b, F) {
    ((this.props = f),
      (this.context = b),
      (this.refs = T),
      (this.updater = F || w));
  }
  ((E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (f, b) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, b, 'setState');
    }),
    (E.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    }));
  function P() {}
  P.prototype = E.prototype;
  function x(f, b, F) {
    ((this.props = f),
      (this.context = b),
      (this.refs = T),
      (this.updater = F || w));
  }
  var _ = (x.prototype = new P());
  ((_.constructor = x), R(_, E.prototype), (_.isPureReactComponent = !0));
  var M = Array.isArray,
    S = { H: null, A: null, T: null, S: null, V: null },
    p = Object.prototype.hasOwnProperty;
  function D(f, b, F, I, Y, Z) {
    return (
      (F = Z.ref),
      { $$typeof: e, type: f, key: b, ref: F !== void 0 ? F : null, props: Z }
    );
  }
  function z(f, b) {
    return D(f.type, b, void 0, void 0, void 0, f.props);
  }
  function H(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === e;
  }
  function K(f) {
    var b = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (F) {
        return b[F];
      })
    );
  }
  var ie = /\/+/g;
  function me(f, b) {
    return typeof f == 'object' && f !== null && f.key != null
      ? K('' + f.key)
      : b.toString(36);
  }
  function X() {}
  function Q(f) {
    switch (f.status) {
      case 'fulfilled':
        return f.value;
      case 'rejected':
        throw f.reason;
      default:
        switch (
          (typeof f.status == 'string'
            ? f.then(X, X)
            : ((f.status = 'pending'),
              f.then(
                function (b) {
                  f.status === 'pending' &&
                    ((f.status = 'fulfilled'), (f.value = b));
                },
                function (b) {
                  f.status === 'pending' &&
                    ((f.status = 'rejected'), (f.reason = b));
                }
              )),
          f.status)
        ) {
          case 'fulfilled':
            return f.value;
          case 'rejected':
            throw f.reason;
        }
    }
    throw f;
  }
  function ae(f, b, F, I, Y) {
    var Z = typeof f;
    (Z === 'undefined' || Z === 'boolean') && (f = null);
    var B = !1;
    if (f === null) B = !0;
    else
      switch (Z) {
        case 'bigint':
        case 'string':
        case 'number':
          B = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case e:
            case t:
              B = !0;
              break;
            case d:
              return ((B = f._init), ae(B(f._payload), b, F, I, Y));
          }
      }
    if (B)
      return (
        (Y = Y(f)),
        (B = I === '' ? '.' + me(f, 0) : I),
        M(Y)
          ? ((F = ''),
            B != null && (F = B.replace(ie, '$&/') + '/'),
            ae(Y, b, F, '', function (kt) {
              return kt;
            }))
          : Y != null &&
            (H(Y) &&
              (Y = z(
                Y,
                F +
                  (Y.key == null || (f && f.key === Y.key)
                    ? ''
                    : ('' + Y.key).replace(ie, '$&/') + '/') +
                  B
              )),
            b.push(Y)),
        1
      );
    B = 0;
    var Se = I === '' ? '.' : I + ':';
    if (M(f))
      for (var oe = 0; oe < f.length; oe++)
        ((I = f[oe]), (Z = Se + me(I, oe)), (B += ae(I, b, F, Z, Y)));
    else if (((oe = v(f)), typeof oe == 'function'))
      for (f = oe.call(f), oe = 0; !(I = f.next()).done; )
        ((I = I.value), (Z = Se + me(I, oe++)), (B += ae(I, b, F, Z, Y)));
    else if (Z === 'object') {
      if (typeof f.then == 'function') return ae(Q(f), b, F, I, Y);
      throw (
        (b = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (b === '[object Object]'
              ? 'object with keys {' + Object.keys(f).join(', ') + '}'
              : b) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return B;
  }
  function V(f, b, F) {
    if (f == null) return f;
    var I = [],
      Y = 0;
    return (
      ae(f, I, '', '', function (Z) {
        return b.call(F, Z, Y++);
      }),
      I
    );
  }
  function pe(f) {
    if (f._status === -1) {
      var b = f._result;
      ((b = b()),
        b.then(
          function (F) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = F));
          },
          function (F) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = F));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = b)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ue =
    typeof reportError == 'function'
      ? reportError
      : function (f) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var b = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof f == 'object' &&
                f !== null &&
                typeof f.message == 'string'
                  ? String(f.message)
                  : String(f),
              error: f,
            });
            if (!window.dispatchEvent(b)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', f);
            return;
          }
          console.error(f);
        };
  function ve() {}
  return (
    (W.Children = {
      map: V,
      forEach: function (f, b, F) {
        V(
          f,
          function () {
            b.apply(this, arguments);
          },
          F
        );
      },
      count: function (f) {
        var b = 0;
        return (
          V(f, function () {
            b++;
          }),
          b
        );
      },
      toArray: function (f) {
        return (
          V(f, function (b) {
            return b;
          }) || []
        );
      },
      only: function (f) {
        if (!H(f))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return f;
      },
    }),
    (W.Component = E),
    (W.Fragment = r),
    (W.Profiler = a),
    (W.PureComponent = x),
    (W.StrictMode = n),
    (W.Suspense = l),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (f) {
        return S.H.useMemoCache(f);
      },
    }),
    (W.cache = function (f) {
      return function () {
        return f.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (f, b, F) {
      if (f == null)
        throw Error(
          'The argument must be a React element, but you passed ' + f + '.'
        );
      var I = R({}, f.props),
        Y = f.key,
        Z = void 0;
      if (b != null)
        for (B in (b.ref !== void 0 && (Z = void 0),
        b.key !== void 0 && (Y = '' + b.key),
        b))
          !p.call(b, B) ||
            B === 'key' ||
            B === '__self' ||
            B === '__source' ||
            (B === 'ref' && b.ref === void 0) ||
            (I[B] = b[B]);
      var B = arguments.length - 2;
      if (B === 1) I.children = F;
      else if (1 < B) {
        for (var Se = Array(B), oe = 0; oe < B; oe++)
          Se[oe] = arguments[oe + 2];
        I.children = Se;
      }
      return D(f.type, Y, void 0, void 0, Z, I);
    }),
    (W.createContext = function (f) {
      return (
        (f = {
          $$typeof: i,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (f.Provider = f),
        (f.Consumer = { $$typeof: o, _context: f }),
        f
      );
    }),
    (W.createElement = function (f, b, F) {
      var I,
        Y = {},
        Z = null;
      if (b != null)
        for (I in (b.key !== void 0 && (Z = '' + b.key), b))
          p.call(b, I) &&
            I !== 'key' &&
            I !== '__self' &&
            I !== '__source' &&
            (Y[I] = b[I]);
      var B = arguments.length - 2;
      if (B === 1) Y.children = F;
      else if (1 < B) {
        for (var Se = Array(B), oe = 0; oe < B; oe++)
          Se[oe] = arguments[oe + 2];
        Y.children = Se;
      }
      if (f && f.defaultProps)
        for (I in ((B = f.defaultProps), B)) Y[I] === void 0 && (Y[I] = B[I]);
      return D(f, Z, void 0, void 0, null, Y);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (f) {
      return { $$typeof: s, render: f };
    }),
    (W.isValidElement = H),
    (W.lazy = function (f) {
      return { $$typeof: d, _payload: { _status: -1, _result: f }, _init: pe };
    }),
    (W.memo = function (f, b) {
      return { $$typeof: u, type: f, compare: b === void 0 ? null : b };
    }),
    (W.startTransition = function (f) {
      var b = S.T,
        F = {};
      S.T = F;
      try {
        var I = f(),
          Y = S.S;
        (Y !== null && Y(F, I),
          typeof I == 'object' &&
            I !== null &&
            typeof I.then == 'function' &&
            I.then(ve, ue));
      } catch (Z) {
        ue(Z);
      } finally {
        S.T = b;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return S.H.useCacheRefresh();
    }),
    (W.use = function (f) {
      return S.H.use(f);
    }),
    (W.useActionState = function (f, b, F) {
      return S.H.useActionState(f, b, F);
    }),
    (W.useCallback = function (f, b) {
      return S.H.useCallback(f, b);
    }),
    (W.useContext = function (f) {
      return S.H.useContext(f);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (f, b) {
      return S.H.useDeferredValue(f, b);
    }),
    (W.useEffect = function (f, b, F) {
      var I = S.H;
      if (typeof F == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return I.useEffect(f, b);
    }),
    (W.useId = function () {
      return S.H.useId();
    }),
    (W.useImperativeHandle = function (f, b, F) {
      return S.H.useImperativeHandle(f, b, F);
    }),
    (W.useInsertionEffect = function (f, b) {
      return S.H.useInsertionEffect(f, b);
    }),
    (W.useLayoutEffect = function (f, b) {
      return S.H.useLayoutEffect(f, b);
    }),
    (W.useMemo = function (f, b) {
      return S.H.useMemo(f, b);
    }),
    (W.useOptimistic = function (f, b) {
      return S.H.useOptimistic(f, b);
    }),
    (W.useReducer = function (f, b, F) {
      return S.H.useReducer(f, b, F);
    }),
    (W.useRef = function (f) {
      return S.H.useRef(f);
    }),
    (W.useState = function (f) {
      return S.H.useState(f);
    }),
    (W.useSyncExternalStore = function (f, b, F) {
      return S.H.useSyncExternalStore(f, b, F);
    }),
    (W.useTransition = function () {
      return S.H.useTransition();
    }),
    (W.version = '19.1.1'),
    W
  );
}
var Ar;
function ua() {
  return (Ar || ((Ar = 1), (zt.exports = sa())), zt.exports);
}
var h = ua();
const ca = oa(h),
  ml = aa({ __proto__: null, default: ca }, [h]);
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var nn = (e) => {
    throw TypeError(e);
  },
  da = (e, t, r) => t.has(e) || nn('Cannot ' + r),
  Bt = (e, t, r) => (
    da(e, t, 'read from private field'),
    r ? r.call(e) : t.get(e)
  ),
  fa = (e, t, r) =>
    t.has(e)
      ? nn('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Nr = 'popstate';
function pl(e = {}) {
  function t(n, a) {
    let { pathname: o, search: i, hash: s } = n.location;
    return at(
      '',
      { pathname: o, search: i, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : Ne(a);
  }
  return ma(t, r, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ne(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ha() {
  return Math.random().toString(36).substring(2, 10);
}
function $r(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function at(e, t, r = null, n) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? $e(t) : t),
    state: r,
    key: (t && t.key) || n || ha(),
  };
}
function Ne({ pathname: e = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function $e(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf('?');
    (n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
      e && (t.pathname = e));
  }
  return t;
}
function ma(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    i = a.history,
    s = 'POP',
    l = null,
    u = d();
  u == null && ((u = 0), i.replaceState({ ...i.state, idx: u }, ''));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    s = 'POP';
    let E = d(),
      P = E == null ? null : E - u;
    ((u = E), l && l({ action: s, location: T.location, delta: P }));
  }
  function v(E, P) {
    s = 'PUSH';
    let x = at(T.location, E, P);
    u = d() + 1;
    let _ = $r(x, u),
      M = T.createHref(x);
    try {
      i.pushState(_, '', M);
    } catch (S) {
      if (S instanceof DOMException && S.name === 'DataCloneError') throw S;
      a.location.assign(M);
    }
    o && l && l({ action: s, location: T.location, delta: 1 });
  }
  function w(E, P) {
    s = 'REPLACE';
    let x = at(T.location, E, P);
    u = d();
    let _ = $r(x, u),
      M = T.createHref(x);
    (i.replaceState(_, '', M),
      o && l && l({ action: s, location: T.location, delta: 0 }));
  }
  function R(E) {
    return an(E);
  }
  let T = {
    get action() {
      return s;
    },
    get location() {
      return e(a, i);
    },
    listen(E) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Nr, m),
        (l = E),
        () => {
          (a.removeEventListener(Nr, m), (l = null));
        }
      );
    },
    createHref(E) {
      return t(a, E);
    },
    createURL: R,
    encodeLocation(E) {
      let P = R(E);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: v,
    replace: w,
    go(E) {
      return i.go(E);
    },
  };
  return T;
}
function an(e, t = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' &&
    (r =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    J(r, 'No window.location.(origin|href) available to create URL'));
  let n = typeof e == 'string' ? e : Ne(e);
  return (
    (n = n.replace(/ $/, '%20')),
    !t && n.startsWith('//') && (n = r + n),
    new URL(n, r)
  );
}
var nt,
  kr = class {
    constructor(e) {
      if ((fa(this, nt, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (Bt(this, nt).has(e)) return Bt(this, nt).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error('No value found for context');
    }
    set(e, t) {
      Bt(this, nt).set(e, t);
    }
  };
nt = new WeakMap();
var pa = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function ya(e) {
  return pa.has(e);
}
var va = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'unstable_middleware',
  'children',
]);
function ga(e) {
  return va.has(e);
}
function wa(e) {
  return e.index === !0;
}
function ot(e, t, r = [], n = {}, a = !1) {
  return e.map((o, i) => {
    let s = [...r, String(i)],
      l = typeof o.id == 'string' ? o.id : s.join('-');
    if (
      (J(
        o.index !== !0 || !o.children,
        'Cannot specify children on an index route'
      ),
      J(
        a || !n[l],
        `Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`
      ),
      wa(o))
    ) {
      let u = { ...o, ...t(o), id: l };
      return ((n[l] = u), u);
    } else {
      let u = { ...o, ...t(o), id: l, children: void 0 };
      return (
        (n[l] = u),
        o.children && (u.children = ot(o.children, t, s, n, a)),
        u
      );
    }
  });
}
function Le(e, t, r = '/') {
  return Rt(e, t, r, !1);
}
function Rt(e, t, r, n) {
  let a = typeof t == 'string' ? $e(t) : t,
    o = Ee(a.pathname || '/', r);
  if (o == null) return null;
  let i = ln(e);
  Ea(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
    let u = _a(o);
    s = Ma(i[l], u, n);
  }
  return s;
}
function on(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return {
    id: r.id,
    pathname: n,
    params: a,
    data: t[r.id],
    loaderData: t[r.id],
    handle: r.handle,
  };
}
function ln(e, t = [], r = [], n = '', a = !1) {
  let o = (i, s, l = a, u) => {
    let d = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    if (d.relativePath.startsWith('/')) {
      if (!d.relativePath.startsWith(n) && l) return;
      (J(
        d.relativePath.startsWith(n),
        `Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (d.relativePath = d.relativePath.slice(n.length)));
    }
    let m = Pe([n, d.relativePath]),
      v = r.concat(d);
    (i.children &&
      i.children.length > 0 &&
      (J(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      ln(i.children, t, v, m, l)),
      !(i.path == null && !i.index) &&
        t.push({ path: m, score: La(m, i.index), routesMeta: v }));
  };
  return (
    e.forEach((i, s) => {
      if (i.path === '' || !i.path?.includes('?')) o(i, s);
      else for (let l of sn(i.path)) o(i, s, !0, l);
    }),
    t
  );
}
function sn(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [o, ''] : [o];
  let i = sn(n.join('/')),
    s = [];
  return (
    s.push(...i.map((l) => (l === '' ? o : [o, l].join('/')))),
    a && s.push(...i),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function Ea(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Ta(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var Ra = /^:[\w-]+$/,
  ba = 3,
  Sa = 2,
  xa = 1,
  Pa = 10,
  Ca = -2,
  Fr = (e) => e === '*';
function La(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Fr) && (n += Ca),
    t && (n += Sa),
    r
      .filter((a) => !Fr(a))
      .reduce((a, o) => a + (Ra.test(o) ? ba : o === '' ? xa : Pa), n)
  );
}
function Ta(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ma(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    o = '/',
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      d = o === '/' ? t : t.slice(o.length) || '/',
      m = Ct(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d
      ),
      v = l.route;
    if (
      (!m &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (m = Ct(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !m)
    )
      return null;
    (Object.assign(a, m.params),
      i.push({
        params: a,
        pathname: Pe([o, m.pathname]),
        pathnameBase: Na(Pe([o, m.pathnameBase])),
        route: v,
      }),
      m.pathnameBase !== '/' && (o = Pe([o, m.pathnameBase])));
  }
  return i;
}
function Ct(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = un(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    i = o.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: n.reduce((u, { paramName: d, isOptional: m }, v) => {
      if (d === '*') {
        let R = s[v] || '';
        i = o.slice(0, o.length - R.length).replace(/(.)\/+$/, '$1');
      }
      const w = s[v];
      return (
        m && !w ? (u[d] = void 0) : (u[d] = (w || '').replace(/%2F/g, '/')),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function un(e, t = !1, r = !0) {
  ne(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, s, l) => (
            n.push({ paramName: s, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function _a(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ne(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function Ee(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function Da({ basename: e, pathname: t }) {
  return t === '/' ? e : Pe([e, t]);
}
function Oa(e, t = '/') {
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? $e(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : Aa(r, t)) : t,
    search: $a(n),
    hash: ka(a),
  };
}
function Aa(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Wt(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function cn(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function _t(e) {
  let t = cn(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Dt(e, t, r, n = !1) {
  let a;
  typeof e == 'string'
    ? (a = $e(e))
    : ((a = { ...e }),
      J(
        !a.pathname || !a.pathname.includes('?'),
        Wt('?', 'pathname', 'search', a)
      ),
      J(
        !a.pathname || !a.pathname.includes('#'),
        Wt('#', 'pathname', 'hash', a)
      ),
      J(!a.search || !a.search.includes('#'), Wt('#', 'search', 'hash', a)));
  let o = e === '' || a.pathname === '',
    i = o ? '/' : a.pathname,
    s;
  if (i == null) s = r;
  else {
    let m = t.length - 1;
    if (!n && i.startsWith('..')) {
      let v = i.split('/');
      for (; v[0] === '..'; ) (v.shift(), (m -= 1));
      a.pathname = v.join('/');
    }
    s = m >= 0 ? t[m] : '/';
  }
  let l = Oa(a, s),
    u = i && i !== '/' && i.endsWith('/'),
    d = (o || i === '.') && r.endsWith('/');
  return (!l.pathname.endsWith('/') && (u || d) && (l.pathname += '/'), l);
}
var Pe = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Na = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  $a = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  ka = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  Fa = class {
    constructor(e, t) {
      ((this.type = 'DataWithResponseInit'),
        (this.data = e),
        (this.init = t || null));
    }
  };
function Ia(e, t) {
  return new Fa(e, typeof t == 'number' ? { status: t } : t);
}
var ja = (e, t = 302) => {
    let r = t;
    typeof r == 'number'
      ? (r = { status: r })
      : typeof r.status > 'u' && (r.status = 302);
    let n = new Headers(r.headers);
    return (n.set('Location', e), new Response(null, { ...r, headers: n }));
  },
  ze = class {
    constructor(e, t, r, n = !1) {
      ((this.status = e),
        (this.statusText = t || ''),
        (this.internal = n),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r));
    }
  };
function Be(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var dn = ['POST', 'PUT', 'PATCH', 'DELETE'],
  Ua = new Set(dn),
  Ha = ['GET', ...dn],
  za = new Set(Ha),
  Ba = new Set([301, 302, 303, 307, 308]),
  Wa = new Set([307, 308]),
  Yt = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ya = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  et = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Va = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lr = (e) => Va.test(e),
  Ja = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  fn = 'remix-router-transitions',
  hn = Symbol('ResetLoaderData');
function yl(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u';
  J(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let n = e.hydrationRouteProperties || [],
    a = e.mapRouteProperties || Ja,
    o = {},
    i = ot(e.routes, a, void 0, o),
    s,
    l = e.basename || '/';
  l.startsWith('/') || (l = `/${l}`);
  let u = e.dataStrategy || Qa,
    d = { ...e.future },
    m = null,
    v = new Set(),
    w = null,
    R = null,
    T = null,
    E = e.hydrationData != null,
    P = Le(i, e.history.location, l),
    x = !1,
    _ = null,
    M;
  if (P == null && !e.patchRoutesOnNavigation) {
    let c = we(404, { pathname: e.history.location.pathname }),
      { matches: y, route: g } = yt(i);
    ((M = !0), (P = y), (_ = { [g.id]: c }));
  } else if (
    (P &&
      !e.hydrationData &&
      dt(P, i, e.history.location.pathname).active &&
      (P = null),
    P)
  )
    if (P.some((c) => c.route.lazy)) M = !1;
    else if (!P.some((c) => c.route.loader)) M = !0;
    else {
      let c = e.hydrationData ? e.hydrationData.loaderData : null,
        y = e.hydrationData ? e.hydrationData.errors : null;
      if (y) {
        let g = P.findIndex((C) => y[C.route.id] !== void 0);
        M = P.slice(0, g + 1).every((C) => !Qt(C.route, c, y));
      } else M = P.every((g) => !Qt(g.route, c, y));
    }
  else {
    ((M = !1), (P = []));
    let c = dt(null, i, e.history.location.pathname);
    c.active && c.matches && ((x = !0), (P = c.matches));
  }
  let S,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: M,
      navigation: Yt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || _,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = 'POP',
    z = !1,
    H,
    K = !1,
    ie = new Map(),
    me = null,
    X = !1,
    Q = !1,
    ae = new Set(),
    V = new Map(),
    pe = 0,
    ue = -1,
    ve = new Map(),
    f = new Set(),
    b = new Map(),
    F = new Map(),
    I = new Set(),
    Y = new Map(),
    Z,
    B = null;
  function Se() {
    if (
      ((m = e.history.listen(({ action: c, location: y, delta: g }) => {
        if (Z) {
          (Z(), (Z = void 0));
          return;
        }
        ne(
          Y.size === 0 || g != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let C = Cr({
          currentLocation: p.location,
          nextLocation: y,
          historyAction: c,
        });
        if (C && g != null) {
          let L = new Promise((A) => {
            Z = A;
          });
          (e.history.go(g * -1),
            ct(C, {
              state: 'blocked',
              location: y,
              proceed() {
                (ct(C, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: y,
                }),
                  L.then(() => e.history.go(g)));
              },
              reset() {
                let A = new Map(p.blockers);
                (A.set(C, et), ce({ blockers: A }));
              },
            }));
          return;
        }
        return ke(c, y);
      })),
      r)
    ) {
      mo(t, ie);
      let c = () => po(t, ie);
      (t.addEventListener('pagehide', c),
        (me = () => t.removeEventListener('pagehide', c)));
    }
    return (
      p.initialized || ke('POP', p.location, { initialHydration: !0 }),
      S
    );
  }
  function oe() {
    (m && m(),
      me && me(),
      v.clear(),
      H && H.abort(),
      p.fetchers.forEach((c, y) => It(y)),
      p.blockers.forEach((c, y) => Pr(y)));
  }
  function kt(c) {
    return (v.add(c), () => v.delete(c));
  }
  function ce(c, y = {}) {
    (c.matches &&
      (c.matches = c.matches.map((L) => {
        let A = o[L.route.id],
          $ = L.route;
        return $.element !== A.element ||
          $.errorElement !== A.errorElement ||
          $.hydrateFallbackElement !== A.hydrateFallbackElement
          ? { ...L, route: A }
          : L;
      })),
      (p = { ...p, ...c }));
    let g = [],
      C = [];
    (p.fetchers.forEach((L, A) => {
      L.state === 'idle' && (I.has(A) ? g.push(A) : C.push(A));
    }),
      I.forEach((L) => {
        !p.fetchers.has(L) && !V.has(L) && g.push(L);
      }),
      [...v].forEach((L) =>
        L(p, {
          deletedFetchers: g,
          viewTransitionOpts: y.viewTransitionOpts,
          flushSync: y.flushSync === !0,
        })
      ),
      g.forEach((L) => It(L)),
      C.forEach((L) => p.fetchers.delete(L)));
  }
  function Ye(c, y, { flushSync: g } = {}) {
    let C =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        ye(p.navigation.formMethod) &&
        p.navigation.state === 'loading' &&
        c.state?._isRedirect !== !0,
      L;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (L = y.actionData)
        : (L = null)
      : C
        ? (L = p.actionData)
        : (L = null);
    let A = y.loaderData
        ? Jr(p.loaderData, y.loaderData, y.matches || [], y.errors)
        : p.loaderData,
      $ = p.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((k, N) => $.set(N, et)));
    let O = X ? !1 : Tr(c, y.matches || p.matches),
      j =
        z === !0 ||
        (p.navigation.formMethod != null &&
          ye(p.navigation.formMethod) &&
          c.state?._isRedirect !== !0);
    (s && ((i = s), (s = void 0)),
      X ||
        D === 'POP' ||
        (D === 'PUSH'
          ? e.history.push(c, c.state)
          : D === 'REPLACE' && e.history.replace(c, c.state)));
    let U;
    if (D === 'POP') {
      let k = ie.get(p.location.pathname);
      k && k.has(c.pathname)
        ? (U = { currentLocation: p.location, nextLocation: c })
        : ie.has(c.pathname) &&
          (U = { currentLocation: c, nextLocation: p.location });
    } else if (K) {
      let k = ie.get(p.location.pathname);
      (k
        ? k.add(c.pathname)
        : ((k = new Set([c.pathname])), ie.set(p.location.pathname, k)),
        (U = { currentLocation: p.location, nextLocation: c }));
    }
    (ce(
      {
        ...y,
        actionData: L,
        loaderData: A,
        historyAction: D,
        location: c,
        initialized: !0,
        navigation: Yt,
        revalidation: 'idle',
        restoreScrollPosition: O,
        preventScrollReset: j,
        blockers: $,
      },
      { viewTransitionOpts: U, flushSync: g === !0 }
    ),
      (D = 'POP'),
      (z = !1),
      (K = !1),
      (X = !1),
      (Q = !1),
      B?.resolve(),
      (B = null));
  }
  async function gr(c, y) {
    if (typeof c == 'number') {
      e.history.go(c);
      return;
    }
    let g = qt(p.location, p.matches, l, c, y?.fromRouteId, y?.relative),
      { path: C, submission: L, error: A } = Ir(!1, g, y),
      $ = p.location,
      O = at(p.location, C, y && y.state);
    O = { ...O, ...e.history.encodeLocation(O) };
    let j = y && y.replace != null ? y.replace : void 0,
      U = 'PUSH';
    j === !0
      ? (U = 'REPLACE')
      : j === !1 ||
        (L != null &&
          ye(L.formMethod) &&
          L.formAction === p.location.pathname + p.location.search &&
          (U = 'REPLACE'));
    let k =
        y && 'preventScrollReset' in y ? y.preventScrollReset === !0 : void 0,
      N = (y && y.flushSync) === !0,
      G = Cr({ currentLocation: $, nextLocation: O, historyAction: U });
    if (G) {
      ct(G, {
        state: 'blocked',
        location: O,
        proceed() {
          (ct(G, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: O,
          }),
            gr(c, y));
        },
        reset() {
          let te = new Map(p.blockers);
          (te.set(G, et), ce({ blockers: te }));
        },
      });
      return;
    }
    await ke(U, O, {
      submission: L,
      pendingError: A,
      preventScrollReset: k,
      replace: y && y.replace,
      enableViewTransition: y && y.viewTransition,
      flushSync: N,
    });
  }
  function Wn() {
    (B || (B = yo()), Ft(), ce({ revalidation: 'loading' }));
    let c = B.promise;
    return p.navigation.state === 'submitting'
      ? c
      : p.navigation.state === 'idle'
        ? (ke(p.historyAction, p.location, {
            startUninterruptedRevalidation: !0,
          }),
          c)
        : (ke(D || p.historyAction, p.navigation.location, {
            overrideNavigation: p.navigation,
            enableViewTransition: K === !0,
          }),
          c);
  }
  async function ke(c, y, g) {
    (H && H.abort(),
      (H = null),
      (D = c),
      (X = (g && g.startUninterruptedRevalidation) === !0),
      ea(p.location, p.matches),
      (z = (g && g.preventScrollReset) === !0),
      (K = (g && g.enableViewTransition) === !0));
    let C = s || i,
      L = g && g.overrideNavigation,
      A =
        g?.initialHydration && p.matches && p.matches.length > 0 && !x
          ? p.matches
          : Le(C, y, l),
      $ = (g && g.flushSync) === !0;
    if (
      A &&
      p.initialized &&
      !Q &&
      io(p.location, y) &&
      !(g && g.submission && ye(g.submission.formMethod))
    ) {
      Ye(y, { matches: A }, { flushSync: $ });
      return;
    }
    let O = dt(A, C, y.pathname);
    if ((O.active && O.matches && (A = O.matches), !A)) {
      let { error: fe, notFoundMatches: re, route: ee } = jt(y.pathname);
      Ye(
        y,
        { matches: re, loaderData: {}, errors: { [ee.id]: fe } },
        { flushSync: $ }
      );
      return;
    }
    H = new AbortController();
    let j = Je(e.history, y, H.signal, g && g.submission),
      U = e.unstable_getContext ? await e.unstable_getContext() : new kr(),
      k;
    if (g && g.pendingError)
      k = [Ae(A).route.id, { type: 'error', error: g.pendingError }];
    else if (g && g.submission && ye(g.submission.formMethod)) {
      let fe = await Yn(
        j,
        y,
        g.submission,
        A,
        U,
        O.active,
        g && g.initialHydration === !0,
        { replace: g.replace, flushSync: $ }
      );
      if (fe.shortCircuited) return;
      if (fe.pendingActionResult) {
        let [re, ee] = fe.pendingActionResult;
        if (ge(ee) && Be(ee.error) && ee.error.status === 404) {
          ((H = null),
            Ye(y, {
              matches: fe.matches,
              loaderData: {},
              errors: { [re]: ee.error },
            }));
          return;
        }
      }
      ((A = fe.matches || A),
        (k = fe.pendingActionResult),
        (L = Vt(y, g.submission)),
        ($ = !1),
        (O.active = !1),
        (j = Je(e.history, j.url, j.signal)));
    }
    let {
      shortCircuited: N,
      matches: G,
      loaderData: te,
      errors: se,
    } = await Vn(
      j,
      y,
      A,
      U,
      O.active,
      L,
      g && g.submission,
      g && g.fetcherSubmission,
      g && g.replace,
      g && g.initialHydration === !0,
      $,
      k
    );
    N ||
      ((H = null),
      Ye(y, { matches: G || A, ...Kr(k), loaderData: te, errors: se }));
  }
  async function Yn(c, y, g, C, L, A, $, O = {}) {
    Ft();
    let j = fo(y, g);
    if ((ce({ navigation: j }, { flushSync: O.flushSync === !0 }), A)) {
      let N = await ft(C, y.pathname, c.signal);
      if (N.type === 'aborted') return { shortCircuited: !0 };
      if (N.type === 'error') {
        if (N.partialMatches.length === 0) {
          let { matches: te, route: se } = yt(i);
          return {
            matches: te,
            pendingActionResult: [se.id, { type: 'error', error: N.error }],
          };
        }
        let G = Ae(N.partialMatches).route.id;
        return {
          matches: N.partialMatches,
          pendingActionResult: [G, { type: 'error', error: N.error }],
        };
      } else if (N.matches) C = N.matches;
      else {
        let { notFoundMatches: G, error: te, route: se } = jt(y.pathname);
        return {
          matches: G,
          pendingActionResult: [se.id, { type: 'error', error: te }],
        };
      }
    }
    let U,
      k = bt(C, y);
    if (!k.route.action && !k.route.lazy)
      U = {
        type: 'error',
        error: we(405, {
          method: c.method,
          pathname: y.pathname,
          routeId: k.route.id,
        }),
      };
    else {
      let N = Ke(a, o, c, C, k, $ ? [] : n, L),
        G = await Xe(c, N, L, null);
      if (((U = G[k.route.id]), !U)) {
        for (let te of C)
          if (G[te.route.id]) {
            U = G[te.route.id];
            break;
          }
      }
      if (c.signal.aborted) return { shortCircuited: !0 };
    }
    if (He(U)) {
      let N;
      return (
        O && O.replace != null
          ? (N = O.replace)
          : (N =
              Wr(U.response.headers.get('Location'), new URL(c.url), l) ===
              p.location.pathname + p.location.search),
        await Fe(c, U, !0, { submission: g, replace: N }),
        { shortCircuited: !0 }
      );
    }
    if (ge(U)) {
      let N = Ae(C, k.route.id);
      return (
        (O && O.replace) !== !0 && (D = 'PUSH'),
        { matches: C, pendingActionResult: [N.route.id, U, k.route.id] }
      );
    }
    return { matches: C, pendingActionResult: [k.route.id, U] };
  }
  async function Vn(c, y, g, C, L, A, $, O, j, U, k, N) {
    let G = A || Vt(y, $),
      te = $ || O || Gr(G),
      se = !X && !U;
    if (L) {
      if (se) {
        let de = wr(N);
        ce(
          { navigation: G, ...(de !== void 0 ? { actionData: de } : {}) },
          { flushSync: k }
        );
      }
      let q = await ft(g, y.pathname, c.signal);
      if (q.type === 'aborted') return { shortCircuited: !0 };
      if (q.type === 'error') {
        if (q.partialMatches.length === 0) {
          let { matches: Ve, route: Ue } = yt(i);
          return { matches: Ve, loaderData: {}, errors: { [Ue.id]: q.error } };
        }
        let de = Ae(q.partialMatches).route.id;
        return {
          matches: q.partialMatches,
          loaderData: {},
          errors: { [de]: q.error },
        };
      } else if (q.matches) g = q.matches;
      else {
        let { error: de, notFoundMatches: Ve, route: Ue } = jt(y.pathname);
        return { matches: Ve, loaderData: {}, errors: { [Ue.id]: de } };
      }
    }
    let fe = s || i,
      { dsMatches: re, revalidatingFetchers: ee } = jr(
        c,
        C,
        a,
        o,
        e.history,
        p,
        g,
        te,
        y,
        U ? [] : n,
        U === !0,
        Q,
        ae,
        I,
        b,
        f,
        fe,
        l,
        e.patchRoutesOnNavigation != null,
        N
      );
    if (
      ((ue = ++pe),
      !e.dataStrategy &&
        !re.some((q) => q.shouldLoad) &&
        !re.some((q) => q.route.unstable_middleware) &&
        ee.length === 0)
    ) {
      let q = Sr();
      return (
        Ye(
          y,
          {
            matches: g,
            loaderData: {},
            errors: N && ge(N[1]) ? { [N[0]]: N[1].error } : null,
            ...Kr(N),
            ...(q ? { fetchers: new Map(p.fetchers) } : {}),
          },
          { flushSync: k }
        ),
        { shortCircuited: !0 }
      );
    }
    if (se) {
      let q = {};
      if (!L) {
        q.navigation = G;
        let de = wr(N);
        de !== void 0 && (q.actionData = de);
      }
      (ee.length > 0 && (q.fetchers = Jn(ee)), ce(q, { flushSync: k }));
    }
    ee.forEach((q) => {
      (_e(q.key), q.controller && V.set(q.key, q.controller));
    });
    let Ie = () => ee.forEach((q) => _e(q.key));
    H && H.signal.addEventListener('abort', Ie);
    let { loaderResults: qe, fetcherResults: De } = await Er(re, ee, c, C);
    if (c.signal.aborted) return { shortCircuited: !0 };
    (H && H.signal.removeEventListener('abort', Ie),
      ee.forEach((q) => V.delete(q.key)));
    let xe = vt(qe);
    if (xe)
      return (
        await Fe(c, xe.result, !0, { replace: j }),
        { shortCircuited: !0 }
      );
    if (((xe = vt(De)), xe))
      return (
        f.add(xe.key),
        await Fe(c, xe.result, !0, { replace: j }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ut, errors: Qe } = Vr(p, g, qe, N, ee, De);
    U && p.errors && (Qe = { ...p.errors, ...Qe });
    let je = Sr(),
      ht = xr(ue),
      mt = je || ht || ee.length > 0;
    return {
      matches: g,
      loaderData: Ut,
      errors: Qe,
      ...(mt ? { fetchers: new Map(p.fetchers) } : {}),
    };
  }
  function wr(c) {
    if (c && !ge(c[1])) return { [c[0]]: c[1].data };
    if (p.actionData)
      return Object.keys(p.actionData).length === 0 ? null : p.actionData;
  }
  function Jn(c) {
    return (
      c.forEach((y) => {
        let g = p.fetchers.get(y.key),
          C = tt(void 0, g ? g.data : void 0);
        p.fetchers.set(y.key, C);
      }),
      new Map(p.fetchers)
    );
  }
  async function Kn(c, y, g, C) {
    _e(c);
    let L = (C && C.flushSync) === !0,
      A = s || i,
      $ = qt(p.location, p.matches, l, g, y, C?.relative),
      O = Le(A, $, l),
      j = dt(O, A, $);
    if ((j.active && j.matches && (O = j.matches), !O)) {
      Ce(c, y, we(404, { pathname: $ }), { flushSync: L });
      return;
    }
    let { path: U, submission: k, error: N } = Ir(!0, $, C);
    if (N) {
      Ce(c, y, N, { flushSync: L });
      return;
    }
    let G = e.unstable_getContext ? await e.unstable_getContext() : new kr(),
      te = (C && C.preventScrollReset) === !0;
    if (k && ye(k.formMethod)) {
      await Gn(c, y, U, O, G, j.active, L, te, k);
      return;
    }
    (b.set(c, { routeId: y, path: U }),
      await Xn(c, y, U, O, G, j.active, L, te, k));
  }
  async function Gn(c, y, g, C, L, A, $, O, j) {
    (Ft(), b.delete(c));
    let U = p.fetchers.get(c);
    Me(c, ho(j, U), { flushSync: $ });
    let k = new AbortController(),
      N = Je(e.history, g, k.signal, j);
    if (A) {
      let le = await ft(C, new URL(N.url).pathname, N.signal, c);
      if (le.type === 'aborted') return;
      if (le.type === 'error') {
        Ce(c, y, le.error, { flushSync: $ });
        return;
      } else if (le.matches) C = le.matches;
      else {
        Ce(c, y, we(404, { pathname: g }), { flushSync: $ });
        return;
      }
    }
    let G = bt(C, g);
    if (!G.route.action && !G.route.lazy) {
      let le = we(405, { method: j.formMethod, pathname: g, routeId: y });
      Ce(c, y, le, { flushSync: $ });
      return;
    }
    V.set(c, k);
    let te = pe,
      se = Ke(a, o, N, C, G, n, L),
      re = (await Xe(N, se, L, c))[G.route.id];
    if (N.signal.aborted) {
      V.get(c) === k && V.delete(c);
      return;
    }
    if (I.has(c)) {
      if (He(re) || ge(re)) {
        Me(c, Oe(void 0));
        return;
      }
    } else {
      if (He(re))
        if ((V.delete(c), ue > te)) {
          Me(c, Oe(void 0));
          return;
        } else
          return (
            f.add(c),
            Me(c, tt(j)),
            Fe(N, re, !1, { fetcherSubmission: j, preventScrollReset: O })
          );
      if (ge(re)) {
        Ce(c, y, re.error);
        return;
      }
    }
    let ee = p.navigation.location || p.location,
      Ie = Je(e.history, ee, k.signal),
      qe = s || i,
      De =
        p.navigation.state !== 'idle'
          ? Le(qe, p.navigation.location, l)
          : p.matches;
    J(De, "Didn't find any matches after fetcher action");
    let xe = ++pe;
    ve.set(c, xe);
    let Ut = tt(j, re.data);
    p.fetchers.set(c, Ut);
    let { dsMatches: Qe, revalidatingFetchers: je } = jr(
      Ie,
      L,
      a,
      o,
      e.history,
      p,
      De,
      j,
      ee,
      n,
      !1,
      Q,
      ae,
      I,
      b,
      f,
      qe,
      l,
      e.patchRoutesOnNavigation != null,
      [G.route.id, re]
    );
    (je
      .filter((le) => le.key !== c)
      .forEach((le) => {
        let pt = le.key,
          Mr = p.fetchers.get(pt),
          na = tt(void 0, Mr ? Mr.data : void 0);
        (p.fetchers.set(pt, na),
          _e(pt),
          le.controller && V.set(pt, le.controller));
      }),
      ce({ fetchers: new Map(p.fetchers) }));
    let ht = () => je.forEach((le) => _e(le.key));
    k.signal.addEventListener('abort', ht);
    let { loaderResults: mt, fetcherResults: q } = await Er(Qe, je, Ie, L);
    if (k.signal.aborted) return;
    if (
      (k.signal.removeEventListener('abort', ht),
      ve.delete(c),
      V.delete(c),
      je.forEach((le) => V.delete(le.key)),
      p.fetchers.has(c))
    ) {
      let le = Oe(re.data);
      p.fetchers.set(c, le);
    }
    let de = vt(mt);
    if (de) return Fe(Ie, de.result, !1, { preventScrollReset: O });
    if (((de = vt(q)), de))
      return (f.add(de.key), Fe(Ie, de.result, !1, { preventScrollReset: O }));
    let { loaderData: Ve, errors: Ue } = Vr(p, De, mt, void 0, je, q);
    (xr(xe),
      p.navigation.state === 'loading' && xe > ue
        ? (J(D, 'Expected pending action'),
          H && H.abort(),
          Ye(p.navigation.location, {
            matches: De,
            loaderData: Ve,
            errors: Ue,
            fetchers: new Map(p.fetchers),
          }))
        : (ce({
            errors: Ue,
            loaderData: Jr(p.loaderData, Ve, De, Ue),
            fetchers: new Map(p.fetchers),
          }),
          (Q = !1)));
  }
  async function Xn(c, y, g, C, L, A, $, O, j) {
    let U = p.fetchers.get(c);
    Me(c, tt(j, U ? U.data : void 0), { flushSync: $ });
    let k = new AbortController(),
      N = Je(e.history, g, k.signal);
    if (A) {
      let ee = await ft(C, new URL(N.url).pathname, N.signal, c);
      if (ee.type === 'aborted') return;
      if (ee.type === 'error') {
        Ce(c, y, ee.error, { flushSync: $ });
        return;
      } else if (ee.matches) C = ee.matches;
      else {
        Ce(c, y, we(404, { pathname: g }), { flushSync: $ });
        return;
      }
    }
    let G = bt(C, g);
    V.set(c, k);
    let te = pe,
      se = Ke(a, o, N, C, G, n, L),
      re = (await Xe(N, se, L, c))[G.route.id];
    if ((V.get(c) === k && V.delete(c), !N.signal.aborted)) {
      if (I.has(c)) {
        Me(c, Oe(void 0));
        return;
      }
      if (He(re))
        if (ue > te) {
          Me(c, Oe(void 0));
          return;
        } else {
          (f.add(c), await Fe(N, re, !1, { preventScrollReset: O }));
          return;
        }
      if (ge(re)) {
        Ce(c, y, re.error);
        return;
      }
      Me(c, Oe(re.data));
    }
  }
  async function Fe(
    c,
    y,
    g,
    {
      submission: C,
      fetcherSubmission: L,
      preventScrollReset: A,
      replace: $,
    } = {}
  ) {
    y.response.headers.has('X-Remix-Revalidate') && (Q = !0);
    let O = y.response.headers.get('Location');
    (J(O, 'Expected a Location header on the redirect Response'),
      (O = Wr(O, new URL(c.url), l)));
    let j = at(p.location, O, { _isRedirect: !0 });
    if (r) {
      let se = !1;
      if (y.response.headers.has('X-Remix-Reload-Document')) se = !0;
      else if (lr(O)) {
        const fe = an(O, !0);
        se = fe.origin !== t.location.origin || Ee(fe.pathname, l) == null;
      }
      if (se) {
        $ ? t.location.replace(O) : t.location.assign(O);
        return;
      }
    }
    H = null;
    let U =
        $ === !0 || y.response.headers.has('X-Remix-Replace')
          ? 'REPLACE'
          : 'PUSH',
      { formMethod: k, formAction: N, formEncType: G } = p.navigation;
    !C && !L && k && N && G && (C = Gr(p.navigation));
    let te = C || L;
    if (Wa.has(y.response.status) && te && ye(te.formMethod))
      await ke(U, j, {
        submission: { ...te, formAction: O },
        preventScrollReset: A || z,
        enableViewTransition: g ? K : void 0,
      });
    else {
      let se = Vt(j, C);
      await ke(U, j, {
        overrideNavigation: se,
        fetcherSubmission: L,
        preventScrollReset: A || z,
        enableViewTransition: g ? K : void 0,
      });
    }
  }
  async function Xe(c, y, g, C) {
    let L,
      A = {};
    try {
      L = await eo(u, c, y, C, g, !1);
    } catch ($) {
      return (
        y
          .filter((O) => O.shouldLoad)
          .forEach((O) => {
            A[O.route.id] = { type: 'error', error: $ };
          }),
        A
      );
    }
    if (c.signal.aborted) return A;
    for (let [$, O] of Object.entries(L))
      if (uo(O)) {
        let j = O.result;
        A[$] = { type: 'redirect', response: ao(j, c, $, y, l) };
      } else A[$] = await no(O);
    return A;
  }
  async function Er(c, y, g, C) {
    let L = Xe(g, c, C, null),
      A = Promise.all(
        y.map(async (j) => {
          if (j.matches && j.match && j.request && j.controller) {
            let k = (await Xe(j.request, j.matches, C, j.key))[
              j.match.route.id
            ];
            return { [j.key]: k };
          } else
            return Promise.resolve({
              [j.key]: { type: 'error', error: we(404, { pathname: j.path }) },
            });
        })
      ),
      $ = await L,
      O = (await A).reduce((j, U) => Object.assign(j, U), {});
    return { loaderResults: $, fetcherResults: O };
  }
  function Ft() {
    ((Q = !0),
      b.forEach((c, y) => {
        (V.has(y) && ae.add(y), _e(y));
      }));
  }
  function Me(c, y, g = {}) {
    (p.fetchers.set(c, y),
      ce(
        { fetchers: new Map(p.fetchers) },
        { flushSync: (g && g.flushSync) === !0 }
      ));
  }
  function Ce(c, y, g, C = {}) {
    let L = Ae(p.matches, y);
    (It(c),
      ce(
        { errors: { [L.route.id]: g }, fetchers: new Map(p.fetchers) },
        { flushSync: (C && C.flushSync) === !0 }
      ));
  }
  function Rr(c) {
    return (
      F.set(c, (F.get(c) || 0) + 1),
      I.has(c) && I.delete(c),
      p.fetchers.get(c) || Ya
    );
  }
  function It(c) {
    let y = p.fetchers.get(c);
    (V.has(c) && !(y && y.state === 'loading' && ve.has(c)) && _e(c),
      b.delete(c),
      ve.delete(c),
      f.delete(c),
      I.delete(c),
      ae.delete(c),
      p.fetchers.delete(c));
  }
  function qn(c) {
    let y = (F.get(c) || 0) - 1;
    (y <= 0 ? (F.delete(c), I.add(c)) : F.set(c, y),
      ce({ fetchers: new Map(p.fetchers) }));
  }
  function _e(c) {
    let y = V.get(c);
    y && (y.abort(), V.delete(c));
  }
  function br(c) {
    for (let y of c) {
      let g = Rr(y),
        C = Oe(g.data);
      p.fetchers.set(y, C);
    }
  }
  function Sr() {
    let c = [],
      y = !1;
    for (let g of f) {
      let C = p.fetchers.get(g);
      (J(C, `Expected fetcher: ${g}`),
        C.state === 'loading' && (f.delete(g), c.push(g), (y = !0)));
    }
    return (br(c), y);
  }
  function xr(c) {
    let y = [];
    for (let [g, C] of ve)
      if (C < c) {
        let L = p.fetchers.get(g);
        (J(L, `Expected fetcher: ${g}`),
          L.state === 'loading' && (_e(g), ve.delete(g), y.push(g)));
      }
    return (br(y), y.length > 0);
  }
  function Qn(c, y) {
    let g = p.blockers.get(c) || et;
    return (Y.get(c) !== y && Y.set(c, y), g);
  }
  function Pr(c) {
    (p.blockers.delete(c), Y.delete(c));
  }
  function ct(c, y) {
    let g = p.blockers.get(c) || et;
    J(
      (g.state === 'unblocked' && y.state === 'blocked') ||
        (g.state === 'blocked' && y.state === 'blocked') ||
        (g.state === 'blocked' && y.state === 'proceeding') ||
        (g.state === 'blocked' && y.state === 'unblocked') ||
        (g.state === 'proceeding' && y.state === 'unblocked'),
      `Invalid blocker state transition: ${g.state} -> ${y.state}`
    );
    let C = new Map(p.blockers);
    (C.set(c, y), ce({ blockers: C }));
  }
  function Cr({ currentLocation: c, nextLocation: y, historyAction: g }) {
    if (Y.size === 0) return;
    Y.size > 1 && ne(!1, 'A router only supports one blocker at a time');
    let C = Array.from(Y.entries()),
      [L, A] = C[C.length - 1],
      $ = p.blockers.get(L);
    if (
      !($ && $.state === 'proceeding') &&
      A({ currentLocation: c, nextLocation: y, historyAction: g })
    )
      return L;
  }
  function jt(c) {
    let y = we(404, { pathname: c }),
      g = s || i,
      { matches: C, route: L } = yt(g);
    return { notFoundMatches: C, route: L, error: y };
  }
  function Zn(c, y, g) {
    if (((w = c), (T = y), (R = g || null), !E && p.navigation === Yt)) {
      E = !0;
      let C = Tr(p.location, p.matches);
      C != null && ce({ restoreScrollPosition: C });
    }
    return () => {
      ((w = null), (T = null), (R = null));
    };
  }
  function Lr(c, y) {
    return (
      (R &&
        R(
          c,
          y.map((C) => on(C, p.loaderData))
        )) ||
      c.key
    );
  }
  function ea(c, y) {
    if (w && T) {
      let g = Lr(c, y);
      w[g] = T();
    }
  }
  function Tr(c, y) {
    if (w) {
      let g = Lr(c, y),
        C = w[g];
      if (typeof C == 'number') return C;
    }
    return null;
  }
  function dt(c, y, g) {
    if (e.patchRoutesOnNavigation)
      if (c) {
        if (Object.keys(c[0].params).length > 0)
          return { active: !0, matches: Rt(y, g, l, !0) };
      } else return { active: !0, matches: Rt(y, g, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ft(c, y, g, C) {
    if (!e.patchRoutesOnNavigation) return { type: 'success', matches: c };
    let L = c;
    for (;;) {
      let A = s == null,
        $ = s || i,
        O = o;
      try {
        await e.patchRoutesOnNavigation({
          signal: g,
          path: y,
          matches: L,
          fetcherKey: C,
          patch: (k, N) => {
            g.aborted || Ur(k, N, $, O, a, !1);
          },
        });
      } catch (k) {
        return { type: 'error', error: k, partialMatches: L };
      } finally {
        A && !g.aborted && (i = [...i]);
      }
      if (g.aborted) return { type: 'aborted' };
      let j = Le($, y, l);
      if (j) return { type: 'success', matches: j };
      let U = Rt($, y, l, !0);
      if (
        !U ||
        (L.length === U.length &&
          L.every((k, N) => k.route.id === U[N].route.id))
      )
        return { type: 'success', matches: null };
      L = U;
    }
  }
  function ta(c) {
    ((o = {}), (s = ot(c, a, void 0, o)));
  }
  function ra(c, y, g = !1) {
    let C = s == null;
    (Ur(c, y, s || i, o, a, g), C && ((i = [...i]), ce({})));
  }
  return (
    (S = {
      get basename() {
        return l;
      },
      get future() {
        return d;
      },
      get state() {
        return p;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Se,
      subscribe: kt,
      enableScrollRestoration: Zn,
      navigate: gr,
      fetch: Kn,
      revalidate: Wn,
      createHref: (c) => e.history.createHref(c),
      encodeLocation: (c) => e.history.encodeLocation(c),
      getFetcher: Rr,
      deleteFetcher: qn,
      dispose: oe,
      getBlocker: Qn,
      deleteBlocker: Pr,
      patchRoutes: ra,
      _internalFetchControllers: V,
      _internalSetRoutes: ta,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(c) {
        ce(c);
      },
    }),
    S
  );
}
function Ka(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function qt(e, t, r, n, a, o) {
  let i, s;
  if (a) {
    i = [];
    for (let u of t)
      if ((i.push(u), u.route.id === a)) {
        s = u;
        break;
      }
  } else ((i = t), (s = t[t.length - 1]));
  let l = Dt(n || '.', _t(i), Ee(e.pathname, r) || e.pathname, o === 'path');
  if (
    (n == null && ((l.search = e.search), (l.hash = e.hash)),
    (n == null || n === '' || n === '.') && s)
  ) {
    let u = ur(l.search);
    if (s.route.index && !u)
      l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index';
    else if (!s.route.index && u) {
      let d = new URLSearchParams(l.search),
        m = d.getAll('index');
      (d.delete('index'),
        m.filter((w) => w).forEach((w) => d.append('index', w)));
      let v = d.toString();
      l.search = v ? `?${v}` : '';
    }
  }
  return (
    r !== '/' && (l.pathname = Da({ basename: r, pathname: l.pathname })),
    Ne(l)
  );
}
function Ir(e, t, r) {
  if (!r || !Ka(r)) return { path: t };
  if (r.formMethod && !co(r.formMethod))
    return { path: t, error: we(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: we(400, { type: 'invalid-body' }) }),
    o = (r.formMethod || 'get').toUpperCase(),
    i = wn(t);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ye(o)) return n();
      let m =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (v, [w, R]) => `${v}${w}=${R}
`,
                ''
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: i,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ye(o)) return n();
      try {
        let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: i,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return n();
      }
    }
  }
  J(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let s, l;
  if (r.formData) ((s = er(r.formData)), (l = r.formData));
  else if (r.body instanceof FormData) ((s = er(r.body)), (l = r.body));
  else if (r.body instanceof URLSearchParams) ((s = r.body), (l = Yr(s)));
  else if (r.body == null) ((s = new URLSearchParams()), (l = new FormData()));
  else
    try {
      ((s = new URLSearchParams(r.body)), (l = Yr(s)));
    } catch {
      return n();
    }
  let u = {
    formMethod: o,
    formAction: i,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: l,
    json: void 0,
    text: void 0,
  };
  if (ye(u.formMethod)) return { path: t, submission: u };
  let d = $e(t);
  return (
    e && d.search && ur(d.search) && s.append('index', ''),
    (d.search = `?${s}`),
    { path: Ne(d), submission: u }
  );
}
function jr(e, t, r, n, a, o, i, s, l, u, d, m, v, w, R, T, E, P, x, _) {
  let M = _ ? (ge(_[1]) ? _[1].error : _[1].data) : void 0,
    S = a.createURL(o.location),
    p = a.createURL(l),
    D;
  if (d && o.errors) {
    let X = Object.keys(o.errors)[0];
    D = i.findIndex((Q) => Q.route.id === X);
  } else if (_ && ge(_[1])) {
    let X = _[0];
    D = i.findIndex((Q) => Q.route.id === X) - 1;
  }
  let z = _ ? _[1].statusCode : void 0,
    H = z && z >= 400,
    K = {
      currentUrl: S,
      currentParams: o.matches[0]?.params || {},
      nextUrl: p,
      nextParams: i[0].params,
      ...s,
      actionResult: M,
      actionStatus: z,
    },
    ie = i.map((X, Q) => {
      let { route: ae } = X,
        V = null;
      if (
        (D != null && Q > D
          ? (V = !1)
          : ae.lazy
            ? (V = !0)
            : ae.loader == null
              ? (V = !1)
              : d
                ? (V = Qt(ae, o.loaderData, o.errors))
                : Ga(o.loaderData, o.matches[Q], X) && (V = !0),
        V !== null)
      )
        return Zt(r, n, e, X, u, t, V);
      let pe = H
          ? !1
          : m ||
            S.pathname + S.search === p.pathname + p.search ||
            S.search !== p.search ||
            Xa(o.matches[Q], X),
        ue = { ...K, defaultShouldRevalidate: pe },
        ve = Lt(X, ue);
      return Zt(r, n, e, X, u, t, ve, ue);
    }),
    me = [];
  return (
    R.forEach((X, Q) => {
      if (d || !i.some((F) => F.route.id === X.routeId) || w.has(Q)) return;
      let ae = o.fetchers.get(Q),
        V = ae && ae.state !== 'idle' && ae.data === void 0,
        pe = Le(E, X.path, P);
      if (!pe) {
        if (x && V) return;
        me.push({
          key: Q,
          routeId: X.routeId,
          path: X.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (T.has(Q)) return;
      let ue = bt(pe, X.path),
        ve = new AbortController(),
        f = Je(a, X.path, ve.signal),
        b = null;
      if (v.has(Q)) (v.delete(Q), (b = Ke(r, n, f, pe, ue, u, t)));
      else if (V) m && (b = Ke(r, n, f, pe, ue, u, t));
      else {
        let F = { ...K, defaultShouldRevalidate: H ? !1 : m };
        Lt(ue, F) && (b = Ke(r, n, f, pe, ue, u, t, F));
      }
      b &&
        me.push({
          key: Q,
          routeId: X.routeId,
          path: X.path,
          matches: b,
          match: ue,
          request: f,
          controller: ve,
        });
    }),
    { dsMatches: ie, revalidatingFetchers: me }
  );
}
function Qt(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let n = t != null && e.id in t,
    a = r != null && r[e.id] !== void 0;
  return !n && a
    ? !1
    : typeof e.loader == 'function' && e.loader.hydrate === !0
      ? !0
      : !n && !a;
}
function Ga(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function Xa(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Lt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
function Ur(e, t, r, n, a, o) {
  let i;
  if (e) {
    let u = n[e];
    (J(u, `No route found to patch children into: routeId = ${e}`),
      u.children || (u.children = []),
      (i = u.children));
  } else i = r;
  let s = [],
    l = [];
  if (
    (t.forEach((u) => {
      let d = i.find((m) => mn(u, m));
      d ? l.push({ existingRoute: d, newRoute: u }) : s.push(u);
    }),
    s.length > 0)
  ) {
    let u = ot(s, a, [e || '_', 'patch', String(i?.length || '0')], n);
    i.push(...u);
  }
  if (o && l.length > 0)
    for (let u = 0; u < l.length; u++) {
      let { existingRoute: d, newRoute: m } = l[u],
        v = d,
        [w] = ot([m], a, [], {}, !0);
      Object.assign(v, {
        element: w.element ? w.element : v.element,
        errorElement: w.errorElement ? w.errorElement : v.errorElement,
        hydrateFallbackElement: w.hydrateFallbackElement
          ? w.hydrateFallbackElement
          : v.hydrateFallbackElement,
      });
    }
}
function mn(e, t) {
  return 'id' in e && 'id' in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => t.children?.some((a) => mn(r, a)))
      : !1;
}
var Hr = new WeakMap(),
  pn = ({ key: e, route: t, manifest: r, mapRouteProperties: n }) => {
    let a = r[t.id];
    if (
      (J(a, 'No route found in manifest'), !a.lazy || typeof a.lazy != 'object')
    )
      return;
    let o = a.lazy[e];
    if (!o) return;
    let i = Hr.get(a);
    i || ((i = {}), Hr.set(a, i));
    let s = i[e];
    if (s) return s;
    let l = (async () => {
      let u = ya(e),
        m = a[e] !== void 0 && e !== 'hasErrorBoundary';
      if (u)
        (ne(
          !u,
          'Route property ' +
            e +
            ' is not a supported lazy route property. This property will be ignored.'
        ),
          (i[e] = Promise.resolve()));
      else if (m)
        ne(
          !1,
          `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`
        );
      else {
        let v = await o();
        v != null && (Object.assign(a, { [e]: v }), Object.assign(a, n(a)));
      }
      typeof a.lazy == 'object' &&
        ((a.lazy[e] = void 0),
        Object.values(a.lazy).every((v) => v === void 0) && (a.lazy = void 0));
    })();
    return ((i[e] = l), l);
  },
  zr = new WeakMap();
function qa(e, t, r, n, a) {
  let o = r[e.id];
  if ((J(o, 'No route found in manifest'), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == 'function') {
    let d = zr.get(o);
    if (d) return { lazyRoutePromise: d, lazyHandlerPromise: d };
    let m = (async () => {
      J(typeof e.lazy == 'function', 'No lazy route function found');
      let v = await e.lazy(),
        w = {};
      for (let R in v) {
        let T = v[R];
        if (T === void 0) continue;
        let E = ga(R),
          x = o[R] !== void 0 && R !== 'hasErrorBoundary';
        E
          ? ne(
              !E,
              'Route property ' +
                R +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.'
            )
          : x
            ? ne(
                !x,
                `Route "${o.id}" has a static property "${R}" defined but its lazy function is also returning a value for this property. The lazy route property "${R}" will be ignored.`
              )
            : (w[R] = T);
      }
      (Object.assign(o, w), Object.assign(o, { ...n(o), lazy: void 0 }));
    })();
    return (
      zr.set(o, m),
      m.catch(() => {}),
      { lazyRoutePromise: m, lazyHandlerPromise: m }
    );
  }
  let i = Object.keys(e.lazy),
    s = [],
    l;
  for (let d of i) {
    if (a && a.includes(d)) continue;
    let m = pn({ key: d, route: e, manifest: r, mapRouteProperties: n });
    m && (s.push(m), d === t && (l = m));
  }
  let u = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
  return (
    u?.catch(() => {}),
    l?.catch(() => {}),
    { lazyRoutePromise: u, lazyHandlerPromise: l }
  );
}
async function Br(e) {
  let t = e.matches.filter((a) => a.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
      r[t[o].route.id] = a;
    }),
    r
  );
}
async function Qa(e) {
  return e.matches.some((t) => t.route.unstable_middleware)
    ? yn(e, () => Br(e))
    : Br(e);
}
function yn(e, t) {
  return Za(e, t, (n) => n, lo, r);
  function r(n, a, o) {
    if (o)
      return Promise.resolve(
        Object.assign(o.value, { [a]: { type: 'error', result: n } })
      );
    {
      let { matches: i } = e,
        s = Math.min(
          i.findIndex((u) => u.route.id === a) || 0,
          i.findIndex((u) => u.unstable_shouldCallHandler()) || 0
        ),
        l = Ae(i, i[s].route.id).route.id;
      return Promise.resolve({ [l]: { type: 'error', result: n } });
    }
  }
}
async function Za(e, t, r, n, a) {
  let { matches: o, request: i, params: s, context: l } = e,
    u = o.flatMap((m) =>
      m.route.unstable_middleware
        ? m.route.unstable_middleware.map((v) => [m.route.id, v])
        : []
    );
  return await vn({ request: i, params: s, context: l }, u, t, r, n, a);
}
async function vn(e, t, r, n, a, o, i = 0) {
  let { request: s } = e;
  if (s.signal.aborted)
    throw s.signal.reason ?? new Error(`Request aborted: ${s.method} ${s.url}`);
  let l = t[i];
  if (!l) return await r();
  let [u, d] = l,
    m,
    v = async () => {
      if (m) throw new Error('You may only call `next()` once per middleware');
      try {
        return ((m = { value: await vn(e, t, r, n, a, o, i + 1) }), m.value);
      } catch (w) {
        return ((m = { value: await o(w, u, m) }), m.value);
      }
    };
  try {
    let w = await d(e, v),
      R = w != null ? n(w) : void 0;
    return a(R)
      ? R
      : m
        ? (R ?? m.value)
        : ((m = { value: await v() }), m.value);
  } catch (w) {
    return await o(w, u, m);
  }
}
function gn(e, t, r, n, a) {
  let o = pn({
      key: 'unstable_middleware',
      route: n.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    i = qa(n.route, ye(r.method) ? 'action' : 'loader', t, e, a);
  return {
    middleware: o,
    route: i.lazyRoutePromise,
    handler: i.lazyHandlerPromise,
  };
}
function Zt(e, t, r, n, a, o, i, s = null) {
  let l = !1,
    u = gn(e, t, r, n, a);
  return {
    ...n,
    _lazyPromises: u,
    shouldLoad: i,
    unstable_shouldRevalidateArgs: s,
    unstable_shouldCallHandler(d) {
      return (
        (l = !0),
        s
          ? typeof d == 'boolean'
            ? Lt(n, { ...s, defaultShouldRevalidate: d })
            : Lt(n, s)
          : i
      );
    },
    resolve(d) {
      return l || i || (d && !ye(r.method) && (n.route.lazy || n.route.loader))
        ? to({
            request: r,
            match: n,
            lazyHandlerPromise: u?.handler,
            lazyRoutePromise: u?.route,
            handlerOverride: d,
            scopedContext: o,
          })
        : Promise.resolve({ type: 'data', result: void 0 });
    },
  };
}
function Ke(e, t, r, n, a, o, i, s = null) {
  return n.map((l) =>
    l.route.id !== a.route.id
      ? {
          ...l,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: s,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: gn(e, t, r, l, o),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : Zt(e, t, r, l, o, i, !0, s)
  );
}
async function eo(e, t, r, n, a, o) {
  r.some((u) => u._lazyPromises?.middleware) &&
    (await Promise.all(r.map((u) => u._lazyPromises?.middleware)));
  let i = { request: t, params: r[0].params, context: a, matches: r },
    l = await e({
      ...i,
      fetcherKey: n,
      unstable_runClientMiddleware: (u) => {
        let d = i;
        return yn(d, () =>
          u({
            ...d,
            fetcherKey: n,
            unstable_runClientMiddleware: () => {
              throw new Error(
                'Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler'
              );
            },
          })
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((u) => [u._lazyPromises?.handler, u._lazyPromises?.route])
    );
  } catch {}
  return l;
}
async function to({
  request: e,
  match: t,
  lazyHandlerPromise: r,
  lazyRoutePromise: n,
  handlerOverride: a,
  scopedContext: o,
}) {
  let i,
    s,
    l = ye(e.method),
    u = l ? 'action' : 'loader',
    d = (m) => {
      let v,
        w = new Promise((E, P) => (v = P));
      ((s = () => v()), e.signal.addEventListener('abort', s));
      let R = (E) =>
          typeof m != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`
                )
              )
            : m(
                { request: e, params: t.params, context: o },
                ...(E !== void 0 ? [E] : [])
              ),
        T = (async () => {
          try {
            return { type: 'data', result: await (a ? a((P) => R(P)) : R()) };
          } catch (E) {
            return { type: 'error', result: E };
          }
        })();
      return Promise.race([T, w]);
    };
  try {
    let m = l ? t.route.action : t.route.loader;
    if (r || n)
      if (m) {
        let v,
          [w] = await Promise.all([
            d(m).catch((R) => {
              v = R;
            }),
            r,
            n,
          ]);
        if (v !== void 0) throw v;
        i = w;
      } else {
        await r;
        let v = l ? t.route.action : t.route.loader;
        if (v) [i] = await Promise.all([d(v), n]);
        else if (u === 'action') {
          let w = new URL(e.url),
            R = w.pathname + w.search;
          throw we(405, { method: e.method, pathname: R, routeId: t.route.id });
        } else return { type: 'data', result: void 0 };
      }
    else if (m) i = await d(m);
    else {
      let v = new URL(e.url),
        w = v.pathname + v.search;
      throw we(404, { pathname: w });
    }
  } catch (m) {
    return { type: 'error', result: m };
  } finally {
    s && e.signal.removeEventListener('abort', s);
  }
  return i;
}
async function ro(e) {
  let t = e.headers.get('Content-Type');
  return t && /\bapplication\/json\b/.test(t)
    ? e.body == null
      ? null
      : e.json()
    : e.text();
}
async function no(e) {
  let { result: t, type: r } = e;
  if (sr(t)) {
    let n;
    try {
      n = await ro(t);
    } catch (a) {
      return { type: 'error', error: a };
    }
    return r === 'error'
      ? {
          type: 'error',
          error: new ze(t.status, t.statusText, n),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: 'data', data: n, statusCode: t.status, headers: t.headers };
  }
  return r === 'error'
    ? tr(t)
      ? t.data instanceof Error
        ? {
            type: 'error',
            error: t.data,
            statusCode: t.init?.status,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: new ze(t.init?.status || 500, void 0, t.data),
            statusCode: Be(t) ? t.status : void 0,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
      : { type: 'error', error: t, statusCode: Be(t) ? t.status : void 0 }
    : tr(t)
      ? {
          type: 'data',
          data: t.data,
          statusCode: t.init?.status,
          headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
        }
      : { type: 'data', data: t };
}
function ao(e, t, r, n, a) {
  let o = e.headers.get('Location');
  if (
    (J(
      o,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !lr(o))
  ) {
    let i = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    ((o = qt(new URL(t.url), i, a, o)), e.headers.set('Location', o));
  }
  return e;
}
function Wr(e, t, r) {
  if (lr(e)) {
    let n = e,
      a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      o = Ee(a.pathname, r) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Je(e, t, r, n) {
  let a = e.createURL(wn(t)).toString(),
    o = { signal: r };
  if (n && ye(n.formMethod)) {
    let { formMethod: i, formEncType: s } = n;
    ((o.method = i.toUpperCase()),
      s === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': s })),
          (o.body = JSON.stringify(n.json)))
        : s === 'text/plain'
          ? (o.body = n.text)
          : s === 'application/x-www-form-urlencoded' && n.formData
            ? (o.body = er(n.formData))
            : (o.body = n.formData));
  }
  return new Request(a, o);
}
function er(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function Yr(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function oo(e, t, r, n = !1, a = !1) {
  let o = {},
    i = null,
    s,
    l = !1,
    u = {},
    d = r && ge(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((m) => {
      if (!(m.route.id in t)) return;
      let v = m.route.id,
        w = t[v];
      if (
        (J(!He(w), 'Cannot handle redirect results in processLoaderData'),
        ge(w))
      ) {
        let R = w.error;
        if ((d !== void 0 && ((R = d), (d = void 0)), (i = i || {}), a))
          i[v] = R;
        else {
          let T = Ae(e, v);
          i[T.route.id] == null && (i[T.route.id] = R);
        }
        (n || (o[v] = hn),
          l || ((l = !0), (s = Be(w.error) ? w.error.status : 500)),
          w.headers && (u[v] = w.headers));
      } else
        ((o[v] = w.data),
          w.statusCode && w.statusCode !== 200 && !l && (s = w.statusCode),
          w.headers && (u[v] = w.headers));
    }),
    d !== void 0 && r && ((i = { [r[0]]: d }), r[2] && (o[r[2]] = void 0)),
    { loaderData: o, errors: i, statusCode: s || 200, loaderHeaders: u }
  );
}
function Vr(e, t, r, n, a, o) {
  let { loaderData: i, errors: s } = oo(t, r, n);
  return (
    a
      .filter((l) => !l.matches || l.matches.some((u) => u.shouldLoad))
      .forEach((l) => {
        let { key: u, match: d, controller: m } = l;
        if (m && m.signal.aborted) return;
        let v = o[u];
        if ((J(v, 'Did not find corresponding fetcher result'), ge(v))) {
          let w = Ae(e.matches, d?.route.id);
          ((s && s[w.route.id]) || (s = { ...s, [w.route.id]: v.error }),
            e.fetchers.delete(u));
        } else if (He(v)) J(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let w = Oe(v.data);
          e.fetchers.set(u, w);
        }
      }),
    { loaderData: i, errors: s }
  );
}
function Jr(e, t, r, n) {
  let a = Object.entries(t)
    .filter(([, o]) => o !== hn)
    .reduce((o, [i, s]) => ((o[i] = s), o), {});
  for (let o of r) {
    let i = o.route.id;
    if (
      (!t.hasOwnProperty(i) &&
        e.hasOwnProperty(i) &&
        o.route.loader &&
        (a[i] = e[i]),
      n && n.hasOwnProperty(i))
    )
      break;
  }
  return a;
}
function Kr(e) {
  return e
    ? ge(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ae(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function yt(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function we(
  e,
  { pathname: t, routeId: r, method: n, type: a, message: o } = {}
) {
  let i = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        n && t && r
          ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : a === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
        ? ((i = 'Forbidden'), (s = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((i = 'Not Found'), (s = `No route matches URL "${t}"`))
          : e === 405 &&
            ((i = 'Method Not Allowed'),
            n && t && r
              ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : n && (s = `Invalid request method "${n.toUpperCase()}"`)),
    new ze(e || 500, i, new Error(s), !0)
  );
}
function vt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (He(a)) return { key: n, result: a };
  }
}
function wn(e) {
  let t = typeof e == 'string' ? $e(e) : e;
  return Ne({ ...t, hash: '' });
}
function io(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function lo(e) {
  return (
    e != null &&
    typeof e == 'object' &&
    Object.entries(e).every(([t, r]) => typeof t == 'string' && so(r))
  );
}
function so(e) {
  return (
    e != null &&
    typeof e == 'object' &&
    'type' in e &&
    'result' in e &&
    (e.type === 'data' || e.type === 'error')
  );
}
function uo(e) {
  return sr(e.result) && Ba.has(e.result.status);
}
function ge(e) {
  return e.type === 'error';
}
function He(e) {
  return (e && e.type) === 'redirect';
}
function tr(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function sr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function co(e) {
  return za.has(e.toUpperCase());
}
function ye(e) {
  return Ua.has(e.toUpperCase());
}
function ur(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function bt(e, t) {
  let r = typeof t == 'string' ? $e(t).search : t.search;
  if (e[e.length - 1].route.index && ur(r || '')) return e[e.length - 1];
  let n = cn(e);
  return n[n.length - 1];
}
function Gr(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Vt(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function fo(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function tt(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function ho(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Oe(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function mo(e, t) {
  try {
    let r = e.sessionStorage.getItem(fn);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {}
}
function po(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(fn, JSON.stringify(r));
    } catch (n) {
      ne(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`
      );
    }
  }
}
function yo() {
  let e,
    t,
    r = new Promise((n, a) => {
      ((e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        }));
    });
  return { promise: r, resolve: e, reject: t };
}
var We = h.createContext(null);
We.displayName = 'DataRouter';
var lt = h.createContext(null);
lt.displayName = 'DataRouterState';
var vo = h.createContext(!1);
function go() {
  return h.useContext(vo);
}
var cr = h.createContext({ isTransitioning: !1 });
cr.displayName = 'ViewTransition';
var En = h.createContext(new Map());
En.displayName = 'Fetchers';
var wo = h.createContext(null);
wo.displayName = 'Await';
var be = h.createContext(null);
be.displayName = 'Navigation';
var Ot = h.createContext(null);
Ot.displayName = 'Location';
var Re = h.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Re.displayName = 'Route';
var dr = h.createContext(null);
dr.displayName = 'RouteError';
function Eo(e, { relative: t } = {}) {
  J(Ge(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: n } = h.useContext(be),
    { hash: a, pathname: o, search: i } = st(e, { relative: t }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : Pe([r, o])),
    n.createHref({ pathname: s, search: i, hash: a })
  );
}
function Ge() {
  return h.useContext(Ot) != null;
}
function Te() {
  return (
    J(
      Ge(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    h.useContext(Ot).location
  );
}
var Rn =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function bn(e) {
  h.useContext(be).static || h.useLayoutEffect(e);
}
function fr() {
  let { isDataRoute: e } = h.useContext(Re);
  return e ? Fo() : Ro();
}
function Ro() {
  J(
    Ge(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = h.useContext(We),
    { basename: t, navigator: r } = h.useContext(be),
    { matches: n } = h.useContext(Re),
    { pathname: a } = Te(),
    o = JSON.stringify(_t(n)),
    i = h.useRef(!1);
  return (
    bn(() => {
      i.current = !0;
    }),
    h.useCallback(
      (l, u = {}) => {
        if ((ne(i.current, Rn), !i.current)) return;
        if (typeof l == 'number') {
          r.go(l);
          return;
        }
        let d = Dt(l, JSON.parse(o), a, u.relative === 'path');
        (e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Pe([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u));
      },
      [t, r, o, a, e]
    )
  );
}
var bo = h.createContext(null);
function So(e) {
  let t = h.useContext(Re).outlet;
  return t && h.createElement(bo.Provider, { value: e }, t);
}
function xo() {
  let { matches: e } = h.useContext(Re),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function st(e, { relative: t } = {}) {
  let { matches: r } = h.useContext(Re),
    { pathname: n } = Te(),
    a = JSON.stringify(_t(r));
  return h.useMemo(() => Dt(e, JSON.parse(a), n, t === 'path'), [e, a, n, t]);
}
function Po(e, t, r, n, a) {
  J(
    Ge(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: o } = h.useContext(be),
    { matches: i } = h.useContext(Re),
    s = i[i.length - 1],
    l = s ? s.params : {},
    u = s ? s.pathname : '/',
    d = s ? s.pathnameBase : '/',
    m = s && s.route;
  {
    let x = (m && m.path) || '';
    xn(
      u,
      !m || x.endsWith('*') || x.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x === '/' ? '*' : `${x}/*`}">.`
    );
  }
  let v = Te(),
    w;
  w = v;
  let R = w.pathname || '/',
    T = R;
  if (d !== '/') {
    let x = d.replace(/^\//, '').split('/');
    T = '/' + R.replace(/^\//, '').split('/').slice(x.length).join('/');
  }
  let E = Le(e, { pathname: T });
  return (
    ne(
      m || E != null,
      `No routes matched location "${w.pathname}${w.search}${w.hash}" `
    ),
    ne(
      E == null ||
        E[E.length - 1].route.element !== void 0 ||
        E[E.length - 1].route.Component !== void 0 ||
        E[E.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    _o(
      E &&
        E.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: Pe([
              d,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? d
                : Pe([
                    d,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n,
      a
    )
  );
}
function Co() {
  let e = Sn(),
    t = Be(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: n },
    o = { padding: '2px 4px', backgroundColor: n },
    i = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (i = h.createElement(
      h.Fragment,
      null,
      h.createElement('p', null, '💿 Hey developer 👋'),
      h.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        h.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        h.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    h.createElement(
      h.Fragment,
      null,
      h.createElement('h2', null, 'Unexpected Application Error!'),
      h.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? h.createElement('pre', { style: a }, r) : null,
      i
    )
  );
}
var Lo = h.createElement(Co, null),
  To = class extends h.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.unstable_onError
        ? this.props.unstable_onError(e, t)
        : console.error(
            'React Router caught the following error during render',
            e
          );
    }
    render() {
      return this.state.error !== void 0
        ? h.createElement(
            Re.Provider,
            { value: this.props.routeContext },
            h.createElement(dr.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Mo({ routeContext: e, match: t, children: r }) {
  let n = h.useContext(We);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    h.createElement(Re.Provider, { value: e }, r)
  );
}
function _o(e, t = [], r = null, n = null, a = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let o = e,
    i = r?.errors;
  if (i != null) {
    let u = o.findIndex((d) => d.route.id && i?.[d.route.id] !== void 0);
    (J(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (o = o.slice(0, Math.min(o.length, u + 1))));
  }
  let s = !1,
    l = -1;
  if (r)
    for (let u = 0; u < o.length; u++) {
      let d = o[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = u),
        d.route.id)
      ) {
        let { loaderData: m, errors: v } = r,
          w =
            d.route.loader &&
            !m.hasOwnProperty(d.route.id) &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || w) {
          ((s = !0), l >= 0 ? (o = o.slice(0, l + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((u, d, m) => {
    let v,
      w = !1,
      R = null,
      T = null;
    r &&
      ((v = i && d.route.id ? i[d.route.id] : void 0),
      (R = d.route.errorElement || Lo),
      s &&
        (l < 0 && m === 0
          ? (xn(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (w = !0),
            (T = null))
          : l === m &&
            ((w = !0), (T = d.route.hydrateFallbackElement || null))));
    let E = t.concat(o.slice(0, m + 1)),
      P = () => {
        let x;
        return (
          v
            ? (x = R)
            : w
              ? (x = T)
              : d.route.Component
                ? (x = h.createElement(d.route.Component, null))
                : d.route.element
                  ? (x = d.route.element)
                  : (x = u),
          h.createElement(Mo, {
            match: d,
            routeContext: { outlet: u, matches: E, isDataRoute: r != null },
            children: x,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? h.createElement(To, {
          location: r.location,
          revalidation: r.revalidation,
          component: R,
          error: v,
          children: P(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
          unstable_onError: n,
        })
      : P();
  }, null);
}
function hr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Do(e) {
  let t = h.useContext(We);
  return (J(t, hr(e)), t);
}
function At(e) {
  let t = h.useContext(lt);
  return (J(t, hr(e)), t);
}
function Oo(e) {
  let t = h.useContext(Re);
  return (J(t, hr(e)), t);
}
function ut(e) {
  let t = Oo(e),
    r = t.matches[t.matches.length - 1];
  return (
    J(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function Ao() {
  return ut('useRouteId');
}
function No() {
  let { matches: e, loaderData: t } = At('useMatches');
  return h.useMemo(() => e.map((r) => on(r, t)), [e, t]);
}
function $o() {
  let e = At('useLoaderData'),
    t = ut('useLoaderData');
  return e.loaderData[t];
}
function ko() {
  let e = At('useActionData'),
    t = ut('useLoaderData');
  return e.actionData ? e.actionData[t] : void 0;
}
function Sn() {
  let e = h.useContext(dr),
    t = At('useRouteError'),
    r = ut('useRouteError');
  return e !== void 0 ? e : t.errors?.[r];
}
function Fo() {
  let { router: e } = Do('useNavigate'),
    t = ut('useNavigate'),
    r = h.useRef(!1);
  return (
    bn(() => {
      r.current = !0;
    }),
    h.useCallback(
      async (a, o = {}) => {
        (ne(r.current, Rn),
          r.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : await e.navigate(a, { fromRouteId: t, ...o })));
      },
      [e, t]
    )
  );
}
var Xr = {};
function xn(e, t, r) {
  !t && !Xr[e] && ((Xr[e] = !0), ne(!1, r));
}
var qr = {};
function rr(e, t) {
  !e && !qr[t] && ((qr[t] = !0), console.warn(t));
}
function vl(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        ne(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.'
        ),
      Object.assign(t, {
        element: h.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        ne(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
        ),
      Object.assign(t, {
        hydrateFallbackElement: h.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        ne(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
        ),
      Object.assign(t, {
        errorElement: h.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var gl = ['HydrateFallback', 'hydrateFallbackElement'],
  Io = class {
    constructor() {
      ((this.status = 'pending'),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = (r) => {
            this.status === 'pending' && ((this.status = 'resolved'), e(r));
          }),
            (this.reject = (r) => {
              this.status === 'pending' && ((this.status = 'rejected'), t(r));
            }));
        })));
    }
  };
function wl({ router: e, flushSync: t, unstable_onError: r }) {
  let [n, a] = h.useState(e.state),
    [o, i] = h.useState(),
    [s, l] = h.useState({ isTransitioning: !1 }),
    [u, d] = h.useState(),
    [m, v] = h.useState(),
    [w, R] = h.useState(),
    T = h.useRef(new Map()),
    E = h.useCallback(
      (S) => {
        a(
          (p) => (
            S.errors &&
              r &&
              Object.entries(S.errors).forEach(([D, z]) => {
                p.errors?.[D] !== z && r(z);
              }),
            S
          )
        );
      },
      [r]
    ),
    P = h.useCallback(
      (S, { deletedFetchers: p, flushSync: D, viewTransitionOpts: z }) => {
        (S.fetchers.forEach((K, ie) => {
          K.data !== void 0 && T.current.set(ie, K.data);
        }),
          p.forEach((K) => T.current.delete(K)),
          rr(
            D === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          ));
        let H =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == 'function';
        if (
          (rr(
            z == null || H,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !z || !H)
        ) {
          t && D ? t(() => E(S)) : h.startTransition(() => E(S));
          return;
        }
        if (t && D) {
          t(() => {
            (m && (u && u.resolve(), m.skipTransition()),
              l({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: z.currentLocation,
                nextLocation: z.nextLocation,
              }));
          });
          let K = e.window.document.startViewTransition(() => {
            t(() => E(S));
          });
          (K.finished.finally(() => {
            t(() => {
              (d(void 0), v(void 0), i(void 0), l({ isTransitioning: !1 }));
            });
          }),
            t(() => v(K)));
          return;
        }
        m
          ? (u && u.resolve(),
            m.skipTransition(),
            R({
              state: S,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }))
          : (i(S),
            l({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }));
      },
      [e.window, t, m, u, E]
    );
  (h.useLayoutEffect(() => e.subscribe(P), [e, P]),
    h.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new Io());
    }, [s]),
    h.useEffect(() => {
      if (u && o && e.window) {
        let S = o,
          p = u.promise,
          D = e.window.document.startViewTransition(async () => {
            (h.startTransition(() => E(S)), await p);
          });
        (D.finished.finally(() => {
          (d(void 0), v(void 0), i(void 0), l({ isTransitioning: !1 }));
        }),
          v(D));
      }
    }, [o, u, e.window, E]),
    h.useEffect(() => {
      u && o && n.location.key === o.location.key && u.resolve();
    }, [u, m, n.location, o]),
    h.useEffect(() => {
      !s.isTransitioning &&
        w &&
        (i(w.state),
        l({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        R(void 0));
    }, [s.isTransitioning, w]));
  let x = h.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (S) => e.navigate(S),
        push: (S, p, D) =>
          e.navigate(S, {
            state: p,
            preventScrollReset: D?.preventScrollReset,
          }),
        replace: (S, p, D) =>
          e.navigate(S, {
            replace: !0,
            state: p,
            preventScrollReset: D?.preventScrollReset,
          }),
      }),
      [e]
    ),
    _ = e.basename || '/',
    M = h.useMemo(
      () => ({
        router: e,
        navigator: x,
        static: !1,
        basename: _,
        unstable_onError: r,
      }),
      [e, x, _, r]
    );
  return h.createElement(
    h.Fragment,
    null,
    h.createElement(
      We.Provider,
      { value: M },
      h.createElement(
        lt.Provider,
        { value: n },
        h.createElement(
          En.Provider,
          { value: T.current },
          h.createElement(
            cr.Provider,
            { value: s },
            h.createElement(
              Ho,
              {
                basename: _,
                location: n.location,
                navigationType: n.historyAction,
                navigator: x,
              },
              h.createElement(jo, {
                routes: e.routes,
                future: e.future,
                state: n,
                unstable_onError: r,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var jo = h.memo(Uo);
function Uo({ routes: e, future: t, state: r, unstable_onError: n }) {
  return Po(e, void 0, r, n, t);
}
function El({ to: e, replace: t, state: r, relative: n }) {
  J(
    Ge(),
    '<Navigate> may be used only in the context of a <Router> component.'
  );
  let { static: a } = h.useContext(be);
  ne(
    !a,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: o } = h.useContext(Re),
    { pathname: i } = Te(),
    s = fr(),
    l = Dt(e, _t(o), i, n === 'path'),
    u = JSON.stringify(l);
  return (
    h.useEffect(() => {
      s(JSON.parse(u), { replace: t, state: r, relative: n });
    }, [s, u, n, t, r]),
    null
  );
}
function Rl(e) {
  return So(e.context);
}
function Ho({
  basename: e = '/',
  children: t = null,
  location: r,
  navigationType: n = 'POP',
  navigator: a,
  static: o = !1,
}) {
  J(
    !Ge(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let i = e.replace(/^\/*/, '/'),
    s = h.useMemo(
      () => ({ basename: i, navigator: a, static: o, future: {} }),
      [i, a, o]
    );
  typeof r == 'string' && (r = $e(r));
  let {
      pathname: l = '/',
      search: u = '',
      hash: d = '',
      state: m = null,
      key: v = 'default',
    } = r,
    w = h.useMemo(() => {
      let R = Ee(l, i);
      return R == null
        ? null
        : {
            location: { pathname: R, search: u, hash: d, state: m, key: v },
            navigationType: n,
          };
    }, [i, l, u, d, m, v, n]);
  return (
    ne(
      w != null,
      `<Router basename="${i}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : h.createElement(
          be.Provider,
          { value: s },
          h.createElement(Ot.Provider, { children: t, value: w })
        )
  );
}
function zo() {
  return { params: xo(), loaderData: $o(), actionData: ko(), matches: No() };
}
function bl(e) {
  return function () {
    const r = zo();
    return h.createElement(e, r);
  };
}
var St = 'get',
  xt = 'application/x-www-form-urlencoded';
function Nt(e) {
  return e != null && typeof e.tagName == 'string';
}
function Bo(e) {
  return Nt(e) && e.tagName.toLowerCase() === 'button';
}
function Wo(e) {
  return Nt(e) && e.tagName.toLowerCase() === 'form';
}
function Yo(e) {
  return Nt(e) && e.tagName.toLowerCase() === 'input';
}
function Vo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Jo(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Vo(e);
}
function nr(e = '') {
  return new URLSearchParams(
    typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
        }, [])
  );
}
function Ko(e, t) {
  let r = nr(e);
  return (
    t &&
      t.forEach((n, a) => {
        r.has(a) ||
          t.getAll(a).forEach((o) => {
            r.append(a, o);
          });
      }),
    r
  );
}
var gt = null;
function Go() {
  if (gt === null)
    try {
      (new FormData(document.createElement('form'), 0), (gt = !1));
    } catch {
      gt = !0;
    }
  return gt;
}
var Xo = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Jt(e) {
  return e != null && !Xo.has(e)
    ? (ne(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xt}"`
      ),
      null)
    : e;
}
function qo(e, t) {
  let r, n, a, o, i;
  if (Wo(e)) {
    let s = e.getAttribute('action');
    ((n = s ? Ee(s, t) : null),
      (r = e.getAttribute('method') || St),
      (a = Jt(e.getAttribute('enctype')) || xt),
      (o = new FormData(e)));
  } else if (Bo(e) || (Yo(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((n = l ? Ee(l, t) : null),
      (r = e.getAttribute('formmethod') || s.getAttribute('method') || St),
      (a =
        Jt(e.getAttribute('formenctype')) ||
        Jt(s.getAttribute('enctype')) ||
        xt),
      (o = new FormData(s, e)),
      !Go())
    ) {
      let { name: u, type: d, value: m } = e;
      if (d === 'image') {
        let v = u ? `${u}.` : '';
        (o.append(`${v}x`, '0'), o.append(`${v}y`, '0'));
      } else u && o.append(u, m);
    }
  } else {
    if (Nt(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((r = St), (n = null), (a = xt), (i = e));
  }
  return (
    o && a === 'text/plain' && ((i = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: o, body: i }
  );
}
var Qo = -1,
  Zo = -2,
  ei = -3,
  ti = -4,
  ri = -5,
  ni = -6,
  ai = -7,
  oi = 'B',
  ii = 'D',
  Pn = 'E',
  li = 'M',
  si = 'N',
  Cn = 'P',
  ui = 'R',
  ci = 'S',
  di = 'Y',
  fi = 'U',
  hi = 'Z',
  Ln = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      });
    }
  };
function mi() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }),
        o = (t + a).split(`
`);
      t = o.pop() || '';
      for (const i of o) n.enqueue(i);
    },
    flush(r) {
      t && r.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Kt =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function ar(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == 'number') return Qr.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e) r.push(a);
  return ((t.length = r.length), Qr.call(this, n));
}
function Qr(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let o;
  const i = [
    [
      e,
      (l) => {
        o = l;
      },
    ],
  ];
  let s = [];
  for (; i.length > 0; ) {
    const [l, u] = i.pop();
    switch (l) {
      case ai:
        u(void 0);
        continue;
      case ri:
        u(null);
        continue;
      case Zo:
        u(NaN);
        continue;
      case ni:
        u(1 / 0);
        continue;
      case ei:
        u(-1 / 0);
        continue;
      case ti:
        u(-0);
        continue;
    }
    if (t[l]) {
      u(t[l]);
      continue;
    }
    const d = r[l];
    if (!d || typeof d != 'object') {
      ((t[l] = d), u(d));
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == 'string') {
        const [m, v, w] = d;
        switch (m) {
          case ii:
            u((t[l] = new Date(v)));
            continue;
          case fi:
            u((t[l] = new URL(v)));
            continue;
          case oi:
            u((t[l] = BigInt(v)));
            continue;
          case ui:
            u((t[l] = new RegExp(v, w)));
            continue;
          case di:
            u((t[l] = Symbol.for(v)));
            continue;
          case ci:
            const R = new Set();
            t[l] = R;
            for (let M = d.length - 1; M > 0; M--)
              i.push([
                d[M],
                (S) => {
                  R.add(S);
                },
              ]);
            u(R);
            continue;
          case li:
            const T = new Map();
            t[l] = T;
            for (let M = d.length - 2; M > 0; M -= 2) {
              const S = [];
              (i.push([
                d[M + 1],
                (p) => {
                  S[1] = p;
                },
              ]),
                i.push([
                  d[M],
                  (p) => {
                    S[0] = p;
                  },
                ]),
                s.push(() => {
                  T.set(S[0], S[1]);
                }));
            }
            u(T);
            continue;
          case si:
            const E = Object.create(null);
            t[l] = E;
            for (const M of Object.keys(v).reverse()) {
              const S = [];
              (i.push([
                v[M],
                (p) => {
                  S[1] = p;
                },
              ]),
                i.push([
                  Number(M.slice(1)),
                  (p) => {
                    S[0] = p;
                  },
                ]),
                s.push(() => {
                  E[S[0]] = S[1];
                }));
            }
            u(E);
            continue;
          case Cn:
            if (t[v]) u((t[l] = t[v]));
            else {
              const M = new Ln();
              ((n[v] = M), u((t[l] = M.promise)));
            }
            continue;
          case Pn:
            const [, P, x] = d;
            let _ = x && Kt && Kt[x] ? new Kt[x](P) : new Error(P);
            ((t[l] = _), u(_));
            continue;
          case hi:
            u((t[l] = t[v]));
            continue;
          default:
            if (Array.isArray(a)) {
              const M = [],
                S = d.slice(1);
              for (let p = 0; p < S.length; p++) {
                const D = S[p];
                i.push([
                  D,
                  (z) => {
                    M[p] = z;
                  },
                ]);
              }
              s.push(() => {
                for (const p of a) {
                  const D = p(d[0], ...M);
                  if (D) {
                    u((t[l] = D.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const m = [];
        t[l] = m;
        for (let v = 0; v < d.length; v++) {
          const w = d[v];
          w !== Qo &&
            i.push([
              w,
              (R) => {
                m[v] = R;
              },
            ]);
        }
        u(m);
        continue;
      }
    else {
      const m = {};
      t[l] = m;
      for (const v of Object.keys(d).reverse()) {
        const w = [];
        (i.push([
          d[v],
          (R) => {
            w[1] = R;
          },
        ]),
          i.push([
            Number(v.slice(1)),
            (R) => {
              w[0] = R;
            },
          ]),
          s.push(() => {
            m[w[0]] = w[1];
          }));
      }
      u(m);
      continue;
    }
  }
  for (; s.length > 0; ) s.pop()();
  return o;
}
async function pi(e, t) {
  const { plugins: r } = t ?? {},
    n = new Ln(),
    a = e.pipeThrough(mi()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: r },
    i = await yi.call(o, a);
  let s = n.promise;
  return (
    i.done
      ? n.resolve()
      : (s = vi
          .call(o, a)
          .then(n.resolve)
          .catch((l) => {
            for (const u of Object.values(o.deferred)) u.reject(l);
            n.reject(l);
          })),
    { done: s.then(() => a.closed), value: i.value }
  );
}
async function yi(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: ar.call(this, r) };
}
async function vi(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case Cn: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const i = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const l = ar.call(this, s);
        o.resolve(l);
        break;
      }
      case Pn: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const i = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const l = ar.call(this, s);
        o.reject(l);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
async function gi(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let r = e.headers.get('Content-Type');
    r && /\bapplication\/json\b/.test(r)
      ? ((t.headers = { 'Content-Type': r }),
        (t.body = JSON.stringify(await e.json())))
      : r && /\btext\/plain\b/.test(r)
        ? ((t.headers = { 'Content-Type': r }), (t.body = await e.text()))
        : r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
function Zr(e) {
  return { __html: e };
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
var or = Symbol('SingleFetchRedirect'),
  Tn = class extends Error {},
  wi = 202,
  Ei = new Set([100, 101, 204, 205]);
function Sl(e, t, r, n, a) {
  let o = Ri(
    e,
    (i) => {
      let s = t.routes[i.route.id];
      he(s, 'Route not found in manifest');
      let l = r[i.route.id];
      return {
        hasLoader: s.hasLoader,
        hasClientLoader: s.hasClientLoader,
        hasShouldRevalidate: !!l?.shouldRevalidate,
      };
    },
    Ti,
    n,
    a
  );
  return async (i) => i.unstable_runClientMiddleware(o);
}
function Ri(e, t, r, n, a, o = () => !0) {
  return async (i) => {
    let { request: s, matches: l, fetcherKey: u } = i,
      d = e();
    if (s.method !== 'GET') return bi(i, r, a);
    let m = l.some((v) => {
      let { hasLoader: w, hasClientLoader: R } = t(v);
      return v.unstable_shouldCallHandler() && w && !R;
    });
    return !n && !m
      ? Si(i, t, r, a)
      : u
        ? Ci(i, r, a)
        : xi(i, d, t, r, n, a, o);
  };
}
async function bi(e, t, r) {
  let n = e.matches.find((i) => i.unstable_shouldCallHandler());
  he(n, 'No action match found');
  let a,
    o = await n.resolve(
      async (i) =>
        await i(async () => {
          let { data: l, status: u } = await t(e, r, [n.route.id]);
          return ((a = u), it(l, n.route.id));
        })
    );
  return sr(o.result) || Be(o.result) || tr(o.result)
    ? { [n.route.id]: o }
    : { [n.route.id]: { type: o.type, result: Ia(o.result, a) } };
}
async function Si(e, t, r, n) {
  let a = e.matches.filter((i) => i.unstable_shouldCallHandler()),
    o = {};
  return (
    await Promise.all(
      a.map((i) =>
        i.resolve(async (s) => {
          try {
            let { hasClientLoader: l } = t(i),
              u = i.route.id,
              d = l
                ? await s(async () => {
                    let { data: m } = await r(e, n, [u]);
                    return it(m, u);
                  })
                : await s();
            o[i.route.id] = { type: 'data', result: d };
          } catch (l) {
            o[i.route.id] = { type: 'error', result: l };
          }
        })
      )
    ),
    o
  );
}
async function xi(e, t, r, n, a, o, i = () => !0) {
  let s = new Set(),
    l = !1,
    u = e.matches.map(() => en()),
    d = en(),
    m = {},
    v = Promise.all(
      e.matches.map(async (R, T) =>
        R.resolve(async (E) => {
          u[T].resolve();
          let P = R.route.id,
            { hasLoader: x, hasClientLoader: _, hasShouldRevalidate: M } = r(R),
            S =
              !R.unstable_shouldRevalidateArgs ||
              R.unstable_shouldRevalidateArgs.actionStatus == null ||
              R.unstable_shouldRevalidateArgs.actionStatus < 400;
          if (!R.unstable_shouldCallHandler(S)) {
            l || (l = R.unstable_shouldRevalidateArgs != null && x && M === !0);
            return;
          }
          if (i(R) && _) {
            x && (l = !0);
            try {
              let D = await E(async () => {
                let { data: z } = await n(e, o, [P]);
                return it(z, P);
              });
              m[P] = { type: 'data', result: D };
            } catch (D) {
              m[P] = { type: 'error', result: D };
            }
            return;
          }
          x && s.add(P);
          try {
            let D = await E(async () => {
              let z = await d.promise;
              return it(z, P);
            });
            m[P] = { type: 'data', result: D };
          } catch (D) {
            m[P] = { type: 'error', result: D };
          }
        })
      )
    );
  if (
    (await Promise.all(u.map((R) => R.promise)),
    ((!t.state.initialized && t.state.navigation.state === 'idle') ||
      s.size === 0) &&
      !window.__reactRouterHdrActive)
  )
    d.resolve({ routes: {} });
  else {
    let R = a && l && s.size > 0 ? [...s.keys()] : void 0;
    try {
      let T = await n(e, o, R);
      d.resolve(T.data);
    } catch (T) {
      d.reject(T);
    }
  }
  return (await v, await Pi(d.promise, e.matches, s, m), m);
}
async function Pi(e, t, r, n) {
  try {
    let a,
      o = await e;
    if ('routes' in o) {
      for (let i of t)
        if (i.route.id in o.routes) {
          let s = o.routes[i.route.id];
          if ('error' in s) {
            ((a = s.error),
              n[i.route.id]?.result == null &&
                (n[i.route.id] = { type: 'error', result: a }));
            break;
          }
        }
    }
    a !== void 0 &&
      Array.from(r.values()).forEach((i) => {
        n[i].result instanceof Tn && (n[i].result = a);
      });
  } catch {}
}
async function Ci(e, t, r) {
  let n = e.matches.find((i) => i.unstable_shouldCallHandler());
  he(n, 'No fetcher match found');
  let a = n.route.id,
    o = await n.resolve(async (i) =>
      i(async () => {
        let { data: s } = await t(e, r, [a]);
        return it(s, a);
      })
    );
  return { [n.route.id]: o };
}
function Li(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let r = [];
  for (let n of t) n && r.push(n);
  for (let n of r) e.searchParams.append('index', n);
  return e;
}
function Mn(e, t, r) {
  let n =
    typeof e == 'string'
      ? new URL(
          e,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : e;
  return (
    n.pathname === '/'
      ? (n.pathname = `_root.${r}`)
      : t && Ee(n.pathname, t) === '/'
        ? (n.pathname = `${t.replace(/\/$/, '')}/_root.${r}`)
        : (n.pathname = `${n.pathname.replace(/\/$/, '')}.${r}`),
    n
  );
}
async function Ti(e, t, r) {
  let { request: n } = e,
    a = Mn(n.url, t, 'data');
  n.method === 'GET' &&
    ((a = Li(a)), r && a.searchParams.set('_routes', r.join(',')));
  let o = await fetch(a, await gi(n));
  if (o.status === 404 && !o.headers.has('X-Remix-Response'))
    throw new ze(404, 'Not Found', !0);
  if (o.status === 204 && o.headers.has('X-Remix-Redirect'))
    return {
      status: wi,
      data: {
        redirect: {
          redirect: o.headers.get('X-Remix-Redirect'),
          status: Number(o.headers.get('X-Remix-Status') || '302'),
          revalidate: o.headers.get('X-Remix-Revalidate') === 'true',
          reload: o.headers.get('X-Remix-Reload-Document') === 'true',
          replace: o.headers.get('X-Remix-Replace') === 'true',
        },
      },
    };
  if (Ei.has(o.status)) {
    let i = {};
    return (
      r && n.method !== 'GET' && (i[r[0]] = { data: void 0 }),
      { status: o.status, data: { routes: i } }
    );
  }
  he(o.body, 'No response body to decode');
  try {
    let i = await Mi(o.body, window),
      s;
    if (n.method === 'GET') {
      let l = i.value;
      or in l ? (s = { redirect: l[or] }) : (s = { routes: l });
    } else {
      let l = i.value,
        u = r?.[0];
      (he(u, 'No routeId found for single fetch call decoding'),
        'redirect' in l ? (s = { redirect: l }) : (s = { routes: { [u]: l } }));
    }
    return { status: o.status, data: s };
  } catch {
    throw new Error('Unable to decode turbo-stream response');
  }
}
function Mi(e, t) {
  return pi(e, {
    plugins: [
      (r, ...n) => {
        if (r === 'SanitizedError') {
          let [a, o, i] = n,
            s = Error;
          a && a in t && typeof t[a] == 'function' && (s = t[a]);
          let l = new s(o);
          return ((l.stack = i), { value: l });
        }
        if (r === 'ErrorResponse') {
          let [a, o, i] = n;
          return { value: new ze(o, i, a) };
        }
        if (r === 'SingleFetchRedirect') return { value: { [or]: n[0] } };
        if (r === 'SingleFetchClassInstance') return { value: n[0] };
        if (r === 'SingleFetchFallback') return { value: void 0 };
      },
    ],
  });
}
function it(e, t) {
  if ('redirect' in e) {
    let {
      redirect: n,
      revalidate: a,
      reload: o,
      replace: i,
      status: s,
    } = e.redirect;
    throw ja(n, {
      status: s,
      headers: {
        ...(a ? { 'X-Remix-Revalidate': 'yes' } : null),
        ...(o ? { 'X-Remix-Reload-Document': 'yes' } : null),
        ...(i ? { 'X-Remix-Replace': 'yes' } : null),
      },
    });
  }
  let r = e.routes[t];
  if (r == null) throw new Tn(`No result found for routeId "${t}"`);
  if ('error' in r) throw r.error;
  if ('data' in r) return r.data;
  throw new Error(`Invalid response found for routeId "${t}"`);
}
function en() {
  let e,
    t,
    r = new Promise((n, a) => {
      ((e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        }));
    });
  return { promise: r, resolve: e, reject: t };
}
async function _n(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return ((t[e.id] = r), r);
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Dn(e) {
  return e.css ? e.css.map((t) => ({ rel: 'stylesheet', href: t })) : [];
}
async function _i(e) {
  if (!e.css) return;
  let t = Dn(e);
  await Promise.all(t.map(An));
}
async function On(e, t) {
  if ((!e.css && !t.links) || !Fi()) return;
  let r = [];
  if (
    (e.css && r.push(...Dn(e)), t.links && r.push(...t.links()), r.length === 0)
  )
    return;
  let n = [];
  for (let a of r)
    !Di(a) &&
      a.rel === 'stylesheet' &&
      n.push({ ...a, rel: 'preload', as: 'style' });
  await Promise.all(n.map(An));
}
async function An(e) {
  return new Promise((t) => {
    if (
      (e.media && !window.matchMedia(e.media).matches) ||
      document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`)
    )
      return t();
    let r = document.createElement('link');
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    ((r.onload = () => {
      (n(), t());
    }),
      (r.onerror = () => {
        (n(), t());
      }),
      document.head.appendChild(r));
  });
}
function Di(e) {
  return e != null && typeof e.page == 'string';
}
function Oi(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Ai(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let i = await _n(o, r);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return ki(
    n
      .flat(1)
      .filter(Oi)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' }
      )
  );
}
function tn(e, t, r, n, a, o) {
  let i = (l, u) => (r[u] ? l.route.id !== r[u].route.id : !0),
    s = (l, u) =>
      r[u].pathname !== l.pathname ||
      (r[u].route.path?.endsWith('*') && r[u].params['*'] !== l.params['*']);
  return o === 'assets'
    ? t.filter((l, u) => i(l, u) || s(l, u))
    : o === 'data'
      ? t.filter((l, u) => {
          let d = n.routes[l.route.id];
          if (!d || !d.hasLoader) return !1;
          if (i(l, u) || s(l, u)) return !0;
          if (l.route.shouldRevalidate) {
            let m = l.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: l.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof m == 'boolean') return m;
          }
          return !0;
        })
      : [];
}
function Nn(e, t, { includeHydrateFallback: r } = {}) {
  return Ni(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let o = [a.module];
        return (
          a.clientActionModule && (o = o.concat(a.clientActionModule)),
          a.clientLoaderModule && (o = o.concat(a.clientLoaderModule)),
          r &&
            a.hydrateFallbackModule &&
            (o = o.concat(a.hydrateFallbackModule)),
          a.imports && (o = o.concat(a.imports)),
          o
        );
      })
      .flat(1)
  );
}
function Ni(e) {
  return [...new Set(e)];
}
function $i(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function ki(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((n, a) => {
      let o = JSON.stringify($i(a));
      return (r.has(o) || (r.add(o), n.push({ key: o, link: a })), n);
    }, [])
  );
}
var wt;
function Fi() {
  if (wt !== void 0) return wt;
  let e = document.createElement('link');
  return ((wt = e.relList.supports('preload')), (e = null), wt);
}
function Ii() {
  return h.createElement(
    ir,
    { title: 'Loading...', renderScripts: !0 },
    h.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `,
      },
    })
  );
}
function $n(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      if (r) {
        let n = r.parentId || '';
        (t[n] || (t[n] = []), t[n].push(r));
      }
    }),
    t
  );
}
function ji(e, t, r) {
  let n = kn(t),
    a =
      t.HydrateFallback && (!r || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? Ii
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => h.createElement(jn, { error: Sn() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(n
          ? {
              element: h.createElement(
                t.Layout,
                null,
                h.createElement(n, null)
              ),
            }
          : { Component: n }),
        ...(o
          ? {
              errorElement: h.createElement(
                t.Layout,
                null,
                h.createElement(o, null)
              ),
            }
          : { ErrorBoundary: o }),
        ...(a
          ? {
              hydrateFallbackElement: h.createElement(
                t.Layout,
                null,
                h.createElement(a, null)
              ),
            }
          : { HydrateFallback: a }),
      }
    : { Component: n, ErrorBoundary: o, HydrateFallback: a };
}
function xl(e, t, r, n, a, o) {
  return mr(t, r, n, a, o, '', $n(t), e);
}
function Et(e, t) {
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction)) {
    let n = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(n), new ze(400, 'Bad Request', new Error(n), !0));
  }
}
function Gt(e, t) {
  let r = e === 'clientAction' ? 'a' : 'an',
    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(n), new ze(405, 'Method Not Allowed', new Error(n), !0));
}
function mr(e, t, r, n, a, o = '', i = $n(e), s) {
  return (i[o] || []).map((l) => {
    let u = t[l.id];
    function d(x) {
      return (
        he(
          typeof x == 'function',
          'No single fetch function available for route handler'
        ),
        x()
      );
    }
    function m(x) {
      return l.hasLoader ? d(x) : Promise.resolve(null);
    }
    function v(x) {
      if (!l.hasAction) throw Gt('action', l.id);
      return d(x);
    }
    function w(x) {
      import(x);
    }
    function R(x) {
      (x.clientActionModule && w(x.clientActionModule),
        x.clientLoaderModule && w(x.clientLoaderModule));
    }
    async function T(x) {
      let _ = t[l.id],
        M = _ ? On(l, _) : Promise.resolve();
      try {
        return x();
      } finally {
        await M;
      }
    }
    let E = { id: l.id, index: l.index, path: l.path };
    if (u) {
      Object.assign(E, {
        ...E,
        ...ji(l, u, a),
        unstable_middleware: u.unstable_clientMiddleware,
        handle: u.handle,
        shouldRevalidate: rn(E.path, u, l, n, s),
      });
      let x = r && r.loaderData && l.id in r.loaderData,
        _ = x ? r?.loaderData?.[l.id] : void 0,
        M = r && r.errors && l.id in r.errors,
        S = M ? r?.errors?.[l.id] : void 0,
        p = s == null && (u.clientLoader?.hydrate === !0 || !l.hasLoader);
      ((E.loader = async ({ request: D, params: z, context: H }, K) => {
        try {
          return await T(
            async () => (
              he(u, 'No `routeModule` available for critical-route loader'),
              u.clientLoader
                ? u.clientLoader({
                    request: D,
                    params: z,
                    context: H,
                    async serverLoader() {
                      if ((Et('loader', l), p)) {
                        if (x) return _;
                        if (M) throw S;
                      }
                      return m(K);
                    },
                  })
                : m(K)
            )
          );
        } finally {
          p = !1;
        }
      }),
        (E.loader.hydrate = zi(l.id, u.clientLoader, l.hasLoader, a)),
        (E.action = ({ request: D, params: z, context: H }, K) =>
          T(async () => {
            if (
              (he(u, 'No `routeModule` available for critical-route action'),
              !u.clientAction)
            ) {
              if (a) throw Gt('clientAction', l.id);
              return v(K);
            }
            return u.clientAction({
              request: D,
              params: z,
              context: H,
              async serverAction() {
                return (Et('action', l), v(K));
              },
            });
          })));
    } else {
      (l.hasClientLoader || (E.loader = (M, S) => T(() => m(S))),
        l.hasClientAction ||
          (E.action = (M, S) =>
            T(() => {
              if (a) throw Gt('clientAction', l.id);
              return v(S);
            })));
      let x;
      async function _() {
        return x
          ? await x
          : ((x = (async () => {
              (l.clientLoaderModule || l.clientActionModule) &&
                (await new Promise((S) => setTimeout(S, 0)));
              let M = Hi(l, t);
              return (R(l), await M);
            })()),
            await x);
      }
      E.lazy = {
        loader: l.hasClientLoader
          ? async () => {
              let { clientLoader: M } = l.clientLoaderModule
                ? await import(l.clientLoaderModule)
                : await _();
              return (
                he(M, 'No `clientLoader` export found'),
                (S, p) =>
                  M({
                    ...S,
                    async serverLoader() {
                      return (Et('loader', l), m(p));
                    },
                  })
              );
            }
          : void 0,
        action: l.hasClientAction
          ? async () => {
              let M = l.clientActionModule ? import(l.clientActionModule) : _();
              R(l);
              let { clientAction: S } = await M;
              return (
                he(S, 'No `clientAction` export found'),
                (p, D) =>
                  S({
                    ...p,
                    async serverAction() {
                      return (Et('action', l), v(D));
                    },
                  })
              );
            }
          : void 0,
        unstable_middleware: l.hasClientMiddleware
          ? async () => {
              let { unstable_clientMiddleware: M } = l.clientMiddlewareModule
                ? await import(l.clientMiddlewareModule)
                : await _();
              return (he(M, 'No `unstable_clientMiddleware` export found'), M);
            }
          : void 0,
        shouldRevalidate: async () => {
          let M = await _();
          return rn(E.path, M, l, n, s);
        },
        handle: async () => (await _()).handle,
        Component: async () => (await _()).Component,
        ErrorBoundary: l.hasErrorBoundary
          ? async () => (await _()).ErrorBoundary
          : void 0,
      };
    }
    let P = mr(e, t, r, n, a, l.id, i, s);
    return (P.length > 0 && (E.children = P), E);
  });
}
function rn(e, t, r, n, a) {
  if (a) return Ui(r.id, t.shouldRevalidate, a);
  if (!n && r.hasLoader && !r.hasClientLoader) {
    let o = e ? un(e)[1].map((s) => s.paramName) : [];
    const i = (s) => o.some((l) => s.currentParams[l] !== s.nextParams[l]);
    if (t.shouldRevalidate) {
      let s = t.shouldRevalidate;
      return (l) => s({ ...l, defaultShouldRevalidate: i(l) });
    } else return (s) => i(s);
  }
  if (n && t.shouldRevalidate) {
    let o = t.shouldRevalidate;
    return (i) => o({ ...i, defaultShouldRevalidate: !0 });
  }
  return t.shouldRevalidate;
}
function Ui(e, t, r) {
  let n = !1;
  return (a) =>
    n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e));
}
async function Hi(e, t) {
  let r = _n(e, t),
    n = _i(e),
    a = await r;
  return (
    await Promise.all([n, On(e, a)]),
    {
      Component: kn(a),
      ErrorBoundary: a.ErrorBoundary,
      unstable_clientMiddleware: a.unstable_clientMiddleware,
      clientAction: a.clientAction,
      clientLoader: a.clientLoader,
      handle: a.handle,
      links: a.links,
      meta: a.meta,
      shouldRevalidate: a.shouldRevalidate,
    }
  );
}
function kn(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function zi(e, t, r, n) {
  return (n && e !== 'root') || (t != null && (t.hydrate === !0 || r !== !0));
}
var Pt = new Set(),
  Bi = 1e3,
  Tt = new Set(),
  Wi = 7680;
function pr(e, t) {
  return e.mode === 'lazy' && t === !0;
}
function Yi({ sri: e, ...t }, r) {
  let n = new Set(r.state.matches.map((s) => s.route.id)),
    a = r.state.location.pathname.split('/').filter(Boolean),
    o = ['/'];
  for (a.pop(); a.length > 0; ) (o.push(`/${a.join('/')}`), a.pop());
  o.forEach((s) => {
    let l = Le(r.routes, s, r.basename);
    l && l.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((s, l) => Object.assign(s, { [l]: t.routes[l] }), {});
  return { ...t, routes: i, sri: e ? !0 : void 0 };
}
function Pl(e, t, r, n, a, o) {
  if (pr(n, r))
    return async ({ path: i, patch: s, signal: l, fetcherKey: u }) => {
      Tt.has(i) ||
        (await Fn(
          [i],
          u ? window.location.href : i,
          e,
          t,
          r,
          a,
          o,
          n.manifestPath,
          s,
          l
        ));
    };
}
function Cl(e, t, r, n, a, o) {
  h.useEffect(() => {
    if (!pr(a, n) || window.navigator?.connection?.saveData === !0) return;
    function i(d) {
      let m =
        d.tagName === 'FORM'
          ? d.getAttribute('action')
          : d.getAttribute('href');
      if (!m) return;
      let v =
        d.tagName === 'A'
          ? d.pathname
          : new URL(m, window.location.origin).pathname;
      Tt.has(v) || Pt.add(v);
    }
    async function s() {
      document
        .querySelectorAll('a[data-discover], form[data-discover]')
        .forEach(i);
      let d = Array.from(Pt.keys()).filter((m) =>
        Tt.has(m) ? (Pt.delete(m), !1) : !0
      );
      if (d.length !== 0)
        try {
          await Fn(
            d,
            null,
            t,
            r,
            n,
            o,
            e.basename,
            a.manifestPath,
            e.patchRoutes
          );
        } catch (m) {
          console.error('Failed to fetch manifest patches', m);
        }
    }
    let l = Ki(s, 100);
    s();
    let u = new MutationObserver(() => l());
    return (
      u.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => u.disconnect()
    );
  }, [n, o, t, r, e, a]);
}
function Vi(e, t) {
  let r = e || '/__manifest';
  return t == null ? r : `${t}${r}`.replace(/\/+/g, '/');
}
var Xt = 'react-router-manifest-version';
async function Fn(e, t, r, n, a, o, i, s, l, u) {
  const d = new URLSearchParams();
  (e.sort().forEach((E) => d.append('p', E)), d.set('version', r.version));
  let m = new URL(Vi(s, i), window.location.origin);
  if (((m.search = d.toString()), m.toString().length > Wi)) {
    Pt.clear();
    return;
  }
  let v;
  try {
    let E = await fetch(m, { signal: u });
    if (E.ok) {
      if (E.status === 204 && E.headers.has('X-Remix-Reload-Document')) {
        if (!t) {
          console.warn(
            'Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.'
          );
          return;
        }
        if (sessionStorage.getItem(Xt) === r.version) {
          console.error(
            'Unable to discover routes due to manifest version mismatch.'
          );
          return;
        }
        (sessionStorage.setItem(Xt, r.version),
          (window.location.href = t),
          console.warn('Detected manifest version mismatch, reloading...'),
          await new Promise(() => {}));
      } else if (E.status >= 400) throw new Error(await E.text());
    } else throw new Error(`${E.status} ${E.statusText}`);
    (sessionStorage.removeItem(Xt), (v = await E.json()));
  } catch (E) {
    if (u?.aborted) return;
    throw E;
  }
  let w = new Set(Object.keys(r.routes)),
    R = Object.values(v).reduce(
      (E, P) => (P && !w.has(P.id) && (E[P.id] = P), E),
      {}
    );
  (Object.assign(r.routes, R), e.forEach((E) => Ji(E, Tt)));
  let T = new Set();
  (Object.values(R).forEach((E) => {
    E && (!E.parentId || !R[E.parentId]) && T.add(E.parentId);
  }),
    T.forEach((E) => l(E || null, mr(R, n, null, a, o, E))));
}
function Ji(e, t) {
  if (t.size >= Bi) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function Ki(e, t) {
  let r;
  return (...n) => {
    (window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t)));
  };
}
function yr() {
  let e = h.useContext(We);
  return (
    he(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function In() {
  let e = h.useContext(lt);
  return (
    he(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var vr = h.createContext(void 0);
vr.displayName = 'FrameworkContext';
function $t() {
  let e = h.useContext(vr);
  return (
    he(e, 'You must render this element inside a <HydratedRouter> element'),
    e
  );
}
function Gi(e, t) {
  let r = h.useContext(vr),
    [n, a] = h.useState(!1),
    [o, i] = h.useState(!1),
    {
      onFocus: s,
      onBlur: l,
      onMouseEnter: u,
      onMouseLeave: d,
      onTouchStart: m,
    } = t,
    v = h.useRef(null);
  (h.useEffect(() => {
    if ((e === 'render' && i(!0), e === 'viewport')) {
      let T = (P) => {
          P.forEach((x) => {
            i(x.isIntersecting);
          });
        },
        E = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        v.current && E.observe(v.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    h.useEffect(() => {
      if (n) {
        let T = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [n]));
  let w = () => {
      a(!0);
    },
    R = () => {
      (a(!1), i(!1));
    };
  return r
    ? e !== 'intent'
      ? [o, v, {}]
      : [
          o,
          v,
          {
            onFocus: rt(s, w),
            onBlur: rt(l, R),
            onMouseEnter: rt(u, w),
            onMouseLeave: rt(d, R),
            onTouchStart: rt(m, w),
          },
        ]
    : [!1, v, {}];
}
function rt(e, t) {
  return (r) => {
    (e && e(r), r.defaultPrevented || t(r));
  };
}
function Xi(e, t, r) {
  return r && !Mt ? [e[0]] : e;
}
function qi({ page: e, ...t }) {
  let { router: r } = yr(),
    n = h.useMemo(() => Le(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? h.createElement(Zi, { page: e, matches: n, ...t }) : null;
}
function Qi(e) {
  let { manifest: t, routeModules: r } = $t(),
    [n, a] = h.useState([]);
  return (
    h.useEffect(() => {
      let o = !1;
      return (
        Ai(e, t, r).then((i) => {
          o || a(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function Zi({ page: e, matches: t, ...r }) {
  let n = Te(),
    { manifest: a, routeModules: o } = $t(),
    { basename: i } = yr(),
    { loaderData: s, matches: l } = In(),
    u = h.useMemo(() => tn(e, t, l, a, n, 'data'), [e, t, l, a, n]),
    d = h.useMemo(() => tn(e, t, l, a, n, 'assets'), [e, t, l, a, n]),
    m = h.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let R = new Set(),
        T = !1;
      if (
        (t.forEach((P) => {
          let x = a.routes[P.route.id];
          !x ||
            !x.hasLoader ||
            ((!u.some((_) => _.route.id === P.route.id) &&
              P.route.id in s &&
              o[P.route.id]?.shouldRevalidate) ||
            x.hasClientLoader
              ? (T = !0)
              : R.add(P.route.id));
        }),
        R.size === 0)
      )
        return [];
      let E = Mn(e, i, 'data');
      return (
        T &&
          R.size > 0 &&
          E.searchParams.set(
            '_routes',
            t
              .filter((P) => R.has(P.route.id))
              .map((P) => P.route.id)
              .join(',')
          ),
        [E.pathname + E.search]
      );
    }, [i, s, n, a, u, t, e, o]),
    v = h.useMemo(() => Nn(d, a), [d, a]),
    w = Qi(d);
  return h.createElement(
    h.Fragment,
    null,
    m.map((R) =>
      h.createElement('link', {
        key: R,
        rel: 'prefetch',
        as: 'fetch',
        href: R,
        ...r,
      })
    ),
    v.map((R) =>
      h.createElement('link', { key: R, rel: 'modulepreload', href: R, ...r })
    ),
    w.map(({ key: R, link: T }) =>
      h.createElement('link', { key: R, nonce: r.nonce, ...T })
    )
  );
}
var Mt = !1;
function el() {
  Mt = !0;
}
function tl(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      isSpaMode: n,
      renderMeta: a,
      routeDiscovery: o,
      ssr: i,
    } = $t(),
    { router: s, static: l, staticContext: u } = yr(),
    { matches: d } = In(),
    m = go(),
    v = pr(o, i);
  a && (a.didRenderScripts = !0);
  let w = Xi(d, null, n);
  h.useEffect(() => {
    el();
  }, []);
  let R = h.useMemo(() => {
      if (m) return null;
      let x = u
          ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : ' ',
        _ = l
          ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${v ? '' : `import ${JSON.stringify(t.url)}`};
${w.map((M, S) => {
  let p = `route${S}`,
    D = t.routes[M.route.id];
  he(D, `Route ${M.route.id} not found in manifest`);
  let {
      clientActionModule: z,
      clientLoaderModule: H,
      clientMiddlewareModule: K,
      hydrateFallbackModule: ie,
      module: me,
    } = D,
    X = [
      ...(z ? [{ module: z, varName: `${p}_clientAction` }] : []),
      ...(H ? [{ module: H, varName: `${p}_clientLoader` }] : []),
      ...(K ? [{ module: K, varName: `${p}_clientMiddleware` }] : []),
      ...(ie ? [{ module: ie, varName: `${p}_HydrateFallback` }] : []),
      { module: me, varName: `${p}_main` },
    ];
  if (X.length === 1) return `import * as ${p} from ${JSON.stringify(me)};`;
  let Q = X.map((V) => `import * as ${V.varName} from "${V.module}";`).join(`
`),
    ae = `const ${p} = {${X.map((V) => `...${V.varName}`).join(',')}};`;
  return [Q, ae].join(`
`);
}).join(`
`)}
  ${v ? `window.__reactRouterManifest = ${JSON.stringify(Yi(t, s), null, 2)};` : ''}
  window.__reactRouterRouteModules = {${w.map((M, S) => `${JSON.stringify(M.route.id)}:route${S}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
          : ' ';
      return h.createElement(
        h.Fragment,
        null,
        h.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: Zr(x),
          type: void 0,
        }),
        h.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: Zr(_),
          type: 'module',
          async: !0,
        })
      );
    }, []),
    T =
      Mt || m
        ? []
        : rl(t.entry.imports.concat(Nn(w, t, { includeHydrateFallback: !0 }))),
    E = typeof t.sri == 'object' ? t.sri : {};
  return (
    rr(
      !m,
      'The <Scripts /> element is a no-op when using RSC and can be safely removed.'
    ),
    Mt || m
      ? null
      : h.createElement(
          h.Fragment,
          null,
          typeof t.sri == 'object'
            ? h.createElement('script', {
                'rr-importmap': '',
                type: 'importmap',
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                  __html: JSON.stringify({ integrity: E }),
                },
              })
            : null,
          v
            ? null
            : h.createElement('link', {
                rel: 'modulepreload',
                href: t.url,
                crossOrigin: e.crossOrigin,
                integrity: E[t.url],
                suppressHydrationWarning: !0,
              }),
          h.createElement('link', {
            rel: 'modulepreload',
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
            integrity: E[t.entry.module],
            suppressHydrationWarning: !0,
          }),
          T.map((P) =>
            h.createElement('link', {
              key: P,
              rel: 'modulepreload',
              href: P,
              crossOrigin: e.crossOrigin,
              integrity: E[P],
              suppressHydrationWarning: !0,
            })
          ),
          R
        )
  );
}
function rl(e) {
  return [...new Set(e)];
}
function nl(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var Ll = class extends h.Component {
  constructor(e) {
    (super(e), (this.state = { error: e.error || null, location: e.location }));
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location
      ? { error: e.error || null, location: e.location }
      : { error: e.error || t.error, location: t.location };
  }
  render() {
    return this.state.error
      ? h.createElement(jn, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function jn({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let r = h.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `,
    },
  });
  if (Be(e))
    return h.createElement(
      ir,
      { title: 'Unhandled Thrown Response!' },
      h.createElement(
        'h1',
        { style: { fontSize: '24px' } },
        e.status,
        ' ',
        e.statusText
      ),
      r
    );
  let n;
  if (e instanceof Error) n = e;
  else {
    let a =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    n = new Error(a);
  }
  return h.createElement(
    ir,
    { title: 'Application Error!', isOutsideRemixApp: t },
    h.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    h.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      n.stack
    ),
    r
  );
}
function ir({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
  let { routeModules: a } = $t();
  return a.root?.Layout && !r
    ? n
    : h.createElement(
        'html',
        { lang: 'en' },
        h.createElement(
          'head',
          null,
          h.createElement('meta', { charSet: 'utf-8' }),
          h.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          h.createElement('title', null, e)
        ),
        h.createElement(
          'body',
          null,
          h.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            n,
            t ? h.createElement(tl, null) : null
          )
        )
      );
}
var Un =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Un && (window.__reactRouterVersion = '7.8.2');
} catch {}
var Hn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zn = h.forwardRef(function (
    {
      onClick: t,
      discover: r = 'render',
      prefetch: n = 'none',
      relative: a,
      reloadDocument: o,
      replace: i,
      state: s,
      target: l,
      to: u,
      preventScrollReset: d,
      viewTransition: m,
      ...v
    },
    w
  ) {
    let { basename: R } = h.useContext(be),
      T = typeof u == 'string' && Hn.test(u),
      E,
      P = !1;
    if (typeof u == 'string' && T && ((E = u), Un))
      try {
        let H = new URL(window.location.href),
          K = u.startsWith('//') ? new URL(H.protocol + u) : new URL(u),
          ie = Ee(K.pathname, R);
        K.origin === H.origin && ie != null
          ? (u = ie + K.search + K.hash)
          : (P = !0);
      } catch {
        ne(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let x = Eo(u, { relative: a }),
      [_, M, S] = Gi(n, v),
      p = ll(u, {
        replace: i,
        state: s,
        target: l,
        preventScrollReset: d,
        relative: a,
        viewTransition: m,
      });
    function D(H) {
      (t && t(H), H.defaultPrevented || p(H));
    }
    let z = h.createElement('a', {
      ...v,
      ...S,
      href: E || x,
      onClick: P || o ? t : D,
      ref: nl(w, M),
      target: l,
      'data-discover': !T && r === 'render' ? 'true' : void 0,
    });
    return _ && !T
      ? h.createElement(h.Fragment, null, z, h.createElement(qi, { page: x }))
      : z;
  });
zn.displayName = 'Link';
var al = h.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: r = !1,
    className: n = '',
    end: a = !1,
    style: o,
    to: i,
    viewTransition: s,
    children: l,
    ...u
  },
  d
) {
  let m = st(i, { relative: u.relative }),
    v = Te(),
    w = h.useContext(lt),
    { navigator: R, basename: T } = h.useContext(be),
    E = w != null && fl(m) && s === !0,
    P = R.encodeLocation ? R.encodeLocation(m).pathname : m.pathname,
    x = v.pathname,
    _ =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (r ||
    ((x = x.toLowerCase()),
    (_ = _ ? _.toLowerCase() : null),
    (P = P.toLowerCase())),
    _ && T && (_ = Ee(_, T) || _));
  const M = P !== '/' && P.endsWith('/') ? P.length - 1 : P.length;
  let S = x === P || (!a && x.startsWith(P) && x.charAt(M) === '/'),
    p =
      _ != null &&
      (_ === P || (!a && _.startsWith(P) && _.charAt(P.length) === '/')),
    D = { isActive: S, isPending: p, isTransitioning: E },
    z = S ? t : void 0,
    H;
  typeof n == 'function'
    ? (H = n(D))
    : (H = [
        n,
        S ? 'active' : null,
        p ? 'pending' : null,
        E ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let K = typeof o == 'function' ? o(D) : o;
  return h.createElement(
    zn,
    {
      ...u,
      'aria-current': z,
      className: H,
      ref: d,
      style: K,
      to: i,
      viewTransition: s,
    },
    typeof l == 'function' ? l(D) : l
  );
});
al.displayName = 'NavLink';
var ol = h.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: o,
      method: i = St,
      action: s,
      onSubmit: l,
      relative: u,
      preventScrollReset: d,
      viewTransition: m,
      ...v
    },
    w
  ) => {
    let R = cl(),
      T = dl(s, { relative: u }),
      E = i.toLowerCase() === 'get' ? 'get' : 'post',
      P = typeof s == 'string' && Hn.test(s),
      x = (_) => {
        if ((l && l(_), _.defaultPrevented)) return;
        _.preventDefault();
        let M = _.nativeEvent.submitter,
          S = M?.getAttribute('formmethod') || i;
        R(M || _.currentTarget, {
          fetcherKey: t,
          method: S,
          navigate: r,
          replace: a,
          state: o,
          relative: u,
          preventScrollReset: d,
          viewTransition: m,
        });
      };
    return h.createElement('form', {
      ref: w,
      method: E,
      action: T,
      onSubmit: n ? l : x,
      ...v,
      'data-discover': !P && e === 'render' ? 'true' : void 0,
    });
  }
);
ol.displayName = 'Form';
function il(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bn(e) {
  let t = h.useContext(We);
  return (J(t, il(e)), t);
}
function ll(
  e,
  {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: a,
    relative: o,
    viewTransition: i,
  } = {}
) {
  let s = fr(),
    l = Te(),
    u = st(e, { relative: o });
  return h.useCallback(
    (d) => {
      if (Jo(d, t)) {
        d.preventDefault();
        let m = r !== void 0 ? r : Ne(l) === Ne(u);
        s(e, {
          replace: m,
          state: n,
          preventScrollReset: a,
          relative: o,
          viewTransition: i,
        });
      }
    },
    [l, s, u, r, n, t, e, a, o, i]
  );
}
function Tl(e) {
  ne(
    typeof URLSearchParams < 'u',
    'You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.'
  );
  let t = h.useRef(nr(e)),
    r = h.useRef(!1),
    n = Te(),
    a = h.useMemo(() => Ko(n.search, r.current ? null : t.current), [n.search]),
    o = fr(),
    i = h.useCallback(
      (s, l) => {
        const u = nr(typeof s == 'function' ? s(new URLSearchParams(a)) : s);
        ((r.current = !0), o('?' + u, l));
      },
      [o, a]
    );
  return [a, i];
}
var sl = 0,
  ul = () => `__${String(++sl)}__`;
function cl() {
  let { router: e } = Bn('useSubmit'),
    { basename: t } = h.useContext(be),
    r = Ao();
  return h.useCallback(
    async (n, a = {}) => {
      let { action: o, method: i, encType: s, formData: l, body: u } = qo(n, t);
      if (a.navigate === !1) {
        let d = a.fetcherKey || ul();
        await e.fetch(d, r, a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || i,
          formEncType: a.encType || s,
          flushSync: a.flushSync,
        });
      } else
        await e.navigate(a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || i,
          formEncType: a.encType || s,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [e, t, r]
  );
}
function dl(e, { relative: t } = {}) {
  let { basename: r } = h.useContext(be),
    n = h.useContext(Re);
  J(n, 'useFormAction must be used inside a RouteContext');
  let [a] = n.matches.slice(-1),
    o = { ...st(e || '.', { relative: t }) },
    i = Te();
  if (e == null) {
    o.search = i.search;
    let s = new URLSearchParams(o.search),
      l = s.getAll('index');
    if (l.some((d) => d === '')) {
      (s.delete('index'),
        l.filter((m) => m).forEach((m) => s.append('index', m)));
      let d = s.toString();
      o.search = d ? `?${d}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Pe([r, o.pathname])),
    Ne(o)
  );
}
function fl(e, { relative: t } = {}) {
  let r = h.useContext(cr);
  J(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Bn('useViewTransitionState'),
    a = st(e, { relative: t });
  if (!r.isTransitioning) return !1;
  let o = Ee(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    i = Ee(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Ct(a.pathname, i) != null || Ct(a.pathname, o) != null;
}
export {
  gl as A,
  Tl as B,
  ze as E,
  vr as F,
  zn as L,
  El as N,
  Rl as O,
  ca as R,
  tl as S,
  al as a,
  xo as b,
  Te as c,
  ua as d,
  ml as e,
  Ei as f,
  oa as g,
  J as h,
  Be as i,
  hl as j,
  Cl as k,
  Ll as l,
  Le as m,
  wl as n,
  Mi as o,
  mr as p,
  yl as q,
  h as r,
  zi as s,
  Pl as t,
  fr as u,
  Sl as v,
  bl as w,
  pl as x,
  xl as y,
  vl as z,
};
