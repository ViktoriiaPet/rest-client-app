import { getStatusText, STATUS_TEXT } from '@/utils/getStatusText';
import { describe, it, expect } from 'vitest';

describe('STATUS_TEXT map', () => {
  it('contains selected standard codes', () => {
    expect(STATUS_TEXT[200]).toBe('OK');
    expect(STATUS_TEXT[404]).toBe('Not Found');
    expect(STATUS_TEXT[418]).toBe("I'm a teapot");
    expect(STATUS_TEXT[511]).toBe('Network Authentication Required');
  });
});

describe('getStatusText', () => {
  it('returns mapped text for known codes', () => {
    const cases: Array<[number, string]> = [
      [100, 'Continue'],
      [101, 'Switching Protocols'],
      [103, 'Early Hints'],
      [200, 'OK'],
      [201, 'Created'],
      [204, 'No Content'],
      [301, 'Moved Permanently'],
      [302, 'Found'],
      [304, 'Not Modified'],
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [405, 'Method Not Allowed'],
      [413, 'Payload Too Large'],
      [414, 'URI Too Long'],
      [429, 'Too Many Requests'],
      [451, 'Unavailable For Legal Reasons'],
      [500, 'Internal Server Error'],
      [502, 'Bad Gateway'],
      [503, 'Service Unavailable'],
      [504, 'Gateway Timeout'],
      [508, 'Loop Detected'],
      [510, 'Not Extended'],
      [511, 'Network Authentication Required'],
    ];
    for (const [code, text] of cases) {
      expect(getStatusText(code)).toBe(text);
    }
  });

  it('returns empty string for unknown codes', () => {
    expect(getStatusText(299)).toBe('');
    expect(getStatusText(306)).toBe('');
    expect(getStatusText(499)).toBe('');
    expect(getStatusText(509)).toBe('');
    expect(getStatusText(999)).toBe('');
  });
});
