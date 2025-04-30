import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-puff-brown/90 backdrop-blur-sm text-puff-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/a4fd8e74-3a62-486f-a789-3d01a4adea3e.jpg" 
                alt="Puff & Bubble Logo" 
                className="h-10 w-auto"
              />
              <span className="font-handwritten text-2xl font-bold">Puff & Bubble</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="font-medium hover:text-puff-light transition-colors">
                Главная
              </Link>
              <Link to="/bakery" className="font-medium hover:text-puff-light transition-colors">
                Выпечка
              </Link>
              <Link to="/bubble-tea" className="font-medium hover:text-puff-light transition-colors">
                Bubble Tea
              </Link>
              <Link to="/about" className="font-medium hover:text-puff-light transition-colors">
                О нас
              </Link>
              <Link to="/contacts" className="font-medium hover:text-puff-light transition-colors">
                Контакты
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-puff-cream hover:text-puff-light focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-puff-brown">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-puff-cream font-medium hover:bg-puff-brown/80"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/bakery" 
              className="block px-3 py-2 rounded-md text-puff-cream font-medium hover:bg-puff-brown/80"
              onClick={toggleMenu}
            >
              Выпечка
            </Link>
            <Link 
              to="/bubble-tea" 
              className="block px-3 py-2 rounded-md text-puff-cream font-medium hover:bg-puff-brown/80"
              onClick={toggleMenu}
            >
              Bubble Tea
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-puff-cream font-medium hover:bg-puff-brown/80"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="block px-3 py-2 rounded-md text-puff-cream font-medium hover:bg-puff-brown/80"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
