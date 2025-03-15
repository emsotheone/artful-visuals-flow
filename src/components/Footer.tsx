
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-white font-display text-2xl tracking-wider">ROBERTS PODS</h3>
            </Link>
            <p className="text-white/60 mb-6">
              Visuelle Geschichten mit cinematic Perfektion. Fotografie & Videografie aus Frankfurt.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/ueber-mich" className="text-white/60 hover:text-white transition-colors duration-300">
                  Über Mich
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-white/60 hover:text-white transition-colors duration-300">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-white/60 hover:text-white transition-colors duration-300">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white/60 hover:text-white transition-colors duration-300">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-white/60 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@robertspods.de" className="text-white/60 hover:text-white transition-colors duration-300">
                  info@robertspods.de
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-white/60 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+4969123456789" className="text-white/60 hover:text-white transition-colors duration-300">
                  +49 (0) 69 123 456 789
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-white/60 mt-1 mr-3 flex-shrink-0" />
                <address className="text-white/60 not-italic">
                  Kreativstraße 42<br />
                  60313 Frankfurt am Main<br />
                  Deutschland
                </address>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">
              Bleib inspiriert und erhalte Updates zu neuen Projekten und Angeboten.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Deine E-Mail-Adresse" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors duration-300 font-medium"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Roberts Pods. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/40 text-sm">
            Designed and developed with passion in Frankfurt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
