import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail, MessageCircle } from 'lucide-react';
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
    href: 'https://wa.me/59160514138',
    icon: MessageCircle,
    key: 'whatsapp',
    value: '+591 60514138',
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
] as const;

export function Contact() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="contact-title" className="relative overflow-hidden bg-primary-strong text-white" id="contacto">
      <div
        aria-hidden="true"
        className="absolute -top-48 -right-48 size-[36rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-[24rem] rounded-full border border-white/10"
      />
      <Container className="relative py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-white/70 uppercase">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_1rem_var(--accent)]" />
            {t('contact.eyebrow')}
          </div>
          <h2
            className="mt-7 max-w-5xl text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-semibold tracking-[-0.07em] text-balance"
            id="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            {t('contact.description')}
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <address className="grid overflow-hidden rounded-3xl border border-white/20 bg-white/10 not-italic backdrop-blur-sm sm:grid-cols-2">
            {contactChannels.map(({ href, icon: Icon, key, value }) => {
              const isExternal = href.startsWith('https://');

              return (
                <a
                  className="group flex min-h-36 items-end justify-between gap-5 border-b border-white/20 p-6 transition-colors hover:bg-white/10 sm:p-8 sm:[&:nth-child(odd)]:border-r"
                  href={href}
                  key={key}
                  rel={isExternal ? 'noreferrer' : undefined}
                  target={isExternal ? '_blank' : undefined}
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-3 text-sm text-white/65">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                      {t(`contact.channels.${key}`)}
                    </span>
                    <span className="mt-4 block break-words text-lg font-semibold sm:text-xl">
                      {value}
                    </span>
                    {isExternal && (
                      <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
                    )}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
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
