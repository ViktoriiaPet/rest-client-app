import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { User} from 'firebase/auth';

import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
} from '@/service/firebase';

import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  sendPasswordResetEmail: vi.fn(),
  signOut: vi.fn(),
  updateProfile: vi.fn(),
  onIdTokenChanged: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  collection: vi.fn(),
  addDoc: vi.fn(),
}));

describe('firebase helpers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('logInWithEmailAndPassword should return user and token', async () => {
    const fakeUser = {
      getIdToken: vi.fn().mockResolvedValue('fakeToken'),
    } as Partial<User> as User;

    (firebaseAuth.signInWithEmailAndPassword as vi.Mock).mockResolvedValue({
      user: fakeUser,
    });

    const result = await logInWithEmailAndPassword('test@mail.com', '123456');

    expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      'test@mail.com',
      '123456'
    );
    expect(result).toEqual({ user: fakeUser, token: 'fakeToken' });
  });

  it('registerWithEmailAndPassword should create user, update profile, save to Firestore', async () => {
    const fakeUser = {
      uid: '123',
      getIdToken: vi.fn().mockResolvedValue('newToken'),
    } as Partial<User> as User;

    (firebaseAuth.createUserWithEmailAndPassword as vi.Mock).mockResolvedValue({
      user: fakeUser,
    });

    const result = await registerWithEmailAndPassword(
      'Alice',
      'alice@mail.com',
      'pass123'
    );

    expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      'alice@mail.com',
      'pass123'
    );
    expect(firebaseAuth.updateProfile).toHaveBeenCalledWith(fakeUser, {
      displayName: 'Alice',
    });
    expect(firebaseFirestore.addDoc).toHaveBeenCalled();
    expect(result).toEqual({ user: fakeUser, token: 'newToken' });
  });

  it('sendPasswordReset should call sendPasswordResetEmail', async () => {
    (firebaseAuth.sendPasswordResetEmail as vi.Mock).mockResolvedValue(
      undefined
    );

    await sendPasswordReset('foo@mail.com');

    expect(firebaseAuth.sendPasswordResetEmail).toHaveBeenCalledWith(
      undefined,
      'foo@mail.com'
    );
  });
});