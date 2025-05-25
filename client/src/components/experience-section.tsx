import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { HardHat, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const responsibilities = [
    {
      text: t('experience.resp1'),
      color: 'text-secondary-green'
    },
    {
      text: t('experience.resp2'),
      color: 'text-secondary-green'
    },
    {
      text: t('experience.resp3'),
      color: 'text-secondary-green'
    },
    {
      text: t('experience.resp4'),
      color: 'text-secondary-green'
    },
    {
      text: t('experience.resp5'),
      color: 'text-secondary-green'
    },
    {
      text: t('experience.resp6'),
      color: 'text-primary-blue'
    },
    {
      text: t('experience.resp7'),
      color: 'text-primary-blue'
    },
    {
      text: t('experience.resp8'),
      color: 'text-primary-blue'
    },
    {
      text: t('experience.resp9'),
      color: 'text-primary-blue'
    },
    {
      text: t('experience.resp10'),
      color: 'text-primary-blue'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-surface p-8 border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary-green rounded-lg flex items-center justify-center">
                    <HardHat className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">{t('experience.company')}</h3>
                  <p className="text-secondary-green font-medium mb-2">{t('experience.position')}</p>
                  <p className="text-muted mb-6">{t('experience.period')}</p>
                  
                  <h4 className="font-semibold mb-4 text-slate-100">{t('experience.responsibilities')}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {responsibilities.slice(0, 5).map((responsibility, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className={`${responsibility.color} mt-1 flex-shrink-0 w-4 h-4`} />
                          <span className="text-sm text-slate-300">{responsibility.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {responsibilities.slice(5).map((responsibility, index) => (
                        <div key={index + 5} className="flex items-start space-x-3">
                          <CheckCircle className={`${responsibility.color} mt-1 flex-shrink-0 w-4 h-4`} />
                          <span className="text-sm text-slate-300">{responsibility.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
