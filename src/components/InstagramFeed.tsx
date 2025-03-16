import { useEffect, useState } from 'react';
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
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1579656381439-8ca2b6c58df6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Dynamic Portrait Session',
    likes: 298,
    comments: 45,
    permalink: 'https://www.instagram.com/p/Cy2pV7KoP8j/',
    tags: ['portraitphotography', 'frankfurtmodel', 'cinematic']
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1553781053-fef2b4efcf6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Frankfurt by Night',
    likes: 345,
    comments: 38,
    permalink: 'https://www.instagram.com/p/CyzJwAoIKsL/',
    tags: ['nightphotography', 'urbanlandscape', 'frankfurtcity']
  }
];

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setPosts(fallbackPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts. Please try again later.');
        setPosts(fallbackPosts);
        setLoading(false);
      }
    };
    
    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-[#FFCC00] animate-spin"></div>
        <p className={`mt-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Lade Instagram-Posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-8">
        <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 mb-12">
        <a 
          href="https://instagram.com/roberts.pods" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Instagram 
            size={28} 
            className={`mr-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          />
          <span className={`text-2xl font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>@roberts.pods</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {posts.slice(0, 6).map((post) => (
          <a 
            key={post.id}
            href={post.permalink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block aspect-square overflow-hidden rounded-xl group relative"
          >
            <img 
              src={post.imageUrl} 
              alt={post.caption} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100">
              <div className="self-end">
                <ExternalLink size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium line-clamp-2 text-sm mb-2">{post.caption}</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart size={16} className="text-white" />
                    <span className="text-white text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} className="text-white" />
                    <span className="text-white text-xs">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
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
    </div>
  );
};

export default InstagramFeed;
