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
  const hasBeenShown = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Показываем изображение когда секция становится видимой
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setShowImage(true);
          hasBeenShown.current = true;
        }
      },
      { 
        threshold: [0.1, 0.3, 0.5], // Множественные пороги
        rootMargin: '0px' // Без дополнительных отступов
      }
    );

    // Наблюдаем за родительской секцией
    const parentSection = elementRef.current?.closest('section');
    if (parentSection) {
      observer.observe(parentSection);
    }

    return () => observer.disconnect();
  }, []);
  
  // Отдельная логика для предотвращения исчезновения
  useEffect(() => {
    // Если изображение уже было показано, принудительно оставляем его видимым
    if (hasBeenShown.current) {
      setShowImage(true);
    }
  }, [showImage]);
  
  return (
    <motion.div 
      ref={elementRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showImage ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{ 
        // Принудительно сохраняем изображение в DOM
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