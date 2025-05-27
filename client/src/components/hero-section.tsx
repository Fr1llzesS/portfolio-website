import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import resumePDF from "@/assets/documents/resume.pdf?url";
import AnimatedBackground from './animated-background';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Kurdjumov_Vjacheslav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg pt-16 relative">
      {/* Анимированный фон с соединяющимися точками */}
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Professional avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary-green flex items-center justify-center text-4xl font-bold">
            В.К.
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Курдюмов Вячеслав</span><br />
            <span className="text-slate-300">Борисович</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-mono text-muted mb-6">{t('hero.position')}</h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t('hero.contact')}
            </Button>
            <Button 
              onClick={handleDownloadPDF}
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              {t('hero.download')}
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-blue">19</div>
              <div className="text-sm text-muted">{t('hero.age')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-green">1+</div>
              <div className="text-sm text-muted">{t('hero.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-blue">5.0</div>
              <div className="text-sm text-muted">{t('hero.grade')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}