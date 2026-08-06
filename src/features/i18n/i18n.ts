import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export const languages = ['es', 'en'] as const;

export type Language = (typeof languages)[number];

const storageKey = 'borispacex-language';

const isLanguage = (value: string | null): value is Language =>
  languages.some((language) => language === value);

const getStoredLanguage = (): string | null => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};

const storedLanguage = getStoredLanguage();
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
  const title = i18n.t('app.title', { lng: normalizedLanguage });
  const description = i18n.t('app.description', { lng: normalizedLanguage });
  const locale = normalizedLanguage === 'en' ? 'en_US' : 'es_BO';
  const metadata = [
    ['meta[name="description"]', description],
    ['meta[property="og:title"]', title],
    ['meta[property="og:description"]', description],
    ['meta[property="og:locale"]', locale],
    ['meta[name="twitter:title"]', title],
    ['meta[name="twitter:description"]', description],
  ] as const;

  document.documentElement.lang = normalizedLanguage;
  document.title = title;
  metadata.forEach(([selector, content]) => {
    document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
  });
  try {
    localStorage.setItem(storageKey, normalizedLanguage);
  } catch {
    // The selected language still applies for the current session.
  }
};

syncDocumentLanguage(initialLanguage);
i18n.on('languageChanged', syncDocumentLanguage);

export { i18n };
