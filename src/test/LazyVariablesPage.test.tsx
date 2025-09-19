import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { LazyVariablesPage } from '@/components/LazyVariablesPage';

vi.mock('../pages/variables.tsx', () => ({
  default: () => <div>Variables Page Content</div>,
}));

describe('LazyVariablesPage', () => {
  it('renders fallback first and then lazy component', async () => {
    render(<LazyVariablesPage />);

    expect(screen.getByText('Loading Variables...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Variables Page Content')).toBeInTheDocument();
    });
  });
});
