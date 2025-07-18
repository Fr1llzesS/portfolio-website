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
        
        {/* Первое место работы */}
        <div className="bg-surface p-4 md:p-6 rounded-lg shadow-md mb-6">
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold">{t('experience.company1')}</h3>
            <div className="text-sm text-slate-400 mb-2">{t('experience.period1')}</div>
            <div className="font-medium mb-2">{t('experience.position1')}</div>
          </div>
        </div>
        {/* Второе место работы (текущее) */}
        <div className="bg-surface p-4 md:p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold">{t('experience.company2')}</h3>
            <div className="text-sm text-slate-400 mb-2">{t('experience.period2')}</div>
            <div className="font-medium mb-2">{t('experience.position2')}</div>
            <div className="mb-3 font-medium">{t('experience.responsibilities')}</div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>{t('experience.resp1')}</li>
              <li>{t('experience.resp2')}</li>
              <li>{t('experience.resp3')}</li>
              <li>{t('experience.resp4')}</li>
              <li>{t('experience.resp5')}</li>
              <li>{t('experience.resp6')}</li>
              <li>{t('experience.resp7')}</li>
              <li>{t('experience.resp8')}</li>
              <li>{t('experience.resp9')}</li>
              <li>{t('experience.resp10')}</li>
              <li>{t('experience.resp11')}</li>
              <li>{t('experience.resp12')}</li>
              <li>{t('experience.resp13')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}