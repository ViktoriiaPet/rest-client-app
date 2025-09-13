import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

type VariableType = {
  name: string;
  value: string;
};

export const TableRow = ({ name, value }: VariableType) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-center">{name}</div>
      <div className="text-center">{value}</div>
      <div className=" flex justify-center items-center">
        <Button variant="custom" type="submit">
          {t('variables.delete')}
        </Button>
      </div>
    </>
  );
};
