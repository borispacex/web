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
    <section aria-labelledby="value-title" className="border-y border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <p className="max-w-4xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-5xl" id="value-title">
            {t('value.statement')}
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {values.map(({ icon: Icon, key }) => (
            <Reveal className="bg-background" key={key}>
              <article className="h-full p-6 sm:p-8">
                <Icon aria-hidden="true" className="size-6 text-primary" strokeWidth={1.7} />
                <h3 className="mt-8 text-xl font-semibold">{t(`value.items.${key}.title`)}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
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
