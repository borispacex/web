import { Braces, Database, GitBranch, MonitorSmartphone, Server, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

const capabilities = [
  { icon: MonitorSmartphone, key: 'interfaces' },
  { icon: Braces, key: 'applications' },
  { icon: Server, key: 'services' },
  { icon: Database, key: 'data' },
  { icon: Workflow, key: 'automation' },
  { icon: GitBranch, key: 'delivery' },
] as const;

export function Capabilities() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="capabilities-title" id="capacidades">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              description={t('capabilities.description')}
              eyebrow={t('capabilities.eyebrow')}
              id="capabilities-title"
              title={t('capabilities.title')}
            />
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, key }) => (
              <Reveal className="bg-surface" key={key}>
                <article className="flex h-full gap-4 p-5 sm:p-6">
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <h3 className="font-semibold">{t(`capabilities.items.${key}.title`)}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t(`capabilities.items.${key}.description`)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
