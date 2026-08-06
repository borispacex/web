import { Building2, Code2, Database, PanelsTopLeft, ServerCog, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const services = [
  { icon: PanelsTopLeft, key: 'web' },
  { icon: Building2, key: 'business' },
  { icon: Code2, key: 'frontend' },
  { icon: ServerCog, key: 'backend' },
  { icon: Database, key: 'data' },
  { icon: Workflow, key: 'automation' },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="services-title" id="servicios">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            description={t('services.description')}
            eyebrow={t('services.eyebrow')}
            id="services-title"
            title={t('services.title')}
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, key }, index) => (
            <Reveal className="h-full" key={key}>
              <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <Icon aria-hidden="true" className="size-7 text-primary" strokeWidth={1.6} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-semibold">{t(`services.items.${key}.title`)}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {t(`services.items.${key}.description`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
