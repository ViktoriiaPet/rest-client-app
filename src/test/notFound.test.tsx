import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));
vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );
  return { ...actual, useNavigate: vi.fn() };
});

import { useNavigate } from 'react-router-dom';
import NotFound from '@/pages/notFound';

afterEach(() => cleanup());

describe('NotFound', () => {
  it('renders i18n texts and home link', () => {
    (
      useNavigate as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue(vi.fn());
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText('notFound.title')).toBeInTheDocument();
    expect(screen.getByText('notFound.description')).toBeInTheDocument();
    const home = screen.getByRole('link', { name: 'notFound.home' });
    expect(home).toHaveAttribute('href', '/');
  });

  it('calls navigate(-1) on back click', () => {
    const nav = vi.fn();
    (
      useNavigate as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue(nav);
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: 'notFound.back' }));
    expect(nav).toHaveBeenCalledWith(-1);
  });

  it('shows image with correct src', () => {
    (
      useNavigate as unknown as { mockReturnValue: (v: unknown) => void }
    ).mockReturnValue(vi.fn());
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/ice-cream.svg');
  });
});
