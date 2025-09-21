import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HistoryPage from '@/pages/history';

vi.mock('vite-env-only/macros', () => ({
  serverOnly$: <T extends (...args: unknown[]) => unknown>(fn: T) => fn,
}));

describe('HistoryPage', () => {
  it('renders the table HTML from loaderData', () => {
    const loaderData = {
      tableHtml: '<div>Test table content</div>',
    };

    render(
      <MemoryRouter>
        <HistoryPage loaderData={loaderData} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test table content')).toBeInTheDocument();
  });
});
