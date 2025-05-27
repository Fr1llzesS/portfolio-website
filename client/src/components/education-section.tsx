import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Eye, X, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import diplomaImage from '../assets/diploma.jpg';

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const viewDiploma = () => {
    setShowDiploma(true);
  };

  const closeDiploma = () => {
    setShowDiploma(false);
  };

  return (
    <section id="education" className="py-20 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          
          <div className="relative min-h-[600px]">
            {/* Первое окно - Колледж (верхний левый) */}
            <div className="absolute top-0 left-0 w-full max-w-md lg:max-w-lg z-10">
              <Card className="bg-surface p-6 lg:p-8 border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary-green rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col gap-4 mb-4">
                      <div>
                        <h3 className="text-lg lg:text-xl font-semibold mb-2 text-slate-100">{t('education.college')}</h3>
                        <p className="text-secondary-green font-medium mb-2 text-sm lg:text-base">{t('education.major')}</p>
                        <p className="text-muted mb-4 text-sm">{t('education.form')}</p>
                      </div>
                      
                      {/* Кнопка просмотра диплома */}
                      <button
                        onClick={viewDiploma}
                        className="flex items-center gap-2 px-3 py-2 bg-secondary-green hover:bg-green-600 text-white rounded-lg transition-colors text-xs font-medium whitespace-nowrap self-start"
                      >
                        <Eye className="w-4 h-4" />
                        {t('education.view_diploma')}
                      </button>
                    </div>
                    
                    <Card className="bg-dark p-4">
                      <h4 className="font-medium mb-3 text-slate-100 text-sm">{t('education.specialization')}</h4>
                      <p className="text-slate-300 text-sm">{t('education.engineer')}</p>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>

            {/* Второе окно - ВУЗ (нижний центр) */}
            <div className="absolute top-48 left-1/2 transform -translate-x-1/2 lg:top-64 lg:left-80 lg:translate-x-0 w-full max-w-md lg:max-w-lg z-10">
              <Card className="bg-surface p-6 lg:p-8 border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary-green rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-lg lg:text-xl font-semibold mb-2 text-slate-100">{t('education.university')}</h3>
                      <p className="text-secondary-green font-medium mb-2 text-sm lg:text-base">{t('education.university_major')}</p>
                      <p className="text-muted mb-4 text-sm">{t('education.university_form')}</p>
                    </div>
                    
                    <Card className="bg-dark p-4">
                      <h4 className="font-medium mb-3 text-slate-100 text-sm">{t('education.university_specialization')}</h4>
                      <p className="text-slate-300 text-sm">{t('education.university_degree')}</p>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>

            {/* Третье окно - Дополнительное образование (правый верх) */}
            <div className="absolute top-0 right-0 w-full max-w-xs lg:max-w-sm z-10 mt-96 lg:mt-0">
              <Card className="bg-surface p-4 lg:p-6 border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <h3 className="text-sm lg:text-lg font-semibold text-slate-100">
                    {t('education.additional_education')}
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Курсы и сертификации */}
                  <div>
                    <h4 className="text-xs lg:text-sm font-medium text-slate-100 flex items-center gap-2 mb-3">
                      <Award className="w-3 h-3 lg:w-4 lg:h-4 text-secondary-green" />
                      {t('education.courses_certifications')}
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-dark p-2 lg:p-3 rounded-lg">
                        <p className="text-xs text-slate-300">{t('education.course_1')}</p>
                      </div>
                      <div className="bg-dark p-2 lg:p-3 rounded-lg">
                        <p className="text-xs text-slate-300">{t('education.course_2')}</p>
                      </div>
                      <div className="bg-dark p-2 lg:p-3 rounded-lg">
                        <p className="text-xs text-slate-300">{t('education.course_3')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Профессиональное развитие */}
                  <div>
                    <h4 className="text-xs lg:text-sm font-medium text-slate-100 flex items-center gap-2 mb-3">
                      <Award className="w-3 h-3 lg:w-4 lg:h-4 text-secondary-green" />
                      {t('education.professional_development')}
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-dark p-2 lg:p-3 rounded-lg">
                        <p className="text-xs text-slate-300">{t('education.development_1')}</p>
                      </div>
                      <div className="bg-dark p-2 lg:p-3 rounded-lg">
                        <p className="text-xs text-slate-300">{t('education.development_2')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с дипломом */}
      {showDiploma && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div 
            className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
            onClick={closeDiploma}
          />
          
          <div className={`relative bg-slate-800 h-full w-2/5 min-w-[400px] shadow-2xl transform transition-transform duration-500 ease-out ${
            showDiploma ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="text-lg font-semibold text-white">
                {t('education.diploma_title')}
              </h3>
              <button
                onClick={closeDiploma}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400 hover:text-white" />
              </button>
            </div>
            
            <div className="p-4 h-full overflow-auto">
              <div className="bg-white rounded-lg p-4">
                <img
                  src={diplomaImage}
                  alt="Диплом об образовании"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}