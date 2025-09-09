export const badgeColor = (code: number): string => {
  if (code < 200) return 'bg-blue-600';
  if (code < 300) return 'bg-green-600';
  if (code < 400) return 'bg-orange-500';
  if (code < 500) return 'bg-red-600';
  return 'bg-rose-600';
};
