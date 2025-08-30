import { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'EN' ? 'DE' : 'EN');
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Booking', href: '#booking' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">Zurix Taxi</div>
              <div className="text-xs text-muted-foreground">Airport Transfer</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side - Language & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-border hover:border-primary transition-colors duration-200"
            >
              <span className="text-sm font-medium">{currentLang}</span>
              <span className="text-xs text-muted-foreground">|</span>
              <span className="text-xs text-muted-foreground">{currentLang === 'EN' ? 'DE' : 'EN'}</span>
            </button>

            {/* Primary CTA */}
            <Button className="btn-primary hidden sm:flex">
              Book Now
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-border hover:border-primary transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">{currentLang}</span>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-muted-foreground">{currentLang === 'EN' ? 'DE' : 'EN'}</span>
                  </button>
                </div>
                <Button className="btn-primary w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;