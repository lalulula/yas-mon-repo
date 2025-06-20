'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import kr from './locales/kr';

// Get the stored language from localStorage if available
const storedLanguage =
  typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null;

i18n
  .use(LanguageDetector) // automatically detect user language
  .use(initReactI18next) // initializes i19n for React
  .init({
    resources: {
      en: {
        translation: en // EN translation file - in directory lib/i18n/locales/en.ts
      },
      ko: {
        translation: kr // KR translation file - in directory lib/i18n/locales/kr.ts
      }
    },
    fallbackLng: 'en', //default lang
    lng: storedLanguage || 'en', // Use stored language if available
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
