import { useTranslation } from 'react-i18next';

export default function LangToggle() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={() => changeLanguage('en')}
      >
        En
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={() => changeLanguage('es')}
      >
        Ru
      </button>
    </div>
  );
}
