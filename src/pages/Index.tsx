
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import SocialFeed from '../components/SocialFeed';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

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
      
      {/* Social Media Section moved to top */}
      <SocialFeed />
      
      {/* Services Section - Replacing Portfolio */}
      <Services />
      
      {/* Before/After Section */}
      <section className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm">Retusche & Coloring</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider">
              Die Kunst der Nachbearbeitung
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
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
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-black to-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-background"></div>
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight uppercase tracking-wider">
            Lass uns gemeinsam deine Geschichte erzählen
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Ob für kommerzielle Zwecke oder persönliche Projekte – ich setze deine Ideen mit Leidenschaft und Präzision um.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/kontakt"
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Jetzt Projekt anfragen
            </a>
            <a 
              href="/portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Mehr Arbeiten entdecken
            </a>
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
