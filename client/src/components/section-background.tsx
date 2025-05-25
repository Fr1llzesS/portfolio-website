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
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setLoaded(true);
    img.onerror = () => {
      // В случае ошибки, попробуем альтернативный путь
      console.log("Не удалось загрузить изображение:", imageSrc);
    };
  }, [imageSrc]);
  
  // Возвращаем только градиентный фон в случае ошибки загрузки
  if (!loaded) {
    return (
      <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
      </div>
    );
  }
  
  return (
    <motion.div 
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          opacity: opacity,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/95" />
    </motion.div>
  );
}