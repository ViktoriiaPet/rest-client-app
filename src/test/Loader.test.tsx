import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loader } from '@/components/Loader';

describe('Loader', () => {
  it('renders loader with correct classes', () => {
    const { container } = render(<Loader />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass(
      'flex',
      'items-center',
      'justify-center',
      'w-full',
      'h-full',
      'py-6'
    );

    const innerDiv = mainDiv.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass('relative', 'w-12', 'h-12');

    expect(innerDiv.children).toHaveLength(2);
  });

  it('has spinning animation', () => {
    const { container } = render(<Loader />);
    const innerDiv = container.firstChild?.firstChild as HTMLElement;

    expect(innerDiv.children[0]).toHaveClass('animate-spin');
  });

  it('has pulsing animation', () => {
    const { container } = render(<Loader />);
    const innerDiv = container.firstChild?.firstChild as HTMLElement;

    expect(innerDiv.children[1]).toHaveClass('animate-pulse');
  });
});
