
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const scrollToServices = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page and then scroll to services
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  return (
    <footer className="bg-gradient-to-b from-background via-background/90 to-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6" onClick={handleLinkClick}>
              <h3 className="text-white font-display text-2xl tracking-wider">ROBERTS PODS</h3>
            </Link>
            <p className={`${theme === 'light' ? 'text-gray-800' : 'text-white/60'} mb-6`}>
              Visuelle Geschichten mit cinematic Perfektion. Fotografie & Videografie aus Frankfurt.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/roberts.pods" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === 'light' ? 'bg-gray-200 hover:bg-[#FFCC00]' : 'bg-white/10 hover:bg-[#FFCC00]'} flex items-center justify-center transition-all duration-300 hover:scale-105 transform`}
                aria-label="Instagram"
              >
                <Instagram size={18} className={`${theme === 'light' ? 'text-black' : 'text-white'} group-hover:text-black transition-colors duration-300`} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg font-medium mb-6 uppercase`}>LINKS</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`} onClick={handleLinkClick}>
                  HOME
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`}
                >
                  SERVICES
                </button>
              </li>
              <li>
                <Link to="/ueber-mich" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`} onClick={handleLinkClick}>
                  ÜBER MICH
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`} onClick={handleLinkClick}>
                  KONTAKT
                </Link>
              </li>
              <li>
                <Link to="/impressum" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`} onClick={handleLinkClick}>
                  IMPRESSUM
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`} onClick={handleLinkClick}>
                  DATENSCHUTZ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg font-medium mb-6 uppercase`}>KONTAKT</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className={`${theme === 'light' ? 'text-gray-600' : 'text-white/60'} mt-1 mr-3 flex-shrink-0`} />
                <a href="mailto:info@robertspods.de" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`}>
                  info@robertspods.de
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className={`${theme === 'light' ? 'text-gray-600' : 'text-white/60'} mt-1 mr-3 flex-shrink-0`} />
                <a href="tel:+4969123456789" className={`${theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors duration-300`}>
                  +49 (0) 69 123 456 789
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className={`${theme === 'light' ? 'text-gray-600' : 'text-white/60'} mt-1 mr-3 flex-shrink-0`} />
                <address className={`${theme === 'light' ? 'text-gray-700' : 'text-white/60'} not-italic`}>
                  Kreativstraße 42<br />
                  60313 Frankfurt am Main<br />
                  Deutschland
                </address>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg font-medium mb-6 uppercase`}>NEWSLETTER</h4>
            <p className={`${theme === 'light' ? 'text-gray-700' : 'text-white/60'} mb-4`}>
              Bleib inspiriert und erhalte Updates zu neuen Projekten und Angeboten.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Deine E-Mail-Adresse" 
                className={`w-full px-4 py-3 ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-900' : 'bg-white/10 border-white/20 text-white'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/70`}
                required
              />
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-[#FFCC00] text-black rounded-lg hover:bg-[#FFCC00]/90 transition-colors duration-300 font-medium uppercase"
              >
                ABONNIEREN
              </button>
            </form>
          </div>
        </div>
        
        <div className={`mt-16 pt-8 ${theme === 'light' ? 'border-gray-200' : 'border-white/10'} border-t flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${theme === 'light' ? 'text-gray-500' : 'text-white/40'} text-sm mb-4 md:mb-0`}>
            &copy; {new Date().getFullYear()} Roberts Pods. Alle Rechte vorbehalten.
          </p>
          <p className={`${theme === 'light' ? 'text-gray-500' : 'text-white/40'} text-sm`}>
            Designed and developed by YB-WEB DESIGNS in 069.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
