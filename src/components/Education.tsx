import React from 'react';
import { education } from '../data/cvData';
import { useScrollReveal } from '../hooks/useScrollAnimation';

// Datos de ejemplo para certificados
const certificates = [
  {
    id: 1,
    title: "Certificado en SQL intermedio",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/iframe/9b04c28a5131",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Propedeutico en Inteligencia Artificial",
    issuer: "Mooc Tecnológico Nacional",
    date: "2026",
    link: "https://mooc.tecnm.mx/certificates/0746f91b21a048b1a30f41b9272a267c",
    icon: "📜"
  },
  {
    id: 3,
    title: "Certificado en SQL básico",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/iframe/8dcb786683c0",
    icon: "🎓"
  }
];

const Education: React.FC = () => {
  const { ref, revealClasses } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="education" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={revealClasses}>
          <div className="text-center mb-16">
            {/* Título con efecto Hero */}
            <div className="relative inline-block perspective-1000 group/name cursor-pointer">
              <div className="absolute inset-0 transform -skew-x-3 translate-x-4 translate-y-4 blur-2xl opacity-30 transition-all duration-500 group-hover/name:opacity-70 group-hover/name:blur-xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#3a3229]">
                  EDUCACIÓN
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-2 translate-y-2 blur-md opacity-40 transition-all duration-500 group-hover/name:opacity-80 group-hover/name:blur-lg">
                <h2 className="text-4xl md:text-5xl font-black text-[#8b7355]">
                  EDUCACIÓN
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-1 translate-y-1 blur-sm opacity-50 transition-all duration-500 group-hover/name:opacity-90 group-hover/name:blur">
                <h2 className="text-4xl md:text-5xl font-black text-[#b89b7a]">
                  EDUCACIÓN
                </h2>
              </div>
              
              <h2 className="relative text-4xl md:text-5xl font-black text-[#3a3229] transform -skew-x-3 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                EDUCACIÓN
              </h2>
            </div>
          </div>
          
          {/* Educación Formal */}
          <div className="max-w-5xl mx-auto mb-20">
            <h3 className="text-2xl font-light text-[#8b7355] mb-8 text-center relative inline-block left-1/2 transform -translate-x-1/2">
              <span className="relative">
                Formación Académica
                <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d9b99b] to-transparent"></span>
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu) => (
                <div key={edu.id} className="border border-[#d9b99b] p-8 hover:border-[#b89b7a] transition-colors duration-500 bg-[#faf7f2] hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <div className="text-sm text-[#b89b7a] mb-4 font-light flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#b89b7a] rounded-full"></span>
                    {edu.startDate} — {edu.endDate}
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#3a3229] mb-2">{edu.degree}</h3>
                  <h4 className="text-[#8b7355] mb-4 font-light flex items-center gap-2">
                    <span>🏛️</span>
                    {edu.institution}
                  </h4>
                  <p className="text-[#5c4e3d] font-light text-sm">{edu.field}</p>
                  
                  {edu.description && (
                    <p className="mt-4 text-sm text-[#6b5b4b] font-light border-t border-[#d9b99b] pt-4">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones y Constancias */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-light text-[#8b7355] mb-8 text-center relative inline-block left-1/2 transform -translate-x-1/2">
              <span className="relative">
                Certificaciones y Constancias
                <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d9b99b] to-transparent"></span>
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="border border-[#d9b99b] p-6 hover:border-[#b89b7a] transition-all duration-500 bg-[#faf7f2] hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      {/* Icono decorativo */}
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                        {cert.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-[#3a3229] group-hover:text-[#5c4e3d] transition-colors duration-500">
                            {cert.title}
                          </h4>
                          <span className="text-xs text-[#b89b7a] font-light border border-[#d9b99b] px-2 py-1">
                            {cert.date}
                          </span>
                        </div>
                        
                        <p className="text-[#8b7355] font-light text-sm mb-3">
                          {cert.issuer}
                        </p>
                        
                        <div className="flex items-center text-xs text-[#8b7355] group-hover:text-[#3a3229] transition-colors duration-500">
                          <span>Ver certificado</span>
                          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-500">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;