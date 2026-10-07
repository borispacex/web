import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import automateImage from '../../assets/brand/services/service-automate-card.png';
import evolveImage from '../../assets/brand/services/service-evolve-card.png';
import newImage from '../../assets/brand/services/service-new-card.png';
import supportImage from '../../assets/brand/services/service-support-card.png';
import { Button } from '../../components/ui/Button';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

const services = [
  { image: newImage, key: 'web', number: '01' },
  { image: evolveImage, key: 'business', number: '02' },
  { image: automateImage, key: 'backend', number: '03' },
  { image: supportImage, key: 'automation', number: '04' },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="services-title" className="bg-background" id="servicios">
      <Container className="py-14 sm:py-16 lg:py-18">
        <Reveal className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10">
          <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            {t('services.eyebrow')}
          </p>
          <h2
            className="mt-3 max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-tight font-semibold tracking-[-0.04em] text-balance"
            id="services-title"
          >
            {t('services.title')}
          </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:max-w-xl">
            {t('services.description')}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ image, key, number }) => (
            <Reveal className="h-full" key={key}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-[border-color,transform] hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-primary">{t(`services.items.${key}.label`)}</span>
                  <span className="font-mono text-xs text-muted-foreground">{number}</span>
                </div>
                <div className="service-visual">
                  <img alt={t(`services.items.${key}.imageAlt`)} height="320" loading="lazy" src={image} width="480" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-5 text-muted-foreground">
                  {t(`services.items.${key}.description`)}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-xs font-semibold text-foreground">
                  <span className="mr-2 text-primary">✓</span>{t(`services.items.${key}.result`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Button className="mt-6 gap-2" href="#contacto">{t('services.cta')}<ArrowRight aria-hidden="true" className="size-4" /></Button>
      </Container>
    </section>
  );
}
