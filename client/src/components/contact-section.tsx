import { useState } from 'react';
import SectionBackground from './section-background';
import contactsectionImg from '@/assets/contactssection.jpg';
import { useLanguage } from '@/contexts/language-context';
import { Phone, Mail, MapPin, Send, MessageSquare, User, AtSign, FileText } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-transperent relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-48 h-48 border border-primary rounded-full"></div>
        <div className="absolute bottom-16 right-32 w-64 h-64 border border-secondary-green rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-20 bg-gradient-to-b from-primary to-transparent rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-24 bg-gradient-to-b from-secondary-green to-transparent -rotate-45"></div>
      </div>

      <SectionBackground imageSrc={contactsectionImg} opacity={0.1} />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">{t('contact.title')}</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Левая часть - Контактная информация */}
            <div className="bg-surface p-8 rounded-2xl shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary-green rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                {t('contact.reach_out')}
              </h3>
              
              <div className="space-y-6">
                {/* Телефон */}
                <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100">{t('contact.phone')}</div>
                    <div className="text-slate-400 text-lg">+7 (924) 100-55-42</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100">{t('contact.email')}</div>
                    <div className="text-slate-400 text-lg">vkurdumov15@gmail.com</div>
                  </div>
                </div>

                {/* Местоположение */}
                <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100">{t('contact.location')}</div>
                    <div className="text-slate-400 text-lg">{t('about.location')}</div>
                  </div>
                </div>
              </div>
              
              {/* Информационный блок */}
              <div className="mt-8 p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600/50 shadow-lg">
                <h4 className="font-bold text-secondary-green mb-3 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary-green rounded-full animate-pulse"></div>
                  {t('contact.ready')}
                </h4>
                <p className="text-slate-300 leading-relaxed">{t('contact.description')}</p>
              </div>
            </div>
            
            {/* Правая часть - Форма */}
            <div className="bg-surface p-8 rounded-2xl shadow-2xl hover:shadow-secondary-green/10 transition-all duration-300 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-green to-green-600 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                {t('contact.send_message')}
              </h3>
              
              {/* Сообщения о статусе */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✅
                    </div>
                    Сообщение успешно отправлено!
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ❌
                    </div>
                    Ошибка отправки. Попробуйте еще раз.
                  </div>
                </div>
              )}

              <form className="space-y-6">
                {/* Имя */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('contact.name_placeholder')}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-100 placeholder-slate-400 shadow-lg"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <AtSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:outline-none focus:border-secondary-green focus:ring-2 focus:ring-secondary-green/20 transition-all text-slate-100 placeholder-slate-400 shadow-lg"
                    required
                  />
                </div>

                {/* Тема */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <FileText className="w-5 h-5 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder={t('contact.subject_placeholder')}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-100 placeholder-slate-400 shadow-lg"
                    required
                  />
                </div>

                {/* Сообщение */}
                <div className="relative">
                  <div className="absolute left-4 top-4 z-10">
                    <MessageSquare className="w-5 h-5 text-slate-400" />
                  </div>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('contact.message_placeholder')}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:outline-none focus:border-secondary-green focus:ring-2 focus:ring-secondary-green/20 transition-all text-slate-100 placeholder-slate-400 resize-none shadow-lg"
                    required
                  ></textarea>
                </div>

                {/* Две кнопки для выбора способа отправки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-secondary-green to-green-600 hover:from-green-600 hover:to-secondary-green disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {isLoading ? 'Отправка...' : 'Email'}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleTelegramSubmit}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5 mr-2" />
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