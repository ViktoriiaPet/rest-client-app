import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import TableHeader from '@/components/TableHeader';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
    ready: true,
  }),
}));

describe('TableHeader component', () => {
  it('renders name, value and delete button', () => {
    render(<TableHeader />);

    expect(screen.getByText('variables.variableName')).toBeInTheDocument();
    expect(screen.getByText('variables.variableValue')).toBeInTheDocument();
    expect(screen.getByText('variables.actions')).toBeInTheDocument();
  });
});
