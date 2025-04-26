
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-md space-y-6">
        {/* Шапка */}
        <div className="text-center">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-blue-800">ООО "ЗИМА"</h1>
            <p className="text-sm text-gray-500 mt-1">завод изделий механизмов и агрегатов</p>
            <Separator className="my-3" />
            <p className="text-base font-medium text-gray-700">
              Производство деталей трубопровода из нержавеющей 
              и легированной стали. Изготовление анкерных тяг.
            </p>
          </div>
        </div>

        {/* Основная информация */}
        <Card className="p-5 shadow-md bg-white">
          <h2 className="text-xl font-semibold text-blue-700 flex items-center">
            О компании
          </h2>
          <p className="mt-2 text-gray-700">
            ООО "Зима" — современное производственное предприятие, 
            специализирующееся на изготовлении высококачественных 
            деталей трубопровода и анкерных тяг.
          </p>
          <div className="mt-4 flex justify-center">
            <ArrowDown className="text-blue-500 animate-bounce h-6 w-6" />
          </div>
        </Card>

        {/* Продукция - детали трубопровода */}
        <Card className="bg-white overflow-hidden shadow-md">
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635975229704-38e8a886d430?q=80&w=2574&auto=format&fit=crop')" }}
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-700">Детали трубопровода</h2>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• Отводы из нержавеющей стали</li>
              <li>• Фланцы различных типоразмеров</li>
              <li>• Переходы концентрические и эксцентрические</li>
              <li>• Тройники равнопроходные и переходные</li>
              <li>• Заглушки эллиптические и плоские</li>
            </ul>
            <Button variant="outline" className="mt-4 w-full border-blue-500 text-blue-600 hover:bg-blue-50">
              Запросить каталог
            </Button>
          </div>
        </Card>

        {/* Анкерные тяги */}
        <Card className="bg-white overflow-hidden shadow-md">
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?q=80&w=2592&auto=format&fit=crop')" }}
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-700">Анкерные тяги</h2>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• Анкерные тяги любой длины</li>
              <li>• Регулируемые анкерные системы</li>
              <li>• Натяжные муфты</li>
              <li>• Соединительные элементы</li>
              <li>• Крепёжные системы</li>
            </ul>
            <Button variant="outline" className="mt-4 w-full border-blue-500 text-blue-600 hover:bg-blue-50">
              Техническая информация
            </Button>
          </div>
        </Card>

        {/* Преимущества */}
        <Card className="p-5 shadow-md bg-white">
          <h2 className="text-xl font-semibold text-blue-700">Наши преимущества</h2>
          <div className="mt-3 space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">✓</span> Собственное производство
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">✓</span> Контроль качества на каждом этапе
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">✓</span> Соответствие ГОСТ и международным стандартам
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">✓</span> Опыт работы более 15 лет
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">✓</span> Индивидуальный подход к каждому заказу
            </p>
          </div>
        </Card>

        {/* Контакты */}
        <Card className="p-5 shadow-md bg-white">
          <h2 className="text-xl font-semibold text-blue-700">Контакты</h2>
          <div className="mt-3 space-y-3">
            <a href="tel:+78001234567" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <Phone size={18} className="text-blue-500" />
              <span>8 (800) 123-45-67</span>
            </a>
            <a href="mailto:info@zima-plant.ru" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <Mail size={18} className="text-blue-500" />
              <span>info@zima-plant.ru</span>
            </a>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={18} className="text-blue-500" />
              <span>г. Москва, ул. Промышленная, 25</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock size={18} className="text-blue-500" />
              <span>Пн-Пт: 9:00 - 18:00</span>
            </div>
          </div>
          <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
            Связаться с нами
          </Button>
        </Card>

        {/* Футер */}
        <div className="text-center text-sm text-gray-500 pt-4 pb-8">
          © ООО "ЗИМА" {new Date().getFullYear()} | Все права защищены
        </div>
      </div>
    </div>
  );
};

export default Index;
