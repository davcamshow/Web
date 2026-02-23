import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/cvData';
import { useScrollReveal } from '../hooks/useScrollAnimation';

// Mapeo de tecnologías a sus logos de DevIcon
const techLogos: Record<string, string> = {
  // Frontend
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  
  // Backend
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  
  // Bases de Datos
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  
  // Tools
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Visión por Computadora': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  
  // Soft Skills (usaremos emojis para estos)
  'Trabajo en equipo': '👥',
  'Comunicación': '💬',
  'Resolución de problemas': '🧩',
  'Aprendizaje continuo': '📚',
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  
  const { ref: sectionRef, revealClasses } = useScrollReveal({ threshold: 0.1 });
  
  const categories = [
    { id: 'frontend', name: 'Frontend', emoji: '🎨' },
    { id: 'backend', name: 'Backend', emoji: '⚙️' },
    { id: 'tools', name: 'Tools', emoji: '🛠️' },
    { id: 'soft-skills', name: 'Soft Skills', emoji: '🤝' }
  ];

  // Agrupar skills por categoría
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Función para animar uno por uno MÁS LENTO
  const animateOneByOne = (category: string) => {
    setVisibleItems([]);
    setHasAnimated(false);
    
    const currentSkills = skillsByCategory[category] || [];
    
    // Limpiar cualquier timeout anterior
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    
    // Pequeño delay para reiniciar la animación
    setTimeout(() => {
      currentSkills.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 300); // 300ms entre cada item (más lento)
        
        timeouts.push(timeout);
      });
      setHasAnimated(true);
    }, 100);

    // Cleanup function
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  };

  // Cuando cambia la categoría
  useEffect(() => {
    const cleanup = animateOneByOne(activeCategory);
    return cleanup;
  }, [activeCategory]);

  // Observer para cuando la sección es visible por primera vez
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateOneByOne(activeCategory);
        }
      },
      { threshold: 0.3 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory, hasAnimated]);

  return (
    <section id="skills" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className={revealClasses}>
          <div className="text-center mb-16">
            {/* Título con efecto Hero */}
            <div className="relative inline-block perspective-1000 group/name cursor-pointer">
              <div className="absolute inset-0 transform -skew-x-3 translate-x-4 translate-y-4 blur-2xl opacity-30 transition-all duration-500 group-hover/name:opacity-70 group-hover/name:blur-xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#3a3229]">
                  HABILIDADES
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-2 translate-y-2 blur-md opacity-40 transition-all duration-500 group-hover/name:opacity-80 group-hover/name:blur-lg">
                <h2 className="text-4xl md:text-5xl font-black text-[#8b7355]">
                  HABILIDADES
                </h2>
              </div>
              
              <div className="absolute inset-0 transform -skew-x-3 translate-x-1 translate-y-1 blur-sm opacity-50 transition-all duration-500 group-hover/name:opacity-90 group-hover/name:blur">
                <h2 className="text-4xl md:text-5xl font-black text-[#b89b7a]">
                  HABILIDADES
                </h2>
              </div>
              
              <h2 className="relative text-4xl md:text-5xl font-black text-[#3a3229] transform -skew-x-3 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                HABILIDADES
              </h2>
            </div>
          </div>
          
          {/* Categorías */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg border transition-all duration-500 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'border-[#b89b7a] bg-[#faf7f2] text-[#3a3229] shadow-md'
                    : 'border-[#d9b99b] text-[#8b7355] hover:border-[#b89b7a] hover:bg-[#faf7f2]/50'
                }`}
              >
                <span className="text-xl">{category.emoji}</span>
                <span className="font-light">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills en recuadros con logos - ANIMACIÓN LENTA UNO POR UNO */}
          <div ref={categoryRef} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsByCategory[activeCategory]?.map((skill, index) => (
                <div
                  key={skill.id}
                  className={`group relative border border-[#d9b99b] hover:border-[#b89b7a] transition-all duration-500 bg-[#faf7f2] p-6 rounded-lg hover:-translate-y-2 hover:shadow-xl transform ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s, box-shadow 0.3s',
                    transitionDelay: visibleItems.includes(index) ? '0s' : '0s'
                  }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    {/* Logo o emoji */}
                    <div className="w-16 h-16 flex items-center justify-center">
                      {techLogos[skill.name] ? (
                        techLogos[skill.name].startsWith('http') ? (
                          <img
                            src={techLogos[skill.name]}
                            alt={skill.name}
                            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                            style={{ filter: 'brightness(0.8) sepia(0.2)' }}
                          />
                        ) : (
                          <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                            {techLogos[skill.name]}
                          </span>
                        )
                      ) : (
                        <span className="text-4xl text-[#b89b7a] group-hover:scale-110 transition-transform duration-500">
                          📦
                        </span>
                      )}
                    </div>
                    
                    {/* Nombre de la tecnología */}
                    <h3 className="text-sm font-medium text-[#3a3229] group-hover:text-[#5c4e3d] transition-colors duration-500">
                      {skill.name}
                    </h3>
                    
                    {/* Categoría pequeña (opcional) */}
                    <span className="text-xs text-[#b89b7a] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {categories.find(c => c.id === skill.category)?.name}
                    </span>
                  </div>
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d9b99b]/10 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;