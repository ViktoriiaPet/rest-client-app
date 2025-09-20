import { render, screen, waitFor } from '@testing-library/react';
import { vi, it, describe, expect } from 'vitest';
import { createRoutesStub } from 'react-router';
import AuthorizedUserPage from '@/pages/authClientPage';
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
  }),
}));

vi.mock('@/service/firebase', () => ({
  auth: {},
}));

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn(() => () => {}),
  getIdToken: vi.fn(() => Promise.resolve('mock-token')),
}));

vi.mock('@/components/Header', () => ({
  default: () => <div>Mock Header</div>,
}));
vi.mock('@/components/Footer', () => ({
  default: () => <div>Mock Footer</div>,
}));
vi.mock('@/components/ErrorBoundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('AuthorizedUserPage', () => {
  const mockSetUser = vi.fn();
  const mockSetToken = vi.fn();

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
            path: 'auth',
            Component: AuthorizedUserPage,
            children: [
              { path: 'restfull', Component: () => <div>RESTful Page</div> },
              {
                path: 'clientVariales',
                Component: () => <div>Variables Page</div>,
              },
              {
                path: 'clientHistory',
                Component: () => <div>History Page</div>,
              },
            ],
          },
          {
            path: '/',
            Component: () => <div>Root Page</div>,
          },
        ],
      },
    ]);
  };

  it('renders a loading message when the user loads', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: true,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/auth']} />);
  });

  it('redirects to the main page if the user is not authorized', async () => {
    const Stub = createTestAppStub({
      user: null,
      token: null,
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/auth']} />);

    await waitFor(() => {
      expect(screen.queryByText(/WELCOME,/i)).not.toBeInTheDocument();
      expect(screen.getByText('Root Page')).toBeInTheDocument();
    });
  });

  it('renders the logged in user page with the username', async () => {
    const mockUser = { displayName: 'TestUser' } as unknown as User;
    const Stub = createTestAppStub({
      user: mockUser,
      token: 'mock-token',
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/auth']} />);

    await waitFor(() => {
      expect(
        screen.getByText(`auth.welcome, ${mockUser.displayName}`)
      ).toBeInTheDocument();
      expect(screen.getByText('clientPage.restfull')).toBeInTheDocument();
      expect(screen.getByText('clientPage.variables')).toBeInTheDocument();
      expect(screen.getByText('clientPage.history')).toBeInTheDocument();
    });
  });

  it('displays links with correct hrefs', async () => {
    const mockUser = { displayName: 'TestUser' } as unknown as User;
    const Stub = createTestAppStub({
      user: mockUser,
      token: 'mock-token',
      loading: false,
      setUser: mockSetUser,
      setToken: mockSetToken,
    });

    render(<Stub initialEntries={['/auth']} />);

    await waitFor(() => {
      const restfullLink = screen.getByText('clientPage.restfull').closest('a');
      expect(restfullLink).toHaveAttribute('href', '/auth/restfull');

      const variablesLink = screen
        .getByText('clientPage.variables')
        .closest('a');
      expect(variablesLink).toHaveAttribute('href', '/auth/clientVariales');

      const historyLink = screen.getByText('clientPage.history').closest('a');
      expect(historyLink).toHaveAttribute('href', '/auth/clientHistory');
    });
  });
});
