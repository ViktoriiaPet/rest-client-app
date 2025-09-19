import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach, expect } from 'vitest';
import LangToggle from '@/components/LangToggle';
import { setLanguage } from '@/store/languageSlice';

const mockChangeLanguage = vi.fn();
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: mockChangeLanguage,
      getFixedT: vi.fn(() => (k: string) => k),
    },
  }),
}));

vi.mock('@/utils/getLangFromCookie', () => ({
  getLangFromCookie: vi.fn(() => 'en'),
}));

const mockDispatch = vi.fn();
vi.mock('react-redux', async () => {
  const actual =
    await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useDispatch: () => mockDispatch,
    useSelector: (fn: any) => fn({ language: { lang: 'en' } }),
  };
});

describe('LangToggle component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders language texts correctly', () => {
    render(<LangToggle />);
    expect(screen.getByText('lang.english')).toBeInTheDocument();
    expect(screen.getByText('lang.russian')).toBeInTheDocument();
  });

  it('switches language when clicked', () => {
    render(<LangToggle />);
    const switchButton = screen.getByRole('switch');

    fireEvent.click(switchButton);

    expect(mockDispatch).toHaveBeenCalledWith(setLanguage('ru'));
    expect(mockChangeLanguage).toHaveBeenCalledWith('ru');
  });

  it('does not crash if component initially unmounted', () => {
    render(<LangToggle initialLang="ru" />);
    expect(screen.getByText('lang.english')).toBeInTheDocument();
    expect(screen.getByText('lang.russian')).toBeInTheDocument();
  });
});
