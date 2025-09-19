import { render, screen} from '@testing-library/react';
import { vi, it, describe, expect } from 'vitest';
import { SignButton } from '@/components/SignButton';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
  }),
}));

describe('SignButton', () => {
 it('renders name, value and delete button', () => {
   render(
     <SignButton text="Test Name"  />
   );
   expect(screen.getByText('Test Name')).toBeInTheDocument();
 });
});