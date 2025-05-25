// Импорты
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// HeroSection компонент
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            style={{ 
              y: smoothY, 
              opacity: smoothOpacity
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Вячеслав Курдюмов
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Маркшейдер
            </h2>
            <p className="text-slate-400 mb-8">
              г. Хабаровск · 19 лет
            </p>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary-blue text-white px-6 py-3 rounded-lg shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться со мной
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            style={{ opacity: smoothOpacity }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary-blue/30 shadow-xl">
              <img 
                src="/assets/profile.jpg"
                alt="Вячеслав Курдюмов"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// AboutSection компонент
function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });
  
  return (
    <section id="about" ref={ref} className="py-16">
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          О себе
        </h2>
        
        <div className="bg-surface p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Ответственный подход к работе, пунктуальность, стрессоустойчивость, 
            тактичность, коммуникабельность, внимательность, исполнительность, 
            решительность
          </p>
        </div>
      </motion.div>
    </section>
  );
}

// EducationSection компонент
function EducationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });
  
  return (
    <section id="education" ref={ref} className="py-16">
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Образование
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
          style={{ width: smoothWidth }}
        />
      </div>
    </div>
  );
}

// SkillsSection компонент
function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });
  
  return (
    <section id="skills" ref={ref} className="py-16">
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Навыки
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
      </motion.div>
    </section>
  );
}

// ExperienceSection компонент
function ExperienceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });
  
  return (
    <section id="experience" ref={ref} className="py-16">
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Опыт работы
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
      </motion.div>
    </section>
  );
}

// ContactSection компонент
function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });
  
  return (
    <section id="contact" ref={ref} className="py-16">
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Контакты
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
      </motion.div>
    </section>
  );
}

// Footer компонент
function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center text-slate-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Вячеслав Курдюмов. Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
}

// Navigation компонент (без изменений, но с небольшой анимацией)
function Navigation() {
  return (
    <nav className="bg-dark/80 backdrop-blur-md fixed w-full z-50 py-4 border-b border-slate-800">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold gradient-text">ВК</a>
          
          <ul className="hidden md:flex space-x-6">
            <li><a href="#hero" className="hover:text-primary-blue transition-colors">Главная</a></li>
            <li><a href="#about" className="hover:text-primary-blue transition-colors">О себе</a></li>
            <li><a href="#education" className="hover:text-primary-blue transition-colors">Образование</a></li>
            <li><a href="#skills" className="hover:text-primary-blue transition-colors">Навыки</a></li>
            <li><a href="#experience" className="hover:text-primary-blue transition-colors">Опыт</a></li>
            <li><a href="#contact" className="hover:text-primary-blue transition-colors">Контакты</a></li>
          </ul>
          
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-primary-blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

// Основной компонент Portfolio
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-dark text-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}