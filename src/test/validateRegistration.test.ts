import {
  getRegistrationSchema,
  getLoginSchema,
} from '@/utils/validateRegistration';
import { describe, it, expect, vi } from 'vitest';

vi.mock('i18next', () => ({ t: (k: string) => k }));

describe('getRegistrationSchema', () => {
  const schema = getRegistrationSchema();

  it('valid data passes', () => {
    const ok = schema.safeParse({
      username: 'Alice',
      email: 'alice@example.com',
      password: 'Abcdef1!',
    });
    expect(ok.success).toBe(true);
  });

  it('supports Cyrillic username', () => {
    const ok = schema.safeParse({
      username: 'Иван',
      email: 'ivan@example.com',
      password: 'Пароль1!',
    });
    expect(ok.success).toBe(true);
  });

  it('username required', () => {
    const res = schema.safeParse({
      username: '',
      email: 'a@a.com',
      password: 'Abcdef1!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.username).toContain('validation.usernameRequired');
  });

  it('username letters only', () => {
    const res = schema.safeParse({
      username: 'John3',
      email: 'a@a.com',
      password: 'Abcdef1!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.username).toContain('validation.usernameLetters');
  });

  it('email invalid', () => {
    const res = schema.safeParse({
      username: 'Bob',
      email: 'bad@',
      password: 'Abcdef1!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.email).toContain('validation.emailInvalid');
  });

  it('password invalid (missing special)', () => {
    const res = schema.safeParse({
      username: 'Bob',
      email: 'b@b.com',
      password: 'Abcdef12',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.password).toContain('validation.passwordInvalid');
  });

  it('password invalid (missing digit)', () => {
    const res = schema.safeParse({
      username: 'Bob',
      email: 'b@b.com',
      password: 'Abcdefg!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.password).toContain('validation.passwordInvalid');
  });

  it('password invalid (missing letter)', () => {
    const res = schema.safeParse({
      username: 'Bob',
      email: 'b@b.com',
      password: '1234567!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.password).toContain('validation.passwordInvalid');
  });

  it('password invalid (too short)', () => {
    const res = schema.safeParse({
      username: 'Bob',
      email: 'b@b.com',
      password: 'A1!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.password).toContain('validation.passwordInvalid');
  });
});

describe('getLoginSchema', () => {
  const schema = getLoginSchema();

  it('valid data passes', () => {
    const ok = schema.safeParse({
      email: 'user@example.com',
      password: 'Letter1!',
    });
    expect(ok.success).toBe(true);
  });

  it('email invalid', () => {
    const res = schema.safeParse({
      email: 'bad',
      password: 'Letter1!',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.email).toContain('validation.emailInvalid');
  });

  it('password invalid', () => {
    const res = schema.safeParse({
      email: 'user@example.com',
      password: 'abcdef12',
    });
    if (res.success) throw new Error('expected failure');
    const errs = res.error.flatten().fieldErrors;
    expect(errs.password).toContain('validation.passwordInvalid');
  });
});
