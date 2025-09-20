import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { B as Button } from './server-build-Cid4_edn.js';
import 'node:stream';
import '@react-router/node';
import 'react-router';
import 'isbot';
import 'react-dom/server';
import 'react';
import 'react-redux';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'i18next';
import 'i18next-browser-languagedetector';
import '@radix-ui/react-switch';
import 'clsx';
import 'tailwind-merge';
import '@reduxjs/toolkit';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '@radix-ui/react-avatar';
import 'react-icons/fa';
import 'zod';
import '@radix-ui/react-dialog';
import 'lucide-react';
import 'react-router-dom';
import 'cookie';
const TableRow = ({ name, value, onClick }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs('div', {
    className: 'grid grid-cols-3 gap-4 items-center w-full',
    children: [
      /* @__PURE__ */ jsx('div', { className: 'text-center', children: name }),
      /* @__PURE__ */ jsx('div', { className: 'text-center', children: value }),
      /* @__PURE__ */ jsx('div', {
        className: ' flex justify-center items-center',
        children: /* @__PURE__ */ jsx(Button, {
          variant: 'custom',
          type: 'submit',
          onClick,
          children: t('variables.delete'),
        }),
      }),
    ],
  });
};
export { TableRow as default };
