import { useTranslation } from 'react-i18next';

const TableHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center">
        {t('variables.variableName')}
      </div>
      <div className="text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center">
        {t('variables.variableValue')}
      </div>
      <div className="text-[20px]  text-purple-600 pb-[2vw] flex justify-center items-center ">
        {t('variables.delete')}
      </div>
    </>
  );
};
export default TableHeader;