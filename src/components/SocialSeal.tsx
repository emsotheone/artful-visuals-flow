
import { Network } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const SocialSeal = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full relative transition-all duration-300 ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ring */}
      <div 
        className={`absolute inset-0 rounded-full border-2 ${
          theme === "dark" 
            ? "border-white/30" 
            : "border-black/30"
        } ${
          isHovered 
            ? theme === "dark" 
              ? "shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
              : "shadow-[0_0_15px_rgba(0,0,0,0.1)]" 
            : ""
        }`}
      />
      
      {/* Inner content */}
      <div className="flex flex-col items-center justify-center space-y-1 z-10">
        <Network 
          size={22} 
          className={`mb-1 ${
            theme === "dark" 
              ? "text-white/80" 
              : "text-black/80"
          }`} 
        />
        <p 
          className={`text-xs font-medium tracking-wider ${
            theme === "dark" 
              ? "text-white/80" 
              : "text-black/80"
          }`}
        >
          WE ARE
        </p>
        <p 
          className={`text-sm font-bold tracking-wider ${
            theme === "dark" 
              ? "text-white" 
              : "text-black"
          }`}
        >
          SOCIAL
        </p>
      </div>
      
      {/* Inner circle decoration */}
      <div 
        className={`absolute inset-3 border rounded-full ${
          theme === "dark" 
            ? "border-white/20" 
            : "border-black/20"
        }`}
      />
    </div>
  );
};

export default SocialSeal;
