import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

export function About() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="about-title" className="border-y border-border bg-surface" id="sobre-mi">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            {t('about.eyebrow')}
          </p>
          <p className="mt-4 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {t('about.role')}
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl" id="about-title">
            {t('about.title')}
          </h2>
          <div className="mt-7 grid gap-5 text-lg leading-8 text-muted-foreground">
            <p>{t('about.description')}</p>
            <p>{t('about.note')}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
