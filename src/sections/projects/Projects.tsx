import { ArrowUpRight, Boxes, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const previewBars = ['w-4/5', 'w-3/5', 'w-full', 'w-2/3'] as const;

export function Projects() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="projects-title" className="bg-background" id="proyectos">
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
          <article className="grid overflow-hidden rounded-[2rem] bg-void text-moon shadow-2xl shadow-primary/10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {t('projects.hardwareStore.status')}
                </span>
                <span className="flex items-center gap-2 text-sm text-moon/55">
                  <Boxes aria-hidden="true" className="size-4" />
                  {t('projects.hardwareStore.category')}
                </span>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                {t('projects.hardwareStore.title')}
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-moon/60">
                {t('projects.hardwareStore.description')}
              </p>
              <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-6 text-moon/50">
                {t('projects.hardwareStore.note')}
              </p>
              <a
                className="mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold text-moon"
                href="#contacto"
              >
                {t('projects.hardwareStore.cta')}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="relative min-h-[26rem] overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_70%_25%,rgb(22_119_255_/_0.3),transparent_18rem)] p-6 sm:p-10 lg:border-t-0 lg:border-l">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(53_185_255_/_0.18)_1px,transparent_1px),linear-gradient(90deg,rgb(53_185_255_/_0.18)_1px,transparent_1px)] [background-size:3rem_3rem]" />
              <div className="relative mx-auto max-w-2xl rotate-[-2deg] overflow-hidden rounded-2xl border border-white/15 bg-deep/95 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="size-2 rounded-full bg-white/20" />
                  <span className="ml-auto font-mono text-[0.6rem] tracking-[0.14em] text-moon/35 uppercase">
                    {t('projects.hardwareStore.visualLabel')}
                  </span>
                </div>
                <div className="grid min-h-80 grid-cols-[4rem_1fr] sm:grid-cols-[8rem_1fr]">
                  <div className="border-r border-white/10 p-3 sm:p-4">
                    <div className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Wrench aria-hidden="true" className="size-4" />
                    </div>
                    <div className="mt-8 grid gap-3">
                      {previewBars.slice(0, 3).map((width) => (
                        <span className={`h-2 rounded-full bg-white/10 ${width}`} key={width} />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="h-4 w-2/5 rounded-full bg-white/20" />
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {previewBars.slice(0, 3).map((width, index) => (
                        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3" key={`${width}-${index}`}>
                          <div className="size-7 rounded-lg bg-primary/20" />
                          <div className={`mt-8 h-2 rounded-full bg-white/20 ${width}`} />
                          <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-white/10 p-4">
                      {previewBars.map((width) => (
                        <div className="flex items-center gap-3 border-b border-white/5 py-2 last:border-0" key={width}>
                          <span className="size-5 rounded-md bg-accent/15" />
                          <span className={`h-2 rounded-full bg-white/15 ${width}`} />
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
