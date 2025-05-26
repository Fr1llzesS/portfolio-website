import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Устанавливаем isInView в true когда секция входит в область просмотра
        // и НЕ сбрасываем в false когда выходит
        if (entry.isIntersecting) {
          setIsInView(true);
        }
        // Убираем часть, которая сбрасывала состояние обратно в false
      },
      { 
        threshold: 0.1, // Срабатывает когда 10% секции видно
        rootMargin: '50px' // Добавляем отступ для более раннего срабатывания
      }
    );

    // Находим родительскую секцию для наблюдения
    const currentElement = document.querySelector(`[style*="${imageSrc}"]`)?.closest('section');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [imageSrc]);
  
  return (
    <motion.div 
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }} // Используем animate вместо whileInView
      transition={{ duration: 1 }}
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