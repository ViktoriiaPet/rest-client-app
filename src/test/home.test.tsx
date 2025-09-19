import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { createRoutesStub } from 'react-router';
import { Outlet } from 'react-router';
import { expect, it, describe } from 'vitest';
import HomePage from '@/pages/home';
import { AuthContext } from '@/context/AuthContext';
import type { User } from 'firebase/auth';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
  }),
}));

vi.mock('@/components/SignButton', () => ({
  SignButton: ({ text }: { text: string }) => (
    <button data-testid="sign-button">{text}</button>
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
            <Outlet />
          </div>
        </AuthContext.Provider>
      ),
      children: [
        {
          path: '/',
          Component: HomePage,
        },
        {
          path: '/mainClint',
          Component: () => <div>Main Client Page</div>,
        },
        {
          path: '/signIn',
          Component: () => <div>Sign In Page</div>,
        },
        {
          path: '/signUp',
          Component: () => <div>Sign Up Page</div>,
        },
      ],
    },
  ]);
};

describe('HomePage', () => {
  const mockSetUser = vi.fn();
  const mockSetToken = vi.fn();

  it('renders correctly when user is not authorized', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    await waitFor(() => {
      expect(screen.getByText('auth.welcome')).toBeInTheDocument();
    });

    expect(screen.getByText('aboutVika.name')).toBeInTheDocument();
    expect(screen.getByText('aboutDarya.name')).toBeInTheDocument();
    expect(screen.getByText('aboutAlyona.name')).toBeInTheDocument();

    expect(screen.getByText('auth.signIn')).toBeInTheDocument();
    expect(screen.getByText('auth.signUp')).toBeInTheDocument();

    const signInButton = screen.getByRole('button', { name: 'auth.signIn' });
    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveTextContent('auth.signIn');

    const vikaLink = screen.getByRole('link', { name: 'aboutVika.linkGitHub' });
    expect(vikaLink).toHaveAttribute('href', 'https://github.com/ViktoriiaPet');

    const alyonaLink = screen.getByRole('link', {
      name: 'aboutAlyona.linkGitHub',
    });
    expect(alyonaLink).toHaveAttribute('href', 'https://github.com/alyona317');

    const allGithubLinks = screen.getAllByRole('link', { name: /linkGitHub/i });
    expect(allGithubLinks.length).toBe(2);
    // ------------------------------------------

    expect(screen.queryByText('Main Client Page')).not.toBeInTheDocument();
  });

  it('redirects to /mainClint when user is authorized', async () => {
    const mockUser = { uid: '123', email: 'test@example.com' } as User;

    const Stub = createTestAppStub({
      user: mockUser,
      token: 'mock-token',
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/']} />);

    await waitFor(() => {
      expect(screen.getByText('Main Client Page')).toBeInTheDocument();
    });

    expect(screen.queryByText('auth.welcome')).not.toBeInTheDocument();
  });
});
