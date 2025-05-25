import SectionBackground from './section-background';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 relative">
      <SectionBackground imageSrc="/portfolio-website/assets/map.jpg" opacity={0.1} />
      
      <div className="container mx-auto px-4">
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
                  <button className="w-full bg-primary-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Отправить
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