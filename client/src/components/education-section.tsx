import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Eye, X, BookOpen, Calendar, MapPin } from "lucide-react";
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
    <section id="education" className="py-20 bg-dark relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-secondary-green rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-24 bg-gradient-to-b from-secondary-green to-transparent rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-primary to-transparent -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          
          {/* Новая сетка без absolute позиционирования */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Первая карточка - Колледж (БЕЗ ЗВЕЗД) */}
            <div className="w-full">
              <Card className="bg-surface p-8 border-slate-700 shadow-2xl hover:shadow-secondary-green/10 transition-all duration-300 h-full">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary-green rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-100">{t('education.college')}</h3>
                          {/* ЗВЕЗДЫ УБРАНЫ */}
                        </div>
                        <p className="text-secondary-green font-semibold mb-3 text-lg">{t('education.major')}</p>
                        <div className="flex items-center gap-4 text-slate-400 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{t('education.form')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">Хабаровск</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Кнопка просмотра диплома */}
                      <button
                        onClick={viewDiploma}
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary-green to-green-600 hover:from-green-600 hover:to-secondary-green text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 self-start"
                      >
                        <Eye className="w-5 h-5" />
                        {t('education.view_diploma')}
                      </button>
                    </div>
                    
                    <Card className="bg-slate-900 p-6 mt-6 border-slate-800">
                      <h4 className="font-semibold mb-4 text-slate-100 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                        {t('education.specialization')}
                      </h4>
                      <p className="text-slate-300 text-base leading-relaxed">{t('education.engineer')}</p>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>

            {/* Вторая карточка - ВУЗ */}
            <div className="w-full">
              <Card className="bg-surface p-8 border-slate-700 shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-100">{t('education.university')}</h3>
                        <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                          Планируется
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-slate-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">2025-....</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Очнвя форма</span>
                        </div>
                      </div>
                    </div>
                    
                    <Card className="bg-slate-900 p-6 border-slate-800">
                      <h4 className="font-semibold mb-4 text-slate-100 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {t('education.university_specialization')}
                      </h4>
                      <div className="text-slate-400 text-base leading-relaxed">
                        <p className="mb-2">Будет определена при поступлении</p>
                        <p className="text-sm">Планируется поступление на специализацию ОГР</p>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>

            {/* Третья карточка - Дополнительное образование (на всю ширину) */}
            <div className="lg:col-span-2">
              <Card className="bg-surface p-6 border-slate-700 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-100">
                      {t('education.additional_education')}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">Курсы и сертификации</p>
                  </div>
                </div>

                {/* Пустое содержимое с красивым оформлением */}
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-5 h-5 text-slate-400" />
                    </div>
                    <p className="text-slate-400 text-xs">
                      Содержимое будет добавлено
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Курсы, сертификаты, дополнительные квалификации
                    </p>
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
            className="absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-300"
            onClick={closeDiploma}
          />
          
          <div className={`relative bg-slate-800 h-full w-2/5 min-w-[400px] shadow-2xl transform transition-transform duration-500 ease-out ${
            showDiploma ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-900">
              <h3 className="text-xl font-bold text-white">
                {t('education.diploma_title')}
              </h3>
              <button
                onClick={closeDiploma}
                className="p-3 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-slate-400 hover:text-white" />
              </button>
            </div>
            
            <div className="p-6 h-full overflow-auto">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
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