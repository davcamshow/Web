import React from 'react';
import { personalInfo } from '../data/cvData';
import { useScrollReveal } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, revealClasses } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${revealClasses}`}>
          
          {/* PARTE IZQUIERDA - TÍTULO Y DESCRIPCIÓN */}
          <div className="lg:w-1/2">
            {/* TÍTULO CON MISMO ESTILO QUE HERO */}
            <div className="relative mb-8 perspective-1000 group/name cursor-pointer">
              <div className="absolute inset-0 transform -skew-x-3 translate-x-4 translate-y-4 blur-2xl opacity-30 transition-all duration-500 group-hover/name:opacity-70 group-hover/name:blur-xl group-hover/name:drop-shadow-[0_0_15px_rgba(217,185,155,0.6)]">
                <h2 className="text-5xl md:text-6xl font-black text-[#3a3229]">
                  SOBRE MÍ
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-2 translate-y-2 blur-md opacity-40 transition-all duration-500 group-hover/name:opacity-80 group-hover/name:blur-lg group-hover/name:drop-shadow-[0_0_20px_rgba(184,155,122,0.7)]">
                <h2 className="text-5xl md:text-6xl font-black text-[#8b7355]">
                  SOBRE MÍ
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-1 translate-y-1 blur-sm opacity-50 transition-all duration-500 group-hover/name:opacity-90 group-hover/name:blur group-hover/name:drop-shadow-[0_0_25px_rgba(139,115,85,0.8)]">
                <h2 className="text-5xl md:text-6xl font-black text-[#b89b7a]">
                  SOBRE MÍ
                </h2>
              </div>
              
              <h2 className="relative text-5xl md:text-6xl font-black text-[#3a3229] transform -skew-x-3 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                SOBRE MÍ
              </h2>
            </div>

            {/* DESCRIPCIÓN */}
            <div className="mt-8">
              <p className="text-lg md:text-xl text-[#4a4138] leading-relaxed font-light">
                {personalInfo.summary}
              </p>
            </div>
          </div>

          {/* PARTE DERECHA - FOTO */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d9b99b] rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
              
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl border-8 border-[#f5efe8] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:rotate-2 group-hover:scale-105">
                <img 
                  src="/profile.jpeg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <a 
                href="/profile.jpeg" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-4 w-16 h-16 border border-[#d9b99b] rounded-full flex items-center justify-center bg-[#faf7f2]/80 backdrop-blur-sm animate-bounce group-hover:rotate-180 transition-transform duration-1000 hover:scale-110"
              >
                <span className="text-[#8b7355] text-2xl group-hover:scale-110 transition-transform duration-500">🔗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;