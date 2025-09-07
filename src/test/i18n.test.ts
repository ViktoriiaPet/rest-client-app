import { describe, it, expect } from 'vitest';

import i18n from '@/i18n/i18n';

describe('i18n translation', () => {
  it('should return English translation', async () => {
    await i18n.changeLanguage('en');
    expect(i18n.t('auth.signIn')).toEqual('Sign in');
  });
  it('should return Russian translation', async() => {
    await i18n.changeLanguage('ru');
    expect(i18n.t('auth.signIn')).toEqual('Войти');
  });
});
