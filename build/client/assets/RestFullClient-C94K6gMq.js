const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/httpsnippet-go1sL_E_.js',
      'assets/chunk-PVWAREVJ-DHjQzAty.js',
    ])
) => i.map((i) => d[i]);
import {
  j as a,
  r as d,
  R as be,
  u as lr,
  c as dr,
  B as ur,
} from './chunk-PVWAREVJ-DHjQzAty.js';
import {
  B as he,
  u as G,
  a as z,
  c as mt,
  b as fr,
} from './button-Bj7XQSOb.js';
import {
  b as je,
  P as H,
  f as Me,
  c as B,
  a as Nt,
  u as ie,
} from './index-BzYe63nO.js';
import { u as cn, a as ln } from './index-B4WRz4II.js';
import {
  c as Pe,
  b as dn,
  u as Fe,
  d as pr,
  h as mr,
  e as hr,
  f as gr,
  F as xr,
  g as vr,
  R as yr,
  i as wr,
  P as br,
  C as un,
  a as Sr,
  X as Cr,
  T as fn,
  O as pn,
  D as mn,
} from './x-D9UkY--3.js';
import { r as Tt } from './index-Cd_xhWcG.js';
import { D as jt, h as Rr, t as qt, b as Nr } from './restfull-BlxvnBuj.js';
import { u as Ee } from './useTranslation-ZsYxALZe.js';
import { _ as Tr, u as jr } from './AuthContext-Cy9VIbgu.js';
import { a as Pr, c as Er, s as Ar, d as Ir } from './firebase-yRvBWTGt.js';
import './index.esm-DEVYYNpo.js';
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kr = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  hn = Pe('check', kr);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _r = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  gn = Pe('chevron-down', _r);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mr = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  Or = Pe('chevron-up', Mr);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dr = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
  Lr = Pe('loader-circle', Dr);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fr = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'M12 5v14', key: 's699le' }],
  ],
  Br = Pe('plus', Fr);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hr = [
    ['path', { d: 'M10 11v6', key: 'nco0om' }],
    ['path', { d: 'M14 11v6', key: 'outv1u' }],
    ['path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', key: 'miytrc' }],
    ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
    ['path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', key: 'e791ji' }],
  ],
  $r = Pe('trash-2', Hr);
function Vr({ value: e, onChange: t }) {
  const n = ['none', 'json', 'form-data', 'raw'];
  return a.jsx('div', {
    className: 'flex items-center gap-2',
    children: n.map((o) => {
      const r = e === o;
      return a.jsx(
        he,
        {
          type: 'button',
          size: 'sm',
          variant: 'outline',
          'aria-pressed': r,
          className: r
            ? 'bg-pink-300 text-purple-700 font-semibold py-2 px-4 rounded-lg shadow-none border border-pink-300'
            : 'bg-pink-200 text-purple-600 hover:bg-yellow-100 font-semibold py-2 px-4 rounded-lg shadow-md',
          onClick: () => t(o),
          children: o,
        },
        o
      );
    }),
  });
}
var Xe = 'Checkbox',
  [Ur, ec] = je(Xe),
  [Wr, Pt] = Ur(Xe);
function qr(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: o,
      defaultChecked: r,
      disabled: i,
      form: s,
      name: c,
      onCheckedChange: l,
      required: f,
      value: u = 'on',
      internal_do_not_use_render: p,
    } = e,
    [y, g] = Me({ prop: n, defaultProp: r ?? !1, onChange: l, caller: Xe }),
    [h, m] = d.useState(null),
    [x, w] = d.useState(null),
    v = d.useRef(!1),
    b = h ? !!s || !!h.closest('form') : !0,
    C = {
      checked: y,
      disabled: i,
      setChecked: g,
      control: h,
      setControl: m,
      name: c,
      form: s,
      value: u,
      hasConsumerStoppedPropagationRef: v,
      required: f,
      defaultChecked: me(r) ? !1 : r,
      isFormControl: b,
      bubbleInput: x,
      setBubbleInput: w,
    };
  return a.jsx(Wr, { scope: t, ...C, children: zr(p) ? p(C) : o });
}
var xn = 'CheckboxTrigger',
  vn = d.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, r) => {
      const {
          control: i,
          value: s,
          disabled: c,
          checked: l,
          required: f,
          setControl: u,
          setChecked: p,
          hasConsumerStoppedPropagationRef: y,
          isFormControl: g,
          bubbleInput: h,
        } = Pt(xn, e),
        m = G(r, u),
        x = d.useRef(l);
      return (
        d.useEffect(() => {
          const w = i?.form;
          if (w) {
            const v = () => p(x.current);
            return (
              w.addEventListener('reset', v),
              () => w.removeEventListener('reset', v)
            );
          }
        }, [i, p]),
        a.jsx(H.button, {
          type: 'button',
          role: 'checkbox',
          'aria-checked': me(l) ? 'mixed' : l,
          'aria-required': f,
          'data-state': Cn(l),
          'data-disabled': c ? '' : void 0,
          disabled: c,
          value: s,
          ...o,
          ref: m,
          onKeyDown: B(t, (w) => {
            w.key === 'Enter' && w.preventDefault();
          }),
          onClick: B(n, (w) => {
            (p((v) => (me(v) ? !0 : !v)),
              h &&
                g &&
                ((y.current = w.isPropagationStopped()),
                y.current || w.stopPropagation()));
          }),
        })
      );
    }
  );
vn.displayName = xn;
var Et = d.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: o,
    checked: r,
    defaultChecked: i,
    required: s,
    disabled: c,
    value: l,
    onCheckedChange: f,
    form: u,
    ...p
  } = e;
  return a.jsx(qr, {
    __scopeCheckbox: n,
    checked: r,
    defaultChecked: i,
    disabled: c,
    required: s,
    onCheckedChange: f,
    name: o,
    form: u,
    value: l,
    internal_do_not_use_render: ({ isFormControl: y }) =>
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(vn, { ...p, ref: t, __scopeCheckbox: n }),
          y && a.jsx(Sn, { __scopeCheckbox: n }),
        ],
      }),
  });
});
Et.displayName = Xe;
var yn = 'CheckboxIndicator',
  wn = d.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e,
      i = Pt(yn, n);
    return a.jsx(dn, {
      present: o || me(i.checked) || i.checked === !0,
      children: a.jsx(H.span, {
        'data-state': Cn(i.checked),
        'data-disabled': i.disabled ? '' : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: 'none', ...e.style },
      }),
    });
  });
wn.displayName = yn;
var bn = 'CheckboxBubbleInput',
  Sn = d.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: o,
        hasConsumerStoppedPropagationRef: r,
        checked: i,
        defaultChecked: s,
        required: c,
        disabled: l,
        name: f,
        value: u,
        form: p,
        bubbleInput: y,
        setBubbleInput: g,
      } = Pt(bn, e),
      h = G(n, g),
      m = cn(i),
      x = ln(o);
    d.useEffect(() => {
      const v = y;
      if (!v) return;
      const b = window.HTMLInputElement.prototype,
        S = Object.getOwnPropertyDescriptor(b, 'checked').set,
        T = !r.current;
      if (m !== i && S) {
        const R = new Event('click', { bubbles: T });
        ((v.indeterminate = me(i)),
          S.call(v, me(i) ? !1 : i),
          v.dispatchEvent(R));
      }
    }, [y, m, i, r]);
    const w = d.useRef(me(i) ? !1 : i);
    return a.jsx(H.input, {
      type: 'checkbox',
      'aria-hidden': !0,
      defaultChecked: s ?? w.current,
      required: c,
      disabled: l,
      name: f,
      value: u,
      form: p,
      ...t,
      tabIndex: -1,
      ref: h,
      style: {
        ...t.style,
        ...x,
        position: 'absolute',
        pointerEvents: 'none',
        opacity: 0,
        margin: 0,
        transform: 'translateX(-100%)',
      },
    });
  });
