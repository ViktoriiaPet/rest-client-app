import { r as s, j as e } from './chunk-PVWAREVJ-DHjQzAty.js';
import { B as i } from './button-Bj7XQSOb.js';
import { u as c } from './useTranslation-ZsYxALZe.js';
const b = ({ onAdd: u }) => {
  const { t: r } = c(),
    [t, o] = s.useState(''),
    [a, n] = s.useState(''),
    p = () => {
      !t.trim() || !a.trim() || (u(t, a), o(''), n(''));
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('input', {
        name: 'variableName',
        type: 'text',
        placeholder: r('variables.variableName'),
        value: t,
        onChange: (l) => {
          o(l.target.value);
        },
        className:
          'pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
      }),
      e.jsx('input', {
        name: 'variableValue',
        type: 'text',
        placeholder: r('variables.variableValue'),
        value: a,
        onChange: (l) => {
          n(l.target.value);
        },
        className:
          'pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap',
      }),
      e.jsx('div', {
        className: ' flex justify-center items-center',
        children: e.jsx(i, {
          variant: 'custom',
          type: 'submit',
          onClick: p,
          children: r('variables.addButton'),
        }),
      }),
    ],
  });
};
export { b as default };
