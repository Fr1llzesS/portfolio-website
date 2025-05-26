import { motion } from 'framer-motion';

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
  
  return (
    <motion.div 
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }} // изменено с true на false
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