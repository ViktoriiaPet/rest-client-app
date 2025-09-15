import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

type TableRowType = {
  name: string;
  value: string;
  onClick: () => void;
};

export const TableRow = ({ name, value, onClick }: TableRowType) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-4 items-center w-full">
      <div className="text-center">{name}</div>
      <div className="text-center">{value}</div>
      <div className=" flex justify-center items-center">
        <Button variant="custom" type="submit" onClick={onClick}>
          {t('variables.delete')}
        </Button>
      </div>
    </div>
  );
};
