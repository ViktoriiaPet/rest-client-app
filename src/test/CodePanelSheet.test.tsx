import React, { createContext, useContext, useState } from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import type { RequestSnapshot } from '@/types/restFullClient';
import type { HttpMethod } from '@/types/apiMethods';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));

vi.mock('@/components/GeneratedCodePanel', () => ({
  default: ({ snapshot }: { snapshot: { method?: string } }) => (
    <div data-testid="generated-code">method:{snapshot.method ?? ''}</div>
  ),
}));

type SheetState = { open: boolean; setOpen: (v: boolean) => void };
const SheetCtx = createContext<SheetState | null>(null);

function MockSheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SheetCtx.Provider value={{ open, setOpen }}>{children}</SheetCtx.Provider>
  );
}

type Clickable = { onClick?: React.MouseEventHandler<HTMLElement> };
function MockSheetTrigger({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactElement;
}) {
  const ctx = useContext(SheetCtx)!;
  if (asChild) {
    const child = children as React.ReactElement<Clickable>;
    return React.cloneElement(child, {
      onClick: (e) => {
        child.props.onClick?.(e);
        ctx.setOpen(true);
      },
    });
  }
  return <button onClick={() => ctx.setOpen(true)}>{children}</button>;
}

function MockSheetContent({
  children,
}: {
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}) {
  const ctx = useContext(SheetCtx)!;
  if (!ctx.open) return null;
  return <div data-testid="sheet-content">{children}</div>;
}

function Passthrough({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

vi.mock('@/components/ui/sheet', () => ({
  Sheet: MockSheet,
  SheetContent: MockSheetContent,
  SheetHeader: Passthrough,
  SheetTitle: ({ children }: { children: React.ReactNode }) => (
    <h3>{children}</h3>
  ),
  SheetTrigger: MockSheetTrigger,
}));

import CodePanelSheet from '@/components/CodePanelSheet';

afterEach(() => cleanup());

describe('CodePanelSheet', () => {
  it('shows code hint when no snapshot', () => {
    render(<CodePanelSheet snapshot={null} />);
    fireEvent.click(screen.getByRole('button', { name: 'restfull.codeBtn' }));
    expect(screen.getByText('restfull.generatedCode')).toBeInTheDocument();
    expect(screen.getByText('restfull.codeText')).toBeInTheDocument();
  });

  it('renders GeneratedCodePanel when snapshot present', () => {
    const snapshot: RequestSnapshot = {
      method: 'POST' as HttpMethod,
      url: 'http://x',
      params: [],
      headers: [],
      body: { mode: 'raw', rawText: 'hi' },
    };
    render(<CodePanelSheet snapshot={snapshot} />);
    fireEvent.click(screen.getByRole('button', { name: 'restfull.codeBtn' }));
    expect(screen.getByTestId('generated-code')).toHaveTextContent(
      'method:POST'
    );
  });
});
