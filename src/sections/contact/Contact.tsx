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
      className="border-t border-primary/10 bg-[var(--section-tint)] text-foreground"
      id="contacto"
    >
      <Container className="py-24 sm:py-28 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t('contact.eyebrow')}
          </p>
          <h2
            className="mt-4 text-[clamp(2.75rem,5.5vw,4.75rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-balance"
            id="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t('contact.description')}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {contactMethods.map(({ external, href, icon: Icon, key }) => (
            <Reveal className="h-full" key={key}>
              <a
                className="group flex h-full min-h-56 flex-col items-center justify-center rounded-3xl border border-border bg-surface p-7 text-center transition-[border-color,transform,background-color,box-shadow] hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-alt hover:shadow-xl hover:shadow-primary/10"
                href={href}
                rel={external ? 'noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">
                  {t(`contact.methods.${key}.title`)}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                  {t(`contact.methods.${key}.description`)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
