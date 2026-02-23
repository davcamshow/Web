import React from 'react';
import { experiences } from '../data/cvData';
import { useScrollReveal } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { ref, revealClasses } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="experience" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={revealClasses}>
          <div className="text-center mb-16">
            {/* Título con efecto Hero */}
            <div className="relative inline-block perspective-1000 group/name cursor-pointer">
              <div className="absolute inset-0 transform -skew-x-3 translate-x-4 translate-y-4 blur-2xl opacity-30 transition-all duration-500 group-hover/name:opacity-70 group-hover/name:blur-xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#3a3229]">
                  EXPERIENCIA
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-2 translate-y-2 blur-md opacity-40 transition-all duration-500 group-hover/name:opacity-80 group-hover/name:blur-lg">
                <h2 className="text-4xl md:text-5xl font-black text-[#8b7355]">
                  EXPERIENCIA
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-1 translate-y-1 blur-sm opacity-50 transition-all duration-500 group-hover/name:opacity-90 group-hover/name:blur">
                <h2 className="text-4xl md:text-5xl font-black text-[#b89b7a]">
                  EXPERIENCIA
                </h2>
              </div>
              
              <h2 className="relative text-4xl md:text-5xl font-black text-[#3a3229] transform -skew-x-3 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                EXPERIENCIA
              </h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 pb-12 last:pb-0 group">
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#d9b99b] via-[#b89b7a] to-[#d9b99b] animate-pulse"></div>
                )}
                
                <div className="absolute left-0 top-2 w-6 h-6 border-2 border-[#b89b7a] bg-[#faf7f2] rounded-full group-hover:scale-125 group-hover:bg-[#b89b7a] transition-all duration-500"></div>
                
                <div className="ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-medium text-[#3a3229] group-hover:text-[#5c4e3d] transition-colors duration-500">{exp.position}</h3>
                    <span className="text-sm text-[#b89b7a] font-light">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  
                  <h4 className="text-[#8b7355] mb-4 font-light">{exp.company}</h4>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-[#4a4138] font-light group/item hover:translate-x-2 transition-transform duration-500">
                        <span className="text-[#d9b99b] mt-1 group-hover/item:text-[#b89b7a] transition-colors duration-500">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;