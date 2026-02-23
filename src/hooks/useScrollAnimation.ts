// src/hooks/useScrollReveal.ts
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealProps {
  threshold?: number; // 0-1, qué tanto del componente debe ser visible
  rootMargin?: string;
}

export const useScrollReveal = ({
  threshold = 0.3,
  rootMargin = '0px'
}: UseScrollRevealProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualizar visibilidad basado en si está intersectando
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  // Clases para aparecer/desaparecer
  const revealClasses = `transition-all duration-700 ${
    isVisible 
      ? 'opacity-100 translate-y-0 scale-100 blur-0' 
      : 'opacity-0 translate-y-16 scale-95 blur-sm'
  }`;

  return {
    ref,
    isVisible,
    revealClasses,
  };
};