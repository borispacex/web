import { BriefcaseBusiness, GitBranch } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brandAssets } from '../../config/brand';
import { Container } from '../ui/Container';

const footerNavigation = [
  { href: '#inicio', translationKey: 'navigation.home' },
  { href: '#servicios', translationKey: 'navigation.services' },
  { href: '#proyectos', translationKey: 'navigation.projects' },
  { href: '#contacto', translationKey: 'navigation.contact' },
] as const;

const socialLinks = [
  {
    href: 'https://github.com/borispacex',
    icon: GitBranch,
    labelKey: 'contact.channels.github',
  },
  {
    href: 'https://www.linkedin.com/in/boris-vargas-paucara-b5485a145/',
    icon: BriefcaseBusiness,
    labelKey: 'contact.channels.linkedin',
  },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void text-moon">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <div>
            <a className="inline-flex items-center gap-3 font-bold tracking-[0.18em]" href="#inicio">
              <img alt="" aria-hidden="true" className="size-10" src={brandAssets.symbol} />
              {t('app.name')}
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-moon/65">
              {t('footer.description')}
            </p>
            <p className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-moon/60 uppercase">
              {t('hero.manifesto')}
            </p>
          </div>

          <nav aria-label={t('footer.navigation')}>
            <p className="text-xs font-semibold tracking-[0.16em] text-moon/60 uppercase">
              {t('footer.navigation')}
            </p>
            <ul className="mt-5 grid gap-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a className="text-sm text-moon/70 transition-colors hover:text-moon" href={item.href}>
                    {t(item.translationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-moon/60 uppercase">
              {t('footer.social')}
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ href, icon: Icon, labelKey }) => (
                <a
                  aria-label={t(labelKey)}
                  className="grid size-11 place-items-center rounded-full border border-white/20 text-moon/70 transition-colors hover:border-accent hover:text-accent"
                  href={href}
                  key={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  <span className="sr-only">{t('accessibility.opensNewTab')}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-moon/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright', { year: currentYear })}</p>
          <p>{t('footer.location')}</p>
        </div>
      </Container>
    </footer>
  );
}
