import { describe, it, expect } from 'vitest';
import { applyVariables } from '@/utils/variables';

describe('applyVariables', () => {
  it('returns empty string for empty input', () => {
    expect(applyVariables('', { a: '1' })).toBe('');
  });

  it('substitutes a single variable', () => {
    expect(applyVariables('Hello {{name}}!', { name: 'Darya' })).toBe(
      'Hello Darya!'
    );
  });

  it('substitutes multiple variables', () => {
    const out = applyVariables('Hi {{first}} {{last}}', {
      first: 'Darya',
      last: 'Daniuk',
    });
    expect(out).toBe('Hi Darya Daniuk');
  });

  it('replaces missing variables with empty string', () => {
    expect(applyVariables('X{{missing}}Y', {})).toBe('XY');
    expect(applyVariables('X{{missing}}Y', { present: '1' })).toBe('XY');
  });

  it('keeps empty-string values as empty (not nullish)', () => {
    expect(applyVariables('A{{k}}B', { k: '' })).toBe('AB');
  });

  it('keeps "0" and other falsy-but-defined strings', () => {
    expect(applyVariables('Count: {{n}}', { n: '0' })).toBe('Count: 0');
  });

  it('handles repeated keys across the string', () => {
    const src = '{{k}}-{{k}}-{{k}}';
    expect(applyVariables(src, { k: 'X' })).toBe('X-X-X');
  });

  it('does not match names with hyphens/spaces due to \\w+', () => {
    const badKeys: Record<string, string> = { 'first-name': 'Darya' };
    expect(applyVariables('Hello {{first-name}}', badKeys)).toBe(
      'Hello {{first-name}}'
    );
  });
});
