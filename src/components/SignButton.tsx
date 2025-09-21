import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

type SignButtonProps = {
  text: string;
  className?: string;
};

export const SignButton = ({ text }: SignButtonProps) => {
  const { t } = useTranslation();
  return <Button variant="custom">{t(text)}</Button>;
};
