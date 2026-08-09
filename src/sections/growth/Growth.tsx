import { BriefcaseBusiness, Building2, Rocket, Store, UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import './growth.css';

const sectors = [
  { icon: Store, key: 'commerce' },
  { icon: BriefcaseBusiness, key: 'services' },
  { icon: Rocket, key: 'startups' },
  { icon: Building2, key: 'organizations' },
  { icon: UserRound, key: 'professionals' },
] as const;

function SectorList({ hidden = false }: { hidden?: boolean }) {
  const { t } = useTranslation();

  return (
    <ul aria-hidden={hidden || undefined} className="growth__list">
      {sectors.map(({ icon: Icon, key }) => (
        <li className="growth__item" key={key}>
          <Icon aria-hidden="true" className="size-9" strokeWidth={1.5} />
          <span>{t(`growth.sectors.${key}`)}</span>
        </li>
      ))}
    </ul>
  );
}

export function Growth() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="growth-title" className="overflow-hidden bg-background">
      <Container className="py-24 text-center sm:py-28 lg:py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            {t('growth.eyebrow')}
          </p>
          <h2
            className="mx-auto mt-4 max-w-5xl text-[clamp(2.75rem,5.5vw,4.75rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-balance"
            id="growth-title"
          >
            {t('growth.title')}
          </h2>
        </Reveal>
      </Container>

      <div className="growth__marquee">
        <div className="growth__track">
          <SectorList />
          <SectorList hidden />
        </div>
      </div>
    </section>
  );
}
