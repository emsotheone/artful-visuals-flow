
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

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
          <h1 className={cn(
            "text-8xl md:text-9xl font-display font-bold mb-6",
            theme === "dark" ? "text-white/90" : "text-black/90"
          )}>404</h1>
          <h2 className="text-2xl md:text-3xl font-display mb-6">Seite nicht gefunden</h2>
          <p className={cn(
            "mb-12 text-lg",
            theme === "dark" ? "text-white/60" : "text-black/60"
          )}>
            Die von dir gesuchte Seite existiert leider nicht oder ist nicht mehr verfügbar.
          </p>
          <Link 
            to="/" 
            className={cn(
              "inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider",
              theme === "dark" 
                ? "bg-white text-black hover:bg-white/90" 
                : "bg-black text-white hover:bg-black/90"
            )}
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
