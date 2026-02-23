import React from 'react';
import { projects } from '../data/cvData';
import { useScrollReveal } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { ref, revealClasses } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={revealClasses}>
          <div className="text-center mb-16">
            {/* Título con efecto Hero */}
            <div className="relative inline-block perspective-1000 group/name cursor-pointer">
              <div className="absolute inset-0 transform -skew-x-3 translate-x-4 translate-y-4 blur-2xl opacity-30 transition-all duration-500 group-hover/name:opacity-70 group-hover/name:blur-xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#3a3229]">
                  PROYECTOS
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-2 translate-y-2 blur-md opacity-40 transition-all duration-500 group-hover/name:opacity-80 group-hover/name:blur-lg">
                <h2 className="text-4xl md:text-5xl font-black text-[#8b7355]">
                  PROYECTOS
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-1 translate-y-1 blur-sm opacity-50 transition-all duration-500 group-hover/name:opacity-90 group-hover/name:blur">
                <h2 className="text-4xl md:text-5xl font-black text-[#b89b7a]">
                  PROYECTOS
                </h2>
              </div>
              
              <h2 className="relative text-4xl md:text-5xl font-black text-[#3a3229] transform -skew-x-3 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                PROYECTOS
              </h2>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group border border-[#d9b99b] hover:border-[#b89b7a] transition-all duration-500 bg-[#faf7f2] hover:-translate-y-2 hover:shadow-lg">
                <div className="h-48 bg-[#e5d9cc] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(45deg, #8b7355 0px, #8b7355 4px, transparent 4px, transparent 8px)`,
                      backgroundSize: '8px 8px'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl font-light text-[#b89b7a] opacity-50 group-hover:scale-110 transition-transform duration-700">
                      {project.title[0]}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#3a3229] mb-2 group-hover:text-[#5c4e3d] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[#6b5b4b] text-sm mb-4 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs text-[#b89b7a] font-light border border-[#d9b99b] px-2 py-1 hover:bg-[#b89b7a] hover:text-[#faf7f2] transition-all duration-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="text-xs text-[#8b7355] hover:text-[#3a3229] transition-colors duration-500 tracking-wider group/link">
                        GITHUB <span className="inline-block group-hover/link:translate-x-1 transition-transform duration-500">→</span>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className="text-xs text-[#8b7355] hover:text-[#3a3229] transition-colors duration-500 tracking-wider group/link">
                        DEMO <span className="inline-block group-hover/link:translate-x-1 transition-transform duration-500">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;