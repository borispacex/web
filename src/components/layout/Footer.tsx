import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brandAssets } from '../../config/brand';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '../icons/BrandIcons';
import { Container } from '../ui/Container';

const contactLinks = [
  {
    href: 'https://wa.me/59160514138',
    icon: WhatsAppIcon,
    labelKey: 'contact.channels.whatsapp',
    value: '+591 60514138',
    external: true,
  },
  {
    href: 'mailto:borispacex@gmail.com',
    icon: Mail,
    labelKey: 'contact.channels.email',
    value: 'borispacex@gmail.com',
    external: false,
  },
] as const;

const socialLinks = [
  {
    href: 'https://github.com/borispacex',
    icon: GitHubIcon,
    labelKey: 'contact.channels.github',
  },
  {
    href: 'https://www.linkedin.com/in/boris-vargas-paucara-b5485a145/',
    icon: LinkedInIcon,
    labelKey: 'contact.channels.linkedin',
  },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-alt text-foreground">
      <Container className="py-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(32rem,1.5fr)_auto]">
          <div>
            <a className="inline-flex items-center gap-3 font-bold tracking-[0.16em]" href="#inicio">
              <img alt="" aria-hidden="true" className="size-11" src={brandAssets.symbol} />
              {t('app.name')}
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>

          <address className="grid gap-3 not-italic sm:grid-cols-2">
            {contactLinks.map(({ external, href, icon: Icon, labelKey, value }) => (
              <a
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-border bg-surface px-4 transition-colors hover:border-primary/45 hover:bg-background"
                href={href}
                key={href}
                rel={external ? 'noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] text-muted-foreground">{t(labelKey)}</span>
                  <span className="block truncate text-sm font-semibold text-foreground">{value}</span>
                  {external && (
                    <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
                  )}
                </span>
              </a>
            ))}
          </address>

          <div className="flex items-center gap-3 lg:justify-end">
            {socialLinks.map(({ href, icon: Icon, labelKey }) => (
              <a
                aria-label={t(labelKey)}
                className="grid size-11 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                href={href}
                key={href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
