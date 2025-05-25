import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Ошибка отправки",
        description: error.message || "Произошла ошибка при отправке сообщения. Попробуйте еще раз.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, заполните все обязательные поля формы.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 (924) 100-55-42',
      bgColor: 'bg-primary/20',
      iconColor: 'text-primary-blue'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vkurdumov15@gmail.com',
      bgColor: 'bg-secondary-green/20',
      iconColor: 'text-secondary-green'
    },
    {
      icon: MapPin,
      label: 'Местоположение',
      value: 'г. Хабаровск',
      bgColor: 'bg-primary/20',
      iconColor: 'text-primary-blue'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Контакты</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-100">Свяжитесь со мной</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${contact.iconColor}`} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-100">{contact.label}</div>
                        <div className="text-slate-300">{contact.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Card className="mt-8 p-6 bg-dark border-slate-700">
                <h4 className="font-semibold mb-3 text-slate-100">Готов к сотрудничеству</h4>
                <p className="text-slate-300 text-sm">
                  Открыт для новых возможностей в области маркшейдерского дела и горно-геологических изысканий. 
                  Готов к командировкам и работе в различных условиях.
                </p>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-dark p-6 border-slate-700">
              <h3 className="text-xl font-semibold mb-6 text-slate-100">Отправить сообщение</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ваше имя"
                    className="mt-2 bg-surface border-slate-600 text-slate-100 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-2 bg-surface border-slate-600 text-slate-100 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-slate-300">Тема</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Тема сообщения"
                    className="mt-2 bg-surface border-slate-600 text-slate-100 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-300">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Ваше сообщение..."
                    rows={5}
                    className="mt-2 bg-surface border-slate-600 text-slate-100 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary-green hover:from-blue-600 hover:to-emerald-600 text-white"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Отправить сообщение
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
