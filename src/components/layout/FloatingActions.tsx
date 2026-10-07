import { useTranslation } from 'react-i18next';
import { WhatsAppIcon } from '../icons/BrandIcons';

export function FloatingActions() {
  const { t } = useTranslation();

  return (
    <aside aria-label={t('floating.contact')} className="fixed right-1/2 bottom-[max(0.9rem,env(safe-area-inset-bottom))] z-60 w-max translate-x-1/2 print:hidden md:hidden">
      <a
        className="flex min-h-13 items-center gap-2.5 rounded-full bg-[#25d366] px-5 text-sm font-bold text-white shadow-[0_0.8rem_2.5rem_rgb(5_7_13_/_0.24)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-105"
        href="https://wa.me/59160514138"
        rel="noreferrer"
        target="_blank"
      >
        <WhatsAppIcon aria-hidden="true" className="w-5" />
        <span>{t('floating.quote')}</span>
        <span className="sr-only"> {t('accessibility.opensNewTab')}</span>
      </a>
    </aside>
  );
}
