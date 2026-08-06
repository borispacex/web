import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Hero } from './sections/hero/Hero';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
