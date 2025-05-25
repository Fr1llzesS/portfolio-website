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
      {/* Анимированный фон только для первого экрана */}
      <div className="absolute inset-0 z-0 h-screen overflow-hidden">
        <AnimatedBackground />
      </div>
      
      <Navigation />
      
      {/* Основные секции */}
      <HeroSection />
      
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <EducationSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}