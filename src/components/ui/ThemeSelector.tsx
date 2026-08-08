import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  getStoredTheme,
  getResolvedTheme,
  setTheme,
  type Theme,
} from '../../features/theme/theme';

type ThemeSelectorProps = {
  id: string;
};

export function ThemeSelector({ id }: ThemeSelectorProps) {
  const { t } = useTranslation();
  const [theme, updateTheme] = useState<Theme>(() => getResolvedTheme());

  useEffect(() => {
    if (getStoredTheme() !== 'system') return undefined;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (): void => {
      updateTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const handleToggle = (): void => {
    const selectedTheme: Theme = theme === 'light' ? 'dark' : 'light';
    updateTheme(selectedTheme);
    setTheme(selectedTheme);
  };

  const isLight = theme === 'light';
  const label = t(isLight ? 'theme.activateDark' : 'theme.activateLight');
  const Icon = isLight ? Moon : Sun;

  return (
    <button
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-border bg-surface-alt text-foreground transition-colors hover:bg-surface"
      id={id}
      onClick={handleToggle}
      title={label}
      type="button"
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
    </button>
  );
}
