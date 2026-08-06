import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-3 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{t('footer.copyright', { year: currentYear })}</p>
        <a className="w-fit font-medium text-foreground" href="#inicio">
          {t('footer.backToTop')}
        </a>
      </Container>
    </footer>
  );
}
