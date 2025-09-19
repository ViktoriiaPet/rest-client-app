import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import RequestEditor from '@/components/RequestEditor';
import type { HttpMethod } from '@/types/apiMethods';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));

vi.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props}>{children}</button>
  ),
}));
vi.mock('@/components/ui/textarea', () => ({
  Textarea: ({
    ...props
  }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea {...props} />
  ),
}));

vi.mock('@/components/ui/tabs', () => {
  const React = require('react');
  const Ctx = React.createContext<{
    value: string;
    set: (v: string) => void;
  } | null>(null);
  const Tabs = ({
    children,
    defaultValue,
  }: {
    children: React.ReactNode;
    defaultValue?: string;
  }) => {
    const [v, setV] = React.useState(defaultValue ?? 'params');
    return (
      <Ctx.Provider value={{ value: v, set: setV }}>{children}</Ctx.Provider>
    );
  };
  const TabsList = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const TabsTrigger = ({
    value,
    children,
  }: {
    value: string;
    children: React.ReactNode;
  }) => {
    const ctx = React.useContext(Ctx)!;
    return <button onClick={() => ctx.set(value)}>{children}</button>;
  };
  const TabsContent = ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: string;
  }) => {
    const ctx = React.useContext(Ctx)!;
    return ctx.value === value ? <div>{children}</div> : null;
  };
  return { Tabs, TabsList, TabsTrigger, TabsContent };
});

vi.mock('@/components/BodyModeSelector', () => ({
  BodyModeSelector: ({
    value,
    onChange,
  }: {
    value: 'none' | 'json' | 'form-data' | 'raw';
    onChange: (m: 'none' | 'json' | 'form-data' | 'raw') => void;
  }) => (
    <div>
      <button aria-label="to-json" onClick={() => onChange('json')}>
        json
      </button>
      <button aria-label="to-raw" onClick={() => onChange('raw')}>
        raw
      </button>
      <span data-testid="current-mode">{value}</span>
    </div>
  ),
}));

vi.mock('@/components/KeyValueEditor', () => ({
  KeyValueEditor: ({
    addLabel,
    onChange,
  }: {
    addLabel: string;
    onChange: (r: unknown[]) => void;
  }) => (
    <button
      onClick={() =>
        onChange([{ id: '1', enabled: true, key: 'k', value: 'v' }])
      }
    >
      {addLabel}
    </button>
  ),
}));

vi.mock('@/utils/requestEditor', async (orig) => {
  const actual = await orig<typeof import('@/utils/requestEditor')>();
  return {
    ...actual,
    prettifyJson: (text: string) => {
      try {
        return JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        return text;
      }
    },
  };
});

let rbOnChange: ((v: { method: HttpMethod; url: string }) => void) | undefined;
let rbOnSend: (() => void) | undefined;
vi.mock('@/components/RequestBar', () => ({
  __esModule: true,
  default: ({
    onChange,
    onSend,
    method,
    url,
  }: {
    onChange?: (v: { method: HttpMethod; url: string }) => void;
    onSend?: () => void;
    method: HttpMethod;
    url: string;
  }) => {
    rbOnChange = onChange;
    rbOnSend = onSend;
    return (
      <div>
        <button onClick={() => onChange?.({ method, url })}>noop</button>
        <button
          onClick={() =>
            onChange?.({ method: 'POST' as HttpMethod, url: 'http://x' })
          }
        >
          change
        </button>
        <button onClick={() => onSend?.()}>send</button>
      </div>
    );
  },
}));

afterEach(() => {
  cleanup();
  rbOnChange = undefined;
  rbOnSend = undefined;
});

describe('RequestEditor', () => {
  it('emits onChange when RequestBar updates method/url', async () => {
    const onChange = vi.fn();
    render(<RequestEditor onChange={onChange} />);
    fireEvent.click(screen.getByText('change'));
    await waitFor(() => expect(onChange).toHaveBeenCalled());
    const last = onChange.mock.calls.at(-1)?.[0];
    expect(last.method).toBe('POST');
    expect(last.url).toBe('http://x');
    expect(Array.isArray(last.params)).toBe(true);
    expect(Array.isArray(last.headers)).toBe(true);
  });

  it('calls onSend with current snapshot', async () => {
    const onSend = vi.fn();
    render(
      <RequestEditor method="GET" url="https://api.test" onSend={onSend} />
    );
    fireEvent.click(screen.getByText('send'));
    await waitFor(() => expect(onSend).toHaveBeenCalled());
    const snap = onSend.mock.calls[0][0];
    expect(snap.method).toBe('GET');
    expect(snap.url).toBe('https://api.test');
  });

  it('prettify button is disabled for invalid JSON and enabled for valid JSON', () => {
    render(<RequestEditor bodyMode="json" jsonText="{" />);
    fireEvent.click(screen.getByRole('button', { name: 'request.body' }));
    const btn = screen.getByRole('button', { name: 'buttons.prettify' });
    expect(btn).toBeDisabled();
    const ta = screen.getByPlaceholderText(
      '{"hello":"world"}'
    ) as HTMLTextAreaElement;
    fireEvent.change(ta, { target: { value: '{"a":1}' } });
    expect(btn).toBeEnabled();
    fireEvent.click(btn);
    expect(ta.value).toBe('{\n  "a": 1\n}');
  });

  it('switches body mode to raw and shows raw textarea', () => {
    render(<RequestEditor bodyMode="none" />);
    fireEvent.click(screen.getByRole('button', { name: 'request.body' }));
    fireEvent.click(screen.getByLabelText('to-raw'));
    expect(screen.getByPlaceholderText('Raw body')).toBeInTheDocument();
  });
});
