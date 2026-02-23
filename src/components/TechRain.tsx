import React, { useEffect, useState } from 'react';

interface TechIcon {
  icon: string;
  name: string;
  left: string;
  speed: number;
  size: 'sm' | 'md' | 'lg';
  delay: number;
}

interface IconPosition {
  id: number;
  top: number;
  left: string;
  icon: string;
  name: string;
  speed: number;
  size: 'sm' | 'md' | 'lg';
  wave: number;
}

const TechRain: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [iconPositions, setIconPositions] = useState<IconPosition[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Iconos principales
  useEffect(() => {
    const techIcons: TechIcon[] = [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python', left: '2%', speed: 1.5, size: 'sm', delay: 0 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', left: '10%', speed: 2.0, size: 'sm', delay: 2 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', left: '18%', speed: 1.8, size: 'sm', delay: 1 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', left: '26%', speed: 2.2, size: 'sm', delay: 3 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', left: '34%', speed: 2.5, size: 'sm', delay: 4 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js', left: '42%', speed: 2.8, size: 'sm', delay: 5 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', name: 'Django', left: '50%', speed: 1.6, size: 'sm', delay: 6 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', left: '58%', speed: 1.9, size: 'sm', delay: 7 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL', left: '66%', speed: 2.1, size: 'sm', delay: 8 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB', left: '74%', speed: 2.3, size: 'sm', delay: 9 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', left: '82%', speed: 1.7, size: 'sm', delay: 10 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker', left: '90%', speed: 2.4, size: 'sm', delay: 11 },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind', left: '98%', speed: 1.8, size: 'sm', delay: 12 },
    ];

    const initialPositions: IconPosition[] = techIcons.map((tech, index) => ({
      id: index,
      top: Math.random() * 100,
      left: tech.left,
      icon: tech.icon,
      name: tech.name,
      speed: tech.speed,
      size: tech.size,
      wave: Math.random() * 10
    }));

    setIconPositions(initialPositions);
  }, []);

  // Animación de caída
  useEffect(() => {
    const interval = setInterval(() => {
      setIconPositions(prev => 
        prev.map(icon => {
          const newTop = icon.top + (icon.speed * 0.3);
          
          if (newTop > 110) {
            return {
              ...icon,
              top: -10 - (Math.random() * 20),
              left: `${Math.random() * 100}%`,
              speed: 1.2 + Math.random() * 1.8,
              wave: Math.random() * 10
            };
          }
          
          return {
            ...icon,
            top: newTop
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      {iconPositions.map((icon) => {
        const waveEffect = Math.sin(Date.now() * 0.002 + icon.wave) * 3;
        const mouseEffect = mousePosition.x * 0.1;
        
        return (
          <div
            key={icon.id}
            className="absolute w-5 h-5 md:w-6 md:h-6 opacity-20"
            style={{
              left: icon.left,
              top: `${icon.top}%`,
              transform: `translateX(${waveEffect + mouseEffect}px) rotate(${icon.top * 0.2}deg)`,
              transition: 'top 0.03s linear, transform 0.1s ease-out',
              filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))',
              willChange: 'top, transform'
            }}
          >
            <img 
              src={icon.icon}
              alt={icon.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechRain;