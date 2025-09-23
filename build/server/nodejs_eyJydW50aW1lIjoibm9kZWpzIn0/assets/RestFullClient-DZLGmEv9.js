import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  B as Button,
  c as cn,
  D as DEFAULT_METHODS,
  d as db,
  h as hasHeader,
  u as useAuth,
  t as toRecord,
  b as buildClientUrl,
} from './server-build-CKDFL2Wv.js';
import {
  Check,
  Trash2,
  Plus,
  ChevronDown,
  ChevronUp,
  Loader2,
  X,
} from 'lucide-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import 'node:stream';
import '@react-router/node';
import 'react-router';
import 'isbot';
import 'react-dom/server';
import 'react-redux';
import 'firebase/app';
import 'firebase/auth';
import 'i18next';
import 'i18next-browser-languagedetector';
import '@radix-ui/react-switch';
import 'clsx';
import 'tailwind-merge';
import '@reduxjs/toolkit';
import '@radix-ui/react-slot';
import 'react-icons/fa';
import 'zod';
import 'cookie';
function BodyModeSelector({ value, onChange }) {
  const modes = ['none', 'json', 'form-data', 'raw'];
  return /* @__PURE__ */ jsx('div', {
    className: 'flex items-center gap-2',
    children: modes.map((mode) => {
      const active = value === mode;
      return /* @__PURE__ */ jsx(
        Button,
        {
          type: 'button',
          size: 'sm',
          variant: 'outline',
          'aria-pressed': active,
          className: active
            ? 'bg-pink-300 text-purple-700 font-semibold py-2 px-4 rounded-lg shadow-none border border-pink-300'
            : 'bg-pink-200 text-purple-600 hover:bg-yellow-100 font-semibold py-2 px-4 rounded-lg shadow-md',
          onClick: () => onChange(mode),
          children: mode,
        },
        mode
      );
    }),
  });
}
const Checkbox = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
    ref,
    className: cn(
      'peer h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none',
      'border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500',
      'bg-pink-200',
      'data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500 data-[state=checked]:text-white',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
      className: cn('flex items-center justify-center text-current'),
      children: /* @__PURE__ */ jsx(Check, { className: 'h-4 w-4' }),
    }),
  })
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx('input', {
    type,
    className: cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className
    ),
    ref,
    ...props,
  });
});
Input.displayName = 'Input';
function withIds(rows) {
  return rows.map((r) => ({
    ...r,
    id: r.id || cryptoId(),
    enabled: r.enabled ?? true,
  }));
}
function newRow(key = '', value = '') {
  return { id: cryptoId(), enabled: true, key, value };
}
function cryptoId() {
  return Math.random().toString(36).slice(2, 10);
}
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function validateJson(text) {
  if (!text.trim()) return void 0;
  try {
    JSON.parse(text);
    return void 0;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return `JSON error: ${msg}`;
  }
}
function prettifyJson(text) {
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return text;
  }
}
function KeyValueEditor({ rows, onChange, addLabel }) {
  const update = (id, patch) => {
    onChange(rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };
  const remove = (id) => {
    onChange(rows.filter((row) => row.id !== id));
  };
  const add = () => {
    onChange([...rows, newRow()]);
  };
  return /* @__PURE__ */ jsxs('div', {
    className: 'w-full space-y-2',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'space-y-2',
        children: rows.map((row) =>
          /* @__PURE__ */ jsxs(
            'div',
            {
              className: 'flex items-center gap-4',
              children: [
                /* @__PURE__ */ jsx(Checkbox, {
                  className:
                    '\r\n                  h-5 w-5\r\n                  bg-pink-300 border-pink-300\r\n                  data-[state=checked]:bg-pink-300 data-[state=checked]:border-pink-300\r\n                  focus-visible:outline-none outline-none\r\n                  focus-visible:ring-0 ring-0 ring-offset-0\r\n                  shadow-none\r\n                ',
                  checked: row.enabled,
                  onCheckedChange: (checked) =>
                    update(row.id, { enabled: checked === true }),
                }),
                /* @__PURE__ */ jsx(Input, {
                  value: row.key,
                  onChange: (e) => {
                    update(row.id, { key: e.target.value });
                  },
                  placeholder: 'Key',
                  className:
                    'border-pink-300 focus-visible:ring-pink-500 caret-pink-600 placeholder-pink-300/70',
                }),
                /* @__PURE__ */ jsx(Input, {
                  value: row.value,
                  onChange: (e) => {
                    update(row.id, { value: e.target.value });
                  },
                  placeholder: 'Value',
                  className:
                    'border-pink-300 focus-visible:ring-pink-500 caret-pink-600 placeholder-pink-300/70',
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'ghost',
                  size: 'icon',
                  type: 'button',
                  onClick: () => {
                    remove(row.id);
                  },
                  className:
                    '\r\n                cursor-pointer\r\n                bg-transparent hover:bg-transparent active:bg-transparent\r\n                text-pink-600 hover:text-pink-700\r\n                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 focus-visible:ring-offset-2\r\n                transition-colors\r\n              ',
                  children: /* @__PURE__ */ jsx(Trash2, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            },
            row.id
          )
        ),
      }),
      /* @__PURE__ */ jsx('div', {
        children: /* @__PURE__ */ jsxs(Button, {
          variant: 'outline',
          className:
            'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
          size: 'sm',
          type: 'button',
          onClick: add,
          children: [
            /* @__PURE__ */ jsx(Plus, { className: 'mr-2 h-4 w-4' }),
            ' ',
            addLabel,
          ],
        }),
      }),
    ],
  });
}
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) =>
    /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
      ref,
      className: cn(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
          asChild: true,
          children: /* @__PURE__ */ jsx(ChevronDown, {
            className: 'h-4 w-4 opacity-50',
          }),
        }),
      ],
    })
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
    ref,
    className: cn(
      'flex cursor-default items-center justify-center py-1',
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: 'h-4 w-4' }),
  })
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
      ref,
      className: cn(
        'flex cursor-default items-center justify-center py-1',
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDown, { className: 'h-4 w-4' }),
    })
);
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(
  ({ className, children, position = 'popper', ...props }, ref) =>
    /* @__PURE__ */ jsx(SelectPrimitive.Portal, {
      children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
        ref,
        className: cn(
          'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        ),
        position,
        ...props,
        children: [
          /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
          /* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
            className: cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            ),
            children,
          }),
          /* @__PURE__ */ jsx(SelectScrollDownButton, {}),
        ],
      }),
    })
);
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(SelectPrimitive.Label, {
    ref,
    className: cn('px-2 py-1.5 text-sm font-semibold', className),
    ...props,
  })
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
    ref,
    className: cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx('span', {
        className:
          'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx(Check, { className: 'h-4 w-4' }),
        }),
      }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children }),
    ],
  })
);
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
    ref,
    className: cn('-mx-1 my-1 h-px bg-muted', className),
    ...props,
  })
);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const badgeColor = (code) => {
  if (code < 200) return 'bg-blue-600';
  if (code < 300) return 'bg-green-600';
  if (code < 400) return 'bg-orange-500';
  if (code < 500) return 'bg-red-600';
  return 'bg-rose-600';
};
const getMethodTextColor = (method) => {
  switch (method) {
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
function RequestBar({
  method = 'GET',
  url = '',
  methods = DEFAULT_METHODS,
  loading = false,
  validateUrl = true,
  className = '',
  onChange,
  onSend,
}) {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState(method);
  const [requestUrl, setRequestUrl] = useState(url);
  const [hasUserTyped, setHasUserTyped] = useState(false);
  useEffect(() => {
    setSelectedMethod(method);
  }, [method]);
  useEffect(() => {
    setRequestUrl(url);
  }, [url]);
  const isValidUrl2 = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };
  const isUrlValid = useMemo(() => {
    if (!validateUrl || !hasUserTyped) return true;
    return isValidUrl2(requestUrl);
  }, [requestUrl, hasUserTyped, validateUrl]);
  const handleSubmit = (e) => {
    e?.preventDefault();
    onSend?.({ method: selectedMethod, url: requestUrl });
  };
  const handleMethodChange = (value) => {
    const nextMethod = value;
    setSelectedMethod(nextMethod);
    onChange?.({ method: nextMethod, url: requestUrl });
  };
  const handleUrlChange = (value) => {
    if (!hasUserTyped) setHasUserTyped(true);
    setRequestUrl(value);
    onChange?.({ method: selectedMethod, url: value });
  };
  return /* @__PURE__ */ jsx('form', {
    onSubmit: handleSubmit,
    className: `w-full ${className}`,
    children: /* @__PURE__ */ jsxs('div', {
      className: 'w-full flex items-center gap-2',
      children: [
        /* @__PURE__ */ jsxs(Select, {
          value: selectedMethod,
          disabled: loading,
          onValueChange: handleMethodChange,
          children: [
            /* @__PURE__ */ jsx(SelectTrigger, {
              className: 'w-[130px]',
              children: /* @__PURE__ */ jsx('div', {
                className: `flex items-center gap-2 ${getMethodTextColor(selectedMethod)}`,
                children: /* @__PURE__ */ jsx(SelectValue, {}),
              }),
            }),
            /* @__PURE__ */ jsx(SelectContent, {
              className: 'z-50',
              children: methods.map((methodOption) =>
                /* @__PURE__ */ jsx(
                  SelectItem,
                  {
                    value: methodOption,
                    children: /* @__PURE__ */ jsx('div', {
                      className: 'flex items-center gap-2',
                      children: /* @__PURE__ */ jsx('span', {
                        className: getMethodTextColor(methodOption),
                        children: methodOption,
                      }),
                    }),
                  },
                  methodOption
                )
              ),
            }),
          ],
        }),
        /* @__PURE__ */ jsx(Input, {
          placeholder: 'https://api.example.com/endpoint',
          value: requestUrl,
          disabled: loading,
          onChange: (e) => {
            handleUrlChange(e.target.value);
          },
          className: `h-9 w-full rounded-md border px-3 text-base shadow-sm
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
            disabled:cursor-not-allowed disabled:opacity-50
            ${isUrlValid ? 'border-pink-300' : 'border-pink-500'}
          `,
        }),
        /* @__PURE__ */ jsxs(Button, {
          className:
            'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
          type: 'submit',
          disabled: loading || !isUrlValid,
          children: [
            !!loading &&
              /* @__PURE__ */ jsx(Loader2, {
                className: 'mr-2 h-4 w-4 animate-spin',
              }),
            t('buttons.send'),
          ],
        }),
      ],
    }),
  });
}
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(TabsPrimitive.List, {
    ref,
    className: cn(
      'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
      className
    ),
    ...props,
  })
);
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
    ref,
    className: cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
      className
    ),
    ...props,
  })
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(TabsPrimitive.Content, {
    ref,
    className: cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    ),
    ...props,
  })
);
TabsContent.displayName = TabsPrimitive.Content.displayName;
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx('textarea', {
    className: cn(
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className
    ),
    ref,
    ...props,
  });
});
Textarea.displayName = 'Textarea';
function RequestEditor({
  method = 'GET',
  url = '',
  params = [],
  headers = [],
  bodyMode = 'none',
  jsonText = '',
  formData = [],
  rawText = '',
  methods = DEFAULT_METHODS,
  loading = false,
  validateUrl = true,
  className = '',
  onChange,
  onSend,
}) {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState(method);
  const [requestUrl, setRequestUrl] = useState(url);
  const [queryParams, setQueryParams] = useState(withIds(params));
  const [requestHeaders, setRequestHeaders] = useState(withIds(headers));
  const [mode, setMode] = useState(bodyMode);
  const [jsonBody, setJsonBody] = useState(jsonText);
  const [formRows, setFormRows] = useState(withIds(formData));
  const [rawBody, setRawBody] = useState(rawText);
  useEffect(() => {
    setSelectedMethod(method);
  }, [method]);
  useEffect(() => {
    setRequestUrl(url);
  }, [url]);
  const jsonError = useMemo(() => validateJson(jsonBody), [jsonBody]);
  const snapshot = useMemo(
    () => ({
      method: selectedMethod,
      url: requestUrl,
      params: queryParams,
      headers: requestHeaders,
      body: { mode, jsonText: jsonBody, formData: formRows, rawText: rawBody },
    }),
    [
      selectedMethod,
      requestUrl,
      queryParams,
      requestHeaders,
      mode,
      jsonBody,
      formRows,
      rawBody,
    ]
  );
  useEffect(() => {
    onChange?.(snapshot);
  }, [snapshot, onChange]);
  const urlInvalid = validateUrl && !isValidUrl(requestUrl);
  const submit = (e) => {
    if (urlInvalid) return;
    onSend?.(snapshot);
  };
  return /* @__PURE__ */ jsxs('section', {
    className: `w-full space-y-3 ${className}`,
    children: [
      /* @__PURE__ */ jsx(RequestBar, {
        method: selectedMethod,
        url: requestUrl,
        methods,
        loading,
        validateUrl,
        onChange: ({ method: method2, url: url2 }) => {
          setSelectedMethod(method2);
          setRequestUrl(url2);
        },
        onSend: () => submit(),
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'px-1 h-4 ml-30',
        children:
          urlInvalid &&
          /* @__PURE__ */ jsx('div', {
            className: 'px-1 text-[14px] text-rose-600',
            children: t('request.invalidUrl'),
          }),
      }),
      /* @__PURE__ */ jsxs(Tabs, {
        defaultValue: 'params',
        className: 'w-full',
        children: [
          /* @__PURE__ */ jsxs(TabsList, {
            className: 'bg-pink-50/40 p-1 rounded-xl',
            children: [
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: 'params',
                className:
                  'transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600',
                children: t('request.params'),
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: 'headers',
                className:
                  'transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600',
                children: t('request.headers'),
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: 'body',
                className:
                  'transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600',
                children: t('request.body'),
              }),
            ],
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: 'params',
            className: 'space-y-2',
            children: /* @__PURE__ */ jsx(KeyValueEditor, {
              rows: queryParams,
              onChange: setQueryParams,
              addLabel: t('request.addParam'),
            }),
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: 'headers',
            children: /* @__PURE__ */ jsx(KeyValueEditor, {
              rows: requestHeaders,
              onChange: setRequestHeaders,
              addLabel: t('request.addHeader'),
            }),
          }),
          /* @__PURE__ */ jsxs(TabsContent, {
            value: 'body',
            className: 'space-y-3',
            children: [
              /* @__PURE__ */ jsx(BodyModeSelector, {
                value: mode,
                onChange: setMode,
              }),
              mode === 'json' &&
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-2',
                  children: [
                    /* @__PURE__ */ jsxs('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        /* @__PURE__ */ jsx('div', {
                          className: `text-[14px] ${jsonError ? 'text-rose-600' : 'text-slate-500'}`,
                          children: jsonError,
                        }),
                        /* @__PURE__ */ jsx('div', {
                          className: 'flex items-center gap-2',
                          children: /* @__PURE__ */ jsx(Button, {
                            type: 'button',
                            variant: 'outline',
                            size: 'sm',
                            className:
                              'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
                            onClick: () => setJsonBody(prettifyJson(jsonBody)),
                            disabled: !!jsonError,
                            children: t('buttons.prettify'),
                          }),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx(Textarea, {
                      value: jsonBody,
                      onChange: (e) => setJsonBody(e.target.value),
                      placeholder: '{"hello":"world"}',
                      className:
                        'min-h-[180px] font-mono text-sm rounded-lg border border-pink-300/60 bg-pink-50/40',
                    }),
                  ],
                }),
              mode === 'form-data' &&
                /* @__PURE__ */ jsx(KeyValueEditor, {
                  rows: formRows,
                  onChange: setFormRows,
                  addLabel: t('request.addField'),
                }),
              mode === 'raw' &&
                /* @__PURE__ */ jsx(Textarea, {
                  value: rawBody,
                  onChange: (e) => setRawBody(e.target.value),
                  placeholder: t('request.rawBody'),
                  className: 'min-h-[140px] font-mono text-sm',
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
const STATUS_TEXT = {
  100: 'Continue',
  101: 'Switching Protocols',
  102: 'Processing',
  103: 'Early Hints',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status',
  208: 'Already Reported',
  226: 'IM Used',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: "I'm a teapot",
  421: 'Misdirected Request',
  422: 'Unprocessable Content',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Too Early',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  510: 'Not Extended',
  511: 'Network Authentication Required',
};
const getStatusText = (code) => STATUS_TEXT[code] ?? '';
function ResponseSection({ statusCode, statusText, json, className = '' }) {
  const { t } = useTranslation();
  const prettyJson = useMemo(() => {
    if (!json) return '';
    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch {
      return json;
    }
  }, [json]);
  const copy = async () => {
    await navigator.clipboard.writeText(prettyJson);
  };
  return /* @__PURE__ */ jsxs('section', {
    className: `w-full flex-1 min-w-0 self-stretch rounded-xl border bg-white overflow-hidden ${className}`,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className:
          'flex items-center justify-between gap-3 border-b bg-white px-4 py-2',
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: 'flex items-center gap-3 min-w-0',
            children: [
              /* @__PURE__ */ jsx('span', {
                className: `inline-flex items-center rounded-full px-2.5 py-1 text-[14px] font-semibold text-white ${badgeColor(
                  statusCode
                )}`,
                children: statusCode,
              }),
              /* @__PURE__ */ jsx('span', {
                className: 'text-sm text-slate-700 truncate',
                title: statusText ?? '',
                children: statusText ?? getStatusText(statusCode),
              }),
            ],
          }),
          /* @__PURE__ */ jsx(Button, {
            variant: 'custom',
            type: 'button',
            onClick: copy,
            children: t('request.copyJSON'),
          }),
        ],
      }),
      /* @__PURE__ */ jsx('pre', {
        className:
          'm-0 max-h-[60vh] overflow-auto p-4 text-sm leading-6 whitespace-pre',
        children: prettyJson || '(empty)',
      }),
    ],
  });
}
const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetPortal = DialogPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
    className: cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    ),
    ...props,
    ref,
  })
);
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
const sheetVariants = cva(
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
    defaultVariants: {
      side: 'right',
    },
  }
);
const SheetContent = React.forwardRef(
  ({ side = 'right', className, children, ...props }, ref) =>
    /* @__PURE__ */ jsxs(SheetPortal, {
      children: [
        /* @__PURE__ */ jsx(SheetOverlay, {}),
        /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
          ref,
          className: cn(sheetVariants({ side }), className),
          ...props,
          children: [
            /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
              className:
                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
              children: [
                /* @__PURE__ */ jsx(X, { className: 'h-4 w-4' }),
                /* @__PURE__ */ jsx('span', {
                  className: 'sr-only',
                  children: 'Close',
                }),
              ],
            }),
            children,
          ],
        }),
      ],
    })
);
SheetContent.displayName = DialogPrimitive.Content.displayName;
const SheetHeader = ({ className, ...props }) =>
  /* @__PURE__ */ jsx('div', {
    className: cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    ),
    ...props,
  });
