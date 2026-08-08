import { Check, Telescope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const steps = ['discover', 'define', 'build', 'deliver'] as const;

export function Process() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="process-title" className="bg-surface-alt" id="proceso">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <SectionHeading
              description={t('process.description')}
              eyebrow={t('process.eyebrow')}
              id="process-title"
              title={t('process.title')}
            />
          </Reveal>
          <Reveal>
            <div className="grid size-20 place-items-center rounded-full border border-border bg-background text-primary">
              <Telescope aria-hidden="true" className="size-8" strokeWidth={1.4} />
            </div>
          </Reveal>
        </div>

        <ol className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block"
          />
          {steps.map((step, index) => (
            <li className="relative" key={step}>
              <Reveal>
                <div className="group grid grid-cols-[3rem_1fr] gap-5 lg:block">
                  <div className="relative z-10 grid size-12 place-items-center rounded-full border border-border bg-background font-mono text-xs text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    {index === steps.length - 1 ? (
                      <Check aria-hidden="true" className="size-4" />
                    ) : (
                      String(index + 1).padStart(2, '0')
                    )}
                  </div>
                  <div className="lg:mt-8">
                    <h3 className="text-xl font-semibold">{t(`process.steps.${step}.title`)}</h3>
                    <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                      {t(`process.steps.${step}.description`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
