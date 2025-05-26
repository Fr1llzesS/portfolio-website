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
  const [showImage, setShowImage] = useState(false);
  
  useEffect(() => {
    // Простая задержка перед показом изображения
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div 
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showImage ? 1 : 0 }}
      transition={{ duration: 1.5 }}
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