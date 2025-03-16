
import { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useTheme } from '../context/ThemeContext';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Instagram post interface
interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  permalink: string;
  tags: string[];
}

// This is a fallback data in case the API fetch fails
const fallbackPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Cinematic Sunset in Frankfurt',
    likes: 234,
    comments: 42,
    permalink: 'https://www.instagram.com/p/CzKtG2Io1dk/',
    tags: ['frankfurt', 'cinematicphotography', 'sunset']
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Behind the Scenes',
    likes: 187,
    comments: 24,
    permalink: 'https://www.instagram.com/p/CzFrT8soYMp/',
    tags: ['frankfurtphotographer', 'behindthescenes', 'filmmaking']
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1597655601841-214a4d3f9add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Urban Photography Series',
    likes: 312,
    comments: 56,
    permalink: 'https://www.instagram.com/p/CzApQj2IYrG/',
    tags: ['frankfurt', 'urbanphotography', 'streetscenes']
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Light and Shadows',
    likes: 268,
    comments: 31,
    permalink: 'https://www.instagram.com/p/Cy5mM8KILnR/',
    tags: ['cinematicphotography', 'lightandshadow', 'visualart']
  }
];

const InstagramFeed = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState<InstagramPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    // In a real implementation, you would fetch Instagram data using their API
    // For this demonstration, we're using a timeout to simulate an API call
    // and falling back to mock data
    
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Simulating API call - in a real implementation, this would be replaced with an actual fetch
        // Since Instagram's API requires authentication and can't be directly accessed from client-side,
        // you would typically implement this using a backend service
        
        // For demonstration purposes, we're just using a timeout and fallback data
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // If we had a real API endpoint, it would look something like this:
        // const response = await fetch('/api/instagram-feed');
        // const data = await response.json();
        // setPosts(data);
        
        // For now, we'll use our fallback data
        setPosts(fallbackPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts. Please try again later.');
        setPosts(fallbackPosts); // Use fallback data on error
        setLoading(false);
      }
    };
    
    fetchInstagramPosts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-[#FFCC00] animate-spin"></div>
        <p className={`mt-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Lade Instagram-Posts...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full text-center py-8">
        <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{error}</p>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id} className={`${isMobile ? 'basis-full' : 'basis-1/2 md:basis-1/3 lg:basis-1/4'} pl-4`}>
            <div className="h-full">
              <div className={`rounded-xl overflow-hidden h-full flex flex-col border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} bg-card`}>
                <a 
                  href={post.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden group"
                >
                  <img 
                    src={post.imageUrl} 
                    alt={post.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </a>
                
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Instagram size={16} className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} />
                      <span className={`text-xs ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>@roberts.pods</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart size={16} className="text-red-500" />
                        <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} />
                        <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className={`font-medium mb-2 line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{post.caption}</h4>
                  
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
      
      <div className="text-center mt-12">
        <Button
          asChild
          className="px-8 py-6 bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 rounded-full border-none text-sm font-medium uppercase tracking-wider h-auto"
        >
          <a 
            href="https://instagram.com/roberts.pods"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auf Instagram folgen
          </a>
        </Button>
      </div>
    </Carousel>
  );
};

export default InstagramFeed;
