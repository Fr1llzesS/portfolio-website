import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface SectionBackgroundProps {
  imageSrc: string;
  opacity?: number;
  className?: string;
}

export default function SectionBackground({ 
  imageSrc, 
  opacity = 0.1, 
  className = "" 
}: SectionBackgroundProps) {
  const [showImage, setShowImage] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasShown = useRef(false);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const section = currentElement.closest('section');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setShowImage(true);
          hasShown.current = true;
		  observer.disconnect(); // Отключаем после первого показа
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '0px'
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Принудительно сохраняем изображение видимым после первого показа
  useEffect(() => {
    if (hasShown.current) {
      setShowImage(true);
    }
  });
  
  return (
    <motion.div 
      ref={elementRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showImage ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{ 
        // Принудительное сохранение в DOM
        display: 'block',
        visibility: showImage ? 'visible' : 'hidden'
      }}
    >
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          opacity: opacity,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/20 to-dark-900/40" />
    </motion.div>
  );
}