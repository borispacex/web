import { Braces, ChevronDown, Code2, Terminal } from 'lucide-react';
import { m, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';
import { brandAssets } from '../../config/brand';
import './hero.css';

export function Hero() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const enterFrom = shouldReduceMotion ? undefined : { opacity: 0, y: 24 };

  return (
    <section
      aria-labelledby="hero-title"
      className="hero isolate overflow-hidden"
      id="inicio"
    >
      <div aria-hidden="true" className="hero__grid" />
      <div aria-hidden="true" className="hero__object hero__object--left">
        <Code2 />
      </div>
      <div aria-hidden="true" className="hero__object hero__object--right">
        <Terminal />
      </div>
      <div aria-hidden="true" className="hero__object hero__object--bottom">
        <Braces />
      </div>

      <Container className="hero__container relative flex min-h-[calc(100svh-4.75rem)] flex-col items-center justify-center py-16 text-center sm:py-20">
        <m.div
          animate={{ opacity: 1, scale: 1 }}
          aria-hidden="true"
          className="hero__emblem"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <img className="hero__logo-symbol" src={brandAssets.hero} alt="" />
        </m.div>

        <m.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center"
          initial={enterFrom}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="hero__title" id="hero-title">
            <span>{t('hero.brandStart')}</span>
            <span className="hero__title-accent">{t('hero.brandAccent')}</span>
          </h1>
          <p className="hero__tagline">{t('hero.tagline')}</p>
          <p className="hero__description">{t('hero.description')}</p>
          <a className="hero__cta" href="#contacto">
            {t('hero.primaryCta')}
            <span aria-hidden="true">↗</span>
          </a>
          <p className="hero__manifesto">{t('hero.manifesto')}</p>
        </m.div>

        <a
          aria-label={t('hero.scrollLabel')}
          className="hero__scroll"
          href="#propuesta"
        >
          <ChevronDown aria-hidden="true" className="size-5" />
        </a>
      </Container>
    </section>
  );
}
