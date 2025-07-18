import SectionBackground from './section-background';
import expsectionImg from '../assets/expsection.jpg';
import { useLanguage } from '@/contexts/language-context';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 relative">
      <SectionBackground imageSrc={expsectionImg} opacity={0.2} />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          {t('experience.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Первое место работы - Кутынская */}
          <div className="bg-surface p-4 md:p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{t('experience.company1')}</h3>
              <div className="text-sm text-slate-400 mb-1">{t('experience.period1')}</div>
              <div className="font-medium text-secondary-green mb-3">{t('experience.position1')}</div>
              <div className="mb-3 font-medium text-slate-300">{t('experience.responsibilities1')}</div>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-slate-300">
                <li>{t('experience.resp1_1')}</li>
                <li>{t('experience.resp1_2')}</li>
                <li>{t('experience.resp1_3')}</li>
                <li>{t('experience.resp1_4')}</li>
                <li>{t('experience.resp1_5')}</li>
                <li>{t('experience.resp1_6')}</li>
                <li>{t('experience.resp1_7')}</li>
                <li>{t('experience.resp1_8')}</li>
              </ul>
            </div>
          </div>

          {/* Второе место работы - СервисМонтажСтрой (текущее) */}
          <div className="bg-surface p-4 md:p-6 rounded-lg shadow-md border-l-4 border-secondary-green">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg md:text-xl font-semibold">{t('experience.company2')}</h3>
                <span className="px-2 py-1 bg-secondary-green text-dark text-xs rounded-full font-medium">ТЕКУЩЕЕ</span>
              </div>
              <div className="text-sm text-slate-400 mb-1">{t('experience.period2')}</div>
              <div className="font-medium text-secondary-green mb-3">{t('experience.position2')}</div>
              <div className="mb-3 font-medium text-slate-300">{t('experience.responsibilities2')}</div>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-slate-300">
                <li>{t('experience.resp2_1')}</li>
                <li>{t('experience.resp2_2')}</li>
                <li>{t('experience.resp2_3')}</li>
                <li>{t('experience.resp2_4')}</li>
                <li>{t('experience.resp2_5')}</li>
                <li>{t('experience.resp2_6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}