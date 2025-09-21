import { R as j, r as H, j as b } from './chunk-B7RQU5TL-BAM8tVsL.js';
import { t as x } from './i18next-Bhq85MQn.js';
import {
  O as De,
  P as mt,
  C as Se,
  a as _t,
  X as gt,
  T as Te,
  D as Ce,
  R as vt,
} from './x-u4spGL1k.js';
import { a as q, B as zt } from './button-DEmol27v.js';
import { u as wt } from './useTranslation-CbMF285u.js';
var Re = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  he = j.createContext && j.createContext(Re),
  bt = ['attr', 'size', 'title'];
function Zt(e, t) {
  if (e == null) return {};
  var n = kt(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (o = 0; o < c.length; o++)
      ((r = c[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function kt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    M.apply(this, arguments)
  );
}
function me(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? me(Object(n), !0).forEach(function (r) {
          $t(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : me(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function $t(e, t, n) {
  return (
    (t = yt(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yt(e) {
  var t = Ot(e, 'string');
  return typeof t == 'symbol' ? t : t + '';
}
function Ot(e, t) {
  if (typeof e != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ue(e) {
  return (
    e &&
    e.map((t, n) => j.createElement(t.tag, B({ key: n }, t.attr), Ue(t.child)))
  );
}
function ie(e) {
  return (t) => j.createElement(Et, M({ attr: B({}, e.attr) }, t), Ue(e.child));
}
function Et(e) {
  var t = (n) => {
    var { attr: r, size: o, title: c } = e,
      i = Zt(e, bt),
      a = o || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      j.createElement(
        'svg',
        M(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: u,
            style: B(B({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        c && j.createElement('title', null, c),
        e.children
      )
    );
  };
  return he !== void 0
    ? j.createElement(he.Consumer, null, (n) => t(n))
    : t(Re);
}
function xi(e) {
  return ie({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
        },
        child: [],
      },
    ],
  })(e);
}
function Di(e) {
  return ie({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z',
        },
        child: [],
      },
    ],
  })(e);
}
function Si(e) {
  return ie({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z',
        },
        child: [],
      },
    ],
  })(e);
}
function s(e, t, n) {
  function r(a, u) {
    var l;
    (Object.defineProperty(a, '_zod', { value: a._zod ?? {}, enumerable: !1 }),
      (l = a._zod).traits ?? (l.traits = new Set()),
      a._zod.traits.add(e),
      t(a, u));
    for (const f in i.prototype)
      f in a || Object.defineProperty(a, f, { value: i.prototype[f].bind(a) });
    ((a._zod.constr = i), (a._zod.def = u));
  }
  const o = n?.Parent ?? Object;
  class c extends o {}
  Object.defineProperty(c, 'name', { value: e });
  function i(a) {
    var u;
    const l = n?.Parent ? new c() : this;
    (r(l, a), (u = l._zod).deferred ?? (u.deferred = []));
    for (const f of l._zod.deferred) f();
    return l;
  }
  return (
    Object.defineProperty(i, 'init', { value: r }),
    Object.defineProperty(i, Symbol.hasInstance, {
      value: (a) =>
        n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e),
    }),
    Object.defineProperty(i, 'name', { value: e }),
    i
  );
}
class S extends Error {
  constructor() {
    super(
      'Encountered Promise during synchronous parse. Use .parseAsync() instead.'
    );
  }
}
class Ne extends Error {
  constructor(t) {
    (super(`Encountered unidirectional transform during encode: ${t}`),
      (this.name = 'ZodEncodeError'));
  }
}
const Fe = {};
function I(e) {
  return Fe;
}
function Pt(e) {
  const t = Object.values(e).filter((r) => typeof r == 'number');
  return Object.entries(e)
    .filter(([r, o]) => t.indexOf(+r) === -1)
    .map(([r, o]) => o);
}
function te(e, t) {
  return typeof t == 'bigint' ? t.toString() : t;
}
function ce(e) {
  return {
    get value() {
      {
        const t = e();
        return (Object.defineProperty(this, 'value', { value: t }), t);
      }
    },
  };
}
function se(e) {
  return e == null;
}
function ae(e) {
  const t = e.startsWith('^') ? 1 : 0,
    n = e.endsWith('$') ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const _e = Symbol('evaluating');
function p(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== _e) return (r === void 0 && ((r = _e), (r = n())), r);
    },
    set(o) {
      Object.defineProperty(e, t, { value: o });
    },
    configurable: !0,
  });
}
function jt(e) {
  return Object.create(
    Object.getPrototypeOf(e),
    Object.getOwnPropertyDescriptors(e)
  );
}
function E(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function T(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function ge(e) {
  return JSON.stringify(e);
}
const Le =
  'captureStackTrace' in Error ? Error.captureStackTrace : (...e) => {};
function J(e) {
  return typeof e == 'object' && e !== null && !Array.isArray(e);
}
const It = ce(() => {
  if (typeof navigator < 'u' && navigator?.userAgent?.includes('Cloudflare'))
    return !1;
  try {
    const e = Function;
    return (new e(''), !0);
  } catch {
    return !1;
  }
});
function R(e) {
  if (J(e) === !1) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    J(n) === !1 ||
    Object.prototype.hasOwnProperty.call(n, 'isPrototypeOf') === !1
  );
}
function We(e) {
  return R(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const At = new Set(['string', 'number', 'symbol']);
function X(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function P(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function d(e) {
  const t = e;
  if (!t) return {};
  if (typeof t == 'string') return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error('Cannot specify both `message` and `error` params');
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == 'string' ? { ...t, error: () => t.error } : t
  );
}
function xt(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === 'optional' && e[t]._zod.optout === 'optional'
  );
}
function Dt(e, t) {
  const n = e._zod.def,
    r = T(e._zod.def, {
      get shape() {
        const o = {};
        for (const c in t) {
          if (!(c in n.shape)) throw new Error(`Unrecognized key: "${c}"`);
          t[c] && (o[c] = n.shape[c]);
        }
        return (E(this, 'shape', o), o);
      },
      checks: [],
    });
  return P(e, r);
}
function St(e, t) {
  const n = e._zod.def,
    r = T(e._zod.def, {
      get shape() {
        const o = { ...e._zod.def.shape };
        for (const c in t) {
          if (!(c in n.shape)) throw new Error(`Unrecognized key: "${c}"`);
          t[c] && delete o[c];
        }
        return (E(this, 'shape', o), o);
      },
      checks: [],
    });
  return P(e, r);
}
function Tt(e, t) {
  if (!R(t))
    throw new Error('Invalid input to extend: expected a plain object');
  const n = e._zod.def.checks;
  if (n && n.length > 0)
    throw new Error(
      'Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.'
    );
  const o = T(e._zod.def, {
    get shape() {
      const c = { ...e._zod.def.shape, ...t };
      return (E(this, 'shape', c), c);
    },
    checks: [],
  });
  return P(e, o);
}
function Ct(e, t) {
  if (!R(t))
    throw new Error('Invalid input to safeExtend: expected a plain object');
  const n = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return (E(this, 'shape', r), r);
    },
    checks: e._zod.def.checks,
  };
  return P(e, n);
}
function Rt(e, t) {
  const n = T(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return (E(this, 'shape', r), r);
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: [],
  });
  return P(e, n);
}
function Ut(e, t, n) {
  const r = T(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape,
        c = { ...o };
      if (n)
        for (const i in n) {
          if (!(i in o)) throw new Error(`Unrecognized key: "${i}"`);
          n[i] &&
            (c[i] = e ? new e({ type: 'optional', innerType: o[i] }) : o[i]);
        }
      else
        for (const i in o)
          c[i] = e ? new e({ type: 'optional', innerType: o[i] }) : o[i];
      return (E(this, 'shape', c), c);
    },
    checks: [],
  });
  return P(t, r);
}
function Nt(e, t, n) {
  const r = T(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape,
        c = { ...o };
      if (n)
        for (const i in n) {
          if (!(i in c)) throw new Error(`Unrecognized key: "${i}"`);
          n[i] && (c[i] = new e({ type: 'nonoptional', innerType: o[i] }));
        }
      else
        for (const i in o)
          c[i] = new e({ type: 'nonoptional', innerType: o[i] });
      return (E(this, 'shape', c), c);
    },
    checks: [],
  });
  return P(t, r);
}
function D(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function Ve(e, t) {
  return t.map((n) => {
    var r;
    return ((r = n).path ?? (r.path = []), n.path.unshift(e), n);
  });
}
function F(e) {
  return typeof e == 'string' ? e : e?.message;
}
function A(e, t, n) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o =
      F(e.inst?._zod.def?.error?.(e)) ??
      F(t?.error?.(e)) ??
      F(n.customError?.(e)) ??
      F(n.localeError?.(e)) ??
      'Invalid input';
    r.message = o;
  }
  return (
    delete r.inst,
    delete r.continue,
    t?.reportInput || delete r.input,
    r
  );
}
function ue(e) {
  return Array.isArray(e)
    ? 'array'
    : typeof e == 'string'
      ? 'string'
      : 'unknown';
}
function U(...e) {
  const [t, n, r] = e;
  return typeof t == 'string'
    ? { message: t, code: 'custom', input: n, inst: r }
    : { ...t };
}
const Me = (e, t) => {
    ((e.name = '$ZodError'),
      Object.defineProperty(e, '_zod', { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, 'issues', { value: t, enumerable: !1 }),
      (e.message = JSON.stringify(t, te, 2)),
      Object.defineProperty(e, 'toString', {
        value: () => e.message,
        enumerable: !1,
      }));
  },
  Be = s('$ZodError', Me),
  Je = s('$ZodError', Me, { Parent: Error });
function Ft(e, t = (n) => n.message) {
  const n = {},
    r = [];
  for (const o of e.issues)
    o.path.length > 0
      ? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o)))
      : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Lt(e, t) {
  const n =
      t ||
      function (c) {
        return c.message;
      },
    r = { _errors: [] },
    o = (c) => {
      for (const i of c.issues)
        if (i.code === 'invalid_union' && i.errors.length)
          i.errors.map((a) => o({ issues: a }));
        else if (i.code === 'invalid_key') o({ issues: i.issues });
        else if (i.code === 'invalid_element') o({ issues: i.issues });
        else if (i.path.length === 0) r._errors.push(n(i));
        else {
          let a = r,
            u = 0;
          for (; u < i.path.length; ) {
            const l = i.path[u];
            (u === i.path.length - 1
              ? ((a[l] = a[l] || { _errors: [] }), a[l]._errors.push(n(i)))
              : (a[l] = a[l] || { _errors: [] }),
              (a = a[l]),
              u++);
          }
        }
    };
  return (o(e), r);
}
const le = (e) => (t, n, r, o) => {
    const c = r ? Object.assign(r, { async: !1 }) : { async: !1 },
      i = t._zod.run({ value: n, issues: [] }, c);
    if (i instanceof Promise) throw new S();
    if (i.issues.length) {
      const a = new (o?.Err ?? e)(i.issues.map((u) => A(u, c, I())));
      throw (Le(a, o?.callee), a);
    }
    return i.value;
  },
  de = (e) => async (t, n, r, o) => {
    const c = r ? Object.assign(r, { async: !0 }) : { async: !0 };
    let i = t._zod.run({ value: n, issues: [] }, c);
    if ((i instanceof Promise && (i = await i), i.issues.length)) {
      const a = new (o?.Err ?? e)(i.issues.map((u) => A(u, c, I())));
      throw (Le(a, o?.callee), a);
    }
    return i.value;
  },
  Y = (e) => (t, n, r) => {
    const o = r ? { ...r, async: !1 } : { async: !1 },
      c = t._zod.run({ value: n, issues: [] }, o);
    if (c instanceof Promise) throw new S();
    return c.issues.length
      ? { success: !1, error: new (e ?? Be)(c.issues.map((i) => A(i, o, I()))) }
      : { success: !0, data: c.value };
  },
  Wt = Y(Je),
  Q = (e) => async (t, n, r) => {
    const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
    let c = t._zod.run({ value: n, issues: [] }, o);
    return (
      c instanceof Promise && (c = await c),
      c.issues.length
        ? { success: !1, error: new e(c.issues.map((i) => A(i, o, I()))) }
        : { success: !0, data: c.value }
    );
  },
  Vt = Q(Je),
  Mt = (e) => (t, n, r) => {
    const o = r
      ? Object.assign(r, { direction: 'backward' })
      : { direction: 'backward' };
    return le(e)(t, n, o);
  },
  Bt = (e) => (t, n, r) => le(e)(t, n, r),
  Jt = (e) => async (t, n, r) => {
    const o = r
      ? Object.assign(r, { direction: 'backward' })
      : { direction: 'backward' };
    return de(e)(t, n, o);
  },
  Kt = (e) => async (t, n, r) => de(e)(t, n, r),
  Gt = (e) => (t, n, r) => {
    const o = r
      ? Object.assign(r, { direction: 'backward' })
      : { direction: 'backward' };
    return Y(e)(t, n, o);
  },
  Ht = (e) => (t, n, r) => Y(e)(t, n, r),
  qt = (e) => async (t, n, r) => {
    const o = r
      ? Object.assign(r, { direction: 'backward' })
      : { direction: 'backward' };
    return Q(e)(t, n, o);
  },
  Xt = (e) => async (t, n, r) => Q(e)(t, n, r),
  Yt = /^[cC][^\s-]{8,}$/,
  Qt = /^[0-9a-z]+$/,
  en = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  tn = /^[0-9a-vA-V]{20}$/,
  nn = /^[A-Za-z0-9]{27}$/,
  rn = /^[a-zA-Z0-9_-]{21}$/,
  on =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  cn =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  ve = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  sn =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  an = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
