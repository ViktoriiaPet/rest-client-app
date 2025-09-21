import { r as i, d as rt, j as y } from './chunk-B7RQU5TL-BAM8tVsL.js';
import {
  u as X,
  P as A,
  b as x,
  d as ot,
  c as at,
  e as it,
  a as st,
} from './index-DbfQkS6M.js';
import { u as I, c as ct } from './button-DEmol27v.js';
import { R as ut } from './index-N5PhXsCK.js';
var lt = rt[' useId '.trim().toString()] || (() => {}),
  dt = 0;
function J(e) {
  const [t, n] = i.useState(lt());
  return (
    X(() => {
      n((r) => r ?? String(dt++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
function j(e) {
  const t = i.useRef(e);
  return (
    i.useEffect(() => {
      t.current = e;
    }),
    i.useMemo(
      () =>
        (...n) =>
          t.current?.(...n),
      []
    )
  );
}
function ft(e, t = globalThis?.document) {
  const n = j(e);
  i.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r, { capture: !0 }),
      () => t.removeEventListener('keydown', r, { capture: !0 })
    );
  }, [n, t]);
}
var vt = 'DismissableLayer',
  se = 'dismissableLayer.update',
  mt = 'dismissableLayer.pointerDownOutside',
  ht = 'dismissableLayer.focusOutside',
  fe,
  De = i.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Oe = i.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: u,
        onDismiss: s,
        ...v
      } = e,
      l = i.useContext(De),
      [d, f] = i.useState(null),
      m = d?.ownerDocument ?? globalThis?.document,
      [, p] = i.useState({}),
      R = I(t, (E) => f(E)),
      c = Array.from(l.layers),
      [h] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = c.indexOf(h),
      b = d ? c.indexOf(d) : -1,
      C = l.layersWithOutsidePointerEventsDisabled.size > 0,
      w = b >= g,
      S = yt((E) => {
        const P = E.target,
          W = [...l.branches].some((Q) => Q.contains(P));
        !w || W || (o?.(E), u?.(E), E.defaultPrevented || s?.());
      }, m),
      N = Et((E) => {
        const P = E.target;
        [...l.branches].some((Q) => Q.contains(P)) ||
          (a?.(E), u?.(E), E.defaultPrevented || s?.());
      }, m);
    return (
      ft((E) => {
        b === l.layers.size - 1 &&
          (r?.(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
      }, m),
      i.useEffect(() => {
        if (d)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((fe = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = 'none')),
              l.layersWithOutsidePointerEventsDisabled.add(d)),
            l.layers.add(d),
            ve(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = fe);
            }
          );
      }, [d, m, n, l]),
      i.useEffect(
        () => () => {
          d &&
            (l.layers.delete(d),
            l.layersWithOutsidePointerEventsDisabled.delete(d),
            ve());
        },
        [d, l]
      ),
      i.useEffect(() => {
        const E = () => p({});
        return (
          document.addEventListener(se, E),
          () => document.removeEventListener(se, E)
        );
      }, []),
      y.jsx(A.div, {
        ...v,
        ref: R,
        style: {
          pointerEvents: C ? (w ? 'auto' : 'none') : void 0,
          ...e.style,
        },
        onFocusCapture: x(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: x(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: x(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Oe.displayName = vt;
var pt = 'DismissableLayerBranch',
  gt = i.forwardRef((e, t) => {
    const n = i.useContext(De),
      r = i.useRef(null),
      o = I(t, r);
    return (
      i.useEffect(() => {
        const a = r.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      y.jsx(A.div, { ...e, ref: o })
    );
  });
gt.displayName = pt;
function yt(e, t = globalThis?.document) {
  const n = j(e),
    r = i.useRef(!1),
    o = i.useRef(() => {});
  return (
    i.useEffect(() => {
      const a = (s) => {
          if (s.target && !r.current) {
            let v = function () {
              Ne(mt, n, l, { discrete: !0 });
            };
            const l = { originalEvent: s };
            s.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = v),
                t.addEventListener('click', o.current, { once: !0 }))
              : v();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        u = window.setTimeout(() => {
          t.addEventListener('pointerdown', a);
        }, 0);
      return () => {
        (window.clearTimeout(u),
          t.removeEventListener('pointerdown', a),
          t.removeEventListener('click', o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Et(e, t = globalThis?.document) {
  const n = j(e),
    r = i.useRef(!1);
  return (
    i.useEffect(() => {
      const o = (a) => {
        a.target &&
          !r.current &&
          Ne(ht, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function ve() {
  const e = new CustomEvent(se);
  document.dispatchEvent(e);
}
function Ne(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? ot(o, a) : o.dispatchEvent(a));
}
var ee = 'focusScope.autoFocusOnMount',
  te = 'focusScope.autoFocusOnUnmount',
  me = { bubbles: !1, cancelable: !0 },
  bt = 'FocusScope',
  Pe = i.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        ...u
      } = e,
      [s, v] = i.useState(null),
      l = j(o),
      d = j(a),
      f = i.useRef(null),
      m = I(t, (c) => v(c)),
      p = i.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (i.useEffect(() => {
      if (r) {
        let c = function (C) {
            if (p.paused || !s) return;
            const w = C.target;
            s.contains(w) ? (f.current = w) : T(f.current, { select: !0 });
          },
          h = function (C) {
            if (p.paused || !s) return;
            const w = C.relatedTarget;
            w !== null && (s.contains(w) || T(f.current, { select: !0 }));
          },
          g = function (C) {
            if (document.activeElement === document.body)
              for (const S of C) S.removedNodes.length > 0 && T(s);
          };
        (document.addEventListener('focusin', c),
          document.addEventListener('focusout', h));
        const b = new MutationObserver(g);
        return (
          s && b.observe(s, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', c),
              document.removeEventListener('focusout', h),
              b.disconnect());
          }
        );
      }
    }, [r, s, p.paused]),
      i.useEffect(() => {
        if (s) {
          pe.add(p);
          const c = document.activeElement;
          if (!s.contains(c)) {
            const g = new CustomEvent(ee, me);
            (s.addEventListener(ee, l),
              s.dispatchEvent(g),
              g.defaultPrevented ||
                (Ct(Ot(Ae(s)), { select: !0 }),
                document.activeElement === c && T(s)));
          }
          return () => {
            (s.removeEventListener(ee, l),
              setTimeout(() => {
                const g = new CustomEvent(te, me);
                (s.addEventListener(te, d),
                  s.dispatchEvent(g),
                  g.defaultPrevented || T(c ?? document.body, { select: !0 }),
                  s.removeEventListener(te, d),
                  pe.remove(p));
              }, 0));
          };
        }
      }, [s, l, d, p]));
    const R = i.useCallback(
      (c) => {
        if ((!n && !r) || p.paused) return;
        const h = c.key === 'Tab' && !c.altKey && !c.ctrlKey && !c.metaKey,
          g = document.activeElement;
        if (h && g) {
          const b = c.currentTarget,
            [C, w] = wt(b);
          C && w
            ? !c.shiftKey && g === w
              ? (c.preventDefault(), n && T(C, { select: !0 }))
              : c.shiftKey &&
                g === C &&
                (c.preventDefault(), n && T(w, { select: !0 }))
            : g === b && c.preventDefault();
        }
      },
      [n, r, p.paused]
    );
    return y.jsx(A.div, { tabIndex: -1, ...u, ref: m, onKeyDown: R });
  });
Pe.displayName = bt;
function Ct(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((T(r, { select: t }), document.activeElement !== n)) return;
}
function wt(e) {
  const t = Ae(e),
    n = he(t, e),
    r = he(t.reverse(), e);
  return [n, r];
}
function Ae(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function he(e, t) {
  for (const n of e) if (!St(n, { upTo: t })) return n;
}
function St(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function Rt(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function T(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Rt(e) && t && e.select());
  }
}
var pe = Dt();
function Dt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && n?.pause(), (e = ge(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = ge(e, t)), e[0]?.resume());
    },
  };
}
function ge(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function Ot(e) {
  return e.filter((t) => t.tagName !== 'A');
}
var Nt = 'Portal',
  Te = i.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, a] = i.useState(!1);
    X(() => a(!0), []);
    const u = n || (o && globalThis?.document?.body);
    return u ? ut.createPortal(y.jsx(A.div, { ...r, ref: t }), u) : null;
  });
Te.displayName = Nt;
function Pt(e, t) {
  return i.useReducer((n, r) => t[n][r] ?? n, e);
}
var z = (e) => {
  const { present: t, children: n } = e,
    r = At(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : i.Children.only(n),
    a = I(r.ref, Tt(o));
  return typeof n == 'function' || r.isPresent
    ? i.cloneElement(o, { ref: a })
    : null;
};
z.displayName = 'Presence';
function At(e) {
  const [t, n] = i.useState(),
    r = i.useRef(null),
    o = i.useRef(e),
    a = i.useRef('none'),
    u = e ? 'mounted' : 'unmounted',
    [s, v] = Pt(u, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    i.useEffect(() => {
      const l = B(r.current);
      a.current = s === 'mounted' ? l : 'none';
    }, [s]),
    X(() => {
      const l = r.current,
        d = o.current;
      if (d !== e) {
        const m = a.current,
          p = B(l);
        (e
          ? v('MOUNT')
          : p === 'none' || l?.display === 'none'
            ? v('UNMOUNT')
            : v(d && m !== p ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e));
      }
    }, [e, v]),
    X(() => {
      if (t) {
        let l;
        const d = t.ownerDocument.defaultView ?? window,
          f = (p) => {
            const c = B(r.current).includes(CSS.escape(p.animationName));
            if (p.target === t && c && (v('ANIMATION_END'), !o.current)) {
              const h = t.style.animationFillMode;
              ((t.style.animationFillMode = 'forwards'),
                (l = d.setTimeout(() => {
                  t.style.animationFillMode === 'forwards' &&
                    (t.style.animationFillMode = h);
                })));
            }
          },
          m = (p) => {
            p.target === t && (a.current = B(r.current));
          };
        return (
          t.addEventListener('animationstart', m),
          t.addEventListener('animationcancel', f),
          t.addEventListener('animationend', f),
          () => {
            (d.clearTimeout(l),
              t.removeEventListener('animationstart', m),
              t.removeEventListener('animationcancel', f),
              t.removeEventListener('animationend', f));
          }
        );
      } else v('ANIMATION_END');
    }, [t, v]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(s),
      ref: i.useCallback((l) => {
        ((r.current = l ? getComputedStyle(l) : null), n(l));
      }, []),
    }
  );
}
function B(e) {
  return e?.animationName || 'none';
}
function Tt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ne = 0;
function xt() {
  i.useEffect(() => {
    const e = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', e[0] ?? ye()),
      document.body.insertAdjacentElement('beforeend', e[1] ?? ye()),
      ne++,
      () => {
        (ne === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((t) => t.remove()),
          ne--);
      }
    );
  }, []);
}
function ye() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
var O = function () {
  return (
    (O =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        }
        return t;
      }),
    O.apply(this, arguments)
  );
};
function xe(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Mt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var V = 'right-scroll-bar-position',
  G = 'width-before-scroll-bar',
  It = 'with-scroll-bars-hidden',
  Lt = '--removed-body-scroll-bar-size';
function re(e, t) {
  return (typeof e == 'function' ? e(t) : e && (e.current = t), e);
}
function Ft(e, t) {
  var n = i.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var kt = typeof window < 'u' ? i.useLayoutEffect : i.useEffect,
  Ee = new WeakMap();
function _t(e, t) {
  var n = Ft(null, function (r) {
    return e.forEach(function (o) {
      return re(o, r);
    });
  });
  return (
    kt(
      function () {
        var r = Ee.get(n);
        if (r) {
          var o = new Set(r),
            a = new Set(e),
            u = n.current;
          (o.forEach(function (s) {
            a.has(s) || re(s, null);
          }),
            a.forEach(function (s) {
              o.has(s) || re(s, u);
            }));
        }
        Ee.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Wt(e) {
  return e;
}
function jt(e, t) {
  t === void 0 && (t = Wt);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var u = t(a, r);
        return (
          n.push(u),
          function () {
            n = n.filter(function (s) {
              return s !== u;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (r = !0; n.length; ) {
          var u = n;
          ((n = []), u.forEach(a));
        }
        n = {
          push: function (s) {
            return a(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        r = !0;
        var u = [];
        if (n.length) {
          var s = n;
          ((n = []), s.forEach(a), (u = n));
        }
        var v = function () {
            var d = u;
            ((u = []), d.forEach(a));
          },
          l = function () {
            return Promise.resolve().then(v);
          };
        (l(),
          (n = {
            push: function (d) {
              (u.push(d), l());
            },
            filter: function (d) {
              return ((u = u.filter(d)), n);
            },
          }));
      },
    };
  return o;
}
function Bt(e) {
  e === void 0 && (e = {});
  var t = jt(null);
  return ((t.options = O({ async: !0, ssr: !1 }, e)), t);
}
var Me = function (e) {
  var t = e.sideCar,
    n = xe(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car'
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return i.createElement(r, O({}, n));
};
Me.isSideCarExport = !0;
function Ut(e, t) {
  return (e.useMedium(t), Me);
}
var Ie = Bt(),
  oe = function () {},
  Z = i.forwardRef(function (e, t) {
    var n = i.useRef(null),
      r = i.useState({
        onScrollCapture: oe,
        onWheelCapture: oe,
        onTouchMoveCapture: oe,
      }),
      o = r[0],
      a = r[1],
      u = e.forwardProps,
      s = e.children,
      v = e.className,
      l = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      m = e.sideCar,
      p = e.noRelative,
      R = e.noIsolation,
      c = e.inert,
      h = e.allowPinchZoom,
      g = e.as,
      b = g === void 0 ? 'div' : g,
      C = e.gapMode,
      w = xe(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noRelative',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      S = m,
      N = _t([n, t]),
      E = O(O({}, w), o);
    return i.createElement(
      i.Fragment,
      null,
      d &&
        i.createElement(S, {
          sideCar: Ie,
          removeScrollBar: l,
          shards: f,
          noRelative: p,
          noIsolation: R,
          inert: c,
          setCallbacks: a,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: C,
        }),
      u
        ? i.cloneElement(i.Children.only(s), O(O({}, E), { ref: N }))
        : i.createElement(b, O({}, E, { className: v, ref: N }), s)
    );
  });
Z.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Z.classNames = { fullWidth: G, zeroRight: V };
var Kt = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function Ht() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = Kt();
  return (t && e.setAttribute('nonce', t), e);
}
function $t(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Vt(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var Gt = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Ht()) && ($t(t, n), Vt(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Xt = function () {
    var e = Gt();
    return function (t, n) {
      i.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Le = function () {
    var e = Xt(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  Yt = { left: 0, top: 0, right: 0, gap: 0 },
  ae = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  zt = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [ae(n), ae(r), ae(o)];
  },
  Zt = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Yt;
    var t = zt(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  qt = Le(),
  _ = 'data-scroll-locked',
  Qt = function (e, t, n, r) {
    var o = e.left,
      a = e.top,
      u = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          It,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          _,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  a,
                  `px;
    padding-right: `
                )
                .concat(
                  u,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
    `
                ),
            n === 'padding' &&
              'padding-right: '.concat(s, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          V,
          ` {
    right: `
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          G,
          ` {
    margin-right: `
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(V, ' .')
        .concat(
          V,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(G, ' .')
        .concat(
          G,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          _,
          `] {
    `
        )
        .concat(Lt, ': ')
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  be = function () {
    var e = parseInt(document.body.getAttribute(_) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  Jt = function () {
    i.useEffect(function () {
      return (
        document.body.setAttribute(_, (be() + 1).toString()),
        function () {
          var e = be() - 1;
          e <= 0
            ? document.body.removeAttribute(_)
            : document.body.setAttribute(_, e.toString());
        }
      );
    }, []);
  },
  en = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r;
    Jt();
    var a = i.useMemo(
      function () {
        return Zt(o);
      },
      [o]
    );
    return i.createElement(qt, { styles: Qt(a, !t, o, n ? '' : '!important') });
  },
  ce = !1;
if (typeof window < 'u')
  try {
    var U = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((ce = !0), !0);
      },
    });
    (window.addEventListener('test', U, U),
      window.removeEventListener('test', U, U));
  } catch {
    ce = !1;
  }
var L = ce ? { passive: !1 } : !1,
  tn = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  Fe = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !tn(e) && n[t] === 'visible')
    );
  },
  nn = function (e) {
    return Fe(e, 'overflowY');
  },
  rn = function (e) {
    return Fe(e, 'overflowX');
  },
  Ce = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
      var o = ke(e, r);
      if (o) {
        var a = _e(e, r),
          u = a[1],
          s = a[2];
        if (u > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  on = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  an = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  ke = function (e, t) {
    return e === 'v' ? nn(t) : rn(t);
  },
  _e = function (e, t) {
    return e === 'v' ? on(t) : an(t);
  },
  sn = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  cn = function (e, t, n, r, o) {
    var a = sn(e, window.getComputedStyle(t).direction),
      u = a * r,
      s = n.target,
      v = t.contains(s),
      l = !1,
      d = u > 0,
      f = 0,
      m = 0;
    do {
      if (!s) break;
      var p = _e(e, s),
        R = p[0],
        c = p[1],
        h = p[2],
        g = c - h - a * R;
      (R || g) && ke(e, s) && ((f += g), (m += R));
      var b = s.parentNode;
      s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
    } while ((!v && s !== document.body) || (v && (t.contains(s) || t === s)));
    return (((d && Math.abs(f) < 1) || (!d && Math.abs(m) < 1)) && (l = !0), l);
  },
  K = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  we = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Se = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  un = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ln = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  dn = 0,
  F = [];
function fn(e) {
  var t = i.useRef([]),
    n = i.useRef([0, 0]),
    r = i.useRef(),
    o = i.useState(dn++)[0],
    a = i.useState(Le)[0],
    u = i.useRef(e);
  (i.useEffect(
    function () {
      u.current = e;
    },
    [e]
  ),
    i.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var c = Mt([e.lockRef.current], (e.shards || []).map(Se), !0).filter(
            Boolean
          );
          return (
            c.forEach(function (h) {
              return h.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              (document.body.classList.remove('block-interactivity-'.concat(o)),
                c.forEach(function (h) {
                  return h.classList.remove('allow-interactivity-'.concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    ));
  var s = i.useCallback(function (c, h) {
      if (
        ('touches' in c && c.touches.length === 2) ||
        (c.type === 'wheel' && c.ctrlKey)
      )
        return !u.current.allowPinchZoom;
      var g = K(c),
        b = n.current,
        C = 'deltaX' in c ? c.deltaX : b[0] - g[0],
        w = 'deltaY' in c ? c.deltaY : b[1] - g[1],
        S,
        N = c.target,
        E = Math.abs(C) > Math.abs(w) ? 'h' : 'v';
      if ('touches' in c && E === 'h' && N.type === 'range') return !1;
      var P = Ce(E, N);
      if (!P) return !0;
      if ((P ? (S = E) : ((S = E === 'v' ? 'h' : 'v'), (P = Ce(E, N))), !P))
        return !1;
      if (
        (!r.current && 'changedTouches' in c && (C || w) && (r.current = S), !S)
      )
        return !0;
      var W = r.current || S;
      return cn(W, h, c, W === 'h' ? C : w);
    }, []),
    v = i.useCallback(function (c) {
      var h = c;
      if (!(!F.length || F[F.length - 1] !== a)) {
        var g = 'deltaY' in h ? we(h) : K(h),
          b = t.current.filter(function (S) {
            return (
              S.name === h.type &&
              (S.target === h.target || h.target === S.shadowParent) &&
              un(S.delta, g)
            );
          })[0];
        if (b && b.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!b) {
          var C = (u.current.shards || [])
              .map(Se)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(h.target);
              }),
            w = C.length > 0 ? s(h, C[0]) : !u.current.noIsolation;
          w && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    l = i.useCallback(function (c, h, g, b) {
      var C = { name: c, delta: h, target: g, should: b, shadowParent: vn(g) };
      (t.current.push(C),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== C;
          });
        }, 1));
    }, []),
    d = i.useCallback(function (c) {
      ((n.current = K(c)), (r.current = void 0));
    }, []),
    f = i.useCallback(function (c) {
      l(c.type, we(c), c.target, s(c, e.lockRef.current));
    }, []),
    m = i.useCallback(function (c) {
      l(c.type, K(c), c.target, s(c, e.lockRef.current));
    }, []);
  i.useEffect(function () {
    return (
      F.push(a),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: m,
      }),
      document.addEventListener('wheel', v, L),
      document.addEventListener('touchmove', v, L),
      document.addEventListener('touchstart', d, L),
      function () {
        ((F = F.filter(function (c) {
          return c !== a;
        })),
          document.removeEventListener('wheel', v, L),
          document.removeEventListener('touchmove', v, L),
          document.removeEventListener('touchstart', d, L));
      }
    );
  }, []);
  var p = e.removeScrollBar,
    R = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    R ? i.createElement(a, { styles: ln(o) }) : null,
    p
      ? i.createElement(en, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function vn(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const mn = Ut(Ie, fn);
var We = i.forwardRef(function (e, t) {
  return i.createElement(Z, O({}, e, { ref: t, sideCar: mn }));
});
We.classNames = Z.classNames;
var hn = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  k = new WeakMap(),
  H = new WeakMap(),
  $ = {},
  ie = 0,
  je = function (e) {
    return e && (e.host || je(e.parentNode));
  },
  pn = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = je(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing'
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  gn = function (e, t, n, r) {
    var o = pn(t, Array.isArray(e) ? e : [e]);
    $[n] || ($[n] = new WeakMap());
    var a = $[n],
      u = [],
      s = new Set(),
      v = new Set(o),
      l = function (f) {
        !f || s.has(f) || (s.add(f), l(f.parentNode));
      };
    o.forEach(l);
    var d = function (f) {
      !f ||
        v.has(f) ||
        Array.prototype.forEach.call(f.children, function (m) {
          if (s.has(m)) d(m);
          else
            try {
              var p = m.getAttribute(r),
                R = p !== null && p !== 'false',
                c = (k.get(m) || 0) + 1,
                h = (a.get(m) || 0) + 1;
              (k.set(m, c),
                a.set(m, h),
                u.push(m),
                c === 1 && R && H.set(m, !0),
                h === 1 && m.setAttribute(n, 'true'),
                R || m.setAttribute(r, 'true'));
            } catch (g) {
              console.error('aria-hidden: cannot operate on ', m, g);
            }
        });
    };
    return (
      d(t),
      s.clear(),
      ie++,
      function () {
        (u.forEach(function (f) {
          var m = k.get(f) - 1,
            p = a.get(f) - 1;
          (k.set(f, m),
            a.set(f, p),
            m || (H.has(f) || f.removeAttribute(r), H.delete(f)),
            p || f.removeAttribute(n));
        }),
          ie--,
          ie ||
            ((k = new WeakMap()),
            (k = new WeakMap()),
            (H = new WeakMap()),
            ($ = {})));
      }
    );
  },
  yn = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = hn(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live], script'))),
        gn(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  q = 'Dialog',
  [Be] = at(q),
  [En, D] = Be(q),
  Ue = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        modal: u = !0,
      } = e,
      s = i.useRef(null),
      v = i.useRef(null),
      [l, d] = st({ prop: r, defaultProp: o ?? !1, onChange: a, caller: q });
    return y.jsx(En, {
      scope: t,
      triggerRef: s,
      contentRef: v,
      contentId: J(),
      titleId: J(),
      descriptionId: J(),
      open: l,
      onOpenChange: d,
      onOpenToggle: i.useCallback(() => d((f) => !f), [d]),
      modal: u,
      children: n,
    });
  };
Ue.displayName = q;
var Ke = 'DialogTrigger',
  He = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(Ke, n),
      a = I(t, o.triggerRef);
    return y.jsx(A.button, {
      type: 'button',
      'aria-haspopup': 'dialog',
      'aria-expanded': o.open,
      'aria-controls': o.contentId,
      'data-state': de(o.open),
      ...r,
      ref: a,
      onClick: x(e.onClick, o.onOpenToggle),
    });
  });
He.displayName = Ke;
var ue = 'DialogPortal',
  [bn, $e] = Be(ue, { forceMount: void 0 }),
  Ve = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      a = D(ue, t);
    return y.jsx(bn, {
      scope: t,
      forceMount: n,
      children: i.Children.map(r, (u) =>
        y.jsx(z, {
          present: n || a.open,
          children: y.jsx(Te, { asChild: !0, container: o, children: u }),
        })
      ),
    });
  };
Ve.displayName = ue;
var Y = 'DialogOverlay',
  Ge = i.forwardRef((e, t) => {
    const n = $e(Y, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = D(Y, e.__scopeDialog);
    return a.modal
      ? y.jsx(z, {
          present: r || a.open,
          children: y.jsx(wn, { ...o, ref: t }),
        })
      : null;
  });
Ge.displayName = Y;
var Cn = ct('DialogOverlay.RemoveScroll'),
  wn = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(Y, n);
    return y.jsx(We, {
      as: Cn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: y.jsx(A.div, {
        'data-state': de(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: 'auto', ...r.style },
      }),
    });
  }),
  M = 'DialogContent',
  Xe = i.forwardRef((e, t) => {
    const n = $e(M, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = D(M, e.__scopeDialog);
    return y.jsx(z, {
      present: r || a.open,
      children: a.modal
        ? y.jsx(Sn, { ...o, ref: t })
        : y.jsx(Rn, { ...o, ref: t }),
    });
  });
Xe.displayName = M;
var Sn = i.forwardRef((e, t) => {
    const n = D(M, e.__scopeDialog),
      r = i.useRef(null),
      o = I(t, n.contentRef, r);
    return (
      i.useEffect(() => {
        const a = r.current;
        if (a) return yn(a);
      }, []),
      y.jsx(Ye, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: x(e.onCloseAutoFocus, (a) => {
          (a.preventDefault(), n.triggerRef.current?.focus());
        }),
        onPointerDownOutside: x(e.onPointerDownOutside, (a) => {
          const u = a.detail.originalEvent,
            s = u.button === 0 && u.ctrlKey === !0;
          (u.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: x(e.onFocusOutside, (a) => a.preventDefault()),
      })
    );
  }),
  Rn = i.forwardRef((e, t) => {
    const n = D(M, e.__scopeDialog),
      r = i.useRef(!1),
      o = i.useRef(!1);
    return y.jsx(Ye, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        (e.onCloseAutoFocus?.(a),
          a.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), a.preventDefault()),
          (r.current = !1),
          (o.current = !1));
      },
      onInteractOutside: (a) => {
        (e.onInteractOutside?.(a),
          a.defaultPrevented ||
            ((r.current = !0),
            a.detail.originalEvent.type === 'pointerdown' && (o.current = !0)));
        const u = a.target;
        (n.triggerRef.current?.contains(u) && a.preventDefault(),
          a.detail.originalEvent.type === 'focusin' &&
            o.current &&
            a.preventDefault());
      },
    });
  }),
  Ye = i.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: a,
        ...u
      } = e,
      s = D(M, n),
      v = i.useRef(null),
      l = I(t, v);
    return (
      xt(),
      y.jsxs(y.Fragment, {
        children: [
          y.jsx(Pe, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: y.jsx(Oe, {
              role: 'dialog',
              id: s.contentId,
              'aria-describedby': s.descriptionId,
              'aria-labelledby': s.titleId,
              'data-state': de(s.open),
              ...u,
              ref: l,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          y.jsxs(y.Fragment, {
            children: [
              y.jsx(Dn, { titleId: s.titleId }),
              y.jsx(Nn, { contentRef: v, descriptionId: s.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  le = 'DialogTitle',
  ze = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(le, n);
    return y.jsx(A.h2, { id: o.titleId, ...r, ref: t });
  });
ze.displayName = le;
var Ze = 'DialogDescription',
  qe = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(Ze, n);
    return y.jsx(A.p, { id: o.descriptionId, ...r, ref: t });
  });
qe.displayName = Ze;
var Qe = 'DialogClose',
  Je = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(Qe, n);
    return y.jsx(A.button, {
      type: 'button',
      ...r,
      ref: t,
      onClick: x(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Je.displayName = Qe;
function de(e) {
  return e ? 'open' : 'closed';
}
var et = 'DialogTitleWarning',
  [jn, tt] = it(et, { contentName: M, titleName: le, docsSlug: 'dialog' }),
  Dn = ({ titleId: e }) => {
    const t = tt(et),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      i.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  On = 'DialogDescriptionWarning',
  Nn = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${tt(On).contentName}}.`;
    return (
      i.useEffect(() => {
        const o = e.current?.getAttribute('aria-describedby');
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Bn = Ue,
  Un = He,
  Kn = Ve,
  Hn = Ge,
  $n = Xe,
  Vn = ze,
  Gn = qe,
  Xn = Je;
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pn = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  An = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase()
    ),
  Re = (e) => {
    const t = An(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  nt = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== '' && r.indexOf(t) === n)
      .join(' ')
      .trim(),
  Tn = (e) => {
    for (const t in e)
      if (t.startsWith('aria-') || t === 'role' || t === 'title') return !0;
  };
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var xn = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mn = i.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = '',
      children: a,
      iconNode: u,
      ...s
    },
    v
  ) =>
    i.createElement(
      'svg',
      {
        ref: v,
        ...xn,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: nt('lucide', o),
        ...(!a && !Tn(s) && { 'aria-hidden': 'true' }),
        ...s,
      },
      [
        ...u.map(([l, d]) => i.createElement(l, d)),
        ...(Array.isArray(a) ? a : [a]),
      ]
    )
);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const In = (e, t) => {
  const n = i.forwardRef(({ className: r, ...o }, a) =>
    i.createElement(Mn, {
      ref: a,
      iconNode: t,
      className: nt(`lucide-${Pn(Re(e))}`, `lucide-${e}`, r),
      ...o,
    })
  );
  return ((n.displayName = Re(e)), n);
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ln = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  Yn = In('x', Ln);
export {
  $n as C,
  Gn as D,
  Pe as F,
  Hn as O,
  Kn as P,
  Bn as R,
  Vn as T,
  Yn as X,
  Xn as a,
  z as b,
  In as c,
  J as d,
  Te as e,
  xt as f,
  We as g,
  yn as h,
  Oe as i,
  Un as j,
  j as u,
};
