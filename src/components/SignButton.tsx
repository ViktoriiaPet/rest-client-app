import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

type SignButtonProps = {
  text: string;
  className?: string;
};

export const SignButton = ({ text, className }: SignButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="outline"
      className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
    >
      {t(text)}
    </Button>
  );
};
