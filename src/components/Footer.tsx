import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Airport Transfer', href: '#services' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Our Fleet', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cancellation Policy', href: '/legal/cancellation' },
    { name: 'Imprint', href: '/legal/imprint' }
  ];

  const serviceAreas = [
    'Zurich Airport (ZUR)',
    'Zurich City Center',
    'Winterthur',
    'Baden',
    'St. Gallen',
    'Basel'
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">Zurix Taxi</div>
                <div className="text-sm text-white/70">Airport Transfer</div>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Premium airport transfer service in Zurich. Professional, punctual, 
              and reliable transportation with Swiss quality standards.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+41 44 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@zurixtaxi.ch</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">24/7 Emergency</h4>
              <p className="text-sm text-white/80 mb-2">Need immediate assistance?</p>
              <a 
                href="tel:+41441234567" 
                className="text-primary font-semibold hover:text-accent transition-colors duration-200"
              >
                +41 44 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Zurix Taxi. All rights reserved. | Licensed Taxi Service Switzerland
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-sm text-white/60">
                Languages: EN | DE
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80">Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;