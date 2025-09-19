import { render, screen } from '@testing-library/react';
import { vi, it, describe, expect } from 'vitest';
import Footer from '@/components/Footer';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
  }),
}));

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);


    const githubLink = screen.getByText('app.github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/ViktoriiaPet/rest-client-app'
    );

 
    expect(screen.getByText('2025')).toBeInTheDocument();


    const rsImage = screen.getByAltText('rss logo');
    expect(rsImage).toBeInTheDocument();
    expect(rsImage).toHaveAttribute(
      'src',
      'https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg'
    );
  });
});
