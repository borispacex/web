import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { Header } from './components/layout/Header';
import { Contact } from './sections/contact/Contact';
import { Growth } from './sections/growth/Growth';
import { Hero } from './sections/hero/Hero';
import { Projects } from './sections/projects/Projects';
import { Services } from './sections/services/Services';
import { ValueProposition } from './sections/value/ValueProposition';

function App() {
  const { t } = useTranslation();

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-background text-foreground">
        <a className="skip-link" href="#main-content">
          {t('accessibility.skipToContent')}
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <ValueProposition />
          <Services />
          <Projects />
          <Growth />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LazyMotion>
  );
}

export default App;
import { domAnimation, LazyMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
