import { BriefcaseBusiness, GitBranch, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brandAssets } from '../../config/brand';
import { Container } from '../ui/Container';

const contactLinks = [
  {
    href: 'https://wa.me/59160514138',
    icon: MessageCircle,
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
    <footer className="border-t border-white/10 bg-void text-moon">
      <Container className="py-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(32rem,1.5fr)_auto]">
          <div>
            <a className="inline-flex items-center gap-3 font-bold tracking-[0.16em]" href="#inicio">
              <img alt="" aria-hidden="true" className="size-11" src={brandAssets.symbol} />
              {t('app.name')}
            </a>
            <p className="mt-2 text-xs text-moon/55">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>

          <address className="grid gap-3 not-italic sm:grid-cols-2">
            {contactLinks.map(({ external, href, icon: Icon, labelKey, value }) => (
              <a
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 transition-colors hover:border-accent/45 hover:bg-white/[0.06]"
                href={href}
                key={href}
                rel={external ? 'noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-accent">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] text-moon/50">{t(labelKey)}</span>
                  <span className="block truncate text-sm font-semibold text-moon/85">{value}</span>
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
                className="grid size-11 place-items-center rounded-full border border-white/15 text-moon/65 transition-colors hover:border-accent hover:text-accent"
                href={href}
                key={href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
