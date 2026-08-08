import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WhatsAppIcon } from '../icons/BrandIcons';

export function FloatingActions() {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setShowBackToTop(window.scrollY > 700);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="floating-actions">
      {showBackToTop && (
        <button
          aria-label={t('floating.backToTop')}
          className="fixed right-4 bottom-4 z-40 grid size-12 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur-xl transition-transform hover:-translate-y-1 sm:right-6 sm:bottom-6"
          onClick={scrollToTop}
          type="button"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </button>
      )}
      <a
        aria-label={t('floating.whatsapp')}
        className="group fixed bottom-4 left-4 z-40 flex min-h-12 items-center gap-3 rounded-full border border-border bg-surface/90 px-3 text-foreground shadow-xl backdrop-blur-xl transition-[border-color,transform,background-color] hover:-translate-y-1 hover:border-primary/40 hover:bg-background sm:bottom-6 sm:left-6 sm:px-5"
        href="https://wa.me/59160514138"
        rel="noreferrer"
        target="_blank"
      >
        <span className="grid size-7 place-items-center rounded-full bg-[#25d366] text-white">
          <WhatsAppIcon aria-hidden="true" className="size-4.5" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">{t('floating.whatsappShort')}</span>
        <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
      </a>
    </div>
  );
}
