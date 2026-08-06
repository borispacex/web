import { FolderKanban } from 'lucide-react';
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
          <div className="grid min-h-72 place-items-center rounded-3xl border border-dashed border-border bg-background p-8 text-center">
            <div className="max-w-lg">
              <FolderKanban aria-hidden="true" className="mx-auto size-10 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl font-semibold">{t('projects.pending.title')}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {t('projects.pending.description')}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
