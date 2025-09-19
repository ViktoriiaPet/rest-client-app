import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import RequestBar from '@/components/RequestBar';
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

vi.mock('@/components/ui/input', () => ({
  Input: ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
  ),
}));

type SelectCtx = {
  onValueChange?: (v: string) => void;
  value?: string;
  disabled?: boolean;
};
const ctx: SelectCtx = {};

vi.mock('@/components/ui/select', () => ({
  Select: ({
    children,
    onValueChange,
    value,
    disabled,
  }: {
    children: React.ReactNode;
    onValueChange?: (v: string) => void;
    value?: string;
    disabled?: boolean;
  }) => {
    Object.assign(ctx, { onValueChange, value, disabled });
    return <div data-testid="select">{children}</div>;
  },
  SelectTrigger: ({
    children,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} disabled={ctx.disabled}>
      {children}
    </button>
  ),
  SelectValue: ({ placeholder }: { placeholder?: string }) => (
    <span>{placeholder ?? ctx.value}</span>
  ),
  SelectContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SelectItem: ({
    value,
    disabled,
    children,
  }: {
    value: string;
    disabled?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => ctx.onValueChange?.(value)}
    >
      {children}
    </button>
  ),
}));

vi.mock('@/utils/getStatusCodeColor', () => ({ getMethodTextColor: () => '' }));

afterEach(() => cleanup());

describe('RequestBar', () => {
  it('calls onChange when url changes', () => {
    const onChange = vi.fn();
    render(<RequestBar method="GET" url="" onChange={onChange} />);
    const input = screen.getByPlaceholderText(
      'https://api.example.com/endpoint'
    );
    fireEvent.change(input, { target: { value: 'https://x.test' } });
    expect(onChange).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://x.test',
    });
  });

  it('submit calls onSend with selected method and url', () => {
    const onSend = vi.fn();
    render(
      <RequestBar method="POST" url="https://api.example.com" onSend={onSend} />
    );
    fireEvent.click(screen.getByRole('button', { name: 'buttons.send' }));
    expect(onSend).toHaveBeenCalledWith({
      method: 'POST',
      url: 'https://api.example.com',
    });
  });

  it('button disabled only after user types an invalid url', () => {
    render(<RequestBar method="GET" url="not a url" />);
    const btn = screen.getByRole('button', { name: 'buttons.send' });
    expect(btn).toBeEnabled();
    const input = screen.getByPlaceholderText(
      'https://api.example.com/endpoint'
    );
    fireEvent.change(input, { target: { value: 'still bad url' } });
    expect(btn).toBeDisabled();
  });

  it('respects loading state (disables select, input, and button)', () => {
    render(<RequestBar method="GET" url="https://ok" loading />);
    const btn = screen.getByRole('button', { name: 'buttons.send' });
    const input = screen.getByPlaceholderText(
      'https://api.example.com/endpoint'
    ) as HTMLInputElement;
    expect(btn).toBeDisabled();
    expect(input).toBeDisabled();
  });
});
