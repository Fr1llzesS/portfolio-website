import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/language-context";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

function Portfolio() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-dark text-white">
      {/* Секция Hero с анимацией при прокрутке */}
      <HeroSection />
      
      {/* Секция About с эффектом появления */}
      <AboutSection />
      
      {/* Секция Skills с эффектом прилипания и прогрессивной анимацией */}
      <SkillsSection />
      
      {/* Секция Experience с эффектом появления элементов */}
      <ExperienceSection />
      
      {/* Секция Education с параллакс-эффектом */}
      <EducationSection />
      
      {/* Секция Contact с анимированной формой */}
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Плавное движение элементов при прокрутке
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  // Для более плавной анимации используем spring
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section 
      id="hero" 
      ref={ref} 
      className="h-screen flex items-center relative overflow-hidden"
    >
      {/* Фоновое изображение с параллакс-эффектом */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-slate-950 to-slate-900" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Анимированный текст */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            style={{ 
              y: smoothY, 
              opacity: smoothOpacity,
              scale: smoothScale
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Вячеслав Курдюмов
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-slate-300">
              Маркшейдер
            </h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Опыт работы в горно-геологической сфере. Специализация на маркшейдерских работах и геодезических изысканиях.
            </p>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-blue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться со мной
            </motion.button>
          </motion.div>
          
          {/* Анимированное изображение или 3D модель */}
          <motion.div 
            className="md:w-1/2"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, 100]),
              opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0]),
              rotateY: useTransform(scrollYProgress, [0, 1], [0, 45]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 0.9])
            }}
          >
            {/* Здесь может быть ваше фото, 3D модель или иллюстрация */}
            <div className="w-full h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
      
      {/* Индикатор прокрутки */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="text-slate-400 text-sm text-center">Прокрутите вниз</div>
        <div className="mt-2 w-6 h-10 border-2 border-slate-400 rounded-full mx-auto">
          <motion.div 
            className="w-2 h-2 bg-slate-400 rounded-full mx-auto mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Элементы появляются по очереди при прокрутке
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  // Анимация движения
  const titleY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  
  return (
    <section id="about" ref={ref} className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Обо мне
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            style={{ opacity: textOpacity, y: textY }}
          >
            <p className="text-lg mb-6 text-slate-300">
              Я специалист в области маркшейдерии с опытом работы в горно-геологической сфере. Моя профессиональная деятельность связана с геодезическими изысканиями, расчетами и анализом данных для обеспечения безопасного и эффективного проведения горных работ.
            </p>
            <p className="text-lg text-slate-300">
              Имею опыт работы с современным оборудованием и программным обеспечением для маркшейдерских работ. Постоянно совершенствую свои навыки и следую за новыми тенденциями в отрасли.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-10"
            style={{ opacity: imageOpacity, y: imageY }}
          >
            {/* Фото или иллюстрация */}
            <div className="w-full h-80 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const skills = [
    { name: "Маркшейдерия", level: 95, color: "from-blue-500 to-blue-700" },
    { name: "Геодезия", level: 90, color: "from-purple-500 to-purple-700" },
    { name: "CAD/GIS", level: 85, color: "from-teal-500 to-teal-700" },
    { name: "3D моделирование", level: 80, color: "from-green-500 to-green-700" },
    { name: "Topcon/Leica", level: 85, color: "from-yellow-500 to-yellow-700" },
    { name: "AutoCAD", level: 75, color: "from-red-500 to-red-700" }
  ];

  return (
    <section id="skills" className="min-h-[300vh] relative" ref={containerRef}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
              y: useTransform(scrollYProgress, [0, 0.1], [50, 0])
            }}
          >
            Мои навыки
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              // Расчет момента появления каждого навыка
              const start = 0.1 + index * 0.05;
              const end = 0.9;
              
              const opacity = useTransform(
                scrollYProgress, 
                [start, start + 0.05, end - 0.05, end], 
                [0, 1, 1, 0]
              );
              
              const y = useTransform(
                scrollYProgress, 
                [start, start + 0.05, end - 0.05, end], 
                [100, 0, 0, -100]
              );
              
              const progressWidth = useTransform(
                scrollYProgress,
                [start + 0.05, start + 0.2], 
                [0, skill.level]
              );
              
              return (
                <motion.div 
                  key={skill.name}
                  style={{ opacity, y }}
                  className="bg-surface p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${progressWidth}%` }}
                    />
                  </div>
                  <div className="mt-2 text-right">{skill.level}%</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const experience = [
    {
      company: "ООО «Кутынская Горно-Геологическая Компания»",
      position: "Горнорабочий на маркшейдерских работах",
      period: "2024 - настоящее время",
      description: "Выполнение маркшейдерских работ и вычислений по созданию опорной сети, съемки и замеры горных выработок, камеральную обработку материалов съемок"
    },
    {
      company: "ООО «Кутынская Горно-Геологическая Компания»",
      position: "ВрИО Уч. Маркшейдера",
      period: "2023 - 2024",
      description: "Маркшейдерское сопровождение БВР/СЭР, ведение производственной и отчетной документации, определение и учет объемов выполненных горных работ"
    }
  ];

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  return (
    <section id="experience" ref={ref} className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Опыт работы
        </motion.h2>
        
        <div className="relative border-l-2 border-primary-blue ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
          {experience.map((job, index) => {
            const start = 0.1 + index * 0.1;
            const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
            const x = useTransform(scrollYProgress, [start, start + 0.1], [-100, 0]);
            
            return (
              <motion.div 
                key={index}
                className="mb-10 ml-6 md:ml-10"
                style={{ opacity, x }}
              >
                <div className="absolute w-4 h-4 bg-primary-blue rounded-full -left-2 md:-left-2 border border-dark" />
                <div className="bg-surface p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary-blue">{job.position}</h3>
                  <div className="text-lg font-medium">{job.company}</div>
                  <div className="text-sm text-slate-400 mb-4">{job.period}</div>
                  <p className="text-slate-300">{job.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const education = {
    school: "Хабаровский Технический Колледж",
    degree: "Горный инженер-маркшейдер",
    field: "Маркшейдерское дело",
    year: "2025",
    type: "Очная"
  };

  const achievements = [
    "Маркшейдерское обеспечение ведения горных работ - 5",
    "Горнорабочий на геологических работах - 5",
    "Геология - 5",
    "Маркшейдерская/Геологическая/Геодезическая учебная практика - 5/5/5",
    "Топографо-геодезические изыскания - 5",
    "Инженерная графика - 5",
    "Техническая механика - 5"
  ];

  // Анимация для фонового элемента
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
  // Анимация для текстовых элементов
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);
  
  const listOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const listY = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);

  return (
    <section id="education" ref={ref} className="py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Анимированный фоновый элемент */}
      <motion.div 
        className="absolute -right-40 -bottom-40 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl"
        style={{ y: bgY, rotate: bgRotate }}
      />
      <motion.div 
        className="absolute -left-40 -top-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]), rotate: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Образование
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-surface p-8 rounded-xl shadow-xl mb-10"
            style={{ opacity: cardOpacity, scale: cardScale }}
          >
            <h3 className="text-2xl font-semibold text-primary-blue mb-2">{education.school}</h3>
            <p className="text-xl mb-1">{education.degree}</p>
            <p className="text-lg text-slate-300 mb-1">{education.field}</p>
            <div className="flex justify-between text-slate-400">
              <span>{education.year}</span>
              <span>{education.type}</span>
            </div>
          </motion.div>
          
          <motion.div style={{ opacity: listOpacity, y: listY }}>
            <h3 className="text-xl font-semibold mb-4 text-center">Отметки по профильным предметам</h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  className="bg-surface/50 p-4 rounded-lg flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const contacts = [
    { type: "Email", value: "vkurdumov15@gmail.com", icon: "📧" },
    { type: "Телефон", value: "+7 (924) 100-55-42", icon: "📱" }
  ];

  // Анимация элементов
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  
  const formOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const formScale = useTransform(scrollYProgress, [0.1, 0.2], [0.9, 1]);
  
  const contactsOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const contactsX = useTransform(scrollYProgress, [0.2, 0.3], [100, 0]);

  return (
    <section id="contact" ref={ref} className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Связаться со мной
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
            style={{ opacity: formOpacity, scale: formScale }}
          >
            <div className="bg-surface p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Отправить сообщение</h3>
              
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
                    rows={5}
                    className="w-full p-3 bg-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  ></textarea>
                </div>
                
                <motion.button
                  className="w-full bg-primary-blue text-white py-3 rounded-lg font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Отправить
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-8"
            style={{ opacity: contactsOpacity, x: contactsX }}
          >
            <div className="bg-surface p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-blue/20 rounded-full mr-4 text-xl">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{contact.type}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-700">
                <h4 className="text-lg font-medium mb-4">Социальные сети</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full text-white"
                    whileHover={{ scale: 1.2, backgroundColor: "#1DA1F2" }}
                  >
                    T
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full text-white"
                    whileHover={{ scale: 1.2, backgroundColor: "#0077B5" }}
                  >
                    L
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full text-white"
                    whileHover={{ scale: 1.2, backgroundColor: "#4267B2" }}
                  >
                    F
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
