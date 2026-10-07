import { ArrowRight, Check } from 'lucide-react';
import { m, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { brandAssets } from '../../config/brand';
import './hero.css';

export function Hero() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="hero-title" className="hero overflow-hidden" id="inicio">
      <div aria-hidden="true" className="hero__orbit" />
      <Container className="hero__container relative grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <m.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="hero__title" id="hero-title">{t('hero.tagline')}</h1>
          <p className="hero__description">{t('hero.description')}</p>
          <div className="hero__actions">
            <a className="hero__cta" href="#contacto">
              {t('hero.primaryCta')}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a className="hero__secondary" href="#proyectos">{t('hero.secondaryCta')}</a>
          </div>
          <ul className="hero__proof" aria-label={t('hero.proofLabel')}>
            {(['web', 'systems', 'support'] as const).map((key) => (
              <li key={key}>
                <Check aria-hidden="true" />
                {t(`hero.proof.${key}`)}
              </li>
            ))}
          </ul>
        </m.div>

        <m.div
          animate={{ opacity: 1, scale: 1 }}
          aria-hidden="true"
          className="hero__emblem"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img alt="" className="hero__logo-symbol" src={brandAssets.hero} />
        </m.div>
      </Container>
    </section>
  );
}