Sn.displayName = bn;
function zr(e) {
  return typeof e == 'function';
}
function me(e) {
  return e === 'indeterminate';
}
function Cn(e) {
  return me(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
const Rn = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Et, {
    ref: n,
    className: z(
      'peer h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none',
      'border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500',
      'bg-pink-200',
      'data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500 data-[state=checked]:text-white',
      'disabled:cursor-not-allowed disabled:opacity-50',
      e
    ),
    ...t,
    children: a.jsx(wn, {
      className: z('flex items-center justify-center text-current'),
      children: a.jsx(hn, { className: 'h-4 w-4' }),
    }),
  })
);
Rn.displayName = Et.displayName;
const qe = d.forwardRef(({ className: e, type: t, ...n }, o) =>
  a.jsx('input', {
    type: t,
    className: z(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      e
    ),
    ref: o,
    ...n,
  })
);
qe.displayName = 'Input';
function lt(e) {
  return e.map((t) => ({ ...t, id: t.id || Nn(), enabled: t.enabled ?? !0 }));
}
function Gr(e = '', t = '') {
  return { id: Nn(), enabled: !0, key: e, value: t };
}
function Nn() {
  return Math.random().toString(36).slice(2, 10);
}
function Kr(e) {
  try {
    return (new URL(e), !0);
  } catch {
    return !1;
  }
}
function Jr(e) {
  if (e.trim())
    try {
      JSON.parse(e);
      return;
    } catch (t) {
      return `JSON error: ${t instanceof Error ? t.message : String(t)}`;
    }
}
function Yr(e) {
  try {
    return JSON.stringify(JSON.parse(e), null, 2);
  } catch {
    return e;
  }
}
function dt({ rows: e, onChange: t, addLabel: n }) {
  const o = (s, c) => {
      t(e.map((l) => (l.id === s ? { ...l, ...c } : l)));
    },
    r = (s) => {
      t(e.filter((c) => c.id !== s));
    },
    i = () => {
      t([...e, Gr()]);
    };
  return a.jsxs('div', {
    className: 'w-full space-y-2',
    children: [
      a.jsx('div', {
        className: 'space-y-2',
        children: e.map((s) =>
          a.jsxs(
            'div',
            {
              className: 'flex items-center gap-4',
              children: [
                a.jsx(Rn, {
                  className: `
                  h-5 w-5
                  bg-pink-300 border-pink-300
                  data-[state=checked]:bg-pink-300 data-[state=checked]:border-pink-300
                  focus-visible:outline-none outline-none
                  focus-visible:ring-0 ring-0 ring-offset-0
                  shadow-none
                `,
                  checked: s.enabled,
                  onCheckedChange: (c) => o(s.id, { enabled: c === !0 }),
                }),
                a.jsx(qe, {
                  value: s.key,
                  onChange: (c) => {
                    o(s.id, { key: c.target.value });
                  },
                  placeholder: 'Key',
                  className:
                    'border-pink-300 focus-visible:ring-pink-500 caret-pink-600 placeholder-pink-300/70',
                }),
                a.jsx(qe, {
                  value: s.value,
                  onChange: (c) => {
                    o(s.id, { value: c.target.value });
                  },
                  placeholder: 'Value',
                  className:
                    'border-pink-300 focus-visible:ring-pink-500 caret-pink-600 placeholder-pink-300/70',
                }),
                a.jsx(he, {
                  variant: 'ghost',
                  size: 'icon',
                  type: 'button',
                  onClick: () => {
                    r(s.id);
                  },
                  className: `
                cursor-pointer
                bg-transparent hover:bg-transparent active:bg-transparent
                text-pink-600 hover:text-pink-700
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 focus-visible:ring-offset-2
                transition-colors
              `,
                  children: a.jsx($r, { className: 'h-4 w-4' }),
                }),
              ],
            },
            s.id
          )
        ),
      }),
      a.jsx('div', {
        children: a.jsxs(he, {
          variant: 'outline',
          className:
            'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
          size: 'sm',
          type: 'button',
          onClick: i,
          children: [a.jsx(Br, { className: 'mr-2 h-4 w-4' }), ' ', n],
        }),
      }),
    ],
  });
}
function zt(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Tn(e) {
  const t = e + 'CollectionProvider',
    [n, o] = je(t),
    [r, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: x, children: w } = m,
        v = be.useRef(null),
        b = be.useRef(new Map()).current;
      return a.jsx(r, { scope: x, itemMap: b, collectionRef: v, children: w });
    };
  s.displayName = t;
  const c = e + 'CollectionSlot',
    l = mt(c),
    f = be.forwardRef((m, x) => {
      const { scope: w, children: v } = m,
        b = i(c, w),
        C = G(x, b.collectionRef);
      return a.jsx(l, { ref: C, children: v });
    });
  f.displayName = c;
  const u = e + 'CollectionItemSlot',
    p = 'data-radix-collection-item',
    y = mt(u),
    g = be.forwardRef((m, x) => {
      const { scope: w, children: v, ...b } = m,
        C = be.useRef(null),
        S = G(x, C),
        T = i(u, w);
      return (
        be.useEffect(
          () => (
            T.itemMap.set(C, { ref: C, ...b }),
            () => void T.itemMap.delete(C)
          )
        ),
        a.jsx(y, { [p]: '', ref: S, children: v })
      );
    });
  g.displayName = u;
  function h(m) {
    const x = i(e + 'CollectionConsumer', m);
    return be.useCallback(() => {
      const v = x.collectionRef.current;
      if (!v) return [];
      const b = Array.from(v.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (T, R) => b.indexOf(T.ref.current) - b.indexOf(R.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: f, ItemSlot: g }, h, o];
}
var Xr = d.createContext(void 0);
function At(e) {
  const t = d.useContext(Xr);
  return e || t || 'ltr';
}
const Zr = ['top', 'right', 'bottom', 'left'],
  ge = Math.min,
  J = Math.max,
  ze = Math.round,
  $e = Math.floor,
  se = (e) => ({ x: e, y: e }),
  Qr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  es = { start: 'end', end: 'start' };
function ht(e, t, n) {
  return J(e, ge(t, n));
}
function fe(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function pe(e) {
  return e.split('-')[0];
}
function Ae(e) {
  return e.split('-')[1];
}
function It(e) {
  return e === 'x' ? 'y' : 'x';
}
function kt(e) {
  return e === 'y' ? 'height' : 'width';
}
const ts = new Set(['top', 'bottom']);
function re(e) {
  return ts.has(pe(e)) ? 'y' : 'x';
}
function _t(e) {
  return It(re(e));
}
function ns(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ae(e),
    r = _t(e),
    i = kt(r);
  let s =
    r === 'x'
      ? o === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : o === 'start'
        ? 'bottom'
        : 'top';
  return (t.reference[i] > t.floating[i] && (s = Ge(s)), [s, Ge(s)]);
}
function os(e) {
  const t = Ge(e);
  return [gt(e), t, gt(t)];
}
function gt(e) {
  return e.replace(/start|end/g, (t) => es[t]);
}
const Gt = ['left', 'right'],
  Kt = ['right', 'left'],
  rs = ['top', 'bottom'],
  ss = ['bottom', 'top'];
function is(e, t, n) {
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? Kt : Gt) : t ? Gt : Kt;
    case 'left':
    case 'right':
      return t ? rs : ss;
    default:
      return [];
  }
}
function as(e, t, n, o) {
  const r = Ae(e);
  let i = is(pe(e), n === 'start', o);
  return (
    r && ((i = i.map((s) => s + '-' + r)), t && (i = i.concat(i.map(gt)))),
    i
  );
}
function Ge(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qr[t]);
}
function cs(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function jn(e) {
  return typeof e != 'number'
    ? cs(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ke(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n,
  };
}
function Jt(e, t, n) {
  let { reference: o, floating: r } = e;
  const i = re(t),
    s = _t(t),
    c = kt(s),
    l = pe(t),
    f = i === 'y',
    u = o.x + o.width / 2 - r.width / 2,
    p = o.y + o.height / 2 - r.height / 2,
    y = o[c] / 2 - r[c] / 2;
  let g;
  switch (l) {
    case 'top':
      g = { x: u, y: o.y - r.height };
      break;
    case 'bottom':
      g = { x: u, y: o.y + o.height };
      break;
    case 'right':
      g = { x: o.x + o.width, y: p };
      break;
    case 'left':
      g = { x: o.x - r.width, y: p };
      break;
    default:
      g = { x: o.x, y: o.y };
  }
  switch (Ae(t)) {
    case 'start':
      g[s] -= y * (n && f ? -1 : 1);
      break;
    case 'end':
      g[s] += y * (n && f ? -1 : 1);
      break;
  }
  return g;
}
const ls = async (e, t, n) => {
  const {
      placement: o = 'bottom',
      strategy: r = 'absolute',
      middleware: i = [],
      platform: s,
    } = n,
    c = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: u, y: p } = Jt(f, o, l),
    y = o,
    g = {},
    h = 0;
  for (let m = 0; m < c.length; m++) {
    const { name: x, fn: w } = c[m],
      {
        x: v,
        y: b,
        data: C,
        reset: S,
      } = await w({
        x: u,
        y: p,
        initialPlacement: o,
        placement: y,
        strategy: r,
        middlewareData: g,
        rects: f,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((u = v ?? u),
      (p = b ?? p),
      (g = { ...g, [x]: { ...g[x], ...C } }),
      S &&
        h <= 50 &&
        (h++,
        typeof S == 'object' &&
          (S.placement && (y = S.placement),
          S.rects &&
            (f =
              S.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : S.rects),
          ({ x: u, y: p } = Jt(f, y, l))),
        (m = -1)));
  }
  return { x: u, y: p, placement: y, strategy: r, middlewareData: g };
};
async function Oe(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: i, rects: s, elements: c, strategy: l } = e,
    {
      boundary: f = 'clippingAncestors',
      rootBoundary: u = 'viewport',
      elementContext: p = 'floating',
      altBoundary: y = !1,
      padding: g = 0,
    } = fe(t, e),
    h = jn(g),
    x = c[y ? (p === 'floating' ? 'reference' : 'floating') : p],
    w = Ke(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(c.floating))),
        boundary: f,
        rootBoundary: u,
        strategy: l,
      })
    ),
    v =
      p === 'floating'
        ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(c.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Ke(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: v,
            offsetParent: b,
            strategy: l,
          })
        : v
    );
  return {
    top: (w.top - S.top + h.top) / C.y,
    bottom: (S.bottom - w.bottom + h.bottom) / C.y,
    left: (w.left - S.left + h.left) / C.x,
    right: (S.right - w.right + h.right) / C.x,
  };
}
const ds = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: i,
          platform: s,
          elements: c,
          middlewareData: l,
        } = t,
        { element: f, padding: u = 0 } = fe(e, t) || {};
      if (f == null) return {};
      const p = jn(u),
        y = { x: n, y: o },
        g = _t(r),
        h = kt(g),
        m = await s.getDimensions(f),
        x = g === 'y',
        w = x ? 'top' : 'left',
        v = x ? 'bottom' : 'right',
        b = x ? 'clientHeight' : 'clientWidth',
        C = i.reference[h] + i.reference[g] - y[g] - i.floating[h],
        S = y[g] - i.reference[g],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
      let R = T ? T[b] : 0;
      (!R || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (R = c.floating[b] || i.floating[h]);
      const P = C / 2 - S / 2,
        A = R / 2 - m[h] / 2 - 1,
        k = ge(p[w], A),
        I = ge(p[v], A),
        _ = k,
        M = R - m[h] - I,
        O = R / 2 - m[h] / 2 + P,
        F = ht(_, O, M),
        j =
          !l.arrow &&
          Ae(r) != null &&
          O !== F &&
          i.reference[h] / 2 - (O < _ ? k : I) - m[h] / 2 < 0,
        D = j ? (O < _ ? O - _ : O - M) : 0;
      return {
        [g]: y[g] + D,
        data: {
          [g]: F,
          centerOffset: O - F - D,
          ...(j && { alignmentOffset: D }),
        },
        reset: j,
      };
    },
  }),
  us = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: i,
              rects: s,
              initialPlacement: c,
              platform: l,
              elements: f,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: p = !0,
              fallbackPlacements: y,
              fallbackStrategy: g = 'bestFit',
              fallbackAxisSideDirection: h = 'none',
              flipAlignment: m = !0,
              ...x
            } = fe(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const w = pe(r),
            v = re(c),
            b = pe(c) === c,
            C = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)),
            S = y || (b || !m ? [Ge(c)] : os(c)),
            T = h !== 'none';
          !y && T && S.push(...as(c, m, h, C));
          const R = [c, ...S],
            P = await Oe(t, x),
            A = [];
          let k = ((o = i.flip) == null ? void 0 : o.overflows) || [];
          if ((u && A.push(P[w]), p)) {
            const O = ns(r, s, C);
            A.push(P[O[0]], P[O[1]]);
          }
          if (
            ((k = [...k, { placement: r, overflows: A }]),
            !A.every((O) => O <= 0))
          ) {
            var I, _;
            const O = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1,
              F = R[O];
            if (
              F &&
              (!(p === 'alignment' ? v !== re(F) : !1) ||
                k.every((E) =>
                  re(E.placement) === v ? E.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: O, overflows: k },
                reset: { placement: F },
              };
            let j =
              (_ = k
                .filter((D) => D.overflows[0] <= 0)
                .sort((D, E) => D.overflows[1] - E.overflows[1])[0]) == null
                ? void 0
                : _.placement;
            if (!j)
              switch (g) {
                case 'bestFit': {
                  var M;
                  const D =
                    (M = k
                      .filter((E) => {
                        if (T) {
                          const L = re(E.placement);
                          return L === v || L === 'y';
                        }
                        return !0;
                      })
                      .map((E) => [
                        E.placement,
                        E.overflows
                          .filter((L) => L > 0)
                          .reduce((L, W) => L + W, 0),
                      ])
                      .sort((E, L) => E[1] - L[1])[0]) == null
                      ? void 0
                      : M[0];
                  D && (j = D);
                  break;
                }
                case 'initialPlacement':
                  j = c;
                  break;
              }
            if (r !== j) return { reset: { placement: j } };
          }
          return {};
        },
      }
    );
  };
