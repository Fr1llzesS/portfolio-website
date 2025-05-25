import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  CheckSquare, 
  Clock, 
  Shield, 
  Handshake, 
  MessageCircle, 
  Eye,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function AboutSection() {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const qualities = [
    { icon: CheckSquare, label: 'Ответственность', color: 'text-primary-blue' },
    { icon: Clock, label: 'Пунктуальность', color: 'text-secondary-green' },
    { icon: Shield, label: 'Стрессоустойчивость', color: 'text-primary-blue' },
    { icon: Handshake, label: 'Тактичность', color: 'text-secondary-green' },
    { icon: MessageCircle, label: 'Коммуникабельность', color: 'text-primary-blue' },
    { icon: Eye, label: 'Внимательность', color: 'text-secondary-green' },
  ];

  const languages = [
    { name: 'Русский', level: 'Родной', color: 'text-secondary-green' },
    { name: 'Английский', level: 'Advanced C1', color: 'text-primary-blue' },
    { name: 'Немецкий', level: 'Elementary A1', color: 'text-muted' },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Обо мне</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-100">Профессиональные качества</h3>
              <div className="grid grid-cols-2 gap-4">
                {qualities.map((quality, index) => {
                  const Icon = quality.icon;
                  return (
                    <Card key={index} className="bg-dark p-4 border-slate-700">
                      <Icon className={`w-5 h-5 ${quality.color} mb-2`} />
                      <div className="text-sm font-medium text-slate-100">{quality.label}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-100">Языки</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-slate-100">{language.name}</span>
                    <span className={`font-mono ${language.color}`}>{language.level}</span>
                  </div>
                ))}
              </div>
              
              <Card className="mt-8 p-6 bg-dark border-slate-700">
                <h4 className="font-semibold mb-3 text-slate-100">Контактная информация</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-slate-300">
                    <Phone className="w-4 h-4 text-primary-blue mr-3" />
                    <span>+7 (924) 100-55-42</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-4 h-4 text-secondary-green mr-3" />
                    <span>vkurdumov15@gmail.com</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <MapPin className="w-4 h-4 text-primary-blue mr-3" />
                    <span>г. Хабаровск</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
