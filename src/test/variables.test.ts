import { describe, it, expect } from 'vitest';
import { applyVariables } from '@/utils/variables';

describe('applyVariables', () => {
  it('returns empty string for empty input', () => {
    expect(applyVariables('', { a: '1' })).toBe('');
  });

  it('substitutes a single variable (unquoted context -> inserts JSON string with quotes)', () => {
    expect(applyVariables('Hello {{name}}!', { name: 'Darya' })).toBe(
      'Hello "Darya"!'
    );
  });

  it('substitutes multiple variables (unquoted -> each wrapped in quotes)', () => {
    const out = applyVariables('Hi {{first}} {{last}}', {
      first: 'Darya',
      last: 'Daniuk',
    });
    expect(out).toBe('Hi "Darya" "Daniuk"');
  });

  it('replaces missing variables with empty JSON string ("") in unquoted context', () => {
    expect(applyVariables('X{{missing}}Y', {})).toBe('X""Y');
    expect(applyVariables('X{{missing}}Y', { present: '1' })).toBe('X""Y');
  });

  it('keeps empty-string values as empty JSON string ("")', () => {
    expect(applyVariables('A{{k}}B', { k: '' })).toBe('A""B');
  });

  it('keeps "0" and other falsy-but-defined strings (still quoted)', () => {
    expect(applyVariables('Count: {{n}}', { n: '0' })).toBe('Count: "0"');
  });

  it('handles repeated keys across the string', () => {
    const src = '{{k}}-{{k}}-{{k}}';
    expect(applyVariables(src, { k: 'X' })).toBe('"X"-"X"-"X"');
  });

  it('does not match names with hyphens/spaces due to \\w+', () => {
    const badKeys: Record<string, string> = { 'first-name': 'Darya' };
    expect(applyVariables('Hello {{first-name}}', badKeys)).toBe(
      'Hello {{first-name}}'
    );
  });

  it('inside already-quoted context it escapes but does not double-quote', () => {
    expect(applyVariables('Hello "{{name}}"!', { name: 'Darya' })).toBe(
      'Hello "Darya"!'
    );
    expect(applyVariables('{"x":"{{v}}"}', { v: 'a "b"' })).toBe(
      '{"x":"a \\"b\\""}'
    );
  });

  it('inserts quoted JSON string when placeholder is unquoted JSON value', () => {
    expect(applyVariables('{"x": {{v}} }', { v: 'z' })).toBe('{"x": "z" }');
  });
});
