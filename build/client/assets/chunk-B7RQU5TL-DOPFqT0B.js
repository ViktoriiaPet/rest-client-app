function sa(e, t) {
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
function ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var zt = { exports: {} },
  et = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr;
function ca() {
  if (Nr) return et;
  Nr = 1;
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
  return ((et.Fragment = t), (et.jsx = r), (et.jsxs = r), et);
}
var kr;
function da() {
  return (kr || ((kr = 1), (zt.exports = ca())), zt.exports);
}
var gl = da(),
  Bt = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $r;
function fa() {
  if ($r) return W;
  $r = 1;
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
    f = Symbol.iterator;
  function y(m) {
    return m === null || typeof m != 'object'
      ? null
      : ((m = (f && m[f]) || m['@@iterator']),
        typeof m == 'function' ? m : null);
  }
  var g = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    P = {};
  function w(m, x, F) {
    ((this.props = m),
      (this.context = x),
      (this.refs = P),
      (this.updater = F || g));
  }
  ((w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (m, x) {
      if (typeof m != 'object' && typeof m != 'function' && m != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, m, x, 'setState');
    }),
    (w.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, 'forceUpdate');
    }));
  function b() {}
  b.prototype = w.prototype;
  function S(m, x, F) {
    ((this.props = m),
      (this.context = x),
      (this.refs = P),
      (this.updater = F || g));
  }
  var D = (S.prototype = new b());
  ((D.constructor = S), R(D, w.prototype), (D.isPureReactComponent = !0));
  var T = Array.isArray,
    C = { H: null, A: null, T: null, S: null, V: null },
    p = Object.prototype.hasOwnProperty;
  function _(m, x, F, I, Y, Z) {
    return (
      (F = Z.ref),
      { $$typeof: e, type: m, key: x, ref: F !== void 0 ? F : null, props: Z }
    );
  }
  function z(m, x) {
    return _(m.type, x, void 0, void 0, void 0, m.props);
  }
  function H(m) {
    return typeof m == 'object' && m !== null && m.$$typeof === e;
  }
  function K(m) {
    var x = { '=': '=0', ':': '=2' };
    return (
      '$' +
      m.replace(/[=:]/g, function (F) {
        return x[F];
      })
    );
  }
  var ie = /\/+/g;
  function me(m, x) {
    return typeof m == 'object' && m !== null && m.key != null
      ? K('' + m.key)
      : x.toString(36);
  }
  function X() {}
  function Q(m) {
    switch (m.status) {
      case 'fulfilled':
        return m.value;
      case 'rejected':
        throw m.reason;
      default:
        switch (
          (typeof m.status == 'string'
            ? m.then(X, X)
            : ((m.status = 'pending'),
              m.then(
                function (x) {
                  m.status === 'pending' &&
                    ((m.status = 'fulfilled'), (m.value = x));
                },
                function (x) {
                  m.status === 'pending' &&
                    ((m.status = 'rejected'), (m.reason = x));
                }
              )),
          m.status)
        ) {
          case 'fulfilled':
            return m.value;
          case 'rejected':
            throw m.reason;
        }
    }
    throw m;
  }
  function ae(m, x, F, I, Y) {
    var Z = typeof m;
    (Z === 'undefined' || Z === 'boolean') && (m = null);
    var B = !1;
    if (m === null) B = !0;
    else
      switch (Z) {
        case 'bigint':
        case 'string':
        case 'number':
          B = !0;
          break;
        case 'object':
          switch (m.$$typeof) {
            case e:
            case t:
              B = !0;
              break;
            case d:
              return ((B = m._init), ae(B(m._payload), x, F, I, Y));
          }
      }
    if (B)
      return (
        (Y = Y(m)),
        (B = I === '' ? '.' + me(m, 0) : I),
        T(Y)
          ? ((F = ''),
            B != null && (F = B.replace(ie, '$&/') + '/'),
            ae(Y, x, F, '', function (Ft) {
              return Ft;
            }))
          : Y != null &&
            (H(Y) &&
              (Y = z(
                Y,
                F +
                  (Y.key == null || (m && m.key === Y.key)
                    ? ''
                    : ('' + Y.key).replace(ie, '$&/') + '/') +
                  B
              )),
            x.push(Y)),
        1
      );
    B = 0;
    var Se = I === '' ? '.' : I + ':';
    if (T(m))
      for (var oe = 0; oe < m.length; oe++)
        ((I = m[oe]), (Z = Se + me(I, oe)), (B += ae(I, x, F, Z, Y)));
    else if (((oe = y(m)), typeof oe == 'function'))
      for (m = oe.call(m), oe = 0; !(I = m.next()).done; )
        ((I = I.value), (Z = Se + me(I, oe++)), (B += ae(I, x, F, Z, Y)));
    else if (Z === 'object') {
      if (typeof m.then == 'function') return ae(Q(m), x, F, I, Y);
      throw (
        (x = String(m)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (x === '[object Object]'
              ? 'object with keys {' + Object.keys(m).join(', ') + '}'
              : x) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return B;
  }
  function V(m, x, F) {
    if (m == null) return m;
    var I = [],
      Y = 0;
    return (
      ae(m, I, '', '', function (Z) {
        return x.call(F, Z, Y++);
      }),
      I
    );
  }
  function pe(m) {
    if (m._status === -1) {
      var x = m._result;
      ((x = x()),
        x.then(
          function (F) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = F));
          },
          function (F) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = F));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = x)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var ue =
    typeof reportError == 'function'
      ? reportError
      : function (m) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var x = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof m == 'object' &&
                m !== null &&
                typeof m.message == 'string'
                  ? String(m.message)
                  : String(m),
              error: m,
            });
            if (!window.dispatchEvent(x)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', m);
            return;
          }
          console.error(m);
        };
  function ve() {}
  return (
    (W.Children = {
      map: V,
      forEach: function (m, x, F) {
        V(
          m,
          function () {
            x.apply(this, arguments);
          },
          F
        );
      },
      count: function (m) {
        var x = 0;
        return (
          V(m, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (m) {
        return (
          V(m, function (x) {
            return x;
          }) || []
        );
      },
      only: function (m) {
        if (!H(m))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return m;
      },
    }),
    (W.Component = w),
    (W.Fragment = r),
    (W.Profiler = a),
    (W.PureComponent = S),
    (W.StrictMode = n),
    (W.Suspense = l),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return C.H.useMemoCache(m);
      },
    }),
    (W.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (m, x, F) {
      if (m == null)
        throw Error(
          'The argument must be a React element, but you passed ' + m + '.'
        );
      var I = R({}, m.props),
        Y = m.key,
        Z = void 0;
      if (x != null)
        for (B in (x.ref !== void 0 && (Z = void 0),
        x.key !== void 0 && (Y = '' + x.key),
        x))
          !p.call(x, B) ||
            B === 'key' ||
            B === '__self' ||
            B === '__source' ||
            (B === 'ref' && x.ref === void 0) ||
            (I[B] = x[B]);
      var B = arguments.length - 2;
      if (B === 1) I.children = F;
      else if (1 < B) {
        for (var Se = Array(B), oe = 0; oe < B; oe++)
          Se[oe] = arguments[oe + 2];
        I.children = Se;
      }
      return _(m.type, Y, void 0, void 0, Z, I);
    }),
    (W.createContext = function (m) {
      return (
        (m = {
          $$typeof: i,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: o, _context: m }),
        m
      );
    }),
    (W.createElement = function (m, x, F) {
      var I,
        Y = {},
        Z = null;
      if (x != null)
        for (I in (x.key !== void 0 && (Z = '' + x.key), x))
          p.call(x, I) &&
            I !== 'key' &&
            I !== '__self' &&
            I !== '__source' &&
            (Y[I] = x[I]);
      var B = arguments.length - 2;
      if (B === 1) Y.children = F;
      else if (1 < B) {
        for (var Se = Array(B), oe = 0; oe < B; oe++)
          Se[oe] = arguments[oe + 2];
        Y.children = Se;
      }
      if (m && m.defaultProps)
        for (I in ((B = m.defaultProps), B)) Y[I] === void 0 && (Y[I] = B[I]);
      return _(m, Z, void 0, void 0, null, Y);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (m) {
      return { $$typeof: s, render: m };
    }),
    (W.isValidElement = H),
    (W.lazy = function (m) {
      return { $$typeof: d, _payload: { _status: -1, _result: m }, _init: pe };
    }),
    (W.memo = function (m, x) {
      return { $$typeof: u, type: m, compare: x === void 0 ? null : x };
    }),
    (W.startTransition = function (m) {
      var x = C.T,
        F = {};
      C.T = F;
      try {
        var I = m(),
          Y = C.S;
        (Y !== null && Y(F, I),
          typeof I == 'object' &&
            I !== null &&
            typeof I.then == 'function' &&
            I.then(ve, ue));
      } catch (Z) {
        ue(Z);
      } finally {
        C.T = x;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return C.H.useCacheRefresh();
    }),
    (W.use = function (m) {
      return C.H.use(m);
    }),
    (W.useActionState = function (m, x, F) {
      return C.H.useActionState(m, x, F);
    }),
    (W.useCallback = function (m, x) {
      return C.H.useCallback(m, x);
    }),
    (W.useContext = function (m) {
      return C.H.useContext(m);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (m, x) {
      return C.H.useDeferredValue(m, x);
    }),
    (W.useEffect = function (m, x, F) {
      var I = C.H;
      if (typeof F == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return I.useEffect(m, x);
    }),
    (W.useId = function () {
      return C.H.useId();
    }),
    (W.useImperativeHandle = function (m, x, F) {
      return C.H.useImperativeHandle(m, x, F);
    }),
    (W.useInsertionEffect = function (m, x) {
      return C.H.useInsertionEffect(m, x);
    }),
    (W.useLayoutEffect = function (m, x) {
      return C.H.useLayoutEffect(m, x);
    }),
    (W.useMemo = function (m, x) {
      return C.H.useMemo(m, x);
    }),
    (W.useOptimistic = function (m, x) {
      return C.H.useOptimistic(m, x);
    }),
    (W.useReducer = function (m, x, F) {
      return C.H.useReducer(m, x, F);
    }),
    (W.useRef = function (m) {
      return C.H.useRef(m);
    }),
    (W.useState = function (m) {
      return C.H.useState(m);
    }),
    (W.useSyncExternalStore = function (m, x, F) {
      return C.H.useSyncExternalStore(m, x, F);
    }),
    (W.useTransition = function () {
      return C.H.useTransition();
    }),
    (W.version = '19.1.1'),
    W
  );
}
var Fr;
function ha() {
  return (Fr || ((Fr = 1), (Bt.exports = fa())), Bt.exports);
}
var h = ha();
const ma = ua(h),
  wl = sa({ __proto__: null, default: ma }, [h]);
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var sn = (e) => {
    throw TypeError(e);
  },
  pa = (e, t, r) => t.has(e) || sn('Cannot ' + r),
  Wt = (e, t, r) => (
    pa(e, t, 'read from private field'),
    r ? r.call(e) : t.get(e)
  ),
  ya = (e, t, r) =>
    t.has(e)
      ? sn('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Ir = 'popstate';
function El(e = {}) {
  function t(n, a) {
    let { pathname: o, search: i, hash: s } = n.location;
    return ot(
      '',
      { pathname: o, search: i, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : Ne(a);
  }
  return ga(t, r, null, e);
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
function va() {
  return Math.random().toString(36).substring(2, 10);
}
function jr(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ot(e, t, r = null, n) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? ke(t) : t),
    state: r,
    key: (t && t.key) || n || va(),
  };
}
function Ne({ pathname: e = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function ke(e) {
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
function ga(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    i = a.history,
    s = 'POP',
    l = null,
    u = d();
  u == null && ((u = 0), i.replaceState({ ...i.state, idx: u }, ''));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    s = 'POP';
    let w = d(),
      b = w == null ? null : w - u;
    ((u = w), l && l({ action: s, location: P.location, delta: b }));
  }
  function y(w, b) {
    s = 'PUSH';
    let S = ot(P.location, w, b);
    u = d() + 1;
    let D = jr(S, u),
      T = P.createHref(S);
    try {
      i.pushState(D, '', T);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      a.location.assign(T);
    }
    o && l && l({ action: s, location: P.location, delta: 1 });
  }
  function g(w, b) {
    s = 'REPLACE';
    let S = ot(P.location, w, b);
    u = d();
    let D = jr(S, u),
      T = P.createHref(S);
    (i.replaceState(D, '', T),
      o && l && l({ action: s, location: P.location, delta: 0 }));
  }
  function R(w) {
    return un(w);
  }
  let P = {
    get action() {
      return s;
    },
    get location() {
      return e(a, i);
    },
    listen(w) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Ir, f),
        (l = w),
        () => {
          (a.removeEventListener(Ir, f), (l = null));
        }
      );
    },
    createHref(w) {
      return t(a, w);
    },
    createURL: R,
    encodeLocation(w) {
      let b = R(w);
      return { pathname: b.pathname, search: b.search, hash: b.hash };
    },
    push: y,
    replace: g,
    go(w) {
      return i.go(w);
    },
  };
  return P;
}
function un(e, t = !1) {
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
var at,
  Ur = class {
    constructor(e) {
      if ((ya(this, at, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (Wt(this, at).has(e)) return Wt(this, at).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error('No value found for context');
    }
    set(e, t) {
      Wt(this, at).set(e, t);
    }
  };
at = new WeakMap();
var wa = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function Ea(e) {
  return wa.has(e);
}
var Ra = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'middleware',
  'children',
]);
function ba(e) {
  return Ra.has(e);
}
function Sa(e) {
  return e.index === !0;
}
function it(e, t, r = [], n = {}, a = !1) {
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
      Sa(o))
    ) {
      let u = { ...o, ...t(o), id: l };
      return ((n[l] = u), u);
    } else {
      let u = { ...o, ...t(o), id: l, children: void 0 };
      return (
        (n[l] = u),
        o.children && (u.children = it(o.children, t, s, n, a)),
        u
      );
    }
  });
}
function Me(e, t, r = '/') {
  return bt(e, t, r, !1);
}
function bt(e, t, r, n) {
  let a = typeof t == 'string' ? ke(t) : t,
    o = Ee(a.pathname || '/', r);
  if (o == null) return null;
  let i = dn(e);
  xa(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
    let u = Na(o);
    s = Oa(i[l], u, n);
  }
  return s;
}
function cn(e, t) {
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
function dn(e, t = [], r = [], n = '', a = !1) {
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
    let f = Ce([n, d.relativePath]),
      y = r.concat(d);
    (i.children &&
      i.children.length > 0 &&
      (J(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
      ),
      dn(i.children, t, y, f, l)),
      !(i.path == null && !i.index) &&
        t.push({ path: f, score: _a(f, i.index), routesMeta: y }));
  };
  return (
    e.forEach((i, s) => {
      if (i.path === '' || !i.path?.includes('?')) o(i, s);
      else for (let l of fn(i.path)) o(i, s, !0, l);
    }),
    t
  );
}
function fn(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [o, ''] : [o];
  let i = fn(n.join('/')),
    s = [];
  return (
    s.push(...i.map((l) => (l === '' ? o : [o, l].join('/')))),
    a && s.push(...i),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function xa(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Aa(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var Ca = /^:[\w-]+$/,
  La = 3,
  Pa = 2,
  Ma = 1,
  Ta = 10,
  Da = -2,
  Hr = (e) => e === '*';
function _a(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Hr) && (n += Da),
    t && (n += Pa),
    r
      .filter((a) => !Hr(a))
      .reduce((a, o) => a + (Ca.test(o) ? La : o === '' ? Ma : Ta), n)
  );
}
function Aa(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Oa(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    o = '/',
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      d = o === '/' ? t : t.slice(o.length) || '/',
      f = Pt(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d
      ),
      y = l.route;
    if (
      (!f &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (f = Pt(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    (Object.assign(a, f.params),
      i.push({
        params: a,
        pathname: Ce([o, f.pathname]),
        pathnameBase: Ia(Ce([o, f.pathnameBase])),
        route: y,
      }),
      f.pathnameBase !== '/' && (o = Ce([o, f.pathnameBase])));
  }
  return i;
}
function Pt(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = hn(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    i = o.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: n.reduce((u, { paramName: d, isOptional: f }, y) => {
      if (d === '*') {
        let R = s[y] || '';
        i = o.slice(0, o.length - R.length).replace(/(.)\/+$/, '$1');
      }
      const g = s[y];
      return (
        f && !g ? (u[d] = void 0) : (u[d] = (g || '').replace(/%2F/g, '/')),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function hn(e, t = !1, r = !0) {
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
function Na(e) {
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
function ka({ basename: e, pathname: t }) {
  return t === '/' ? e : Ce([e, t]);
}
function $a(e, t = '/') {
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? ke(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : Fa(r, t)) : t,
    search: ja(n),
    hash: Ua(a),
  };
}
function Fa(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Yt(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function mn(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function _t(e) {
  let t = mn(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function At(e, t, r, n = !1) {
  let a;
  typeof e == 'string'
    ? (a = ke(e))
    : ((a = { ...e }),
      J(
        !a.pathname || !a.pathname.includes('?'),
        Yt('?', 'pathname', 'search', a)
      ),
      J(
        !a.pathname || !a.pathname.includes('#'),
        Yt('#', 'pathname', 'hash', a)
      ),
      J(!a.search || !a.search.includes('#'), Yt('#', 'search', 'hash', a)));
  let o = e === '' || a.pathname === '',
    i = o ? '/' : a.pathname,
    s;
  if (i == null) s = r;
  else {
    let f = t.length - 1;
    if (!n && i.startsWith('..')) {
      let y = i.split('/');
      for (; y[0] === '..'; ) (y.shift(), (f -= 1));
      a.pathname = y.join('/');
    }
    s = f >= 0 ? t[f] : '/';
  }
  let l = $a(a, s),
    u = i && i !== '/' && i.endsWith('/'),
    d = (o || i === '.') && r.endsWith('/');
  return (!l.pathname.endsWith('/') && (u || d) && (l.pathname += '/'), l);
}
var Ce = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Ia = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ja = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Ua = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  Ha = class {
    constructor(e, t) {
      ((this.type = 'DataWithResponseInit'),
        (this.data = e),
        (this.init = t || null));
    }
  };
function za(e, t) {
  return new Ha(e, typeof t == 'number' ? { status: t } : t);
}
var Ba = (e, t = 302) => {
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
var pn = ['POST', 'PUT', 'PATCH', 'DELETE'],
  Wa = new Set(pn),
  Ya = ['GET', ...pn],
  Va = new Set(Ya),
  Ja = new Set([301, 302, 303, 307, 308]),
  Ka = new Set([307, 308]),
  Vt = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ga = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  tt = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Xa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sr = (e) => Xa.test(e),
  qa = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  yn = 'remix-router-transitions',
  vn = Symbol('ResetLoaderData');
function Rl(e) {
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
    a = e.mapRouteProperties || qa,
    o = {},
    i = it(e.routes, a, void 0, o),
    s,
    l = e.basename || '/';
  l.startsWith('/') || (l = `/${l}`);
  let u = e.dataStrategy || ro,
    d = { ...e.future },
    f = null,
    y = new Set(),
    g = null,
    R = null,
    P = null,
    w = e.hydrationData != null,
    b = Me(i, e.history.location, l),
    S = !1,
    D = null,
    T;
  if (b == null && !e.patchRoutesOnNavigation) {
    let c = we(404, { pathname: e.history.location.pathname }),
      { matches: v, route: E } = vt(i);
    ((T = !0), (b = v), (D = { [E.id]: c }));
  } else if (
    (b &&
      !e.hydrationData &&
      ft(b, i, e.history.location.pathname).active &&
      (b = null),
    b)
  )
    if (b.some((c) => c.route.lazy)) T = !1;
    else if (!b.some((c) => c.route.loader)) T = !0;
    else {
      let c = e.hydrationData ? e.hydrationData.loaderData : null,
        v = e.hydrationData ? e.hydrationData.errors : null;
      if (v) {
        let E = b.findIndex((L) => v[L.route.id] !== void 0);
        T = b.slice(0, E + 1).every((L) => !Zt(L.route, c, v));
      } else T = b.every((E) => !Zt(E.route, c, v));
    }
  else {
    ((T = !1), (b = []));
    let c = ft(null, i, e.history.location.pathname);
    c.active && c.matches && ((S = !0), (b = c.matches));
  }
  let C,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: T,
      navigation: Vt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || D,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = 'POP',
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
    m = new Set(),
    x = new Map(),
    F = new Map(),
    I = new Set(),
    Y = new Map(),
    Z,
    B = null;
  function Se() {
    if (
      ((f = e.history.listen(({ action: c, location: v, delta: E }) => {
        if (Z) {
          (Z(), (Z = void 0));
          return;
        }
        ne(
          Y.size === 0 || E != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let L = Dr({
          currentLocation: p.location,
          nextLocation: v,
          historyAction: c,
        });
        if (L && E != null) {
          let M = new Promise((O) => {
            Z = O;
          });
          (e.history.go(E * -1),
            dt(L, {
              state: 'blocked',
              location: v,
              proceed() {
                (dt(L, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: v,
                }),
                  M.then(() => e.history.go(E)));
              },
              reset() {
                let O = new Map(p.blockers);
                (O.set(L, tt), ce({ blockers: O }));
              },
            }));
          return;
        }
        return $e(c, v);
      })),
      r)
    ) {
      go(t, ie);
      let c = () => wo(t, ie);
      (t.addEventListener('pagehide', c),
        (me = () => t.removeEventListener('pagehide', c)));
    }
    return (
      p.initialized || $e('POP', p.location, { initialHydration: !0 }),
      C
    );
  }
  function oe() {
    (f && f(),
      me && me(),
      y.clear(),
      H && H.abort(),
      p.fetchers.forEach((c, v) => jt(v)),
      p.blockers.forEach((c, v) => Tr(v)));
  }
  function Ft(c) {
    return (y.add(c), () => y.delete(c));
  }
  function ce(c, v = {}) {
    (c.matches &&
      (c.matches = c.matches.map((M) => {
        let O = o[M.route.id],
          k = M.route;
        return k.element !== O.element ||
          k.errorElement !== O.errorElement ||
          k.hydrateFallbackElement !== O.hydrateFallbackElement
          ? { ...M, route: O }
          : M;
      })),
      (p = { ...p, ...c }));
    let E = [],
      L = [];
    (p.fetchers.forEach((M, O) => {
      M.state === 'idle' && (I.has(O) ? E.push(O) : L.push(O));
    }),
      I.forEach((M) => {
        !p.fetchers.has(M) && !V.has(M) && E.push(M);
      }),
      [...y].forEach((M) =>
        M(p, {
          deletedFetchers: E,
          viewTransitionOpts: v.viewTransitionOpts,
          flushSync: v.flushSync === !0,
        })
      ),
      E.forEach((M) => jt(M)),
      L.forEach((M) => p.fetchers.delete(M)));
  }
  function Ye(c, v, { flushSync: E } = {}) {
    let L =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        ye(p.navigation.formMethod) &&
        p.navigation.state === 'loading' &&
        c.state?._isRedirect !== !0,
      M;
    v.actionData
      ? Object.keys(v.actionData).length > 0
        ? (M = v.actionData)
        : (M = null)
      : L
        ? (M = p.actionData)
        : (M = null);
    let O = v.loaderData
        ? qr(p.loaderData, v.loaderData, v.matches || [], v.errors)
        : p.loaderData,
      k = p.blockers;
    k.size > 0 && ((k = new Map(k)), k.forEach(($, N) => k.set(N, tt)));
    let A = X ? !1 : Ar(c, v.matches || p.matches),
      j =
        z === !0 ||
        (p.navigation.formMethod != null &&
          ye(p.navigation.formMethod) &&
          c.state?._isRedirect !== !0);
    (s && ((i = s), (s = void 0)),
      X ||
        _ === 'POP' ||
        (_ === 'PUSH'
          ? e.history.push(c, c.state)
          : _ === 'REPLACE' && e.history.replace(c, c.state)));
    let U;
    if (_ === 'POP') {
      let $ = ie.get(p.location.pathname);
      $ && $.has(c.pathname)
        ? (U = { currentLocation: p.location, nextLocation: c })
        : ie.has(c.pathname) &&
          (U = { currentLocation: c, nextLocation: p.location });
    } else if (K) {
      let $ = ie.get(p.location.pathname);
      ($
        ? $.add(c.pathname)
        : (($ = new Set([c.pathname])), ie.set(p.location.pathname, $)),
        (U = { currentLocation: p.location, nextLocation: c }));
    }
    (ce(
      {
        ...v,
        actionData: M,
        loaderData: O,
        historyAction: _,
        location: c,
        initialized: !0,
        navigation: Vt,
        revalidation: 'idle',
        restoreScrollPosition: A,
        preventScrollReset: j,
        blockers: k,
      },
      { viewTransitionOpts: U, flushSync: E === !0 }
    ),
      (_ = 'POP'),
      (z = !1),
      (K = !1),
      (X = !1),
      (Q = !1),
      B?.resolve(),
      (B = null));
  }
  async function br(c, v) {
    if (typeof c == 'number') {
      e.history.go(c);
      return;
    }
    let E = Qt(p.location, p.matches, l, c, v?.fromRouteId, v?.relative),
      { path: L, submission: M, error: O } = zr(!1, E, v),
      k = p.location,
      A = ot(p.location, L, v && v.state);
    A = { ...A, ...e.history.encodeLocation(A) };
    let j = v && v.replace != null ? v.replace : void 0,
      U = 'PUSH';
    j === !0
      ? (U = 'REPLACE')
      : j === !1 ||
        (M != null &&
          ye(M.formMethod) &&
          M.formAction === p.location.pathname + p.location.search &&
          (U = 'REPLACE'));
    let $ =
        v && 'preventScrollReset' in v ? v.preventScrollReset === !0 : void 0,
      N = (v && v.flushSync) === !0,
      G = Dr({ currentLocation: k, nextLocation: A, historyAction: U });
    if (G) {
      dt(G, {
        state: 'blocked',
        location: A,
        proceed() {
          (dt(G, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            br(c, v));
        },
        reset() {
          let te = new Map(p.blockers);
          (te.set(G, tt), ce({ blockers: te }));
        },
      });
      return;
    }
    await $e(U, A, {
      submission: M,
      pendingError: O,
      preventScrollReset: $,
      replace: v && v.replace,
      enableViewTransition: v && v.viewTransition,
      flushSync: N,
    });
  }
  function Kn() {
    (B || (B = Eo()), It(), ce({ revalidation: 'loading' }));
    let c = B.promise;
    return p.navigation.state === 'submitting'
      ? c
      : p.navigation.state === 'idle'
        ? ($e(p.historyAction, p.location, {
            startUninterruptedRevalidation: !0,
          }),
          c)
        : ($e(_ || p.historyAction, p.navigation.location, {
            overrideNavigation: p.navigation,
            enableViewTransition: K === !0,
          }),
          c);
  }
  async function $e(c, v, E) {
    (H && H.abort(),
      (H = null),
      (_ = c),
      (X = (E && E.startUninterruptedRevalidation) === !0),
      aa(p.location, p.matches),
      (z = (E && E.preventScrollReset) === !0),
      (K = (E && E.enableViewTransition) === !0));
    let L = s || i,
      M = E && E.overrideNavigation,
      O =
        E?.initialHydration && p.matches && p.matches.length > 0 && !S
          ? p.matches
          : Me(L, v, l),
      k = (E && E.flushSync) === !0;
    if (
      O &&
      p.initialized &&
      !Q &&
      co(p.location, v) &&
      !(E && E.submission && ye(E.submission.formMethod))
    ) {
      Ye(v, { matches: O }, { flushSync: k });
      return;
    }
    let A = ft(O, L, v.pathname);
    if ((A.active && A.matches && (O = A.matches), !O)) {
      let { error: fe, notFoundMatches: re, route: ee } = Ut(v.pathname);
      Ye(
        v,
        { matches: re, loaderData: {}, errors: { [ee.id]: fe } },
        { flushSync: k }
      );
      return;
    }
    H = new AbortController();
    let j = Je(e.history, v, H.signal, E && E.submission),
      U = e.getContext ? await e.getContext() : new Ur(),
      $;
    if (E && E.pendingError)
      $ = [Oe(O).route.id, { type: 'error', error: E.pendingError }];
    else if (E && E.submission && ye(E.submission.formMethod)) {
      let fe = await Gn(
        j,
        v,
        E.submission,
        O,
        U,
        A.active,
        E && E.initialHydration === !0,
        { replace: E.replace, flushSync: k }
      );
      if (fe.shortCircuited) return;
      if (fe.pendingActionResult) {
        let [re, ee] = fe.pendingActionResult;
        if (ge(ee) && Be(ee.error) && ee.error.status === 404) {
          ((H = null),
            Ye(v, {
              matches: fe.matches,
              loaderData: {},
              errors: { [re]: ee.error },
            }));
          return;
        }
      }
      ((O = fe.matches || O),
        ($ = fe.pendingActionResult),
        (M = Jt(v, E.submission)),
        (k = !1),
        (A.active = !1),
        (j = Je(e.history, j.url, j.signal)));
    }
    let {
      shortCircuited: N,
      matches: G,
      loaderData: te,
      errors: se,
    } = await Xn(
      j,
      v,
      O,
      U,
      A.active,
      M,
      E && E.submission,
      E && E.fetcherSubmission,
      E && E.replace,
      E && E.initialHydration === !0,
      k,
      $
    );
    N ||
      ((H = null),
      Ye(v, { matches: G || O, ...Qr($), loaderData: te, errors: se }));
  }
  async function Gn(c, v, E, L, M, O, k, A = {}) {
    It();
    let j = yo(v, E);
    if ((ce({ navigation: j }, { flushSync: A.flushSync === !0 }), O)) {
      let N = await ht(L, v.pathname, c.signal);
      if (N.type === 'aborted') return { shortCircuited: !0 };
      if (N.type === 'error') {
        if (N.partialMatches.length === 0) {
          let { matches: te, route: se } = vt(i);
          return {
            matches: te,
            pendingActionResult: [se.id, { type: 'error', error: N.error }],
          };
        }
        let G = Oe(N.partialMatches).route.id;
        return {
          matches: N.partialMatches,
          pendingActionResult: [G, { type: 'error', error: N.error }],
        };
      } else if (N.matches) L = N.matches;
      else {
        let { notFoundMatches: G, error: te, route: se } = Ut(v.pathname);
        return {
          matches: G,
          pendingActionResult: [se.id, { type: 'error', error: te }],
        };
      }
    }
    let U,
      $ = St(L, v);
    if (!$.route.action && !$.route.lazy)
      U = {
        type: 'error',
        error: we(405, {
          method: c.method,
          pathname: v.pathname,
          routeId: $.route.id,
        }),
      };
    else {
      let N = Ke(a, o, c, L, $, k ? [] : n, M),
        G = await qe(c, N, M, null);
      if (((U = G[$.route.id]), !U)) {
        for (let te of L)
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
        A && A.replace != null
          ? (N = A.replace)
          : (N =
              Kr(U.response.headers.get('Location'), new URL(c.url), l) ===
              p.location.pathname + p.location.search),
        await Fe(c, U, !0, { submission: E, replace: N }),
        { shortCircuited: !0 }
      );
    }
    if (ge(U)) {
      let N = Oe(L, $.route.id);
      return (
        (A && A.replace) !== !0 && (_ = 'PUSH'),
        { matches: L, pendingActionResult: [N.route.id, U, $.route.id] }
      );
    }
    return { matches: L, pendingActionResult: [$.route.id, U] };
  }
  async function Xn(c, v, E, L, M, O, k, A, j, U, $, N) {
    let G = O || Jt(v, k),
      te = k || A || Zr(G),
      se = !X && !U;
    if (M) {
      if (se) {
        let de = Sr(N);
        ce(
          { navigation: G, ...(de !== void 0 ? { actionData: de } : {}) },
          { flushSync: $ }
        );
      }
      let q = await ht(E, v.pathname, c.signal);
      if (q.type === 'aborted') return { shortCircuited: !0 };
      if (q.type === 'error') {
        if (q.partialMatches.length === 0) {
          let { matches: Ve, route: Ue } = vt(i);
          return { matches: Ve, loaderData: {}, errors: { [Ue.id]: q.error } };
        }
        let de = Oe(q.partialMatches).route.id;
        return {
          matches: q.partialMatches,
          loaderData: {},
          errors: { [de]: q.error },
        };
      } else if (q.matches) E = q.matches;
      else {
        let { error: de, notFoundMatches: Ve, route: Ue } = Ut(v.pathname);
        return { matches: Ve, loaderData: {}, errors: { [Ue.id]: de } };
      }
    }
    let fe = s || i,
      { dsMatches: re, revalidatingFetchers: ee } = Br(
        c,
        L,
        a,
        o,
        e.history,
        p,
        E,
        te,
        v,
        U ? [] : n,
        U === !0,
        Q,
        ae,
        I,
        x,
        m,
        fe,
        l,
        e.patchRoutesOnNavigation != null,
        N
      );
    if (
      ((ue = ++pe),
      !e.dataStrategy &&
        !re.some((q) => q.shouldLoad) &&
        !re.some((q) => q.route.middleware) &&
        ee.length === 0)
    ) {
      let q = Pr();
      return (
        Ye(
          v,
          {
            matches: E,
            loaderData: {},
            errors: N && ge(N[1]) ? { [N[0]]: N[1].error } : null,
            ...Qr(N),
            ...(q ? { fetchers: new Map(p.fetchers) } : {}),
          },
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (se) {
      let q = {};
      if (!M) {
        q.navigation = G;
        let de = Sr(N);
        de !== void 0 && (q.actionData = de);
      }
      (ee.length > 0 && (q.fetchers = qn(ee)), ce(q, { flushSync: $ }));
    }
    ee.forEach((q) => {
      (De(q.key), q.controller && V.set(q.key, q.controller));
    });
    let Ie = () => ee.forEach((q) => De(q.key));
    H && H.signal.addEventListener('abort', Ie);
    let { loaderResults: Qe, fetcherResults: _e } = await xr(re, ee, c, L);
    if (c.signal.aborted) return { shortCircuited: !0 };
    (H && H.signal.removeEventListener('abort', Ie),
      ee.forEach((q) => V.delete(q.key)));
    let xe = gt(Qe);
    if (xe)
      return (
        await Fe(c, xe.result, !0, { replace: j }),
        { shortCircuited: !0 }
      );
    if (((xe = gt(_e)), xe))
      return (
        m.add(xe.key),
        await Fe(c, xe.result, !0, { replace: j }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ht, errors: Ze } = Xr(p, E, Qe, N, ee, _e);
    U && p.errors && (Ze = { ...p.errors, ...Ze });
    let je = Pr(),
      mt = Mr(ue),
      pt = je || mt || ee.length > 0;
    return {
      matches: E,
      loaderData: Ht,
      errors: Ze,
      ...(pt ? { fetchers: new Map(p.fetchers) } : {}),
    };
  }
  function Sr(c) {
    if (c && !ge(c[1])) return { [c[0]]: c[1].data };
    if (p.actionData)
      return Object.keys(p.actionData).length === 0 ? null : p.actionData;
  }
  function qn(c) {
    return (
      c.forEach((v) => {
        let E = p.fetchers.get(v.key),
          L = rt(void 0, E ? E.data : void 0);
        p.fetchers.set(v.key, L);
      }),
      new Map(p.fetchers)
    );
  }
  async function Qn(c, v, E, L) {
    De(c);
    let M = (L && L.flushSync) === !0,
      O = s || i,
      k = Qt(p.location, p.matches, l, E, v, L?.relative),
      A = Me(O, k, l),
      j = ft(A, O, k);
    if ((j.active && j.matches && (A = j.matches), !A)) {
      Pe(c, v, we(404, { pathname: k }), { flushSync: M });
      return;
    }
    let { path: U, submission: $, error: N } = zr(!0, k, L);
    if (N) {
      Pe(c, v, N, { flushSync: M });
      return;
    }
    let G = e.getContext ? await e.getContext() : new Ur(),
      te = (L && L.preventScrollReset) === !0;
    if ($ && ye($.formMethod)) {
      await Zn(c, v, U, A, G, j.active, M, te, $);
      return;
    }
    (x.set(c, { routeId: v, path: U }),
      await ea(c, v, U, A, G, j.active, M, te, $));
  }
  async function Zn(c, v, E, L, M, O, k, A, j) {
    (It(), x.delete(c));
    let U = p.fetchers.get(c);
    Te(c, vo(j, U), { flushSync: k });
    let $ = new AbortController(),
      N = Je(e.history, E, $.signal, j);
    if (O) {
      let le = await ht(L, new URL(N.url).pathname, N.signal, c);
      if (le.type === 'aborted') return;
      if (le.type === 'error') {
        Pe(c, v, le.error, { flushSync: k });
        return;
      } else if (le.matches) L = le.matches;
      else {
        Pe(c, v, we(404, { pathname: E }), { flushSync: k });
        return;
      }
    }
    let G = St(L, E);
    if (!G.route.action && !G.route.lazy) {
      let le = we(405, { method: j.formMethod, pathname: E, routeId: v });
      Pe(c, v, le, { flushSync: k });
      return;
    }
    V.set(c, $);
    let te = pe,
      se = Ke(a, o, N, L, G, n, M),
      re = (await qe(N, se, M, c))[G.route.id];
    if (N.signal.aborted) {
      V.get(c) === $ && V.delete(c);
      return;
    }
    if (I.has(c)) {
      if (He(re) || ge(re)) {
        Te(c, Ae(void 0));
        return;
      }
    } else {
      if (He(re))
        if ((V.delete(c), ue > te)) {
          Te(c, Ae(void 0));
          return;
        } else
          return (
            m.add(c),
            Te(c, rt(j)),
            Fe(N, re, !1, { fetcherSubmission: j, preventScrollReset: A })
          );
      if (ge(re)) {
        Pe(c, v, re.error);
        return;
      }
    }
    let ee = p.navigation.location || p.location,
      Ie = Je(e.history, ee, $.signal),
      Qe = s || i,
      _e =
        p.navigation.state !== 'idle'
          ? Me(Qe, p.navigation.location, l)
          : p.matches;
    J(_e, "Didn't find any matches after fetcher action");
    let xe = ++pe;
    ve.set(c, xe);
    let Ht = rt(j, re.data);
    p.fetchers.set(c, Ht);
    let { dsMatches: Ze, revalidatingFetchers: je } = Br(
      Ie,
      M,
      a,
      o,
      e.history,
      p,
      _e,
      j,
      ee,
      n,
      !1,
      Q,
      ae,
      I,
      x,
      m,
      Qe,
      l,
      e.patchRoutesOnNavigation != null,
      [G.route.id, re]
    );
    (je
      .filter((le) => le.key !== c)
      .forEach((le) => {
        let yt = le.key,
          Or = p.fetchers.get(yt),
          la = rt(void 0, Or ? Or.data : void 0);
        (p.fetchers.set(yt, la),
          De(yt),
          le.controller && V.set(yt, le.controller));
      }),
      ce({ fetchers: new Map(p.fetchers) }));
    let mt = () => je.forEach((le) => De(le.key));
    $.signal.addEventListener('abort', mt);
    let { loaderResults: pt, fetcherResults: q } = await xr(Ze, je, Ie, M);
    if ($.signal.aborted) return;
    if (
      ($.signal.removeEventListener('abort', mt),
      ve.delete(c),
      V.delete(c),
      je.forEach((le) => V.delete(le.key)),
      p.fetchers.has(c))
    ) {
      let le = Ae(re.data);
      p.fetchers.set(c, le);
    }
    let de = gt(pt);
    if (de) return Fe(Ie, de.result, !1, { preventScrollReset: A });
    if (((de = gt(q)), de))
      return (m.add(de.key), Fe(Ie, de.result, !1, { preventScrollReset: A }));
    let { loaderData: Ve, errors: Ue } = Xr(p, _e, pt, void 0, je, q);
    (Mr(xe),
      p.navigation.state === 'loading' && xe > ue
        ? (J(_, 'Expected pending action'),
          H && H.abort(),
          Ye(p.navigation.location, {
            matches: _e,
            loaderData: Ve,
            errors: Ue,
            fetchers: new Map(p.fetchers),
          }))
        : (ce({
            errors: Ue,
            loaderData: qr(p.loaderData, Ve, _e, Ue),
            fetchers: new Map(p.fetchers),
          }),
          (Q = !1)));
  }
  async function ea(c, v, E, L, M, O, k, A, j) {
    let U = p.fetchers.get(c);
    Te(c, rt(j, U ? U.data : void 0), { flushSync: k });
    let $ = new AbortController(),
      N = Je(e.history, E, $.signal);
    if (O) {
      let ee = await ht(L, new URL(N.url).pathname, N.signal, c);
      if (ee.type === 'aborted') return;
      if (ee.type === 'error') {
        Pe(c, v, ee.error, { flushSync: k });
        return;
      } else if (ee.matches) L = ee.matches;
      else {
        Pe(c, v, we(404, { pathname: E }), { flushSync: k });
        return;
      }
    }
    let G = St(L, E);
    V.set(c, $);
    let te = pe,
      se = Ke(a, o, N, L, G, n, M),
      re = (await qe(N, se, M, c))[G.route.id];
    if ((V.get(c) === $ && V.delete(c), !N.signal.aborted)) {
      if (I.has(c)) {
        Te(c, Ae(void 0));
        return;
      }
      if (He(re))
        if (ue > te) {
          Te(c, Ae(void 0));
          return;
        } else {
          (m.add(c), await Fe(N, re, !1, { preventScrollReset: A }));
          return;
        }
      if (ge(re)) {
        Pe(c, v, re.error);
        return;
      }
      Te(c, Ae(re.data));
    }
  }
  async function Fe(
    c,
    v,
    E,
    {
      submission: L,
      fetcherSubmission: M,
      preventScrollReset: O,
      replace: k,
    } = {}
  ) {
    v.response.headers.has('X-Remix-Revalidate') && (Q = !0);
    let A = v.response.headers.get('Location');
    (J(A, 'Expected a Location header on the redirect Response'),
      (A = Kr(A, new URL(c.url), l)));
    let j = ot(p.location, A, { _isRedirect: !0 });
    if (r) {
      let se = !1;
      if (v.response.headers.has('X-Remix-Reload-Document')) se = !0;
      else if (sr(A)) {
        const fe = un(A, !0);
        se = fe.origin !== t.location.origin || Ee(fe.pathname, l) == null;
      }
      if (se) {
        k ? t.location.replace(A) : t.location.assign(A);
        return;
      }
    }
    H = null;
    let U =
        k === !0 || v.response.headers.has('X-Remix-Replace')
          ? 'REPLACE'
          : 'PUSH',
      { formMethod: $, formAction: N, formEncType: G } = p.navigation;
    !L && !M && $ && N && G && (L = Zr(p.navigation));
    let te = L || M;
    if (Ka.has(v.response.status) && te && ye(te.formMethod))
      await $e(U, j, {
        submission: { ...te, formAction: A },
        preventScrollReset: O || z,
        enableViewTransition: E ? K : void 0,
      });
    else {
      let se = Jt(j, L);
      await $e(U, j, {
        overrideNavigation: se,
        fetcherSubmission: M,
        preventScrollReset: O || z,
        enableViewTransition: E ? K : void 0,
      });
    }
  }
  async function qe(c, v, E, L) {
    let M,
      O = {};
    try {
      M = await ao(u, c, v, L, E, !1);
    } catch (k) {
      return (
        v
          .filter((A) => A.shouldLoad)
          .forEach((A) => {
            O[A.route.id] = { type: 'error', error: k };
          }),
        O
      );
    }
    if (c.signal.aborted) return O;
    for (let [k, A] of Object.entries(M))
      if (mo(A)) {
        let j = A.result;
        O[k] = { type: 'redirect', response: so(j, c, k, v, l) };
      } else O[k] = await lo(A);
    return O;
  }
  async function xr(c, v, E, L) {
    let M = qe(E, c, L, null),
      O = Promise.all(
        v.map(async (j) => {
          if (j.matches && j.match && j.request && j.controller) {
            let $ = (await qe(j.request, j.matches, L, j.key))[
              j.match.route.id
            ];
            return { [j.key]: $ };
          } else
            return Promise.resolve({
              [j.key]: { type: 'error', error: we(404, { pathname: j.path }) },
            });
        })
      ),
      k = await M,
      A = (await O).reduce((j, U) => Object.assign(j, U), {});
    return { loaderResults: k, fetcherResults: A };
  }
  function It() {
    ((Q = !0),
      x.forEach((c, v) => {
        (V.has(v) && ae.add(v), De(v));
      }));
  }
  function Te(c, v, E = {}) {
    (p.fetchers.set(c, v),
      ce(
        { fetchers: new Map(p.fetchers) },
        { flushSync: (E && E.flushSync) === !0 }
      ));
  }
  function Pe(c, v, E, L = {}) {
    let M = Oe(p.matches, v);
    (jt(c),
      ce(
        { errors: { [M.route.id]: E }, fetchers: new Map(p.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      ));
  }
  function Cr(c) {
    return (
      F.set(c, (F.get(c) || 0) + 1),
      I.has(c) && I.delete(c),
      p.fetchers.get(c) || Ga
    );
  }
  function jt(c) {
    let v = p.fetchers.get(c);
    (V.has(c) && !(v && v.state === 'loading' && ve.has(c)) && De(c),
      x.delete(c),
      ve.delete(c),
      m.delete(c),
      I.delete(c),
      ae.delete(c),
      p.fetchers.delete(c));
  }
  function ta(c) {
    let v = (F.get(c) || 0) - 1;
    (v <= 0 ? (F.delete(c), I.add(c)) : F.set(c, v),
      ce({ fetchers: new Map(p.fetchers) }));
  }
  function De(c) {
    let v = V.get(c);
    v && (v.abort(), V.delete(c));
  }
  function Lr(c) {
    for (let v of c) {
      let E = Cr(v),
        L = Ae(E.data);
      p.fetchers.set(v, L);
    }
  }
  function Pr() {
    let c = [],
      v = !1;
    for (let E of m) {
      let L = p.fetchers.get(E);
      (J(L, `Expected fetcher: ${E}`),
        L.state === 'loading' && (m.delete(E), c.push(E), (v = !0)));
    }
    return (Lr(c), v);
  }
  function Mr(c) {
    let v = [];
    for (let [E, L] of ve)
      if (L < c) {
        let M = p.fetchers.get(E);
        (J(M, `Expected fetcher: ${E}`),
          M.state === 'loading' && (De(E), ve.delete(E), v.push(E)));
      }
    return (Lr(v), v.length > 0);
  }
  function ra(c, v) {
    let E = p.blockers.get(c) || tt;
    return (Y.get(c) !== v && Y.set(c, v), E);
  }
  function Tr(c) {
    (p.blockers.delete(c), Y.delete(c));
  }
  function dt(c, v) {
    let E = p.blockers.get(c) || tt;
    J(
      (E.state === 'unblocked' && v.state === 'blocked') ||
        (E.state === 'blocked' && v.state === 'blocked') ||
        (E.state === 'blocked' && v.state === 'proceeding') ||
        (E.state === 'blocked' && v.state === 'unblocked') ||
        (E.state === 'proceeding' && v.state === 'unblocked'),
      `Invalid blocker state transition: ${E.state} -> ${v.state}`
    );
    let L = new Map(p.blockers);
    (L.set(c, v), ce({ blockers: L }));
  }
  function Dr({ currentLocation: c, nextLocation: v, historyAction: E }) {
    if (Y.size === 0) return;
    Y.size > 1 && ne(!1, 'A router only supports one blocker at a time');
    let L = Array.from(Y.entries()),
      [M, O] = L[L.length - 1],
      k = p.blockers.get(M);
    if (
      !(k && k.state === 'proceeding') &&
      O({ currentLocation: c, nextLocation: v, historyAction: E })
    )
      return M;
  }
  function Ut(c) {
    let v = we(404, { pathname: c }),
      E = s || i,
      { matches: L, route: M } = vt(E);
    return { notFoundMatches: L, route: M, error: v };
  }
  function na(c, v, E) {
    if (((g = c), (P = v), (R = E || null), !w && p.navigation === Vt)) {
      w = !0;
      let L = Ar(p.location, p.matches);
      L != null && ce({ restoreScrollPosition: L });
    }
    return () => {
      ((g = null), (P = null), (R = null));
    };
  }
  function _r(c, v) {
    return (
      (R &&
        R(
          c,
          v.map((L) => cn(L, p.loaderData))
        )) ||
      c.key
    );
  }
  function aa(c, v) {
    if (g && P) {
      let E = _r(c, v);
      g[E] = P();
    }
  }
  function Ar(c, v) {
    if (g) {
      let E = _r(c, v),
        L = g[E];
      if (typeof L == 'number') return L;
    }
    return null;
  }
  function ft(c, v, E) {
    if (e.patchRoutesOnNavigation)
      if (c) {
        if (Object.keys(c[0].params).length > 0)
          return { active: !0, matches: bt(v, E, l, !0) };
      } else return { active: !0, matches: bt(v, E, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ht(c, v, E, L) {
    if (!e.patchRoutesOnNavigation) return { type: 'success', matches: c };
    let M = c;
    for (;;) {
      let O = s == null,
        k = s || i,
        A = o;
      try {
        await e.patchRoutesOnNavigation({
          signal: E,
          path: v,
          matches: M,
          fetcherKey: L,
          patch: ($, N) => {
            E.aborted || Wr($, N, k, A, a, !1);
          },
        });
      } catch ($) {
        return { type: 'error', error: $, partialMatches: M };
      } finally {
        O && !E.aborted && (i = [...i]);
      }
      if (E.aborted) return { type: 'aborted' };
      let j = Me(k, v, l);
      if (j) return { type: 'success', matches: j };
      let U = bt(k, v, l, !0);
      if (
        !U ||
        (M.length === U.length &&
          M.every(($, N) => $.route.id === U[N].route.id))
      )
        return { type: 'success', matches: null };
      M = U;
    }
  }
  function oa(c) {
    ((o = {}), (s = it(c, a, void 0, o)));
  }
  function ia(c, v, E = !1) {
    let L = s == null;
    (Wr(c, v, s || i, o, a, E), L && ((i = [...i]), ce({})));
  }
  return (
    (C = {
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
      subscribe: Ft,
      enableScrollRestoration: na,
      navigate: br,
      fetch: Qn,
      revalidate: Kn,
      createHref: (c) => e.history.createHref(c),
      encodeLocation: (c) => e.history.encodeLocation(c),
      getFetcher: Cr,
      deleteFetcher: ta,
      dispose: oe,
      getBlocker: ra,
      deleteBlocker: Tr,
      patchRoutes: ia,
      _internalFetchControllers: V,
      _internalSetRoutes: oa,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(c) {
        ce(c);
      },
    }),
    C
  );
}
function Qa(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Qt(e, t, r, n, a, o) {
  let i, s;
  if (a) {
    i = [];
    for (let u of t)
      if ((i.push(u), u.route.id === a)) {
        s = u;
        break;
      }
  } else ((i = t), (s = t[t.length - 1]));
  let l = At(n || '.', _t(i), Ee(e.pathname, r) || e.pathname, o === 'path');
  if (
    (n == null && ((l.search = e.search), (l.hash = e.hash)),
    (n == null || n === '' || n === '.') && s)
  ) {
    let u = cr(l.search);
    if (s.route.index && !u)
      l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index';
    else if (!s.route.index && u) {
      let d = new URLSearchParams(l.search),
        f = d.getAll('index');
      (d.delete('index'),
        f.filter((g) => g).forEach((g) => d.append('index', g)));
      let y = d.toString();
      l.search = y ? `?${y}` : '';
    }
  }
  return (
    r !== '/' && (l.pathname = ka({ basename: r, pathname: l.pathname })),
    Ne(l)
  );
}
function zr(e, t, r) {
  if (!r || !Qa(r)) return { path: t };
  if (r.formMethod && !po(r.formMethod))
    return { path: t, error: we(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: we(400, { type: 'invalid-body' }) }),
    o = (r.formMethod || 'get').toUpperCase(),
    i = Sn(t);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ye(o)) return n();
      let f =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (y, [g, R]) => `${y}${g}=${R}
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
          text: f,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ye(o)) return n();
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: i,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
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
  if (r.formData) ((s = tr(r.formData)), (l = r.formData));
  else if (r.body instanceof FormData) ((s = tr(r.body)), (l = r.body));
  else if (r.body instanceof URLSearchParams) ((s = r.body), (l = Gr(s)));
  else if (r.body == null) ((s = new URLSearchParams()), (l = new FormData()));
  else
    try {
      ((s = new URLSearchParams(r.body)), (l = Gr(s)));
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
  let d = ke(t);
  return (
    e && d.search && cr(d.search) && s.append('index', ''),
    (d.search = `?${s}`),
    { path: Ne(d), submission: u }
  );
}
function Br(e, t, r, n, a, o, i, s, l, u, d, f, y, g, R, P, w, b, S, D) {
  let T = D ? (ge(D[1]) ? D[1].error : D[1].data) : void 0,
    C = a.createURL(o.location),
    p = a.createURL(l),
    _;
  if (d && o.errors) {
    let X = Object.keys(o.errors)[0];
    _ = i.findIndex((Q) => Q.route.id === X);
  } else if (D && ge(D[1])) {
    let X = D[0];
    _ = i.findIndex((Q) => Q.route.id === X) - 1;
  }
  let z = D ? D[1].statusCode : void 0,
    H = z && z >= 400,
    K = {
      currentUrl: C,
      currentParams: o.matches[0]?.params || {},
      nextUrl: p,
      nextParams: i[0].params,
      ...s,
      actionResult: T,
      actionStatus: z,
    },
    ie = i.map((X, Q) => {
      let { route: ae } = X,
        V = null;
      if (
        (_ != null && Q > _
          ? (V = !1)
          : ae.lazy
            ? (V = !0)
            : ae.loader == null
              ? (V = !1)
              : d
                ? (V = Zt(ae, o.loaderData, o.errors))
                : Za(o.loaderData, o.matches[Q], X) && (V = !0),
        V !== null)
      )
        return er(r, n, e, X, u, t, V);
      let pe = H
          ? !1
          : f ||
            C.pathname + C.search === p.pathname + p.search ||
            C.search !== p.search ||
            eo(o.matches[Q], X),
        ue = { ...K, defaultShouldRevalidate: pe },
        ve = Mt(X, ue);
      return er(r, n, e, X, u, t, ve, ue);
    }),
    me = [];
  return (
    R.forEach((X, Q) => {
      if (d || !i.some((F) => F.route.id === X.routeId) || g.has(Q)) return;
      let ae = o.fetchers.get(Q),
        V = ae && ae.state !== 'idle' && ae.data === void 0,
        pe = Me(w, X.path, b);
      if (!pe) {
        if (S && V) return;
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
      if (P.has(Q)) return;
      let ue = St(pe, X.path),
        ve = new AbortController(),
        m = Je(a, X.path, ve.signal),
        x = null;
      if (y.has(Q)) (y.delete(Q), (x = Ke(r, n, m, pe, ue, u, t)));
      else if (V) f && (x = Ke(r, n, m, pe, ue, u, t));
      else {
        let F = { ...K, defaultShouldRevalidate: H ? !1 : f };
        Mt(ue, F) && (x = Ke(r, n, m, pe, ue, u, t, F));
      }
      x &&
        me.push({
          key: Q,
          routeId: X.routeId,
          path: X.path,
          matches: x,
          match: ue,
          request: m,
          controller: ve,
        });
    }),
    { dsMatches: ie, revalidatingFetchers: me }
  );
}
function Zt(e, t, r) {
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
function Za(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function eo(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Mt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
function Wr(e, t, r, n, a, o) {
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
      let d = i.find((f) => gn(u, f));
      d ? l.push({ existingRoute: d, newRoute: u }) : s.push(u);
    }),
    s.length > 0)
  ) {
    let u = it(s, a, [e || '_', 'patch', String(i?.length || '0')], n);
    i.push(...u);
  }
  if (o && l.length > 0)
    for (let u = 0; u < l.length; u++) {
      let { existingRoute: d, newRoute: f } = l[u],
        y = d,
        [g] = it([f], a, [], {}, !0);
      Object.assign(y, {
        element: g.element ? g.element : y.element,
        errorElement: g.errorElement ? g.errorElement : y.errorElement,
        hydrateFallbackElement: g.hydrateFallbackElement
          ? g.hydrateFallbackElement
          : y.hydrateFallbackElement,
      });
    }
}
function gn(e, t) {
  return 'id' in e && 'id' in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => t.children?.some((a) => gn(r, a)))
      : !1;
}
var Yr = new WeakMap(),
  wn = ({ key: e, route: t, manifest: r, mapRouteProperties: n }) => {
    let a = r[t.id];
    if (
      (J(a, 'No route found in manifest'), !a.lazy || typeof a.lazy != 'object')
    )
      return;
    let o = a.lazy[e];
    if (!o) return;
    let i = Yr.get(a);
    i || ((i = {}), Yr.set(a, i));
    let s = i[e];
    if (s) return s;
    let l = (async () => {
      let u = Ea(e),
        f = a[e] !== void 0 && e !== 'hasErrorBoundary';
      if (u)
        (ne(
          !u,
          'Route property ' +
            e +
            ' is not a supported lazy route property. This property will be ignored.'
        ),
          (i[e] = Promise.resolve()));
      else if (f)
        ne(
          !1,
          `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`
        );
      else {
        let y = await o();
        y != null && (Object.assign(a, { [e]: y }), Object.assign(a, n(a)));
      }
      typeof a.lazy == 'object' &&
        ((a.lazy[e] = void 0),
        Object.values(a.lazy).every((y) => y === void 0) && (a.lazy = void 0));
    })();
    return ((i[e] = l), l);
  },
  Vr = new WeakMap();
function to(e, t, r, n, a) {
  let o = r[e.id];
  if ((J(o, 'No route found in manifest'), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == 'function') {
    let d = Vr.get(o);
    if (d) return { lazyRoutePromise: d, lazyHandlerPromise: d };
    let f = (async () => {
      J(typeof e.lazy == 'function', 'No lazy route function found');
      let y = await e.lazy(),
        g = {};
      for (let R in y) {
        let P = y[R];
        if (P === void 0) continue;
        let w = ba(R),
          S = o[R] !== void 0 && R !== 'hasErrorBoundary';
        w
          ? ne(
              !w,
              'Route property ' +
                R +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.'
            )
          : S
            ? ne(
                !S,
                `Route "${o.id}" has a static property "${R}" defined but its lazy function is also returning a value for this property. The lazy route property "${R}" will be ignored.`
              )
            : (g[R] = P);
      }
      (Object.assign(o, g), Object.assign(o, { ...n(o), lazy: void 0 }));
    })();
    return (
      Vr.set(o, f),
      f.catch(() => {}),
      { lazyRoutePromise: f, lazyHandlerPromise: f }
    );
  }
  let i = Object.keys(e.lazy),
    s = [],
    l;
  for (let d of i) {
    if (a && a.includes(d)) continue;
    let f = wn({ key: d, route: e, manifest: r, mapRouteProperties: n });
    f && (s.push(f), d === t && (l = f));
  }
  let u = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
  return (
    u?.catch(() => {}),
    l?.catch(() => {}),
    { lazyRoutePromise: u, lazyHandlerPromise: l }
  );
}
async function Jr(e) {
  let t = e.matches.filter((a) => a.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
      r[t[o].route.id] = a;
    }),
    r
  );
}
async function ro(e) {
  return e.matches.some((t) => t.route.middleware) ? En(e, () => Jr(e)) : Jr(e);
}
function En(e, t) {
  return no(e, t, (n) => n, fo, r);
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
        l = Oe(i, i[s].route.id).route.id;
      return Promise.resolve({ [l]: { type: 'error', result: n } });
    }
  }
}
async function no(e, t, r, n, a) {
  let { matches: o, request: i, params: s, context: l } = e,
    u = o.flatMap((f) =>
      f.route.middleware ? f.route.middleware.map((y) => [f.route.id, y]) : []
    );
  return await Rn({ request: i, params: s, context: l }, u, t, r, n, a);
}
async function Rn(e, t, r, n, a, o, i = 0) {
  let { request: s } = e;
  if (s.signal.aborted)
    throw s.signal.reason ?? new Error(`Request aborted: ${s.method} ${s.url}`);
  let l = t[i];
  if (!l) return await r();
  let [u, d] = l,
    f,
    y = async () => {
      if (f) throw new Error('You may only call `next()` once per middleware');
      try {
        return ((f = { value: await Rn(e, t, r, n, a, o, i + 1) }), f.value);
      } catch (g) {
        return ((f = { value: await o(g, u, f) }), f.value);
      }
    };
  try {
    let g = await d(e, y),
      R = g != null ? n(g) : void 0;
    return a(R)
      ? R
      : f
        ? (R ?? f.value)
        : ((f = { value: await y() }), f.value);
  } catch (g) {
    return await o(g, u, f);
  }
}
function bn(e, t, r, n, a) {
  let o = wn({
      key: 'middleware',
      route: n.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    i = to(n.route, ye(r.method) ? 'action' : 'loader', t, e, a);
  return {
    middleware: o,
    route: i.lazyRoutePromise,
    handler: i.lazyHandlerPromise,
  };
}
function er(e, t, r, n, a, o, i, s = null) {
  let l = !1,
    u = bn(e, t, r, n, a);
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
            ? Mt(n, { ...s, defaultShouldRevalidate: d })
            : Mt(n, s)
          : i
      );
    },
    resolve(d) {
      return l || i || (d && !ye(r.method) && (n.route.lazy || n.route.loader))
        ? oo({
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
          _lazyPromises: bn(e, t, r, l, o),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : er(e, t, r, l, o, i, !0, s)
  );
}
async function ao(e, t, r, n, a, o) {
  r.some((u) => u._lazyPromises?.middleware) &&
    (await Promise.all(r.map((u) => u._lazyPromises?.middleware)));
  let i = { request: t, params: r[0].params, context: a, matches: r },
    l = await e({
      ...i,
      fetcherKey: n,
      runClientMiddleware: (u) => {
        let d = i;
        return En(d, () =>
          u({
            ...d,
            fetcherKey: n,
            runClientMiddleware: () => {
              throw new Error(
                'Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler'
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
async function oo({
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
    d = (f) => {
      let y,
        g = new Promise((w, b) => (y = b));
      ((s = () => y()), e.signal.addEventListener('abort', s));
      let R = (w) =>
          typeof f != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`
                )
              )
            : f(
                { request: e, params: t.params, context: o },
                ...(w !== void 0 ? [w] : [])
              ),
        P = (async () => {
          try {
            return { type: 'data', result: await (a ? a((b) => R(b)) : R()) };
          } catch (w) {
            return { type: 'error', result: w };
          }
        })();
      return Promise.race([P, g]);
    };
  try {
    let f = l ? t.route.action : t.route.loader;
    if (r || n)
      if (f) {
        let y,
          [g] = await Promise.all([
            d(f).catch((R) => {
              y = R;
            }),
            r,
            n,
          ]);
        if (y !== void 0) throw y;
        i = g;
      } else {
        await r;
        let y = l ? t.route.action : t.route.loader;
        if (y) [i] = await Promise.all([d(y), n]);
        else if (u === 'action') {
          let g = new URL(e.url),
            R = g.pathname + g.search;
          throw we(405, { method: e.method, pathname: R, routeId: t.route.id });
        } else return { type: 'data', result: void 0 };
      }
    else if (f) i = await d(f);
    else {
      let y = new URL(e.url),
        g = y.pathname + y.search;
      throw we(404, { pathname: g });
    }
  } catch (f) {
    return { type: 'error', result: f };
  } finally {
    s && e.signal.removeEventListener('abort', s);
  }
  return i;
}
async function io(e) {
  let t = e.headers.get('Content-Type');
  return t && /\bapplication\/json\b/.test(t)
    ? e.body == null
      ? null
      : e.json()
    : e.text();
}
async function lo(e) {
  let { result: t, type: r } = e;
  if (ur(t)) {
    let n;
    try {
      n = await io(t);
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
    ? rr(t)
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
    : rr(t)
      ? {
          type: 'data',
          data: t.data,
          statusCode: t.init?.status,
          headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
        }
      : { type: 'data', data: t };
}
function so(e, t, r, n, a) {
  let o = e.headers.get('Location');
  if (
    (J(
      o,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !sr(o))
  ) {
    let i = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    ((o = Qt(new URL(t.url), i, a, o)), e.headers.set('Location', o));
  }
  return e;
}
function Kr(e, t, r) {
  if (sr(e)) {
    let n = e,
      a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      o = Ee(a.pathname, r) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Je(e, t, r, n) {
  let a = e.createURL(Sn(t)).toString(),
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
            ? (o.body = tr(n.formData))
            : (o.body = n.formData));
  }
  return new Request(a, o);
}
function tr(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function Gr(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function uo(e, t, r, n = !1, a = !1) {
  let o = {},
    i = null,
    s,
    l = !1,
    u = {},
    d = r && ge(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let y = f.route.id,
        g = t[y];
      if (
        (J(!He(g), 'Cannot handle redirect results in processLoaderData'),
        ge(g))
      ) {
        let R = g.error;
        if ((d !== void 0 && ((R = d), (d = void 0)), (i = i || {}), a))
          i[y] = R;
        else {
          let P = Oe(e, y);
          i[P.route.id] == null && (i[P.route.id] = R);
        }
        (n || (o[y] = vn),
          l || ((l = !0), (s = Be(g.error) ? g.error.status : 500)),
          g.headers && (u[y] = g.headers));
      } else
        ((o[y] = g.data),
          g.statusCode && g.statusCode !== 200 && !l && (s = g.statusCode),
          g.headers && (u[y] = g.headers));
    }),
    d !== void 0 && r && ((i = { [r[0]]: d }), r[2] && (o[r[2]] = void 0)),
    { loaderData: o, errors: i, statusCode: s || 200, loaderHeaders: u }
  );
}
function Xr(e, t, r, n, a, o) {
  let { loaderData: i, errors: s } = uo(t, r, n);
  return (
    a
      .filter((l) => !l.matches || l.matches.some((u) => u.shouldLoad))
      .forEach((l) => {
        let { key: u, match: d, controller: f } = l;
        if (f && f.signal.aborted) return;
        let y = o[u];
        if ((J(y, 'Did not find corresponding fetcher result'), ge(y))) {
          let g = Oe(e.matches, d?.route.id);
          ((s && s[g.route.id]) || (s = { ...s, [g.route.id]: y.error }),
            e.fetchers.delete(u));
        } else if (He(y)) J(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let g = Ae(y.data);
          e.fetchers.set(u, g);
        }
      }),
    { loaderData: i, errors: s }
  );
}
function qr(e, t, r, n) {
  let a = Object.entries(t)
    .filter(([, o]) => o !== vn)
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
function Qr(e) {
  return e
    ? ge(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Oe(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function vt(e) {
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
function gt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (He(a)) return { key: n, result: a };
  }
}
function Sn(e) {
  let t = typeof e == 'string' ? ke(e) : e;
  return Ne({ ...t, hash: '' });
}
function co(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function fo(e) {
  return (
    e != null &&
    typeof e == 'object' &&
    Object.entries(e).every(([t, r]) => typeof t == 'string' && ho(r))
  );
}
function ho(e) {
  return (
    e != null &&
    typeof e == 'object' &&
    'type' in e &&
    'result' in e &&
    (e.type === 'data' || e.type === 'error')
  );
}
function mo(e) {
  return ur(e.result) && Ja.has(e.result.status);
}
function ge(e) {
  return e.type === 'error';
}
function He(e) {
  return (e && e.type) === 'redirect';
}
function rr(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function ur(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function po(e) {
  return Va.has(e.toUpperCase());
}
function ye(e) {
  return Wa.has(e.toUpperCase());
}
function cr(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function St(e, t) {
  let r = typeof t == 'string' ? ke(t).search : t.search;
  if (e[e.length - 1].route.index && cr(r || '')) return e[e.length - 1];
  let n = mn(e);
  return n[n.length - 1];
}
function Zr(e) {
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
function Jt(e, t) {
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
function yo(e, t) {
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
function rt(e, t) {
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
function vo(e, t) {
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
function Ae(e) {
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
function go(e, t) {
  try {
    let r = e.sessionStorage.getItem(yn);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {}
}
function wo(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(yn, JSON.stringify(r));
    } catch (n) {
      ne(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`
      );
    }
  }
}
function Eo() {
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
var st = h.createContext(null);
st.displayName = 'DataRouterState';
var Ro = h.createContext(!1);
function bo() {
  return h.useContext(Ro);
}
var dr = h.createContext({ isTransitioning: !1 });
dr.displayName = 'ViewTransition';
var xn = h.createContext(new Map());
xn.displayName = 'Fetchers';
var So = h.createContext(null);
So.displayName = 'Await';
var be = h.createContext(null);
be.displayName = 'Navigation';
var Ot = h.createContext(null);
Ot.displayName = 'Location';
var Re = h.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Re.displayName = 'Route';
var fr = h.createContext(null);
fr.displayName = 'RouteError';
function xo(e, { relative: t } = {}) {
  J(Ge(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: n } = h.useContext(be),
    { hash: a, pathname: o, search: i } = ut(e, { relative: t }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : Ce([r, o])),
    n.createHref({ pathname: s, search: i, hash: a })
  );
}
function Ge() {
  return h.useContext(Ot) != null;
}
function Le() {
  return (
    J(
      Ge(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    h.useContext(Ot).location
  );
}
var Cn =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ln(e) {
  h.useContext(be).static || h.useLayoutEffect(e);
}
function hr() {
  let { isDataRoute: e } = h.useContext(Re);
  return e ? Ho() : Co();
}
function Co() {
  J(
    Ge(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = h.useContext(We),
    { basename: t, navigator: r } = h.useContext(be),
    { matches: n } = h.useContext(Re),
    { pathname: a } = Le(),
    o = JSON.stringify(_t(n)),
    i = h.useRef(!1);
  return (
    Ln(() => {
      i.current = !0;
    }),
    h.useCallback(
      (l, u = {}) => {
        if ((ne(i.current, Cn), !i.current)) return;
        if (typeof l == 'number') {
          r.go(l);
          return;
        }
        let d = At(l, JSON.parse(o), a, u.relative === 'path');
        (e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Ce([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u));
      },
      [t, r, o, a, e]
    )
  );
}
var Lo = h.createContext(null);
function Po(e) {
  let t = h.useContext(Re).outlet;
  return t && h.createElement(Lo.Provider, { value: e }, t);
}
function Mo() {
  let { matches: e } = h.useContext(Re),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ut(e, { relative: t } = {}) {
  let { matches: r } = h.useContext(Re),
    { pathname: n } = Le(),
    a = JSON.stringify(_t(r));
  return h.useMemo(() => At(e, JSON.parse(a), n, t === 'path'), [e, a, n, t]);
}
function To(e, t, r, n, a) {
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
    f = s && s.route;
  {
    let S = (f && f.path) || '';
    Mn(
      u,
      !f || S.endsWith('*') || S.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S === '/' ? '*' : `${S}/*`}">.`
    );
  }
  let y = Le(),
    g;
  g = y;
  let R = g.pathname || '/',
    P = R;
  if (d !== '/') {
    let S = d.replace(/^\//, '').split('/');
    P = '/' + R.replace(/^\//, '').split('/').slice(S.length).join('/');
  }
  let w = Me(e, { pathname: P });
  return (
    ne(
      f || w != null,
      `No routes matched location "${g.pathname}${g.search}${g.hash}" `
    ),
    ne(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    No(
      w &&
        w.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Ce([
              d,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? d
                : Ce([
                    d,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
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
function Do() {
  let e = Pn(),
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
var _o = h.createElement(Do, null),
  Ao = class extends h.Component {
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
            h.createElement(fr.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Oo({ routeContext: e, match: t, children: r }) {
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
function No(e, t = [], r = null, n = null, a = null) {
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
        let { loaderData: f, errors: y } = r,
          g =
            d.route.loader &&
            !f.hasOwnProperty(d.route.id) &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || g) {
          ((s = !0), l >= 0 ? (o = o.slice(0, l + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((u, d, f) => {
    let y,
      g = !1,
      R = null,
      P = null;
    r &&
      ((y = i && d.route.id ? i[d.route.id] : void 0),
      (R = d.route.errorElement || _o),
      s &&
        (l < 0 && f === 0
          ? (Mn(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (g = !0),
            (P = null))
          : l === f &&
            ((g = !0), (P = d.route.hydrateFallbackElement || null))));
    let w = t.concat(o.slice(0, f + 1)),
      b = () => {
        let S;
        return (
          y
            ? (S = R)
            : g
              ? (S = P)
              : d.route.Component
                ? (S = h.createElement(d.route.Component, null))
                : d.route.element
                  ? (S = d.route.element)
                  : (S = u),
          h.createElement(Oo, {
            match: d,
            routeContext: { outlet: u, matches: w, isDataRoute: r != null },
            children: S,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? h.createElement(Ao, {
          location: r.location,
          revalidation: r.revalidation,
          component: R,
          error: y,
          children: b(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
          unstable_onError: n,
        })
      : b();
  }, null);
}
function mr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ko(e) {
  let t = h.useContext(We);
  return (J(t, mr(e)), t);
}
function Nt(e) {
  let t = h.useContext(st);
  return (J(t, mr(e)), t);
}
function $o(e) {
  let t = h.useContext(Re);
  return (J(t, mr(e)), t);
}
function ct(e) {
  let t = $o(e),
    r = t.matches[t.matches.length - 1];
  return (
    J(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function Fo() {
  return ct('useRouteId');
}
function Io() {
  let { matches: e, loaderData: t } = Nt('useMatches');
  return h.useMemo(() => e.map((r) => cn(r, t)), [e, t]);
}
function jo() {
  let e = Nt('useLoaderData'),
    t = ct('useLoaderData');
  return e.loaderData[t];
}
function Uo() {
  let e = Nt('useActionData'),
    t = ct('useLoaderData');
  return e.actionData ? e.actionData[t] : void 0;
}
function Pn() {
  let e = h.useContext(fr),
    t = Nt('useRouteError'),
    r = ct('useRouteError');
  return e !== void 0 ? e : t.errors?.[r];
}
function Ho() {
  let { router: e } = ko('useNavigate'),
    t = ct('useNavigate'),
    r = h.useRef(!1);
  return (
    Ln(() => {
      r.current = !0;
    }),
    h.useCallback(
      async (a, o = {}) => {
        (ne(r.current, Cn),
          r.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : await e.navigate(a, { fromRouteId: t, ...o })));
      },
      [e, t]
    )
  );
}
var en = {};
function Mn(e, t, r) {
  !t && !en[e] && ((en[e] = !0), ne(!1, r));
}
var tn = {};
function nr(e, t) {
  !e && !tn[t] && ((tn[t] = !0), console.warn(t));
}
function bl(e) {
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
var Sl = ['HydrateFallback', 'hydrateFallbackElement'],
  zo = class {
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
function xl({ router: e, flushSync: t, unstable_onError: r }) {
  let [n, a] = h.useState(e.state),
    [o, i] = h.useState(),
    [s, l] = h.useState({ isTransitioning: !1 }),
    [u, d] = h.useState(),
    [f, y] = h.useState(),
    [g, R] = h.useState(),
    P = h.useRef(new Map()),
    w = h.useCallback(
      (C) => {
        a(
          (p) => (
            C.errors &&
              r &&
              Object.entries(C.errors).forEach(([_, z]) => {
                p.errors?.[_] !== z && r(z);
              }),
            C
          )
        );
      },
      [r]
    ),
    b = h.useCallback(
      (C, { deletedFetchers: p, flushSync: _, viewTransitionOpts: z }) => {
        (C.fetchers.forEach((K, ie) => {
          K.data !== void 0 && P.current.set(ie, K.data);
        }),
          p.forEach((K) => P.current.delete(K)),
          nr(
            _ === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          ));
        let H =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == 'function';
        if (
          (nr(
            z == null || H,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !z || !H)
        ) {
          t && _ ? t(() => w(C)) : h.startTransition(() => w(C));
          return;
        }
        if (t && _) {
          t(() => {
            (f && (u && u.resolve(), f.skipTransition()),
              l({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: z.currentLocation,
                nextLocation: z.nextLocation,
              }));
          });
          let K = e.window.document.startViewTransition(() => {
            t(() => w(C));
          });
          (K.finished.finally(() => {
            t(() => {
              (d(void 0), y(void 0), i(void 0), l({ isTransitioning: !1 }));
            });
          }),
            t(() => y(K)));
          return;
        }
        f
          ? (u && u.resolve(),
            f.skipTransition(),
            R({
              state: C,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }))
          : (i(C),
            l({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }));
      },
      [e.window, t, f, u, w]
    );
  (h.useLayoutEffect(() => e.subscribe(b), [e, b]),
    h.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new zo());
    }, [s]),
    h.useEffect(() => {
      if (u && o && e.window) {
        let C = o,
          p = u.promise,
          _ = e.window.document.startViewTransition(async () => {
            (h.startTransition(() => w(C)), await p);
          });
        (_.finished.finally(() => {
          (d(void 0), y(void 0), i(void 0), l({ isTransitioning: !1 }));
        }),
          y(_));
      }
    }, [o, u, e.window, w]),
    h.useEffect(() => {
      u && o && n.location.key === o.location.key && u.resolve();
    }, [u, f, n.location, o]),
    h.useEffect(() => {
      !s.isTransitioning &&
        g &&
        (i(g.state),
        l({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        R(void 0));
    }, [s.isTransitioning, g]));
  let S = h.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (C) => e.navigate(C),
        push: (C, p, _) =>
          e.navigate(C, {
            state: p,
            preventScrollReset: _?.preventScrollReset,
          }),
        replace: (C, p, _) =>
          e.navigate(C, {
            replace: !0,
            state: p,
            preventScrollReset: _?.preventScrollReset,
          }),
      }),
      [e]
    ),
    D = e.basename || '/',
    T = h.useMemo(
      () => ({
        router: e,
        navigator: S,
        static: !1,
        basename: D,
        unstable_onError: r,
      }),
      [e, S, D, r]
    );
  return h.createElement(
    h.Fragment,
    null,
    h.createElement(
      We.Provider,
      { value: T },
      h.createElement(
        st.Provider,
        { value: n },
        h.createElement(
          xn.Provider,
          { value: P.current },
          h.createElement(
            dr.Provider,
            { value: s },
            h.createElement(
              Yo,
              {
                basename: D,
                location: n.location,
                navigationType: n.historyAction,
                navigator: S,
              },
              h.createElement(Bo, {
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
var Bo = h.memo(Wo);
function Wo({ routes: e, future: t, state: r, unstable_onError: n }) {
  return To(e, void 0, r, n, t);
}
function Cl({ to: e, replace: t, state: r, relative: n }) {
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
    { pathname: i } = Le(),
    s = hr(),
    l = At(e, _t(o), i, n === 'path'),
    u = JSON.stringify(l);
  return (
    h.useEffect(() => {
      s(JSON.parse(u), { replace: t, state: r, relative: n });
    }, [s, u, n, t, r]),
    null
  );
}
function Ll(e) {
  return Po(e.context);
}
function Yo({
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
  typeof r == 'string' && (r = ke(r));
  let {
      pathname: l = '/',
      search: u = '',
      hash: d = '',
      state: f = null,
      key: y = 'default',
    } = r,
    g = h.useMemo(() => {
      let R = Ee(l, i);
      return R == null
        ? null
        : {
            location: { pathname: R, search: u, hash: d, state: f, key: y },
            navigationType: n,
          };
    }, [i, l, u, d, f, y, n]);
  return (
    ne(
      g != null,
      `<Router basename="${i}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    g == null
      ? null
      : h.createElement(
          be.Provider,
          { value: s },
          h.createElement(Ot.Provider, { children: t, value: g })
        )
  );
}
function Vo() {
  return { params: Mo(), loaderData: jo(), actionData: Uo(), matches: Io() };
}
function Pl(e) {
  return function () {
    const r = Vo();
    return h.createElement(e, r);
  };
}
var xt = 'get',
  Ct = 'application/x-www-form-urlencoded';
function kt(e) {
  return e != null && typeof e.tagName == 'string';
}
function Jo(e) {
  return kt(e) && e.tagName.toLowerCase() === 'button';
}
function Ko(e) {
  return kt(e) && e.tagName.toLowerCase() === 'form';
}
function Go(e) {
  return kt(e) && e.tagName.toLowerCase() === 'input';
}
function Xo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function qo(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Xo(e);
}
function ar(e = '') {
  return new URLSearchParams(
    typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
        }, [])
  );
}
function Qo(e, t) {
  let r = ar(e);
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
var wt = null;
function Zo() {
  if (wt === null)
    try {
      (new FormData(document.createElement('form'), 0), (wt = !1));
    } catch {
      wt = !0;
    }
  return wt;
}
var ei = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Kt(e) {
  return e != null && !ei.has(e)
    ? (ne(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ct}"`
      ),
      null)
    : e;
}
function ti(e, t) {
  let r, n, a, o, i;
  if (Ko(e)) {
    let s = e.getAttribute('action');
    ((n = s ? Ee(s, t) : null),
      (r = e.getAttribute('method') || xt),
      (a = Kt(e.getAttribute('enctype')) || Ct),
      (o = new FormData(e)));
  } else if (Jo(e) || (Go(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((n = l ? Ee(l, t) : null),
      (r = e.getAttribute('formmethod') || s.getAttribute('method') || xt),
      (a =
        Kt(e.getAttribute('formenctype')) ||
        Kt(s.getAttribute('enctype')) ||
        Ct),
      (o = new FormData(s, e)),
      !Zo())
    ) {
      let { name: u, type: d, value: f } = e;
      if (d === 'image') {
        let y = u ? `${u}.` : '';
        (o.append(`${y}x`, '0'), o.append(`${y}y`, '0'));
      } else u && o.append(u, f);
    }
  } else {
    if (kt(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((r = xt), (n = null), (a = Ct), (i = e));
  }
  return (
    o && a === 'text/plain' && ((i = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: o, body: i }
  );
}
var ri = -1,
  ni = -2,
  ai = -3,
  oi = -4,
  ii = -5,
  li = -6,
  si = -7,
  ui = 'B',
  ci = 'D',
  Tn = 'E',
  di = 'M',
  fi = 'N',
  Dn = 'P',
  hi = 'R',
  mi = 'S',
  pi = 'Y',
  yi = 'U',
  vi = 'Z',
  _n = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      });
    }
  };
function gi() {
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
var Gt =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function or(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == 'number') return rn.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e) r.push(a);
  return ((t.length = r.length), rn.call(this, n));
}
function rn(e) {
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
      case si:
        u(void 0);
        continue;
      case ii:
        u(null);
        continue;
      case ni:
        u(NaN);
        continue;
      case li:
        u(1 / 0);
        continue;
      case ai:
        u(-1 / 0);
        continue;
      case oi:
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
        const [f, y, g] = d;
        switch (f) {
          case ci:
            u((t[l] = new Date(y)));
            continue;
          case yi:
            u((t[l] = new URL(y)));
            continue;
          case ui:
            u((t[l] = BigInt(y)));
            continue;
          case hi:
            u((t[l] = new RegExp(y, g)));
            continue;
          case pi:
            u((t[l] = Symbol.for(y)));
            continue;
          case mi:
            const R = new Set();
            t[l] = R;
            for (let T = d.length - 1; T > 0; T--)
              i.push([
                d[T],
                (C) => {
                  R.add(C);
                },
              ]);
            u(R);
            continue;
          case di:
            const P = new Map();
            t[l] = P;
            for (let T = d.length - 2; T > 0; T -= 2) {
              const C = [];
              (i.push([
                d[T + 1],
                (p) => {
                  C[1] = p;
                },
              ]),
                i.push([
                  d[T],
                  (p) => {
                    C[0] = p;
                  },
                ]),
                s.push(() => {
                  P.set(C[0], C[1]);
                }));
            }
            u(P);
            continue;
          case fi:
            const w = Object.create(null);
            t[l] = w;
            for (const T of Object.keys(y).reverse()) {
              const C = [];
              (i.push([
                y[T],
                (p) => {
                  C[1] = p;
                },
              ]),
                i.push([
                  Number(T.slice(1)),
                  (p) => {
                    C[0] = p;
                  },
                ]),
                s.push(() => {
                  w[C[0]] = C[1];
                }));
            }
            u(w);
            continue;
          case Dn:
            if (t[y]) u((t[l] = t[y]));
            else {
              const T = new _n();
              ((n[y] = T), u((t[l] = T.promise)));
            }
            continue;
          case Tn:
            const [, b, S] = d;
            let D = S && Gt && Gt[S] ? new Gt[S](b) : new Error(b);
            ((t[l] = D), u(D));
            continue;
          case vi:
            u((t[l] = t[y]));
            continue;
          default:
            if (Array.isArray(a)) {
              const T = [],
                C = d.slice(1);
              for (let p = 0; p < C.length; p++) {
                const _ = C[p];
                i.push([
                  _,
                  (z) => {
                    T[p] = z;
                  },
                ]);
              }
              s.push(() => {
                for (const p of a) {
                  const _ = p(d[0], ...T);
                  if (_) {
                    u((t[l] = _.value));
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
        const f = [];
        t[l] = f;
        for (let y = 0; y < d.length; y++) {
          const g = d[y];
          g !== ri &&
            i.push([
              g,
              (R) => {
                f[y] = R;
              },
            ]);
        }
        u(f);
        continue;
      }
    else {
      const f = {};
      t[l] = f;
      for (const y of Object.keys(d).reverse()) {
        const g = [];
        (i.push([
          d[y],
          (R) => {
            g[1] = R;
          },
        ]),
          i.push([
            Number(y.slice(1)),
            (R) => {
              g[0] = R;
            },
          ]),
          s.push(() => {
            f[g[0]] = g[1];
          }));
      }
      u(f);
      continue;
    }
  }
  for (; s.length > 0; ) s.pop()();
  return o;
}
async function wi(e, t) {
  const { plugins: r } = t ?? {},
    n = new _n(),
    a = e.pipeThrough(gi()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: r },
    i = await Ei.call(o, a);
  let s = n.promise;
  return (
    i.done
      ? n.resolve()
      : (s = Ri.call(o, a)
          .then(n.resolve)
          .catch((l) => {
            for (const u of Object.values(o.deferred)) u.reject(l);
            n.reject(l);
          })),
    { done: s.then(() => a.closed), value: i.value }
  );
}
async function Ei(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: or.call(this, r) };
}
async function Ri(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case Dn: {
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
        const l = or.call(this, s);
        o.resolve(l);
        break;
      }
      case Tn: {
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
        const l = or.call(this, s);
        o.reject(l);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
async function bi(e) {
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
var Si = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  xi = /[&><\u2028\u2029]/g;
function Ci(e) {
  return e.replace(xi, (t) => Si[t]);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
var ir = Symbol('SingleFetchRedirect'),
  An = class extends Error {},
  Li = 202,
  Pi = new Set([100, 101, 204, 205]);
function Ml(e, t, r, n, a) {
  let o = Mi(
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
    ki,
    n,
    a
  );
  return async (i) => i.runClientMiddleware(o);
}
function Mi(e, t, r, n, a, o = () => !0) {
  return async (i) => {
    let { request: s, matches: l, fetcherKey: u } = i,
      d = e();
    if (s.method !== 'GET') return Ti(i, r, a);
    let f = l.some((y) => {
      let { hasLoader: g, hasClientLoader: R } = t(y);
      return y.unstable_shouldCallHandler() && g && !R;
    });
    return !n && !f
      ? Di(i, t, r, a)
      : u
        ? Oi(i, r, a)
        : _i(i, d, t, r, n, a, o);
  };
}
async function Ti(e, t, r) {
  let n = e.matches.find((i) => i.unstable_shouldCallHandler());
  he(n, 'No action match found');
  let a,
    o = await n.resolve(
      async (i) =>
        await i(async () => {
          let { data: l, status: u } = await t(e, r, [n.route.id]);
          return ((a = u), lt(l, n.route.id));
        })
    );
  return ur(o.result) || Be(o.result) || rr(o.result)
    ? { [n.route.id]: o }
    : { [n.route.id]: { type: o.type, result: za(o.result, a) } };
}
async function Di(e, t, r, n) {
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
                    let { data: f } = await r(e, n, [u]);
                    return lt(f, u);
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
async function _i(e, t, r, n, a, o, i = () => !0) {
  let s = new Set(),
    l = !1,
    u = e.matches.map(() => nn()),
    d = nn(),
    f = {},
    y = Promise.all(
      e.matches.map(async (R, P) =>
        R.resolve(async (w) => {
          u[P].resolve();
          let b = R.route.id,
            { hasLoader: S, hasClientLoader: D, hasShouldRevalidate: T } = r(R),
            C =
              !R.unstable_shouldRevalidateArgs ||
              R.unstable_shouldRevalidateArgs.actionStatus == null ||
              R.unstable_shouldRevalidateArgs.actionStatus < 400;
          if (!R.unstable_shouldCallHandler(C)) {
            l || (l = R.unstable_shouldRevalidateArgs != null && S && T === !0);
            return;
          }
          if (i(R) && D) {
            S && (l = !0);
            try {
              let _ = await w(async () => {
                let { data: z } = await n(e, o, [b]);
                return lt(z, b);
              });
              f[b] = { type: 'data', result: _ };
            } catch (_) {
              f[b] = { type: 'error', result: _ };
            }
            return;
          }
          S && s.add(b);
          try {
            let _ = await w(async () => {
              let z = await d.promise;
              return lt(z, b);
            });
            f[b] = { type: 'data', result: _ };
          } catch (_) {
            f[b] = { type: 'error', result: _ };
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
      let P = await n(e, o, R);
      d.resolve(P.data);
    } catch (P) {
      d.reject(P);
    }
  }
  return (await y, await Ai(d.promise, e.matches, s, f), f);
}
async function Ai(e, t, r, n) {
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
        n[i].result instanceof An && (n[i].result = a);
      });
  } catch {}
}
async function Oi(e, t, r) {
  let n = e.matches.find((i) => i.unstable_shouldCallHandler());
  he(n, 'No fetcher match found');
  let a = n.route.id,
    o = await n.resolve(async (i) =>
      i(async () => {
        let { data: s } = await t(e, r, [a]);
        return lt(s, a);
      })
    );
  return { [n.route.id]: o };
}
function Ni(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let r = [];
  for (let n of t) n && r.push(n);
  for (let n of r) e.searchParams.append('index', n);
  return e;
}
function On(e, t, r) {
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
async function ki(e, t, r) {
  let { request: n } = e,
    a = On(n.url, t, 'data');
  n.method === 'GET' &&
    ((a = Ni(a)), r && a.searchParams.set('_routes', r.join(',')));
  let o = await fetch(a, await bi(n));
  if (o.status === 404 && !o.headers.has('X-Remix-Response'))
    throw new ze(404, 'Not Found', !0);
  if (o.status === 204 && o.headers.has('X-Remix-Redirect'))
    return {
      status: Li,
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
  if (Pi.has(o.status)) {
    let i = {};
    return (
      r && n.method !== 'GET' && (i[r[0]] = { data: void 0 }),
      { status: o.status, data: { routes: i } }
    );
  }
  he(o.body, 'No response body to decode');
  try {
    let i = await $i(o.body, window),
      s;
    if (n.method === 'GET') {
      let l = i.value;
      ir in l ? (s = { redirect: l[ir] }) : (s = { routes: l });
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
function $i(e, t) {
  return wi(e, {
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
        if (r === 'SingleFetchRedirect') return { value: { [ir]: n[0] } };
        if (r === 'SingleFetchClassInstance') return { value: n[0] };
        if (r === 'SingleFetchFallback') return { value: void 0 };
      },
    ],
  });
}
function lt(e, t) {
  if ('redirect' in e) {
    let {
      redirect: n,
      revalidate: a,
      reload: o,
      replace: i,
      status: s,
    } = e.redirect;
    throw Ba(n, {
      status: s,
      headers: {
        ...(a ? { 'X-Remix-Revalidate': 'yes' } : null),
        ...(o ? { 'X-Remix-Reload-Document': 'yes' } : null),
        ...(i ? { 'X-Remix-Replace': 'yes' } : null),
      },
    });
  }
  let r = e.routes[t];
  if (r == null) throw new An(`No result found for routeId "${t}"`);
  if ('error' in r) throw r.error;
  if ('data' in r) return r.data;
  throw new Error(`Invalid response found for routeId "${t}"`);
}
function nn() {
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
async function Nn(e, t) {
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
function Fi(e, t, r) {
  let n = e
      .map((o) => {
        let i = t[o.route.id],
          s = r.routes[o.route.id];
        return [
          s && s.css ? s.css.map((l) => ({ rel: 'stylesheet', href: l })) : [],
          i?.links?.() || [],
        ];
      })
      .flat(2),
    a = yr(e, r);
  return In(n, a);
}
function kn(e) {
  return e.css ? e.css.map((t) => ({ rel: 'stylesheet', href: t })) : [];
}
async function Ii(e) {
  if (!e.css) return;
  let t = kn(e);
  await Promise.all(t.map(Fn));
}
async function $n(e, t) {
  if ((!e.css && !t.links) || !Bi()) return;
  let r = [];
  if (
    (e.css && r.push(...kn(e)), t.links && r.push(...t.links()), r.length === 0)
  )
    return;
  let n = [];
  for (let a of r)
    !pr(a) &&
      a.rel === 'stylesheet' &&
      n.push({ ...a, rel: 'preload', as: 'style' });
  await Promise.all(n.map(Fn));
}
async function Fn(e) {
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
function pr(e) {
  return e != null && typeof e.page == 'string';
}
function ji(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Ui(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let i = await Nn(o, r);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return In(
    n
      .flat(1)
      .filter(ji)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' }
      )
  );
}
function an(e, t, r, n, a, o) {
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
            let f = l.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: l.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof f == 'boolean') return f;
          }
          return !0;
        })
      : [];
}
function yr(e, t, { includeHydrateFallback: r } = {}) {
  return Hi(
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
function Hi(e) {
  return [...new Set(e)];
}
function zi(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function In(e, t) {
  let r = new Set(),
    n = new Set(t);
  return e.reduce((a, o) => {
    if (t && !pr(o) && o.as === 'script' && o.href && n.has(o.href)) return a;
    let s = JSON.stringify(zi(o));
    return (r.has(s) || (r.add(s), a.push({ key: s, link: o })), a);
  }, []);
}
var Et;
function Bi() {
  if (Et !== void 0) return Et;
  let e = document.createElement('link');
  return ((Et = e.relList.supports('preload')), (e = null), Et);
}
function Wi() {
  return h.createElement(
    lr,
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
function jn(e) {
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
function Yi(e, t, r) {
  let n = Un(t),
    a =
      t.HydrateFallback && (!r || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? Wi
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => h.createElement(Bn, { error: Pn() })
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
function Tl(e, t, r, n, a, o) {
  return vr(t, r, n, a, o, '', jn(t), e);
}
function Rt(e, t) {
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction)) {
    let n = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(n), new ze(400, 'Bad Request', new Error(n), !0));
  }
}
function Xt(e, t) {
  let r = e === 'clientAction' ? 'a' : 'an',
    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(n), new ze(405, 'Method Not Allowed', new Error(n), !0));
}
function vr(e, t, r, n, a, o = '', i = jn(e), s) {
  return (i[o] || []).map((l) => {
    let u = t[l.id];
    function d(S) {
      return (
        he(
          typeof S == 'function',
          'No single fetch function available for route handler'
        ),
        S()
      );
    }
    function f(S) {
      return l.hasLoader ? d(S) : Promise.resolve(null);
    }
    function y(S) {
      if (!l.hasAction) throw Xt('action', l.id);
      return d(S);
    }
    function g(S) {
      import(S);
    }
    function R(S) {
      (S.clientActionModule && g(S.clientActionModule),
        S.clientLoaderModule && g(S.clientLoaderModule));
    }
    async function P(S) {
      let D = t[l.id],
        T = D ? $n(l, D) : Promise.resolve();
      try {
        return S();
      } finally {
        await T;
      }
    }
    let w = { id: l.id, index: l.index, path: l.path };
    if (u) {
      Object.assign(w, {
        ...w,
        ...Yi(l, u, a),
        middleware: u.clientMiddleware,
        handle: u.handle,
        shouldRevalidate: on(w.path, u, l, n, s),
      });
      let S = r && r.loaderData && l.id in r.loaderData,
        D = S ? r?.loaderData?.[l.id] : void 0,
        T = r && r.errors && l.id in r.errors,
        C = T ? r?.errors?.[l.id] : void 0,
        p = s == null && (u.clientLoader?.hydrate === !0 || !l.hasLoader);
      ((w.loader = async ({ request: _, params: z, context: H }, K) => {
        try {
          return await P(
            async () => (
              he(u, 'No `routeModule` available for critical-route loader'),
              u.clientLoader
                ? u.clientLoader({
                    request: _,
                    params: z,
                    context: H,
                    async serverLoader() {
                      if ((Rt('loader', l), p)) {
                        if (S) return D;
                        if (T) throw C;
                      }
                      return f(K);
                    },
                  })
                : f(K)
            )
          );
        } finally {
          p = !1;
        }
      }),
        (w.loader.hydrate = Ki(l.id, u.clientLoader, l.hasLoader, a)),
        (w.action = ({ request: _, params: z, context: H }, K) =>
          P(async () => {
            if (
              (he(u, 'No `routeModule` available for critical-route action'),
              !u.clientAction)
            ) {
              if (a) throw Xt('clientAction', l.id);
              return y(K);
            }
            return u.clientAction({
              request: _,
              params: z,
              context: H,
              async serverAction() {
                return (Rt('action', l), y(K));
              },
            });
          })));
    } else {
      (l.hasClientLoader || (w.loader = (T, C) => P(() => f(C))),
        l.hasClientAction ||
          (w.action = (T, C) =>
            P(() => {
              if (a) throw Xt('clientAction', l.id);
              return y(C);
            })));
      let S;
      async function D() {
        return S
          ? await S
          : ((S = (async () => {
              (l.clientLoaderModule || l.clientActionModule) &&
                (await new Promise((C) => setTimeout(C, 0)));
              let T = Ji(l, t);
              return (R(l), await T);
            })()),
            await S);
      }
      w.lazy = {
        loader: l.hasClientLoader
          ? async () => {
              let { clientLoader: T } = l.clientLoaderModule
                ? await import(l.clientLoaderModule)
                : await D();
              return (
                he(T, 'No `clientLoader` export found'),
                (C, p) =>
                  T({
                    ...C,
                    async serverLoader() {
                      return (Rt('loader', l), f(p));
                    },
                  })
              );
            }
          : void 0,
        action: l.hasClientAction
          ? async () => {
              let T = l.clientActionModule ? import(l.clientActionModule) : D();
              R(l);
              let { clientAction: C } = await T;
              return (
                he(C, 'No `clientAction` export found'),
                (p, _) =>
                  C({
                    ...p,
                    async serverAction() {
                      return (Rt('action', l), y(_));
                    },
                  })
              );
            }
          : void 0,
        middleware: l.hasClientMiddleware
          ? async () => {
              let { clientMiddleware: T } = l.clientMiddlewareModule
                ? await import(l.clientMiddlewareModule)
                : await D();
              return (he(T, 'No `clientMiddleware` export found'), T);
            }
          : void 0,
        shouldRevalidate: async () => {
          let T = await D();
          return on(w.path, T, l, n, s);
        },
        handle: async () => (await D()).handle,
        Component: async () => (await D()).Component,
        ErrorBoundary: l.hasErrorBoundary
          ? async () => (await D()).ErrorBoundary
          : void 0,
      };
    }
    let b = vr(e, t, r, n, a, l.id, i, s);
    return (b.length > 0 && (w.children = b), w);
  });
}
function on(e, t, r, n, a) {
  if (a) return Vi(r.id, t.shouldRevalidate, a);
  if (!n && r.hasLoader && !r.hasClientLoader) {
    let o = e ? hn(e)[1].map((s) => s.paramName) : [];
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
function Vi(e, t, r) {
  let n = !1;
  return (a) =>
    n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e));
}
async function Ji(e, t) {
  let r = Nn(e, t),
    n = Ii(e),
    a = await r;
  return (
    await Promise.all([n, $n(e, a)]),
    {
      Component: Un(a),
      ErrorBoundary: a.ErrorBoundary,
      clientMiddleware: a.clientMiddleware,
      clientAction: a.clientAction,
      clientLoader: a.clientLoader,
      handle: a.handle,
      links: a.links,
      meta: a.meta,
      shouldRevalidate: a.shouldRevalidate,
    }
  );
}
function Un(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function Ki(e, t, r, n) {
  return (n && e !== 'root') || (t != null && (t.hydrate === !0 || r !== !0));
}
var Lt = new Set(),
  Gi = 1e3,
  Tt = new Set(),
  Xi = 7680;
function gr(e, t) {
  return e.mode === 'lazy' && t === !0;
}
function qi({ sri: e, ...t }, r) {
  let n = new Set(r.state.matches.map((s) => s.route.id)),
    a = r.state.location.pathname.split('/').filter(Boolean),
    o = ['/'];
  for (a.pop(); a.length > 0; ) (o.push(`/${a.join('/')}`), a.pop());
  o.forEach((s) => {
    let l = Me(r.routes, s, r.basename);
    l && l.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((s, l) => Object.assign(s, { [l]: t.routes[l] }), {});
  return { ...t, routes: i, sri: e ? !0 : void 0 };
}
function Dl(e, t, r, n, a, o) {
  if (gr(n, r))
    return async ({ path: i, patch: s, signal: l, fetcherKey: u }) => {
      Tt.has(i) ||
        (await Hn(
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
function _l(e, t, r, n, a, o) {
  h.useEffect(() => {
    if (!gr(a, n) || window.navigator?.connection?.saveData === !0) return;
    function i(d) {
      let f =
        d.tagName === 'FORM'
          ? d.getAttribute('action')
          : d.getAttribute('href');
      if (!f) return;
      let y =
        d.tagName === 'A'
          ? d.pathname
          : new URL(f, window.location.origin).pathname;
      Tt.has(y) || Lt.add(y);
    }
    async function s() {
      document
        .querySelectorAll('a[data-discover], form[data-discover]')
        .forEach(i);
      let d = Array.from(Lt.keys()).filter((f) =>
        Tt.has(f) ? (Lt.delete(f), !1) : !0
      );
      if (d.length !== 0)
        try {
          await Hn(
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
        } catch (f) {
          console.error('Failed to fetch manifest patches', f);
        }
    }
    let l = el(s, 100);
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
function Qi(e, t) {
  let r = e || '/__manifest';
  return t == null ? r : `${t}${r}`.replace(/\/+/g, '/');
}
var qt = 'react-router-manifest-version';
async function Hn(e, t, r, n, a, o, i, s, l, u) {
  const d = new URLSearchParams();
  (e.sort().forEach((w) => d.append('p', w)), d.set('version', r.version));
  let f = new URL(Qi(s, i), window.location.origin);
  if (((f.search = d.toString()), f.toString().length > Xi)) {
    Lt.clear();
    return;
  }
  let y;
  try {
    let w = await fetch(f, { signal: u });
    if (w.ok) {
      if (w.status === 204 && w.headers.has('X-Remix-Reload-Document')) {
        if (!t) {
          console.warn(
            'Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.'
          );
          return;
        }
        if (sessionStorage.getItem(qt) === r.version) {
          console.error(
            'Unable to discover routes due to manifest version mismatch.'
          );
          return;
        }
        (sessionStorage.setItem(qt, r.version),
          (window.location.href = t),
          console.warn('Detected manifest version mismatch, reloading...'),
          await new Promise(() => {}));
      } else if (w.status >= 400) throw new Error(await w.text());
    } else throw new Error(`${w.status} ${w.statusText}`);
    (sessionStorage.removeItem(qt), (y = await w.json()));
  } catch (w) {
    if (u?.aborted) return;
    throw w;
  }
  let g = new Set(Object.keys(r.routes)),
    R = Object.values(y).reduce(
      (w, b) => (b && !g.has(b.id) && (w[b.id] = b), w),
      {}
    );
  (Object.assign(r.routes, R), e.forEach((w) => Zi(w, Tt)));
  let P = new Set();
  (Object.values(R).forEach((w) => {
    w && (!w.parentId || !R[w.parentId]) && P.add(w.parentId);
  }),
    P.forEach((w) => l(w || null, vr(R, n, null, a, o, w))));
}
function Zi(e, t) {
  if (t.size >= Gi) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function el(e, t) {
  let r;
  return (...n) => {
    (window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t)));
  };
}
function wr() {
  let e = h.useContext(We);
  return (
    he(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function $t() {
  let e = h.useContext(st);
  return (
    he(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var Er = h.createContext(void 0);
Er.displayName = 'FrameworkContext';
function Xe() {
  let e = h.useContext(Er);
  return (
    he(e, 'You must render this element inside a <HydratedRouter> element'),
    e
  );
}
function tl(e, t) {
  let r = h.useContext(Er),
    [n, a] = h.useState(!1),
    [o, i] = h.useState(!1),
    {
      onFocus: s,
      onBlur: l,
      onMouseEnter: u,
      onMouseLeave: d,
      onTouchStart: f,
    } = t,
    y = h.useRef(null);
  (h.useEffect(() => {
    if ((e === 'render' && i(!0), e === 'viewport')) {
      let P = (b) => {
          b.forEach((S) => {
            i(S.isIntersecting);
          });
        },
        w = new IntersectionObserver(P, { threshold: 0.5 });
      return (
        y.current && w.observe(y.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]),
    h.useEffect(() => {
      if (n) {
        let P = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(P);
        };
      }
    }, [n]));
  let g = () => {
      a(!0);
    },
    R = () => {
      (a(!1), i(!1));
    };
  return r
    ? e !== 'intent'
      ? [o, y, {}]
      : [
          o,
          y,
          {
            onFocus: nt(s, g),
            onBlur: nt(l, R),
            onMouseEnter: nt(u, g),
            onMouseLeave: nt(d, R),
            onTouchStart: nt(f, g),
          },
        ]
    : [!1, y, {}];
}
function nt(e, t) {
  return (r) => {
    (e && e(r), r.defaultPrevented || t(r));
  };
}
function Rr(e, t, r) {
  if (r && !Dt) return [e[0]];
  if (t) {
    let n = e.findIndex((a) => t[a.route.id] !== void 0);
    return e.slice(0, n + 1);
  }
  return e;
}
var ln = 'data-react-router-critical-css';
function Al({ nonce: e }) {
  let { isSpaMode: t, manifest: r, routeModules: n, criticalCss: a } = Xe(),
    { errors: o, matches: i } = $t(),
    s = Rr(i, o, t),
    l = h.useMemo(() => Fi(s, n, r), [s, n, r]);
  return h.createElement(
    h.Fragment,
    null,
    typeof a == 'string'
      ? h.createElement('style', {
          [ln]: '',
          dangerouslySetInnerHTML: { __html: a },
        })
      : null,
    typeof a == 'object'
      ? h.createElement('link', {
          [ln]: '',
          rel: 'stylesheet',
          href: a.href,
          nonce: e,
        })
      : null,
    l.map(({ key: u, link: d }) =>
      pr(d)
        ? h.createElement(zn, { key: u, nonce: e, ...d })
        : h.createElement('link', { key: u, nonce: e, ...d })
    )
  );
}
function zn({ page: e, ...t }) {
  let { router: r } = wr(),
    n = h.useMemo(() => Me(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? h.createElement(nl, { page: e, matches: n, ...t }) : null;
}
function rl(e) {
  let { manifest: t, routeModules: r } = Xe(),
    [n, a] = h.useState([]);
  return (
    h.useEffect(() => {
      let o = !1;
      return (
        Ui(e, t, r).then((i) => {
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
function nl({ page: e, matches: t, ...r }) {
  let n = Le(),
    { manifest: a, routeModules: o } = Xe(),
    { basename: i } = wr(),
    { loaderData: s, matches: l } = $t(),
    u = h.useMemo(() => an(e, t, l, a, n, 'data'), [e, t, l, a, n]),
    d = h.useMemo(() => an(e, t, l, a, n, 'assets'), [e, t, l, a, n]),
    f = h.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let R = new Set(),
        P = !1;
      if (
        (t.forEach((b) => {
          let S = a.routes[b.route.id];
          !S ||
            !S.hasLoader ||
            ((!u.some((D) => D.route.id === b.route.id) &&
              b.route.id in s &&
              o[b.route.id]?.shouldRevalidate) ||
            S.hasClientLoader
              ? (P = !0)
              : R.add(b.route.id));
        }),
        R.size === 0)
      )
        return [];
      let w = On(e, i, 'data');
      return (
        P &&
          R.size > 0 &&
          w.searchParams.set(
            '_routes',
            t
              .filter((b) => R.has(b.route.id))
              .map((b) => b.route.id)
              .join(',')
          ),
        [w.pathname + w.search]
      );
    }, [i, s, n, a, u, t, e, o]),
    y = h.useMemo(() => yr(d, a), [d, a]),
    g = rl(d);
  return h.createElement(
    h.Fragment,
    null,
    f.map((R) =>
      h.createElement('link', {
        key: R,
        rel: 'prefetch',
        as: 'fetch',
        href: R,
        ...r,
      })
    ),
    y.map((R) =>
      h.createElement('link', { key: R, rel: 'modulepreload', href: R, ...r })
    ),
    g.map(({ key: R, link: P }) =>
      h.createElement('link', { key: R, nonce: r.nonce, ...P })
    )
  );
}
function Ol() {
  let { isSpaMode: e, routeModules: t } = Xe(),
    { errors: r, matches: n, loaderData: a } = $t(),
    o = Le(),
    i = Rr(n, r, e),
    s = null;
  r && (s = r[i[i.length - 1].route.id]);
  let l = [],
    u = null,
    d = [];
  for (let f = 0; f < i.length; f++) {
    let y = i[f],
      g = y.route.id,
      R = a[g],
      P = y.params,
      w = t[g],
      b = [],
      S = {
        id: g,
        data: R,
        loaderData: R,
        meta: [],
        params: y.params,
        pathname: y.pathname,
        handle: y.route.handle,
        error: s,
      };
    if (
      ((d[f] = S),
      w?.meta
        ? (b =
            typeof w.meta == 'function'
              ? w.meta({
                  data: R,
                  loaderData: R,
                  params: P,
                  location: o,
                  matches: d,
                  error: s,
                })
              : Array.isArray(w.meta)
                ? [...w.meta]
                : w.meta)
        : u && (b = [...u]),
      (b = b || []),
      !Array.isArray(b))
    )
      throw new Error(
        'The route at ' +
          y.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    ((S.meta = b), (d[f] = S), (l = [...b]), (u = l));
  }
  return h.createElement(
    h.Fragment,
    null,
    l.flat().map((f) => {
      if (!f) return null;
      if ('tagName' in f) {
        let { tagName: y, ...g } = f;
        if (!al(y))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${y}. Expected either 'link' or 'meta'`
            ),
            null
          );
        let R = y;
        return h.createElement(R, { key: JSON.stringify(g), ...g });
      }
      if ('title' in f)
        return h.createElement('title', { key: 'title' }, String(f.title));
      if (
        ('charset' in f &&
          (f.charSet ?? (f.charSet = f.charset), delete f.charset),
        'charSet' in f && f.charSet != null)
      )
        return typeof f.charSet == 'string'
          ? h.createElement('meta', { key: 'charSet', charSet: f.charSet })
          : null;
      if ('script:ld+json' in f)
        try {
          let y = JSON.stringify(f['script:ld+json']);
          return h.createElement('script', {
            key: `script:ld+json:${y}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: Ci(y) },
          });
        } catch {
          return null;
        }
      return h.createElement('meta', { key: JSON.stringify(f), ...f });
    })
  );
}
function al(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
var Dt = !1;
function ol() {
  Dt = !0;
}
function il(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      isSpaMode: n,
      renderMeta: a,
      routeDiscovery: o,
      ssr: i,
    } = Xe(),
    { router: s, static: l, staticContext: u } = wr(),
    { matches: d } = $t(),
    f = bo(),
    y = gr(o, i);
  a && (a.didRenderScripts = !0);
  let g = Rr(d, null, n);
  h.useEffect(() => {
    ol();
  }, []);
  let R = h.useMemo(() => {
      if (f) return null;
      let S = u
          ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : ' ',
        D = l
          ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${y ? '' : `import ${JSON.stringify(t.url)}`};
${g.map((T, C) => {
  let p = `route${C}`,
    _ = t.routes[T.route.id];
  he(_, `Route ${T.route.id} not found in manifest`);
  let {
      clientActionModule: z,
      clientLoaderModule: H,
      clientMiddlewareModule: K,
      hydrateFallbackModule: ie,
      module: me,
    } = _,
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
  ${y ? `window.__reactRouterManifest = ${JSON.stringify(qi(t, s), null, 2)};` : ''}
  window.__reactRouterRouteModules = {${g.map((T, C) => `${JSON.stringify(T.route.id)}:route${C}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
          : ' ';
      return h.createElement(
        h.Fragment,
        null,
        h.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: { __html: S },
          type: void 0,
        }),
        h.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: { __html: D },
          type: 'module',
          async: !0,
        })
      );
    }, []),
    P =
      Dt || f
        ? []
        : ll(t.entry.imports.concat(yr(g, t, { includeHydrateFallback: !0 }))),
    w = typeof t.sri == 'object' ? t.sri : {};
  return (
    nr(
      !f,
      'The <Scripts /> element is a no-op when using RSC and can be safely removed.'
    ),
    Dt || f
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
                  __html: JSON.stringify({ integrity: w }),
                },
              })
            : null,
          y
            ? null
            : h.createElement('link', {
                rel: 'modulepreload',
                href: t.url,
                crossOrigin: e.crossOrigin,
                integrity: w[t.url],
                suppressHydrationWarning: !0,
              }),
          h.createElement('link', {
            rel: 'modulepreload',
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
            integrity: w[t.entry.module],
            suppressHydrationWarning: !0,
          }),
          P.map((b) =>
            h.createElement('link', {
              key: b,
              rel: 'modulepreload',
              href: b,
              crossOrigin: e.crossOrigin,
              integrity: w[b],
              suppressHydrationWarning: !0,
            })
          ),
          R
        )
  );
}
function ll(e) {
  return [...new Set(e)];
}
function sl(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var Nl = class extends h.Component {
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
      ? h.createElement(Bn, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function Bn({ error: e, isOutsideRemixApp: t }) {
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
      lr,
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
    lr,
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
function lr({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
  let { routeModules: a } = Xe();
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
            t ? h.createElement(il, null) : null
          )
        )
      );
}
var Wn =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Wn && (window.__reactRouterVersion = '7.9.1');
} catch {}
var Yn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vn = h.forwardRef(function (
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
      viewTransition: f,
      ...y
    },
    g
  ) {
    let { basename: R } = h.useContext(be),
      P = typeof u == 'string' && Yn.test(u),
      w,
      b = !1;
    if (typeof u == 'string' && P && ((w = u), Wn))
      try {
        let H = new URL(window.location.href),
          K = u.startsWith('//') ? new URL(H.protocol + u) : new URL(u),
          ie = Ee(K.pathname, R);
        K.origin === H.origin && ie != null
          ? (u = ie + K.search + K.hash)
          : (b = !0);
      } catch {
        ne(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let S = xo(u, { relative: a }),
      [D, T, C] = tl(n, y),
      p = fl(u, {
        replace: i,
        state: s,
        target: l,
        preventScrollReset: d,
        relative: a,
        viewTransition: f,
      });
    function _(H) {
      (t && t(H), H.defaultPrevented || p(H));
    }
    let z = h.createElement('a', {
      ...y,
      ...C,
      href: w || S,
      onClick: b || o ? t : _,
      ref: sl(g, T),
      target: l,
      'data-discover': !P && r === 'render' ? 'true' : void 0,
    });
    return D && !P
      ? h.createElement(h.Fragment, null, z, h.createElement(zn, { page: S }))
      : z;
  });
Vn.displayName = 'Link';
var ul = h.forwardRef(function (
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
  let f = ut(i, { relative: u.relative }),
    y = Le(),
    g = h.useContext(st),
    { navigator: R, basename: P } = h.useContext(be),
    w = g != null && vl(f) && s === !0,
    b = R.encodeLocation ? R.encodeLocation(f).pathname : f.pathname,
    S = y.pathname,
    D =
      g && g.navigation && g.navigation.location
        ? g.navigation.location.pathname
        : null;
  (r ||
    ((S = S.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (b = b.toLowerCase())),
    D && P && (D = Ee(D, P) || D));
  const T = b !== '/' && b.endsWith('/') ? b.length - 1 : b.length;
  let C = S === b || (!a && S.startsWith(b) && S.charAt(T) === '/'),
    p =
      D != null &&
      (D === b || (!a && D.startsWith(b) && D.charAt(b.length) === '/')),
    _ = { isActive: C, isPending: p, isTransitioning: w },
    z = C ? t : void 0,
    H;
  typeof n == 'function'
    ? (H = n(_))
    : (H = [
        n,
        C ? 'active' : null,
        p ? 'pending' : null,
        w ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let K = typeof o == 'function' ? o(_) : o;
  return h.createElement(
    Vn,
    {
      ...u,
      'aria-current': z,
      className: H,
      ref: d,
      style: K,
      to: i,
      viewTransition: s,
    },
    typeof l == 'function' ? l(_) : l
  );
});
ul.displayName = 'NavLink';
var cl = h.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: o,
      method: i = xt,
      action: s,
      onSubmit: l,
      relative: u,
      preventScrollReset: d,
      viewTransition: f,
      ...y
    },
    g
  ) => {
    let R = pl(),
      P = yl(s, { relative: u }),
      w = i.toLowerCase() === 'get' ? 'get' : 'post',
      b = typeof s == 'string' && Yn.test(s),
      S = (D) => {
        if ((l && l(D), D.defaultPrevented)) return;
        D.preventDefault();
        let T = D.nativeEvent.submitter,
          C = T?.getAttribute('formmethod') || i;
        R(T || D.currentTarget, {
          fetcherKey: t,
          method: C,
          navigate: r,
          replace: a,
          state: o,
          relative: u,
          preventScrollReset: d,
          viewTransition: f,
        });
      };
    return h.createElement('form', {
      ref: g,
      method: w,
      action: P,
      onSubmit: n ? l : S,
      ...y,
      'data-discover': !b && e === 'render' ? 'true' : void 0,
    });
  }
);
cl.displayName = 'Form';
function dl(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jn(e) {
  let t = h.useContext(We);
  return (J(t, dl(e)), t);
}
function fl(
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
  let s = hr(),
    l = Le(),
    u = ut(e, { relative: o });
  return h.useCallback(
    (d) => {
      if (qo(d, t)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Ne(l) === Ne(u);
        s(e, {
          replace: f,
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
function kl(e) {
  ne(
    typeof URLSearchParams < 'u',
    'You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.'
  );
  let t = h.useRef(ar(e)),
    r = h.useRef(!1),
    n = Le(),
    a = h.useMemo(() => Qo(n.search, r.current ? null : t.current), [n.search]),
    o = hr(),
    i = h.useCallback(
      (s, l) => {
        const u = ar(typeof s == 'function' ? s(new URLSearchParams(a)) : s);
        ((r.current = !0), o('?' + u, l));
      },
      [o, a]
    );
  return [a, i];
}
var hl = 0,
  ml = () => `__${String(++hl)}__`;
function pl() {
  let { router: e } = Jn('useSubmit'),
    { basename: t } = h.useContext(be),
    r = Fo();
  return h.useCallback(
    async (n, a = {}) => {
      let { action: o, method: i, encType: s, formData: l, body: u } = ti(n, t);
      if (a.navigate === !1) {
        let d = a.fetcherKey || ml();
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
function yl(e, { relative: t } = {}) {
  let { basename: r } = h.useContext(be),
    n = h.useContext(Re);
  J(n, 'useFormAction must be used inside a RouteContext');
  let [a] = n.matches.slice(-1),
    o = { ...ut(e || '.', { relative: t }) },
    i = Le();
  if (e == null) {
    o.search = i.search;
    let s = new URLSearchParams(o.search),
      l = s.getAll('index');
    if (l.some((d) => d === '')) {
      (s.delete('index'),
        l.filter((f) => f).forEach((f) => s.append('index', f)));
      let d = s.toString();
      o.search = d ? `?${d}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Ce([r, o.pathname])),
    Ne(o)
  );
}
function vl(e, { relative: t } = {}) {
  let r = h.useContext(dr);
  J(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Jn('useViewTransitionState'),
    a = ut(e, { relative: t });
  if (!r.isTransitioning) return !1;
  let o = Ee(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    i = Ee(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Pt(a.pathname, i) != null || Pt(a.pathname, o) != null;
}
export {
  Sl as A,
  Al as B,
  kl as C,
  ze as E,
  Er as F,
  Vn as L,
  Ol as M,
  Cl as N,
  Ll as O,
  ma as R,
  il as S,
  ul as a,
  Mo as b,
  Le as c,
  wl as d,
  ha as e,
  Pi as f,
  ua as g,
  J as h,
  Be as i,
  gl as j,
  _l as k,
  Nl as l,
  Me as m,
  xl as n,
  $i as o,
  vr as p,
  Rl as q,
  h as r,
  Ki as s,
  Dl as t,
  hr as u,
  Ml as v,
  Pl as w,
  El as x,
  Tl as y,
  bl as z,
};
