import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { Header } from './components/layout/Header';
import { Contact } from './sections/contact/Contact';
import { Hero } from './sections/hero/Hero';
import { Pricing } from './sections/pricing/Pricing';
import { Projects } from './sections/projects/Projects';
import { Services } from './sections/services/Services';

function App() {
  const { t } = useTranslation();

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-background text-foreground">
        <a className="fixed top-3 left-3 z-100 -translate-y-[200%] rounded-lg bg-foreground px-4 py-3 font-semibold text-background focus:translate-y-0" href="#main-content">
          {t('accessibility.skipToContent')}
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Services />
          <Pricing />
          <Projects />
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
