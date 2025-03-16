
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
      
      {/* Equipment Section - Updated with plain background */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`font-medium uppercase tracking-widest text-sm ${theme === "dark" ? "text-white/50" : "text-black/60"}`}>Equipment</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              MEINE WERKZEUGE
            </h2>
            <p className={theme === "dark" ? "text-white/70 max-w-2xl mx-auto" : "text-black/70 max-w-2xl mx-auto"}>
              Qualität beginnt mit dem richtigen Equipment. Das ist meine Ausrüstung für professionelle Ergebnisse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cameras */}
            <div className={`p-8 rounded-lg ${theme === "dark" ? "bg-black/40" : "bg-gray-100"}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Cameras</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                <li>Sony Alpha A7S III</li>
                <li>Canon EOS R5</li>
                <li>DJI Ronin 4D</li>
                <li>Blackmagic Pocket 6K</li>
              </ul>
            </div>
            
            {/* Objektive */}
            <div className={`p-8 rounded-lg ${theme === "dark" ? "bg-black/40" : "bg-gray-100"}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Objektive</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                <li>Sony GM 24-70mm f/2.8</li>
                <li>Canon RF 50mm f/1.2</li>
                <li>Sigma Art 35mm f/1.4</li>
                <li>Sony 85mm f/1.4 GM</li>
              </ul>
            </div>
            
            {/* Zubehör */}
            <div className={`p-8 rounded-lg ${theme === "dark" ? "bg-black/40" : "bg-gray-100"}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Zubehör</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                <li>DJI RS 3 Pro Gimbal</li>
                <li>Godox Lichtsystem</li>
                <li>Rode Wireless Pro</li>
                <li>Atomos Ninja V</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Before/After Section with plain background */}
      <section className="py-20 px-6 md:px-12">
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
