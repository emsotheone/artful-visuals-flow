
import { useEffect, useRef, useState } from 'react';
import { Instagram, Youtube, Linkedin, MessageCircle, Rocket, Handshake, Star, HelpCircle } from 'lucide-react';
import SocialMediaPlatformItem from './SocialMediaPlatformItem';
import SocialSeal from './SocialSeal';
import { useTheme } from '../context/ThemeContext';

const SocialFeed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simple animation implementation that doesn't rely on visibility changes
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
    
    // Animate phone with delay
    if (phoneRef.current) {
      setTimeout(() => {
        phoneRef.current?.classList.add('animate-float');
      }, 300);
    }
    
    // Animate stats with staggered delay
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      statItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-fade-in');
        }, 300 + (index * 150));
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 md:px-12 overflow-hidden opacity-100 transition-opacity duration-300 social-feed-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`font-medium uppercase tracking-widest text-sm ${theme === "dark" ? "text-white/50" : "text-black/70"}`}>
            SOCIAL MEDIA CONTENT
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
            DEIN VISUELLES PROJEKT STARTET HIER
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
            Ob für kommerzielle Kampagnen oder kreative Projekte – ich realisiere deine Vision mit Leidenschaft und Präzision.
          </p>
        </div>
        
        {/* Statistics Section - Updated with new order and icons */}
        <div 
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          <div className="stat-item flex items-center space-x-3 group transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFCC00] text-black flex-shrink-0 transition-all duration-300 group-hover:brightness-110">
              <Star size={20} />
            </div>
            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-black"} transition-colors duration-300 group-hover:${theme === "dark" ? "text-white/90" : "text-black/90"}`}>40+ zufriedene Kunden</p>
          </div>
          
          <div className="stat-item flex items-center space-x-3 group transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFCC00] text-black flex-shrink-0 transition-all duration-300 group-hover:brightness-110">
              <MessageCircle size={20} />
            </div>
            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-black"} transition-colors duration-300 group-hover:${theme === "dark" ? "text-white/90" : "text-black/90"}`}>Individuelle Beratung</p>
          </div>
          
          <div className="stat-item flex items-center space-x-3 group transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFCC00] text-black flex-shrink-0 transition-all duration-300 group-hover:brightness-110">
              <Rocket size={20} />
            </div>
            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-black"} transition-colors duration-300 group-hover:${theme === "dark" ? "text-white/90" : "text-black/90"}`}>50+ Mio. Views auf Kundenprojekten</p>
          </div>
        </div>

        {/* Improved content layout for better mobile display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
          {/* iPhone Frame with Social Media Content - Centered on mobile */}
          <div className="flex justify-center w-full lg:w-auto">
            <div 
              ref={phoneRef}
              className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-xl overflow-hidden flex-shrink-0"
            >
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
              
              {/* Video Content */}
              <div className="w-full h-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-turning-in-front-of-a-mirror-41686-medium.mp4" type="video/mp4" />
                  Dein Browser unterstützt dieses Videoformat nicht.
                </video>
              </div>
            </div>
          </div>

          {/* Social Media Text Content with Seal - Full width on mobile, padding adjusted */}
          <div className="w-full lg:max-w-lg px-2">
            <h3 className={`text-3xl md:text-4xl font-display font-bold mb-6 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              CONTENT, DER DEINE ZIELGRUPPE ERREICHT
            </h3>
            <p className={theme === "dark" ? "text-white/80 mb-8" : "text-black/80 mb-8"}>
              Ob vertikale Reels, YouTube Shorts oder kreative TikTok-Videos – ich kenne die Formate und Trends, um deine Zielgruppe optimal zu erreichen und deine Marke eindrucksvoll zu präsentieren.
            </p>
            
            {/* Modified flex container to properly center items */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center">
              <div className="space-y-4 flex-grow">
                <SocialMediaPlatformItem 
                  icon={Instagram} 
                  platform="Instagram" 
                  description="Hochwertige Reels & Stories"
                  stats="1.2 Mrd. monatlich aktive Nutzer weltweit. Ideal für visuelle Markenkommunikation und Storytelling."
                />
                
                <SocialMediaPlatformItem 
                  icon={MessageCircle} 
                  platform="TikTok" 
                  description="Trendgerechte Videoformate"
                  stats="Über 1 Mrd. monatlich aktive Nutzer. Perfekt für kurze, authentische Videos mit hoher Reichweite."
                />
                
                <SocialMediaPlatformItem 
                  icon={Youtube} 
                  platform="YouTube Shorts" 
                  description="Schnelle, eindrucksvolle Clips"
                  stats="2+ Mrd. monatlich aktive Nutzer. Ideal für kurze Clips mit hoher Sichtbarkeit und Entdeckungspotential."
                />
                
                <SocialMediaPlatformItem 
                  icon={Linkedin} 
                  platform="LinkedIn" 
                  description="Professionelle Business-Inhalte"
                  stats="930+ Mio. registrierte Nutzer. Optimal für B2B-Kommunikation und professionelles Networking."
                />
              </div>
              
              {/* Centered Seal component with proper alignment */}
              <div className="mt-8 lg:mt-0 flex justify-center items-center lg:ml-8">
                <SocialSeal />
              </div>
            </div>
            
            <div className="flex justify-center w-full mt-8">
              <a 
                href="/kontakt" 
                className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:opacity-90 transition-opacity duration-300 text-sm uppercase tracking-wider font-medium text-center"
              >
                JETZT PROJEKT ANFRAGEN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
