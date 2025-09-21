import { t } from 'i18next';
import type { KeyValueRow } from '@/types/restFullClient';

export function withIds(rows: KeyValueRow[]): KeyValueRow[] {
  return rows.map((r) => ({
    ...r,
    id: r.id || cryptoId(),
    enabled: r.enabled ?? true,
  }));
}

export function newRow(key = '', value = ''): KeyValueRow {
  return { id: cryptoId(), enabled: true, key, value };
}

export function cryptoId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function maskVars(text: string) {
  let i = 0;
  const tokenFor = () => `__VAR_${i++}__`;
  const map = new Map<string, string>();

  let masked = text.replace(/:\s*\{\{([^}]*)\}\}/g, (_m, name: string) => {
    const token = tokenFor();
    map.set(token, `{{${name}}}`);
    return `: "${token}"`;
  });

  masked = masked.replace(
    /(\[|,)\s*\{\{([^}]*)\}\}\s*(?=(,|\]|\}))/g,
    (_m, prefix: string, name: string) => {
      const token = tokenFor();
      map.set(token, `{{${name}}}`);
      return `${prefix} "${token}"`;
    }
  );

  masked = masked.replace(/^\s*\{\{([^}]*)\}\}\s*$/g, (_m, name: string) => {
    const token = tokenFor();
    map.set(token, `{{${name}}}`);
    return `"${token}"`;
  });

  return { masked, map };
}

function formatJsonError(msg: string): string {
  return t('validation.jsonError', { msg });
}

export function validateJson(text: string): string | undefined {
  const trimmed = text.trim();
  if (!trimmed) return undefined;
  try {
    const { masked } = maskVars(text);
    JSON.parse(masked);
    return undefined;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return formatJsonError(msg);
  }
}

export function prettifyJson(text: string): string {
  try {
    const { masked, map } = maskVars(text);
    const pretty = JSON.stringify(JSON.parse(masked), null, 2);
    return pretty.replace(/"__VAR_(\d+)__"/g, (_m, n: string) => {
      const key = `__VAR_${n}__`;
      return map.get(key) ?? '""';
    });
  } catch {
    return text;
  }
}

export const validateJsonAllowVars = validateJson;
export const prettifyJsonAllowVars = prettifyJson;

export function safeParseUrl(url: string): URL | undefined {
  try {
    return new URL(url);
  } catch {
    return undefined;
  }
}
