import { ArrowUpRight, BriefcaseBusiness, HeartPulse, Store, UtensilsCrossed } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const projectAsset = (path: string): string => `${import.meta.env.BASE_URL}projects/${path}`;

type Project = {
  icon: LucideIcon;
  image?: string;
  key: 'cv' | 'restaurant' | 'hardwareStore' | 'physiotherapy';
  url?: string;
};

const projects: readonly Project[] = [
  {
    icon: BriefcaseBusiness,
    image: projectAsset('cv.png'),
    key: 'cv',
    url: 'https://borispacex.github.io/cv/',
  },
  {
    icon: UtensilsCrossed,
    image: projectAsset('pollos-mision.png'),
    key: 'restaurant',
    url: 'https://pollosmision.github.io/lp/',
  },
  { icon: Store, key: 'hardwareStore' },
  { icon: HeartPulse, key: 'physiotherapy' },
] as const;

export function Projects() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="projects-title"
      className="brand-projects-background border-y border-border"
      id="proyectos"
    >
      <Container className="py-24 sm:py-28 lg:py-20">
        <Reveal>
          <SectionHeading
            description={t('projects.description')}
            eyebrow={t('projects.eyebrow')}
            id="projects-title"
            title={t('projects.title')}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, image, key, url }) => {
            const isPublished = Boolean(url);

            return (
              <Reveal className="h-full" key={key}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-sm transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
                    {image ? (
                      <img
                        alt={t(`projects.items.${key}.imageAlt`)}
                        className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        height="800"
                        loading="lazy"
                        src={image}
                        width="1280"
                      />
                    ) : (
                      <div className="relative grid size-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_center,rgb(22_119_255_/_0.18),transparent_55%)]">
                        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(22_119_255_/_0.12)_1px,transparent_1px),linear-gradient(90deg,rgb(22_119_255_/_0.12)_1px,transparent_1px)] [background-size:2.5rem_2.5rem]" />
                        <span className="relative grid size-20 place-items-center rounded-3xl border border-primary/20 bg-surface text-primary shadow-xl shadow-primary/10">
                          <Icon aria-hidden="true" className="size-9" strokeWidth={1.5} />
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {t(`projects.status.${isPublished ? 'published' : 'inDevelopment'}`)}
                      </span>
                      <span className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                        {t(`projects.items.${key}.category`)}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {t(`projects.items.${key}.title`)}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {t(`projects.items.${key}.description`)}
                    </p>

                    {url ? (
                      <a
                        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {t('projects.viewProject')}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                        <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
                      </a>
                    ) : (
                      <span className="mt-6 text-sm font-semibold text-muted-foreground">
                        {t('projects.comingSoon')}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
