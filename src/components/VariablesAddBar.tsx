import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

type AddVariableType = {
  onAdd: (name: string, value: string) => void;
};

const VariablesAddBar = ({ onAdd }: AddVariableType) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !value.trim()) return;
    onAdd(name, value);
    setName('');
    setValue('');
  };

  return (
    <>
      <input
        name="variableName"
        type="text"
        placeholder={t('variables.variableName')}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="flex bg-transparent py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-9 w-full rounded-md border px-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 disabled:cursor-not-allowed disabled:opacity-50 border-pink-300"
      />
      <input
        name="variableValue"
        type="text"
        placeholder={t('variables.variableValue')}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="flex bg-transparent py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-9 w-full rounded-md border px-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 disabled:cursor-not-allowed disabled:opacity-50 border-pink-300"
      />
      <div className=" flex justify-center items-center">
        <Button variant="custom" type="submit" onClick={handleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus mr-2 h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {t('variables.addButton')}
        </Button>
      </div>
    </>
  );
};
export default VariablesAddBar;
