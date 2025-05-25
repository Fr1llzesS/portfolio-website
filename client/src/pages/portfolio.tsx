import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/language-context";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function Portfolio() {
  const { t } = useLanguage();
  
  // Используем useRef для основных секций
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Определяем функцию для оборачивания секций в анимированные контейнеры
  const AnimatedSection = ({ children, id, ref }) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
    
    // Используем spring для более плавной анимации
    const smoothY = useSpring(y, { 
      stiffness: 50, // Более низкое значение для более плавной анимации
      damping: 20 
    });
    const smoothOpacity = useSpring(opacity, { 
      stiffness: 50, 
      damping: 20 
    });
    
    return (
      <section id={id} ref={ref} className="py-16">
        <motion.div
          style={{ 
            opacity: smoothOpacity,
            y: smoothY
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  };
  
  // Ваш оригинальный код Portfolio, обернутый в анимированные секции
  return (
    <div>
      {/* Здесь может быть ваша оригинальная Hero секция */}
      <HeroSection />
      
      {/* Обертываем существующие секции в анимированные контейнеры */}
      <AnimatedSection id="about" ref={aboutRef}>
        {/* Здесь вставьте ваш оригинальный код секции "Обо мне" */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            {t('sections.about.title')}
          </h2>
          
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Ответственный подход к работе, пунктуальность, стрессоустойчивость, 
              тактичность, коммуникабельность, внимательность, исполнительность, 
              решительность
            </p>
            {/* Остальное содержимое секции */}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="experience" ref={experienceRef}>
        {/* Здесь вставьте ваш оригинальный код секции "Опыт работы" */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            {t('sections.experience.title')}
          </h2>
          
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">ООО "Кутынская Горно-Геологическая Компания"</h3>
              <div className="text-sm text-slate-400 mb-2">24.01.2024 - настоящее время</div>
              <div className="font-medium mb-2">Горнорабочий на маркшейдерских работах 3 разряда</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Маркшейдерские работы и вычисления по созданию опорной сети, съемки и замеры горных выработок, камеральную обработку материалов съемок</li>
                <li>Выполнение привязки проектов горных выработок к условиям местности и перенос их в натуру</li>
                <li>Маркшейдерское сопровождение БВР/СЭР</li>
                <li>Ведение производственной и отчетной документации</li>
                <li>Определение и учет объемов выполненных горных работ</li>
                <li>Мониторинг и контроль сдвижений горных пород, деформацией зданий и сооружений</li>
                <li>Обеспечение и контроль соблюдения правил учета и хранения материалов маркшейдерских работ, законодательства в области геологического изучения недр, недропользования, охраны недр и окружающей среды</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="education" ref={educationRef}>
        {/* Здесь вставьте ваш оригинальный код секции "Образование" */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            {t('sections.education.title')}
          </h2>
          
          <div className="bg-surface p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-2">Хабаровский Технический Колледж</h3>
            <div className="mb-1">Маркшейдерское дело</div>
            <div className="mb-1">Горный инженер-маркшейдер</div>
            <div className="text-sm text-slate-400">2025 · Очная</div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Отметки по профильным предметам</h3>
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <ul className="space-y-2">
              <li>Маркшейдерское обеспечение ведения горных работ - 5</li>
              <li>Горнорабочий на геологических работах - 5 (квалиф. экзамен)</li>
              <li>Геология - 5</li>
              <li>Маркшейдерская/Геологическая/Геодезическая учебная практика - 5/5/5</li>
              <li>Топографо-геодезические изыскания - 5</li>
              <li>Инженерная графика - 5</li>
              <li>Техническая механика - 5</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="skills" ref={skillsRef}>
        {/* Здесь вставьте ваш оригинальный код секции "Навыки" */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            {t('sections.skills.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Профессиональные навыки</h3>
              <SkillBar name="Тахеометры/GNSS/Сканеры/Дроны" level={90} />
              <SkillBar name="Ведение горно-граф. документации" level={85} />
              <SkillBar name="Agiso Metashape" level={80} />
              <SkillBar name="Datamine Studio RM" level={75} />
              <SkillBar name="Autodesk Autocad" level={85} />
              <SkillBar name="Autodesk Civil 3D" level={80} />
              <SkillBar name="Microsoft Office (Word, Excel, PP)" level={90} />
            </div>
            
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Языки</h3>
              <SkillBar name="Русский (Родной)" level={100} />
              <SkillBar name="Английский (Advanced C1)" level={85} />
              <SkillBar name="Немецкий (Elementary A1)" level={40} />
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="contact" ref={contactRef}>
        {/* Здесь вставьте ваш оригинальный код секции "Контакты" */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            {t('sections.contact.title')}
          </h2>
          
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-blue/20 rounded-full mr-4">📞</div>
                    <div>
                      <div className="text-sm text-slate-400">Телефон</div>
                      <div>+7 (924) 100-55-42</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-blue/20 rounded-full mr-4">📧</div>
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div>vkurdumov15@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Связаться со мной</h3>
                <form>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 bg-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full p-3 bg-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      ></textarea>
                    </div>
                    <motion.button
                      className="w-full bg-primary-blue text-white py-3 rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Отправить
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

// Компонент для hero-секции с более плавной анимацией
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Более плавные и менее резкие эффекты
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  
  // Используем spring для еще более плавной анимации
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });

  return (
    <section 
      id="hero" 
      ref={ref} 
      className="h-screen flex items-center relative"
    >
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg" // Используйте реальное изображение вместо градиента
          alt="Фон"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/95" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Анимированный текст */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            style={{ 
              y: smoothY, 
              opacity: smoothOpacity
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Вячеслав Курдюмов
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-slate-300">
              Маркшейдер
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
              г. Хабаровск · 19 лет
            </p>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-blue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Связаться со мной
            </motion.button>
          </motion.div>
          
          {/* Анимированное изображение профиля */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            style={{ 
              opacity: smoothOpacity
            }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-blue/30 shadow-xl">
              <img 
                src="/assets/profile.jpg" // Замените на реальное фото
                alt="Вячеслав Курдюмов"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Индикатор прокрутки (более тонкая анимация) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="text-slate-400 text-sm text-center">Прокрутите вниз</div>
        <div className="mt-2 w-6 h-10 border-2 border-slate-400 rounded-full mx-auto">
          <motion.div 
            className="w-2 h-2 bg-slate-400 rounded-full mx-auto mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Компонент для отображения навыков с анимированным прогресс-баром
function SkillBar({ name, level }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const width = useTransform(scrollYProgress, [0, 1], [0, level]);
  const smoothWidth = useSpring(width, { stiffness: 30, damping: 15 });
  
  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full"
          style={{ width: smoothWidth.interpolate(v => `${v}%`) }}
        />
      </div>
    </div>
  );
}

export default Portfolio;
