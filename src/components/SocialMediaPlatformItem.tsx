
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialMediaPlatformItemProps {
  icon: LucideIcon;
  platform: string;
  description: string;
}

const SocialMediaPlatformItem = ({ icon: Icon, platform, description }: SocialMediaPlatformItemProps) => {
  return (
    <div className="flex items-start space-x-3 mb-6">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm flex-shrink-0">
        <Icon className="text-white" size={18} />
      </div>
      <div>
        <h4 className="text-white font-medium text-lg">{platform}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SocialMediaPlatformItem;
