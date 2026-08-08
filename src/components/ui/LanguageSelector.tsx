import { useTranslation } from 'react-i18next';
import { languages, type Language } from '../../features/i18n/i18n';

type LanguageSelectorProps = {
  id: string;
};

export function LanguageSelector({ id }: LanguageSelectorProps) {
  const { i18n, t } = useTranslation();
  const currentLanguage: Language = i18n.resolvedLanguage === 'en' ? 'en' : 'es';

  const handleChange = (value: string): void => {
    const language = languages.find((item) => item === value);

    if (language) {
      void i18n.changeLanguage(language);
    }
  };

  return (
    <div
      aria-label={t('language.label')}
      className="flex min-h-10 items-center rounded-full border border-border bg-surface-alt p-1"
      id={id}
      role="group"
    >
      {languages.map((language) => {
        const isActive = currentLanguage === language;

        return (
          <button
            aria-pressed={isActive}
            className={`min-h-8 min-w-10 rounded-full px-2 text-xs font-semibold transition-colors ${
              isActive
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            key={language}
            onClick={() => handleChange(language)}
            type="button"
          >
            {t(`language.${language}`)}
          </button>
        );
      })}
    </div>
  );
}
