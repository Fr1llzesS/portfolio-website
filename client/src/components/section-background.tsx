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
  const hasBeenActivated = useRef(false);
  const isCurrentlyInSection = useRef(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const checkIfInSection = () => {
      if (!elementRef.current) return false;
      
      const section = elementRef.current.closest('section');
      if (!section) return false;
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Секция считается активной, если любая её часть видна в viewport
      const isVisible = rect.top < viewportHeight && rect.bottom > 0;
      
      // Дополнительная проверка: секция занимает больше 20% экрана
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const isSignificantlyVisible = visibleHeight > viewportHeight * 0.2;
      
      return isVisible && isSignificantlyVisible;
    };
    
    const handleScroll = () => {
      const inSection = checkIfInSection();
      
      if (inSection) {
        // Пользователь в секции
        isCurrentlyInSection.current = true;
        hasBeenActivated.current = true;
        setShowImage(true);
        
        // Отменяем таймер скрытия, если он был запущен
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
      } else if (hasBeenActivated.current && isCurrentlyInSection.current) {
        // Пользователь покинул секцию, но изображение уже показывалось
        isCurrentlyInSection.current = false;
        
        // Запускаем таймер на 7 секунд
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }
        
        hideTimeout.current = setTimeout(() => {
          // Дополнительная проверка перед скрытием
          if (!checkIfInSection()) {
            setShowImage(false);
          }
          hideTimeout.current = null;
        }, 7000);
      }
    };
    
    // Первоначальная проверка
    handleScroll();
    
    // Слушаем прокрутку с throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);
  
  // Дополнительная защита от исчезновения
  useEffect(() => {
    if (hasBeenActivated.current && isCurrentlyInSection.current && !showImage) {
      // Если изображение должно быть видно, но по какой-то причине скрылось
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