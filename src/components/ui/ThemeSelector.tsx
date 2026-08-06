import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  getStoredTheme,
  setTheme,
  themes,
  type Theme,
} from '../../features/theme/theme';

type ThemeSelectorProps = {
  id: string;
};

export function ThemeSelector({ id }: ThemeSelectorProps) {
  const { t } = useTranslation();
  const [theme, updateTheme] = useState<Theme>(getStoredTheme);

  const handleChange = (value: string): void => {
    const selectedTheme = themes.find((item) => item === value);

    if (selectedTheme) {
      updateTheme(selectedTheme);
      setTheme(selectedTheme);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-muted-foreground" htmlFor={id}>
        {t('theme.label')}
      </label>
      <select
        className="min-h-11 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-foreground"
        id={id}
        onChange={(event) => handleChange(event.target.value)}
        value={theme}
      >
        <option value="system">{t('theme.system')}</option>
        <option value="light">{t('theme.light')}</option>
        <option value="dark">{t('theme.dark')}</option>
      </select>
    </div>
  );
}
