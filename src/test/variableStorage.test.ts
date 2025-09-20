import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getUserVariables, saveUserVariables } from '@/store/variableStorage';
import type { Variables } from '@/types/variables';

describe('userVariables utils', () => {
  const userId = '123';
  const testVars: Variables = { name: 'Test', value: '42' };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save variables to localStorage', () => {
    saveUserVariables(userId, testVars);

    const saved = localStorage.getItem(`userVariables_${userId}`);
    expect(saved).toBe(JSON.stringify(testVars));
  });

  it('should get variables from localStorage', () => {
    localStorage.setItem(`userVariables_${userId}`, JSON.stringify(testVars));

    const vars = getUserVariables(userId);
    expect(vars).toEqual(testVars);
  });

  it('should return empty object if nothing is in localStorage', () => {
    const vars = getUserVariables('nonexistentUser');
    expect(vars).toEqual({});
  });

  it('should handle invalid JSON gracefully', () => {
    localStorage.setItem(`userVariables_${userId}`, 'invalid JSON');

    expect(() => getUserVariables(userId)).toThrow();
  });
});
