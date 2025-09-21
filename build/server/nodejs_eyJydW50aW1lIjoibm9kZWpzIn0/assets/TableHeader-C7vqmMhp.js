import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
const TableHeader = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('div', {
        className:
          'text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center',
        children: t('variables.variableName'),
      }),
      /* @__PURE__ */ jsx('div', {
        className:
          'text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center',
        children: t('variables.variableValue'),
      }),
      /* @__PURE__ */ jsx('div', {
        className:
          'text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center ',
        children: t('variables.delete'),
      }),
    ],
  });
};
export { TableHeader as default };
