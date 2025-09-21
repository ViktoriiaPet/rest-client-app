export function applyVariables(
  text: string,
  vars: Partial<Record<string, string>> = {},
  opts?: { wrap?: boolean }
): string {
  if (!text) return '';
  const wrap = opts?.wrap !== false;
  const re = /\{\{(\w+)\}\}/g;

  return text.replace(re, (match, key, offset) => {
    const value = String(vars[key] ?? '');

    if (!wrap) {
      return value;
    }

    const before = text[offset - 1];
    const after = text[offset + match.length];
    const alreadyQuoted = before === '"' && after === '"';
    if (alreadyQuoted) {
      const escaped = JSON.stringify(value);
      return escaped.slice(1, -1);
    }
    return JSON.stringify(value);
  });
}

const VARS_KEY = (uid?: string) => `userVariables_${uid ?? ''}`;

const toStringRecord = (rec: Record<string, unknown>): Record<string, string> =>
  Object.fromEntries(Object.entries(rec).map(([k, v]) => [k, String(v ?? '')]));

export function getLSVars(uid?: string): Record<string, string> {
  const raw = localStorage.getItem(VARS_KEY(uid));
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return toStringRecord(parsed);
  } catch {
    return {};
  }
}

export function saveLSVars(
  uid: string | undefined,
  vars: Record<string, unknown>
): void {
  const asStrings = toStringRecord(vars);
  localStorage.setItem(VARS_KEY(uid), JSON.stringify(asStrings));
}
