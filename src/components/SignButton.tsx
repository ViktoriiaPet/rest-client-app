import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

interface SignButtonProps {
  text: string;
}


export const SignButton = ({text}: SignButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="outline"
      className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
    >
      {t(text)}
    </Button>
  );
};
