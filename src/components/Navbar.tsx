
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 glass-morphism backdrop-blur-xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-white font-display text-xl tracking-wider hover:opacity-80 transition-opacity"
            >
              ROBERTS PODS
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/ueber-mich">Über Mich</NavLink>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-white/70 transition-colors"
              aria-label="Menu öffnen"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6">
            <Link 
              to="/" 
              className="text-white font-display text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              ROBERTS PODS
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-white/70 transition-colors"
              aria-label="Menu schließen"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-8 p-6 mt-10">
            <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={toggleMobileMenu}>Portfolio</MobileNavLink>
            <MobileNavLink to="/ueber-mich" onClick={toggleMobileMenu}>Über Mich</MobileNavLink>
            <MobileNavLink to="/kontakt" onClick={toggleMobileMenu}>Kontakt</MobileNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-white text-sm uppercase tracking-widest hover:text-white/70 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="text-white text-2xl font-display tracking-wider flex items-center hover:text-white/70 transition-colors"
    onClick={onClick}
  >
    {children}
    <ChevronRight size={24} className="ml-2 opacity-70" />
  </Link>
);

export default Navbar;
