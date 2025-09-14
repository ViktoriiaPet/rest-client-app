import type { Variables } from '@/types/variables';

export const getUserVariables = (userId: string): Variables => {
  return JSON.parse(localStorage.getItem(`userVariables_${userId}`) || '{}') as Variables;
};

export const saveUserVariables = (userId: string, vars: Variables) => {
  localStorage.setItem(`userVariables_${userId}`, JSON.stringify(vars));
};
