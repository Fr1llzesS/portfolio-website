import SectionBackground from './section-background';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative">
      <SectionBackground imageSrc="/portfolio-website/assets/Career.JPG" opacity={0.2} />
      
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  );
}