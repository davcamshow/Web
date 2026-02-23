import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FloatingContact from './components/FloatingContact';
import TechRain from './components/TechRain';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f2] relative">
      {/* TechRain dentro del contenedor de fondo */}
      <div className="fixed inset-0 z-0">
        <TechRain />
      </div>
      
      {/* Fondo unificado con cuadrícula y gradientes */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        {/* Cuadrícula */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #8b7355 1px, transparent 1px), linear-gradient(to bottom, #8b7355 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Gradientes */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9b99b]/20 via-transparent to-[#8b7355]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#b89b7a]/20 via-transparent to-[#3a3229]/20"></div>
        
        {/* Elementos decorativos borrosos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d9b99b] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b89b7a] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#8b7355] rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>

      <Header onContactClick={() => setIsContactOpen(true)} />
      <FloatingContact 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      
      {/* Contenido con fondo transparente */}
      <main className="relative z-10 bg-transparent">
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
}

export default App;