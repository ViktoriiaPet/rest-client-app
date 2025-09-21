import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import TableHeader from '@/components/TableHeader';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('TableHeader', () => {
  it('renders name, value and actions', () => {
    render(<TableHeader />);
    expect(screen.getByText('variables.variableName')).toBeInTheDocument();
    expect(screen.getByText('variables.variableValue')).toBeInTheDocument();
    expect(screen.getByText('variables.actions')).toBeInTheDocument();
  });
});
