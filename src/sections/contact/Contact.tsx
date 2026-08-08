import { BriefcaseBusiness, GitBranch, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

const contactChannels = [
  {
    href: 'mailto:borispacex@gmail.com',
    icon: Mail,
    key: 'email',
    value: 'borispacex@gmail.com',
  },
  {
    href: 'https://github.com/borispacex',
    icon: GitBranch,
    key: 'github',
    value: '@borispacex',
  },
  {
    href: 'https://www.linkedin.com/in/boris-vargas-paucara-b5485a145/',
    icon: BriefcaseBusiness,
    key: 'linkedin',
    value: 'Boris Vargas Paucara',
  },
  {
    href: 'https://wa.me/59160514138',
    icon: MessageCircle,
    key: 'whatsapp',
    value: '+591 60514138',
  },
] as const;

export function Contact() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="contact-title" className="bg-primary-strong text-white" id="contacto">
      <Container className="py-20 sm:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-white/75 uppercase">
              {t('contact.eyebrow')}
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl" id="contact-title">
              {t('contact.title')}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {t('contact.description')}
            </p>
          </div>
          <address className="grid gap-2 not-italic">
            {contactChannels.map(({ href, icon: Icon, key, value }) => {
              const isExternal = href.startsWith('https://');

              return (
                <a
                  className="group flex min-h-16 items-center gap-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 transition-colors hover:bg-white/15"
                  href={href}
                  key={key}
                  rel={isExternal ? 'noreferrer' : undefined}
                  target={isExternal ? '_blank' : undefined}
                >
                  <Icon aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.7} />
                  <span className="min-w-0">
                    <span className="block text-xs text-white/70">{t(`contact.channels.${key}`)}</span>
                    <span className="block truncate font-medium">{value}</span>
                    {isExternal && (
                      <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
                    )}
                  </span>
                </a>
              );
            })}
          </address>
        </Reveal>
      </Container>
    </section>
  );
}
