import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, it, describe, expect, beforeEach } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SignIn from '@/pages/signIn';
import { AuthContext } from '@/context/AuthContext';
import * as firebaseService from '@/service/firebase';
import { FirebaseError } from 'firebase/app';
import * as validation from '../utils/validateRegistration';
import type { LoginSchema } from '../utils/validateRegistration';
import type { User } from 'firebase/auth';

export type FormData = {
  username: string;
  email: string;
  password: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;


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
  logInWithEmailAndPassword: vi.fn(),
}));

// Mock getLoginSchema
vi.mock('../utils/validateRegistration.ts', () => ({
  getLoginSchema: vi.fn(() => ({
safeParse: vi.fn((data: unknown) => {
  const parsed = data as Partial<LoginSchema>;
  const errors: { path: string[]; message: string }[] = [];

  if (!parsed.email || !parsed.email.includes('@')) {
    errors.push({ path: ['email'], message: 'Invalid email' });
  }
  if (!parsed.password || parsed.password.length < 6) {
    errors.push({ path: ['password'], message: 'Password too short' });
  }

  return errors.length > 0
    ? { success: false, error: { issues: errors } }
    : { success: true, data: parsed as LoginSchema };
}),
  })),
}));

// Mock ErrorModal
vi.mock('@/components/modal.tsx', () => ({
  default: ({ isOpen, message, onClose }: { isOpen: boolean; message: string; onClose: () => void }) =>
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
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'mainClint',
          element: <div>Main Client Page</div>,
        },
      ],
    },
  ];

  return createMemoryRouter(routes, { initialEntries });
};

describe('SignIn', () => {
  let cookiesStore: string[] = [];

  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear(); // Clear mockNavigate calls specifically

    vi.mock('react-router', async (importOriginal) => {
      const actual = await importOriginal<typeof import('react-router')>();
      return {
        ...actual,
        useNavigate: () => mockNavigate,
      };
    });

    // Reset and mock document.cookie to accumulate cookies
    cookiesStore = [];
    Object.defineProperty(document, 'cookie', {
      get: vi.fn(() => cookiesStore.join('; ')), // Join with '; ' for realistic cookie string
      set: vi.fn((cookie: string) => {
        const [name] = cookie.split('=')[0].split(';'); // Get cookie name
        const existingIndex = cookiesStore.findIndex(c => c.startsWith(`${name}=`));
        if (existingIndex > -1) {
          cookiesStore[existingIndex] = cookie; // Update existing cookie
        } else {
          cookiesStore.push(cookie); // Add new cookie
        }
      }),
      configurable: true, // Make it configurable so it can be redefined
    });
  });

  it('renders sign-in form elements', async () => {
    const router = createTestRouter(
      {
        user: null,
        token: null,
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signin']
    );

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'auth.signIn' })).toBeInTheDocument();
      expect(screen.getByPlaceholderText('form.email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('form.password')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'form.submit' })).toBeInTheDocument();
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
      ['/signin']
    );

    render(<RouterProvider router={router} />);

    let emailInput: HTMLElement;
    let passwordInput: HTMLElement;
    let submitButton: HTMLElement;

    await waitFor(() => {
      emailInput = screen.getByPlaceholderText('form.email');
      passwordInput = screen.getByPlaceholderText('form.password');
      submitButton = screen.getByRole('button', { name: 'form.submit' });
    });


    // Invalid email
    fireEvent.change(emailInput!, { target: { name: 'email', value: 'invalid-email' } });
    fireEvent.blur(emailInput!);
    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });

    // Password too short
    fireEvent.change(passwordInput!, { target: { name: 'password', value: 'short' } });
    fireEvent.blur(passwordInput!);
    await waitFor(() => {
      expect(screen.getByText('Password too short')).toBeInTheDocument();
    });

    // Try submitting with errors
    fireEvent.click(submitButton!);
    await waitFor(() => {
      expect(firebaseService.logInWithEmailAndPassword).not.toHaveBeenCalled();
    });
  });


  it('calls logInWithEmailAndPassword and navigates on successful login', async () => {
    const mockUser = { uid: 'user123', email: 'test@example.com' };
    const mockToken = 'mock-jwt-token';
    vi.mocked(firebaseService.logInWithEmailAndPassword).mockResolvedValue({
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
      ['/signin']
    );

    render(<RouterProvider router={router} />);

    let emailInput: HTMLElement;
    let passwordInput: HTMLElement;
    let submitButton: HTMLElement;

    await waitFor(() => {
      emailInput = screen.getByPlaceholderText('form.email');
      passwordInput = screen.getByPlaceholderText('form.password');
      submitButton = screen.getByRole('button', { name: 'form.submit' });
    });

    fireEvent.change(emailInput!, { target: { name: 'email', value: 'test@example.com' } });
    fireEvent.change(passwordInput!, { target: { name: 'password', value: 'password123' } });
    fireEvent.click(submitButton!);

    await waitFor(() => {
      expect(firebaseService.logInWithEmailAndPassword).toHaveBeenCalledWith(
        'test@example.com',
        'password123'
      );
      expect(mockSetUser).toHaveBeenCalledWith(mockUser);
      expect(mockSetToken).toHaveBeenCalledWith(mockToken);
      // Now document.cookie mock should correctly accumulate values
      expect(document.cookie).toContain(`userToken=${mockToken}`);
      expect(document.cookie).toContain(`userId=${mockUser.uid}`);
      expect(mockNavigate).toHaveBeenCalledWith('/mainClint');
    });
  });

  it('displays an error modal on Firebase login error', async () => {
    const errorMessage = 'Firebase: Error (auth/wrong-password).';
    vi.mocked(firebaseService.logInWithEmailAndPassword).mockRejectedValue(
      new FirebaseError('auth/wrong-password', errorMessage)
    );

    const router = createTestRouter(
      {
        user: null,
        token: null,
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signin']
    );

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('form.email')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText('form.email'), {
      target: { name: 'email', value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('form.password'), {
      target: { name: 'password', value: 'wrongpassword' },
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

  it('displays an error modal on generic login error', async () => {
    const errorMessage = 'Network error during login.';
    vi.mocked(firebaseService.logInWithEmailAndPassword).mockRejectedValue(
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
      ['/signin']
    );

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('form.email')).toBeInTheDocument();
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

  it('redirects to /mainClint if user is already logged in', async () => {
    const mockUser = { uid: 'user123', email: 'test@example.com' };
    const router = createTestRouter(
      {
        user: mockUser as User,
        token: 'mock-token',
        loading: false,
        setUser: mockSetUser,
        setToken: mockSetToken,
      },
      ['/signin']
    );

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/mainClint');
    });
  });
});