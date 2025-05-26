import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({ id, children, className = "py-16" }: AnimatedSectionProps) {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Более плавная анимация для любого движения по странице
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [30, 0, 0, -30]);
  
  // Применяем spring для еще более плавной анимации
  const smoothY = useSpring(y, { stiffness: 50, damping: 15 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 15 });
  
  return (
    <section id={id} ref={sectionRef} className={`${className} relative`}>
      <motion.div
        style={{ 
          opacity: smoothOpacity,
          y: smoothY,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}