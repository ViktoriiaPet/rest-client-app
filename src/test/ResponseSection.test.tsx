import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ResponseSection from '@/components/ResponseSection';

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
vi.mock('@/utils/getStatusCodeColor', () => ({ badgeColor: () => 'bg-badge' }));

afterEach(() => cleanup());

describe('ResponseSection', () => {
  it('renders status code and text', () => {
    render(<ResponseSection statusCode={200} statusText="OK" json="" />);
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  it('prettifies valid JSON and leaves invalid as-is', () => {
    const { rerender } = render(
      <ResponseSection statusCode={200} json='{"a":1}' />
    );
    expect(screen.getByText(/"a": 1/)).toBeInTheDocument();

    rerender(<ResponseSection statusCode={200} json='{"a":' />);
    expect(screen.getByText('{"a":')).toBeInTheDocument();
  });

  it('copies prettified JSON on click', async () => {
    const writeText = vi
      .fn<(text: string) => Promise<void>>()
      .mockResolvedValue();
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });

    render(<ResponseSection statusCode={201} json='{"x":2}' />);
    fireEvent.click(screen.getByRole('button', { name: 'request.copyJSON' }));

    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0][0]).toBe('{\n  "x": 2\n}');
  });
});
