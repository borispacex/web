import { ArrowRight, Check } from 'lucide-react';
import { m, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/ui/Container';

const videoAsset = (file: string): string => `${import.meta.env.BASE_URL}video/${file}`;

export function Hero() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const updateVideoPreference = (): void => {
      setCanPlayVideo(mediaQuery.matches && !shouldReduceMotion && !connection?.saveData);
    };

    updateVideoPreference();
    mediaQuery.addEventListener('change', updateVideoPreference);
    return () => mediaQuery.removeEventListener('change', updateVideoPreference);
  }, [shouldReduceMotion]);

  return (
    <section aria-labelledby="hero-title" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/10 bg-void text-white" id="inicio">
      {canPlayVideo ? (
        <video
          aria-hidden="true"
          autoPlay
          className="absolute top-0 left-0 -z-30 h-[calc(100%+3rem)] w-full object-cover object-top"
          loop
          muted
          playsInline
          poster={videoAsset('borispacex-poster.jpg')}
          preload="metadata"
        >
          <source src={videoAsset('borispacex_v2.mp4')} type="video/mp4" />
        </video>
      ) : (
        <img
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 -z-30 h-[calc(100%+3rem)] w-full object-cover object-[58%_top]"
          height="720"
          src={videoAsset('borispacex-poster.jpg')}
          width="1280"
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-void/55" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(5_7_13_/_0.94)_0%,rgb(5_7_13_/_0.72)_48%,rgb(5_7_13_/_0.2)_100%)]" />
      <Container className="relative flex min-h-[calc(100svh-4rem)] items-center py-16 text-center lg:py-20 lg:text-left">
        <m.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs font-bold tracking-[0.16em] text-primary uppercase">{t('hero.eyebrow')}</p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.98] font-semibold tracking-[-0.065em] text-balance" id="hero-title">{t('hero.tagline')}</h1>
          <p className="mx-auto mt-6 max-w-[39rem] text-[clamp(1rem,1.5vw,1.15rem)] leading-7 text-[#d7dee8] lg:mx-0">{t('hero.description')}</p>
          <div className="mt-8 grid gap-3 min-[481px]:flex min-[481px]:flex-wrap min-[481px]:justify-center lg:justify-start">
            <a className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-primary-strong px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 min-[481px]:w-auto" href="#contacto">
              {t('hero.primaryCta')}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-white/16 min-[481px]:w-auto" href="#proyectos">{t('hero.secondaryCta')}</a>
          </div>
          <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[0.82rem] text-[#d7dee8] lg:justify-start" aria-label={t('hero.proofLabel')}>
            {(['web', 'systems', 'support'] as const).map((key) => (
              <li className="flex items-center gap-1.5" key={key}>
                <Check aria-hidden="true" className="w-3.5 text-primary" />
                {t(`hero.proof.${key}`)}
              </li>
            ))}
          </ul>
        </m.div>
      </Container>
    </section>
  );
}
