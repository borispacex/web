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
  { href: '#precios', translationKey: 'navigation.pricing' },
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

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a
          aria-label={t('app.name')}
          className="group flex shrink-0 items-center rounded-md"
          href="#inicio"
          onClick={closeMenu}
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-9 w-auto transition-opacity group-hover:opacity-80 dark:hidden"
            src={brandAssets.horizontalLight}
          />
          <img
            alt=""
            aria-hidden="true"
            className="hidden h-9 w-auto transition-opacity group-hover:opacity-80 dark:block"
            src={brandAssets.horizontalDark}
          />
        </a>

        <nav aria-label={t('navigation.primary')} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="inline-flex min-h-9 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-alt hover:text-foreground"
                  href={item.href}
                >
                  {t(item.translationKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <LanguageSelector id="desktop-language" />
          <ThemeSelector id="desktop-theme" />
          <a
            className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary-strong px-4 text-sm font-semibold text-white transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
            href="#contacto"
          >
            {t('navigation.quote')}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSelector compact id="mobile-header-language" />
          <ThemeSelector circular id="mobile-header-theme" />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t('menu.close') : t('menu.open')}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-alt"
            onClick={() => setIsMenuOpen((current) => !current)}
            ref={menuButtonRef}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] xl:hidden">
          <button
            aria-label={t('menu.close')}
            className="absolute inset-0 cursor-default bg-void/55 backdrop-blur-sm"
            onClick={closeMenu}
            type="button"
          />
          <aside
            aria-label={t('navigation.mobile')}
            className="absolute top-0 right-0 grid h-full w-[min(22rem,92vw)] content-start gap-6 overflow-y-auto border-l border-border bg-background p-5 shadow-2xl"
            id="mobile-navigation"
          >
          <nav aria-label={t('navigation.mobile')}>
            <ul className="grid gap-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-12 items-center justify-between rounded-xl px-3 font-medium text-foreground transition-colors hover:bg-surface-alt"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {t(item.translationKey)}
                    <ArrowUpRight aria-hidden="true" className="size-4 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary-strong px-5 text-sm font-semibold text-white"
            href="#contacto"
            onClick={closeMenu}
          >
            {t('navigation.quote')}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          </aside>
        </div>
      )}
    </header>
  );
}
