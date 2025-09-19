import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import TableRow from '@/components/TableRow';



vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('TableRow component', () => {
  it('renders name, value and delete button', () => {
    const mockOnClick = vi.fn();

    render(
      <TableRow
        name="Test Name"
        value="Test Value"
        onClick={mockOnClick}
      />
    );

    // Проверяем, что name и value отображаются
    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.getByText('Test Value')).toBeInTheDocument();

    // Проверяем кнопку
    const deleteButton = screen.getByText('variables.delete');
    expect(deleteButton).toBeInTheDocument();

    // Проверяем клик
    fireEvent.click(deleteButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
