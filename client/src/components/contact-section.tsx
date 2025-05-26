import SectionBackground from './section-background';
import contactsectionImg from '../assets/contactssection.jpg';
import { useLanguage } from '@/contexts/language-context';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 relative">
       <SectionBackground imageSrc={contactsectionImg} opacity={0.1} />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          {t('contact.title')}
        </h2>
        
        <div className="bg-surface p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact.reach_out')}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium">{t('contact.phone')}</div>
                    <div className="text-slate-400">+7 (924) 100-55-42</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-secondary-green mr-3" />
                  <div>
                    <div className="font-medium">{t('contact.email')}</div>
                    <div className="text-slate-400">vkurdumov15@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium">{t('contact.location')}</div>
                    <div className="text-slate-400">{t('about.location')}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-secondary-green mb-2">{t('contact.ready')}</h4>
                <p className="text-sm text-slate-300">{t('contact.description')}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact.send_message')}</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder={t('contact.name_placeholder')}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder={t('contact.subject_placeholder')}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder={t('contact.message_placeholder')}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t('contact.send_message')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}