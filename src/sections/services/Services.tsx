import { ArrowUpRight, Building2, Code2, Database, PanelsTopLeft, ServerCog, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const services = [
  {
    icon: PanelsTopLeft,
    key: 'web',
    layout: 'lg:col-span-7 lg:min-h-80',
    theme: 'bg-primary-strong text-white',
    muted: 'text-white/75',
  },
  {
    icon: Building2,
    key: 'business',
    layout: 'lg:col-span-5 lg:min-h-80',
    theme: 'bg-void text-moon',
    muted: 'text-moon/65',
  },
  {
    icon: Code2,
    key: 'frontend',
    layout: 'lg:col-span-3',
    theme: 'bg-surface text-foreground',
    muted: 'text-muted-foreground',
  },
  {
    icon: ServerCog,
    key: 'backend',
    layout: 'lg:col-span-3',
    theme: 'bg-surface text-foreground',
    muted: 'text-muted-foreground',
  },
  {
    icon: Database,
    key: 'data',
    layout: 'lg:col-span-3',
    theme: 'bg-surface text-foreground',
    muted: 'text-muted-foreground',
  },
  {
    icon: Workflow,
    key: 'automation',
    layout: 'lg:col-span-3',
    theme: 'bg-surface text-foreground',
    muted: 'text-muted-foreground',
  },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="services-title" className="bg-surface-alt" id="servicios">
      <Container className="py-24 sm:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              description={t('services.description')}
              eyebrow={t('services.eyebrow')}
              id="services-title"
              title={t('services.title')}
            />
          </Reveal>
          <Reveal>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              href="#contacto"
            >
              {t('services.cta')}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {services.map(({ icon: Icon, key, layout, muted, theme }, index) => (
            <Reveal className={`h-full ${layout}`} key={key}>
              <article className={`group relative flex h-full min-h-64 flex-col overflow-hidden rounded-3xl border border-border/70 p-7 sm:p-8 ${theme}`}>
                <Icon
                  aria-hidden="true"
                  className="absolute -right-6 -bottom-6 size-40 opacity-[0.07] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
                  strokeWidth={1.2}
                />
                <div className="relative flex items-start justify-between gap-5">
                  <div className="grid size-12 place-items-center rounded-2xl border border-current/15 bg-white/5">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.6} />
                  </div>
                  <span className={`font-mono text-xs ${muted}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="relative mt-auto pt-14">
                  <h3 className="max-w-sm text-2xl font-semibold tracking-tight">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className={`mt-3 max-w-lg leading-7 ${muted}`}>
                    {t(`services.items.${key}.description`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
