import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    <div className="floating-actions fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {showBackToTop && (
        <button
          aria-label={t('floating.backToTop')}
          className="grid size-12 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur-xl transition-transform hover:-translate-y-1"
          onClick={scrollToTop}
          type="button"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </button>
      )}
      <a
        aria-label={t('floating.whatsapp')}
        className="group flex min-h-12 items-center gap-3 rounded-full bg-void px-3 text-moon shadow-xl transition-transform hover:-translate-y-1 sm:px-5"
        href="https://wa.me/59160514138"
        rel="noreferrer"
        target="_blank"
      >
        <span className="grid size-7 place-items-center rounded-full bg-primary">
          <MessageCircle aria-hidden="true" className="size-4" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">{t('floating.whatsappShort')}</span>
        <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
      </a>
    </div>
  );
}
