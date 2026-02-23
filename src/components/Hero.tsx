import React from 'react';
import { personalInfo } from '../data/cvData';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* NOMBRE CON EFECTO INCLINADO */}
          <div className="relative mb-4 perspective-1000 group/name cursor-pointer">
            <div className="absolute inset-0 transform -skew-x-3 translate-x-4 translate-y-4 blur-2xl opacity-30 transition-all duration-500 group-hover/name:opacity-70 group-hover/name:blur-xl group-hover/name:drop-shadow-[0_0_15px_rgba(217,185,155,0.6)]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#3a3229]">
                {personalInfo.name}
              </h1>
            </div>
            
            <div className="absolute inset-0 transform -skew-x-3 translate-x-2 translate-y-2 blur-md opacity-40 transition-all duration-500 group-hover/name:opacity-80 group-hover/name:blur-lg group-hover/name:drop-shadow-[0_0_20px_rgba(184,155,122,0.7)]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#8b7355]">
                {personalInfo.name}
              </h1>
            </div>
            
            <div className="absolute inset-0 transform -skew-x-3 translate-x-1 translate-y-1 blur-sm opacity-50 transition-all duration-500 group-hover/name:opacity-90 group-hover/name:blur group-hover/name:drop-shadow-[0_0_25px_rgba(139,115,85,0.8)]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#b89b7a]">
                {personalInfo.name}
              </h1>
            </div>
            
            <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black text-[#3a3229] transform -skew-x-3 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
              {personalInfo.name}
            </h1>
          </div>

          {/* TÍTULO */}
          <div className="mb-12">
            <h2 className="text-sm md:text-base lg:text-lg font-light tracking-[0.3em] text-[#8b7355] uppercase">
              FULLSTACK DEVELOPER
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#b89b7a] to-transparent mx-auto mt-3"></div>
          </div>
          
          {/* ICONOS */}
          <div className="flex flex-wrap gap-10 md:gap-16 mb-16 justify-center items-center">
            
            {/* CV - PDF */}
            <a 
              href="https://drive.google.com/file/d/1rshBUuU7X40jlGYBHy_3qPSrID4jZeHz/view?usp=sharing" 
              download
              className="group"
              title="Descargar CV"
            >
              <img 
                src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/7.x/svgs/regular/address-book.svg"
                alt="CV"
                className="w-10 h-10 md:w-12 md:h-12 text-[#8b7355] group-hover:text-[#3a3229] group-hover:rotate-360 transition-all duration-700 ease-in-out"
                style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(15%) saturate(540%) hue-rotate(340deg) brightness(92%) contrast(87%)' }}
              />
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/davcamshow"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="GitHub"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-360 transition-all duration-700 ease-in-out"
                style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(15%) saturate(540%) hue-rotate(340deg) brightness(92%) contrast(87%)' }}
              />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/david-barrera-reyes"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="LinkedIn"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn"
                className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-360 transition-all duration-700 ease-in-out"
                style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(15%) saturate(540%) hue-rotate(340deg) brightness(92%) contrast(87%)' }}
              />
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://www.facebook.com/share/14NkcNoKfzV/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="Twitter"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
                alt="Facebook"
                className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-360 transition-all duration-700 ease-in-out"
                style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(15%) saturate(540%) hue-rotate(340deg) brightness(92%) contrast(87%)' }}
              />
            </a>
            
            {/* Contacto - Email (AHORA ABRE MODAL) */}
            <button 
              onClick={onContactClick}
              className="group bg-transparent border-none cursor-pointer"
              title="Enviar correo"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Email"
                className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-360 transition-all duration-700 ease-in-out"
                style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(15%) saturate(540%) hue-rotate(340deg) brightness(92%) contrast(87%)' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-xs tracking-widest mb-2 text-[#b89b7a] drop-shadow-lg group-hover:text-[#8b7355] transition-colors duration-500">
            DESCUBRIR
          </span>
          <div className="relative w-6 h-10">
            <div className="absolute inset-0 border-2 border-[#b89b7a] rounded-full group-hover:border-[#8b7355] transition-colors duration-500 shadow-[0_5px_15px_-5px_rgba(58,50,41,0.5)]"></div>
            <div className="absolute inset-1 border border-[#f5efe8] rounded-full opacity-20"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#b89b7a] rounded-full animate-bounce group-hover:bg-[#8b7355] transition-colors duration-500"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;