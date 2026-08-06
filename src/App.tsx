import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Hero } from './sections/hero/Hero';
import { Projects } from './sections/projects/Projects';
import { Services } from './sections/services/Services';
import { ValueProposition } from './sections/value/ValueProposition';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
