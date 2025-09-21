import { j as e } from './chunk-B7RQU5TL-BAM8tVsL.js';
import { u as s } from './useTranslation-CbMF285u.js';
const i = () => {
  const { t } = s();
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', {
        className:
          'text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center',
        children: t('variables.variableName'),
      }),
      e.jsx('div', {
        className:
          'text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center',
        children: t('variables.variableValue'),
      }),
      e.jsx('div', {
        className:
          'text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center ',
        children: t('variables.actions'),
      }),
    ],
  });
};
export { i as default };
