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
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Функция для определения текущей активной секции
    const getCurrentSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          return sectionElement.id;
        }
      }
      return null;
    };
    
    // Функция для определения ID секции этого компонента
    const getMySection = () => {
      if (elementRef.current) {
        const section = elementRef.current.closest('section[id]');
        return section?.id || null;
      }
      return null;
    };
    
    const handleScroll = () => {
      const activeSection = getCurrentSection();
      const mySection = getMySection();
      
      if (activeSection === mySection) {
        // Пользователь находится в моей секции - показываем изображение
        setShowImage(true);
        setCurrentSection(activeSection);
        
        // Отменяем таймер скрытия, если он был запущен
        if (hideTimer) {
          clearTimeout(hideTimer);
          setHideTimer(null);
        }
      } else if (currentSection === mySection && activeSection !== mySection) {
        // Пользователь покинул мою секцию - запускаем таймер на 7 секунд
        const timer = setTimeout(() => {
          setShowImage(false);
          setHideTimer(null);
        }, 7000);
        
        setHideTimer(timer);
        setCurrentSection(activeSection);
      }
    };
    
    // Первоначальная проверка при загрузке
    handleScroll();
    
    // Слушаем события прокрутки
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [currentSection, hideTimer]);
  
  return (
    <motion.div 
      ref={elementRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showImage ? 1 : 0 }}
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