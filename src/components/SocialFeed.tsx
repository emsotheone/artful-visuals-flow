
import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

interface SocialPost {
  id: number;
  imageUrl: string;
  caption: string;
  likes: number;
  type: 'image' | 'video';
  videoUrl?: string;
}

const SocialFeed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Mock Instagram posts
  const instagramPosts: SocialPost[] = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1603739421258-4aa79ad860df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "Cinematic Sunset in Frankfurt #cinematography #visualart",
      likes: 234,
      type: 'image'
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1553266841-f3daebed5d59?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "Behind the scenes #frankfurtphotographer",
      likes: 187,
      type: 'video',
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-filmmaker-recording-a-singer-in-a-studio-23492-small.mp4"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1603125301032-bf979a66c8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "Urban Photography Series #frankfurt #urbanphotography",
      likes: 312,
      type: 'image'
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1596786232430-6a5864a6bff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "Light and Shadows #cinematicphotography",
      likes: 268,
      type: 'image'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate section
            entry.target.classList.add('animate-fade-in');
            
            // Animate phone with delay
            if (phoneRef.current) {
              setTimeout(() => {
                phoneRef.current?.classList.add('animate-float');
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 md:px-12 opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-medium text-white/50 uppercase tracking-widest text-sm">Social Media</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Folge meiner kreativen Reise
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Auf Instagram teile ich regelmäßig neue Projekte, Behind-the-Scenes und kreative Inspirationen
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* iPhone Frame with Feed */}
          <div 
            ref={phoneRef}
            className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-xl overflow-hidden"
          >
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
            
            {/* Instagram Stories UI */}
            <div className="w-full h-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
              {/* Instagram Header */}
              <div className="p-3 flex justify-between items-center border-b border-gray-800">
                <Instagram size={20} className="text-white" />
                <span className="text-white font-semibold text-sm">robertspods</span>
                <div className="w-5"></div> {/* Placeholder for balance */}
              </div>
              
              {/* Stories */}
              <div className="py-3 px-2 flex gap-3 overflow-x-auto scrollbar-none">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-[2px] flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1597655601841-214a4d3f9add?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" 
                        alt="Story" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-white text-xs mt-1">Dein Story</span>
                </div>
                
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-[2px] flex-shrink-0">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-${1590000000000 + index * 100000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80`}
                          alt={`Story ${index}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-white text-xs mt-1 truncate w-16 text-center">
                      {['BTS', 'Projekt', 'Frankfurt', 'Shooting'][index]}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Posts */}
              <div className="flex flex-col divide-y divide-gray-800">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="pb-4">
                    {/* Post Header */}
                    <div className="p-3 flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src="https://images.unsplash.com/photo-1597655601841-214a4d3f9add?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-white text-sm font-semibold">robertspods</span>
                    </div>
                    
                    {/* Post Content */}
                    <div className="relative aspect-square">
                      {post.type === 'image' ? (
                        <img 
                          src={post.imageUrl} 
                          alt={post.caption} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={post.videoUrl} type="video/mp4" />
                        </video>
                      )}
                    </div>
                    
                    {/* Post Actions */}
                    <div className="px-3 py-2">
                      <div className="flex items-center mb-2">
                        <span className="text-white text-xs">{post.likes} Likes</span>
                      </div>
                      <p className="text-white text-xs">
                        <span className="font-semibold mr-1">robertspods</span>
                        {post.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Text Content */}
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ästhetik trifft auf Authentizität
            </h3>
            <p className="text-white/80 mb-8">
              Während mein Portfolio ausgewählte Projekt-Highlights zeigt, gebe ich auf meinen sozialen Kanälen Einblicke in den kreativen Prozess, teile Inspirationen und nehme dich mit auf meine fotografische und filmische Reise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">@robertspods</h4>
                  <p className="text-white/60 text-sm">Tägliche visuelle Inspiration</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300 text-sm uppercase tracking-wider"
            >
              Auf Instagram folgen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
