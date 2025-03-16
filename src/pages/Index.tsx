
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import SocialFeed from '../components/SocialFeed';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import ScrollToTop from '../components/ScrollToTop';
import { useTheme } from '../context/ThemeContext';

const Index = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Ensure smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Immediately set content as loaded on client side to ensure visibility
    setContentLoaded(true);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div 
      className={`min-h-screen bg-background text-foreground overflow-x-hidden ${contentLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      suppressHydrationWarning
    >
      <Navbar />
      <Hero />
      
      {/* Social Media Section */}
      <SocialFeed />
      
      {/* Services Section - Replacing Portfolio */}
      <Services />
      
      {/* Replacing CTA Section with Retusche & Coloring content while keeping the background */}
      <section className={`py-24 px-6 md:px-12 relative overflow-hidden ${
        theme === "dark" 
          ? "bg-gradient-to-b from-gray-950 to-background" 
          : "bg-gradient-to-b from-gray-300 to-gray-100"
      }`}>
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${
            theme === "dark" 
              ? "bg-gradient-to-b from-black/60 via-black/40 to-background" 
              : "bg-gradient-to-b from-gray-300/90 via-gray-200/60 to-gray-100"
          }`}></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-putting-a-telephone-down-on-a-wooden-table-2906-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`font-medium uppercase tracking-widest text-sm ${theme === "dark" ? "text-white/50" : "text-black/60"}`}>Retusche & Coloring</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              DIE KUNST DER NACHBEARBEITUNG
            </h2>
            <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} text-lg md:text-xl mb-10 max-w-2xl mx-auto`}>
              Entdecke den Unterschied, den professionelles Color Grading und Retusche ausmachen kann
            </p>
          </div>
          
          {/* Interactive Before/After Slider - Adjusted size to match service section containers */}
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden">
              <BeforeAfter 
                beforeImage="https://images.unsplash.com/photo-1581288695521-b63aa03fcc95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                afterImage="https://images.unsplash.com/photo-1589220158998-24518fc0b8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                beforeLabel="Vorher"
                afterLabel="Nachher"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Before/After Section with multiple examples */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className={`text-2xl md:text-3xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Weitere Beispiele
            </h3>
            <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Vergleiche die Ergebnisse professioneller Nachbearbeitung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <BeforeAfter 
                beforeImage="https://images.unsplash.com/photo-1520438704522-7acc33a997db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                afterImage="https://images.unsplash.com/photo-1683139086252-06dca8f742c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                beforeLabel="Original"
                afterLabel="Grading"
                className="w-full h-full"
              />
            </div>
            
            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <BeforeAfter 
                beforeImage="https://images.unsplash.com/photo-1617634733308-fe2a6aa37f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                afterImage="https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                beforeLabel="Vor Retusche"
                afterLabel="Nach Retusche"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

export default Index;
