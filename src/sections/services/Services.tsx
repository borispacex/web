import { Building2, PanelsTopLeft, ServerCog, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/ui/Button';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

const services = [
  { icon: PanelsTopLeft, key: 'web' },
  { icon: Building2, key: 'business' },
  { icon: ServerCog, key: 'backend' },
  { icon: Workflow, key: 'automation' },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="services-title" className="bg-background" id="servicios">
      <Container className="grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            {t('services.eyebrow')}
          </p>
          <h2
            className="mt-5 max-w-xl text-[clamp(2.75rem,4.5vw,4.25rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-balance"
            id="services-title"
          >
            {t('services.title')}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground lg:max-w-xl">
            {t('services.description')}
          </p>
          <Button
            className="mt-8 bg-foreground px-6 text-background hover:opacity-85 hover:brightness-100"
            href="#contacto"
          >
            {t('services.cta')}
          </Button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, key }) => (
            <Reveal className="h-full" key={key}>
              <article className="group flex h-full min-h-40 flex-col items-center justify-center rounded-[1.5rem] border border-border bg-surface px-5 py-7 text-center transition-[border-color,transform,background-color] hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-alt lg:aspect-[1.2/1] lg:min-h-0">
                <span className="grid size-12 place-items-center text-foreground transition-colors group-hover:text-primary">
                  <Icon aria-hidden="true" className="size-8" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 max-w-40 text-sm font-semibold leading-5">
                  {t(`services.items.${key}.title`)}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
