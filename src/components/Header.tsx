import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/cvData';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detectar sección activa basado en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      setShowHeader(window.scrollY > 100);

      // Detectar qué sección está visible
      const sections = ['hero', 'about', 'experience', 'projects', 'education', 'skills'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está en la ventana (con un margen)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!showHeader) return null;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/5 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent backdrop-blur-md py-5'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Nombre - lleva al Hero */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-[#8b7355] to-[#b89b7a] bg-clip-text text-transparent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#8b7355] after:to-[#b89b7a] after:transition-all after:duration-300 group-hover:after:w-full">
              {personalInfo.name}
            </span>
          </button>
          
          {/* Menú de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-1">       
            {[
              { name: 'Sobre mí', id: 'about' },
              { name: 'Experiencia', id: 'experience' },
              { name: 'Proyectos', id: 'projects' },
              { name: 'Educación', id: 'education' },
              { name: 'Habilidades', id: 'skills' },
              { name: 'Contacto', id: 'hero' } // Contacto también lleva al Hero
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 transition-colors group overflow-hidden ${
                  activeSection === item.id
                    ? 'text-[#8b7355] font-medium'
                    : 'text-gray-700 hover:text-[#8b7355]'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute inset-0 bg-gradient-to-r from-[#d9b99b]/20 to-[#b89b7a]/20 transition-transform duration-300 ${
                  activeSection === item.id ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                }`}></span>
              </button>
            ))}
          </div>
          
          {/* Botón menú móvil */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 focus:outline-none"
          >
            <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-5' : 'rotate-0 top-3'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-gray-600 top-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-5' : 'rotate-0 top-7'}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-2">
            {/* Hero (Inicio) */}
            <button
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md ${
                activeSection === 'hero'
                  ? 'bg-gradient-to-r from-[#d9b99b]/20 to-[#b89b7a]/20 text-[#8b7355]'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#d9b99b]/20 hover:to-[#b89b7a]/20'
              }`}
            >
              🏠 Inicio
            </button>
            
            {[
              { name: 'Sobre mí', id: 'about' },
              { name: 'Experiencia', id: 'experience' },
              { name: 'Proyectos', id: 'projects' },
              { name: 'Educación', id: 'education' },
              { name: 'Habilidades', id: 'skills' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#d9b99b]/20 to-[#b89b7a]/20 text-[#8b7355]'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#d9b99b]/20 hover:to-[#b89b7a]/20'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Contacto en móvil - también lleva al Hero */}
            <button
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md ${
                activeSection === 'hero'
                  ? 'bg-gradient-to-r from-[#d9b99b]/20 to-[#b89b7a]/20 text-[#8b7355]'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#d9b99b]/20 hover:to-[#b89b7a]/20'
              }`}
            >
              📧 Contacto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;