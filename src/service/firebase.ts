import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  onIdTokenChanged,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import type { Unsubscribe } from 'firebase/auth';
import type { NavigateFunction } from 'react-router';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export function initAuthWatcher(navigate: NavigateFunction): Unsubscribe {
  let called = false;

  const unsubscribe = onIdTokenChanged(auth, (user) => {
    void (async () => {
      if (called) return;
      const currentPath = window.location.pathname;

      if (!user) {
        called = true;
        void logout();
        if (currentPath !== '/') void navigate('/');
        return;
      }

      try {
        const tokenResult = await user.getIdTokenResult();
        const expiration = new Date(tokenResult.expirationTime).getTime();
        if (expiration <= Date.now()) {
          called = true;
          void logout();
          if (currentPath !== '/') void navigate('/');
        }
      } catch (err) {
        console.error(err);
        called = true;
        void logout();
        if (currentPath !== '/') void navigate('/');
      }
    })();
  });

  return unsubscribe;
}

export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    void import('firebase/analytics').then(({ getAnalytics }) => {
      getAnalytics(app);
    });
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const user = res.user;
  const token = await user.getIdToken();
  return { user, token };
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  await updateProfile(user, { displayName: name });

  const token = await user.getIdToken();

  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
  });

  return { user, token };
};
const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
  }
};

const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('Logged out');
  } catch (err) {
    console.error('Logout failed:', err);
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
