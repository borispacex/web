import { ArrowUpRight, Boxes, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const previewBars = ['w-4/5', 'w-3/5', 'w-full', 'w-2/3'] as const;

export function Projects() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="projects-title"
      className="border-y border-border bg-surface-alt"
      id="proyectos"
    >
      <Container className="py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            description={t('projects.description')}
            eyebrow={t('projects.eyebrow')}
            id="projects-title"
            title={t('projects.title')}
          />
        </Reveal>

        <Reveal className="mt-16">
          <article className="grid overflow-hidden rounded-[2rem] border border-border bg-surface text-foreground shadow-2xl shadow-primary/10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {t('projects.hardwareStore.status')}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Boxes aria-hidden="true" className="size-4" />
                  {t('projects.hardwareStore.category')}
                </span>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                {t('projects.hardwareStore.title')}
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                {t('projects.hardwareStore.description')}
              </p>
              <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">
                {t('projects.hardwareStore.note')}
              </p>
              <a
                className="mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                href="#contacto"
              >
                {t('projects.hardwareStore.cta')}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="relative min-h-[26rem] overflow-hidden border-t border-border bg-[radial-gradient(circle_at_70%_25%,rgb(22_119_255_/_0.18),transparent_18rem)] p-6 sm:p-10 lg:border-t-0 lg:border-l">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(22_119_255_/_0.12)_1px,transparent_1px),linear-gradient(90deg,rgb(22_119_255_/_0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
              <div className="relative mx-auto max-w-2xl rotate-[-2deg] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="size-2 rounded-full bg-foreground/20" />
                  <span className="ml-auto font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {t('projects.hardwareStore.visualLabel')}
                  </span>
                </div>
                <div className="grid min-h-80 grid-cols-[4rem_1fr] sm:grid-cols-[8rem_1fr]">
                  <div className="border-r border-border p-3 sm:p-4">
                    <div className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Wrench aria-hidden="true" className="size-4" />
                    </div>
                    <div className="mt-8 grid gap-3">
                      {previewBars.slice(0, 3).map((width) => (
                        <span className={`h-2 rounded-full bg-foreground/10 ${width}`} key={width} />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="h-4 w-2/5 rounded-full bg-foreground/20" />
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {previewBars.slice(0, 3).map((width, index) => (
                        <div className="rounded-xl border border-border bg-surface p-3" key={`${width}-${index}`}>
                          <div className="size-7 rounded-lg bg-primary/20" />
                          <div className={`mt-8 h-2 rounded-full bg-foreground/20 ${width}`} />
                          <div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/10" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-border bg-surface p-4">
                      {previewBars.map((width) => (
                        <div className="flex items-center gap-3 border-b border-border py-2 last:border-0" key={width}>
                          <span className="size-5 rounded-md bg-accent/15" />
                          <span className={`h-2 rounded-full bg-foreground/15 ${width}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
