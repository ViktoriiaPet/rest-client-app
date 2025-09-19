import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, it, describe, expect, beforeEach } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SignUp from '@/pages/signUp'; // Adjusted import path for SignUp
import { AuthContext } from '@/context/AuthContext';
import * as firebaseService from '@/service/firebase';
import { FirebaseError } from 'firebase/app';
import type { RegistrationSchema } from '../utils/validateRegistration';
import type { User } from 'firebase/auth';

export type SignUpFormData = {
  username: string;
  email: string;
  password: string;
};

export type FormErrors = Partial<Record<keyof SignUpFormData, string>>;

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
  }),
}));

// Mock firebase service
vi.mock('@/service/firebase', () => ({
  registerWithEmailAndPassword: vi.fn(), // Use registerWithEmailAndPassword
}));

// Mock getRegistrationSchema - adapted for SignUp
vi.mock('../utils/validateRegistration.ts', () => ({
  getRegistrationSchema: vi.fn(() => ({
    safeParse: vi.fn((data: unknown) => {
      const parsed = data as Partial<RegistrationSchema>;
      const errors: { path: string[]; message: string }[] = [];

      if (!parsed.username || parsed.username.length < 3) {
        errors.push({ path: ['username'], message: 'Username too short' });
      }
      if (!parsed.email || !parsed.email.includes('@')) {
        errors.push({ path: ['email'], message: 'Invalid email' });
      }
      if (!parsed.password || parsed.password.length < 6) {
        errors.push({ path: ['password'], message: 'Password too short' });
      }

      return errors.length > 0
        ? { success: false, error: { issues: errors } }
        : { success: true, data: parsed as RegistrationSchema };
    }),
  })),
}));

