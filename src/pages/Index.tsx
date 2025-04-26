
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, ArrowDown, FileText, Info, Tool, Zap, Menu, X } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center">
      {/* Мобильное меню */}
      <div className="w-full bg-white shadow-md fixed top-0 z-50 flex justify-between items-center p-4 lg:hidden">
        <h1 className="text-xl font-bold text-blue-800">ООО "ЗИМА"</h1>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 text-blue-800 hover:bg-blue-50 rounded-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню выпадающее */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 animate-fade-in lg:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-left py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md flex items-center gap-2"
            >
              <Info size={18} /> О компании
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-left py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md flex items-center gap-2"
            >
              <Tool size={18} /> Продукция
            </button>
            <button 
              onClick={() => scrollToSection("advantages")}
              className="text-left py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md flex items-center gap-2"
            >
              <Zap size={18} /> Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("contacts")}
              className="text-left py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md flex items-center gap-2"
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
            <div className="rounded-full bg-blue-100 p-4">
              <div className="font-bold text-3xl text-blue-800">З</div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-blue-800">ООО "ЗИМА"</h1>
              <p className="text-xs text-gray-500">завод изделий механизмов и агрегатов</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection("about")}
              className={`text-left py-2 px-4 ${activeSection === "about" ? "bg-blue-50 text-blue-800" : "text-gray-700"} hover:bg-blue-50 rounded-md flex items-center gap-2 transition-colors`}
            >
              <Info size={18} /> О компании
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className={`text-left py-2 px-4 ${activeSection === "products" ? "bg-blue-50 text-blue-800" : "text-gray-700"} hover:bg-blue-50 rounded-md flex items-center gap-2 transition-colors`}
            >
              <Tool size={18} /> Продукция
            </button>
            <button 
              onClick={() => scrollToSection("advantages")}
              className={`text-left py-2 px-4 ${activeSection === "advantages" ? "bg-blue-50 text-blue-800" : "text-gray-700"} hover:bg-blue-50 rounded-md flex items-center gap-2 transition-colors`}
            >
              <Zap size={18} /> Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("contacts")}
              className={`text-left py-2 px-4 ${activeSection === "contacts" ? "bg-blue-50 text-blue-800" : "text-gray-700"} hover:bg-blue-50 rounded-md flex items-center gap-2 transition-colors`}
            >
              <Phone size={18} /> Контакты
            </button>
          </div>

          <div className="mt-auto">
            <Separator className="my-4" />
            <div className="text-xs text-gray-500 text-center">
              © ООО "ЗИМА" {new Date().getFullYear()}
              <br />Все права защищены
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className={`w-full ${menuOpen ? "pt-16" : ""} lg:w-3/4 px-4 py-6 lg:py-10 space-y-6`}>
          {/* Шапка для мобильных (заголовок выше в фиксированном меню) */}
          <div className="text-center lg:hidden">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex justify-center mb-3">
                <div className="rounded-full bg-blue-100 p-4">
                  <div className="font-bold text-3xl text-blue-800">З</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">завод изделий механизмов и агрегатов</p>
              <Separator className="my-3" />
              <p className="text-base font-medium text-gray-700">
                Производство деталей трубопровода из нержавеющей 
                и легированной стали. Изготовление анкерных тяг.
              </p>
            </div>
          </div>

          {/* Шапка для десктопа */}
          <div className="hidden lg:block">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h1 className="text-4xl font-bold text-blue-800 mb-2">ООО "ЗИМА"</h1>
              <p className="text-lg text-gray-500 mb-4">завод изделий механизмов и агрегатов</p>
              <Separator className="my-4" />
              <p className="text-xl font-medium text-gray-700 mt-4">
                Производство деталей трубопровода из нержавеющей 
                и легированной стали. Изготовление анкерных тяг.
              </p>
            </div>
          </div>

          {/* Основная информация */}
          <Card id="about" className="p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4">
              <Info className="mr-2 text-blue-500" size={24} />
              О компании
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ООО "Зима" — современное производственное предприятие, 
              специализирующееся на изготовлении высококачественных 
              деталей трубопровода и анкерных тяг. Наша компания была основана в 2008 году
              и на сегодняшний день является одним из ведущих производителей 
              в своей отрасли на территории Российской Федерации.
            </p>
            <div className="mt-4 flex justify-center">
              <ArrowDown className="text-blue-500 animate-bounce h-6 w-6" />
            </div>
          </Card>

          {/* Продукция - заголовок */}
          <div id="products" className="pt-4">
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4">
              <Tool className="mr-2 text-blue-500" size={24} />
              Наша продукция
            </h2>
          </div>

          {/* Продукция - детали трубопровода */}
          <Card className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div 
              className="h-56 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635975229704-38e8a886d430?q=80&w=2574&auto=format&fit=crop')" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700">Детали трубопровода</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Отводы из нержавеющей стали (ГОСТ 17375-2001, ГОСТ 30753-2001)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Фланцы различных типоразмеров (ГОСТ 33259-2015)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Переходы концентрические и эксцентрические (ГОСТ 17378-2001)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Тройники равнопроходные и переходные (ГОСТ 17376-2001)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Заглушки эллиптические и плоские (ГОСТ 17379-2001)</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="mt-5 w-full border-blue-500 text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Запросить каталог
              </Button>
            </div>
          </Card>

          {/* Анкерные тяги */}
          <Card className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div 
              className="h-56 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?q=80&w=2592&auto=format&fit=crop')" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700">Анкерные тяги</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Анкерные тяги любой длины (от 0,5 до 12 метров)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Регулируемые анкерные системы с шарнирным соединением</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Натяжные муфты различных типов и размеров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Соединительные элементы (шпильки, гайки, шайбы)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Крепёжные системы для промышленных объектов</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="mt-5 w-full border-blue-500 text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Техническая информация
              </Button>
            </div>
          </Card>

          {/* Преимущества */}
          <Card id="advantages" className="p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4">
              <Zap className="mr-2 text-blue-500" size={24} />
              Наши преимущества
            </h2>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <p className="flex items-center gap-2 font-medium text-blue-700">
                  <span className="text-blue-500 font-bold">✓</span> Собственное производство
                </p>
                <p className="text-sm text-gray-600 mt-1 pl-6">
                  Полный производственный цикл на собственных мощностях
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <p className="flex items-center gap-2 font-medium text-blue-700">
                  <span className="text-blue-500 font-bold">✓</span> Контроль качества
                </p>
                <p className="text-sm text-gray-600 mt-1 pl-6">
                  Многоступенчатая система проверки на каждом этапе
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <p className="flex items-center gap-2 font-medium text-blue-700">
                  <span className="text-blue-500 font-bold">✓</span> Соответствие стандартам
                </p>
                <p className="text-sm text-gray-600 mt-1 pl-6">
                  Продукция соответствует ГОСТ и международным нормам
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <p className="flex items-center gap-2 font-medium text-blue-700">
                  <span className="text-blue-500 font-bold">✓</span> Опыт работы более 15 лет
                </p>
                <p className="text-sm text-gray-600 mt-1 pl-6">
                  Накопленный опыт и проверенные технологии
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors md:col-span-2">
                <p className="flex items-center gap-2 font-medium text-blue-700">
                  <span className="text-blue-500 font-bold">✓</span> Индивидуальный подход
                </p>
                <p className="text-sm text-gray-600 mt-1 pl-6">
                  Разработка и производство по индивидуальным требованиям заказчика
                </p>
              </div>
            </div>
          </Card>

          {/* Контакты */}
          <Card id="contacts" className="p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4">
              <Phone className="mr-2 text-blue-500" size={24} />
              Контакты
            </h2>
            <div className="mt-4 space-y-4">
              <a href="tel:+78001234567" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-700">Телефон</p>
                    <p className="text-gray-700">8 (800) 123-45-67</p>
                  </div>
                </div>
              </a>
              
              <a href="mailto:info@zima-plant.ru" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-700">Email</p>
                    <p className="text-gray-700">info@zima-plant.ru</p>
                  </div>
                </div>
              </a>
              
              <div className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-700">Адрес</p>
                    <p className="text-gray-700">г. Москва, ул. Промышленная, 25</p>
                  </div>
                </div>
              </div>
              
              <div className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-700">Режим работы</p>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
              <Mail size={18} />
              Связаться с нами
            </Button>
          </Card>

          {/* Футер (отображается только на мобильных) */}
          <div className="text-center text-sm text-gray-500 pt-4 pb-8 lg:hidden">
            © ООО "ЗИМА" {new Date().getFullYear()} | Все права защищены
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
