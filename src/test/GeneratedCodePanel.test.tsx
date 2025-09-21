import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GeneratedCodePanel from '@/components/GeneratedCodePanel';
import type { RequestSnapshot, BodyMode } from '@/types/restFullClient';

const stableT = ((k: string) => k) as (k: string) => string;
vi.mock('react-i18next', () => ({ useTranslation: () => ({ t: stableT }) }));
vi.mock('@/types/restFullClient', () => ({ LANGS: ['curl', 'node'] as const }));

const buildUrlMock = vi.fn();
const generateSnippetsMock = vi.fn();
const firstAvailableLanguageMock = vi.fn();

vi.mock('@/utils/generatedCode', () => ({
  buildUrl: (...args: unknown[]) => buildUrlMock(...args),
  generateSnippets: (...args: unknown[]) => generateSnippetsMock(...args),
  firstAvailableLanguage: (...args: unknown[]) =>
    firstAvailableLanguageMock(...args),
}));

vi.mock('@/components/ui/button', () => ({
  Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} />
  ),
}));

vi.mock('@/components/ui/select', () => {
  type SelectProps = { value?: string; onValueChange: (v: string) => void };
  return {
    Select: ({ value, onValueChange }: SelectProps) => (
      <select
        data-testid="lang"
        value={value ?? ''}
        onChange={(e) => onValueChange((e.target as HTMLSelectElement).value)}
      >
        <option value="">__</option>
        <option value="curl">curl</option>
        <option value="node">node</option>
      </select>
    ),
    SelectTrigger: () => null,
    SelectValue: () => null,
    SelectContent: () => null,
    SelectItem: () => null,
  };
});

const snap = (over: Partial<RequestSnapshot> = {}): RequestSnapshot => ({
  method: 'GET',
  url: 'https://api.example.com',
  params: [],
  headers: [],
  body: { mode: 'none' as BodyMode, jsonText: '', formData: [], rawText: '' },
  ...over,
});

type VMock = ReturnType<typeof vi.fn>;

beforeEach(() => {
  vi.resetAllMocks();
  Object.defineProperty(window.navigator, 'clipboard', {
    configurable: true,
    value: { writeText: vi.fn().mockResolvedValue(undefined) as VMock },
  });
});

describe('GeneratedCodePanel', () => {
  it('shows error when url is invalid', async () => {
    buildUrlMock.mockReturnValue(null);
    render(<GeneratedCodePanel snapshot={snap()} />);
    expect(await screen.findByText('restfull.urlInvalid')).toBeInTheDocument();
  });

  it('loads and shows first available snippet, allows copy', async () => {
    buildUrlMock.mockReturnValue('https://final');
    generateSnippetsMock.mockResolvedValue({ curl: 'CURL_CODE' });
    firstAvailableLanguageMock.mockReturnValue('curl');

    render(<GeneratedCodePanel snapshot={snap({ method: 'POST' })} />);

    expect(screen.getByText('restfull.generating')).toBeInTheDocument();
    expect(
      await screen.findByText('restfull.generatedCode')
    ).toBeInTheDocument();
    expect(screen.getByText('POST • https://final')).toBeInTheDocument();
    expect(screen.getByText('CURL_CODE')).toBeInTheDocument();

    fireEvent.click(screen.getByText('buttons.copy'));

    await waitFor(() => {
      const write = (navigator.clipboard as unknown as { writeText: VMock })
        .writeText;
      expect(write.mock.calls[0][0]).toBe('CURL_CODE');
    });
  });

  it('switches language and shows notAvailable when code missing', async () => {
    buildUrlMock.mockReturnValue('https://final');
    generateSnippetsMock.mockResolvedValue({ curl: 'CURL_CODE' });
    firstAvailableLanguageMock.mockReturnValue('curl');

    render(<GeneratedCodePanel snapshot={snap()} />);

    await screen.findByText('CURL_CODE');

    const select = screen.getByTestId('lang') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'node' } });

    expect(
      await screen.findByText('restfull.notAvailable')
    ).toBeInTheDocument();
  });
});
