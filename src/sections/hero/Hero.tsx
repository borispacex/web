import { ArrowDownRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/ui/Button';
import { Container } from '../../components/ui/Container';
import './hero.css';

export function Hero() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const enterFrom = shouldReduceMotion ? undefined : { opacity: 0, y: 24 };

  return (
    <section
      aria-labelledby="hero-title"
      className="hero relative isolate overflow-hidden"
      id="inicio"
    >
      <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:py-24">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
          initial={enterFrom}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t('hero.eyebrow')}
          </p>
          <h1
            className="max-w-4xl text-[clamp(3rem,8vw,7rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-balance"
            id="hero-title"
          >
            {t('hero.titleStart')}{' '}
            <span className="hero__accent">{t('hero.titleAccent')}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {t('hero.description')}
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="#contacto">
              {t('hero.primaryCta')}
              <ArrowDownRight aria-hidden="true" className="ml-2 size-4" />
            </Button>
            <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {t('hero.manifesto')}
            </p>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{ opacity: 1, scale: 1 }}
          className="hero__visual mx-auto aspect-square w-full max-w-[34rem]"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          transition={{ delay: 0.12, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero__orbit hero__orbit--outer" />
          <div className="hero__orbit hero__orbit--inner" />
          <div className="hero__moon" />
          <div className="hero__horizon" />
          <div className="hero__signal">
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
