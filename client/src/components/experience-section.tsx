import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { HardHat, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);

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
      text: 'Маркшейдерские работы и вычисления по созданию опорной сети',
      color: 'text-secondary-green'
    },
    {
      text: 'Съемки и замеры горных выработок',
      color: 'text-secondary-green'
    },
    {
      text: 'Камеральная обработка материалов съемок',
      color: 'text-secondary-green'
    },
    {
      text: 'Выполнение привязки проектов горных выработок',
      color: 'text-secondary-green'
    },
    {
      text: 'Маркшейдерское сопровождение БВР/СЭР',
      color: 'text-secondary-green'
    },
    {
      text: 'Ведение производственной и отчетной документации',
      color: 'text-primary-blue'
    },
    {
      text: 'Определение и учет объемов выполненных горных работ',
      color: 'text-primary-blue'
    },
    {
      text: 'Мониторинг и контроль сдвижений горных пород',
      color: 'text-primary-blue'
    },
    {
      text: 'Деформации зданий и сооружений',
      color: 'text-primary-blue'
    },
    {
      text: 'Контроль соблюдения правил учета и хранения материалов',
      color: 'text-primary-blue'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Опыт работы</span>
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
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">ООО "Кутынская Горно-Геологическая Компания"</h3>
                  <p className="text-secondary-green font-medium mb-2">Горнорабочий на маркшейдерских работах 3 разряда</p>
                  <p className="text-muted mb-6">24.01.2024 - настоящее время (1+ год)</p>
                  
                  <h4 className="font-semibold mb-4 text-slate-100">Основные обязанности и достижения:</h4>
                  
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
