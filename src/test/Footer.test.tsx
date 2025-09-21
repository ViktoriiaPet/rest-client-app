import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
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
vi.mock('../../public/rss-logo.svg', () => ({
  default: 'rss-logo.svg',
}));


describe('Footer component', () => {
  it('renders correctly after mount', async () => {
    render(<Footer />);

    const githubLink = await screen.findByText('app.github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/ViktoriiaPet/rest-client-app'
    );

    expect(await screen.findByText('2025')).toBeInTheDocument();

    const rsImage = await screen.findByAltText('rss logo');
    expect(rsImage).toBeInTheDocument();
    expect(rsImage).toHaveAttribute(
      'src',
      expect.stringContaining('rss-logo.svg')
    );
  });
});
