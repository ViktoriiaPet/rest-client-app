import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import ru from '../locales/ru.json';

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: typeof window !== 'undefined' ? ['localStorage'] : [],
    },
  });
export default i18next;
