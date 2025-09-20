import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router';
import Root from '@/layouts/layout';

describe('Root component', () => {
  it('renders Outlet correctly', () => {
    render(
      <MemoryRouter initialEntries={['/child']}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="child" element={<div>Child Route</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Child Route')).toBeInTheDocument();
  });
});
