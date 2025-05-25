import { motion } from 'framer-motion';
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import AnimatedBackground from "@/components/animated-background";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-dark text-slate-50 relative">
      {/* Анимированный фон для всей страницы */}
      <AnimatedBackground />
      
      <Navigation />
      
      {/* Главная секция без обертки для плавной анимации, так как у нее уже есть свой стиль */}
      <HeroSection />
      
      {/* Обертываем каждую секцию в AnimatedSection для плавной анимации */}
      <AnimatedSection id="about">
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection id="education">
        <EducationSection />
      </AnimatedSection>
      
      <AnimatedSection id="skills">
        <SkillsSection />
      </AnimatedSection>
      
      <AnimatedSection id="experience">
        <ExperienceSection />
      </AnimatedSection>
      
      <AnimatedSection id="contact">
        <ContactSection />
      </AnimatedSection>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}