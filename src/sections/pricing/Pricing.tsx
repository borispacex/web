import { Check, Database, FileText, LayoutGrid, Monitor, Users, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/SectionHeading';

type PlanKey = 'landing' | 'business' | 'system';

const plans: readonly { key: PlanKey; featured?: boolean }[] = [
  { key: 'landing' },
  { key: 'business', featured: true },
  { key: 'system' },
];

function ServiceDiagram({ plan }: { plan: PlanKey }) {
  const { t } = useTranslation();

  if (plan === 'landing') {
    return (
      <div className="grid gap-3 rounded-2xl border border-border bg-background p-4" aria-hidden="true">
        <div className="flex gap-1.5"><i /><i /><i /></div>
        <div className="rounded-xl bg-primary/12 p-5 text-center text-sm font-semibold text-primary">{t('pricing.diagram.message')}</div>
        <div className="grid grid-cols-3 gap-2">
          {['service', 'proof', 'contact'].map((key) => <div className="rounded-lg bg-surface-alt p-3 text-center text-xs" key={key}>{t(`pricing.diagram.${key}`)}</div>)}
        </div>
      </div>
    );
  }

  if (plan === 'business') {
    return (
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-3 rounded-2xl border border-border bg-background p-4" aria-hidden="true">
        <div className="grid content-start gap-2">
          {['home', 'services', 'catalog', 'contact'].map((key) => <span className="rounded-lg border border-border bg-surface px-3 py-2 text-xs" key={key}>{t(`pricing.diagram.${key}`)}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-surface-alt p-3">
          {[0, 1, 2, 3].map((item) => <span className="min-h-14 rounded-lg bg-surface" key={item} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-border bg-background p-4" aria-hidden="true">
      <div className="grid gap-2 text-center text-xs"><span className="diagram-node"><Users />{t('pricing.diagram.users')}</span><span className="diagram-node"><Monitor />{t('pricing.diagram.admin')}</span></div>
      <span className="text-primary">→</span>
      <div className="grid gap-2 text-center text-xs"><span className="diagram-node"><Database />{t('pricing.diagram.database')}</span><span className="diagram-node"><LayoutGrid />{t('pricing.diagram.reports')}</span></div>
    </div>
  );
}

export function Pricing() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedPlan) return undefined;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setSelectedPlan(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedPlan]);

  return (
    <section aria-labelledby="pricing-title" className="border-y border-border bg-surface-alt" id="precios">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading description={t('pricing.description')} eyebrow={t('pricing.eyebrow')} id="pricing-title" title={t('pricing.title')} />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map(({ featured, key }) => (
            <Reveal className="h-full" key={key}>
              <article className={`relative flex h-full flex-col rounded-2xl border bg-surface p-6 ${featured ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}`}>
                {featured && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">{t('pricing.recommended')}</span>}
                <p className="text-sm font-semibold text-primary">{t(`pricing.plans.${key}.name`)}</p>
                <p className="mt-4 text-3xl font-semibold tracking-tight">{t(`pricing.plans.${key}.price`)}</p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{t(`pricing.plans.${key}.summary`)}</p>
                <ul className="mt-6 grid gap-3">
                  {[0, 1, 2].map((item) => <li className="flex gap-2 text-sm" key={item}><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{t(`pricing.plans.${key}.highlights.${item}`)}</li>)}
                </ul>
                <button className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary" onClick={() => setSelectedPlan(key)} type="button"><FileText className="size-4" aria-hidden="true" />{t('pricing.details')}</button>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{t('pricing.note')}</p>
      </Container>

      {selectedPlan && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-void/75 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedPlan(null); }}>
          <div aria-labelledby="plan-modal-title" aria-modal="true" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-surface p-5 shadow-2xl sm:p-8" role="dialog">
            <div className="flex items-start justify-between gap-5">
              <div><p className="text-sm font-semibold text-primary">{t('pricing.modalEyebrow')}</p><h2 className="mt-2 text-2xl font-semibold sm:text-3xl" id="plan-modal-title">{t(`pricing.plans.${selectedPlan}.name`)}</h2></div>
              <button aria-label={t('pricing.close')} className="grid size-10 shrink-0 place-items-center rounded-full border border-border hover:bg-surface-alt" onClick={() => setSelectedPlan(null)} ref={closeButtonRef} type="button"><X className="size-5" aria-hidden="true" /></button>
            </div>
            <p className="mt-4 leading-7 text-muted-foreground">{t(`pricing.plans.${selectedPlan}.detail`)}</p>
            <div className="mt-6"><ServiceDiagram plan={selectedPlan} /></div>
            <h3 className="mt-7 font-semibold">{t('pricing.includes')}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[0, 1, 2, 3, 4, 5].map((item) => <li className="flex gap-2 text-sm" key={item}><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{t(`pricing.plans.${selectedPlan}.includes.${item}`)}</li>)}
            </ul>
            <a className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary-strong px-5 text-sm font-semibold text-white" href="#contacto" onClick={() => setSelectedPlan(null)}>{t('pricing.request')}</a>
          </div>
        </div>
      )}
    </section>
  );
}
