import {
  w as F,
  r as n,
  u as U,
  j as e,
  a as M,
} from './chunk-B7RQU5TL-BAM8tVsL.js';
import { E as I, b as P, F as A, a as D, c as v } from './modal-QAZcqYYj.js';
import { r as O } from './firebase-_GfKOiAI.js';
import { B as b } from './button-DEmol27v.js';
import { u as R } from './AuthContext-DbrGQ4pj.js';
import { u as T } from './useTranslation-CbMF285u.js';
import { F as B } from './index.esm-BE3Wjq2f.js';
import './i18next-Bhq85MQn.js';
import './x-u4spGL1k.js';
import './index-DbfQkS6M.js';
import './index-N5PhXsCK.js';
const Y = F(function () {
  const { t: a } = T(),
    [t, g] = n.useState({ username: '', email: '', password: '' }),
    [u, p] = n.useState({}),
    [, j] = n.useState(!1),
    { setUser: N, setToken: E, user: h } = R(),
    m = U(),
    [k, w] = n.useState(!1),
    [S, y] = n.useState(''),
    d = (l) => {
      (y(l), w(!0));
    };
  n.useEffect(() => {
    h && m('/mainClint');
  }, [h, m]);
  const f = (l) => {
      const { name: o, value: i } = l.target;
      g((r) => ({ ...r, [o]: i }));
      const c = v().safeParse({ ...t, [o]: i });
      if (c.success) p((r) => ({ ...r, [o]: void 0 }));
      else {
        const r = c.error.issues.find((x) => x.path[0] === o);
        p((x) => ({ ...x, [o]: r ? r.message : void 0 }));
      }
    },
    C = async (l) => {
      (l.preventDefault(), j(!0));
      const i = v().safeParse(t);
      if (i.success) {
        p({});
        try {
          const s = await O(t.username, t.email, t.password);
          s &&
            (N(s.user),
            E(s.token),
            (document.cookie = `userToken=${s.token}; path=/; max-age=3600; samesite=lax;`),
            (document.cookie = `userId=${s.user.uid}; path=/; max-age=3600; samesite=lax;`),
            m('/mainClint'));
        } catch (s) {
          s instanceof B
            ? (d(s.message), console.error('Firebase error:', s))
            : s instanceof Error
              ? (s.message.includes('setUser must be used within AuthProvider')
                  ? console.warn(
                      'Internal React hook error, ignoring for modal:',
                      s
                    )
                  : d(s.message),
                console.error('JS error:', s))
              : (d('Unknown error'), console.error('Unknown error:', s));
        }
      } else {
        const s = {};
        (i.error.issues.forEach((c) => {
          const r = c;
          r.path[0] && (s[r.path[0]] = r.message);
        }),
          p(s));
      }
    };
  return e.jsxs('form', {
    onSubmit: C,
    className: 'form-position  text-purple-600  flex flex-col items-center',
    children: [
      e.jsx(I, { isOpen: k, onClose: () => w(!1), message: S }),
      e.jsx('h2', {
        className: 'pb-[3vw] font-inter text-xl text-purple-600',
        children: a('auth.signUp'),
      }),
      e.jsxs('div', {
        className:
          'flex flex-col items-center p-[5vw] gap-[1vw] rounded-[15%] border-2 border-purple-300',
        children: [
          e.jsxs('div', {
            className: 'relative w-full max-w-[40vw]',
            children: [
              e.jsx(P, {
                className:
                  'absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400',
              }),
              e.jsx('input', {
                name: 'username',
                placeholder: a('form.name'),
                value: t.username,
                onChange: f,
                className:
                  'pl-10 pr-2 bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
              }),
            ],
          }),
          e.jsx('p', {
            className: 'errors text-center w-full',
            children: u.username || '',
          }),
          e.jsxs('div', {
            className: 'relative w-full max-w-[40vw]',
            children: [
              e.jsx(A, {
                className:
                  'absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400',
              }),
              e.jsx('input', {
                name: 'email',
                placeholder: a('form.email'),
                value: t.email,
                onChange: f,
                className:
                  'pl-10 pr-2 w-full bg-transparent border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
              }),
            ],
          }),
          e.jsx('p', {
            className: 'errors text-center w-full',
            children: u.email || '',
          }),
          e.jsxs('div', {
            className: 'relative w-full max-w-[40vw]',
            children: [
              e.jsx(D, {
                className:
                  'absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400',
              }),
              e.jsx('input', {
                name: 'password',
                type: 'password',
                placeholder: a('form.password'),
                value: t.password,
                onChange: f,
                className:
                  'pl-10 pr-2 bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
              }),
            ],
          }),
          e.jsx('p', {
            className: 'errors text-center w-full',
            children: u.password || '',
          }),
          e.jsxs('div', {
            className: 'buttons-block pt-[3vw]',
            children: [
              e.jsx(b, {
                variant: 'custom',
                className: 'mr-[2vw]',
                type: 'submit',
                children: a('form.submit'),
              }),
              e.jsx(M, {
                to: '/signIn',
                end: !0,
                children: e.jsx(b, {
                  variant: 'custom',
                  type: 'button',
                  children: a('auth.isAccount'),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});
export { Y as default };
