import type { Variables } from '@/types/variables';

export const getUserVariables = (userId: string): Variables => {
  const all = JSON.parse(
    localStorage.getItem('userVariables') || '{}'
  ) as Record<string, Variables>;
  return all[userId] || {};
};

export const saveUserVariables = (userId: string, vars: Variables) => {
  const all = JSON.parse(
    localStorage.getItem('userVariables') || '{}'
  ) as Record<string, Variables>;
  all[userId] = vars;
  localStorage.setItem('userVariables', JSON.stringify(all));
};
