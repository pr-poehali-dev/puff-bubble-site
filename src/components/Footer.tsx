import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-puff-brown text-puff-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://cdn.poehali.dev/files/a4fd8e74-3a62-486f-a789-3d01a4adea3e.jpg" 
                alt="Puff & Bubble Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="font-handwritten text-2xl font-bold">Puff & Bubble</span>
            </div>
            <p className="text-puff-cream/80 text-sm mb-4">
              Уютное место, где соединились искусство выпечки и любовь к bubble tea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bakery" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Выпечка
                </Link>
              </li>
              <li>
                <Link to="/bubble-tea" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Bubble Tea
                </Link>
              </li>
              <li>
                <Link to="/desserts" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Десерты
                </Link>
              </li>
              <li>
                <Link to="/coffee" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Кофе
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/loyalty" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Программа лояльности
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-puff-cream/80 hover:text-puff-light transition-colors">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-puff-cream/80">ул. Ленина 42, Москва, 123456</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-puff-cream/80">+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-puff-cream/80">info@puffandbubble.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-puff-cream/20 text-center text-sm text-puff-cream/60">
          <p>© {new Date().getFullYear()} Puff & Bubble. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
