import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.education': 'Образование',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.position': 'Маркшейдер',
    'hero.description': 'Горный инженер-маркшейдер с опытом работы 1+ год в области маркшейдерского обеспечения горных работ',
    'hero.contact': 'Связаться со мной',
    'hero.download': 'Скачать PDF',
    'hero.age': 'лет',
    'hero.experience': 'год опыта',
    'hero.grade': 'средний балл',
    
    // About Section
    'about.title': 'Обо мне',
    'about.qualities': 'Профессиональные качества',
    'about.languages': 'Языки',
    'about.contact_info': 'Контактная информация',
    'about.responsibility': 'Ответственность',
    'about.punctuality': 'Пунктуальность',
    'about.stress_resistance': 'Стрессоустойчивость',
    'about.tact': 'Тактичность',
    'about.communication': 'Коммуникабельность',
    'about.attention': 'Внимательность',
    'about.russian': 'Русский',
    'about.english': 'Английский',
    'about.german': 'Немецкий',
    'about.native': 'Родной',
    'about.advanced': 'Advanced C1',
    'about.elementary': 'Elementary A1',
    'about.location': 'г. Хабаровск',
    
    // Education Section
    'education.title': 'Образование',
    'education.college': 'Хабаровский Технический Колледж',
    'education.major': 'Маркшейдерское дело',
    'education.form': '2025 • Очная форма обучения',
    'education.specialization': 'Специализация:',
    'education.engineer': 'Горный инженер-маркшейдер',
    
    // Skills Section
    'skills.title': 'Профессиональные навыки',
    'skills.technical': 'Технические навыки',
    'skills.academic': 'Академические достижения',
    'skills.confident': 'Уверенный',
    'skills.advanced': 'Продвинутый',
    'skills.expert': 'Эксперт',
    'skills.surveying_support': 'Маркшейдерское обеспечение ведения горных работ',
    'skills.geological_worker': 'Горнорабочий на геологических работах',
    'skills.geology': 'Геология',
    'skills.practice': 'Учебная практика (все виды)',
    'skills.topographic': 'Топографо-геодезические изыскания',
    'skills.engineering_graphics': 'Инженерная графика',
    'skills.technical_mechanics': 'Техническая механика',
    
    // Experience Section
    'experience.title': 'Опыт работы',
    'experience.company': 'ООО "Кутынская Горно-Геологическая Компания"',
    'experience.position': 'Горнорабочий на маркшейдерских работах 3 разряда',
    'experience.period': '24.01.2024 - настоящее время (1+ год)',
    'experience.responsibilities': 'Основные обязанности и достижения:',
    'experience.resp1': 'Маркшейдерские работы и вычисления по созданию опорной сети',
    'experience.resp2': 'Съемки и замеры горных выработок',
    'experience.resp3': 'Камеральная обработка материалов съемок',
    'experience.resp4': 'Выполнение привязки проектов горных выработок',
    'experience.resp5': 'Маркшейдерское сопровождение БВР/СЭР',
    'experience.resp6': 'Ведение производственной и отчетной документации',
    'experience.resp7': 'Определение и учет объемов выполненных горных работ',
    'experience.resp8': 'Мониторинг и контроль сдвижений горных пород',
    'experience.resp9': 'Деформации зданий и сооружений',
    'experience.resp10': 'Контроль соблюдения правил учета и хранения материалов',
    
    // Contact Section
    'contact.title': 'Контакты',
    'contact.reach_out': 'Свяжитесь со мной',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.location': 'Местоположение',
    'contact.ready': 'Готов к сотрудничеству',
    'contact.description': 'Открыт для новых возможностей в области маркшейдерского дела и горно-геологических изысканий. Готов к командировкам и работе в различных условиях.',
    'contact.send_message': 'Отправить сообщение',
    'contact.name': 'Имя',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.name_placeholder': 'Ваше имя',
    'contact.email_placeholder': 'your.email@example.com',
    'contact.subject_placeholder': 'Тема сообщения',
    'contact.message_placeholder': 'Ваше сообщение...',
    'contact.send': 'Отправить сообщение',
    'contact.sending': 'Отправка...',
    'contact.success_title': 'Сообщение отправлено!',
    'contact.success_message': 'Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.',
    'contact.error_title': 'Ошибка отправки',
    'contact.error_message': 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.',
    'contact.validation_title': 'Заполните все поля',
    'contact.validation_message': 'Пожалуйста, заполните все обязательные поля формы.',
    
    // Footer
    'footer.copyright': '© 2025 Курдюмов Вячеслав Борисович. Все права защищены.',
    'footer.subtitle': 'Маркшейдер • Горный инженер • Хабаровск',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.position': 'Mine Surveyor',
    'hero.description': 'Mining engineer-surveyor with 1+ years of experience in mine surveying support for mining operations',
    'hero.contact': 'Contact Me',
    'hero.download': 'Download PDF',
    'hero.age': 'years old',
    'hero.experience': 'year experience',
    'hero.grade': 'average grade',
    
    // About Section
    'about.title': 'About Me',
    'about.qualities': 'Professional Qualities',
    'about.languages': 'Languages',
    'about.contact_info': 'Contact Information',
    'about.responsibility': 'Responsibility',
    'about.punctuality': 'Punctuality',
    'about.stress_resistance': 'Stress Resistance',
    'about.tact': 'Tact',
    'about.communication': 'Communication',
    'about.attention': 'Attention to Detail',
    'about.russian': 'Russian',
    'about.english': 'English',
    'about.german': 'German',
    'about.native': 'Native',
    'about.advanced': 'Advanced C1',
    'about.elementary': 'Elementary A1',
    'about.location': 'Khabarovsk, Russia',
    
    // Education Section
    'education.title': 'Education',
    'education.college': 'Khabarovsk Technical College',
    'education.major': 'Mine Surveying',
    'education.form': '2025 • Full-time study',
    'education.specialization': 'Specialization:',
    'education.engineer': 'Mining Engineer-Surveyor',
    
    // Skills Section
    'skills.title': 'Professional Skills',
    'skills.technical': 'Technical Skills',
    'skills.academic': 'Academic Achievements',
    'skills.confident': 'Proficient',
    'skills.advanced': 'Advanced',
    'skills.expert': 'Expert',
    'skills.surveying_support': 'Mine surveying support for mining operations',
    'skills.geological_worker': 'Mine worker in geological operations',
    'skills.geology': 'Geology',
    'skills.practice': 'Practical training (all types)',
    'skills.topographic': 'Topographic and geodetic surveys',
    'skills.engineering_graphics': 'Engineering graphics',
    'skills.technical_mechanics': 'Technical mechanics',
    
    // Experience Section
    'experience.title': 'Work Experience',
    'experience.company': 'LLC "Kutynskaya Mining and Geological Company"',
    'experience.position': 'Mine worker in surveying operations, 3rd grade',
    'experience.period': '24.01.2024 - present (1+ year)',
    'experience.responsibilities': 'Key responsibilities and achievements:',
    'experience.resp1': 'Mine surveying work and calculations for creating reference networks',
    'experience.resp2': 'Surveys and measurements of mine workings',
    'experience.resp3': 'Office processing of survey materials',
    'experience.resp4': 'Executing tie-in of mine working projects',
    'experience.resp5': 'Mine surveying support for blasting/excavation operations',
    'experience.resp6': 'Maintaining production and reporting documentation',
    'experience.resp7': 'Determining and accounting volumes of completed mining work',
    'experience.resp8': 'Monitoring and controlling rock mass movements',
    'experience.resp9': 'Building and structure deformations',
    'experience.resp10': 'Ensuring compliance with material accounting and storage rules',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.reach_out': 'Get in Touch',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.ready': 'Ready for Collaboration',
    'contact.description': 'Open to new opportunities in mine surveying and geological exploration. Ready for business trips and work in various conditions.',
    'contact.send_message': 'Send Message',
    'contact.name': 'Name',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.name_placeholder': 'Your name',
    'contact.email_placeholder': 'your.email@example.com',
    'contact.subject_placeholder': 'Message subject',
    'contact.message_placeholder': 'Your message...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success_title': 'Message sent!',
    'contact.success_message': 'Thank you for your message. I will contact you soon.',
    'contact.error_title': 'Sending error',
    'contact.error_message': 'An error occurred while sending the message. Please try again.',
    'contact.validation_title': 'Fill all fields',
    'contact.validation_message': 'Please fill all required form fields.',
    
    // Footer
    'footer.copyright': '© 2025 Vyacheslav Kurdyumov. All rights reserved.',
    'footer.subtitle': 'Mine Surveyor • Mining Engineer • Khabarovsk',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('ru');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['ru', 'en'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}