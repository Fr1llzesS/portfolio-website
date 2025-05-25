import SectionBackground from './section-background';
import { getAssetPath } from '../lib/paths';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative">
     <SectionBackground imageSrc={getAssetPath("/assets/skillsection.jpg")} opacity={0.15} />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Навыки
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Профессиональные навыки</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Тахеометры/GNSS/Сканеры/Дроны</span>
                <span>90%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Ведение горно-граф. документации</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Agiso Metashape</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Datamine Studio RM</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Autodesk Autocad</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Autodesk Civil 3D</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Microsoft Office (Word, Excel, PP)</span>
                <span>90%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Языки</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Русский (Родной)</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Английский (Advanced C1)</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Немецкий (Elementary A1)</span>
                <span>40%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-blue to-blue-400 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}