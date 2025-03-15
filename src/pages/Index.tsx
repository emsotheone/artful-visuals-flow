
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import BeforeAfter from '../components/BeforeAfter';
import SocialFeed from '../components/SocialFeed';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Video Intro Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm">Visual Artist</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
              Momente einfangen, Emotionen wecken
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Als visueller Künstler aus Frankfurt erschaffe ich cinematic Fotografie und Videoinhalte, die Geschichten erzählen und Emotionen transportieren.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Die Kunst des visuellen Storytellings
              </h3>
              <p className="text-white/80 mb-6">
                Meine Leidenschaft ist es, durch die Linse Geschichten zu erzählen, die berühren und inspirieren. Mit einem Blick für Details und einer cinematic Bildsprache erschaffe ich visuelle Erlebnisse, die in Erinnerung bleiben.
              </p>
              <p className="text-white/80 mb-8">
                Von kommerziellen Projekten bis hin zu künstlerischen Arbeiten – ich bringe deine Vision mit technischer Präzision und kreativem Flair zum Leben.
              </p>
              <a 
                href="/ueber-mich"
                className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Mehr über mich erfahren
              </a>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl image-shimmer">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-32269-large.mp4" type="video/mp4" />
                  Dein Browser unterstützt kein Video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Before/After Section */}
      <section className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm">Retusche & Coloring</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
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
      
      {/* Social Feed */}
      <SocialFeed />
      
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight">
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
    </div>
  );
};

export default Index;
