import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Образование</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-surface p-8 border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary-green rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">Хабаровский Технический Колледж</h3>
                  <p className="text-secondary-green font-medium mb-2">Маркшейдерское дело</p>
                  <p className="text-muted mb-4">2025 • Очная форма обучения</p>
                  
                  <Card className="bg-dark p-4">
                    <h4 className="font-medium mb-3 text-slate-100">Специализация:</h4>
                    <p className="text-slate-300">Горный инженер-маркшейдер</p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
