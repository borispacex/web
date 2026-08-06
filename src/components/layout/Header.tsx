import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { LanguageSelector } from '../ui/LanguageSelector';
import { ThemeSelector } from '../ui/ThemeSelector';

const navigationItems = [
  { href: '#inicio', translationKey: 'navigation.home' },
  { href: '#contacto', translationKey: 'navigation.contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a
          className="rounded-sm text-sm font-bold tracking-[0.16em] text-foreground"
          href="#inicio"
          onClick={closeMenu}
        >
          {t('app.name')}
        </a>

        <nav aria-label={t('navigation.primary')} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  href={item.href}
                >
                  {t(item.translationKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSelector id="desktop-language" />
          <ThemeSelector id="desktop-theme" />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t('menu.close') : t('menu.open')}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          ref={menuButtonRef}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <div
        className={`${isMenuOpen ? 'grid' : 'hidden'} border-t border-border bg-background lg:hidden`}
        id="mobile-navigation"
      >
        <Container className="grid gap-6 py-6">
          <nav aria-label={t('navigation.mobile')}>
            <ul className="grid gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-11 items-center rounded-lg px-3 font-medium text-foreground hover:bg-surface-alt"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {t(item.translationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
            <LanguageSelector id="mobile-language" />
            <ThemeSelector id="mobile-theme" />
          </div>
        </Container>
      </div>
    </header>
  );
}
