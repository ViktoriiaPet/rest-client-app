import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import VariablesAddBar from '@/components/VariablesAddBar';

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

describe('VariablesAddBar component', () => {
  it('renders inputs and button, handles add correctly', () => {
    const mockOnAdd = vi.fn();

    render(<VariablesAddBar onAdd={mockOnAdd} />);

    const nameInput = screen.getByPlaceholderText(
      'variables.variableName'
    ) as HTMLInputElement;
    const valueInput = screen.getByPlaceholderText(
      'variables.variableValue'
    ) as HTMLInputElement;
    const addButton = screen.getByText('variables.addButton');

    expect(nameInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'TestName' } });
    fireEvent.change(valueInput, { target: { value: 'TestValue' } });
    expect(nameInput.value).toBe('TestName');
    expect(valueInput.value).toBe('TestValue');

    fireEvent.click(addButton);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith('TestName', 'TestValue');

    expect(nameInput.value).toBe('');
    expect(valueInput.value).toBe('');
  });

  it('does not call onAdd if inputs are empty', () => {
    const mockOnAdd = vi.fn();
    render(<VariablesAddBar onAdd={mockOnAdd} />);

    const addButton = screen.getByText('variables.addButton');

    fireEvent.click(addButton);
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});
