export const themes = ['light', 'dark', 'system'] as const;

export type Theme = (typeof themes)[number];

const storageKey = 'borispacex-theme';
const darkModeQuery = '(prefers-color-scheme: dark)';

const isTheme = (value: string | null): value is Theme =>
  themes.some((theme) => theme === value);

export const getStoredTheme = (): Theme => {
  try {
    const storedTheme = localStorage.getItem(storageKey);
    return isTheme(storedTheme) ? storedTheme : 'system';
  } catch {
    return 'system';
  }
};

const applyTheme = (theme: Theme): void => {
  const prefersDark = window.matchMedia(darkModeQuery).matches;
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.dataset.theme = theme;
  themeColor?.setAttribute('content', isDark ? '#05070D' : '#F5F7FA');
};

export const setTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    // The selected theme still applies for the current session.
  }

  applyTheme(theme);
};

export const initializeTheme = (): (() => void) => {
  const mediaQuery = window.matchMedia(darkModeQuery);
  const handleSystemThemeChange = (): void => {
    const theme = getStoredTheme();

    if (theme === 'system') {
      applyTheme(theme);
    }
  };

  applyTheme(getStoredTheme());
  mediaQuery.addEventListener('change', handleSystemThemeChange);

  return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
};
