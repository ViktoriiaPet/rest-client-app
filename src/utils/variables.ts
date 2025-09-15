export function applyVariables(
  text: string,
  vars: Partial<Record<string, string>> = {}
): string {
  if (text.length === 0) return '';

  const pattern = /\{\{(\w+)\}\}/g;

  return text.replace(pattern, (_match: string, key: string) => {
    const value = vars[key];
    return value ?? '';
  });
}
