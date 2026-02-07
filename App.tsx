
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500 font-medium">
            Gabriel Splicio de Castro — <span className="text-blue-500">2024</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#sobre" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Sobre</a>
            <a href="#projetos" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Projetos</a>
            <a href="#contato" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full glass border border-white/10 text-white transition-all z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none hover:neon-border-blue'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;
