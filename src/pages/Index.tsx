import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Коммерческий Рилс',
      category: 'Видео',
      image: 'https://cdn.poehali.dev/projects/597adbb7-6455-41fc-bdd1-94c834f9d6e5/files/532a3f32-abf7-4b4d-a258-d6e79102fbdc.jpg'
    },
    {
      id: 2,
      title: 'Портретная Съёмка',
      category: 'Фото',
      image: 'https://cdn.poehali.dev/projects/597adbb7-6455-41fc-bdd1-94c834f9d6e5/files/0321d730-5cc1-46f1-bd38-d7e3c12d2ab6.jpg'
    },
    {
      id: 3,
      title: 'Event Видеография',
      category: 'Видео',
      image: 'https://cdn.poehali.dev/projects/597adbb7-6455-41fc-bdd1-94c834f9d6e5/files/dd404510-9884-45b0-a27f-2272f6436bb6.jpg'
    }
  ];

  const services = [
    {
      icon: 'Video',
      title: 'Создание Рилс',
      description: 'Динамичные короткие видео для Instagram, TikTok и других платформ с креативными эффектами'
    },
    {
      icon: 'Camera',
      title: 'Видеография',
      description: 'Профессиональная съёмка событий, рекламных роликов и корпоративных видео'
    },
    {
      icon: 'Image',
      title: 'Фотография',
      description: 'Портретная, предметная и событийная фотосъёмка высокого качества'
    },
    {
      icon: 'Film',
      title: 'Монтаж',
      description: 'Профессиональный видеомонтаж с цветокоррекцией и спецэффектами'
    },
    {
      icon: 'Palette',
      title: 'Цветокоррекция',
      description: 'Создание уникальной атмосферы через профессиональную обработку цвета'
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/df6dcfb1-58ce-43d2-9979-420eec971e9b.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none"></div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold gradient-text">CREATOR</h1>
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О себе' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-heading font-black mb-6 animate-fade-in">
              <span className="gradient-text-3d">Создаю</span>
              <br />
              <span className="gradient-text-3d">визуальные истории</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Контент-мейкер с 5+ лет опыта.
              <br />
              Превращаю моменты в искусство.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                Услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/597adbb7-6455-41fc-bdd1-94c834f9d6e5/files/0321d730-5cc1-46f1-bd38-d7e3c12d2ab6.jpg"
                alt="О себе"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl font-heading font-bold gradient-text">О себе</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Привет! Я — Виктория, твой личный и креативный контент-мейкер, специализирующийся на создании современного качественного контента для социальных сетей.
                <br /><br />
                Моя миссия — помогать брендам и личностям рассказывать их истории через мощные визуальные образы. Каждый проект для меня — это возможность создать что-то уникальное.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Рилс', 'Видео', 'Фото', 'Монтаж', 'Цветокоррекция'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг для вашего контента</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-card border-border hover:border-primary/50 transition-all hover-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-background" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-card/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Избранные работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl hover-scale animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-medium text-primary mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-heading font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/30 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Готов обсудить ваш проект</p>
          </div>
          <Card className="bg-card border-border animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telegram</label>
                    <Input type="text" placeholder="@ваш_ник" className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." className="bg-background min-h-32" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-lg py-6">
                  Отправить сообщение
                </Button>
              </form>
              <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-border">
                <a
                  href="https://www.instagram.com/vicky__wws?igsh=MWZuOGc4cmpkYWtjZQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 flex items-center justify-center transition-all hover-scale"
                >
                  <Icon name="Instagram" size={24} className="text-white" />
                </a>
                <a
                  href="https://m.youtube.com/@karamelka_tv_/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-secondary to-accent hover:scale-110 flex items-center justify-center transition-all hover-scale"
                >
                  <Icon name="Youtube" size={24} className="text-white" />
                </a>
                <a
                  href="https://t.me/+SSGFgiQfbO1lNzMy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-accent to-primary hover:scale-110 flex items-center justify-center transition-all hover-scale"
                >
                  <Icon name="Send" size={24} className="text-white" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Creator Portfolio. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;