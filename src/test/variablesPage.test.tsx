import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { vi, it, describe, expect, beforeEach } from 'vitest';
import VariablesPage from '@/pages/variables';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
  }),
}));

vi.mock('react-router-dom', () => ({
  Navigate: ({ to }: { to: string }) => <div>Navigate to {to}</div>,
}));

vi.mock('@/context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

vi.mock('@/context/VariablesContext', () => ({
  useVariables: vi.fn(),
}));

vi.mock('@/components/TableRow', () => ({
  default: ({ name, value }: { name: string; value: string }) => (
    <div>
      Row: {name}={value}
    </div>
  ),
}));
vi.mock('@/components/TableHeader', () => ({
  default: () => <div data-testid="table-header">TableHeader</div>,
}));
vi.mock('@/components/VariablesAddBar', () => ({
  default: ({ onAdd }: { onAdd: (k: string, v: string) => void }) => (
    <button onClick={() => onAdd('foo', 'bar')}>Add Variable</button>
  ),
}));

import { useAuth } from '@/context/AuthContext';
import { useVariables } from '@/context/VariablesContext';

describe('VariablesPage', () => {
  it('renders loading state', () => {
    (useAuth as vi.Mock).mockReturnValue({ user: null, loading: true });
    (useVariables as vi.Mock).mockReturnValue({
      variables: {},
      setVariables: vi.fn(),
    });

    render(<VariablesPage />);

    expect(screen.getByText('app.loading')).toBeInTheDocument();
  });

  it('navigates to / when user is not logged in', () => {
    (useAuth as vi.Mock).mockReturnValue({ user: null, loading: false });
    (useVariables as vi.Mock).mockReturnValue({
      variables: {},
      setVariables: vi.fn(),
    });

    render(<VariablesPage />);

    expect(screen.getByText('Navigate to /')).toBeInTheDocument();
  });

  it('renders variables when user is logged in', async () => {
    (useAuth as vi.Mock).mockReturnValue({ user: { id: 1 }, loading: false });
    (useVariables as vi.Mock).mockReturnValue({
      variables: { testKey: 'testValue' },
      setVariables: vi.fn(),
    });

    render(<VariablesPage />);

    await waitFor(() => {
      expect(screen.getByText('variables.title')).toBeInTheDocument();
    });
    const header = await screen.findByTestId('table-header');
    expect(header).toBeInTheDocument();
    expect(screen.getByText('Row: testKey=testValue')).toBeInTheDocument();
  });
});
