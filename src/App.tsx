import { useTranslation } from 'react-i18next';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Button } from './components/ui/Button';
import { Container } from './components/ui/Container';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="inicio">
        <Container className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center gap-6 py-20">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            {t('shell.eyebrow')}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {t('app.name')}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            {t('shell.description')}
          </p>
          <Button href="#contacto">{t('shell.cta')}</Button>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
