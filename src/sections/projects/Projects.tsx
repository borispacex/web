import { Boxes, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="projects-title" className="border-y border-border bg-surface" id="proyectos">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            description={t('projects.description')}
            eyebrow={t('projects.eyebrow')}
            id="projects-title"
            title={t('projects.title')}
          />
        </Reveal>
        <Reveal className="mt-14">
          <article className="grid overflow-hidden rounded-3xl border border-border bg-background lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative grid min-h-72 place-items-center overflow-hidden bg-surface-alt p-8">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:2.5rem_2.5rem]" />
              <div className="relative grid size-32 place-items-center rounded-full border border-border bg-background shadow-xl shadow-primary/10">
                <Wrench aria-hidden="true" className="size-12 text-primary" strokeWidth={1.4} />
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {t('projects.hardwareStore.status')}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Boxes aria-hidden="true" className="size-4" />
                  {t('projects.hardwareStore.category')}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">
                {t('projects.hardwareStore.title')}
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                {t('projects.hardwareStore.description')}
              </p>
              <p className="mt-7 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">
                {t('projects.hardwareStore.note')}
              </p>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
