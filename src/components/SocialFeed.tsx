import { useEffect, useRef, useState } from 'react';
import { Instagram, Youtube, Linkedin, MessageCircle, Rocket, Film, MapPin } from 'lucide-react';
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
            VISUELLES STORYTELLING FÜR JEDE PLATTFORM
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
            Ich erstelle professionelle Foto- und Videoinhalte, die genau auf die Anforderungen der wichtigsten Social Media Plattformen abgestimmt sind – von Instagram und TikTok bis LinkedIn und YouTube.
          </p>
        </div>
        
        {/* Statistics Section - Improved mobile layout */}
        <div 
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          <div className="stat-item flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFCC00] text-black flex-shrink-0">
              <Rocket size={20} />
            </div>
            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Über 50 Millionen Views auf Kundenprojekten</p>
          </div>
          
          <div className="stat-item flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFCC00] text-black flex-shrink-0">
              <Film size={20} />
            </div>
            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Filmmaker & Photographer</p>
          </div>
          
          <div className="stat-item flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFCC00] text-black flex-shrink-0">
              <MapPin size={20} />
            </div>
            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Basierend in Frankfurt, verfügbar weltweit</p>
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
              MASSGESCHNEIDERTE INHALTE FÜR JEDE PLATTFORM
            </h3>
            <p className={theme === "dark" ? "text-white/80 mb-8" : "text-black/80 mb-8"}>
              Ob vertikale Reels, YouTube Shorts oder kreative TikTok-Videos – ich kenne die Formate und Trends, um deine Zielgruppe optimal zu erreichen und deine Marke eindrucksvoll zu präsentieren.
            </p>
            
            {/* Add flex container to hold platforms list and seal side by side */}
            <div className="flex flex-col lg:flex-row">
              <div className="space-y-4 flex-grow">
                <SocialMediaPlatformItem 
                  icon={Instagram} 
                  platform="Instagram" 
                  description="Hochwertige Reels & Stories" 
                />
                
                <SocialMediaPlatformItem 
                  icon={MessageCircle} 
                  platform="TikTok" 
                  description="Trendgerechte Videoformate" 
                />
                
                <SocialMediaPlatformItem 
                  icon={Youtube} 
                  platform="YouTube Shorts" 
                  description="Schnelle, eindrucksvolle Clips" 
                />
                
                <SocialMediaPlatformItem 
                  icon={Linkedin} 
                  platform="LinkedIn" 
                  description="Professionelle Business-Inhalte" 
                />
              </div>
              
              {/* Add the Seal component */}
              <div className="mt-8 lg:mt-0 flex justify-center">
                <SocialSeal />
              </div>
            </div>
            
            <div className="flex justify-center w-full mt-8">
              <a 
                href="/kontakt" 
                className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:opacity-90 transition-opacity duration-300 text-sm uppercase tracking-wider font-medium text-center"
              >
                Jetzt Social Media Projekt starten
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
