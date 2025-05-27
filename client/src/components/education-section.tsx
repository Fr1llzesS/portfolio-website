import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Eye, X, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import diplomaImage from '../assets/diploma.jpg'; // Поместите изображение диплома сюда

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

  // Функция для просмотра диплома
  const viewDiploma = () => {
    setShowDiploma(true);
  };

  const closeDiploma = () => {
    setShowDiploma(false);
  };

  return (
    <section id="education" className="py-20 bg-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          
          <div className="relative">
            {/* Основное образование - левая верхняя позиция */}
            <div className="w-full max-w-2xl">
              <Card className="bg-surface p-8 border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary-green rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-100">{t('education.college')}</h3>
                        <p className="text-secondary-green font-medium mb-2">{t('education.major')}</p>
                        <p className="text-muted mb-4">{t('education.form')}</p>
                      </div>
                      
                      {/* Кнопка просмотра диплома */}
                      <button
                        onClick={viewDiploma}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary-green hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        <Eye className="w-4 h-4" />
                        {t('education.view_diploma')}
                      </button>
                    </div>
                    
                    <Card className="bg-dark p-4">
                      <h4 className="font-medium mb-3 text-slate-100">{t('education.specialization')}</h4>
                      <p className="text-slate-300">{t('education.engineer')}</p>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>

            {/* Секция дополнительного образования - диагональное размещение */}
            <div className="mt-8 ml-auto max-w-3xl relative">
              {/* Декоративная линия */}
              <div className="absolute -top-4 -left-32 w-24 h-px bg-gradient-to-r from-transparent to-secondary-green transform rotate-45 hidden lg:block"></div>
              
              <Card className="bg-surface p-6 border-slate-700 transform lg:translate-x-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {t('education.additional_title')}
                  </h3>
                </div>

                {/* Диагональная сетка для содержимого */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Левая колонка - смещена вниз */}
                  <div className="space-y-4 lg:mt-8">
                    <h4 className="text-base font-medium text-slate-100 flex items-center gap-2">
                      <Award className="w-4 h-4 text-secondary-green" />
                      {t('education.additional_info')}
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-dark p-3 rounded-lg transform lg:-rotate-1">
                        <p className="text-sm text-slate-300">
                          <span className="text-secondary-green font-medium">{t('education.qualification')}:</span> {t('education.qualification_level')}
                        </p>
                      </div>
                      <div className="bg-dark p-3 rounded-lg transform lg:rotate-1">
                        <p className="text-sm text-slate-300">
                          <span className="text-secondary-green font-medium">{t('education.duration')}:</span> {t('education.study_duration')}
                        </p>
                      </div>
                      <div className="bg-dark p-3 rounded-lg transform lg:-rotate-1">
                        <p className="text-sm text-slate-300">
                          <span className="text-secondary-green font-medium">{t('education.graduation')}:</span> {t('education.graduation_year')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка - смещена вверх */}
                  <div className="space-y-4 lg:-mt-4">
                    <h4 className="text-base font-medium text-slate-100 flex items-center gap-2">
                      <Award className="w-4 h-4 text-secondary-green" />
                      {t('education.achievements')}
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-dark p-3 rounded-lg transform lg:rotate-1">
                        <p className="text-sm text-slate-300">{t('education.achievement_1')}</p>
                      </div>
                      <div className="bg-dark p-3 rounded-lg transform lg:-rotate-1">
                        <p className="text-sm text-slate-300">{t('education.achievement_2')}</p>
                      </div>
                      <div className="bg-dark p-3 rounded-lg transform lg:rotate-1">
                        <p className="text-sm text-slate-300">{t('education.achievement_3')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
              <div className="w-32 h-32 border border-secondary-green transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с дипломом */}
      {showDiploma && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Затемнение фона */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
            onClick={closeDiploma}
          />
          
          {/* Модальное окно */}
          <div className={`relative bg-slate-800 h-full w-2/5 min-w-[400px] shadow-2xl transform transition-transform duration-500 ease-out ${
            showDiploma ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Заголовок с кнопкой закрытия */}
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
            
            {/* Изображение диплома */}
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