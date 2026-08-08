import { Compass, Crosshair, Layers3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

const values = [
  { icon: Crosshair, key: 'purpose' },
  { icon: Layers3, key: 'systems' },
  { icon: Compass, key: 'partnership' },
] as const;

export function ValueProposition() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="value-title" className="border-b border-border bg-background" id="propuesta">
      <Container className="grid gap-14 py-24 sm:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-24">
        <Reveal className="lg:sticky lg:top-32">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t('value.eyebrow')}
          </p>
          <h2
            className="mt-6 max-w-4xl text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-balance"
            id="value-title"
          >
            {t('value.statement')}
          </h2>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {values.map(({ icon: Icon, key }, index) => (
            <Reveal key={key}>
              <article className="group grid grid-cols-[auto_1fr] gap-x-5 py-8 sm:py-10">
                <div className="grid size-12 place-items-center rounded-full border border-border bg-surface text-primary transition-colors group-hover:border-primary">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold">{t(`value.items.${key}.title`)}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {t(`value.items.${key}.description`)}
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
