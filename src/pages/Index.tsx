
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
      
      {/* Before/After Section */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`font-medium uppercase tracking-widest text-sm ${theme === "dark" ? "text-white/50" : "text-black/60"}`}>Retusche & Coloring</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              DIE KUNST DER NACHBEARBEITUNG
            </h2>
            <p className={theme === "dark" ? "text-white/70 max-w-2xl mx-auto" : "text-black/70 max-w-2xl mx-auto"}>
              Entdecke den Unterschied, den professionelles Color Grading und Retusche ausmachen kann
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfter 
              beforeImage="https://images.unsplash.com/photo-1581288695521-b63aa03fcc95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              afterImage="https://images.unsplash.com/photo-1589220158998-24518fc0b8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              beforeLabel="Vorher"
              afterLabel="Nachher"
            />
            
            <BeforeAfter 
              beforeImage="https://images.unsplash.com/photo-1520438704522-7acc33a997db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              afterImage="https://images.unsplash.com/photo-1683139086252-06dca8f742c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              beforeLabel="Original"
              afterLabel="Grading"
            />
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
