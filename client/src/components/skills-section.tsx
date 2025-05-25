import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Settings, TrendingUp } from "lucide-react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            setProgressValues({
              'tacheometers': 90,
              'metashape': 85,
              'datamine': 80,
              'autocad': 85,
              'civil3d': 75,
              'office': 95,
            });
          }, 200);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { 
      key: 'tacheometers',
      name: 'Тахеометры/GNSS/Сканеры/Дроны', 
      level: 'Уверенный',
      progress: 90 
    },
    { 
      key: 'metashape',
      name: 'Agiso Metashape', 
      level: 'Продвинутый',
      progress: 85 
    },
    { 
      key: 'datamine',
      name: 'Datamine Studio RM', 
      level: 'Продвинутый',
      progress: 80 
    },
    { 
      key: 'autocad',
      name: 'Autodesk AutoCAD', 
      level: 'Продвинутый',
      progress: 85 
    },
    { 
      key: 'civil3d',
      name: 'Autodesk Civil 3D', 
      level: 'Уверенный',
      progress: 75 
    },
    { 
      key: 'office',
      name: 'Microsoft Office (Word, Excel, PP)', 
      level: 'Эксперт',
      progress: 95 
    },
  ];

  const academicSubjects = [
    'Маркшейдерское обеспечение ведения горных работ',
    'Горнорабочий на геологических работах',
    'Геология',
    'Учебная практика (все виды)',
    'Топографо-геодезические изыскания',
    'Инженерная графика',
    'Техническая механика',
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Профессиональные навыки</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="bg-dark p-6 border-slate-700">
              <h3 className="text-xl font-semibold mb-6 text-slate-100 flex items-center">
                <Settings className="w-5 h-5 text-primary-blue mr-2" />
                Технические навыки
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.key} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-100">{skill.name}</span>
                      <span className="text-secondary-green font-mono text-sm">{skill.level}</span>
                    </div>
                    <Progress 
                      value={progressValues[skill.key] || 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Academic Performance */}
            <Card className="bg-dark p-6 border-slate-700">
              <h3 className="text-xl font-semibold mb-6 text-slate-100 flex items-center">
                <TrendingUp className="w-5 h-5 text-secondary-green mr-2" />
                Академические достижения
              </h3>
              
              <div className="space-y-3">
                {academicSubjects.map((subject, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-surface rounded-lg border border-slate-700">
                    <span className="font-medium text-slate-100 text-sm">{subject}</span>
                    <Badge className="bg-secondary-green text-white font-bold">5</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