// Mock ErrorModal
vi.mock('@/components/modal.tsx', () => ({
  default: ({
    isOpen,
    message,
    onClose,
  }: {
    isOpen: boolean;
    message: string;
    onClose: () => void;
  }) =>
    isOpen ? (
      <div role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 id="modal-title">Error</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}));

// Mock AuthContext values
const mockSetUser = vi.fn();
const mockSetToken = vi.fn();
const mockNavigate = vi.fn();

// Helper to create a test router for memory routing
const createTestRouter = (
  authValue: Parameters<typeof AuthContext.Provider>[0]['value'],
  initialEntries: string[]
) => {
  const routes = [
    {
      path: '/',
      element: (
        <AuthContext.Provider value={authValue}>
          <Outlet />
        </AuthContext.Provider>
      ),
      children: [
        {
          path: 'signup', // Path for SignUp component
          element: <SignUp />,
        },
        {
          path: 'mainClint',
          element: <div>Main Client Page</div>,
        },
        {
          path: 'signIn', // Path for NavLink to SignIn
          element: <div>Sign In Page</div>,
        },
      ],
    },
  ];

  return createMemoryRouter(routes, { initialEntries });
};

describe('SignUp', () => {
  let cookiesStore: string[] = [];

  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();

    vi.mock('react-router', async (importOriginal) => {
      const actual = await importOriginal<typeof import('react-router')>();
      return {
        ...actual,
        useNavigate: () => mockNavigate,
        NavLink: vi.fn().mockImplementation((props) => <a {...props} />), // Mock NavLink as a simple anchor
      };
    });

    cookiesStore = [];
    Object.defineProperty(document, 'cookie', {
      get: vi.fn(() => cookiesStore.join('; ')),
      set: vi.fn((cookie: string) => {
        const [name] = cookie.split('=')[0].split(';');
        const existingIndex = cookiesStore.findIndex((c) =>
          c.startsWith(`${name}=`)
        );
        if (existingIndex > -1) {
          cookiesStore[existingIndex] = cookie;
        } else {
          cookiesStore.push(cookie);
        }
      }),
      configurable: true,
    });
  });

  it('displays validation errors for invalid input on blur/change', async () => {
    const router = createTestRouter(
      {
        user: null,
        token: null,
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signup']
    );

    render(<RouterProvider router={router} />);

    let usernameInput: HTMLElement;
    let emailInput: HTMLElement;
    let passwordInput: HTMLElement;
    let submitButton: HTMLElement;

    await waitFor(() => {
      usernameInput = screen.getByPlaceholderText('form.name');
      emailInput = screen.getByPlaceholderText('form.email');
      passwordInput = screen.getByPlaceholderText('form.password');
      submitButton = screen.getByRole('button', { name: 'form.submit' });
    });

    // Invalid username
    fireEvent.change(usernameInput!, {
      target: { name: 'username', value: 'ab' },
    });
    fireEvent.blur(usernameInput!);
    await waitFor(() => {
      expect(screen.getByText('Username too short')).toBeInTheDocument();
    });

    // Invalid email
    fireEvent.change(emailInput!, {
      target: { name: 'email', value: 'invalid-email' },
    });
    fireEvent.blur(emailInput!);
    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });

    // Password too short
    fireEvent.change(passwordInput!, {
      target: { name: 'password', value: 'short' },
    });
    fireEvent.blur(passwordInput!);
    await waitFor(() => {
      expect(screen.getByText('Password too short')).toBeInTheDocument();
    });

    // Try submitting with errors
    fireEvent.click(submitButton!);
    await waitFor(() => {
      expect(
        firebaseService.registerWithEmailAndPassword
      ).not.toHaveBeenCalled();
    });
  });

  it('calls registerWithEmailAndPassword and navigates on successful registration', async () => {
    const mockUser = {
      uid: 'user123',
      email: 'test@example.com',
      displayName: 'TestUser',
    };
    const mockToken = 'mock-jwt-token-register';
    vi.mocked(firebaseService.registerWithEmailAndPassword).mockResolvedValue({
      user: mockUser as User,
      token: mockToken,
    });

    const router = createTestRouter(
      {
        user: null,
        token: null,
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signup']
    );

    render(<RouterProvider router={router} />);

    let usernameInput: HTMLElement;
    let emailInput: HTMLElement;
    let passwordInput: HTMLElement;
    let submitButton: HTMLElement;

    await waitFor(() => {
      usernameInput = screen.getByPlaceholderText('form.name');
      emailInput = screen.getByPlaceholderText('form.email');
      passwordInput = screen.getByPlaceholderText('form.password');
      submitButton = screen.getByRole('button', { name: 'form.submit' });
    });

    fireEvent.change(usernameInput!, {
      target: { name: 'username', value: 'TestUser' },
    });
    fireEvent.change(emailInput!, {
      target: { name: 'email', value: 'test@example.com' },
    });
    fireEvent.change(passwordInput!, {
      target: { name: 'password', value: 'password123' },
    });
    fireEvent.click(submitButton!);

    await waitFor(() => {
      expect(firebaseService.registerWithEmailAndPassword).toHaveBeenCalledWith(
        'TestUser',
        'test@example.com',
        'password123'
      );
    });

    await waitFor(() => {
      expect(mockSetUser).toHaveBeenCalledWith(mockUser);
      expect(mockSetToken).toHaveBeenCalledWith(mockToken);
      // document.cookie is not set in SignUp, so no cookie assertions here
      expect(mockNavigate).toHaveBeenCalledWith('/mainClint');
    });
  });

  it('displays an error modal on Firebase registration error', async () => {
    const errorMessage = 'Firebase: Error (auth/email-already-in-use).';
    vi.mocked(firebaseService.registerWithEmailAndPassword).mockRejectedValue(
      new FirebaseError('auth/email-already-in-use', errorMessage)
    );

    const router = createTestRouter(
      {
        user: null,
        token: null,
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signup']
    );

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('form.name')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText('form.name'), {
      target: { name: 'username', value: 'TestUser' },
    });
    fireEvent.change(screen.getByPlaceholderText('form.email'), {
      target: { name: 'email', value: 'existing@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('form.password'), {
      target: { name: 'password', value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'form.submit' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('displays an error modal on generic registration error', async () => {
    const errorMessage = 'Network error during registration.';
    vi.mocked(firebaseService.registerWithEmailAndPassword).mockRejectedValue(
      new Error(errorMessage)
    );

    const router = createTestRouter(
      {
        user: null,
        token: null,
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signup']
    );

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('form.name')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText('form.name'), {
      target: { name: 'username', value: 'TestUser' },
    });
    fireEvent.change(screen.getByPlaceholderText('form.email'), {
      target: { name: 'email', value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('form.password'), {
      target: { name: 'password', value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'form.submit' }));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
