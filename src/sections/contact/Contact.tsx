import { Radio } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

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
          <div className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
            <Radio aria-hidden="true" className="size-6" strokeWidth={1.7} />
            <p className="mt-6 font-semibold">{t('contact.pending.title')}</p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              {t('contact.pending.description')}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
