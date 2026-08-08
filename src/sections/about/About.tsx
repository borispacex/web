import { Orbit } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

export function About() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="about-title" className="overflow-hidden border-b border-border bg-background" id="sobre-mi">
      <Container className="grid gap-16 py-24 sm:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-[8%] rounded-full border border-border" />
            <div className="absolute inset-[22%] rounded-full border border-primary/30" />
            <div className="absolute inset-[30%] grid place-items-center rounded-[42%_58%_46%_54%] bg-primary text-white shadow-2xl shadow-primary/25">
              <Orbit aria-hidden="true" className="size-16" strokeWidth={1.25} />
            </div>
            <span className="absolute top-[16%] right-[12%] size-3 rounded-full bg-accent shadow-[0_0_1.5rem_var(--accent)]" />
            <span className="absolute bottom-[18%] left-[6%] font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {t('about.orbitLabel')}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t('about.eyebrow')}
          </p>
          <p className="mt-5 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
            {t('about.role')}
          </p>
          <h2
            className="mt-7 text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-balance"
            id="about-title"
          >
            {t('about.title')}
          </h2>
          <div className="mt-8 grid max-w-3xl gap-5 text-lg leading-8 text-muted-foreground">
            <p>{t('about.description')}</p>
            <p className="border-l-2 border-primary pl-5">{t('about.note')}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
