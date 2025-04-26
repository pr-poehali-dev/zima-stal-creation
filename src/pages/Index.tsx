
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, FileText, Info, Wrench, Shield, Award, Cpu, Menu, X } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Мобильное меню */}
      <div className="w-full bg-white shadow-md fixed top-0 z-50 flex justify-between items-center p-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <div className="bg-primary h-8 w-8 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold">З</span>
          </div>
          <h1 className="text-lg font-bold text-slate-800">ООО "ЗИМА"</h1>
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 text-slate-700 hover:bg-slate-100 rounded-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню выпадающее */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 animate-fade-in lg:hidden">
          <div className="flex flex-col p-2">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-left py-3 px-4 text-slate-700 hover:bg-slate-100 border-b border-slate-100 flex items-center gap-2"
            >
              <Info size={18} /> О компании
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-left py-3 px-4 text-slate-700 hover:bg-slate-100 border-b border-slate-100 flex items-center gap-2"
            >
              <Wrench size={18} /> Продукция
            </button>
            <button 
              onClick={() => scrollToSection("advantages")}
              className="text-left py-3 px-4 text-slate-700 hover:bg-slate-100 border-b border-slate-100 flex items-center gap-2"
            >
              <Shield size={18} /> Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("contacts")}
              className="text-left py-3 px-4 text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            >
              <Phone size={18} /> Контакты
            </button>
          </div>
        </div>
      )}

      {/* Десктопное меню (слева) и контент (справа) */}
      <div className="w-full max-w-6xl flex flex-row mt-16 lg:mt-0">
        {/* Боковое меню для десктопа */}
        <div className="hidden lg:flex lg:w-1/4 h-screen sticky top-0 p-6 flex-col bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="rounded-sm bg-primary p-4">
              <div className="font-bold text-3xl text-white">З</div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-slate-800">ООО "ЗИМА"</h1>
              <p className="text-xs text-slate-500">завод изделий механизмов и агрегатов</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col space-y-1">
            <button 
              onClick={() => scrollToSection("about")}
              className={`text-left py-3 px-4 ${activeSection === "about" ? "bg-slate-100 text-primary font-medium" : "text-slate-700"} hover:bg-slate-100 rounded-sm flex items-center gap-2 transition-colors`}
            >
              <Info size={18} /> О компании
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className={`text-left py-3 px-4 ${activeSection === "products" ? "bg-slate-100 text-primary font-medium" : "text-slate-700"} hover:bg-slate-100 rounded-sm flex items-center gap-2 transition-colors`}
            >
              <Wrench size={18} /> Продукция
            </button>
            <button 
              onClick={() => scrollToSection("advantages")}
              className={`text-left py-3 px-4 ${activeSection === "advantages" ? "bg-slate-100 text-primary font-medium" : "text-slate-700"} hover:bg-slate-100 rounded-sm flex items-center gap-2 transition-colors`}
            >
              <Shield size={18} /> Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("contacts")}
              className={`text-left py-3 px-4 ${activeSection === "contacts" ? "bg-slate-100 text-primary font-medium" : "text-slate-700"} hover:bg-slate-100 rounded-sm flex items-center gap-2 transition-colors`}
            >
              <Phone size={18} /> Контакты
            </button>
          </div>

          <div className="mt-auto">
            <Separator className="my-4" />
            <div className="text-xs text-slate-500 text-center">
              © ООО "ЗИМА" {new Date().getFullYear()}
              <br />Все права защищены
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className={`w-full ${menuOpen ? "pt-16" : ""} lg:w-3/4 px-4 py-6 lg:py-10 space-y-8`}>
          {/* Шапка для мобильных (заголовок выше в фиксированном меню) */}
          <div className="text-center lg:hidden">
            <div className="bg-white p-5 rounded-sm shadow-md">
              <div className="flex justify-center mb-3">
                <div className="rounded-sm bg-primary p-3">
                  <div className="font-bold text-2xl text-white">З</div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-1">завод изделий механизмов и агрегатов</p>
              <Separator className="my-3" />
              <p className="text-base font-medium text-slate-700">
                Производство деталей трубопровода из нержавеющей 
                и легированной стали. Изготовление анкерных тяг.
              </p>
            </div>
          </div>

          {/* Шапка для десктопа */}
          <div className="hidden lg:block">
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">ООО "ЗИМА"</h1>
              <p className="text-lg text-slate-500 mb-4">завод изделий механизмов и агрегатов</p>
              <Separator className="my-4" />
              <p className="text-xl font-medium text-slate-700 mt-4">
                Производство деталей трубопровода из нержавеющей 
                и легированной стали. Изготовление анкерных тяг.
              </p>
            </div>
          </div>

          {/* Основная информация */}
          <Card id="about" className="p-6 shadow-md bg-white rounded-sm">
            <h2 className="text-2xl font-semibold text-slate-800 flex items-center mb-4">
              <Info className="mr-2 text-primary" size={24} />
              О компании
            </h2>
            <p className="text-slate-700 leading-relaxed text-justify">
              ООО "Зима" — современное производственное предприятие с многолетним опытом работы 
              в промышленном секторе. Мы специализируемся на изготовлении высококачественных 
              деталей трубопровода и анкерных тяг по ГОСТ и техническим условиям заказчика.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3 text-justify">
              Наша продукция успешно применяется на объектах нефтегазовой отрасли, 
              химической промышленности, в энергетике и коммунальном хозяйстве. 
              Собственное производство полного цикла позволяет нам гарантировать 
              стабильно высокое качество и оптимальные сроки изготовления.
            </p>
          </Card>

          {/* Продукция - заголовок */}
          <div id="products" className="pt-4">
            <h2 className="text-2xl font-semibold text-slate-800 flex items-center mb-4">
              <Wrench className="mr-2 text-primary" size={24} />
              Наша продукция
            </h2>
          </div>

          {/* Продукция - детали трубопровода */}
          <Card className="bg-white overflow-hidden shadow-md rounded-sm">
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635975229704-38e8a886d430?q=80&w=2574&auto=format&fit=crop')" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-800">Детали трубопровода</h3>
              <p className="text-slate-600 mt-2 text-justify">
                Производим широкий ассортимент деталей трубопровода из нержавеющей и легированной 
                стали в соответствии с ГОСТ и международными стандартами качества.
              </p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Отводы из нержавеющей стали (ГОСТ 17375-2001)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Фланцы различных типоразмеров (ГОСТ 33259-2015)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Переходы концентрические и эксцентрические</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Тройники равнопроходные и переходные</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Заглушки эллиптические и плоские</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="mt-5 border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 rounded-sm w-full"
              >
                <FileText size={18} />
                Запросить техническую документацию
              </Button>
            </div>
          </Card>

          {/* Анкерные тяги */}
          <Card className="bg-white overflow-hidden shadow-md rounded-sm">
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?q=80&w=2592&auto=format&fit=crop')" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-800">Анкерные тяги</h3>
              <p className="text-slate-600 mt-2 text-justify">
                Изготавливаем анкерные тяги различной длины и диаметра для промышленного и 
                гражданского строительства с высокими показателями прочности.
              </p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Анкерные тяги любой длины (от 0,5 до 12 метров)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Регулируемые анкерные системы с шарнирным соединением</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Натяжные муфты различных типов и размеров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Соединительные элементы (шпильки, гайки, шайбы)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Крепёжные системы для промышленных объектов</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="mt-5 border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 rounded-sm w-full"
              >
                <FileText size={18} />
                Получить спецификацию
              </Button>
            </div>
          </Card>

          {/* Преимущества */}
          <Card id="advantages" className="p-6 shadow-md bg-white rounded-sm">
            <h2 className="text-2xl font-semibold text-slate-800 flex items-center mb-6">
              <Shield className="mr-2 text-primary" size={24} />
              Наши преимущества
            </h2>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-200 p-4 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Cpu size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-slate-800">Собственное производство</h3>
                </div>
                <p className="text-sm text-slate-600 ml-[3.25rem]">
                  Полный производственный цикл на собственных мощностях
                </p>
              </div>
              
              <div className="border border-slate-200 p-4 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-slate-800">Контроль качества</h3>
                </div>
                <p className="text-sm text-slate-600 ml-[3.25rem]">
                  Многоступенчатая система проверки на каждом этапе
                </p>
              </div>
              
              <div className="border border-slate-200 p-4 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Award size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-slate-800">Соответствие стандартам</h3>
                </div>
                <p className="text-sm text-slate-600 ml-[3.25rem]">
                  Продукция соответствует ГОСТ и международным нормам
                </p>
              </div>
              
              <div className="border border-slate-200 p-4 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Wrench size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-slate-800">Индивидуальный подход</h3>
                </div>
                <p className="text-sm text-slate-600 ml-[3.25rem]">
                  Разработка и производство по техническим требованиям заказчика
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-slate-50 rounded-sm border border-slate-200">
              <p className="text-slate-700 text-justify">
                <span className="font-medium">ООО "Зима"</span> — это стабильный и надежный партнер для промышленных предприятий, строительных компаний и монтажных организаций. Мы гарантируем высокое качество продукции, соблюдение договорных обязательств и индивидуальный подход к каждому клиенту.
              </p>
            </div>
          </Card>

          {/* Контакты */}
          <Card id="contacts" className="p-6 shadow-md bg-white rounded-sm">
            <h2 className="text-2xl font-semibold text-slate-800 flex items-center mb-6">
              <Phone className="mr-2 text-primary" size={24} />
              Контакты
            </h2>
            <div className="mt-4 space-y-4">
              <a href="tel:+78001234567" className="block p-4 border border-slate-200 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Телефон</p>
                    <p className="text-slate-700">8 (800) 123-45-67</p>
                  </div>
                </div>
              </a>
              
              <a href="mailto:info@zima-plant.ru" className="block p-4 border border-slate-200 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-700">info@zima-plant.ru</p>
                  </div>
                </div>
              </a>
              
              <div className="block p-4 border border-slate-200 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Адрес</p>
                    <p className="text-slate-700">г. Москва, ул. Промышленная, 25</p>
                  </div>
                </div>
              </div>
              
              <div className="block p-4 border border-slate-200 rounded-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary/10">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Режим работы</p>
                    <p className="text-slate-700">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 rounded-sm">
              <Mail size={18} />
              Отправить запрос
            </Button>
            
            <div className="mt-4 p-4 bg-slate-50 rounded-sm border border-slate-200">
              <p className="text-slate-700 text-sm text-center">
                Свяжитесь с нами для получения подробной консультации и расчета стоимости заказа. 
                Наши специалисты готовы ответить на все вопросы и помочь с выбором оптимального решения.
              </p>
            </div>
          </Card>

          {/* Футер */}
          <div className="text-center text-sm text-slate-500 pt-4 pb-8 lg:hidden">
            © ООО "ЗИМА" {new Date().getFullYear()} | Все права защищены
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
