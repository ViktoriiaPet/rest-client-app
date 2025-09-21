import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

type FirebaseUser = import('firebase/auth').User;

let storedCb: ((u: FirebaseUser | null) => void) | null = null;
const unsubscribeMock = vi.fn();

vi.mock('@/service/firebase', () => ({ auth: {} }));

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn(
    (_auth: unknown, cb: (u: FirebaseUser | null) => void) => {
      storedCb = cb;
      return unsubscribeMock;
    }
  ),
}));

import { AuthProvider, useAuth } from '@/context/AuthContext';

const ShowAuth = () => {
  const { user, token, loading } = useAuth();
  return (
    <div>
      <div data-testid="uid">{user?.uid ?? ''}</div>
      <div data-testid="token">{token ?? ''}</div>
      <div data-testid="loading">{String(loading)}</div>
    </div>
  );
};

beforeEach(() => {
  storedCb = null;
  unsubscribeMock.mockClear();
});

afterEach(() => {
  cleanup();
});

const flush = () => Promise.resolve();

describe('AuthProvider', () => {
  it('starts loading and subscribes to auth changes', async () => {
    render(
      <AuthProvider>
        <ShowAuth />
      </AuthProvider>
    );
    expect(screen.getByTestId('loading')).toHaveTextContent('true');
    await waitFor(() => expect(storedCb).toBeTypeOf('function'));
  });

  it('sets user and token when firebase provides a user', async () => {
    render(
      <AuthProvider>
        <ShowAuth />
      </AuthProvider>
    );
    await waitFor(() => expect(storedCb).toBeTruthy());
    const mockUser = {
      uid: 'u-123',
      getIdToken: vi.fn().mockResolvedValue('mock-token'),
    } as unknown as FirebaseUser;
    storedCb!(mockUser);
    await flush();
    await waitFor(() => {
      expect(screen.getByTestId('uid')).toHaveTextContent('u-123');
      expect(screen.getByTestId('token')).toHaveTextContent('mock-token');
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });
  });

  it('clears user and token when firebase emits null', async () => {
    render(
      <AuthProvider>
        <ShowAuth />
      </AuthProvider>
    );
    await waitFor(() => expect(storedCb).toBeTruthy());
    const mockUser = {
      uid: 'u-1',
      getIdToken: vi.fn().mockResolvedValue('t-1'),
    } as unknown as FirebaseUser;
    storedCb!(mockUser);
    await flush();
    await waitFor(() =>
      expect(screen.getByTestId('loading')).toHaveTextContent('false')
    );
    storedCb!(null);
    await flush();
    await waitFor(() => {
      expect(screen.getByTestId('uid')).toHaveTextContent('');
      expect(screen.getByTestId('token')).toHaveTextContent('');
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });
  });

  it('calls unsubscribe on unmount', async () => {
    const { unmount } = render(
      <AuthProvider>
        <ShowAuth />
      </AuthProvider>
    );
    await waitFor(() => expect(storedCb).toBeTruthy());
    unmount();
    expect(unsubscribeMock).toHaveBeenCalledTimes(1);
  });
});
