import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../en.json';
import translationES from '../es.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
