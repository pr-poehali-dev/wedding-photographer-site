import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: 'Лайт',
      hours: '2-3 часа',
      price: '25 000 ₽',
      features: [
        'Регистрация и сборы',
        'Выездная церемония',
        '100+ обработанных фотографий',
        'Онлайн-галерея'
      ]
    },
    {
      name: 'Стандарт',
      hours: '4-5 часов',
      price: '45 000 ₽',
      features: [
        'Сборы жениха и невесты',
        'Церемония и прогулка',
        'Начало банкета',
        '200+ обработанных фотографий',
        'Онлайн-галерея + USB'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      hours: '8-10 часов',
      price: '70 000 ₽',
      features: [
        'Полный день съёмки',
        'Два фотографа',
        '400+ обработанных фотографий',
        'Love Story в подарок',
        'Премиум онлайн-галерея + USB',
        'Фотокнига 30x30 см'
      ]
    }
  ];

  const portfolioImages = [
    'https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/b93cf852-5dc4-41bc-935f-96466bd125dd.jpg',
    'https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/3dc4434d-6297-431a-a5e6-68cea42ded7f.jpg',
    'https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/728687ab-9b44-431b-bfc5-f0b76101e3b1.jpg',
    'https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/b93cf852-5dc4-41bc-935f-96466bd125dd.jpg',
    'https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/3dc4434d-6297-431a-a5e6-68cea42ded7f.jpg',
    'https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/728687ab-9b44-431b-bfc5-f0b76101e3b1.jpg'
  ];

  const testimonials = [
    {
      name: 'Анна и Дмитрий',
      text: 'Потрясающие фотографии! Каждый кадр — произведение искусства. Спасибо за сохранённые эмоции нашего дня!',
      rating: 5
    },
    {
      name: 'Мария и Александр',
      text: 'Профессионализм на высшем уровне. Чувствовали себя комфортно всю съёмку. Результат превзошёл ожидания!',
      rating: 5
    },
    {
      name: 'Екатерина и Сергей',
      text: 'Очень внимательный фотограф, который чувствует момент. Фотографии получились естественными и живыми.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: '10 советов для идеальной свадебной фотосессии',
      date: '15 октября 2024',
      excerpt: 'Как подготовиться к съёмке и чувствовать себя естественно перед камерой...'
    },
    {
      title: 'Тренды свадебной фотографии 2024',
      date: '3 октября 2024',
      excerpt: 'Актуальные стили и направления в современной свадебной фотографии...'
    },
    {
      title: 'Выбор локации: секреты красивых кадров',
      date: '20 сентября 2024',
      excerpt: 'Как выбрать идеальное место для фотосессии в зависимости от времени года...'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-primary">Анна Романова</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'portfolio', 'services', 'prices', 'testimonials', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm hover:text-primary transition-colors ${
                    activeSection === section ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'prices' && 'Цены'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-6">
            Ваша свадьба<br />в каждом кадре
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная свадебная фотография, которая сохранит самые важные моменты вашего дня
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-primary hover:bg-primary/90">
              Посмотреть портфолио
            </Button>
            <Button onClick={() => scrollToSection('prices')} size="lg" variant="outline">
              Узнать цены
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl animate-slide-up">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="https://cdn.poehali.dev/projects/dae1740f-a0af-47f6-8b11-2cf8078d18b2/files/728687ab-9b44-431b-bfc5-f0b76101e3b1.jpg"
                alt="Анна Романова"
                className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif font-bold mb-6">Обо мне</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Привет! Я Анна, свадебный фотограф с 7-летним опытом. Моя страсть — запечатлевать искренние эмоции и создавать воспоминания, которые останутся с вами навсегда.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Каждая свадьба уникальна, и я стремлюсь рассказать вашу историю через фотографии — естественно, красиво и с душой.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Свадеб</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Счастливых пар</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif font-bold text-center mb-12 animate-fade-in">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] animate-scale-in hover-scale cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-serif font-bold text-center mb-6">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Предлагаю полный спектр услуг свадебной фотографии — от камерных церемоний до масштабных торжеств
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Camera" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Полный день съёмки</h3>
                <p className="text-muted-foreground">
                  От утренних сборов до первого танца — запечатлю каждый важный момент вашего дня
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Love Story</h3>
                <p className="text-muted-foreground">
                  Предсвадебная фотосессия, которая поможет вам расслабиться перед камерой
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Репортажная съёмка</h3>
                <p className="text-muted-foreground">
                  Естественные, живые кадры без постановки — настоящие эмоции ваших гостей
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Image" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Художественная обработка</h3>
                <p className="text-muted-foreground">
                  Профессиональная цветокоррекция и ретушь каждой фотографии
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center mb-6">Пакеты услуг</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите оптимальный вариант для вашей свадьбы
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`relative hover-scale transition-all ${
                  pkg.popular ? 'border-primary border-2 shadow-xl' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.hours}</p>
                  <div className="text-4xl font-serif font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-serif font-bold text-center mb-12">Отзывы пар</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover-scale transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-serif font-bold text-center mb-12">Блог</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="hover-scale transition-all cursor-pointer">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-xl font-serif font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Читать далее →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center mb-6">Свяжитесь со мной</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Готова ответить на все вопросы и обсудить детали вашей свадьбы
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-semibold">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">anna@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Instagram" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <p className="font-semibold">@anna.photo</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Напишите мне</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Расскажите о вашей свадьбе"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-2">Анна Романова</h3>
          <p className="text-muted-foreground mb-4">Свадебный фотограф</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}