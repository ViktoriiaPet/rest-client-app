import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type JSX,
} from 'react';

import type { User } from 'firebase/auth';

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading: true,
  setUser: () => {
    throw new Error('setUser must be used within AuthProvider');
  },
  setToken: () => {
    throw new Error('setUser must be used within AuthProvider');
  },
});

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard

    let unsubscribe: (() => void) | undefined;

    void (async () => {
      const { auth } = await import('@/service/firebase');
      const { onAuthStateChanged } = await import('firebase/auth');

      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        void (async () => {
          if (firebaseUser) {
            setUser(firebaseUser);
            const idToken = await firebaseUser.getIdToken();
            setToken(idToken);
          } else {
            setUser(null);
            setToken(null);
          }
          setLoading(false);
        })();
      });
    })();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, loading, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
