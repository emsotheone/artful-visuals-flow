
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
              
              <button
                onClick={toggleTheme}
                className={cn(
                  "rounded-full p-2 transition-colors duration-300",
                  theme === "dark" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/10 hover:bg-black/20"
                )}
                aria-label={theme === "dark" ? "Bright Mode aktivieren" : "Dark Mode aktivieren"}
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-white" />
                ) : (
                  <Moon size={18} className="text-black" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={cn(
                  "rounded-full p-1.5 transition-colors duration-300",
                  theme === "dark" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/10 hover:bg-black/20"
                )}
                aria-label={theme === "dark" ? "Bright Mode aktivieren" : "Dark Mode aktivieren"}
              >
                {theme === "dark" ? (
                  <Sun size={16} className="text-white" />
                ) : (
                  <Moon size={16} className="text-black" />
                )}
              </button>
              
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  "hover:opacity-70 transition-opacity",
                  theme === "dark" ? "text-white" : "text-black"
                )}
                aria-label="Menu öffnen"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 ${theme === "dark" ? "bg-black" : "bg-white"} transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6">
            <Link 
              to="/" 
              className={cn(
                "font-display text-xl",
                theme === "dark" ? "text-white" : "text-black"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              ROBERTS PODS
            </Link>
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "hover:opacity-70 transition-opacity",
                theme === "dark" ? "text-white" : "text-black"
              )}
              aria-label="Menu schließen"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-8 p-6 mt-10">
            <MobileNavLink to="/" onClick={toggleMobileMenu} theme={theme}>Home</MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={toggleMobileMenu} theme={theme}>Portfolio</MobileNavLink>
            <MobileNavLink to="/ueber-mich" onClick={toggleMobileMenu} theme={theme}>Über Mich</MobileNavLink>
            <MobileNavLink to="/kontakt" onClick={toggleMobileMenu} theme={theme}>Kontakt</MobileNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const { theme } = useTheme();
  
  return (
    <Link
      to={to}
      className={cn(
        "text-sm uppercase tracking-widest hover:opacity-70 transition-colors duration-300",
        theme === "dark" ? "text-white" : "text-black"
      )}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  children, 
  onClick,
  theme
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
  theme: "dark" | "light";
}) => (
  <Link
    to={to}
    className={cn(
      "text-2xl font-display tracking-wider flex items-center hover:opacity-70 transition-colors",
      theme === "dark" ? "text-white" : "text-black"
    )}
    onClick={onClick}
  >
    {children}
    <ChevronRight size={24} className={theme === "dark" ? "ml-2 opacity-70" : "ml-2 opacity-50"} />
  </Link>
);

export default Navbar;
