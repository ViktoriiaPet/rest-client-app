import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  withIds,
  newRow,
  cryptoId,
  isValidUrl,
  validateJson,
  safeParseUrl,
  labelForBody,
  prettifyJson,
} from '@/utils/requestEditor';

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('withIds', () => {
  it('adds ids and defaults enabled=true', () => {
    vi.spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.123)
      .mockImplementationOnce(() => 0.456);
    const rows = withIds([
      { key: 'a', value: '1', id: 'id', enabled: true },
      { key: 'b', value: '2', id: 'id2', enabled: false },
    ]);
    expect(rows[0].id).toBeTruthy();
    expect(rows[0].enabled).toBe(true);
    expect(rows[1].id).toBeTruthy();
    expect(rows[1].enabled).toBe(false);
  });

  it('preserves existing id', () => {
    const rows = withIds([
      { id: 'fixed', key: 'k', value: 'v', enabled: true },
    ]);
    expect(rows[0].id).toBe('fixed');
  });
});

describe('newRow', () => {
  it('creates a row with generated id and defaults', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.789);
    const r = newRow('k', 'v');
    expect(r.key).toBe('k');
    expect(r.value).toBe('v');
    expect(r.enabled).toBe(true);
    expect(r.id).toBeTruthy();
  });
});

describe('cryptoId', () => {
  it('returns a non-empty alphanumeric id', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2345);
    const id = cryptoId();
    expect(id).toMatch(/^[a-z0-9]+$/);
  });

  it('generates different ids on different calls when random differs', () => {
    vi.spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.101)
      .mockImplementationOnce(() => 0.909);
    const a = cryptoId();
    const b = cryptoId();
    expect(a).not.toBe(b);
  });
});

describe('isValidUrl', () => {
  it('validates urls', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('not a url')).toBe(false);
  });
});

describe('validateJson', () => {
  it('returns undefined for empty or valid json', () => {
    expect(validateJson('   ')).toBeUndefined();
    expect(validateJson('{"a":1}')).toBeUndefined();
  });

  it('returns error message for invalid json', () => {
    const msg = validateJson('{"a":');
    expect(msg).toBeTruthy();
    expect(msg?.startsWith('JSON error:')).toBe(true);
  });
});

describe('safeParseUrl', () => {
  it('parses or returns undefined', () => {
    const good = safeParseUrl('http://x');
    expect(good?.href).toBe('http://x/');
    const bad = safeParseUrl('x y z');
    expect(bad).toBeUndefined();
  });
});

describe('labelForBody', () => {
  it('maps known values and falls back', () => {
    expect(labelForBody('none')).toBe('None');
    expect(labelForBody('json')).toBe('JSON');
    expect(labelForBody('form-data')).toBe('form-data');
    expect(labelForBody('raw')).toBe('Raw');
  });
});

describe('prettifyJson', () => {
  it('pretty prints valid json and returns input on failure', () => {
    const pretty = prettifyJson('{"a":1}');
    expect(pretty).toBe('{\n  "a": 1\n}');
    const same = prettifyJson('{invalid');
    expect(same).toBe('{invalid');
  });
});
