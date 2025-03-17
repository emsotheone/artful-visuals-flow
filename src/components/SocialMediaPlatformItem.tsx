
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface SocialMediaPlatformItemProps {
  icon: LucideIcon;
  platform: string;
  description: string;
  stats?: string;
}

const SocialMediaPlatformItem = ({ 
  icon: Icon, 
  platform, 
  description, 
  stats 
}: SocialMediaPlatformItemProps) => {
  const { theme } = useTheme();
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-start space-x-3 mb-6 group transition-all duration-300 hover:scale-105 cursor-pointer">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:brightness-110 ${
            theme === "dark" 
              ? "bg-white/10 group-hover:bg-white/15" 
              : "bg-black/10 group-hover:bg-black/15"
          } backdrop-blur-sm flex-shrink-0`}>
            <Icon className={`transition-all duration-300 ${
              theme === "dark" 
                ? "text-white group-hover:text-[#FFCC00]" 
                : "text-black group-hover:text-[#FFCC00]"
            }`} size={18} />
          </div>
          <div>
            <h4 className={`font-medium text-lg transition-colors duration-300 ${
              theme === "dark" 
                ? "text-white group-hover:text-[#FFCC00]" 
                : "text-black group-hover:text-[#FFCC00]"
            }`}>{platform}</h4>
            <p className={`transition-opacity duration-300 ${
              theme === "dark" 
                ? "text-white/70 text-sm group-hover:text-white/90" 
                : "text-black/70 text-sm group-hover:text-black/90"
            }`}>{description}</p>
          </div>
        </div>
      </HoverCardTrigger>
      {stats && (
        <HoverCardContent 
          className={`p-4 ${
            theme === "dark" 
              ? "bg-black/90 border-white/10" 
              : "bg-white/90 border-black/10"
          }`}
        >
          <div className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            <p className="font-medium">{platform}</p>
            <p className={`mt-1 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>{stats}</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default SocialMediaPlatformItem;