SheetHeader.displayName = 'SheetHeader';
const SheetTitle = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DialogPrimitive.Title, {
    ref,
    className: cn('text-lg font-semibold text-foreground', className),
    ...props,
  })
);
SheetTitle.displayName = DialogPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DialogPrimitive.Description, {
    ref,
    className: cn('text-sm text-muted-foreground', className),
    ...props,
  })
);
SheetDescription.displayName = DialogPrimitive.Description.displayName;
const LANGS = [
  'cURL',
  'JavaScript (fetch)',
  'JavaScript (XHR)',
  'NodeJS',
  'Python',
  'Java',
  'C#',
  'Go',
];
const TARGETS = {
  cURL: ['shell', 'curl', { indent: '  ', short: false }],
  'JavaScript (fetch)': ['javascript', 'fetch'],
  'JavaScript (XHR)': ['javascript', 'xhr'],
  NodeJS: ['node', 'native'],
  Python: ['python', 'requests'],
  Java: ['java', 'okhttp'],
  'C#': ['csharp', 'httpclient'],
  Go: ['go', 'native'],
};
function buildUrl(snapshot) {
  try {
    const url = new URL(snapshot.url);
    for (const p of snapshot.params ?? [])
      if (p.enabled && p.key) url.searchParams.set(p.key, p.value);
    return url.toString();
  } catch {
    return null;
  }
}
function isHttpsnippetModule(mod) {
  if (typeof mod !== 'object' || mod === null) return false;
  const rec = mod;
  const candidate = rec.HTTPSnippet ?? rec.default;
  return typeof candidate === 'function';
}
async function loadHttpsnippetCtor() {
  const mod = await import('httpsnippet-lite');
  if (!isHttpsnippetModule(mod))
    throw new Error('Invalid httpsnippet-lite module');
  return mod.HTTPSnippet ?? mod.default;
}
function toNameValue(rows) {
  return rows
    .filter((r) => r.enabled && !!r.key)
    .map((r) => ({ name: r.key, value: r.value }));
}
function contentTypeForRaw(snapshot) {
  const ct = snapshot.headers.find(
    (h) => h.enabled && h.key.toLowerCase() === 'content-type'
  )?.value;
  return ct ?? 'text/plain; charset=utf-8';
}
function buildHarFromSnapshot(snapshot, url) {
  const method = snapshot.method.toUpperCase();
  const canSendBody = method !== 'GET' && method !== 'HEAD';
  let postData;
  if (canSendBody && snapshot.body.mode !== 'none') {
    if (snapshot.body.mode === 'json') {
      postData = {
        mimeType: 'application/json',
        text: snapshot.body.jsonText ?? '',
      };
    } else if (snapshot.body.mode === 'form-data') {
      const params = (snapshot.body.formData ?? [])
        .filter((r) => r.enabled && !!r.key)
        .map((r) => ({ name: r.key, value: r.value }));
      postData = { mimeType: 'multipart/form-data', params };
    } else if (snapshot.body.mode === 'raw') {
      postData = {
        mimeType: contentTypeForRaw(snapshot),
        text: snapshot.body.rawText ?? '',
      };
    }
  }
  return {
    method,
    url,
    httpVersion: 'HTTP/1.1',
    headers: toNameValue(snapshot.headers),
    queryString: toNameValue(snapshot.params),
    postData,
  };
}
async function generateSnippets(snapshot, finalUrl) {
  const HTTPSnippet = await loadHttpsnippetCtor();
  const instance = new HTTPSnippet(buildHarFromSnapshot(snapshot, finalUrl));
  const entries = await Promise.all(
    LANGS.map(async (lang) => {
      const [target, client, opts] = TARGETS[lang];
      const out = await instance.convert(target, client, opts);
      return [lang, typeof out === 'string' ? out : void 0];
    })
  );
  const code = {};
  for (const [key, value] of entries) if (value) code[key] = value;
  return code;
}
function firstAvailableLanguage(code) {
  return LANGS.find((l) => !!code[l]) ?? null;
}
function GeneratedCodePanel({ snapshot, className = '' }) {
  const { t } = useTranslation();
  const [state, setState] = React.useState({ status: 'idle' });
  const [selected, setSelected] = React.useState(null);
  const finalUrl = React.useMemo(() => buildUrl(snapshot), [snapshot]);
  React.useEffect(() => {
    if (!finalUrl) {
      setState({ status: 'error', message: t('restfull.urlInvalid') });
      return;
    }
    setState({ status: 'loading' });
    generateSnippets(snapshot, finalUrl)
      .then((code) => {
        const first = firstAvailableLanguage(code);
        setState({
          status: 'ready',
          code,
          context: { method: snapshot.method, url: finalUrl },
        });
        setSelected(first);
      })
      .catch(() =>
        setState({ status: 'error', message: t('restfull.genFailed') })
      );
  }, [snapshot, finalUrl, t]);
  const currentSnippet =
    state.status === 'ready' && selected ? state.code[selected] : void 0;
  const copy = React.useCallback(async (text) => {
    await navigator.clipboard.writeText(text);
  }, []);
  return /* @__PURE__ */ jsxs('section', {
    className: `rounded-xl border bg-white ${className}`,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center justify-between gap-2 border-b px-4 py-2',
        children: [
          /* @__PURE__ */ jsx('h3', {
            className: 'text-sm font-semibold',
            children: t('restfull.generatedCode'),
          }),
          state.status === 'ready' &&
            /* @__PURE__ */ jsxs('span', {
              className: 'text-[14px] text-slate-500',
              children: [state.context.method, ' • ', state.context.url],
            }),
        ],
      }),
      state.status === 'loading' &&
        /* @__PURE__ */ jsx('div', {
          className: 'p-4 text-sm text-slate-600',
          children: t('restfull.generating'),
        }),
      state.status === 'error' &&
        /* @__PURE__ */ jsx('div', {
          className: 'p-4 text-sm text-rose-600',
          children: state.message,
        }),
      state.status === 'ready' &&
        /* @__PURE__ */ jsxs('div', {
          className: 'p-3 space-y-3',
          children: [
            /* @__PURE__ */ jsxs(Select, {
              value: selected ?? void 0,
              onValueChange: (v) => setSelected(v),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, {
                  className: 'w-full sm:w-72',
                  children: /* @__PURE__ */ jsx(SelectValue, {
                    placeholder: t('restfull.chooseLanguage'),
                  }),
                }),
                /* @__PURE__ */ jsx(SelectContent, {
                  children: LANGS.map((lang) =>
                    /* @__PURE__ */ jsx(
                      SelectItem,
                      {
                        value: lang,
                        disabled: !state.code[lang],
                        children: lang,
                      },
                      lang
                    )
                  ),
                }),
              ],
            }),
            !currentSnippet
              ? /* @__PURE__ */ jsx('div', {
                  className:
                    'px-2 py-6 text-sm text-slate-500 border rounded-lg',
                  children: t('restfull.notAvailable'),
                })
              : /* @__PURE__ */ jsxs(Fragment, {
                  children: [
                    /* @__PURE__ */ jsxs('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        /* @__PURE__ */ jsx('div', {
                          className: 'text-[14px] text-slate-500',
                          children: selected,
                        }),
                        /* @__PURE__ */ jsx(Button, {
                          size: 'sm',
                          variant: 'outline',
                          onClick: () => copy(currentSnippet),
                          children: t('buttons.copy'),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx('pre', {
                      className:
                        'overflow-auto rounded-lg border bg-slate-50 p-3 text-[14px]',
                      children: currentSnippet,
                    }),
                  ],
                }),
          ],
        }),
    ],
  });
}
function CodePanelSheet({ snapshot }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Sheet, {
    children: [
      /* @__PURE__ */ jsx(SheetTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx(Button, {
          variant: 'outline',
          className:
            'hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md',
          children: t('restfull.codeBtn'),
        }),
      }),
      /* @__PURE__ */ jsxs(SheetContent, {
        side: 'right',
        className:
          'z-50 bg-pink-200 text-purple-600 sm:max-w-md lg:max-w-xl w-[92vw]',
        children: [
          /* @__PURE__ */ jsx(SheetHeader, {
            children: /* @__PURE__ */ jsx(SheetTitle, {
              className: 'text-purple-600',
              children: t('restfull.generatedCode'),
            }),
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'mt-4',
            children: snapshot
              ? /* @__PURE__ */ jsx(GeneratedCodePanel, {
                  snapshot,
                  className: 'w-full',
                })
              : /* @__PURE__ */ jsx('div', {
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
async function logRequest(payload) {
  const doc = {
    ...payload,
    createdAt: serverTimestamp(),
  };
  await addDoc(collection(db, 'requests'), doc);
}
function applyVariables(text, vars = {}) {
  if (text.length === 0) return '';
  const pattern = /\{\{(\w+)\}\}/g;
  return text.replace(pattern, (_match, key) => {
    const value = vars[key];
    return value ?? '';
  });
}
function getLSVars(uid) {
  return JSON.parse(localStorage.getItem(`userVariables_${uid}`) ?? '{}');
}
function utf8Bytes(s) {
  return new TextEncoder().encode(s).length;
}
function headersBytesTotalFromRecord(rec) {
  let sum = 0;
  for (const [k, v] of Object.entries(rec))
    sum += utf8Bytes(`${k}: ${v}\r
`);
  return sum;
}
function headersToRecord(h) {
  const out = {};
  h.forEach((v, k) => {
    out[k] = v;
  });
  return out;
}
async function computeRequestByteSizes(url, method, headers, body) {
  const req = new Request(url, { method, headers: new Headers(headers), body });
  const requestBodyBytes = req.body
    ? (await new Response(req.body).arrayBuffer()).byteLength
    : 0;
  const finalHeaders = headersToRecord(req.headers);
  const requestHeadersBytes = headersBytesTotalFromRecord(finalHeaders);
  return {
    requestBodyBytes,
    requestHeadersBytes,
    requestBytes: requestHeadersBytes + requestBodyBytes,
    finalHeaders,
  };
}
function resolveBodyText(snapshot, vars) {
  if (snapshot.body.mode === 'json')
    return applyVariables(snapshot.body.jsonText ?? '', vars);
  if (snapshot.body.mode === 'raw')
    return applyVariables(snapshot.body.rawText ?? '', vars);
  return '';
}
function mergeQueryParams(url, params) {
  try {
    const u = new URL(url);
    for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
    return u.toString();
  } catch {
    return null;
  }
}
function ensureContentType(headers, snapshot) {
  if (snapshot.body.mode === 'json' && !hasHeader(headers, 'content-type')) {
    return { ...headers, 'Content-Type': 'application/json' };
  }
  return { ...headers };
}
function buildRequestBody(snapshot, resolvedBodyText, vars) {
  const canSendBody = !['GET', 'HEAD'].includes(snapshot.method);
  if (!canSendBody) return void 0;
  switch (snapshot.body.mode) {
    case 'json':
      return resolvedBodyText;
    case 'form-data': {
      const form = new FormData();
      (snapshot.body.formData ?? [])
        .filter((r) => r.enabled && r.key)
        .forEach((r) => {
          form.append(
            applyVariables(r.key, vars),
            applyVariables(r.value, vars)
          );
        });
      return form;
    }
    case 'raw':
      return resolvedBodyText;
    default:
      return void 0;
  }
}
function recToRows(rec) {
  return Object.entries(rec ?? {}).map(([k, v]) => ({
    id: crypto.randomUUID(),
    enabled: true,
    key: k,
    value: String(v),
  }));
}
function fromB64JSON(b64) {
  try {
    const decoded = decodeURIComponent(b64);
    if (typeof Buffer !== 'undefined')
      return JSON.parse(Buffer.from(decoded, 'base64').toString('utf8'));
    return JSON.parse(decodeURIComponent(escape(atob(decoded))));
  } catch {
    return void 0;
  }
}
function isHttpMethod(m) {
  return DEFAULT_METHODS.includes(m.toUpperCase());
}
function normalizeMethod(input) {
  if (!input) return 'GET';
  if (typeof input !== 'string') return input;
  const upper = input.toUpperCase();
  return isHttpMethod(upper) ? upper : 'GET';
}
function RestFullClient({ method, onChange }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const prefillState = location.state?.prefill;
  const prefillQS = searchParams.get('prefill');
  const prefillFromQS = prefillQS ? fromB64JSON(prefillQS) : void 0;
  const prefill = prefillState ?? prefillFromQS;
  const initial = useMemo(() => {
    const methodNorm = normalizeMethod(prefill?.method ?? method);
    const url = prefill?.url ?? '';
    const headersRows = recToRows(prefill?.headers);
    const paramsRows = recToRows(prefill?.params);
    const bodyMode = prefill?.bodyMode ?? 'none';
    const jsonText = bodyMode === 'json' ? (prefill?.bodyText ?? '') : '';
    const rawText = bodyMode === 'raw' ? (prefill?.bodyText ?? '') : '';
    return {
      method: methodNorm,
      url,
      headersRows,
      paramsRows,
      bodyMode,
      jsonText,
      rawText,
    };
  }, [prefill, method]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [lastSentSnapshot, setLastSentSnapshot] = useState(null);
  const lastSentRef = useRef(null);
  const emitChange = useCallback(
    (raw) => {
      const next = { method: raw.method, url: raw.url };
      const prev = lastSentRef.current;
      if (!prev || prev.method !== next.method || prev.url !== next.url) {
        lastSentRef.current = next;
        onChange?.(next);
      }
    },
    [onChange]
  );
  async function handleSend(snapshot) {
    setLoading(true);
    const t0 = performance.now();
    const vars = getLSVars(user?.uid);
    const resolvedUrl = applyVariables(snapshot.url, vars);
    const resolvedBodyText = resolveBodyText(snapshot, vars);
    const enabledParams = toRecord(snapshot.params);
    const enabledHeaders = toRecord(snapshot.headers);
    const requestUrl = mergeQueryParams(resolvedUrl, enabledParams);
    if (!requestUrl) {
      setResponse({
        statusCode: 0,
        statusText: 'Invalid URL',
        bodyText: '',
        timeMs: Math.round(performance.now() - t0),
      });
      setLastSentSnapshot(snapshot);
      setLoading(false);
      return;
    }
    const permalink = buildClientUrl({
      method: snapshot.method,
      url: requestUrl,
      headers: enabledHeaders,
    });
    navigate(permalink, { replace: true });
    const initialHeaders = ensureContentType({ ...enabledHeaders }, snapshot);
    const requestBody = buildRequestBody(snapshot, resolvedBodyText, vars);
    const {
      finalHeaders,
      requestBodyBytes,
      requestHeadersBytes,
      requestBytes,
    } = await computeRequestByteSizes(
      requestUrl,
      snapshot.method,
      initialHeaders,
      requestBody
    );
    let statusCode = 0;
    let statusText = '';
    let bodyText = '';
    let responseHeadersBytes = 0;
    let responseBodyBytes = 0;
    let errorType = null;
    let errorMessage = null;
    try {
      const res = await fetch(requestUrl, {
        method: snapshot.method,
        headers: finalHeaders,
        body: requestBody,
      });
      statusCode = res.status;
      statusText = res.statusText;
      bodyText = await res.text();
      responseBodyBytes = utf8Bytes(bodyText);
      responseHeadersBytes = headersBytesTotalFromRecord(
        headersToRecord(res.headers)
      );
      setResponse({
        statusCode,
        statusText,
        bodyText,
        timeMs: Math.round(performance.now() - t0),
      });
      setLastSentSnapshot({
        ...snapshot,
        url: requestUrl,
        body: {
          ...snapshot.body,
          ...(snapshot.body.mode === 'json'
            ? { jsonText: resolvedBodyText }
            : {}),
          ...(snapshot.body.mode === 'raw'
            ? { rawText: resolvedBodyText }
            : {}),
        },
      });
    } catch (e) {
      errorType = e instanceof Error ? e.name : 'UnknownError';
      errorMessage = e instanceof Error ? e.message : String(e);
      setResponse({
        statusCode: 0,
        statusText: errorMessage || 'Request failed',
        bodyText: '',
        timeMs: Math.round(performance.now() - t0),
      });
      setLastSentSnapshot(snapshot);
    } finally {
      const latencyMs = Math.round(performance.now() - t0);
      await logRequest({
        method: snapshot.method,
        url: requestUrl,
        params: { ...enabledParams },
        headers: { ...finalHeaders },
        bodyMode: snapshot.body.mode,
        bodyPreview: resolvedBodyText,
        latencyMs,
        statusCode,
        statusText,
        requestBytes,
        requestHeadersBytes,
        requestBodyBytes,
        responseBytes: responseHeadersBytes + responseBodyBytes,
        responseHeadersBytes,
        responseBodyBytes,
        errorType,
        errorMessage,
        userId: user?.uid ?? null,
      });
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs('div', {
    className: 'w-full max-w-6xl mx-auto p-4 space-y-4',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'h-[37vh] overflow-auto',
        children: /* @__PURE__ */ jsx(RequestEditor, {
          loading,
          onSend: handleSend,
          onChange: emitChange,
          method: initial.method,
          url: initial.url,
          headers: initial.headersRows,
          params: initial.paramsRows,
          bodyMode: initial.bodyMode,
          jsonText: initial.jsonText,
          rawText: initial.rawText,
        }),
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'flex items-center justify-end',
        children: /* @__PURE__ */ jsx(CodePanelSheet, {
          snapshot: lastSentSnapshot,
        }),
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'rounded-lg border border-pink-300/60 bg-pink-50/40',
        children: [
          /* @__PURE__ */ jsxs('div', {
            className:
              'flex items-center justify-between px-4 py-2 border-b border-pink-300/60',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className: 'font-semibold text-purple-600',
                children: t('request.response'),
              }),
              response &&
                /* @__PURE__ */ jsxs('span', {
                  className: 'text-[14px] text-purple-700/70',
                  children: [
                    response.statusCode,
                    ' ',
                    response.statusText ?? '',
                  ],
                }),
            ],
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'h-[38vh] p-3 overflow-auto',
            children: response
              ? /* @__PURE__ */ jsx(ResponseSection, {
                  statusCode: response.statusCode,
                  statusText: response.statusText,
                  json: response.bodyText ?? '',
                  className: 'w-full',
                })
              : /* @__PURE__ */ jsx('div', {
                  className:
                    'h-full grid place-items-center text-sm opacity-70',
                  children: t('restfull.noResponse'),
                }),
          }),
        ],
      }),
    ],
  });
}
export { RestFullClient as default };
