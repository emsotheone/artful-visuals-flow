
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { InfiniteSlider } from './ui/infinite-slider';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Only apply parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };

    // Ensure video plays immediately
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay error:", error);
        // Retry play on user interaction
        document.addEventListener('click', () => {
          videoRef.current?.play().catch(e => console.error("Video play error after interaction:", e));
        }, { once: true });
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute object-cover w-full h-full scale-[1.01]"
          muted
          loop
          playsInline
          autoPlay
          poster="/placeholder.svg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-shot-of-a-city-skyline-with-sunset-light-reflections-33989-large.mp4" type="video/mp4" />
          Dein Browser unterstützt kein Video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
      </div>

      {/* Infinite Slider - positioned above the scroll indicator, now full width */}
      <div className="absolute bottom-32 left-0 right-0 z-10 w-full">
        <InfiniteSlider 
          gap={32} 
          duration={30} 
          durationOnHover={60} 
          className="py-4 mb-4 w-full"
        >
          <div className={`px-4 py-2 ${theme === "dark" ? "text-white/80" : "text-black/80"} flex items-center whitespace-nowrap text-lg font-medium`}>
            <span className="text-[#FFCC00] mr-3">★</span> 40+ zufriedene Kunden
          </div>
          <div className={`px-4 py-2 ${theme === "dark" ? "text-white/80" : "text-black/80"} flex items-center whitespace-nowrap text-lg font-medium`}>
            <span className="text-[#FFCC00] mr-3">★</span> Individuelle Beratung
          </div>
          <div className={`px-4 py-2 ${theme === "dark" ? "text-white/80" : "text-black/80"} flex items-center whitespace-nowrap text-lg font-medium`}>
            <span className="text-[#FFCC00] mr-3">★</span> 50+ Mio. Views auf Kundenprojekten
          </div>
          <div className={`px-4 py-2 ${theme === "dark" ? "text-white/80" : "text-black/80"} flex items-center whitespace-nowrap text-lg font-medium`}>
            <span className="text-[#FFCC00] mr-3">★</span> Professionelle Nachbearbeitung
          </div>
          <div className={`px-4 py-2 ${theme === "dark" ? "text-white/80" : "text-black/80"} flex items-center whitespace-nowrap text-lg font-medium`}>
            <span className="text-[#FFCC00] mr-3">★</span> Langjährige Erfahrung
          </div>
        </InfiniteSlider>
      </div>

      {/* Repositioned CTA Button */}
      <div className="absolute bottom-10 right-10 z-10">
        <a 
          href="/kontakt"
          className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider"
        >
          Projekt anfragen
        </a>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-500`}
        onClick={scrollToContent}
      >
        <p className={`text-sm mb-2 uppercase tracking-widest ${theme === "dark" ? "text-white/70" : "text-black"}`}>Entdecken</p>
        <ArrowDown className={`animate-bounce ${theme === "dark" ? "text-white/70" : "text-black"}`} size={24} />
      </div>
    </div>
  );
};

export default Hero;
