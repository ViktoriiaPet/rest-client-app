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

export function isValidUrl(s: string): boolean {
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}

export function validateJson(text: string): string | undefined {
  if (!text.trim()) return undefined;
  try {
    JSON.parse(text);
    return undefined;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return `JSON error: ${msg}`;
  }
}

export function safeParseUrl(s: string): URL | undefined {
  try {
    return new URL(s);
  } catch {
    return undefined;
  }
}

export function labelForBody(m: 'none' | 'json' | 'form-data' | 'raw'): string {
  switch (m) {
    case 'none':
      return 'None';
    case 'json':
      return 'JSON';
    case 'form-data':
      return 'form-data';
    case 'raw':
      return 'Raw';
    default:
      return m;
  }
}

export function prettifyJson(text: string): string {
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return text;
  }
}
