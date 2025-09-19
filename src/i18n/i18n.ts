import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import ru from '../locales/ru.json';

function getLangFromCookies(): string {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : 'en';
}

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: getLangFromCookies(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
