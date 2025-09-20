import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RequestEditor from '@/components/RequestEditor';
import type { KeyValueRow, BodyMode } from '@/types/restFullClient';

const last = <T,>(arr: T[]): T => arr[arr.length - 1];

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));

vi.mock('@/components/RequestBar', () => ({
  __esModule: true,
  default: ({
    method,
    url,
    onChange,
    onSend,
  }: {
    method: string;
    url: string;
    onChange: (v: { method: string; url: string }) => void;
    onSend: () => void;
  }) => (
    <div>
      <input
        aria-label="method"
        value={method}
        onChange={(e) => onChange({ method: e.target.value, url })}
      />
      <input
        aria-label="url"
        value={url}
        onChange={(e) => onChange({ method, url: e.target.value })}
      />
      <button onClick={onSend}>send</button>
    </div>
  ),
}));

vi.mock('@/components/KeyValueEditor', () => ({
  KeyValueEditor: ({
    onChange,
    addLabel,
  }: {
    onChange: (r: KeyValueRow[]) => void;
    addLabel: string;
  }) => (
    <button
      aria-label={addLabel}
      onClick={() =>
        onChange([{ id: '1', enabled: true, key: 'k', value: 'v' }])
      }
    >
      {addLabel}
    </button>
  ),
}));

vi.mock('@/components/BodyModeSelector', () => ({
  BodyModeSelector: ({
    value,
    onChange,
  }: {
    value: BodyMode;
    onChange: (m: BodyMode) => void;
  }) => (
    <div>
      <span data-testid="mode">{value}</span>
      <button onClick={() => onChange('json')}>json</button>
      <button onClick={() => onChange('raw')}>raw</button>
      <button onClick={() => onChange('none')}>none</button>
    </div>
  ),
}));

vi.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsList: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TabsTrigger: ({
    children,
    value,
    className,
  }: {
    children: React.ReactNode;
    value?: string;
    className?: string;
  }) => (
    <button value={value} className={className}>
      {children}
    </button>
  ),
  TabsContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock('@/components/ui/textarea', () => ({
  Textarea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea {...props} />
  ),
}));

vi.mock('@/components/ui/button', () => ({
  Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} />
  ),
}));

describe('RequestEditor', () => {
  it('emits initial snapshot', () => {
    const onChange = vi.fn();
    render(<RequestEditor onChange={onChange} />);
    const snap = last(onChange.mock.calls)[0];
    expect(snap.method).toBe('GET');
    expect(snap.url).toBe('');
    expect(snap.body.mode).toBe('none');
  });

  it('blocks submit for invalid url', () => {
    const onSend = vi.fn();
    render(<RequestEditor url="not a url" validateUrl onSend={onSend} />);
    fireEvent.click(screen.getByText('send'));
    expect(onSend).not.toHaveBeenCalled();
    expect(screen.getByText('request.invalidUrl')).toBeInTheDocument();
  });

  it('submits for valid url', () => {
    const onSend = vi.fn();
    const onChange = vi.fn();
    render(
      <RequestEditor
        url="https://example.com"
        onSend={onSend}
        onChange={onChange}
      />
    );
    fireEvent.click(screen.getByText('send'));
    expect(onSend).toHaveBeenCalledTimes(1);
    const snap =
      (onSend.mock.calls[0] && onSend.mock.calls[0][0]) ||
      last(onChange.mock.calls)[0];
    expect(snap.url).toBe('https://example.com');
  });

  it('prettifies json and disables on error', () => {
    render(<RequestEditor bodyMode="json" jsonText='{"a":1,"b":[2,3]}' />);
    const prettifyBtn = screen.getByText('buttons.prettify');
    expect(prettifyBtn).not.toBeDisabled();
    fireEvent.click(prettifyBtn);
    const textarea = screen.getByPlaceholderText(
      '{"hello":"world"}'
    ) as HTMLTextAreaElement;
    expect(textarea.value).toBe(
      '{\n  "a": 1,\n  "b": [\n    2,\n    3\n  ]\n}'
    );
    fireEvent.change(textarea, { target: { value: '{a:1}' } });
    expect(screen.getByText(/JSON error:/)).toBeInTheDocument();
    expect(prettifyBtn).toBeDisabled();
  });

  it('switches body mode', () => {
    render(<RequestEditor />);
    fireEvent.click(screen.getByText('json'));
    expect(screen.getByText('buttons.prettify')).toBeInTheDocument();
    fireEvent.click(screen.getByText('raw'));
    expect(screen.getByPlaceholderText('request.rawBody')).toBeInTheDocument();
  });
});
