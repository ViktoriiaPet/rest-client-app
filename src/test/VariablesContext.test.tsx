import { render, screen, waitFor } from '@testing-library/react';
import { vi, it, describe, expect, beforeEach } from 'vitest';
import { VariablesProvider, useVariables } from '@/context/VariablesContext';
import { useAuth } from '@/context/AuthContext';
import { getUserVariables, saveUserVariables } from '@/store/variableStorage';
import type { Variables } from '@/types/variables';
import type { User } from 'firebase/auth';


vi.mock('@/context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

vi.mock('@/store/variableStorage', () => ({
  getUserVariables: vi.fn(),
  saveUserVariables: vi.fn(),
}));


const TestComponent = () => {
  const { variables, setVariables } = useVariables();
  return (
    <div>
      <div data-testid="variables">{JSON.stringify(variables)}</div>
      <button
        data-testid="set-variables"
        onClick={() => setVariables({ test: 'value' })}
      >
        Set Variables
      </button>
    </div>
  );
};

describe('VariablesContext', () => {
  const mockUser = { uid: 'test-uid' } as User;
  const mockUseAuth = useAuth as vi.Mock;
  const mockGetUserVariables = getUserVariables as vi.Mock;
  const mockSaveUserVariables = saveUserVariables as vi.Mock;

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseAuth.mockReturnValue({ user: null });
    mockGetUserVariables.mockReturnValue({});
    mockSaveUserVariables.mockImplementation(() => {});
  });

  it('provides empty variables when user is not authenticated', async () => {
    mockUseAuth.mockReturnValue({ user: null });

    render(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    await waitFor(() => {
      const variablesElement = screen.getByTestId('variables');
      expect(variablesElement.textContent).toBe('{}');
    });
  });

  it('loads user variables when user is authenticated', async () => {
    const mockVariables = { apiKey: '123', baseUrl: 'https://api.test.com' };
    mockUseAuth.mockReturnValue({ user: mockUser });
    mockGetUserVariables.mockReturnValue(mockVariables);

    render(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    await waitFor(() => {
      const variablesElement = screen.getByTestId('variables');
      expect(variablesElement.textContent).toBe(JSON.stringify(mockVariables));
      expect(mockGetUserVariables).toHaveBeenCalledWith(mockUser.uid);
    });
  });

  it('saves variables when setVariables is called and user is authenticated', async () => {
    mockUseAuth.mockReturnValue({ user: mockUser });
    mockGetUserVariables.mockReturnValue({});

    render(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    const setButton = screen.getByTestId('set-variables');
    setButton.click();

    await waitFor(() => {
      expect(mockSaveUserVariables).toHaveBeenCalledWith(mockUser.uid, {
        test: 'value',
      });
    });
  });

  it('does not save variables when setVariables is called without user', async () => {
    mockUseAuth.mockReturnValue({ user: null });
    mockGetUserVariables.mockReturnValue({});

    render(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    const setButton = screen.getByTestId('set-variables');
    setButton.click();

    await waitFor(() => {
      expect(mockSaveUserVariables).not.toHaveBeenCalled();
    });
  });

  it('updates local state when setVariables is called', async () => {
    mockUseAuth.mockReturnValue({ user: mockUser });
    mockGetUserVariables.mockReturnValue({});

    render(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    const setButton = screen.getByTestId('set-variables');
    setButton.click();

    await waitFor(() => {
      const variablesElement = screen.getByTestId('variables');
      expect(variablesElement.textContent).toBe(
        JSON.stringify({ test: 'value' })
      );
    });
  });

  it('resets variables when user changes to null', async () => {
    const { rerender } = render(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    mockUseAuth.mockReturnValue({ user: mockUser });
    mockGetUserVariables.mockReturnValue({ existing: 'data' });

    rerender(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    await waitFor(() => {
      const variablesElement = screen.getByTestId('variables');
      expect(variablesElement.textContent).toBe(
        JSON.stringify({ existing: 'data' })
      );
    });

    mockUseAuth.mockReturnValue({ user: null });

    rerender(
      <VariablesProvider>
        <TestComponent />
      </VariablesProvider>
    );

    await waitFor(() => {
      const variablesElement = screen.getByTestId('variables');
      expect(variablesElement.textContent).toBe('{}');
    });
  });

  it('throws error when useVariables is used outside VariablesProvider', () => {

    const consoleError = vi.spyOn(console, 'error');
    consoleError.mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useVariables must be used within VariablesProvider');

    consoleError.mockRestore();
  });
});
