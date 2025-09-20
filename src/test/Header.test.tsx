import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, it, describe, expect, beforeEach } from 'vitest';
import { createRoutesStub } from 'react-router';
import Header from '@/components/Header';
import { AuthContext } from '@/context/AuthContext';
import type { User } from 'firebase/auth';
import { Outlet } from 'react-router';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
    ready: true,
  }),
}));

vi.mock('@/service/firebase', () => ({
  logout: vi.fn(() => Promise.resolve()),
}));

vi.mock('@/components/LangToggle', () => ({
  default: () => <div data-testid="lang-toggle">Lang Toggle</div>,
}));

vi.mock('@/components/SignButton', () => ({
  SignButton: ({
    text,
    ...props
  }: {
    text: string;
    'data-testid'?: string;
  }) => <button data-testid={props['data-testid']}>{text}</button>,
}));

vi.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    onClick,
    variant,
    ...props
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: string;
    'data-testid'?: string;
  }) => (
    <button
      data-testid={props['data-testid']}
      onClick={onClick}
      className={variant}
    >
      {children}
    </button>
  ),
}));

vi.mock('@/components/ui/avatar', () => ({
  Avatar: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="avatar">{children}</div>
  ),
  AvatarImage: ({ src }: { src: string }) => (
    <img data-testid="avatar-image" src={src} alt="Avatar" />
  ),
  AvatarFallback: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="avatar-fallback">{children}</span>
  ),
}));

const createTestAppStub = (
  authValue: Parameters<typeof AuthContext.Provider>[0]['value']
) => {
  return createRoutesStub([
    {
      path: '/',
      Component: () => (
        <AuthContext.Provider value={authValue}>
          <div className="test-root-wrapper">
            <Header />
            <Outlet />
          </div>
        </AuthContext.Provider>
      ),
      children: [
        {
          path: '/',
          Component: () => <div>Home Page</div>,
        },
        {
          path: 'signIn',
          Component: () => <div>Sign In Page</div>,
        },
        {
          path: 'signUp',
          Component: () => <div>Sign Up Page</div>,
        },
        {
          path: 'mainClint',
          Component: () => <div>Main Client Page</div>,
        },
      ],
    },
  ]);
};

describe('Header', () => {
  const mockSetUser = vi.fn();
  const mockSetToken = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('renders sign in and sign up buttons for unauthorized users', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    await waitFor(() => {
      expect(screen.getByText('auth.signIn')).toBeInTheDocument();
      expect(screen.getByText('auth.signUp')).toBeInTheDocument();
      expect(screen.queryByTestId('logout-button')).not.toBeInTheDocument();
      expect(screen.queryByTestId('mainpage-button')).not.toBeInTheDocument();
    });
  });

  it('applies scrolled styles when page is scrolled', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);

    await waitFor(() => {
      const headerDiv = screen.getByRole('banner').querySelector('div');
      expect(headerDiv).toHaveClass('bg-white/80');
      expect(headerDiv).toHaveClass('shadow-md');
      expect(headerDiv).toHaveClass('border-b');
    });
  });

  it('does not apply scrolled styles when page is at top', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    await waitFor(() => {
      const headerDiv = screen.getByRole('banner').querySelector('div');
      expect(headerDiv).toHaveClass('bg-transparent');
      expect(headerDiv).toHaveClass('border-b-0');
      expect(headerDiv).not.toHaveClass('bg-white/80');
      expect(headerDiv).not.toHaveClass('shadow-md');
    });
  });

  it('renders logo with correct link', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    const logoLink = screen.getByRole('link', { name: '' });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders LangToggle component', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    await waitFor(() => {
      expect(screen.getByTestId('lang-toggle')).toBeInTheDocument();
    });
  });
});
