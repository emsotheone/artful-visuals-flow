
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SocialMediaPlatformItemProps {
  icon: LucideIcon;
  platform: string;
  description: string;
}

const SocialMediaPlatformItem = ({ icon: Icon, platform, description }: SocialMediaPlatformItemProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-start space-x-3 mb-6">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-sm flex-shrink-0`}>
        <Icon className={theme === "dark" ? "text-white" : "text-black"} size={18} />
      </div>
      <div>
        <h4 className={`font-medium text-lg ${theme === "dark" ? "text-white" : "text-black"}`}>{platform}</h4>
        <p className={theme === "dark" ? "text-white/70 text-sm" : "text-black/70 text-sm"}>{description}</p>
      </div>
    </div>
  );
};

export default SocialMediaPlatformItem;
