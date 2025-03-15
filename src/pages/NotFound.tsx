
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-8xl md:text-9xl font-display font-bold mb-6 text-white/90">404</h1>
          <h2 className="text-2xl md:text-3xl font-display mb-6">Seite nicht gefunden</h2>
          <p className="text-white/60 mb-12 text-lg">
            Die von dir gesuchte Seite existiert leider nicht oder ist nicht mehr verfügbar.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} className="mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
