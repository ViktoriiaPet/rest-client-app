import '@testing-library/jest-dom/vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorModal from '@/components/modal';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));

vi.mock('@/components/ui/button', () => ({
  Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} />
  ),
}));

vi.mock('@/components/ui/dialog', () => {
  type DialogProps = {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    children: React.ReactNode;
  };
  const Dialog = ({ open, onOpenChange, children }: DialogProps) => (
    <div>
      {open ? (
        <>
          <div data-testid="overlay" onClick={() => onOpenChange(false)} />
          {children}
        </>
      ) : null}
    </div>
  );
  const DialogContent = (p: React.HTMLAttributes<HTMLDivElement>) => (
    <div role="dialog" aria-modal="true" {...p} />
  );
  const DialogTitle = (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...p} />
  );
  const DialogDescription = (p: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...p} />
  );
  return { Dialog, DialogContent, DialogTitle, DialogDescription };
});

describe('ErrorModal', () => {
  it('does not render when closed', () => {
    render(<ErrorModal isOpen={false} onClose={() => {}} message="X" />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders title, message and close button when open', () => {
    render(
      <ErrorModal
        isOpen={true}
        onClose={() => {}}
        message="Something went wrong"
      />
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('buttons.error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('buttons.close')).toBeInTheDocument();
  });

  it('calls onClose when clicking close button', () => {
    const onClose = vi.fn();
    render(<ErrorModal isOpen={true} onClose={onClose} message="Err" />);
    fireEvent.click(screen.getByText('buttons.close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when dialog requests close (overlay click)', () => {
    const onClose = vi.fn();
    render(<ErrorModal isOpen={true} onClose={onClose} message="Err" />);
    fireEvent.click(screen.getByTestId('overlay'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
