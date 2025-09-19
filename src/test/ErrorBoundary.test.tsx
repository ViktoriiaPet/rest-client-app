import React, { type JSX } from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

vi.mock('react-i18next', () => ({
  withTranslation:
    () =>
    <P extends Record<string, unknown>>(
      C: React.ComponentType<P & { t: (k: string, d?: string) => string }>
    ) =>
    (props: P) => <C {...props} t={(k: string, d?: string) => d ?? k} />,
}));

import ErrorBoundary from '@/components/ErrorBoundary';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function Ok(): JSX.Element {
  return <div>ok</div>;
}

function ThrowNow(): JSX.Element {
  throw new Error('boom');
}

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <Ok />
      </ErrorBoundary>
    );
    expect(screen.getByText('ok')).toBeInTheDocument();
  });

  it('shows fallback on error and recovers on retry', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    const { rerender } = render(
      <ErrorBoundary>
        <Ok />
      </ErrorBoundary>
    );

    rerender(
      <ErrorBoundary>
        <ThrowNow />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/boom/)).toBeInTheDocument();

    rerender(
      <ErrorBoundary>
        <Ok />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    expect(screen.getByText('ok')).toBeInTheDocument();
  });
});
