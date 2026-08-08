import { useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
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

const themeIcons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const;

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
    <div
      aria-label={t('theme.label')}
      className="flex min-h-10 items-center rounded-full border border-border bg-surface-alt p-1"
      id={id}
      role="group"
    >
      {themes.map((item) => {
        const Icon = themeIcons[item];
        const isActive = theme === item;

        return (
          <button
            aria-label={t(`theme.${item}`)}
            aria-pressed={isActive}
            className={`grid size-8 place-items-center rounded-full transition-colors ${
              isActive
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            key={item}
            onClick={() => handleChange(item)}
            title={t(`theme.${item}`)}
            type="button"
          >
            <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
          </button>
        );
      })}
    </div>
  );
}
