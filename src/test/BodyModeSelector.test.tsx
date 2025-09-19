import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BodyModeSelector } from '@/components/BodyModeSelector';
import type { BodyMode } from '@/types/restFullClient';

afterEach(() => cleanup());

describe('BodyModeSelector', () => {
  it('renders all modes and marks the active one', () => {
    const onChange = vi.fn();
    render(<BodyModeSelector value="json" onChange={onChange} />);

    const btnNone = screen.getByRole('button', { name: 'none' });
    const btnJson = screen.getByRole('button', { name: 'json' });
    const btnForm = screen.getByRole('button', { name: 'form-data' });
    const btnRaw = screen.getByRole('button', { name: 'raw' });

    expect(btnJson).toHaveAttribute('aria-pressed', 'true');
    expect(btnJson).toHaveClass('bg-pink-300');
    for (const b of [btnNone, btnForm, btnRaw]) {
      expect(b).toHaveAttribute('aria-pressed', 'false');
      expect(b).toHaveClass('bg-pink-200');
    }
  });

  it('calls onChange with clicked mode', () => {
    const onChange = vi.fn<(m: BodyMode) => void>();
    const { getByRole } = render(
      <BodyModeSelector value="none" onChange={onChange} />
    );

    fireEvent.click(getByRole('button', { name: 'raw' }));
    expect(onChange).toHaveBeenCalledWith('raw');

    fireEvent.click(getByRole('button', { name: 'json' }));
    expect(onChange).toHaveBeenCalledWith('json');
  });
});
