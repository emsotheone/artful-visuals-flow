
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import InstagramFeed from '../components/InstagramFeed';
import { ArrowUp } from 'lucide-react';

const AboutMe = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Ensure smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Ensure content is visible on client-side
    setContentLoaded(true);
    
    // Add scroll listener for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-300 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute object-cover w-full h-full scale-[1.01]"
            muted
            autoPlay
            loop
            playsInline
            poster="/placeholder.svg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-32269-large.mp4" type="video/mp4" />
            Dein Browser unterstützt kein Video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 max-w-5xl leading-tight text-shadow-lg uppercase">
            Über mich
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 text-shadow-sm">
            Der Mensch hinter der Kamera
          </p>
        </div>
      </section>
      
      {/* Visual Artist Section (moved from Index) */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm light-mode:text-black/50">Visual Artist</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase">
              MOMENTE EINFANGEN, EMOTIONEN WECKEN
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto light-mode:text-black/70">
              Als visueller Künstler aus Frankfurt erschaffe ich cinematic Fotografie und Videoinhalte, die Geschichten erzählen und Emotionen transportieren.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase">
                DIE KUNST DES VISUELLEN STORYTELLINGS
              </h3>
              <p className="text-white/80 mb-6 light-mode:text-black/80">
                Meine Leidenschaft ist es, durch die Linse Geschichten zu erzählen, die berühren und inspirieren. Mit einem Blick für Details und einer cinematic Bildsprache erschaffe ich visuelle Erlebnisse, die in Erinnerung bleiben.
              </p>
              <p className="text-white/80 mb-8 light-mode:text-black/80">
                Von kommerziellen Projekten bis hin zu künstlerischen Arbeiten – ich bringe deine Vision mit technischer Präzision und kreativem Flair zum Leben.
              </p>
              <a 
                href="/portfolio"
                className="inline-block px-6 py-3 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Mein Portfolio entdecken
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
      
      {/* Biography Section */}
      <section className="py-20 px-6 md:px-12 bg-black/50 light-mode:bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl image-shimmer">
                <img 
                  src="https://images.unsplash.com/photo-1597655601841-214a4d3f9add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 uppercase">
                MEIN WEG ZUM VISUELLEN GESCHICHTENERZÄHLER
              </h3>
              <p className="text-white/80 mb-6 light-mode:text-black/80">
                Seit meiner Jugend fasziniert mich das Zusammenspiel von Licht, Farbe und Bewegung. Was als Hobby begann, entwickelte sich zu einer Leidenschaft und schließlich zu meinem Beruf.
              </p>
              <p className="text-white/80 mb-6 light-mode:text-black/80">
                Mit jedem Projekt suche ich nach der perfekten Balance zwischen technischer Präzision und künstlerischem Ausdruck. Dabei ist mir wichtig, dass meine Arbeiten nicht nur ästhetisch ansprechend sind, sondern auch eine emotionale Verbindung zum Betrachter herstellen.
              </p>
              <p className="text-white/80 mb-6 light-mode:text-black/80">
                Ob als Fotograf oder Videograf – ich setze auf einen cinematischen Stil, der Momente lebendig werden lässt und Geschichten authentisch vermittelt.
              </p>
              <a 
                href="/kontakt"
                className="inline-block px-6 py-3 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Gemeinsames Projekt starten
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm light-mode:text-black/50">Social Media</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase">
              FOLGE MEINER KREATIVEN REISE
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto light-mode:text-black/70">
              Folge meiner kreativen Reise auf Instagram! Ich teile regelmäßig neue Projekte, Behind-the-Scenes und kreative Inspirationen.
            </p>
            <p className="text-2xl font-medium mt-4 mb-8 light-mode:text-black">@robertspods</p>
          </div>
          
          <InstagramFeed />
          
          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/robertspods"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Auf Instagram folgen
            </a>
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="py-20 px-6 md:px-12 bg-black/50 light-mode:bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm light-mode:text-black/50">Equipment</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase">
              MEINE WERKZEUGE
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto light-mode:text-black/70">
              Qualität beginnt mit dem richtigen Equipment. Das ist meine Ausrüstung für professionelle Ergebnisse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover-lift light-mode:bg-white light-mode:border-black/10 light-mode:shadow-md">
              <h3 className="text-xl font-display font-bold mb-4 light-mode:text-black">Cameras</h3>
              <ul className="space-y-2 text-white/70 light-mode:text-black/70">
                <li>Sony Alpha A7S III</li>
                <li>Canon EOS R5</li>
                <li>DJI Ronin 4D</li>
                <li>Blackmagic Pocket 6K</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover-lift light-mode:bg-white light-mode:border-black/10 light-mode:shadow-md">
              <h3 className="text-xl font-display font-bold mb-4 light-mode:text-black">Objektive</h3>
              <ul className="space-y-2 text-white/70 light-mode:text-black/70">
                <li>Sony GM 24-70mm f/2.8</li>
                <li>Canon RF 50mm f/1.2</li>
                <li>Sigma Art 35mm f/1.4</li>
                <li>Sony 85mm f/1.4 GM</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover-lift light-mode:bg-white light-mode:border-black/10 light-mode:shadow-md">
              <h3 className="text-xl font-display font-bold mb-4 light-mode:text-black">Zubehör</h3>
              <ul className="space-y-2 text-white/70 light-mode:text-black/70">
                <li>DJI RS 3 Pro Gimbal</li>
                <li>Godox Lichtsystem</li>
                <li>Rode Wireless Pro</li>
                <li>Atomos Ninja V</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#FFCC00] text-black shadow-md hover:bg-[#FFCC00]/90 transition-all z-50"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp size={24} />
        </button>
      )}
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default AboutMe;
