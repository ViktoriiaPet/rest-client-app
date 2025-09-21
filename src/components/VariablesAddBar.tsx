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
        className="pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
      />
      <input
        name="variableValue"
        type="text"
        placeholder={t('variables.variableValue')}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
      />
      <div className=" flex justify-center items-center">
        <Button variant="custom" type="submit" onClick={handleAdd}>
          {t('variables.addButton')}
        </Button>
      </div>
    </>
  );
};
export default VariablesAddBar;
