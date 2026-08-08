import { Braces, Database, GitBranch, MonitorSmartphone, Server, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';

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
    <section aria-labelledby="capabilities-title" className="relative overflow-hidden bg-void text-moon" id="capacidades">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,var(--primary)_0,transparent_1px)] [background-size:3rem_3rem]"
      />
      <Container className="relative py-24 sm:py-32">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              {t('capabilities.eyebrow')}
            </p>
            <h2
              className="mt-5 text-[clamp(2.75rem,6vw,6rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-balance"
              id="capabilities-title"
            >
              {t('capabilities.title')}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-moon/60 lg:justify-self-end">
            {t('capabilities.description')}
          </p>
        </Reveal>

        <Reveal className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="size-2 rounded-full bg-accent" />
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-[0.65rem] tracking-[0.16em] text-moon/45 uppercase">
              {t('capabilities.systemLabel')}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, key }, index) => (
              <article
                className="group min-h-56 border-b border-white/10 p-6 transition-colors hover:bg-white/[0.045] sm:p-8 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
                key={key}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon aria-hidden="true" className="size-6 text-accent" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-moon/35">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-12 text-xl font-semibold">{t(`capabilities.items.${key}.title`)}</h3>
                <p className="mt-3 text-sm leading-6 text-moon/55">
                  {t(`capabilities.items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
