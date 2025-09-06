import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

type SignButtonProps = {
  text: string;
  className?: string;
};

export const SignButton = ({ text, className }: SignButtonProps) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <Button
        variant="outline"
        className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
      >
        {t(text)}
      </Button>
    </div>
  );
};
