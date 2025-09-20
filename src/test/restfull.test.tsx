import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));
vi.mock('@/context/AuthContext', () => ({ useAuth: vi.fn() }));
vi.mock('@/utils/restUrl', () => ({
  parseClientUrl: vi.fn(),
  buildClientUrl: vi.fn(),
}));
vi.mock('@/components/RestFullClient', () => ({
  default: ({ onChange }: { onChange?: (v: { method: 'POST' }) => void }) => (
    <button onClick={() => onChange?.({ method: 'POST' })}>child</button>
  ),
}));

import { useAuth } from '@/context/AuthContext';
import { parseClientUrl, buildClientUrl } from '@/utils/restUrl';
import Restfull from '@/pages/restfull';

function Path() {
  const l = useLocation();
  return <div data-testid="path">{l.pathname + l.search}</div>;
}

describe('Restfull', () => {
  it('shows loading when auth loading', () => {
    (
      useAuth as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ user: null, loading: true });
    (
      parseClientUrl as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ method: 'GET', url: '', headers: {} });
    render(
      <MemoryRouter initialEntries={['/auth/restfull/GET']}>
        <Routes>
          <Route
            path="/auth/restfull/:method/:urlB64?"
            element={<Restfull />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('app.loading')).toBeInTheDocument();
  });

  it('redirects to / when unauthenticated', async () => {
    (
      useAuth as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ user: null, loading: false });
    (
      parseClientUrl as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ method: 'GET', url: '', headers: {} });
    render(
      <MemoryRouter initialEntries={['/auth/restfull/GET']}>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route
            path="/auth/restfull/:method/:urlB64?"
            element={<Restfull />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText('home')).toBeInTheDocument();
  });

  it('normalizes invalid method via navigate', async () => {
    (
      useAuth as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ user: { uid: '1' }, loading: false });
    (
      parseClientUrl as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ method: 'BAD', url: 'http://x', headers: {} });
    (
      buildClientUrl as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue('/auth/restfull/GET/');
    render(
      <MemoryRouter initialEntries={['/auth/restfull/BAD']}>
        <Routes>
          <Route path="/auth/restfull/GET/" element={<div>fixed</div>} />
          <Route
            path="/auth/restfull/:method/:urlB64?"
            element={<Restfull />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText('fixed')).toBeInTheDocument();
  });

  it('handleChange updates method in url', async () => {
    (
      useAuth as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ user: { uid: '1' }, loading: false });
    (
      parseClientUrl as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue({ method: 'GET', url: '', headers: {} });
    render(
      <MemoryRouter initialEntries={['/auth/restfull/GET/xyz?foo=1']}>
        <Path />
        <Routes>
          <Route
            path="/auth/restfull/:method/:urlB64?"
            element={<Restfull />}
          />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(await screen.findByText('child'));
    expect(screen.getByTestId('path').textContent).toBe(
      '/auth/restfull/POST/xyz?foo=1'
    );
  });
});
