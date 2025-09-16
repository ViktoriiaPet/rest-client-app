import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@/utils/requestEditor', () => ({
  newRow: vi.fn(() => ({ id: 'row-new', key: '', value: '', enabled: true })),
}));

import { KeyValueEditor } from '@/components/KeyValueEditor';

type Row = { id: string; key: string; value: string; enabled: boolean };

const makeRows = (): Row[] => [
  { id: 'r1', key: 'k1', value: 'v1', enabled: true },
  { id: 'r2', key: 'k2', value: 'v2', enabled: false },
];

describe('<KeyValueEditor />', () => {
  let rows: Row[];
  let onChange: ReturnType<typeof vi.fn>;
  const addLabel = 'Add pair';

  beforeEach(() => {
    rows = makeRows();
    onChange = vi.fn();
  });

  const renderEditor = () =>
    render(
      <KeyValueEditor rows={rows} onChange={onChange} addLabel={addLabel} />
    );

  it('renders the provided rows', () => {
    renderEditor();
    const keyInputs = screen.getAllByPlaceholderText('Key');
    const valInputs = screen.getAllByPlaceholderText('Value');
    expect(keyInputs).toHaveLength(rows.length);
    expect(valInputs).toHaveLength(rows.length);
    expect((keyInputs[0] as HTMLInputElement).value).toBe('k1');
    expect((valInputs[1] as HTMLInputElement).value).toBe('v2');
  });
});
