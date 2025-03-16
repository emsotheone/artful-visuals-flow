
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import InstagramFeed from '../components/InstagramFeed';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../context/ThemeContext';

const AboutMe = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    setContentLoaded(true);
    
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
      
      <section className="py-20 px-6 md:px-12 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-medium text-white/50 uppercase tracking-widest text-sm light-mode:text-black/50">Visual Artist</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase">
              MOMENTE EINFANGEN, GESCHICHTEN ERZÄHLEN
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto light-mode:text-black/70">
              Als visueller Künstler aus Frankfurt erschaffe ich cinematic Fotografie und Videoinhalte, die Geschichten lebendig werden lassen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase">
                VISUELLE STORYS, DIE BERÜHREN
              </h3>
              <p className="text-white/80 mb-6 light-mode:text-black/80">
                Meine Leidenschaft ist es, durch die Linse bedeutungsvolle Momente festzuhalten. Das Zusammenspiel von Licht, Farbe und Bewegung fesselt mich seit meiner Jugend.
              </p>
              <p className="text-white/80 mb-6 light-mode:text-black/80">
                Mit einem Blick für Details und einer cineastischen Bildsprache entstehen Werke, die ästhetisch beeindrucken und emotional nachwirken. Ich strebe nach der perfekten Balance aus technischer Präzision und kreativer Freiheit, um Bilder zu schaffen, die im Gedächtnis bleiben.
              </p>
              <p className="text-white/80 mb-8 light-mode:text-black/80">
                Ob kommerzielle Projekte oder künstlerische Visionen – ich bringe deine Ideen mit technischer Perfektion und kreativer Leidenschaft zum Leben.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  asChild
                  className="px-8 py-6 bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 rounded-full border-none text-sm font-medium uppercase tracking-wider h-auto"
                >
                  <a href="/kontakt">
                    GEMEINSAMES PROJEKT STARTEN
                  </a>
                </Button>
              </div>
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
            <p className="text-2xl font-medium mt-4 mb-8 light-mode:text-black">@roberts.pods</p>
          </div>
          
          <InstagramFeed />
        </div>
      </section>
      
      <section className={`py-20 px-6 md:px-12 relative overflow-hidden ${
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
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-filming-a-model-in-the-studio-34421-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`font-medium uppercase tracking-widest text-sm ${theme === "dark" ? "text-white/50" : "text-gray-600"}`}>Equipment</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              MEINE WERKZEUGE
            </h2>
            <p className={`${theme === "dark" ? "text-white/70" : "text-gray-700"} max-w-2xl mx-auto`}>
              Qualität beginnt mit dem richtigen Equipment. Das ist meine Ausrüstung für professionelle Ergebnisse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${theme === "dark" ? "bg-black/40" : "bg-[#d3d7dd]"} backdrop-blur-sm shadow-md border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300`}>
              <h3 className={`text-xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Cameras</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/80" : "text-black"}`}>
                <li>Sony Alpha A7S III</li>
                <li>Canon EOS R5</li>
                <li>DJI Ronin 4D</li>
                <li>Blackmagic Pocket 6K</li>
              </ul>
            </div>
            
            <div className={`${theme === "dark" ? "bg-black/40" : "bg-[#d3d7dd]"} backdrop-blur-sm shadow-md border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300`}>
              <h3 className={`text-xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Objektive</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/80" : "text-black"}`}>
                <li>Sony GM 24-70mm f/2.8</li>
                <li>Canon RF 50mm f/1.2</li>
                <li>Sigma Art 35mm f/1.4</li>
                <li>Sony 85mm f/1.4 GM</li>
              </ul>
            </div>
            
            <div className={`${theme === "dark" ? "bg-black/40" : "bg-[#d3d7dd]"} backdrop-blur-sm shadow-md border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300`}>
              <h3 className={`text-xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Zubehör</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/80" : "text-black"}`}>
                <li>DJI RS 3 Pro Gimbal</li>
                <li>Godox Lichtsystem</li>
                <li>Rode Wireless Pro</li>
                <li>Atomos Ninja V</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
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
