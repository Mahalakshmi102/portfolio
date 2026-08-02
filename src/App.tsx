import { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './providers/SmoothScrollProvider';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageLoader } from './components/ui/PageLoader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Optional: add a timeout as a fallback for the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Achievements />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </SmoothScrollProvider>
  );
}

export default App;
