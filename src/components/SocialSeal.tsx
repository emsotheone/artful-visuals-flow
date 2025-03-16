
import { Network } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const SocialSeal = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Set up a subtle animation cycle
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 8000);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  return (
    <div 
      className={`hidden lg:flex flex-col items-center justify-center w-36 h-36 rounded-full relative transition-all duration-500 ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ring with yellow accent */}
      <div 
        className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
          theme === "dark" 
            ? isHovered ? "border-[#FFCC00]/70" : "border-white/40" 
            : isHovered ? "border-[#FFCC00]" : "border-black/40"
        } ${
          isHovered || isAnimating
            ? theme === "dark" 
              ? "shadow-[0_0_15px_rgba(255,204,0,0.3)]" 
              : "shadow-[0_0_15px_rgba(255,204,0,0.2)]" 
            : ""
        }`}
      />
      
      {/* Middle circle with pulse effect */}
      <div 
        className={`absolute inset-3 rounded-full border transition-all duration-500 ${
          isHovered 
            ? theme === "dark" 
              ? "border-[#FFCC00]/40" 
              : "border-[#FFCC00]/60"
            : theme === "dark" 
              ? "border-white/30" 
              : "border-black/30"
        } ${
          isAnimating && !isHovered ? "social-seal-pulse" : ""
        }`}
      />
      
      {/* Inner content */}
      <div className="flex flex-col items-center justify-center space-y-1 z-10 social-seal-rotate">
        <Network 
          size={28} 
          className={`mb-1 transition-colors duration-300 ${
            isHovered
              ? "text-[#FFCC00]"
              : theme === "dark" 
                ? "text-white/90" 
                : "text-black/90"
          }`} 
        />
        <p 
          className={`text-xs font-medium tracking-wider transition-colors duration-300 ${
            isHovered
              ? "text-[#FFCC00]"
              : theme === "dark" 
                ? "text-white/80" 
                : "text-black/80"
          }`}
        >
          WE ARE
        </p>
        <p 
          className={`text-sm font-bold tracking-wider transition-colors duration-300 ${
            isHovered
              ? "text-[#FFCC00]"
              : theme === "dark" 
                ? "text-white" 
                : "text-black"
          }`}
        >
          SOCIAL
        </p>
      </div>
      
      {/* Inner circle decoration */}
      <div 
        className={`absolute inset-6 border rounded-full transition-all duration-500 ${
          isHovered
            ? theme === "dark"
              ? "border-[#FFCC00]/30 bg-[#FFCC00]/5"
              : "border-[#FFCC00]/40 bg-[#FFCC00]/5" 
            : theme === "dark" 
              ? "border-white/20" 
              : "border-black/20"
        }`}
      />
      
      {/* Decorative dot pattern for network effect */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-500 ${
            isHovered
              ? "bg-[#FFCC00]"
              : theme === "dark"
                ? "bg-white/60"
                : "bg-black/60"
          }`}
          style={{
            transform: `rotate(${i * 60}deg) translateY(-50px)`,
            opacity: isHovered || isAnimating ? 1 : 0.6,
            transitionDelay: `${i * 50}ms`
          }}
        />
      ))}
    </div>
  );
};

export default SocialSeal;
