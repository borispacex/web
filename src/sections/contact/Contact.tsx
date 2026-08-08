import { ArrowUpRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { WhatsAppIcon } from '../../components/icons/BrandIcons';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

const contactMethods = [
  {
    href: 'https://wa.me/59160514138',
    icon: WhatsAppIcon,
    key: 'whatsapp',
    external: true,
  },
  {
    href: 'mailto:borispacex@gmail.com',
    icon: Mail,
    key: 'email',
    external: false,
  },
] as const;

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="contact-title"
      className="border-t border-white/10 bg-void text-moon"
      id="contacto"
    >
      <Container className="py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            {t('contact.eyebrow')}
          </p>
          <h2
            className="mt-5 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-balance"
            id="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moon/60">
            {t('contact.description')}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          {contactMethods.map(({ external, href, icon: Icon, key }) => (
            <Reveal className="h-full" key={key}>
              <a
                className="group flex h-full min-h-64 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center transition-[border-color,transform,background-color,box-shadow] hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-primary/10"
                href={href}
                rel={external ? 'noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="grid size-16 place-items-center rounded-2xl bg-primary/15 text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-7 text-2xl font-semibold">
                  {t(`contact.methods.${key}.title`)}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-moon/55">
                  {t(`contact.methods.${key}.description`)}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {t(`contact.methods.${key}.action`)}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
                {external && (
                  <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
