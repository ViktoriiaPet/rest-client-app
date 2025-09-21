import { j as e } from './chunk-B7RQU5TL-BAM8tVsL.js';
import { B as a } from './button-DEmol27v.js';
import { u as c } from './useTranslation-CbMF285u.js';
const o = ({ name: s, value: t, onClick: r }) => {
  const { t: i } = c();
  return e.jsxs('div', {
    className: 'grid grid-cols-3 gap-4 items-center w-full',
    children: [
      e.jsx('div', { className: 'text-center', children: s }),
      e.jsx('div', { className: 'text-center', children: t }),
      e.jsx('div', {
        className: ' flex justify-center items-center',
        children: e.jsx(a, {
          variant: 'custom',
          type: 'submit',
          onClick: r,
          children: i('variables.delete'),
        }),
      }),
    ],
  });
};
export { o as default };
