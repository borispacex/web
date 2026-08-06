import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export const languages = ['es', 'en'] as const;

export type Language = (typeof languages)[number];

const storageKey = 'borispacex-language';

const isLanguage = (value: string | null): value is Language =>
  languages.some((language) => language === value);

const storedLanguage = localStorage.getItem(storageKey);
const initialLanguage = isLanguage(storedLanguage) ? storedLanguage : 'es';

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'es',
  supportedLngs: languages,
  interpolation: {
    escapeValue: false,
  },
});

const syncDocumentLanguage = (language: string): void => {
  const normalizedLanguage: Language = language.startsWith('en') ? 'en' : 'es';

  document.documentElement.lang = normalizedLanguage;
  document.title = i18n.t('app.title', { lng: normalizedLanguage });
  localStorage.setItem(storageKey, normalizedLanguage);
};

syncDocumentLanguage(initialLanguage);
i18n.on('languageChanged', syncDocumentLanguage);

export { i18n };
