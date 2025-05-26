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
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const checkSectionVisibility = () => {
      if (!elementRef.current) return false;
      
      const section = elementRef.current.closest('section');
      if (!section) return false;
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Вычисляем, какая часть секции видна
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const sectionHeight = rect.height;
      
      // Процент видимой части секции
      const visibilityPercentage = (visibleHeight / sectionHeight) * 100;
      
      return visibilityPercentage >= 40;
    };
    
    const handleVisibilityChange = () => {
      const isVisible = checkSectionVisibility();
      
      if (isVisible) {
        // Секция видна на 40% или больше - показываем изображение
        setShowImage(true);
        
        // Отменяем таймер скрытия, если он был запущен
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
      } else {
        // Секция видна меньше чем на 40% - запускаем таймер скрытия на 7 секунд
        if (showImage && !hideTimeoutRef.current) {
          hideTimeoutRef.current = setTimeout(() => {
            // Дополнительная проверка перед скрытием
            if (!checkSectionVisibility()) {
              setShowImage(false);
            }
            hideTimeoutRef.current = null;
          }, 7000);
        }
      }
    };
    
    // Первоначальная проверка
    handleVisibilityChange();
    
    // Оптимизированное отслеживание прокрутки
    let animationFrameId: number;
    const throttledCheck = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleVisibilityChange);
    };
    
    window.addEventListener('scroll', throttledCheck, { passive: true });
    window.addEventListener('resize', throttledCheck, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledCheck);
      window.removeEventListener('resize', throttledCheck);
      cancelAnimationFrame(animationFrameId);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [showImage]);
  
  return (
    <motion.div 
      ref={elementRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showImage ? 1 : 0 }}
      transition={{ duration: 0.8 }}
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