function Yt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xt(e) {
  return Zr.some((t) => e[t] >= 0);
}
const fs = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'hide',
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: o = 'referenceHidden', ...r } = fe(e, t);
          switch (o) {
            case 'referenceHidden': {
              const i = await Oe(t, { ...r, elementContext: 'reference' }),
                s = Yt(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Xt(s) },
              };
            }
            case 'escaped': {
              const i = await Oe(t, { ...r, altBoundary: !0 }),
                s = Yt(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Xt(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Pn = new Set(['left', 'top']);
async function ps(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = pe(n),
    c = Ae(n),
    l = re(n) === 'y',
    f = Pn.has(s) ? -1 : 1,
    u = i && l ? -1 : 1,
    p = fe(t, e);
  let {
    mainAxis: y,
    crossAxis: g,
    alignmentAxis: h,
  } = typeof p == 'number'
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    c && typeof h == 'number' && (g = c === 'end' ? h * -1 : h),
    l ? { x: g * u, y: y * f } : { x: y * f, y: g * u }
  );
}
const ms = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: i, placement: s, middlewareData: c } = t,
            l = await ps(t, e);
          return s === ((n = c.offset) == null ? void 0 : n.placement) &&
            (o = c.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  hs = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (x) => {
                  let { x: w, y: v } = x;
                  return { x: w, y: v };
                },
              },
              ...l
            } = fe(e, t),
            f = { x: n, y: o },
            u = await Oe(t, l),
            p = re(pe(r)),
            y = It(p);
          let g = f[y],
            h = f[p];
          if (i) {
            const x = y === 'y' ? 'top' : 'left',
              w = y === 'y' ? 'bottom' : 'right',
              v = g + u[x],
              b = g - u[w];
            g = ht(v, g, b);
          }
          if (s) {
            const x = p === 'y' ? 'top' : 'left',
              w = p === 'y' ? 'bottom' : 'right',
              v = h + u[x],
              b = h - u[w];
            h = ht(v, h, b);
          }
          const m = c.fn({ ...t, [y]: g, [p]: h });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - o, enabled: { [y]: i, [p]: s } },
          };
        },
      }
    );
  },
  gs = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: i, middlewareData: s } = t,
            { offset: c = 0, mainAxis: l = !0, crossAxis: f = !0 } = fe(e, t),
            u = { x: n, y: o },
            p = re(r),
            y = It(p);
          let g = u[y],
            h = u[p];
          const m = fe(c, t),
            x =
              typeof m == 'number'
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (l) {
            const b = y === 'y' ? 'height' : 'width',
              C = i.reference[y] - i.floating[b] + x.mainAxis,
              S = i.reference[y] + i.reference[b] - x.mainAxis;
            g < C ? (g = C) : g > S && (g = S);
          }
          if (f) {
            var w, v;
            const b = y === 'y' ? 'width' : 'height',
              C = Pn.has(pe(r)),
              S =
                i.reference[p] -
                i.floating[b] +
                ((C && ((w = s.offset) == null ? void 0 : w[p])) || 0) +
                (C ? 0 : x.crossAxis),
              T =
                i.reference[p] +
                i.reference[b] +
                (C ? 0 : ((v = s.offset) == null ? void 0 : v[p]) || 0) -
                (C ? x.crossAxis : 0);
            h < S ? (h = S) : h > T && (h = T);
          }
          return { [y]: g, [p]: h };
        },
      }
    );
  },
  xs = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: i, platform: s, elements: c } = t,
            { apply: l = () => {}, ...f } = fe(e, t),
            u = await Oe(t, f),
            p = pe(r),
            y = Ae(r),
            g = re(r) === 'y',
            { width: h, height: m } = i.floating;
          let x, w;
          p === 'top' || p === 'bottom'
            ? ((x = p),
              (w =
                y ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(c.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((w = p), (x = y === 'end' ? 'top' : 'bottom'));
          const v = m - u.top - u.bottom,
            b = h - u.left - u.right,
            C = ge(m - u[x], v),
            S = ge(h - u[w], b),
            T = !t.middlewareData.shift;
          let R = C,
            P = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = b),
            (o = t.middlewareData.shift) != null && o.enabled.y && (R = v),
            T && !y)
          ) {
            const k = J(u.left, 0),
              I = J(u.right, 0),
              _ = J(u.top, 0),
              M = J(u.bottom, 0);
            g
              ? (P = h - 2 * (k !== 0 || I !== 0 ? k + I : J(u.left, u.right)))
              : (R = m - 2 * (_ !== 0 || M !== 0 ? _ + M : J(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: R });
          const A = await s.getDimensions(c.floating);
          return h !== A.width || m !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ze() {
  return typeof window < 'u';
}
function Ie(e) {
  return En(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Y(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ce(e) {
  var t;
  return (t = (En(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function En(e) {
  return Ze() ? e instanceof Node || e instanceof Y(e).Node : !1;
}
function ne(e) {
  return Ze() ? e instanceof Element || e instanceof Y(e).Element : !1;
}
function ae(e) {
  return Ze() ? e instanceof HTMLElement || e instanceof Y(e).HTMLElement : !1;
}
function Zt(e) {
  return !Ze() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
const vs = new Set(['inline', 'contents']);
function Be(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !vs.has(r);
}
const ys = new Set(['table', 'td', 'th']);
function ws(e) {
  return ys.has(Ie(e));
}
const bs = [':popover-open', ':modal'];
function Qe(e) {
  return bs.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ss = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  Cs = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  Rs = ['paint', 'layout', 'strict', 'content'];
function Mt(e) {
  const t = Ot(),
    n = ne(e) ? oe(e) : e;
  return (
    Ss.some((o) => (n[o] ? n[o] !== 'none' : !1)) ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    Cs.some((o) => (n.willChange || '').includes(o)) ||
    Rs.some((o) => (n.contain || '').includes(o))
  );
}
function Ns(e) {
  let t = xe(e);
  for (; ae(t) && !Te(t); ) {
    if (Mt(t)) return t;
    if (Qe(t)) return null;
    t = xe(t);
  }
  return null;
}
function Ot() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
const Ts = new Set(['html', 'body', '#document']);
function Te(e) {
  return Ts.has(Ie(e));
}
function oe(e) {
  return Y(e).getComputedStyle(e);
}
function et(e) {
  return ne(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function xe(e) {
  if (Ie(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (Zt(e) && e.host) || ce(e);
  return Zt(t) ? t.host : t;
}
function An(e) {
  const t = xe(e);
  return Te(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ae(t) && Be(t)
      ? t
      : An(t);
}
function De(e, t, n) {
  var o;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const r = An(e),
    i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = Y(r);
  if (i) {
    const c = xt(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Be(r) ? r : [],
      c && n ? De(c) : []
    );
  }
  return t.concat(r, De(r, [], n));
}
function xt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function In(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = ae(e),
    i = r ? e.offsetWidth : n,
    s = r ? e.offsetHeight : o,
    c = ze(n) !== i || ze(o) !== s;
  return (c && ((n = i), (o = s)), { width: n, height: o, $: c });
}
function Dt(e) {
  return ne(e) ? e : e.contextElement;
}
function Ne(e) {
  const t = Dt(e);
  if (!ae(t)) return se(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: i } = In(t);
  let s = (i ? ze(n.width) : n.width) / o,
    c = (i ? ze(n.height) : n.height) / r;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: s, y: c }
  );
}
const js = se(0);
function kn(e) {
  const t = Y(e);
  return !Ot() || !t.visualViewport
    ? js
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ps(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Y(e)) ? !1 : t);
}
function Se(e, t, n, o) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const r = e.getBoundingClientRect(),
    i = Dt(e);
  let s = se(1);
  t && (o ? ne(o) && (s = Ne(o)) : (s = Ne(e)));
  const c = Ps(i, n, o) ? kn(i) : se(0);
  let l = (r.left + c.x) / s.x,
    f = (r.top + c.y) / s.y,
    u = r.width / s.x,
    p = r.height / s.y;
  if (i) {
    const y = Y(i),
      g = o && ne(o) ? Y(o) : o;
    let h = y,
      m = xt(h);
    for (; m && o && g !== h; ) {
      const x = Ne(m),
        w = m.getBoundingClientRect(),
        v = oe(m),
        b = w.left + (m.clientLeft + parseFloat(v.paddingLeft)) * x.x,
        C = w.top + (m.clientTop + parseFloat(v.paddingTop)) * x.y;
      ((l *= x.x),
        (f *= x.y),
        (u *= x.x),
        (p *= x.y),
        (l += b),
        (f += C),
        (h = Y(m)),
        (m = xt(h)));
    }
  }
  return Ke({ width: u, height: p, x: l, y: f });
}
function tt(e, t) {
  const n = et(e).scrollLeft;
  return t ? t.left + n : Se(ce(e)).left + n;
}
function _n(e, t) {
  const n = e.getBoundingClientRect(),
    o = n.left + t.scrollLeft - tt(e, n),
    r = n.top + t.scrollTop;
  return { x: o, y: r };
}
function Es(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const i = r === 'fixed',
    s = ce(o),
    c = t ? Qe(t.floating) : !1;
  if (o === s || (c && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    f = se(1);
  const u = se(0),
    p = ae(o);
  if (
    (p || (!p && !i)) &&
    ((Ie(o) !== 'body' || Be(s)) && (l = et(o)), ae(o))
  ) {
    const g = Se(o);
    ((f = Ne(o)), (u.x = g.x + o.clientLeft), (u.y = g.y + o.clientTop));
  }
  const y = s && !p && !i ? _n(s, l) : se(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - l.scrollLeft * f.x + u.x + y.x,
    y: n.y * f.y - l.scrollTop * f.y + u.y + y.y,
  };
}
function As(e) {
  return Array.from(e.getClientRects());
}
function Is(e) {
  const t = ce(e),
    n = et(e),
    o = e.ownerDocument.body,
    r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    i = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + tt(e);
  const c = -n.scrollTop;
  return (
    oe(o).direction === 'rtl' && (s += J(t.clientWidth, o.clientWidth) - r),
    { width: r, height: i, x: s, y: c }
  );
}
const Qt = 25;
function ks(e, t) {
  const n = Y(e),
    o = ce(e),
    r = n.visualViewport;
  let i = o.clientWidth,
    s = o.clientHeight,
    c = 0,
    l = 0;
  if (r) {
    ((i = r.width), (s = r.height));
    const u = Ot();
    (!u || (u && t === 'fixed')) && ((c = r.offsetLeft), (l = r.offsetTop));
  }
  const f = tt(o);
  if (f <= 0) {
    const u = o.ownerDocument,
      p = u.body,
      y = getComputedStyle(p),
      g =
        (u.compatMode === 'CSS1Compat' &&
          parseFloat(y.marginLeft) + parseFloat(y.marginRight)) ||
        0,
      h = Math.abs(o.clientWidth - p.clientWidth - g);
    h <= Qt && (i -= h);
  } else f <= Qt && (i += f);
  return { width: i, height: s, x: c, y: l };
}
const _s = new Set(['absolute', 'fixed']);
function Ms(e, t) {
  const n = Se(e, !0, t === 'fixed'),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    i = ae(e) ? Ne(e) : se(1),
    s = e.clientWidth * i.x,
    c = e.clientHeight * i.y,
    l = r * i.x,
    f = o * i.y;
  return { width: s, height: c, x: l, y: f };
}
function en(e, t, n) {
  let o;
  if (t === 'viewport') o = ks(e, n);
  else if (t === 'document') o = Is(ce(e));
  else if (ne(t)) o = Ms(t, n);
  else {
    const r = kn(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return Ke(o);
}
function Mn(e, t) {
  const n = xe(e);
  return n === t || !ne(n) || Te(n)
    ? !1
    : oe(n).position === 'fixed' || Mn(n, t);
}
function Os(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = De(e, [], !1).filter((c) => ne(c) && Ie(c) !== 'body'),
    r = null;
  const i = oe(e).position === 'fixed';
  let s = i ? xe(e) : e;
  for (; ne(s) && !Te(s); ) {
    const c = oe(s),
      l = Mt(s);
    (!l && c.position === 'fixed' && (r = null),
      (
        i
          ? !l && !r
          : (!l && c.position === 'static' && !!r && _s.has(r.position)) ||
            (Be(s) && !l && Mn(e, s))
      )
        ? (o = o.filter((u) => u !== s))
        : (r = c),
      (s = xe(s)));
  }
  return (t.set(e, o), o);
}
function Ds(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [
      ...(n === 'clippingAncestors'
        ? Qe(t)
          ? []
          : Os(t, this._c)
        : [].concat(n)),
      o,
    ],
    c = s[0],
    l = s.reduce(
      (f, u) => {
        const p = en(t, u, r);
        return (
          (f.top = J(p.top, f.top)),
          (f.right = ge(p.right, f.right)),
          (f.bottom = ge(p.bottom, f.bottom)),
          (f.left = J(p.left, f.left)),
          f
        );
      },
      en(t, c, r)
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Ls(e) {
  const { width: t, height: n } = In(e);
  return { width: t, height: n };
}
function Fs(e, t, n) {
  const o = ae(t),
    r = ce(t),
    i = n === 'fixed',
    s = Se(e, !0, i, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const l = se(0);
  function f() {
    l.x = tt(r);
  }
  if (o || (!o && !i))
    if (((Ie(t) !== 'body' || Be(r)) && (c = et(t)), o)) {
      const g = Se(t, !0, i, t);
      ((l.x = g.x + t.clientLeft), (l.y = g.y + t.clientTop));
    } else r && f();
  i && !o && r && f();
  const u = r && !o && !i ? _n(r, c) : se(0),
    p = s.left + c.scrollLeft - l.x - u.x,
    y = s.top + c.scrollTop - l.y - u.y;
  return { x: p, y, width: s.width, height: s.height };
}
function ut(e) {
  return oe(e).position === 'static';
}
function tn(e, t) {
  if (!ae(e) || oe(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ce(e) === n && (n = n.ownerDocument.body), n);
}
function On(e, t) {
  const n = Y(e);
  if (Qe(e)) return n;
  if (!ae(e)) {
    let r = xe(e);
    for (; r && !Te(r); ) {
      if (ne(r) && !ut(r)) return r;
      r = xe(r);
    }
    return n;
  }
  let o = tn(e, t);
  for (; o && ws(o) && ut(o); ) o = tn(o, t);
  return o && Te(o) && ut(o) && !Mt(o) ? n : o || Ns(e) || n;
}
const Bs = async function (e) {
  const t = this.getOffsetParent || On,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: Fs(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Hs(e) {
  return oe(e).direction === 'rtl';
}
const $s = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Es,
  getDocumentElement: ce,
  getClippingRect: Ds,
  getOffsetParent: On,
  getElementRects: Bs,
  getClientRects: As,
  getDimensions: Ls,
  getScale: Ne,
  isElement: ne,
  isRTL: Hs,
};
function Dn(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Vs(e, t) {
  let n = null,
    o;
  const r = ce(e);
  function i() {
    var c;
    (clearTimeout(o), (c = n) == null || c.disconnect(), (n = null));
  }
  function s(c, l) {
    (c === void 0 && (c = !1), l === void 0 && (l = 1), i());
    const f = e.getBoundingClientRect(),
      { left: u, top: p, width: y, height: g } = f;
    if ((c || t(), !y || !g)) return;
    const h = $e(p),
      m = $e(r.clientWidth - (u + y)),
      x = $e(r.clientHeight - (p + g)),
      w = $e(u),
      b = {
        rootMargin: -h + 'px ' + -m + 'px ' + -x + 'px ' + -w + 'px',
        threshold: J(0, ge(1, l)) || 1,
      };
    let C = !0;
    function S(T) {
      const R = T[0].intersectionRatio;
      if (R !== l) {
        if (!C) return s();
        R
          ? s(!1, R)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      (R === 1 && !Dn(f, e.getBoundingClientRect()) && s(), (C = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...b, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, b);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function Us(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: l = !1,
    } = o,
    f = Dt(e),
    u = r || i ? [...(f ? De(f) : []), ...De(t)] : [];
  u.forEach((w) => {
    (r && w.addEventListener('scroll', n, { passive: !0 }),
      i && w.addEventListener('resize', n));
  });
  const p = f && c ? Vs(f, n) : null;
  let y = -1,
    g = null;
  s &&
    ((g = new ResizeObserver((w) => {
      let [v] = w;
      (v &&
        v.target === f &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          var b;
          (b = g) == null || b.observe(t);
        }))),
        n());
    })),
    f && !l && g.observe(f),
    g.observe(t));
  let h,
    m = l ? Se(e) : null;
  l && x();
  function x() {
    const w = Se(e);
    (m && !Dn(m, w) && n(), (m = w), (h = requestAnimationFrame(x)));
  }
  return (
    n(),
    () => {
      var w;
      (u.forEach((v) => {
        (r && v.removeEventListener('scroll', n),
          i && v.removeEventListener('resize', n));
      }),
        p?.(),
        (w = g) == null || w.disconnect(),
        (g = null),
        l && cancelAnimationFrame(h));
    }
  );
}
const Ws = ms,
  qs = hs,
  zs = us,
  Gs = xs,
  Ks = fs,
  nn = ds,
  Js = gs,
  Ys = (e, t, n) => {
    const o = new Map(),
      r = { platform: $s, ...n },
      i = { ...r.platform, _c: o };
    return ls(e, t, { ...r, platform: i });
  };
var Xs = typeof document < 'u',
  Zs = function () {},
  Ve = Xs ? d.useLayoutEffect : Zs;
function Je(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, o, r;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!Je(e[o], t[o])) return !1;
      return !0;
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === '_owner' && e.$$typeof) && !Je(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ln(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function on(e, t) {
  const n = Ln(e);
  return Math.round(t * n) / n;
}
function ft(e) {
  const t = d.useRef(e);
  return (
    Ve(() => {
      t.current = e;
    }),
    t
  );
}
function Qs(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: o = [],
      platform: r,
      elements: { reference: i, floating: s } = {},
      transform: c = !0,
      whileElementsMounted: l,
      open: f,
    } = e,
    [u, p] = d.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [y, g] = d.useState(o);
  Je(y, o) || g(o);
  const [h, m] = d.useState(null),
    [x, w] = d.useState(null),
    v = d.useCallback((E) => {
      E !== T.current && ((T.current = E), m(E));
    }, []),
    b = d.useCallback((E) => {
      E !== R.current && ((R.current = E), w(E));
    }, []),
    C = i || h,
    S = s || x,
    T = d.useRef(null),
    R = d.useRef(null),
    P = d.useRef(u),
    A = l != null,
    k = ft(l),
    I = ft(r),
    _ = ft(f),
    M = d.useCallback(() => {
      if (!T.current || !R.current) return;
      const E = { placement: t, strategy: n, middleware: y };
      (I.current && (E.platform = I.current),
        Ys(T.current, R.current, E).then((L) => {
          const W = { ...L, isPositioned: _.current !== !1 };
          O.current &&
            !Je(P.current, W) &&
            ((P.current = W),
            Tt.flushSync(() => {
              p(W);
            }));
        }));
    }, [y, t, n, I, _]);
  Ve(() => {
    f === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), p((E) => ({ ...E, isPositioned: !1 })));
  }, [f]);
  const O = d.useRef(!1);
  (Ve(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    Ve(() => {
      if ((C && (T.current = C), S && (R.current = S), C && S)) {
        if (k.current) return k.current(C, S, M);
        M();
      }
    }, [C, S, M, k, A]));
  const F = d.useMemo(
      () => ({ reference: T, floating: R, setReference: v, setFloating: b }),
      [v, b]
    ),
    j = d.useMemo(() => ({ reference: C, floating: S }), [C, S]),
    D = d.useMemo(() => {
      const E = { position: n, left: 0, top: 0 };
      if (!j.floating) return E;
      const L = on(j.floating, u.x),
        W = on(j.floating, u.y);
      return c
        ? {
            ...E,
            transform: 'translate(' + L + 'px, ' + W + 'px)',
            ...(Ln(j.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: L, top: W };
    }, [n, c, j.floating, u.x, u.y]);
  return d.useMemo(
    () => ({ ...u, update: M, refs: F, elements: j, floatingStyles: D }),
    [u, M, F, j, D]
  );
}
const ei = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: o, padding: r } = typeof e == 'function' ? e(n) : e;
        return o && t(o)
          ? o.current != null
            ? nn({ element: o.current, padding: r }).fn(n)
            : {}
          : o
            ? nn({ element: o, padding: r }).fn(n)
            : {};
      },
    };
  },
  ti = (e, t) => ({ ...Ws(e), options: [e, t] }),
  ni = (e, t) => ({ ...qs(e), options: [e, t] }),
  oi = (e, t) => ({ ...Js(e), options: [e, t] }),
  ri = (e, t) => ({ ...zs(e), options: [e, t] }),
  si = (e, t) => ({ ...Gs(e), options: [e, t] }),
  ii = (e, t) => ({ ...Ks(e), options: [e, t] }),
  ai = (e, t) => ({ ...ei(e), options: [e, t] });
var ci = 'Arrow',
  Fn = d.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...i } = e;
    return a.jsx(H.svg, {
      ...i,
      ref: t,
      width: o,
      height: r,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? n : a.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
Fn.displayName = ci;
var li = Fn,
  Lt = 'Popper',
  [Bn, Hn] = je(Lt),
  [di, $n] = Bn(Lt),
  Vn = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = d.useState(null);
    return a.jsx(di, { scope: t, anchor: o, onAnchorChange: r, children: n });
  };
Vn.displayName = Lt;
var Un = 'PopperAnchor',
  Wn = d.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      i = $n(Un, n),
      s = d.useRef(null),
      c = G(t, s),
      l = d.useRef(null);
    return (
      d.useEffect(() => {
        const f = l.current;
        ((l.current = o?.current || s.current),
          f !== l.current && i.onAnchorChange(l.current));
      }),
      o ? null : a.jsx(H.div, { ...r, ref: c })
    );
  });
Wn.displayName = Un;
var Ft = 'PopperContent',
  [ui, fi] = Bn(Ft),
  qn = d.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: o = 'bottom',
        sideOffset: r = 0,
        align: i = 'center',
        alignOffset: s = 0,
        arrowPadding: c = 0,
        avoidCollisions: l = !0,
        collisionBoundary: f = [],
        collisionPadding: u = 0,
        sticky: p = 'partial',
        hideWhenDetached: y = !1,
        updatePositionStrategy: g = 'optimized',
        onPlaced: h,
        ...m
      } = e,
      x = $n(Ft, n),
      [w, v] = d.useState(null),
      b = G(t, (N) => v(N)),
      [C, S] = d.useState(null),
      T = ln(C),
      R = T?.width ?? 0,
      P = T?.height ?? 0,
      A = o + (i !== 'center' ? '-' + i : ''),
      k =
        typeof u == 'number'
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      I = Array.isArray(f) ? f : [f],
      _ = I.length > 0,
      M = { padding: k, boundary: I.filter(mi), altBoundary: _ },
      {
        refs: O,
        floatingStyles: F,
        placement: j,
        isPositioned: D,
        middlewareData: E,
      } = Qs({
        strategy: 'fixed',
        placement: A,
        whileElementsMounted: (...N) =>
          Us(...N, { animationFrame: g === 'always' }),
        elements: { reference: x.anchor },
        middleware: [
          ti({ mainAxis: r + P, alignmentAxis: s }),
          l &&
            ni({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === 'partial' ? oi() : void 0,
              ...M,
            }),
          l && ri({ ...M }),
          si({
            ...M,
            apply: ({
              elements: N,
              rects: U,
              availableWidth: K,
              availableHeight: $,
            }) => {
              const { width: V, height: q } = U.reference,
                Z = N.floating.style;
              (Z.setProperty('--radix-popper-available-width', `${K}px`),
                Z.setProperty('--radix-popper-available-height', `${$}px`),
                Z.setProperty('--radix-popper-anchor-width', `${V}px`),
                Z.setProperty('--radix-popper-anchor-height', `${q}px`));
            },
          }),
          C && ai({ element: C, padding: c }),
          hi({ arrowWidth: R, arrowHeight: P }),
          y && ii({ strategy: 'referenceHidden', ...M }),
        ],
      }),
      [L, W] = Kn(j),
      Q = Nt(h);
    ie(() => {
      D && Q?.();
    }, [D, Q]);
    const le = E.arrow?.x,
      de = E.arrow?.y,
      X = E.arrow?.centerOffset !== 0,
      [ue, ee] = d.useState();
    return (
      ie(() => {
        w && ee(window.getComputedStyle(w).zIndex);
      }, [w]),
      a.jsx('div', {
        ref: O.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...F,
          transform: D ? F.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: ue,
          '--radix-popper-transform-origin': [
            E.transformOrigin?.x,
            E.transformOrigin?.y,
          ].join(' '),
          ...(E.hide?.referenceHidden && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: e.dir,
        children: a.jsx(ui, {
          scope: n,
          placedSide: L,
          onArrowChange: S,
          arrowX: le,
          arrowY: de,
          shouldHideArrow: X,
          children: a.jsx(H.div, {
            'data-side': L,
            'data-align': W,
            ...m,
            ref: b,
            style: { ...m.style, animation: D ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
qn.displayName = Ft;
var zn = 'PopperArrow',
  pi = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Gn = d.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      i = fi(zn, o),
      s = pi[i.placedSide];
    return a.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: a.jsx(li, {
        ...r,
        ref: n,
        style: { ...r.style, display: 'block' },
      }),
    });
  });
Gn.displayName = zn;
function mi(e) {
  return e !== null;
}
var hi = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t,
      s = r.arrow?.centerOffset !== 0,
      c = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [f, u] = Kn(n),
      p = { start: '0%', center: '50%', end: '100%' }[u],
      y = (r.arrow?.x ?? 0) + c / 2,
      g = (r.arrow?.y ?? 0) + l / 2;
    let h = '',
      m = '';
    return (
      f === 'bottom'
        ? ((h = s ? p : `${y}px`), (m = `${-l}px`))
        : f === 'top'
          ? ((h = s ? p : `${y}px`), (m = `${o.floating.height + l}px`))
          : f === 'right'
            ? ((h = `${-l}px`), (m = s ? p : `${g}px`))
            : f === 'left' &&
              ((h = `${o.floating.width + l}px`), (m = s ? p : `${g}px`)),
      { data: { x: h, y: m } }
    );
  },
});
function Kn(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
var gi = Vn,
  xi = Wn,
  vi = qn,
  yi = Gn,
  Jn = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  wi = 'VisuallyHidden',
  bi = d.forwardRef((e, t) =>
    a.jsx(H.span, { ...e, ref: t, style: { ...Jn, ...e.style } })
  );
bi.displayName = wi;
var Si = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  Ci = [' ', 'Enter'],
  Ce = 'Select',
  [nt, ot, Ri] = Tn(Ce),
  [ke, tc] = je(Ce, [Ri, Hn]),
  rt = Hn(),
  [Ni, ve] = ke(Ce),
  [Ti, ji] = ke(Ce),
  Yn = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: i,
        value: s,
        defaultValue: c,
        onValueChange: l,
        dir: f,
        name: u,
        autoComplete: p,
        disabled: y,
        required: g,
        form: h,
      } = e,
      m = rt(t),
      [x, w] = d.useState(null),
      [v, b] = d.useState(null),
      [C, S] = d.useState(!1),
      T = At(f),
      [R, P] = Me({ prop: o, defaultProp: r ?? !1, onChange: i, caller: Ce }),
      [A, k] = Me({ prop: s, defaultProp: c, onChange: l, caller: Ce }),
      I = d.useRef(null),
      _ = x ? h || !!x.closest('form') : !0,
      [M, O] = d.useState(new Set()),
      F = Array.from(M)
        .map((j) => j.props.value)
        .join(';');
    return a.jsx(gi, {
      ...m,
      children: a.jsxs(Ni, {
        required: g,
        scope: t,
        trigger: x,
        onTriggerChange: w,
        valueNode: v,
        onValueNodeChange: b,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: S,
        contentId: Fe(),
        value: A,
        onValueChange: k,
        open: R,
        onOpenChange: P,
        dir: T,
        triggerPointerDownPosRef: I,
        disabled: y,
        children: [
          a.jsx(nt.Provider, {
            scope: t,
            children: a.jsx(Ti, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: d.useCallback((j) => {
                O((D) => new Set(D).add(j));
              }, []),
              onNativeOptionRemove: d.useCallback((j) => {
                O((D) => {
                  const E = new Set(D);
                  return (E.delete(j), E);
                });
              }, []),
              children: n,
            }),
          }),
          _
            ? a.jsxs(
                bo,
                {
                  'aria-hidden': !0,
                  required: g,
                  tabIndex: -1,
                  name: u,
                  autoComplete: p,
                  value: A,
                  onChange: (j) => k(j.target.value),
                  disabled: y,
                  form: h,
                  children: [
                    A === void 0 ? a.jsx('option', { value: '' }) : null,
                    Array.from(M),
                  ],
                },
                F
              )
            : null,
        ],
      }),
    });
  };
Yn.displayName = Ce;
var Xn = 'SelectTrigger',
  Zn = d.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e,
      i = rt(n),
      s = ve(Xn, n),
      c = s.disabled || o,
      l = G(t, s.onTriggerChange),
      f = ot(n),
      u = d.useRef('touch'),
      [p, y, g] = Co((m) => {
        const x = f().filter((b) => !b.disabled),
          w = x.find((b) => b.value === s.value),
          v = Ro(x, m, w);
        v !== void 0 && s.onValueChange(v.value);
      }),
      h = (m) => {
        (c || (s.onOpenChange(!0), g()),
          m &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(m.pageX),
              y: Math.round(m.pageY),
            }));
      };
    return a.jsx(xi, {
      asChild: !0,
      ...i,
      children: a.jsx(H.button, {
        type: 'button',
        role: 'combobox',
        'aria-controls': s.contentId,
        'aria-expanded': s.open,
        'aria-required': s.required,
        'aria-autocomplete': 'none',
        dir: s.dir,
        'data-state': s.open ? 'open' : 'closed',
        disabled: c,
        'data-disabled': c ? '' : void 0,
        'data-placeholder': So(s.value) ? '' : void 0,
        ...r,
        ref: l,
        onClick: B(r.onClick, (m) => {
          (m.currentTarget.focus(), u.current !== 'mouse' && h(m));
        }),
        onPointerDown: B(r.onPointerDown, (m) => {
          u.current = m.pointerType;
          const x = m.target;
          (x.hasPointerCapture(m.pointerId) &&
            x.releasePointerCapture(m.pointerId),
            m.button === 0 &&
              m.ctrlKey === !1 &&
              m.pointerType === 'mouse' &&
              (h(m), m.preventDefault()));
        }),
        onKeyDown: B(r.onKeyDown, (m) => {
          const x = p.current !== '';
          (!(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            y(m.key),
            !(x && m.key === ' ') &&
              Si.includes(m.key) &&
              (h(), m.preventDefault()));
        }),
      }),
    });
  });
Zn.displayName = Xn;
var Qn = 'SelectValue',
  eo = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: o,
        style: r,
        children: i,
        placeholder: s = '',
        ...c
      } = e,
      l = ve(Qn, n),
      { onValueNodeHasChildrenChange: f } = l,
      u = i !== void 0,
      p = G(t, l.onValueNodeChange);
    return (
      ie(() => {
        f(u);
      }, [f, u]),
      a.jsx(H.span, {
        ...c,
        ref: p,
        style: { pointerEvents: 'none' },
        children: So(l.value) ? a.jsx(a.Fragment, { children: s }) : i,
      })
    );
  });
eo.displayName = Qn;
var Pi = 'SelectIcon',
  to = d.forwardRef((e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return a.jsx(H.span, {
      'aria-hidden': !0,
      ...r,
      ref: t,
      children: o || '▼',
    });
  });
to.displayName = Pi;
var Ei = 'SelectPortal',
  no = (e) => a.jsx(pr, { asChild: !0, ...e });
no.displayName = Ei;
var Re = 'SelectContent',
  oo = d.forwardRef((e, t) => {
    const n = ve(Re, e.__scopeSelect),
      [o, r] = d.useState();
    if (
      (ie(() => {
        r(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const i = o;
      return i
        ? Tt.createPortal(
            a.jsx(ro, {
              scope: e.__scopeSelect,
              children: a.jsx(nt.Slot, {
                scope: e.__scopeSelect,
                children: a.jsx('div', { children: e.children }),
              }),
            }),
            i
          )
        : null;
    }
    return a.jsx(so, { ...e, ref: t });
  });
oo.displayName = Re;
var te = 10,
  [ro, ye] = ke(Re),
  Ai = 'SelectContentImpl',
  Ii = mt('SelectContent.RemoveScroll'),
  so = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: o = 'item-aligned',
        onCloseAutoFocus: r,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: c,
        sideOffset: l,
        align: f,
        alignOffset: u,
        arrowPadding: p,
        collisionBoundary: y,
        collisionPadding: g,
        sticky: h,
        hideWhenDetached: m,
        avoidCollisions: x,
        ...w
      } = e,
      v = ve(Re, n),
      [b, C] = d.useState(null),
      [S, T] = d.useState(null),
      R = G(t, (N) => C(N)),
      [P, A] = d.useState(null),
      [k, I] = d.useState(null),
      _ = ot(n),
      [M, O] = d.useState(!1),
      F = d.useRef(!1);
    (d.useEffect(() => {
      if (b) return mr(b);
    }, [b]),
      hr());
    const j = d.useCallback(
        (N) => {
          const [U, ...K] = _().map((q) => q.ref.current),
            [$] = K.slice(-1),
            V = document.activeElement;
          for (const q of N)
            if (
              q === V ||
              (q?.scrollIntoView({ block: 'nearest' }),
              q === U && S && (S.scrollTop = 0),
              q === $ && S && (S.scrollTop = S.scrollHeight),
              q?.focus(),
              document.activeElement !== V)
            )
              return;
        },
        [_, S]
      ),
      D = d.useCallback(() => j([P, b]), [j, P, b]);
    d.useEffect(() => {
      M && D();
    }, [M, D]);
    const { onOpenChange: E, triggerPointerDownPosRef: L } = v;
    (d.useEffect(() => {
      if (b) {
        let N = { x: 0, y: 0 };
        const U = ($) => {
            N = {
              x: Math.abs(Math.round($.pageX) - (L.current?.x ?? 0)),
              y: Math.abs(Math.round($.pageY) - (L.current?.y ?? 0)),
            };
          },
          K = ($) => {
            (N.x <= 10 && N.y <= 10
              ? $.preventDefault()
              : b.contains($.target) || E(!1),
              document.removeEventListener('pointermove', U),
              (L.current = null));
          };
        return (
          L.current !== null &&
            (document.addEventListener('pointermove', U),
            document.addEventListener('pointerup', K, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener('pointermove', U),
              document.removeEventListener('pointerup', K, { capture: !0 }));
          }
        );
      }
    }, [b, E, L]),
      d.useEffect(() => {
        const N = () => E(!1);
        return (
          window.addEventListener('blur', N),
          window.addEventListener('resize', N),
          () => {
            (window.removeEventListener('blur', N),
              window.removeEventListener('resize', N));
          }
        );
      }, [E]));
    const [W, Q] = Co((N) => {
        const U = _().filter((V) => !V.disabled),
          K = U.find((V) => V.ref.current === document.activeElement),
          $ = Ro(U, N, K);
        $ && setTimeout(() => $.ref.current.focus());
      }),
      le = d.useCallback(
        (N, U, K) => {
          const $ = !F.current && !K;
          ((v.value !== void 0 && v.value === U) || $) &&
            (A(N), $ && (F.current = !0));
        },
        [v.value]
      ),
      de = d.useCallback(() => b?.focus(), [b]),
      X = d.useCallback(
        (N, U, K) => {
          const $ = !F.current && !K;
          ((v.value !== void 0 && v.value === U) || $) && I(N);
        },
        [v.value]
      ),
      ue = o === 'popper' ? vt : io,
      ee =
        ue === vt
          ? {
              side: c,
              sideOffset: l,
              align: f,
              alignOffset: u,
              arrowPadding: p,
              collisionBoundary: y,
              collisionPadding: g,
              sticky: h,
              hideWhenDetached: m,
              avoidCollisions: x,
            }
          : {};
    return a.jsx(ro, {
      scope: n,
      content: b,
      viewport: S,
      onViewportChange: T,
      itemRefCallback: le,
      selectedItem: P,
      onItemLeave: de,
      itemTextRefCallback: X,
      focusSelectedItem: D,
      selectedItemText: k,
      position: o,
      isPositioned: M,
      searchRef: W,
      children: a.jsx(gr, {
        as: Ii,
        allowPinchZoom: !0,
        children: a.jsx(xr, {
          asChild: !0,
          trapped: v.open,
          onMountAutoFocus: (N) => {
            N.preventDefault();
          },
          onUnmountAutoFocus: B(r, (N) => {
            (v.trigger?.focus({ preventScroll: !0 }), N.preventDefault());
          }),
          children: a.jsx(vr, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: (N) => N.preventDefault(),
            onDismiss: () => v.onOpenChange(!1),
            children: a.jsx(ue, {
              role: 'listbox',
              id: v.contentId,
              'data-state': v.open ? 'open' : 'closed',
              dir: v.dir,
              onContextMenu: (N) => N.preventDefault(),
              ...w,
              ...ee,
              onPlaced: () => O(!0),
              ref: R,
              style: {
                display: 'flex',
                flexDirection: 'column',
                outline: 'none',
                ...w.style,
              },
              onKeyDown: B(w.onKeyDown, (N) => {
                const U = N.ctrlKey || N.altKey || N.metaKey;
                if (
                  (N.key === 'Tab' && N.preventDefault(),
                  !U && N.key.length === 1 && Q(N.key),
                  ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(N.key))
                ) {
                  let $ = _()
                    .filter((V) => !V.disabled)
                    .map((V) => V.ref.current);
                  if (
                    (['ArrowUp', 'End'].includes(N.key) &&
                      ($ = $.slice().reverse()),
                    ['ArrowUp', 'ArrowDown'].includes(N.key))
                  ) {
                    const V = N.target,
                      q = $.indexOf(V);
                    $ = $.slice(q + 1);
                  }
                  (setTimeout(() => j($)), N.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
so.displayName = Ai;
var ki = 'SelectItemAlignedPosition',
  io = d.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: o, ...r } = e,
      i = ve(Re, n),
      s = ye(Re, n),
      [c, l] = d.useState(null),
      [f, u] = d.useState(null),
      p = G(t, (R) => u(R)),
      y = ot(n),
      g = d.useRef(!1),
      h = d.useRef(!0),
      {
        viewport: m,
        selectedItem: x,
        selectedItemText: w,
        focusSelectedItem: v,
      } = s,
      b = d.useCallback(() => {
        if (i.trigger && i.valueNode && c && f && m && x && w) {
          const R = i.trigger.getBoundingClientRect(),
            P = f.getBoundingClientRect(),
            A = i.valueNode.getBoundingClientRect(),
            k = w.getBoundingClientRect();
          if (i.dir !== 'rtl') {
            const V = k.left - P.left,
              q = A.left - V,
              Z = R.left - q,
              we = R.width + Z,
              it = Math.max(we, P.width),
              at = window.innerWidth - te,
              ct = zt(q, [te, Math.max(te, at - it)]);
            ((c.style.minWidth = we + 'px'), (c.style.left = ct + 'px'));
          } else {
            const V = P.right - k.right,
              q = window.innerWidth - A.right - V,
              Z = window.innerWidth - R.right - q,
              we = R.width + Z,
              it = Math.max(we, P.width),
              at = window.innerWidth - te,
              ct = zt(q, [te, Math.max(te, at - it)]);
            ((c.style.minWidth = we + 'px'), (c.style.right = ct + 'px'));
          }
          const I = y(),
            _ = window.innerHeight - te * 2,
            M = m.scrollHeight,
            O = window.getComputedStyle(f),
            F = parseInt(O.borderTopWidth, 10),
            j = parseInt(O.paddingTop, 10),
            D = parseInt(O.borderBottomWidth, 10),
            E = parseInt(O.paddingBottom, 10),
            L = F + j + M + E + D,
            W = Math.min(x.offsetHeight * 5, L),
            Q = window.getComputedStyle(m),
            le = parseInt(Q.paddingTop, 10),
            de = parseInt(Q.paddingBottom, 10),
            X = R.top + R.height / 2 - te,
            ue = _ - X,
            ee = x.offsetHeight / 2,
            N = x.offsetTop + ee,
            U = F + j + N,
            K = L - U;
          if (U <= X) {
            const V = I.length > 0 && x === I[I.length - 1].ref.current;
            c.style.bottom = '0px';
            const q = f.clientHeight - m.offsetTop - m.offsetHeight,
              Z = Math.max(ue, ee + (V ? de : 0) + q + D),
              we = U + Z;
            c.style.height = we + 'px';
          } else {
            const V = I.length > 0 && x === I[0].ref.current;
            c.style.top = '0px';
            const Z = Math.max(X, F + m.offsetTop + (V ? le : 0) + ee) + K;
            ((c.style.height = Z + 'px'), (m.scrollTop = U - X + m.offsetTop));
          }
          ((c.style.margin = `${te}px 0`),
            (c.style.minHeight = W + 'px'),
            (c.style.maxHeight = _ + 'px'),
            o?.(),
            requestAnimationFrame(() => (g.current = !0)));
        }
      }, [y, i.trigger, i.valueNode, c, f, m, x, w, i.dir, o]);
    ie(() => b(), [b]);
    const [C, S] = d.useState();
    ie(() => {
      f && S(window.getComputedStyle(f).zIndex);
    }, [f]);
    const T = d.useCallback(
      (R) => {
        R && h.current === !0 && (b(), v?.(), (h.current = !1));
      },
      [b, v]
    );
    return a.jsx(Mi, {
      scope: n,
      contentWrapper: c,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: T,
      children: a.jsx('div', {
        ref: l,
        style: {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          zIndex: C,
        },
        children: a.jsx(H.div, {
          ...r,
          ref: p,
          style: { boxSizing: 'border-box', maxHeight: '100%', ...r.style },
        }),
      }),
    });
  });
io.displayName = ki;
var _i = 'SelectPopperPosition',
  vt = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: o = 'start',
        collisionPadding: r = te,
        ...i
      } = e,
      s = rt(n);
    return a.jsx(vi, {
      ...s,
      ...i,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        boxSizing: 'border-box',
        ...i.style,
        '--radix-select-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-select-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-select-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    });
  });
vt.displayName = _i;
var [Mi, Bt] = ke(Re, {}),
  yt = 'SelectViewport',
  ao = d.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e,
      i = ye(yt, n),
      s = Bt(yt, n),
      c = G(t, i.onViewportChange),
      l = d.useRef(0);
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: o,
        }),
        a.jsx(nt.Slot, {
          scope: n,
          children: a.jsx(H.div, {
            'data-radix-select-viewport': '',
            role: 'presentation',
            ...r,
            ref: c,
            style: {
              position: 'relative',
              flex: 1,
              overflow: 'hidden auto',
              ...r.style,
            },
            onScroll: B(r.onScroll, (f) => {
              const u = f.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: y } = s;
              if (y?.current && p) {
                const g = Math.abs(l.current - u.scrollTop);
                if (g > 0) {
                  const h = window.innerHeight - te * 2,
                    m = parseFloat(p.style.minHeight),
                    x = parseFloat(p.style.height),
                    w = Math.max(m, x);
                  if (w < h) {
                    const v = w + g,
                      b = Math.min(h, v),
                      C = v - b;
                    ((p.style.height = b + 'px'),
                      p.style.bottom === '0px' &&
                        ((u.scrollTop = C > 0 ? C : 0),
                        (p.style.justifyContent = 'flex-end')));
                  }
                }
              }
              l.current = u.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
ao.displayName = yt;
var co = 'SelectGroup',
  [Oi, Di] = ke(co),
  Li = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Fe();
    return a.jsx(Oi, {
      scope: n,
      id: r,
      children: a.jsx(H.div, {
        role: 'group',
        'aria-labelledby': r,
        ...o,
        ref: t,
      }),
    });
  });
Li.displayName = co;
var lo = 'SelectLabel',
  uo = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Di(lo, n);
    return a.jsx(H.div, { id: r.id, ...o, ref: t });
  });
uo.displayName = lo;
var Ye = 'SelectItem',
  [Fi, fo] = ke(Ye),
  po = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: o,
        disabled: r = !1,
        textValue: i,
        ...s
      } = e,
      c = ve(Ye, n),
      l = ye(Ye, n),
      f = c.value === o,
      [u, p] = d.useState(i ?? ''),
      [y, g] = d.useState(!1),
      h = G(t, (v) => l.itemRefCallback?.(v, o, r)),
      m = Fe(),
      x = d.useRef('touch'),
      w = () => {
        r || (c.onValueChange(o), c.onOpenChange(!1));
      };
    if (o === '')
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
      );
    return a.jsx(Fi, {
      scope: n,
      value: o,
      disabled: r,
      textId: m,
      isSelected: f,
      onItemTextChange: d.useCallback((v) => {
        p((b) => b || (v?.textContent ?? '').trim());
      }, []),
      children: a.jsx(nt.ItemSlot, {
        scope: n,
        value: o,
        disabled: r,
        textValue: u,
        children: a.jsx(H.div, {
          role: 'option',
          'aria-labelledby': m,
          'data-highlighted': y ? '' : void 0,
          'aria-selected': f && y,
          'data-state': f ? 'checked' : 'unchecked',
          'aria-disabled': r || void 0,
          'data-disabled': r ? '' : void 0,
          tabIndex: r ? void 0 : -1,
          ...s,
          ref: h,
          onFocus: B(s.onFocus, () => g(!0)),
          onBlur: B(s.onBlur, () => g(!1)),
          onClick: B(s.onClick, () => {
            x.current !== 'mouse' && w();
          }),
          onPointerUp: B(s.onPointerUp, () => {
            x.current === 'mouse' && w();
          }),
          onPointerDown: B(s.onPointerDown, (v) => {
            x.current = v.pointerType;
          }),
          onPointerMove: B(s.onPointerMove, (v) => {
            ((x.current = v.pointerType),
              r
                ? l.onItemLeave?.()
                : x.current === 'mouse' &&
                  v.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: B(s.onPointerLeave, (v) => {
            v.currentTarget === document.activeElement && l.onItemLeave?.();
          }),
          onKeyDown: B(s.onKeyDown, (v) => {
            (l.searchRef?.current !== '' && v.key === ' ') ||
              (Ci.includes(v.key) && w(), v.key === ' ' && v.preventDefault());
          }),
        }),
      }),
    });
  });
po.displayName = Ye;
var _e = 'SelectItemText',
  mo = d.forwardRef((e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...i } = e,
      s = ve(_e, n),
      c = ye(_e, n),
      l = fo(_e, n),
      f = ji(_e, n),
      [u, p] = d.useState(null),
      y = G(
        t,
        (w) => p(w),
        l.onItemTextChange,
        (w) => c.itemTextRefCallback?.(w, l.value, l.disabled)
      ),
      g = u?.textContent,
      h = d.useMemo(
        () =>
          a.jsx(
            'option',
            { value: l.value, disabled: l.disabled, children: g },
            l.value
          ),
        [l.disabled, l.value, g]
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: x } = f;
    return (
      ie(() => (m(h), () => x(h)), [m, x, h]),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(H.span, { id: l.textId, ...i, ref: y }),
          l.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? Tt.createPortal(i.children, s.valueNode)
            : null,
        ],
      })
    );
  });
mo.displayName = _e;
var ho = 'SelectItemIndicator',
  go = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return fo(ho, n).isSelected
      ? a.jsx(H.span, { 'aria-hidden': !0, ...o, ref: t })
      : null;
  });
go.displayName = ho;
var wt = 'SelectScrollUpButton',
  xo = d.forwardRef((e, t) => {
    const n = ye(wt, e.__scopeSelect),
      o = Bt(wt, e.__scopeSelect),
      [r, i] = d.useState(!1),
      s = G(t, o.onScrollButtonChange);
    return (
      ie(() => {
        if (n.viewport && n.isPositioned) {
          let c = function () {
            const f = l.scrollTop > 0;
            i(f);
          };
          const l = n.viewport;
          return (
            c(),
            l.addEventListener('scroll', c),
            () => l.removeEventListener('scroll', c)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? a.jsx(yo, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: c, selectedItem: l } = n;
              c && l && (c.scrollTop = c.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
xo.displayName = wt;
var bt = 'SelectScrollDownButton',
  vo = d.forwardRef((e, t) => {
    const n = ye(bt, e.__scopeSelect),
      o = Bt(bt, e.__scopeSelect),
      [r, i] = d.useState(!1),
      s = G(t, o.onScrollButtonChange);
    return (
      ie(() => {
        if (n.viewport && n.isPositioned) {
          let c = function () {
            const f = l.scrollHeight - l.clientHeight,
              u = Math.ceil(l.scrollTop) < f;
            i(u);
          };
          const l = n.viewport;
          return (
            c(),
            l.addEventListener('scroll', c),
            () => l.removeEventListener('scroll', c)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? a.jsx(yo, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: c, selectedItem: l } = n;
              c && l && (c.scrollTop = c.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
vo.displayName = bt;
var yo = d.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
      i = ye('SelectScrollButton', n),
      s = d.useRef(null),
      c = ot(n),
      l = d.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      d.useEffect(() => () => l(), [l]),
      ie(() => {
        c()
          .find((u) => u.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: 'nearest' });
      }, [c]),
      a.jsx(H.div, {
        'aria-hidden': !0,
        ...r,
        ref: t,
        style: { flexShrink: 0, ...r.style },
        onPointerDown: B(r.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(o, 50));
        }),
        onPointerMove: B(r.onPointerMove, () => {
          (i.onItemLeave?.(),
            s.current === null && (s.current = window.setInterval(o, 50)));
        }),
        onPointerLeave: B(r.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  Bi = 'SelectSeparator',
  wo = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return a.jsx(H.div, { 'aria-hidden': !0, ...o, ref: t });
  });
wo.displayName = Bi;
var St = 'SelectArrow',
  Hi = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = rt(n),
      i = ve(St, n),
      s = ye(St, n);
    return i.open && s.position === 'popper'
      ? a.jsx(yi, { ...r, ...o, ref: t })
      : null;
  });
Hi.displayName = St;
var $i = 'SelectBubbleInput',
  bo = d.forwardRef(({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = d.useRef(null),
      i = G(o, r),
      s = cn(t);
    return (
      d.useEffect(() => {
        const c = r.current;
        if (!c) return;
        const l = window.HTMLSelectElement.prototype,
          u = Object.getOwnPropertyDescriptor(l, 'value').set;
        if (s !== t && u) {
          const p = new Event('change', { bubbles: !0 });
          (u.call(c, t), c.dispatchEvent(p));
        }
      }, [s, t]),
      a.jsx(H.select, {
        ...n,
        style: { ...Jn, ...n.style },
        ref: i,
        defaultValue: t,
      })
    );
  });
bo.displayName = $i;
function So(e) {
  return e === '' || e === void 0;
}
function Co(e) {
  const t = Nt(e),
    n = d.useRef(''),
    o = d.useRef(0),
    r = d.useCallback(
      (s) => {
        const c = n.current + s;
        (t(c),
          (function l(f) {
            ((n.current = f),
              window.clearTimeout(o.current),
              f !== '' && (o.current = window.setTimeout(() => l(''), 1e3)));
          })(c));
      },
      [t]
    ),
    i = d.useCallback(() => {
      ((n.current = ''), window.clearTimeout(o.current));
    }, []);
  return (
    d.useEffect(() => () => window.clearTimeout(o.current), []),
    [n, r, i]
  );
}
function Ro(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = Vi(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((f) => f !== n));
  const l = s.find((f) =>
    f.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Vi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Ui = Yn,
  No = Zn,
  Wi = eo,
  qi = to,
  zi = no,
  To = oo,
  Gi = ao,
  jo = uo,
  Po = po,
  Ki = mo,
  Ji = go,
  Eo = xo,
  Ao = vo,
  Io = wo;
const ko = Ui,
  _o = Wi,
  Ht = d.forwardRef(({ className: e, children: t, ...n }, o) =>
    a.jsxs(No, {
      ref: o,
      className: z(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        e
      ),
      ...n,
      children: [
        t,
        a.jsx(qi, {
          asChild: !0,
          children: a.jsx(gn, { className: 'h-4 w-4 opacity-50' }),
        }),
      ],
    })
  );
Ht.displayName = No.displayName;
const Mo = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Eo, {
    ref: n,
    className: z('flex cursor-default items-center justify-center py-1', e),
    ...t,
    children: a.jsx(Or, { className: 'h-4 w-4' }),
  })
);
Mo.displayName = Eo.displayName;
const Oo = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Ao, {
    ref: n,
    className: z('flex cursor-default items-center justify-center py-1', e),
    ...t,
    children: a.jsx(gn, { className: 'h-4 w-4' }),
  })
);
Oo.displayName = Ao.displayName;
const $t = d.forwardRef(
  ({ className: e, children: t, position: n = 'popper', ...o }, r) =>
    a.jsx(zi, {
      children: a.jsxs(To, {
        ref: r,
        className: z(
          'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
          n === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          e
        ),
        position: n,
        ...o,
        children: [
          a.jsx(Mo, {}),
          a.jsx(Gi, {
            className: z(
              'p-1',
              n === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            ),
            children: t,
          }),
          a.jsx(Oo, {}),
        ],
      }),
    })
);
$t.displayName = To.displayName;
const Yi = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(jo, {
    ref: n,
    className: z('px-2 py-1.5 text-sm font-semibold', e),
    ...t,
  })
);
Yi.displayName = jo.displayName;
const Vt = d.forwardRef(({ className: e, children: t, ...n }, o) =>
  a.jsxs(Po, {
    ref: o,
    className: z(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    ...n,
    children: [
      a.jsx('span', {
        className:
          'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        children: a.jsx(Ji, { children: a.jsx(hn, { className: 'h-4 w-4' }) }),
      }),
      a.jsx(Ki, { children: t }),
    ],
  })
);
Vt.displayName = Po.displayName;
const Xi = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Io, { ref: n, className: z('-mx-1 my-1 h-px bg-muted', e), ...t })
);
Xi.displayName = Io.displayName;
const Zi = (e) =>
    e < 200
      ? 'bg-blue-600'
      : e < 300
        ? 'bg-green-600'
        : e < 400
          ? 'bg-orange-500'
          : e < 500
            ? 'bg-red-600'
            : 'bg-rose-600',
  rn = (e) => {
    switch (e) {
      case 'GET':
        return 'text-green-600';
      case 'POST':
        return 'text-orange-600';
      case 'PUT':
        return 'text-yellow-600';
      case 'PATCH':
        return 'text-purple-600';
      case 'DELETE':
        return 'text-rose-600';
      case 'HEAD':
        return 'text-slate-600';
      case 'OPTIONS':
        return 'text-blue-600';
      default:
        return '';
    }
  };
function Qi({
  method: e = 'GET',
  url: t = '',
  methods: n = jt,
  loading: o = !1,
  validateUrl: r = !0,
  className: i = '',
  onChange: s,
  onSend: c,
}) {
  const { t: l } = Ee(),
    [f, u] = d.useState(e),
    [p, y] = d.useState(t),
    [g, h] = d.useState(!1);
  (d.useEffect(() => {
    u(e);
  }, [e]),
    d.useEffect(() => {
      y(t);
    }, [t]));
  const m = (C) => {
      try {
        return (new URL(C), !0);
      } catch {
        return !1;
      }
    },
    x = d.useMemo(() => (!r || !g ? !0 : m(p)), [p, g, r]),
    w = (C) => {
      (C?.preventDefault(), c?.({ method: f, url: p }));
    },
    v = (C) => {
      const S = C;
      (u(S), s?.({ method: S, url: p }));
    },
    b = (C) => {
      (g || h(!0), y(C), s?.({ method: f, url: C }));
    };
  return a.jsx('form', {
    onSubmit: w,
    className: `w-full ${i}`,
    children: a.jsxs('div', {
      className: 'w-full flex items-center gap-2',
      children: [
        a.jsxs(ko, {
          value: f,
          disabled: o,
          onValueChange: v,
          children: [
            a.jsx(Ht, {
              className: 'w-[130px]',
              children: a.jsx('div', {
                className: `flex items-center gap-2 ${rn(f)}`,
                children: a.jsx(_o, {}),
              }),
            }),
            a.jsx($t, {
              className: 'z-50',
              children: n.map((C) =>
                a.jsx(
                  Vt,
                  {
                    value: C,
                    children: a.jsx('div', {
                      className: 'flex items-center gap-2',
                      children: a.jsx('span', {
                        className: rn(C),
                        children: C,
                      }),
                    }),
                  },
                  C
                )
              ),
            }),
          ],
        }),
        a.jsx(qe, {
          placeholder: 'https://api.example.com/endpoint',
          value: p,
          disabled: o,
          onChange: (C) => {
            b(C.target.value);
          },
          className: `h-9 w-full rounded-md border px-3 text-base shadow-sm
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
            disabled:cursor-not-allowed disabled:opacity-50
            ${x ? 'border-pink-300' : 'border-pink-500'}
          `,
        }),
        a.jsxs(he, {
          className:
            'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
          type: 'submit',
          disabled: o || !x,
          children: [
            !!o && a.jsx(Lr, { className: 'mr-2 h-4 w-4 animate-spin' }),
            l('buttons.send'),
          ],
        }),
      ],
    }),
  });
}
var pt = 'rovingFocusGroup.onEntryFocus',
  ea = { bubbles: !1, cancelable: !0 },
  He = 'RovingFocusGroup',
  [Ct, Do, ta] = Tn(He),
  [na, Lo] = je(He, [ta]),
  [oa, ra] = na(He),
  Fo = d.forwardRef((e, t) =>
    a.jsx(Ct.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: a.jsx(Ct.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: a.jsx(sa, { ...e, ref: t }),
      }),
    })
  );
Fo.displayName = He;
var sa = d.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: o,
        loop: r = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: l,
        onEntryFocus: f,
        preventScrollOnEntryFocus: u = !1,
        ...p
      } = e,
      y = d.useRef(null),
      g = G(t, y),
      h = At(i),
      [m, x] = Me({ prop: s, defaultProp: c ?? null, onChange: l, caller: He }),
      [w, v] = d.useState(!1),
      b = Nt(f),
      C = Do(n),
      S = d.useRef(!1),
      [T, R] = d.useState(0);
    return (
      d.useEffect(() => {
        const P = y.current;
        if (P)
          return (
            P.addEventListener(pt, b),
            () => P.removeEventListener(pt, b)
          );
      }, [b]),
      a.jsx(oa, {
        scope: n,
        orientation: o,
        dir: h,
        loop: r,
        currentTabStopId: m,
        onItemFocus: d.useCallback((P) => x(P), [x]),
        onItemShiftTab: d.useCallback(() => v(!0), []),
        onFocusableItemAdd: d.useCallback(() => R((P) => P + 1), []),
        onFocusableItemRemove: d.useCallback(() => R((P) => P - 1), []),
        children: a.jsx(H.div, {
          tabIndex: w || T === 0 ? -1 : 0,
          'data-orientation': o,
          ...p,
          ref: g,
          style: { outline: 'none', ...e.style },
          onMouseDown: B(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: B(e.onFocus, (P) => {
            const A = !S.current;
            if (P.target === P.currentTarget && A && !w) {
              const k = new CustomEvent(pt, ea);
              if ((P.currentTarget.dispatchEvent(k), !k.defaultPrevented)) {
                const I = C().filter((j) => j.focusable),
                  _ = I.find((j) => j.active),
                  M = I.find((j) => j.id === m),
                  F = [_, M, ...I].filter(Boolean).map((j) => j.ref.current);
                $o(F, u);
              }
            }
            S.current = !1;
          }),
          onBlur: B(e.onBlur, () => v(!1)),
        }),
      })
    );
  }),
  Bo = 'RovingFocusGroupItem',
  Ho = d.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: r = !1,
        tabStopId: i,
        children: s,
        ...c
      } = e,
      l = Fe(),
      f = i || l,
      u = ra(Bo, n),
      p = u.currentTabStopId === f,
      y = Do(n),
      {
        onFocusableItemAdd: g,
        onFocusableItemRemove: h,
        currentTabStopId: m,
      } = u;
    return (
      d.useEffect(() => {
        if (o) return (g(), () => h());
      }, [o, g, h]),
      a.jsx(Ct.ItemSlot, {
        scope: n,
        id: f,
        focusable: o,
        active: r,
        children: a.jsx(H.span, {
          tabIndex: p ? 0 : -1,
          'data-orientation': u.orientation,
          ...c,
          ref: t,
          onMouseDown: B(e.onMouseDown, (x) => {
            o ? u.onItemFocus(f) : x.preventDefault();
          }),
          onFocus: B(e.onFocus, () => u.onItemFocus(f)),
          onKeyDown: B(e.onKeyDown, (x) => {
            if (x.key === 'Tab' && x.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (x.target !== x.currentTarget) return;
            const w = ca(x, u.orientation, u.dir);
            if (w !== void 0) {
              if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
              x.preventDefault();
              let b = y()
                .filter((C) => C.focusable)
                .map((C) => C.ref.current);
              if (w === 'last') b.reverse();
              else if (w === 'prev' || w === 'next') {
                w === 'prev' && b.reverse();
                const C = b.indexOf(x.currentTarget);
                b = u.loop ? la(b, C + 1) : b.slice(C + 1);
              }
              setTimeout(() => $o(b));
            }
          }),
          children:
            typeof s == 'function'
              ? s({ isCurrentTabStop: p, hasTabStop: m != null })
              : s,
        }),
      })
    );
  });
Ho.displayName = Bo;
var ia = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function aa(e, t) {
  return t !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e;
}
function ca(e, t, n) {
  const o = aa(e.key, n);
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(o)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(o))
  )
    return ia[o];
}
function $o(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (
      o === n ||
      (o.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function la(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var da = Fo,
  ua = Ho,
  st = 'Tabs',
  [fa, nc] = je(st, [Lo]),
  Vo = Lo(),
  [pa, Ut] = fa(st),
  Uo = d.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: o,
        onValueChange: r,
        defaultValue: i,
        orientation: s = 'horizontal',
        dir: c,
        activationMode: l = 'automatic',
        ...f
      } = e,
      u = At(c),
      [p, y] = Me({ prop: o, onChange: r, defaultProp: i ?? '', caller: st });
    return a.jsx(pa, {
      scope: n,
      baseId: Fe(),
      value: p,
      onValueChange: y,
      orientation: s,
      dir: u,
      activationMode: l,
      children: a.jsx(H.div, { dir: u, 'data-orientation': s, ...f, ref: t }),
    });
  });
Uo.displayName = st;
var Wo = 'TabsList',
  qo = d.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e,
      i = Ut(Wo, n),
      s = Vo(n);
    return a.jsx(da, {
      asChild: !0,
      ...s,
      orientation: i.orientation,
      dir: i.dir,
      loop: o,
      children: a.jsx(H.div, {
        role: 'tablist',
        'aria-orientation': i.orientation,
        ...r,
        ref: t,
      }),
    });
  });
qo.displayName = Wo;
var zo = 'TabsTrigger',
  Go = d.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...i } = e,
      s = Ut(zo, n),
      c = Vo(n),
      l = Yo(s.baseId, o),
      f = Xo(s.baseId, o),
      u = o === s.value;
    return a.jsx(ua, {
      asChild: !0,
      ...c,
      focusable: !r,
      active: u,
      children: a.jsx(H.button, {
        type: 'button',
        role: 'tab',
        'aria-selected': u,
        'aria-controls': f,
        'data-state': u ? 'active' : 'inactive',
        'data-disabled': r ? '' : void 0,
        disabled: r,
        id: l,
        ...i,
        ref: t,
        onMouseDown: B(e.onMouseDown, (p) => {
          !r && p.button === 0 && p.ctrlKey === !1
            ? s.onValueChange(o)
            : p.preventDefault();
        }),
        onKeyDown: B(e.onKeyDown, (p) => {
          [' ', 'Enter'].includes(p.key) && s.onValueChange(o);
        }),
        onFocus: B(e.onFocus, () => {
          const p = s.activationMode !== 'manual';
          !u && !r && p && s.onValueChange(o);
        }),
      }),
    });
  });
Go.displayName = zo;
var Ko = 'TabsContent',
  Jo = d.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: i, ...s } = e,
      c = Ut(Ko, n),
      l = Yo(c.baseId, o),
      f = Xo(c.baseId, o),
      u = o === c.value,
      p = d.useRef(u);
    return (
      d.useEffect(() => {
        const y = requestAnimationFrame(() => (p.current = !1));
        return () => cancelAnimationFrame(y);
      }, []),
      a.jsx(dn, {
        present: r || u,
        children: ({ present: y }) =>
          a.jsx(H.div, {
            'data-state': u ? 'active' : 'inactive',
            'data-orientation': c.orientation,
            role: 'tabpanel',
            'aria-labelledby': l,
            hidden: !y,
            id: f,
            tabIndex: 0,
            ...s,
            ref: t,
            style: { ...e.style, animationDuration: p.current ? '0s' : void 0 },
            children: y && i,
          }),
      })
    );
  });
Jo.displayName = Ko;
function Yo(e, t) {
  return `${e}-trigger-${t}`;
}
function Xo(e, t) {
  return `${e}-content-${t}`;
}
var ma = Uo,
  Zo = qo,
  Qo = Go,
  er = Jo;
const ha = ma,
  tr = d.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(Zo, {
      ref: n,
      className: z(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        e
      ),
      ...t,
    })
  );
tr.displayName = Zo.displayName;
const Ue = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Qo, {
    ref: n,
    className: z(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
      e
    ),
    ...t,
  })
);
Ue.displayName = Qo.displayName;
const We = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(er, {
    ref: n,
    className: z(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      e
    ),
    ...t,
  })
);
We.displayName = er.displayName;
const Rt = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx('textarea', {
    className: z(
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      e
    ),
    ref: n,
    ...t,
  })
);
Rt.displayName = 'Textarea';
function ga({
  method: e = 'GET',
  url: t = '',
  params: n = [],
  headers: o = [],
  bodyMode: r = 'none',
  jsonText: i = '',
  formData: s = [],
  rawText: c = '',
  methods: l = jt,
  loading: f = !1,
  validateUrl: u = !0,
  className: p = '',
  onChange: y,
  onSend: g,
}) {
  const { t: h } = Ee(),
    [m, x] = d.useState(e),
    [w, v] = d.useState(t),
    [b, C] = d.useState(lt(n)),
    [S, T] = d.useState(lt(o)),
    [R, P] = d.useState(r),
    [A, k] = d.useState(i),
    [I, _] = d.useState(lt(s)),
    [M, O] = d.useState(c);
  (d.useEffect(() => {
    x(e);
  }, [e]),
    d.useEffect(() => {
      v(t);
    }, [t]));
  const F = d.useMemo(() => Jr(A), [A]),
    j = d.useMemo(
      () => ({
        method: m,
        url: w,
        params: b,
        headers: S,
        body: { mode: R, jsonText: A, formData: I, rawText: M },
      }),
      [m, w, b, S, R, A, I, M]
    );
  d.useEffect(() => {
    y?.(j);
  }, [j, y]);
  const D = u && !Kr(w),
    E = (L) => {
      D || g?.(j);
    };
  return a.jsxs('section', {
    className: `w-full space-y-3 ${p}`,
    children: [
      a.jsx(Qi, {
        method: m,
        url: w,
        methods: l,
        loading: f,
        validateUrl: u,
        onChange: ({ method: L, url: W }) => {
          (x(L), v(W));
        },
        onSend: () => E(),
      }),
      a.jsx('div', {
        className: 'px-1 h-4 text-xs ml-30',
        children:
          D &&
          a.jsx('div', {
            className: 'px-1 text-xs text-rose-600',
            children: h('request.invalidUrl'),
          }),
      }),
      a.jsxs(ha, {
        defaultValue: 'params',
        className: 'w-full',
        children: [
          a.jsxs(tr, {
            className: 'bg-pink-50/40 p-1 rounded-xl',
            children: [
              a.jsx(Ue, {
                value: 'params',
                className:
                  'transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600',
                children: h('request.params'),
              }),
              a.jsx(Ue, {
                value: 'headers',
                className:
                  'transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600',
                children: h('request.headers'),
              }),
              a.jsx(Ue, {
                value: 'body',
                className:
                  'transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600',
                children: h('request.body'),
              }),
            ],
          }),
          a.jsx(We, {
            value: 'params',
            className: 'space-y-2',
            children: a.jsx(dt, {
              rows: b,
              onChange: C,
              addLabel: h('request.addParam'),
            }),
          }),
          a.jsx(We, {
            value: 'headers',
            children: a.jsx(dt, {
              rows: S,
              onChange: T,
              addLabel: h('request.addHeader'),
            }),
          }),
          a.jsxs(We, {
            value: 'body',
            className: 'space-y-3',
            children: [
              a.jsx(Vr, { value: R, onChange: P }),
              R === 'json' &&
                a.jsxs('div', {
                  className: 'space-y-2',
                  children: [
                    a.jsxs('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        a.jsx('div', {
                          className: `text-xs ${F ? 'text-rose-600' : 'text-slate-500'}`,
                          children: F,
                        }),
                        a.jsx('div', {
                          className: 'flex items-center gap-2',
                          children: a.jsx(he, {
                            type: 'button',
                            variant: 'outline',
                            size: 'sm',
                            className:
                              'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
                            onClick: () => k(Yr(A)),
                            disabled: !!F,
                            children: h('buttons.prettify'),
                          }),
                        }),
                      ],
                    }),
                    a.jsx(Rt, {
                      value: A,
                      onChange: (L) => k(L.target.value),
                      placeholder: '{"hello":"world"}',
                      className:
                        'min-h-[180px] font-mono text-sm rounded-lg border border-pink-300/60 bg-pink-50/40',
                    }),
                  ],
                }),
              R === 'form-data' &&
                a.jsx(dt, {
                  rows: I,
                  onChange: _,
                  addLabel: h('request.addField'),
                }),
              R === 'raw' &&
                a.jsx(Rt, {
                  value: M,
                  onChange: (L) => O(L.target.value),
                  placeholder: h('request.rawBody'),
                  className: 'min-h-[140px] font-mono text-sm',
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function xa({ statusCode: e, statusText: t, json: n, className: o = '' }) {
  const { t: r } = Ee(),
    i = d.useMemo(() => {
      if (!n) return '';
      try {
        return JSON.stringify(JSON.parse(n), null, 2);
      } catch {
        return n;
      }
    }, [n]),
    s = async () => {
      await navigator.clipboard.writeText(i);
    };
  return a.jsxs('section', {
    className: `w-full flex-1 min-w-0 self-stretch rounded-xl border bg-white overflow-hidden ${o}`,
    children: [
      a.jsxs('div', {
        className:
          'flex items-center justify-between gap-3 border-b bg-white px-4 py-2',
        children: [
          a.jsxs('div', {
            className: 'flex items-center gap-3 min-w-0',
            children: [
              a.jsx('span', {
                className: `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-white ${Zi(e)}`,
                children: e,
              }),
              a.jsx('span', {
                className: 'text-sm text-slate-700 truncate',
                title: t ?? '',
                children: t ?? '',
              }),
            ],
          }),
          a.jsx(he, {
            variant: 'custom',
            type: 'button',
            onClick: s,
            children: r('request.copyJSON'),
          }),
        ],
      }),
      a.jsx('pre', {
        className:
          'm-0 max-h-[60vh] overflow-auto p-4 text-sm leading-6 whitespace-pre',
        children: i || '(empty)',
      }),
    ],
  });
}
const va = yr,
  ya = wr,
  wa = br,
  nr = d.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(pn, {
      className: z(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        e
      ),
      ...t,
      ref: n,
    })
  );
nr.displayName = pn.displayName;
const ba = fr(
    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
    {
      variants: {
        side: {
          top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
          right:
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        },
      },
      defaultVariants: { side: 'right' },
    }
  ),
  or = d.forwardRef(
    ({ side: e = 'right', className: t, children: n, ...o }, r) =>
      a.jsxs(wa, {
        children: [
          a.jsx(nr, {}),
          a.jsxs(un, {
            ref: r,
            className: z(ba({ side: e }), t),
            ...o,
            children: [
              a.jsxs(Sr, {
                className:
                  'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                children: [
                  a.jsx(Cr, { className: 'h-4 w-4' }),
                  a.jsx('span', { className: 'sr-only', children: 'Close' }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
or.displayName = un.displayName;
const rr = ({ className: e, ...t }) =>
  a.jsx('div', {
    className: z('flex flex-col space-y-2 text-center sm:text-left', e),
    ...t,
  });
rr.displayName = 'SheetHeader';
const sr = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(fn, {
    ref: n,
    className: z('text-lg font-semibold text-foreground', e),
    ...t,
  })
);
sr.displayName = fn.displayName;
const Sa = d.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(mn, { ref: n, className: z('text-sm text-muted-foreground', e), ...t })
);
Sa.displayName = mn.displayName;
const Wt = [
    'cURL',
    'JavaScript (fetch)',
    'JavaScript (XHR)',
    'NodeJS',
    'Python',
    'Java',
    'C#',
    'Go',
  ],
  Ca = {
    cURL: ['shell', 'curl', { indent: '  ', short: !1 }],
    'JavaScript (fetch)': ['javascript', 'fetch'],
    'JavaScript (XHR)': ['javascript', 'xhr'],
    NodeJS: ['node', 'native'],
    Python: ['python', 'requests'],
    Java: ['java', 'okhttp'],
    'C#': ['csharp', 'httpclient'],
    Go: ['go', 'native'],
  };
function Ra(e) {
  try {
    const t = new URL(e.url);
    for (const n of e.params ?? [])
      n.enabled && n.key && t.searchParams.set(n.key, n.value);
    return t.toString();
  } catch {
    return null;
  }
}
function Na(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = e;
  return typeof (t.HTTPSnippet ?? t.default) == 'function';
}
async function Ta() {
  const e = await Tr(
    () => import('./httpsnippet-go1sL_E_.js'),
    __vite__mapDeps([0, 1])
  );
  if (!Na(e)) throw new Error('Invalid httpsnippet-lite module');
  return e.HTTPSnippet ?? e.default;
}
function sn(e) {
  return e
    .filter((t) => t.enabled && !!t.key)
    .map((t) => ({ name: t.key, value: t.value }));
}
function ja(e) {
  return (
    e.headers.find((n) => n.enabled && n.key.toLowerCase() === 'content-type')
      ?.value ?? 'text/plain; charset=utf-8'
  );
}
function Pa(e, t) {
  const n = e.method.toUpperCase(),
    o = n !== 'GET' && n !== 'HEAD';
  let r;
  return (
    o &&
      e.body.mode !== 'none' &&
      (e.body.mode === 'json'
        ? (r = { mimeType: 'application/json', text: e.body.jsonText ?? '' })
        : e.body.mode === 'form-data'
          ? (r = {
              mimeType: 'multipart/form-data',
              params: (e.body.formData ?? [])
                .filter((s) => s.enabled && !!s.key)
                .map((s) => ({ name: s.key, value: s.value })),
            })
          : e.body.mode === 'raw' &&
            (r = { mimeType: ja(e), text: e.body.rawText ?? '' })),
    {
      method: n,
      url: t,
      httpVersion: 'HTTP/1.1',
      headers: sn(e.headers),
      queryString: sn(e.params),
      postData: r,
    }
  );
}
async function Ea(e, t) {
  const n = await Ta(),
    o = new n(Pa(e, t)),
    r = await Promise.all(
      Wt.map(async (s) => {
        const [c, l, f] = Ca[s],
          u = await o.convert(c, l, f);
        return [s, typeof u == 'string' ? u : void 0];
      })
    ),
    i = {};
  for (const [s, c] of r) c && (i[s] = c);
  return i;
}
function Aa(e) {
  return Wt.find((t) => !!e[t]) ?? null;
}
function Ia({ snapshot: e, className: t = '' }) {
  const { t: n } = Ee(),
    [o, r] = d.useState({ status: 'idle' }),
    [i, s] = d.useState(null),
    c = d.useMemo(() => Ra(e), [e]);
  d.useEffect(() => {
    if (!c) {
      r({ status: 'error', message: n('restfull.urlInvalid') });
      return;
    }
    (r({ status: 'loading' }),
      Ea(e, c)
        .then((u) => {
          const p = Aa(u);
          (r({
            status: 'ready',
            code: u,
            context: { method: e.method, url: c },
          }),
            s(p));
        })
        .catch(() => r({ status: 'error', message: n('restfull.genFailed') })));
  }, [e, c, n]);
  const l = o.status === 'ready' && i ? o.code[i] : void 0,
    f = d.useCallback(async (u) => {
      await navigator.clipboard.writeText(u);
    }, []);
  return a.jsxs('section', {
    className: `rounded-xl border bg-white ${t}`,
    children: [
      a.jsxs('div', {
        className: 'flex items-center justify-between gap-2 border-b px-4 py-2',
        children: [
          a.jsx('h3', {
            className: 'text-sm font-semibold',
            children: n('restfull.generatedCode'),
          }),
          o.status === 'ready' &&
            a.jsxs('span', {
              className: 'text-xs text-slate-500',
              children: [o.context.method, ' • ', o.context.url],
            }),
        ],
      }),
      o.status === 'loading' &&
        a.jsx('div', {
          className: 'p-4 text-sm text-slate-600',
          children: n('restfull.generating'),
        }),
      o.status === 'error' &&
        a.jsx('div', {
          className: 'p-4 text-sm text-rose-600',
          children: o.message,
        }),
      o.status === 'ready' &&
        a.jsxs('div', {
          className: 'p-3 space-y-3',
          children: [
            a.jsxs(ko, {
              value: i ?? void 0,
              onValueChange: (u) => s(u),
              children: [
                a.jsx(Ht, {
                  className: 'w-full sm:w-72',
                  children: a.jsx(_o, {
                    placeholder: n('restfull.chooseLanguage'),
                  }),
                }),
                a.jsx($t, {
                  children: Wt.map((u) =>
                    a.jsx(
                      Vt,
                      { value: u, disabled: !o.code[u], children: u },
                      u
                    )
                  ),
                }),
              ],
            }),
            l
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsxs('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        a.jsx('div', {
                          className: 'text-xs text-slate-500',
                          children: i,
                        }),
                        a.jsx(he, {
                          size: 'sm',
                          variant: 'outline',
                          onClick: () => f(l),
                          children: n('buttons.copy'),
                        }),
                      ],
                    }),
                    a.jsx('pre', {
                      className:
                        'overflow-auto rounded-lg border bg-slate-50 p-3 text-xs',
                      children: l,
                    }),
                  ],
                })
              : a.jsx('div', {
                  className:
                    'px-2 py-6 text-sm text-slate-500 border rounded-lg',
                  children: n('restfull.notAvailable'),
                }),
          ],
        }),
    ],
  });
}
function ka({ snapshot: e }) {
  const { t } = Ee();
  return a.jsxs(va, {
    children: [
      a.jsx(ya, {
        asChild: !0,
        children: a.jsx(he, {
          variant: 'outline',
          className:
            'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
          children: t('restfull.codeBtn'),
        }),
      }),
      a.jsxs(or, {
        side: 'right',
        className:
          'z-50 bg-pink-200 text-purple-600 sm:max-w-md lg:max-w-xl w-[92vw]',
        children: [
          a.jsx(rr, {
            children: a.jsx(sr, {
              className: 'text-purple-600',
              children: t('restfull.generatedCode'),
            }),
          }),
          a.jsx('div', {
            className: 'mt-4',
            children: e
              ? a.jsx(Ia, { snapshot: e, className: 'w-full' })
              : a.jsx('div', {
                  className:
                    'rounded border border-pink-300 p-3 text-sm text-purple-600',
                  children: t('restfull.codeText'),
                }),
          }),
        ],
      }),
    ],
  });
}
async function _a(e) {
  const t = { ...e, createdAt: Ar() };
  await Pr(Er(Ir, 'requests'), t);
}
function Le(e, t = {}) {
  if (e.length === 0) return '';
  const n = /\{\{(\w+)\}\}/g;
  return e.replace(n, (o, r) => t[r] ?? '');
}
function Ma(e) {
  return JSON.parse(localStorage.getItem(`userVariables_${e}`) ?? '{}');
}
function ir(e) {
  return new TextEncoder().encode(e).length;
}
function ar(e) {
  let t = 0;
  for (const [n, o] of Object.entries(e))
    t += ir(`${n}: ${o}\r
`);
  return t;
}
function cr(e) {
  const t = {};
  return (
    e.forEach((n, o) => {
      t[o] = n;
    }),
    t
  );
}
async function Oa(e, t, n, o) {
  const r = new Request(e, { method: t, headers: new Headers(n), body: o }),
    i = r.body ? (await new Response(r.body).arrayBuffer()).byteLength : 0,
    s = cr(r.headers),
    c = ar(s);
  return {
    requestBodyBytes: i,
    requestHeadersBytes: c,
    requestBytes: c + i,
    finalHeaders: s,
  };
}
function Da(e, t) {
  return e.body.mode === 'json'
    ? Le(e.body.jsonText ?? '', t)
    : e.body.mode === 'raw'
      ? Le(e.body.rawText ?? '', t)
      : '';
}
function La(e, t) {
  try {
    const n = new URL(e);
    for (const [o, r] of Object.entries(t)) n.searchParams.set(o, r);
    return n.toString();
  } catch {
    return null;
  }
}
function Fa(e, t) {
  return t.body.mode === 'json' && !Rr(e, 'content-type')
    ? { ...e, 'Content-Type': 'application/json' }
    : { ...e };
}
function Ba(e, t, n) {
  if (!['GET', 'HEAD'].includes(e.method))
    switch (e.body.mode) {
      case 'json':
        return t;
      case 'form-data': {
        const r = new FormData();
        return (
          (e.body.formData ?? [])
            .filter((i) => i.enabled && i.key)
            .forEach((i) => {
              r.append(Le(i.key, n), Le(i.value, n));
            }),
          r
        );
      }
      case 'raw':
        return t;
      default:
        return;
    }
}
function an(e) {
  return Object.entries(e ?? {}).map(([t, n]) => ({
    id: crypto.randomUUID(),
    enabled: !0,
    key: t,
    value: String(n),
  }));
}
function Ha(e) {
  try {
    const t = decodeURIComponent(e);
    return JSON.parse(
      typeof Buffer < 'u'
        ? Buffer.from(t, 'base64').toString('utf8')
        : decodeURIComponent(escape(atob(t)))
    );
  } catch {
    return;
  }
}
function $a(e) {
  return jt.includes(e.toUpperCase());
}
function Va(e) {
  if (!e) return 'GET';
  if (typeof e != 'string') return e;
  const t = e.toUpperCase();
  return $a(t) ? t : 'GET';
}
function oc({ method: e, onChange: t }) {
  const { t: n } = Ee(),
    { user: o } = jr(),
    r = lr(),
    i = dr(),
    [s] = ur(),
    c = i.state?.prefill,
    l = s.get('prefill'),
    f = l ? Ha(l) : void 0,
    u = c ?? f,
    p = d.useMemo(() => {
      const S = Va(u?.method ?? e),
        T = u?.url ?? '',
        R = an(u?.headers),
        P = an(u?.params),
        A = u?.bodyMode ?? 'none',
        k = A === 'json' ? (u?.bodyText ?? '') : '',
        I = A === 'raw' ? (u?.bodyText ?? '') : '';
      return {
        method: S,
        url: T,
        headersRows: R,
        paramsRows: P,
        bodyMode: A,
        jsonText: k,
        rawText: I,
      };
    }, [u, e]),
    [y, g] = d.useState(!1),
    [h, m] = d.useState(null),
    [x, w] = d.useState(null),
    v = d.useRef(null),
    b = d.useCallback(
      (S) => {
        const T = { method: S.method, url: S.url },
          R = v.current;
        (!R || R.method !== T.method || R.url !== T.url) &&
          ((v.current = T), t?.(T));
      },
      [t]
    );
  async function C(S) {
    g(!0);
    const T = performance.now(),
      R = Ma(o?.uid),
      P = Le(S.url, R),
      A = Da(S, R),
      k = qt(S.params),
      I = qt(S.headers),
      _ = La(P, k);
    if (!_) {
      (m({
        statusCode: 0,
        statusText: 'Invalid URL',
        bodyText: '',
        timeMs: Math.round(performance.now() - T),
      }),
        w(S),
        g(!1));
      return;
    }
    const M = Nr({ method: S.method, url: _, headers: I });
    r(M, { replace: !0 });
    const O = Fa({ ...I }, S),
      F = Ba(S, A, R),
      {
        finalHeaders: j,
        requestBodyBytes: D,
        requestHeadersBytes: E,
        requestBytes: L,
      } = await Oa(_, S.method, O, F);
    let W = 0,
      Q = '',
      le = '',
      de = 0,
      X = 0,
      ue = null,
      ee = null;
    try {
      const N = await fetch(_, { method: S.method, headers: j, body: F });
      ((W = N.status),
        (Q = N.statusText),
        (le = await N.text()),
        (X = ir(le)),
        (de = ar(cr(N.headers))),
        m({
          statusCode: W,
          statusText: Q,
          bodyText: le,
          timeMs: Math.round(performance.now() - T),
        }),
        w({
          ...S,
          url: _,
          body: {
            ...S.body,
            ...(S.body.mode === 'json' ? { jsonText: A } : {}),
            ...(S.body.mode === 'raw' ? { rawText: A } : {}),
          },
        }));
    } catch (N) {
      ((ue = N instanceof Error ? N.name : 'UnknownError'),
        (ee = N instanceof Error ? N.message : String(N)),
        m({
          statusCode: 0,
          statusText: ee || 'Request failed',
          bodyText: '',
          timeMs: Math.round(performance.now() - T),
        }),
        w(S));
    } finally {
      const N = Math.round(performance.now() - T);
      (await _a({
        method: S.method,
        url: _,
        params: { ...k },
        headers: { ...j },
        bodyMode: S.body.mode,
        bodyPreview: A,
        latencyMs: N,
        statusCode: W,
        statusText: Q,
        requestBytes: L,
        requestHeadersBytes: E,
        requestBodyBytes: D,
        responseBytes: de + X,
        responseHeadersBytes: de,
        responseBodyBytes: X,
        errorType: ue,
        errorMessage: ee,
        userId: o?.uid ?? null,
      }),
        g(!1));
    }
  }
  return a.jsxs('div', {
    className: 'w-full max-w-6xl mx-auto p-4 space-y-4',
    children: [
      a.jsx('div', {
        className: 'h-[37vh] overflow-auto',
        children: a.jsx(ga, {
          loading: y,
          onSend: C,
          onChange: b,
          method: p.method,
          url: p.url,
          headers: p.headersRows,
          params: p.paramsRows,
          bodyMode: p.bodyMode,
          jsonText: p.jsonText,
          rawText: p.rawText,
        }),
      }),
      a.jsx('div', {
        className: 'flex items-center justify-end',
        children: a.jsx(ka, { snapshot: x }),
      }),
      a.jsxs('div', {
        className: 'rounded-lg border border-pink-300/60 bg-pink-50/40',
        children: [
          a.jsxs('div', {
            className:
              'flex items-center justify-between px-4 py-2 border-b border-pink-300/60',
            children: [
              a.jsx('h2', {
                className: 'font-semibold text-purple-600',
                children: n('request.response'),
              }),
              h &&
                a.jsxs('span', {
                  className: 'text-xs text-purple-700/70',
                  children: [h.statusCode, ' ', h.statusText ?? ''],
                }),
            ],
          }),
          a.jsx('div', {
            className: 'h-[38vh] p-3 overflow-auto',
            children: h
              ? a.jsx(xa, {
                  statusCode: h.statusCode,
                  statusText: h.statusText,
                  json: h.bodyText ?? '',
                  className: 'w-full',
                })
              : a.jsx('div', {
                  className:
                    'h-full grid place-items-center text-sm opacity-70',
                  children: n('restfull.noResponse'),
                }),
          }),
        ],
      }),
    ],
  });
}
export { oc as default };
