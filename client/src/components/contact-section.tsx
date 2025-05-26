import { useState } from 'react';
import SectionBackground from './section-background';
import contactsectionImg from '../assets/contactssection.jpg';
import { useLanguage } from '@/contexts/language-context';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  
  // Состояние формы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Обработчик изменения полей
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Обработчик отправки в Telegram
  const handleTelegramSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const telegramData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      const response = await fetch("https://effulgent-kulfi-201938.netlify.app/.netlify/functions/send-telegram", {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(telegramData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Обработчик отправки на Email через Formspree
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const formspreeData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: `Новое сообщение от ${formData.name}: ${formData.subject}`
      };

      // ЗАМЕНИТЕ YOUR_FORM_ID на ваш настоящий Form ID из Formspree
      const response = await fetch("https://formspree.io/f/xeogbpya", {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formspreeData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending to email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

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
              
              {/* Сообщения о статусе */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-600 text-white rounded-lg">
                  ✅ Сообщение успешно отправлено!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-600 text-white rounded-lg">
                  ❌ Ошибка отправки. Проверьте подключение к интернету и попробуйте еще раз.
                </div>
              )}

              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('contact.name_placeholder')}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder={t('contact.subject_placeholder')}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('contact.message_placeholder')}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-blue resize-none"
                    required
                  ></textarea>
                </div>
                
                {/* Две кнопки для выбора способа отправки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={isLoading}
                    className="w-full bg-secondary-green hover:bg-green-600 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {isLoading ? 'Отправка...' : 'Email'}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleTelegramSubmit}
                    disabled={isLoading}
                    className="w-full bg-primary-blue hover:bg-blue-600 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? 'Отправка...' : 'Telegram'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}