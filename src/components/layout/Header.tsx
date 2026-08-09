import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brandAssets } from '../../config/brand';
import { Container } from '../ui/Container';
import { LanguageSelector } from '../ui/LanguageSelector';
import { ThemeSelector } from '../ui/ThemeSelector';

const navigationItems = [
  { href: '#inicio', translationKey: 'navigation.home' },
  { href: '#servicios', translationKey: 'navigation.services' },
  { href: '#proyectos', translationKey: 'navigation.projects' },
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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-2xl">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-4">
        <a
          aria-label={t('app.name')}
          className="group flex items-center rounded-sm"
          href="#inicio"
          onClick={closeMenu}
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-13 w-auto transition-transform group-hover:scale-[1.02] dark:hidden"
            src={brandAssets.horizontalLight}
          />
          <img
            alt=""
            aria-hidden="true"
            className="hidden h-13 w-auto transition-transform group-hover:scale-[1.02] dark:block"
            src={brandAssets.horizontalDark}
          />
        </a>

        <nav aria-label={t('navigation.primary')} className="hidden lg:block">
          <ul className="flex items-center gap-7 rounded-full border border-border bg-surface/70 px-6 py-3">
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

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSelector id="desktop-language" />
          <ThemeSelector id="desktop-theme" />
          <a
            className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            href="#contacto"
          >
            {t('navigation.contact')}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t('menu.close') : t('menu.open')}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-foreground lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          ref={menuButtonRef}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <div
        className={`${isMenuOpen ? 'grid' : 'hidden'} border-t border-border bg-background/95 backdrop-blur-2xl lg:hidden`}
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
          <div className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
            <div className="flex items-center justify-between gap-4 sm:justify-start">
              <span className="text-sm text-muted-foreground">{t('language.label')}</span>
              <LanguageSelector id="mobile-language" />
            </div>
            <div className="flex items-center justify-between gap-4 sm:justify-start">
              <span className="text-sm text-muted-foreground">{t('theme.label')}</span>
              <ThemeSelector id="mobile-theme" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
