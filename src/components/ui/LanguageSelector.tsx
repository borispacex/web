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
    <div className="flex items-center gap-2">
      <label className="text-sm text-muted-foreground" htmlFor={id}>
        {t('language.label')}
      </label>
      <select
        className="min-h-11 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-foreground"
        id={id}
        onChange={(event) => handleChange(event.target.value)}
        value={currentLanguage}
      >
        <option value="es">{t('language.es')}</option>
        <option value="en">{t('language.en')}</option>
      </select>
    </div>
  );
}
