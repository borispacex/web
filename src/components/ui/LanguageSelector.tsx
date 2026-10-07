import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { languages, type Language } from '../../features/i18n/i18n';

type LanguageSelectorProps = {
  compact?: boolean;
  id: string;
};

export function LanguageSelector({ compact = false, id }: LanguageSelectorProps) {
  const { i18n, t } = useTranslation();
  const currentLanguage: Language = i18n.resolvedLanguage === 'en' ? 'en' : 'es';

  const handleChange = (value: string): void => {
    const language = languages.find((item) => item === value);

    if (language) {
      void i18n.changeLanguage(language);
    }
  };

  if (compact) {
    const nextLanguage: Language = currentLanguage === 'es' ? 'en' : 'es';

    return (
      <button
        aria-label={t(`language.switchTo.${nextLanguage}`)}
        className="inline-flex size-10 items-center justify-center gap-1 rounded-full border border-border bg-surface text-[0.65rem] font-bold text-foreground transition-colors hover:bg-surface-alt"
        id={id}
        onClick={() => handleChange(nextLanguage)}
        title={t(`language.switchTo.${nextLanguage}`)}
        type="button"
      >
        <Languages aria-hidden="true" className="size-3.5" />
        {t(`language.${currentLanguage}`)}
      </button>
    );
  }

  return (
    <div
      aria-label={t('language.label')}
      className="flex min-h-10 items-center rounded-lg border border-border bg-surface p-1"
      id={id}
      role="group"
    >
      {languages.map((language) => {
        const isActive = currentLanguage === language;

        return (
          <button
            aria-pressed={isActive}
            className={`min-h-8 min-w-9 rounded-md px-2 text-xs font-semibold transition-colors ${
              isActive
                ? 'bg-surface-alt text-foreground'
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
