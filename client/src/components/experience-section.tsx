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
        
        <div className="bg-surface p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">{t('experience.company')}</h3>
            <div className="text-sm text-slate-400 mb-2">{t('experience.period')}</div>
            <div className="font-medium mb-2">{t('experience.position')}</div>
            <div className="mb-3 font-medium">{t('experience.responsibilities')}</div>
            <ul className="list-disc pl-5 space-y-1">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}