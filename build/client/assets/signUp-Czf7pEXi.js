import {
  w as M,
  r as a,
  u as I,
  j as e,
  a as P,
} from './chunk-B7RQU5TL-DOPFqT0B.js';
import { E as A, b as D, F as O, a as R, c as v } from './modal-snOD3Bw2.js';
import { r as T } from './firebase-_GfKOiAI.js';
import { B as b } from './button-B9xj3Fbv.js';
import { u as B } from './AuthContext-B8r0X3Wy.js';
import { u as L } from './useTranslation-0WW_tMsO.js';
import { F as $ } from './index.esm-BE3Wjq2f.js';
import './i18next-Bhq85MQn.js';
import './x-DuRsou1H.js';
import './index-DSc-_UGc.js';
import './index-BVdamgSP.js';
const _ = M(function () {
  const { t: o } = L(),
    [t, g] = a.useState({ username: '', email: '', password: '' }),
    [c, u] = a.useState({}),
    [, j] = a.useState(!1),
    { setUser: N, setToken: E, user: h } = B(),
    m = I(),
    [k, S] = a.useState(!1);
  a.useEffect(() => {
    S(!0);
  }, []);
  const [y, w] = a.useState(!1),
    [C, F] = a.useState(''),
    f = (l) => {
      (F(l), w(!0));
    };
  a.useEffect(() => {
    h && m('/mainClint');
  }, [h, m]);
  const d = (l) => {
      const { name: n, value: i } = l.target;
      g((r) => ({ ...r, [n]: i }));
      const p = v().safeParse({ ...t, [n]: i });
      if (p.success) u((r) => ({ ...r, [n]: void 0 }));
      else {
        const r = p.error.issues.find((x) => x.path[0] === n);
        u((x) => ({ ...x, [n]: r ? r.message : void 0 }));
      }
    },
    U = async (l) => {
      (l.preventDefault(), j(!0));
      const i = v().safeParse(t);
      if (i.success) {
        u({});
        try {
          const s = await T(t.username, t.email, t.password);
          s &&
            (N(s.user),
            E(s.token),
            (document.cookie = `userToken=${s.token}; path=/; max-age=3600; samesite=lax;`),
            (document.cookie = `userId=${s.user.uid}; path=/; max-age=3600; samesite=lax;`),
            m('/mainClint'));
        } catch (s) {
          s instanceof $
            ? (f(s.message), console.error('Firebase error:', s))
            : s instanceof Error
              ? (s.message.includes('setUser must be used within AuthProvider')
                  ? console.warn(
                      'Internal React hook error, ignoring for modal:',
                      s
                    )
                  : f(s.message),
                console.error('JS error:', s))
              : (f('Unknown error'), console.error('Unknown error:', s));
        }
      } else {
        const s = {};
        (i.error.issues.forEach((p) => {
          const r = p;
          r.path[0] && (s[r.path[0]] = r.message);
        }),
          u(s));
      }
    };
  return k
    ? e.jsxs('form', {
        onSubmit: U,
        className: 'form-position  text-purple-600  flex flex-col items-center',
        children: [
          e.jsx(A, { isOpen: y, onClose: () => w(!1), message: C }),
          e.jsx('h2', {
            className: 'pb-[3vw] font-inter text-xl text-purple-600',
            children: o('auth.signUp'),
          }),
          e.jsxs('div', {
            className:
              'flex flex-col items-center p-[5vw] w-[550px] gap-[1vw] rounded-[15%] border-2 border-purple-300',
            children: [
              e.jsxs('div', {
                className: 'relative w-full max-w-[40vw]',
                children: [
                  e.jsx(D, {
                    className:
                      'absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400',
                  }),
                  e.jsx('input', {
                    name: 'username',
                    placeholder: o('form.name'),
                    value: t.username,
                    onChange: d,
                    className:
                      'pl-10 pr-2 bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
                  }),
                ],
              }),
              e.jsx('p', {
                className: 'errors text-center w-full',
                children: c.username || '',
              }),
              e.jsxs('div', {
                className: 'relative w-full max-w-[40vw]',
                children: [
                  e.jsx(O, {
                    className:
                      'absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400',
                  }),
                  e.jsx('input', {
                    name: 'email',
                    placeholder: o('form.email'),
                    value: t.email,
                    onChange: d,
                    className:
                      'pl-10 pr-2 w-full bg-transparent border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
                  }),
                ],
              }),
              e.jsx('p', {
                className: 'errors text-center w-full',
                children: c.email || '',
              }),
              e.jsxs('div', {
                className: 'relative w-full max-w-[40vw]',
                children: [
                  e.jsx(R, {
                    className:
                      'absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400',
                  }),
                  e.jsx('input', {
                    name: 'password',
                    type: 'password',
                    placeholder: o('form.password'),
                    value: t.password,
                    onChange: d,
                    className:
                      'pl-10 pr-2 bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
                  }),
                ],
              }),
              e.jsx('p', {
                className: 'errors text-center w-full',
                children: c.password || '',
              }),
              e.jsxs('div', {
                className: 'buttons-block pt-[3vw]',
                children: [
                  e.jsx(b, {
                    variant: 'custom',
                    className: 'mr-[2vw]',
                    type: 'submit',
                    children: o('form.submit'),
                  }),
                  e.jsx(P, {
                    to: '/signIn',
                    end: !0,
                    children: e.jsx(b, {
                      variant: 'custom',
                      type: 'button',
                      children: o('auth.isAccount'),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : null;
});
export { _ as default };