function un() {
  return new RegExp(an, 'u');
}
const ln =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  dn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  fn =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  pn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  hn =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Ke = /^[A-Za-z0-9_-]*$/,
  mn =
    /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
  _n = /^\+(?:[0-9]){6,14}[0-9]$/,
  Ge =
    '(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))',
  gn = new RegExp(`^${Ge}$`);
function He(e) {
  const t = '(?:[01]\\d|2[0-3]):[0-5]\\d';
  return typeof e.precision == 'number'
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function vn(e) {
  return new RegExp(`^${He(e)}$`);
}
function zn(e) {
  const t = He({ precision: e.precision }),
    n = ['Z'];
  (e.local && n.push(''),
    e.offset && n.push('([+-](?:[01]\\d|2[0-3]):[0-5]\\d)'));
  const r = `${t}(?:${n.join('|')})`;
  return new RegExp(`^${Ge}T(?:${r})$`);
}
const wn = (e) => {
    const t = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ''}}`
      : '[\\s\\S]*';
    return new RegExp(`^${t}$`);
  },
  bn = /^[^A-Z]*$/,
  Zn = /^[^a-z]*$/,
  y = s('$ZodCheck', (e, t) => {
    var n;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []));
  }),
  kn = s('$ZodCheckMaxLength', (e, t) => {
    var n;
    (y.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (r) => {
          const o = r.value;
          return !se(o) && o.length !== void 0;
        }),
      e._zod.onattach.push((r) => {
        const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < o && (r._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (r) => {
        const o = r.value;
        if (o.length <= t.maximum) return;
        const i = ue(o);
        r.issues.push({
          origin: i,
          code: 'too_big',
          maximum: t.maximum,
          inclusive: !0,
          input: o,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  $n = s('$ZodCheckMinLength', (e, t) => {
    var n;
    (y.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (r) => {
          const o = r.value;
          return !se(o) && o.length !== void 0;
        }),
      e._zod.onattach.push((r) => {
        const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > o && (r._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (r) => {
        const o = r.value;
        if (o.length >= t.minimum) return;
        const i = ue(o);
        r.issues.push({
          origin: i,
          code: 'too_small',
          minimum: t.minimum,
          inclusive: !0,
          input: o,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  yn = s('$ZodCheckLengthEquals', (e, t) => {
    var n;
    (y.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (r) => {
          const o = r.value;
          return !se(o) && o.length !== void 0;
        }),
      e._zod.onattach.push((r) => {
        const o = r._zod.bag;
        ((o.minimum = t.length), (o.maximum = t.length), (o.length = t.length));
      }),
      (e._zod.check = (r) => {
        const o = r.value,
          c = o.length;
        if (c === t.length) return;
        const i = ue(o),
          a = c > t.length;
        r.issues.push({
          origin: i,
          ...(a
            ? { code: 'too_big', maximum: t.length }
            : { code: 'too_small', minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  ee = s('$ZodCheckStringFormat', (e, t) => {
    var n, r;
    (y.init(e, t),
      e._zod.onattach.push((o) => {
        const c = o._zod.bag;
        ((c.format = t.format),
          t.pattern &&
            (c.patterns ?? (c.patterns = new Set()),
            c.patterns.add(t.pattern)));
      }),
      t.pattern
        ? ((n = e._zod).check ??
          (n.check = (o) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(o.value) &&
                o.issues.push({
                  origin: 'string',
                  code: 'invalid_format',
                  format: t.format,
                  input: o.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                }));
          }))
        : ((r = e._zod).check ?? (r.check = () => {})));
  }),
  On = s('$ZodCheckRegex', (e, t) => {
    (ee.init(e, t),
      (e._zod.check = (n) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(n.value) &&
            n.issues.push({
              origin: 'string',
              code: 'invalid_format',
              format: 'regex',
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  En = s('$ZodCheckLowerCase', (e, t) => {
    (t.pattern ?? (t.pattern = bn), ee.init(e, t));
  }),
  Pn = s('$ZodCheckUpperCase', (e, t) => {
    (t.pattern ?? (t.pattern = Zn), ee.init(e, t));
  }),
  jn = s('$ZodCheckIncludes', (e, t) => {
    y.init(e, t);
    const n = X(t.includes),
      r = new RegExp(
        typeof t.position == 'number' ? `^.{${t.position}}${n}` : n
      );
    ((t.pattern = r),
      e._zod.onattach.push((o) => {
        const c = o._zod.bag;
        (c.patterns ?? (c.patterns = new Set()), c.patterns.add(r));
      }),
      (e._zod.check = (o) => {
        o.value.includes(t.includes, t.position) ||
          o.issues.push({
            origin: 'string',
            code: 'invalid_format',
            format: 'includes',
            includes: t.includes,
            input: o.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  In = s('$ZodCheckStartsWith', (e, t) => {
    y.init(e, t);
    const n = new RegExp(`^${X(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((r) => {
        const o = r._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(n));
      }),
      (e._zod.check = (r) => {
        r.value.startsWith(t.prefix) ||
          r.issues.push({
            origin: 'string',
            code: 'invalid_format',
            format: 'starts_with',
            prefix: t.prefix,
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  An = s('$ZodCheckEndsWith', (e, t) => {
    y.init(e, t);
    const n = new RegExp(`.*${X(t.suffix)}$`);
    (t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((r) => {
        const o = r._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(n));
      }),
      (e._zod.check = (r) => {
        r.value.endsWith(t.suffix) ||
          r.issues.push({
            origin: 'string',
            code: 'invalid_format',
            format: 'ends_with',
            suffix: t.suffix,
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  xn = s('$ZodCheckOverwrite', (e, t) => {
    (y.init(e, t),
      (e._zod.check = (n) => {
        n.value = t.tx(n.value);
      }));
  });
class Dn {
  constructor(t = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = t));
  }
  indented(t) {
    ((this.indent += 1), t(this), (this.indent -= 1));
  }
  write(t) {
    if (typeof t == 'function') {
      (t(this, { execution: 'sync' }), t(this, { execution: 'async' }));
      return;
    }
    const r = t
        .split(
          `
`
        )
        .filter((i) => i),
      o = Math.min(...r.map((i) => i.length - i.trimStart().length)),
      c = r.map((i) => i.slice(o)).map((i) => ' '.repeat(this.indent * 2) + i);
    for (const i of c) this.content.push(i);
  }
  compile() {
    const t = Function,
      n = this?.args,
      o = [...(this?.content ?? ['']).map((c) => `  ${c}`)];
    return new t(
      ...n,
      o.join(`
`)
    );
  }
}
const Sn = { major: 4, minor: 1, patch: 9 },
  g = s('$ZodType', (e, t) => {
    var n;
    (e ?? (e = {}),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Sn));
    const r = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has('$ZodCheck') && r.unshift(e);
    for (const o of r) for (const c of o._zod.onattach) c(e);
    if (r.length === 0)
      ((n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      const o = (i, a, u) => {
          let l = D(i),
            f;
          for (const w of a) {
            if (w._zod.def.when) {
              if (!w._zod.def.when(i)) continue;
            } else if (l) continue;
            const v = i.issues.length,
              _ = w._zod.check(i);
            if (_ instanceof Promise && u?.async === !1) throw new S();
            if (f || _ instanceof Promise)
              f = (f ?? Promise.resolve()).then(async () => {
                (await _, i.issues.length !== v && (l || (l = D(i, v))));
              });
            else {
              if (i.issues.length === v) continue;
              l || (l = D(i, v));
            }
          }
          return f ? f.then(() => i) : i;
        },
        c = (i, a, u) => {
          if (D(i)) return ((i.aborted = !0), i);
          const l = o(a, r, u);
          if (l instanceof Promise) {
            if (u.async === !1) throw new S();
            return l.then((f) => e._zod.parse(f, u));
          }
          return e._zod.parse(l, u);
        };
      e._zod.run = (i, a) => {
        if (a.skipChecks) return e._zod.parse(i, a);
        if (a.direction === 'backward') {
          const l = e._zod.parse(
            { value: i.value, issues: [] },
            { ...a, skipChecks: !0 }
          );
          return l instanceof Promise ? l.then((f) => c(f, i, a)) : c(l, i, a);
        }
        const u = e._zod.parse(i, a);
        if (u instanceof Promise) {
          if (a.async === !1) throw new S();
          return u.then((l) => o(l, r, a));
        }
        return o(u, r, a);
      };
    }
    e['~standard'] = {
      validate: (o) => {
        try {
          const c = Wt(e, o);
          return c.success ? { value: c.data } : { issues: c.error?.issues };
        } catch {
          return Vt(e, o).then((i) =>
            i.success ? { value: i.data } : { issues: i.error?.issues }
          );
        }
      },
      vendor: 'zod',
      version: 1,
    };
  }),
  fe = s('$ZodString', (e, t) => {
    (g.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? wn(e._zod.bag)),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch {}
        return (
          typeof n.value == 'string' ||
            n.issues.push({
              expected: 'string',
              code: 'invalid_type',
              input: n.value,
              inst: e,
            }),
          n
        );
      }));
  }),
  h = s('$ZodStringFormat', (e, t) => {
    (ee.init(e, t), fe.init(e, t));
  }),
  Tn = s('$ZodGUID', (e, t) => {
    (t.pattern ?? (t.pattern = cn), h.init(e, t));
  }),
  Cn = s('$ZodUUID', (e, t) => {
    if (t.version) {
      const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (r === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = ve(r));
    } else t.pattern ?? (t.pattern = ve());
    h.init(e, t);
  }),
  Rn = s('$ZodEmail', (e, t) => {
    (t.pattern ?? (t.pattern = sn), h.init(e, t));
  }),
  Un = s('$ZodURL', (e, t) => {
    (h.init(e, t),
      (e._zod.check = (n) => {
        try {
          const r = n.value.trim(),
            o = new URL(r);
          (t.hostname &&
            ((t.hostname.lastIndex = 0),
            t.hostname.test(o.hostname) ||
              n.issues.push({
                code: 'invalid_format',
                format: 'url',
                note: 'Invalid hostname',
                pattern: mn.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                o.protocol.endsWith(':') ? o.protocol.slice(0, -1) : o.protocol
              ) ||
                n.issues.push({
                  code: 'invalid_format',
                  format: 'url',
                  note: 'Invalid protocol',
                  pattern: t.protocol.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })),
            t.normalize ? (n.value = o.href) : (n.value = r));
          return;
        } catch {
          n.issues.push({
            code: 'invalid_format',
            format: 'url',
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Nn = s('$ZodEmoji', (e, t) => {
    (t.pattern ?? (t.pattern = un()), h.init(e, t));
  }),
  Fn = s('$ZodNanoID', (e, t) => {
    (t.pattern ?? (t.pattern = rn), h.init(e, t));
  }),
  Ln = s('$ZodCUID', (e, t) => {
    (t.pattern ?? (t.pattern = Yt), h.init(e, t));
  }),
  Wn = s('$ZodCUID2', (e, t) => {
    (t.pattern ?? (t.pattern = Qt), h.init(e, t));
  }),
  Vn = s('$ZodULID', (e, t) => {
    (t.pattern ?? (t.pattern = en), h.init(e, t));
  }),
  Mn = s('$ZodXID', (e, t) => {
    (t.pattern ?? (t.pattern = tn), h.init(e, t));
  }),
  Bn = s('$ZodKSUID', (e, t) => {
    (t.pattern ?? (t.pattern = nn), h.init(e, t));
  }),
  Jn = s('$ZodISODateTime', (e, t) => {
    (t.pattern ?? (t.pattern = zn(t)), h.init(e, t));
  }),
  Kn = s('$ZodISODate', (e, t) => {
    (t.pattern ?? (t.pattern = gn), h.init(e, t));
  }),
  Gn = s('$ZodISOTime', (e, t) => {
    (t.pattern ?? (t.pattern = vn(t)), h.init(e, t));
  }),
  Hn = s('$ZodISODuration', (e, t) => {
    (t.pattern ?? (t.pattern = on), h.init(e, t));
  }),
  qn = s('$ZodIPv4', (e, t) => {
    (t.pattern ?? (t.pattern = ln),
      h.init(e, t),
      e._zod.onattach.push((n) => {
        const r = n._zod.bag;
        r.format = 'ipv4';
      }));
  }),
  Xn = s('$ZodIPv6', (e, t) => {
    (t.pattern ?? (t.pattern = dn),
      h.init(e, t),
      e._zod.onattach.push((n) => {
        const r = n._zod.bag;
        r.format = 'ipv6';
      }),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({
            code: 'invalid_format',
            format: 'ipv6',
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Yn = s('$ZodCIDRv4', (e, t) => {
    (t.pattern ?? (t.pattern = fn), h.init(e, t));
  }),
  Qn = s('$ZodCIDRv6', (e, t) => {
    (t.pattern ?? (t.pattern = pn),
      h.init(e, t),
      (e._zod.check = (n) => {
        const r = n.value.split('/');
        try {
          if (r.length !== 2) throw new Error();
          const [o, c] = r;
          if (!c) throw new Error();
          const i = Number(c);
          if (`${i}` !== c) throw new Error();
          if (i < 0 || i > 128) throw new Error();
          new URL(`http://[${o}]`);
        } catch {
          n.issues.push({
            code: 'invalid_format',
            format: 'cidrv6',
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  });
function qe(e) {
  if (e === '') return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
const er = s('$ZodBase64', (e, t) => {
  (t.pattern ?? (t.pattern = hn),
    h.init(e, t),
    e._zod.onattach.push((n) => {
      n._zod.bag.contentEncoding = 'base64';
    }),
    (e._zod.check = (n) => {
      qe(n.value) ||
        n.issues.push({
          code: 'invalid_format',
          format: 'base64',
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function tr(e) {
  if (!Ke.test(e)) return !1;
  const t = e.replace(/[-_]/g, (r) => (r === '-' ? '+' : '/')),
    n = t.padEnd(Math.ceil(t.length / 4) * 4, '=');
  return qe(n);
}
const nr = s('$ZodBase64URL', (e, t) => {
    (t.pattern ?? (t.pattern = Ke),
      h.init(e, t),
      e._zod.onattach.push((n) => {
        n._zod.bag.contentEncoding = 'base64url';
      }),
      (e._zod.check = (n) => {
        tr(n.value) ||
          n.issues.push({
            code: 'invalid_format',
            format: 'base64url',
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  rr = s('$ZodE164', (e, t) => {
    (t.pattern ?? (t.pattern = _n), h.init(e, t));
  });
function or(e, t = null) {
  try {
    const n = e.split('.');
    if (n.length !== 3) return !1;
    const [r] = n;
    if (!r) return !1;
    const o = JSON.parse(atob(r));
    return !(
      ('typ' in o && o?.typ !== 'JWT') ||
      !o.alg ||
      (t && (!('alg' in o) || o.alg !== t))
    );
  } catch {
    return !1;
  }
}
const ir = s('$ZodJWT', (e, t) => {
    (h.init(e, t),
      (e._zod.check = (n) => {
        or(n.value, t.alg) ||
          n.issues.push({
            code: 'invalid_format',
            format: 'jwt',
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  cr = s('$ZodUnknown', (e, t) => {
    (g.init(e, t), (e._zod.parse = (n) => n));
  }),
  sr = s('$ZodNever', (e, t) => {
    (g.init(e, t),
      (e._zod.parse = (n, r) => (
        n.issues.push({
          expected: 'never',
          code: 'invalid_type',
          input: n.value,
          inst: e,
        }),
        n
      )));
  });
function ze(e, t, n) {
  (e.issues.length && t.issues.push(...Ve(n, e.issues)),
    (t.value[n] = e.value));
}
const ar = s('$ZodArray', (e, t) => {
  (g.init(e, t),
    (e._zod.parse = (n, r) => {
      const o = n.value;
      if (!Array.isArray(o))
        return (
          n.issues.push({
            expected: 'array',
            code: 'invalid_type',
            input: o,
            inst: e,
          }),
          n
        );
      n.value = Array(o.length);
      const c = [];
      for (let i = 0; i < o.length; i++) {
        const a = o[i],
          u = t.element._zod.run({ value: a, issues: [] }, r);
        u instanceof Promise ? c.push(u.then((l) => ze(l, n, i))) : ze(u, n, i);
      }
      return c.length ? Promise.all(c).then(() => n) : n;
    }));
});
function K(e, t, n, r) {
  (e.issues.length && t.issues.push(...Ve(n, e.issues)),
    e.value === void 0
      ? n in r && (t.value[n] = void 0)
      : (t.value[n] = e.value));
}
function Xe(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has('$ZodType'))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = xt(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n),
  };
}
function Ye(e, t, n, r, o, c) {
  const i = [],
    a = o.keySet,
    u = o.catchall._zod,
    l = u.def.type;
  for (const f of Object.keys(t)) {
    if (a.has(f)) continue;
    if (l === 'never') {
      i.push(f);
      continue;
    }
    const w = u.run({ value: t[f], issues: [] }, r);
    w instanceof Promise ? e.push(w.then((v) => K(v, n, f, t))) : K(w, n, f, t);
  }
  return (
    i.length &&
      n.issues.push({ code: 'unrecognized_keys', keys: i, input: t, inst: c }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
const ur = s('$ZodObject', (e, t) => {
    g.init(e, t);
    const n = ce(() => Xe(t));
    p(e._zod, 'propValues', () => {
      const i = t.shape,
        a = {};
      for (const u in i) {
        const l = i[u]._zod;
        if (l.values) {
          a[u] ?? (a[u] = new Set());
          for (const f of l.values) a[u].add(f);
        }
      }
      return a;
    });
    const r = J,
      o = t.catchall;
    let c;
    e._zod.parse = (i, a) => {
      c ?? (c = n.value);
      const u = i.value;
      if (!r(u))
        return (
          i.issues.push({
            expected: 'object',
            code: 'invalid_type',
            input: u,
            inst: e,
          }),
          i
        );
      i.value = {};
      const l = [],
        f = c.shape;
      for (const w of c.keys) {
        const _ = f[w]._zod.run({ value: u[w], issues: [] }, a);
        _ instanceof Promise
          ? l.push(_.then((k) => K(k, i, w, u)))
          : K(_, i, w, u);
      }
      return o
        ? Ye(l, u, i, a, n.value, e)
        : l.length
          ? Promise.all(l).then(() => i)
          : i;
    };
  }),
  lr = s('$ZodObjectJIT', (e, t) => {
    ur.init(e, t);
    const n = e._zod.parse,
      r = ce(() => Xe(t)),
      o = (v) => {
        const _ = new Dn(['shape', 'payload', 'ctx']),
          k = r.value,
          ft = (O) => {
            const $ = ge(O);
            return `shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`;
          };
        _.write('const input = payload.value;');
        const pe = Object.create(null);
        let pt = 0;
        for (const O of k.keys) pe[O] = `key_${pt++}`;
        _.write('const newResult = {};');
        for (const O of k.keys) {
          const $ = pe[O],
            C = ge(O);
          (_.write(`const ${$} = ${ft(O)};`),
            _.write(`
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${C}, ...iss.path] : [${C}]
          })));
        }
        
        
        if (${$}.value === undefined) {
          if (${C} in input) {
            newResult[${C}] = undefined;
          }
        } else {
          newResult[${C}] = ${$}.value;
        }
        
      `));
        }
        (_.write('payload.value = newResult;'), _.write('return payload;'));
        const ht = _.compile();
        return (O, $) => ht(v, O, $);
      };
    let c;
    const i = J,
      a = !Fe.jitless,
      l = a && It.value,
      f = t.catchall;
    let w;
    e._zod.parse = (v, _) => {
      w ?? (w = r.value);
      const k = v.value;
      return i(k)
        ? a && l && _?.async === !1 && _.jitless !== !0
          ? (c || (c = o(t.shape)),
            (v = c(v, _)),
            f ? Ye([], k, v, _, w, e) : v)
          : n(v, _)
        : (v.issues.push({
            expected: 'object',
            code: 'invalid_type',
            input: k,
            inst: e,
          }),
          v);
    };
  });
function we(e, t, n, r) {
  for (const c of e) if (c.issues.length === 0) return ((t.value = c.value), t);
  const o = e.filter((c) => !D(c));
  return o.length === 1
    ? ((t.value = o[0].value), o[0])
    : (t.issues.push({
        code: 'invalid_union',
        input: t.value,
        inst: n,
        errors: e.map((c) => c.issues.map((i) => A(i, r, I()))),
      }),
      t);
}
const dr = s('$ZodUnion', (e, t) => {
    (g.init(e, t),
      p(e._zod, 'optin', () =>
        t.options.some((o) => o._zod.optin === 'optional') ? 'optional' : void 0
      ),
      p(e._zod, 'optout', () =>
        t.options.some((o) => o._zod.optout === 'optional')
          ? 'optional'
          : void 0
      ),
      p(e._zod, 'values', () => {
        if (t.options.every((o) => o._zod.values))
          return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
      }),
      p(e._zod, 'pattern', () => {
        if (t.options.every((o) => o._zod.pattern)) {
          const o = t.options.map((c) => c._zod.pattern);
          return new RegExp(`^(${o.map((c) => ae(c.source)).join('|')})$`);
        }
      }));
    const n = t.options.length === 1,
      r = t.options[0]._zod.run;
    e._zod.parse = (o, c) => {
      if (n) return r(o, c);
      let i = !1;
      const a = [];
      for (const u of t.options) {
        const l = u._zod.run({ value: o.value, issues: [] }, c);
        if (l instanceof Promise) (a.push(l), (i = !0));
        else {
          if (l.issues.length === 0) return l;
          a.push(l);
        }
      }
      return i ? Promise.all(a).then((u) => we(u, o, e, c)) : we(a, o, e, c);
    };
  }),
  fr = s('$ZodIntersection', (e, t) => {
    (g.init(e, t),
      (e._zod.parse = (n, r) => {
        const o = n.value,
          c = t.left._zod.run({ value: o, issues: [] }, r),
          i = t.right._zod.run({ value: o, issues: [] }, r);
        return c instanceof Promise || i instanceof Promise
          ? Promise.all([c, i]).then(([u, l]) => be(n, u, l))
          : be(n, c, i);
      }));
  });
function ne(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (R(e) && R(t)) {
    const n = Object.keys(t),
      r = Object.keys(e).filter((c) => n.indexOf(c) !== -1),
      o = { ...e, ...t };
    for (const c of r) {
      const i = ne(e[c], t[c]);
      if (!i.valid)
        return { valid: !1, mergeErrorPath: [c, ...i.mergeErrorPath] };
      o[c] = i.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r],
        c = t[r],
        i = ne(o, c);
      if (!i.valid)
        return { valid: !1, mergeErrorPath: [r, ...i.mergeErrorPath] };
      n.push(i.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function be(e, t, n) {
  if (
    (t.issues.length && e.issues.push(...t.issues),
    n.issues.length && e.issues.push(...n.issues),
    D(e))
  )
    return e;
  const r = ne(t.value, n.value);
  if (!r.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`
    );
  return ((e.value = r.data), e);
}
const pr = s('$ZodEnum', (e, t) => {
    g.init(e, t);
    const n = Pt(t.entries),
      r = new Set(n);
    ((e._zod.values = r),
      (e._zod.pattern = new RegExp(
        `^(${n
          .filter((o) => At.has(typeof o))
          .map((o) => (typeof o == 'string' ? X(o) : o.toString()))
          .join('|')})$`
      )),
      (e._zod.parse = (o, c) => {
        const i = o.value;
        return (
          r.has(i) ||
            o.issues.push({
              code: 'invalid_value',
              values: n,
              input: i,
              inst: e,
            }),
          o
        );
      }));
  }),
  hr = s('$ZodTransform', (e, t) => {
    (g.init(e, t),
      (e._zod.parse = (n, r) => {
        if (r.direction === 'backward') throw new Ne(e.constructor.name);
        const o = t.transform(n.value, n);
        if (r.async)
          return (o instanceof Promise ? o : Promise.resolve(o)).then(
            (i) => ((n.value = i), n)
          );
        if (o instanceof Promise) throw new S();
        return ((n.value = o), n);
      }));
  });
function Ze(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const mr = s('$ZodOptional', (e, t) => {
    (g.init(e, t),
      (e._zod.optin = 'optional'),
      (e._zod.optout = 'optional'),
      p(e._zod, 'values', () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0
      ),
      p(e._zod, 'pattern', () => {
        const n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${ae(n.source)})?$`) : void 0;
      }),
      (e._zod.parse = (n, r) => {
        if (t.innerType._zod.optin === 'optional') {
          const o = t.innerType._zod.run(n, r);
          return o instanceof Promise
            ? o.then((c) => Ze(c, n.value))
            : Ze(o, n.value);
        }
        return n.value === void 0 ? n : t.innerType._zod.run(n, r);
      }));
  }),
  _r = s('$ZodNullable', (e, t) => {
    (g.init(e, t),
      p(e._zod, 'optin', () => t.innerType._zod.optin),
      p(e._zod, 'optout', () => t.innerType._zod.optout),
      p(e._zod, 'pattern', () => {
        const n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${ae(n.source)}|null)$`) : void 0;
      }),
      p(e._zod, 'values', () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0
      ),
      (e._zod.parse = (n, r) =>
        n.value === null ? n : t.innerType._zod.run(n, r)));
  }),
  gr = s('$ZodDefault', (e, t) => {
    (g.init(e, t),
      (e._zod.optin = 'optional'),
      p(e._zod, 'values', () => t.innerType._zod.values),
      (e._zod.parse = (n, r) => {
        if (r.direction === 'backward') return t.innerType._zod.run(n, r);
        if (n.value === void 0) return ((n.value = t.defaultValue), n);
        const o = t.innerType._zod.run(n, r);
        return o instanceof Promise ? o.then((c) => ke(c, t)) : ke(o, t);
      }));
  });
function ke(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
const vr = s('$ZodPrefault', (e, t) => {
    (g.init(e, t),
      (e._zod.optin = 'optional'),
      p(e._zod, 'values', () => t.innerType._zod.values),
      (e._zod.parse = (n, r) => (
        r.direction === 'backward' ||
          (n.value === void 0 && (n.value = t.defaultValue)),
        t.innerType._zod.run(n, r)
      )));
  }),
  zr = s('$ZodNonOptional', (e, t) => {
    (g.init(e, t),
      p(e._zod, 'values', () => {
        const n = t.innerType._zod.values;
        return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, r) => {
        const o = t.innerType._zod.run(n, r);
        return o instanceof Promise ? o.then((c) => $e(c, e)) : $e(o, e);
      }));
  });
function $e(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: 'invalid_type',
        expected: 'nonoptional',
        input: e.value,
        inst: t,
      }),
    e
  );
}
const wr = s('$ZodCatch', (e, t) => {
    (g.init(e, t),
      p(e._zod, 'optin', () => t.innerType._zod.optin),
      p(e._zod, 'optout', () => t.innerType._zod.optout),
      p(e._zod, 'values', () => t.innerType._zod.values),
      (e._zod.parse = (n, r) => {
        if (r.direction === 'backward') return t.innerType._zod.run(n, r);
        const o = t.innerType._zod.run(n, r);
        return o instanceof Promise
          ? o.then(
              (c) => (
                (n.value = c.value),
                c.issues.length &&
                  ((n.value = t.catchValue({
                    ...n,
                    error: { issues: c.issues.map((i) => A(i, r, I())) },
                    input: n.value,
                  })),
                  (n.issues = [])),
                n
              )
            )
          : ((n.value = o.value),
            o.issues.length &&
              ((n.value = t.catchValue({
                ...n,
                error: { issues: o.issues.map((c) => A(c, r, I())) },
                input: n.value,
              })),
              (n.issues = [])),
            n);
      }));
  }),
  br = s('$ZodPipe', (e, t) => {
    (g.init(e, t),
      p(e._zod, 'values', () => t.in._zod.values),
      p(e._zod, 'optin', () => t.in._zod.optin),
      p(e._zod, 'optout', () => t.out._zod.optout),
      p(e._zod, 'propValues', () => t.in._zod.propValues),
      (e._zod.parse = (n, r) => {
        if (r.direction === 'backward') {
          const c = t.out._zod.run(n, r);
          return c instanceof Promise
            ? c.then((i) => L(i, t.in, r))
            : L(c, t.in, r);
        }
        const o = t.in._zod.run(n, r);
        return o instanceof Promise
          ? o.then((c) => L(c, t.out, r))
          : L(o, t.out, r);
      }));
  });
function L(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const Zr = s('$ZodReadonly', (e, t) => {
  (g.init(e, t),
    p(e._zod, 'propValues', () => t.innerType._zod.propValues),
    p(e._zod, 'values', () => t.innerType._zod.values),
    p(e._zod, 'optin', () => t.innerType._zod.optin),
    p(e._zod, 'optout', () => t.innerType._zod.optout),
    (e._zod.parse = (n, r) => {
      if (r.direction === 'backward') return t.innerType._zod.run(n, r);
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then(ye) : ye(o);
    }));
});
function ye(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
const kr = s('$ZodCustom', (e, t) => {
  (y.init(e, t),
    g.init(e, t),
    (e._zod.parse = (n, r) => n),
    (e._zod.check = (n) => {
      const r = n.value,
        o = t.fn(r);
      if (o instanceof Promise) return o.then((c) => Oe(c, n, r, e));
      Oe(o, n, r, e);
    }));
});
function Oe(e, t, n, r) {
  if (!e) {
    const o = {
      code: 'custom',
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(U(o)));
  }
}
class $r {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add(t, ...n) {
    const r = n[0];
    if ((this._map.set(t, r), r && typeof r == 'object' && 'id' in r)) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, t);
    }
    return this;
  }
  clear() {
    return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
  }
  remove(t) {
    const n = this._map.get(t);
    return (
      n && typeof n == 'object' && 'id' in n && this._idmap.delete(n.id),
      this._map.delete(t),
      this
    );
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...(this.get(n) ?? {}) };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function yr() {
  return new $r();
}
const W = yr();
function Or(e, t) {
  return new e({ type: 'string', ...d(t) });
}
function Qe(e, t) {
  return new e({
    type: 'string',
    format: 'email',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Ee(e, t) {
  return new e({
    type: 'string',
    format: 'guid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Er(e, t) {
  return new e({
    type: 'string',
    format: 'uuid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Pr(e, t) {
  return new e({
    type: 'string',
    format: 'uuid',
    check: 'string_format',
    abort: !1,
    version: 'v4',
    ...d(t),
  });
}
function jr(e, t) {
  return new e({
    type: 'string',
    format: 'uuid',
    check: 'string_format',
    abort: !1,
    version: 'v6',
    ...d(t),
  });
}
function Ir(e, t) {
  return new e({
    type: 'string',
    format: 'uuid',
    check: 'string_format',
    abort: !1,
    version: 'v7',
    ...d(t),
  });
}
function Ar(e, t) {
  return new e({
    type: 'string',
    format: 'url',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function xr(e, t) {
  return new e({
    type: 'string',
    format: 'emoji',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Dr(e, t) {
  return new e({
    type: 'string',
    format: 'nanoid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Sr(e, t) {
  return new e({
    type: 'string',
    format: 'cuid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Tr(e, t) {
  return new e({
    type: 'string',
    format: 'cuid2',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Cr(e, t) {
  return new e({
    type: 'string',
    format: 'ulid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Rr(e, t) {
  return new e({
    type: 'string',
    format: 'xid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Ur(e, t) {
  return new e({
    type: 'string',
    format: 'ksuid',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Nr(e, t) {
  return new e({
    type: 'string',
    format: 'ipv4',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Fr(e, t) {
  return new e({
    type: 'string',
    format: 'ipv6',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Lr(e, t) {
  return new e({
    type: 'string',
    format: 'cidrv4',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Wr(e, t) {
  return new e({
    type: 'string',
    format: 'cidrv6',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Vr(e, t) {
  return new e({
    type: 'string',
    format: 'base64',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Mr(e, t) {
  return new e({
    type: 'string',
    format: 'base64url',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Br(e, t) {
  return new e({
    type: 'string',
    format: 'e164',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Jr(e, t) {
  return new e({
    type: 'string',
    format: 'jwt',
    check: 'string_format',
    abort: !1,
    ...d(t),
  });
}
function Kr(e, t) {
  return new e({
    type: 'string',
    format: 'datetime',
    check: 'string_format',
    offset: !1,
    local: !1,
    precision: null,
    ...d(t),
  });
}
function Gr(e, t) {
  return new e({
    type: 'string',
    format: 'date',
    check: 'string_format',
    ...d(t),
  });
}
function Hr(e, t) {
  return new e({
    type: 'string',
    format: 'time',
    check: 'string_format',
    precision: null,
    ...d(t),
  });
}
function qr(e, t) {
  return new e({
    type: 'string',
    format: 'duration',
    check: 'string_format',
    ...d(t),
  });
}
function Xr(e) {
  return new e({ type: 'unknown' });
}
function Yr(e, t) {
  return new e({ type: 'never', ...d(t) });
}
function et(e, t) {
  return new kn({ check: 'max_length', ...d(t), maximum: e });
}
function G(e, t) {
  return new $n({ check: 'min_length', ...d(t), minimum: e });
}
function tt(e, t) {
  return new yn({ check: 'length_equals', ...d(t), length: e });
}
function Qr(e, t) {
  return new On({
    check: 'string_format',
    format: 'regex',
    ...d(t),
    pattern: e,
  });
}
function eo(e) {
  return new En({ check: 'string_format', format: 'lowercase', ...d(e) });
}
function to(e) {
  return new Pn({ check: 'string_format', format: 'uppercase', ...d(e) });
}
function no(e, t) {
  return new jn({
    check: 'string_format',
    format: 'includes',
    ...d(t),
    includes: e,
  });
}
function ro(e, t) {
  return new In({
    check: 'string_format',
    format: 'starts_with',
    ...d(t),
    prefix: e,
  });
}
function oo(e, t) {
  return new An({
    check: 'string_format',
    format: 'ends_with',
    ...d(t),
    suffix: e,
  });
}
function N(e) {
  return new xn({ check: 'overwrite', tx: e });
}
function io(e) {
  return N((t) => t.normalize(e));
}
function co() {
  return N((e) => e.trim());
}
function so() {
  return N((e) => e.toLowerCase());
}
function ao() {
  return N((e) => e.toUpperCase());
}
function uo(e, t, n) {
  return new e({ type: 'array', element: t, ...d(n) });
}
function lo(e, t, n) {
  return new e({ type: 'custom', check: 'custom', fn: t, ...d(n) });
}
function fo(e) {
  const t = po(
    (n) => (
      (n.addIssue = (r) => {
        if (typeof r == 'string') n.issues.push(U(r, n.value, t._zod.def));
        else {
          const o = r;
          (o.fatal && (o.continue = !1),
            o.code ?? (o.code = 'custom'),
            o.input ?? (o.input = n.value),
            o.inst ?? (o.inst = t),
            o.continue ?? (o.continue = !t._zod.def.abort),
            n.issues.push(U(o)));
        }
      }),
      e(n.value, n)
    )
  );
  return t;
}
function po(e, t) {
  const n = new y({ check: 'custom', ...d(t) });
  return ((n._zod.check = e), n);
}
const ho = s('ZodISODateTime', (e, t) => {
  (Jn.init(e, t), m.init(e, t));
});
function mo(e) {
  return Kr(ho, e);
}
const _o = s('ZodISODate', (e, t) => {
  (Kn.init(e, t), m.init(e, t));
});
function go(e) {
  return Gr(_o, e);
}
const vo = s('ZodISOTime', (e, t) => {
  (Gn.init(e, t), m.init(e, t));
});
function zo(e) {
  return Hr(vo, e);
}
const wo = s('ZodISODuration', (e, t) => {
  (Hn.init(e, t), m.init(e, t));
});
function bo(e) {
  return qr(wo, e);
}
const Zo = (e, t) => {
    (Be.init(e, t),
      (e.name = 'ZodError'),
      Object.defineProperties(e, {
        format: { value: (n) => Lt(e, n) },
        flatten: { value: (n) => Ft(e, n) },
        addIssue: {
          value: (n) => {
            (e.issues.push(n), (e.message = JSON.stringify(e.issues, te, 2)));
          },
        },
        addIssues: {
          value: (n) => {
            (e.issues.push(...n),
              (e.message = JSON.stringify(e.issues, te, 2)));
          },
        },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  Z = s('ZodError', Zo, { Parent: Error }),
  ko = le(Z),
  $o = de(Z),
  yo = Y(Z),
  Oo = Q(Z),
  Eo = Mt(Z),
  Po = Bt(Z),
  jo = Jt(Z),
  Io = Kt(Z),
  Ao = Gt(Z),
  xo = Ht(Z),
  Do = qt(Z),
  So = Xt(Z),
  z = s(
    'ZodType',
    (e, t) => (
      g.init(e, t),
      (e.def = t),
      (e.type = t.type),
      Object.defineProperty(e, '_def', { value: t }),
      (e.check = (...n) =>
        e.clone({
          ...t,
          checks: [
            ...(t.checks ?? []),
            ...n.map((r) =>
              typeof r == 'function'
                ? { _zod: { check: r, def: { check: 'custom' }, onattach: [] } }
                : r
            ),
          ],
        })),
      (e.clone = (n, r) => P(e, n, r)),
      (e.brand = () => e),
      (e.register = (n, r) => (n.add(e, r), e)),
      (e.parse = (n, r) => ko(e, n, r, { callee: e.parse })),
      (e.safeParse = (n, r) => yo(e, n, r)),
      (e.parseAsync = async (n, r) => $o(e, n, r, { callee: e.parseAsync })),
      (e.safeParseAsync = async (n, r) => Oo(e, n, r)),
      (e.spa = e.safeParseAsync),
      (e.encode = (n, r) => Eo(e, n, r)),
      (e.decode = (n, r) => Po(e, n, r)),
      (e.encodeAsync = async (n, r) => jo(e, n, r)),
      (e.decodeAsync = async (n, r) => Io(e, n, r)),
      (e.safeEncode = (n, r) => Ao(e, n, r)),
      (e.safeDecode = (n, r) => xo(e, n, r)),
      (e.safeEncodeAsync = async (n, r) => Do(e, n, r)),
      (e.safeDecodeAsync = async (n, r) => So(e, n, r)),
      (e.refine = (n, r) => e.check(ki(n, r))),
      (e.superRefine = (n) => e.check($i(n))),
      (e.overwrite = (n) => e.check(N(n))),
      (e.optional = () => Ie(e)),
      (e.nullable = () => Ae(e)),
      (e.nullish = () => Ie(Ae(e))),
      (e.nonoptional = (n) => _i(e, n)),
      (e.array = () => ni(e)),
      (e.or = (n) => ii([e, n])),
      (e.and = (n) => si(e, n)),
      (e.transform = (n) => xe(e, li(n))),
      (e.default = (n) => pi(e, n)),
      (e.prefault = (n) => mi(e, n)),
      (e.catch = (n) => vi(e, n)),
      (e.pipe = (n) => xe(e, n)),
      (e.readonly = () => bi(e)),
      (e.describe = (n) => {
        const r = e.clone();
        return (W.add(r, { description: n }), r);
      }),
      Object.defineProperty(e, 'description', {
        get() {
          return W.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...n) => {
        if (n.length === 0) return W.get(e);
        const r = e.clone();
        return (W.add(r, n[0]), r);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    )
  ),
  nt = s('_ZodString', (e, t) => {
    (fe.init(e, t), z.init(e, t));
    const n = e._zod.bag;
    ((e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      (e.regex = (...r) => e.check(Qr(...r))),
      (e.includes = (...r) => e.check(no(...r))),
      (e.startsWith = (...r) => e.check(ro(...r))),
      (e.endsWith = (...r) => e.check(oo(...r))),
      (e.min = (...r) => e.check(G(...r))),
      (e.max = (...r) => e.check(et(...r))),
      (e.length = (...r) => e.check(tt(...r))),
      (e.nonempty = (...r) => e.check(G(1, ...r))),
      (e.lowercase = (r) => e.check(eo(r))),
      (e.uppercase = (r) => e.check(to(r))),
      (e.trim = () => e.check(co())),
      (e.normalize = (...r) => e.check(io(...r))),
      (e.toLowerCase = () => e.check(so())),
      (e.toUpperCase = () => e.check(ao())));
  }),
  To = s('ZodString', (e, t) => {
    (fe.init(e, t),
      nt.init(e, t),
      (e.email = (n) => e.check(Qe(rt, n))),
      (e.url = (n) => e.check(Ar(Co, n))),
      (e.jwt = (n) => e.check(Jr(Xo, n))),
      (e.emoji = (n) => e.check(xr(Ro, n))),
      (e.guid = (n) => e.check(Ee(Pe, n))),
      (e.uuid = (n) => e.check(Er(V, n))),
      (e.uuidv4 = (n) => e.check(Pr(V, n))),
      (e.uuidv6 = (n) => e.check(jr(V, n))),
      (e.uuidv7 = (n) => e.check(Ir(V, n))),
      (e.nanoid = (n) => e.check(Dr(Uo, n))),
      (e.guid = (n) => e.check(Ee(Pe, n))),
      (e.cuid = (n) => e.check(Sr(No, n))),
      (e.cuid2 = (n) => e.check(Tr(Fo, n))),
      (e.ulid = (n) => e.check(Cr(Lo, n))),
      (e.base64 = (n) => e.check(Vr(Go, n))),
      (e.base64url = (n) => e.check(Mr(Ho, n))),
      (e.xid = (n) => e.check(Rr(Wo, n))),
      (e.ksuid = (n) => e.check(Ur(Vo, n))),
      (e.ipv4 = (n) => e.check(Nr(Mo, n))),
      (e.ipv6 = (n) => e.check(Fr(Bo, n))),
      (e.cidrv4 = (n) => e.check(Lr(Jo, n))),
      (e.cidrv6 = (n) => e.check(Wr(Ko, n))),
      (e.e164 = (n) => e.check(Br(qo, n))),
      (e.datetime = (n) => e.check(mo(n))),
      (e.date = (n) => e.check(go(n))),
      (e.time = (n) => e.check(zo(n))),
      (e.duration = (n) => e.check(bo(n))));
  });
function re(e) {
  return Or(To, e);
}
const m = s('ZodStringFormat', (e, t) => {
    (h.init(e, t), nt.init(e, t));
  }),
  rt = s('ZodEmail', (e, t) => {
    (Rn.init(e, t), m.init(e, t));
  });
function ot(e) {
  return Qe(rt, e);
}
const Pe = s('ZodGUID', (e, t) => {
    (Tn.init(e, t), m.init(e, t));
  }),
  V = s('ZodUUID', (e, t) => {
    (Cn.init(e, t), m.init(e, t));
  }),
  Co = s('ZodURL', (e, t) => {
    (Un.init(e, t), m.init(e, t));
  }),
  Ro = s('ZodEmoji', (e, t) => {
    (Nn.init(e, t), m.init(e, t));
  }),
  Uo = s('ZodNanoID', (e, t) => {
    (Fn.init(e, t), m.init(e, t));
  }),
  No = s('ZodCUID', (e, t) => {
    (Ln.init(e, t), m.init(e, t));
  }),
  Fo = s('ZodCUID2', (e, t) => {
    (Wn.init(e, t), m.init(e, t));
  }),
  Lo = s('ZodULID', (e, t) => {
    (Vn.init(e, t), m.init(e, t));
  }),
  Wo = s('ZodXID', (e, t) => {
    (Mn.init(e, t), m.init(e, t));
  }),
  Vo = s('ZodKSUID', (e, t) => {
    (Bn.init(e, t), m.init(e, t));
  }),
  Mo = s('ZodIPv4', (e, t) => {
    (qn.init(e, t), m.init(e, t));
  }),
  Bo = s('ZodIPv6', (e, t) => {
    (Xn.init(e, t), m.init(e, t));
  }),
  Jo = s('ZodCIDRv4', (e, t) => {
    (Yn.init(e, t), m.init(e, t));
  }),
  Ko = s('ZodCIDRv6', (e, t) => {
    (Qn.init(e, t), m.init(e, t));
  }),
  Go = s('ZodBase64', (e, t) => {
    (er.init(e, t), m.init(e, t));
  }),
  Ho = s('ZodBase64URL', (e, t) => {
    (nr.init(e, t), m.init(e, t));
  }),
  qo = s('ZodE164', (e, t) => {
    (rr.init(e, t), m.init(e, t));
  }),
  Xo = s('ZodJWT', (e, t) => {
    (ir.init(e, t), m.init(e, t));
  }),
  Yo = s('ZodUnknown', (e, t) => {
    (cr.init(e, t), z.init(e, t));
  });
function je() {
  return Xr(Yo);
}
const Qo = s('ZodNever', (e, t) => {
  (sr.init(e, t), z.init(e, t));
});
function ei(e) {
  return Yr(Qo, e);
}
const ti = s('ZodArray', (e, t) => {
  (ar.init(e, t),
    z.init(e, t),
    (e.element = t.element),
    (e.min = (n, r) => e.check(G(n, r))),
    (e.nonempty = (n) => e.check(G(1, n))),
    (e.max = (n, r) => e.check(et(n, r))),
    (e.length = (n, r) => e.check(tt(n, r))),
    (e.unwrap = () => e.element));
});
function ni(e, t) {
  return uo(ti, e, t);
}
const ri = s('ZodObject', (e, t) => {
  (lr.init(e, t),
    z.init(e, t),
    p(e, 'shape', () => t.shape),
    (e.keyof = () => ai(Object.keys(e._zod.def.shape))),
    (e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: je() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: je() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: ei() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (n) => Tt(e, n)),
    (e.safeExtend = (n) => Ct(e, n)),
    (e.merge = (n) => Rt(e, n)),
    (e.pick = (n) => Dt(e, n)),
    (e.omit = (n) => St(e, n)),
    (e.partial = (...n) => Ut(ct, e, n[0])),
    (e.required = (...n) => Nt(st, e, n[0])));
});
function it(e, t) {
  const n = {
    type: 'object',
    get shape() {
      return (E(this, 'shape', e ? jt(e) : {}), this.shape);
    },
    ...d(t),
  };
  return new ri(n);
}
const oi = s('ZodUnion', (e, t) => {
  (dr.init(e, t), z.init(e, t), (e.options = t.options));
});
function ii(e, t) {
  return new oi({ type: 'union', options: e, ...d(t) });
}
const ci = s('ZodIntersection', (e, t) => {
  (fr.init(e, t), z.init(e, t));
});
function si(e, t) {
  return new ci({ type: 'intersection', left: e, right: t });
}
const oe = s('ZodEnum', (e, t) => {
  (pr.init(e, t),
    z.init(e, t),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries)));
  const n = new Set(Object.keys(t.entries));
  ((e.extract = (r, o) => {
    const c = {};
    for (const i of r)
      if (n.has(i)) c[i] = t.entries[i];
      else throw new Error(`Key ${i} not found in enum`);
    return new oe({ ...t, checks: [], ...d(o), entries: c });
  }),
    (e.exclude = (r, o) => {
      const c = { ...t.entries };
      for (const i of r)
        if (n.has(i)) delete c[i];
        else throw new Error(`Key ${i} not found in enum`);
      return new oe({ ...t, checks: [], ...d(o), entries: c });
    }));
});
function ai(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new oe({ type: 'enum', entries: n, ...d(t) });
}
const ui = s('ZodTransform', (e, t) => {
  (hr.init(e, t),
    z.init(e, t),
    (e._zod.parse = (n, r) => {
      if (r.direction === 'backward') throw new Ne(e.constructor.name);
      n.addIssue = (c) => {
        if (typeof c == 'string') n.issues.push(U(c, n.value, t));
        else {
          const i = c;
          (i.fatal && (i.continue = !1),
            i.code ?? (i.code = 'custom'),
            i.input ?? (i.input = n.value),
            i.inst ?? (i.inst = e),
            n.issues.push(U(i)));
        }
      };
      const o = t.transform(n.value, n);
      return o instanceof Promise
        ? o.then((c) => ((n.value = c), n))
        : ((n.value = o), n);
    }));
});
function li(e) {
  return new ui({ type: 'transform', transform: e });
}
const ct = s('ZodOptional', (e, t) => {
  (mr.init(e, t), z.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Ie(e) {
  return new ct({ type: 'optional', innerType: e });
}
const di = s('ZodNullable', (e, t) => {
  (_r.init(e, t), z.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Ae(e) {
  return new di({ type: 'nullable', innerType: e });
}
const fi = s('ZodDefault', (e, t) => {
  (gr.init(e, t),
    z.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function pi(e, t) {
  return new fi({
    type: 'default',
    innerType: e,
    get defaultValue() {
      return typeof t == 'function' ? t() : We(t);
    },
  });
}
const hi = s('ZodPrefault', (e, t) => {
  (vr.init(e, t), z.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function mi(e, t) {
  return new hi({
    type: 'prefault',
    innerType: e,
    get defaultValue() {
      return typeof t == 'function' ? t() : We(t);
    },
  });
}
const st = s('ZodNonOptional', (e, t) => {
  (zr.init(e, t), z.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function _i(e, t) {
  return new st({ type: 'nonoptional', innerType: e, ...d(t) });
}
const gi = s('ZodCatch', (e, t) => {
  (wr.init(e, t),
    z.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function vi(e, t) {
  return new gi({
    type: 'catch',
    innerType: e,
    catchValue: typeof t == 'function' ? t : () => t,
  });
}
const zi = s('ZodPipe', (e, t) => {
  (br.init(e, t), z.init(e, t), (e.in = t.in), (e.out = t.out));
});
function xe(e, t) {
  return new zi({ type: 'pipe', in: e, out: t });
}
const wi = s('ZodReadonly', (e, t) => {
  (Zr.init(e, t), z.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function bi(e) {
  return new wi({ type: 'readonly', innerType: e });
}
const Zi = s('ZodCustom', (e, t) => {
  (kr.init(e, t), z.init(e, t));
});
function ki(e, t = {}) {
  return lo(Zi, e, t);
}
function $i(e) {
  return fo(e);
}
const Ti = () =>
    it({
      username: re()
        .min(1, x('validation.usernameRequired'))
        .regex(/^[A-Za-zА-Яа-яЁё]+$/, x('validation.usernameLetters')),
      email: ot(x('validation.emailInvalid')),
      password: re().regex(
        new RegExp('^(?=.*\\p{L})(?=.*\\d)(?=.*[^\\p{L}\\d]).{8,}$', 'u'),
        x('validation.passwordInvalid')
      ),
    }),
  Ci = () =>
    it({
      email: ot(x('validation.emailInvalid')),
      password: re().regex(
        new RegExp('^(?=.*\\p{L})(?=.*\\d)(?=.*[^\\p{L}\\d]).{8,}$', 'u'),
        x('validation.passwordInvalid')
      ),
    }),
  yi = vt,
  Oi = mt,
  at = H.forwardRef(({ className: e, ...t }, n) =>
    b.jsx(De, {
      ref: n,
      className: q(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        e
      ),
      ...t,
    })
  );
at.displayName = De.displayName;
const ut = H.forwardRef(({ className: e, children: t, ...n }, r) =>
  b.jsxs(Oi, {
    children: [
      b.jsx(at, {}),
      b.jsxs(Se, {
        ref: r,
        className: q(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          e
        ),
        ...n,
        children: [
          t,
          b.jsxs(_t, {
            className:
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            children: [
              b.jsx(gt, { className: 'h-4 w-4' }),
              b.jsx('span', { className: 'sr-only', children: 'Close' }),
            ],
          }),
        ],
      }),
    ],
  })
);
ut.displayName = Se.displayName;
const lt = H.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Te, {
    ref: n,
    className: q('text-lg font-semibold leading-none tracking-tight', e),
    ...t,
  })
);
lt.displayName = Te.displayName;
const dt = H.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Ce, { ref: n, className: q('text-sm text-muted-foreground', e), ...t })
);
dt.displayName = Ce.displayName;
function Ri({ isOpen: e, onClose: t, message: n }) {
  const { t: r } = wt();
  return b.jsx(yi, {
    open: e,
    onOpenChange: t,
    children: b.jsxs(ut, {
      className: 'w-[300px] p-4 text-center',
      children: [
        b.jsx(lt, { children: r('buttons.error') }),
        b.jsx(dt, { children: n }),
        b.jsx(zt, {
          className: 'mt-4',
          onClick: t,
          children: r('buttons.close'),
        }),
      ],
    }),
  });
}
export { Ri as E, xi as F, Di as a, Si as b, Ti as c, Ci as g };
