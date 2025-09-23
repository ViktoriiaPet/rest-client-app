import { j as e } from './chunk-B7RQU5TL-DOPFqT0B.js';
import { B as a } from './button-B9xj3Fbv.js';
import { u as n } from './useTranslation-0WW_tMsO.js';
const c = ({ name: t, value: s, onClick: r }) => {
  const { t: i } = n();
  return e.jsxs('div', {
    className: 'grid grid-cols-3 gap-4 items-center w-full',
    children: [
      e.jsx('div', {
        className: 'text-center font-medium text-purple-600',
        children: t,
      }),
      e.jsx('div', {
        className: 'text-center font-medium text-purple-600',
        children: s,
      }),
      e.jsx('div', {
        className: ' flex justify-center items-center',
        children: e.jsxs(a, {
          variant: 'custom',
          type: 'submit',
          onClick: r,
          children: [
            e.jsxs('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              className: 'lucide lucide-trash2 lucide-trash-2 h-4 w-4',
              'aria-hidden': 'true',
              children: [
                e.jsx('path', { d: 'M10 11v6' }),
                e.jsx('path', { d: 'M14 11v6' }),
                e.jsx('path', {
                  d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6',
                }),
                e.jsx('path', { d: 'M3 6h18' }),
                e.jsx('path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' }),
              ],
            }),
            i('variables.delete'),
          ],
        }),
      }),
    ],
  });
};
export { c as default };
