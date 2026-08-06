import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const steps = ['discover', 'define', 'build', 'deliver'] as const;

export function Process() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="process-title" id="proceso">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            description={t('process.description')}
            eyebrow={t('process.eyebrow')}
            id="process-title"
            title={t('process.title')}
          />
        </Reveal>
        <ol className="mt-14 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal className="h-full" key={step}>
              <li className="h-full rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-12 text-xl font-semibold">{t(`process.steps.${step}.title`)}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {t(`process.steps.${step}.description`)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
