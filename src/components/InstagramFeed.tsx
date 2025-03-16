
import { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useTheme } from '../context/ThemeContext';
import { Instagram, Heart } from 'lucide-react';

// Mock Instagram post data
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Cinematic Sunset in Frankfurt',
    likes: 234,
    tags: ['frankfurt', 'cinematicphotography', 'sunset']
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Behind the Scenes',
    likes: 187,
    tags: ['frankfurtphotographer', 'behindthescenes', 'filmmaking']
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1597655601841-214a4d3f9add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Urban Photography Series',
    likes: 312,
    tags: ['frankfurt', 'urbanphotography', 'streetscenes']
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Light and Shadows',
    likes: 268,
    tags: ['cinematicphotography', 'lightandshadow', 'visualart']
  }
];

const InstagramFeed = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially and on resize
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full"
    >
      <CarouselContent>
        {instagramPosts.map((post) => (
          <CarouselItem key={post.id} className={`${isMobile ? 'basis-full' : 'basis-1/2 md:basis-1/3 lg:basis-1/4'} pl-4`}>
            <div className="h-full">
              <div className={`rounded-xl overflow-hidden h-full flex flex-col border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} bg-card`}>
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.caption} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Instagram size={16} className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} />
                      <span className={`text-xs ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>@robertspods</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{post.likes}</span>
                    </div>
                  </div>
                  
                  <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{post.caption}</h4>
                  
                  <div className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-white/10 text-white/70' : 'bg-black/5 text-black/70'}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="relative static translate-y-0 left-0 mr-4" />
        <CarouselNext className="relative static translate-y-0 right-0" />
      </div>
    </Carousel>
  );
};

export default InstagramFeed;
