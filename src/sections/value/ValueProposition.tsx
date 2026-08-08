import { Braces, Compass, Crosshair, Gauge, Layers3, MessagesSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

const values = [
  { icon: Crosshair, key: 'purpose' },
  { icon: Layers3, key: 'systems' },
  { icon: Gauge, key: 'scalability' },
  { icon: Braces, key: 'adaptability' },
  { icon: MessagesSquare, key: 'communication' },
  { icon: Compass, key: 'partnership' },
] as const;

export function ValueProposition() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="value-title"
      className="border-y border-primary/10 bg-[var(--section-tint)]"
      id="propuesta"
    >
      <Container className="py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            {t('value.eyebrow')}
          </p>
          <h2
            className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold tracking-[-0.04em] text-balance"
            id="value-title"
          >
            {t('value.statement')}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            {t('value.description')}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 lg:grid-cols-2">
          {values.map(({ icon: Icon, key }) => (
            <Reveal className="h-full" key={key}>
              <article className="group flex h-full min-h-48 flex-col items-center justify-center rounded-[1.25rem] border border-border bg-surface px-6 py-9 text-center transition-[border-color,transform] hover:-translate-y-1 hover:border-primary/40 sm:px-10">
                <div className="grid size-11 place-items-center rounded-xl bg-foreground text-background">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                </div>
                <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                  <strong className="font-semibold text-foreground">
                    {t(`value.items.${key}.title`)}:
                  </strong>{' '}
                  {t(`value.items.${key}.description`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
