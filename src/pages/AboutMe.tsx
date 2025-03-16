import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Instagram, ExternalLink, Camera, Youtube, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { useTheme } from '../context/ThemeContext';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

const AboutMe = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const { theme } = useTheme();
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Force content to be visible, regardless of initial state
    setContentLoaded(true);
    
    // Log to verify component is mounting
    console.log('AboutMe component mounted, content should be visible');
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const scrollToInstagram = () => {
    instagramRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-300 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute object-cover w-full h-full scale-[1.01]"
            muted
            autoPlay
            loop
            playsInline
            poster="/placeholder.svg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-32269-large.mp4" type="video/mp4" />
            Dein Browser unterstützt kein Video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 max-w-5xl leading-tight text-shadow-lg uppercase tracking-wider">
            Visual Artist – Momente einfangen, Emotionen wecken
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 text-shadow-sm">
            Als visueller Künstler aus Frankfurt erschaffe ich cinematic Fotografie und Videoinhalte, die Geschichten erzählen und Emotionen transportieren.
          </p>
          <button
            onClick={scrollToInstagram}
            className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:opacity-90 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
          >
            MEHR ÜBER MICH ERFAHREN
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-500"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <p className={`text-sm mb-2 uppercase tracking-widest ${theme === "dark" ? "text-white/70" : "text-black"}`}>Entdecken</p>
          <ArrowDown className={`animate-bounce ${theme === "dark" ? "text-white/70" : "text-black"}`} size={24} />
        </div>
      </section>
      
      {/* Storytelling Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <h2 className={`text-3xl md:text-4xl font-display font-bold mb-8 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
                Die Kunst des visuellen Storytellings
              </h2>
              <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6`}>
                Meine Leidenschaft ist es, durch die Linse Geschichten zu erzählen, die berühren und inspirieren. Mit einem Blick für Details und einer cinematic Bildsprache erschaffe ich visuelle Erlebnisse, die in Erinnerung bleiben.
              </p>
              <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-8`}>
                Von kommerziellen Projekten bis hin zu künstlerischen Arbeiten – ich bringe deine Vision mit technischer Präzision und kreativem Flair zum Leben.
              </p>
              <a 
                href="/portfolio"
                className={`inline-block px-6 py-3 ${theme === "dark" ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white" : "bg-black/10 backdrop-blur-sm border border-black/20 text-black"} rounded-full hover:bg-white/20 transition-all duration-300 text-sm uppercase tracking-wider`}
              >
                Mein Portfolio entdecken
              </a>
            </div>
            
            <div className="order-1 md:order-2 relative animate-on-scroll">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl image-shimmer">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-32269-large.mp4" type="video/mp4" />
                  Dein Browser unterstützt kein Video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy and Vision Section */}
      <section className="py-20 px-6 md:px-12 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6 uppercase tracking-wider text-white">
              Von kommerziellen Projekten bis künstlerischen Arbeiten
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Ich bringe deine Vision mit technischer Präzision und kreativem Flair zum Leben.
              Mein Ziel ist es, Projekte zu schaffen, die mehr sind als Bilder – sie sind emotionale Geschichten.
            </p>
          </div>
          
          {/* Carousel using shadcn ui carousel component */}
          <div className="animate-on-scroll">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Project 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" alt="Project 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="Project 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1576155935431-26858856a238?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="Project 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-2">
                <CarouselPrevious className="static transform-none translate-y-0 rounded-full border-white/40 bg-black/20 backdrop-blur-md hover:bg-black/40" />
                <CarouselNext className="static transform-none translate-y-0 rounded-full border-white/40 bg-black/20 backdrop-blur-md hover:bg-black/40" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* Enhanced Instagram Highlight Section */}
      <section 
        ref={instagramRef} 
        className="py-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`font-medium text-sm uppercase tracking-widest ${theme === "dark" ? "text-white/50" : "text-black/70"}`}>
              Social Media
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              Folge meiner kreativen Reise auf Instagram
            </h2>
            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
              Auf Instagram teile ich regelmäßig neue Projekte, Behind-the-Scenes und kreative Inspirationen.
            </p>
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center justify-center text-xl mb-2">
                <Instagram size={24} className={`mr-2 ${theme === "dark" ? "text-white" : "text-black"}`} />
                <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>@robertspods</span>
              </div>
              <p className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                Tägliche visuelle Inspiration
              </p>
            </div>
          </div>
          
          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-on-scroll">
            <InstagramPost 
              imageUrl="https://images.unsplash.com/photo-1514907283155-ea5f4094c70c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              caption="Cinematic Sunset in Frankfurt" 
              hashtags="#frankfurtsunset #cinematicphotography" 
              likes={234}
              comments={18}
            />
            <InstagramPost 
              imageUrl="https://images.unsplash.com/photo-1553527922-767df645c5f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              caption="Behind the Scenes" 
              hashtags="#frankfurtphotographer #bts" 
              likes={187}
              comments={12}
            />
            <InstagramPost 
              imageUrl="https://images.unsplash.com/photo-1634985492257-fd5e796164a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
              caption="Urban Photography Series" 
              hashtags="#frankfurt #urbanphotography" 
              likes={312}
              comments={27}
            />
            <InstagramPost 
              imageUrl="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              caption="Light and Shadows" 
              hashtags="#cinematicphotography #lightandshadow" 
              likes={268}
              comments={21}
            />
          </div>
          
          <div className="flex justify-center animate-on-scroll">
            <a 
              href="https://instagram.com/robertspods" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:opacity-90 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
            >
              Auf Instagram Folgen
              <ExternalLink size={16} className="ml-2 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className={`py-20 px-6 md:px-12 ${theme === "dark" ? "bg-black/50" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`font-medium text-sm uppercase tracking-widest ${theme === "dark" ? "text-white/50" : "text-black/70"}`}>Equipment</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              Meine Werkzeuge
            </h2>
            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
              Qualität beginnt mit dem richtigen Equipment. Das ist meine Ausrüstung für professionelle Ergebnisse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className={`${theme === "dark" ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white/80 backdrop-blur-sm border border-black/5"} rounded-xl p-6 hover-lift`}>
              <h3 className={`text-xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Cameras</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                <li>Sony Alpha A7S III</li>
                <li>Canon EOS R5</li>
                <li>DJI Ronin 4D</li>
                <li>Blackmagic Pocket 6K</li>
              </ul>
            </div>
            
            <div className={`${theme === "dark" ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white/80 backdrop-blur-sm border border-black/5"} rounded-xl p-6 hover-lift`}>
              <h3 className={`text-xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Objektive</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                <li>Sony GM 24-70mm f/2.8</li>
                <li>Canon RF 50mm f/1.2</li>
                <li>Sigma Art 35mm f/1.4</li>
                <li>Sony 85mm f/1.4 GM</li>
              </ul>
            </div>
            
            <div className={`${theme === "dark" ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white/80 backdrop-blur-sm border border-black/5"} rounded-xl p-6 hover-lift`}>
              <h3 className={`text-xl font-display font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Zubehör</h3>
              <ul className={`space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                <li>DJI RS 3 Pro Gimbal</li>
                <li>Godox Lichtsystem</li>
                <li>Rode Wireless Pro</li>
                <li>Atomos Ninja V</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media Platforms Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`font-medium text-sm uppercase tracking-widest ${theme === "dark" ? "text-white/50" : "text-black/70"}`}>
              Plattformen
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
              Folge mir auf Social Media
            </h2>
            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
              Entdecke meine verschiedenen Kanäle und bleibe auf dem Laufenden über neue Projekte und kreative Inhalte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-on-scroll">
            <a 
              href="https://instagram.com/robertspods" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${theme === "dark" ? "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10" : "bg-white/80 hover:bg-white/90 backdrop-blur-sm border border-black/5"}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-gradient-to-br from-purple-600 to-orange-500" : "bg-gradient-to-br from-purple-600 to-orange-500"}`}>
                  <Instagram size={24} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Instagram</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>@robertspods</p>
                </div>
              </div>
              <p className={`text-sm mb-3 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Einblicke in meine tägliche Arbeit, Behind-the-Scenes und visuelle Inspiration.</p>
              <span className={`text-xs flex items-center ${theme === "dark" ? "text-white/50" : "text-black/50"} group-hover:${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Folgen <ExternalLink size={12} className="ml-1" />
              </span>
            </a>
            
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${theme === "dark" ? "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10" : "bg-white/80 hover:bg-white/90 backdrop-blur-sm border border-black/5"}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-red-600`}>
                  <Youtube size={24} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>YouTube</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Robert Spods</p>
                </div>
              </div>
              <p className={`text-sm mb-3 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Cinematic Videos, Tutorials und ausführliche Projekte im Bewegtbild.</p>
              <span className={`text-xs flex items-center ${theme === "dark" ? "text-white/50" : "text-black/50"} group-hover:${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Abonnieren <ExternalLink size={12} className="ml-1" />
              </span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${theme === "dark" ? "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10" : "bg-white/80 hover:bg-white/90 backdrop-blur-sm border border-black/5"}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-blue-600`}>
                  <Linkedin size={24} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>LinkedIn</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Robert Spods</p>
                </div>
              </div>
              <p className={`text-sm mb-3 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Professionelle Updates und Business-Inhalte für die Kreativbranche.</p>
              <span className={`text-xs flex items-center ${theme === "dark" ? "text-white/50" : "text-black/50"} group-hover:${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Vernetzen <ExternalLink size={12} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}>
            Lass uns gemeinsam deine Geschichte erzählen
          </h2>
          <p className={`text-lg mb-10 ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
            Für kommerzielle Projekte oder persönliche Geschichten – ich setze deine Ideen mit Leidenschaft und Präzision um.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/kontakt" 
              className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:opacity-90 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
            >
              Jetzt Projekt anfragen
            </a>
            <a 
              href="/portfolio" 
              className={`px-8 py-4 ${theme === "dark" ? "bg-transparent border border-white/20 text-white" : "bg-transparent border border-black/20 text-black"} rounded-full hover:${theme === "dark" ? "bg-white/10" : "bg-black/10"} transition-all duration-300 text-sm uppercase tracking-wider font-medium`}
            >
              Mehr Arbeiten entdecken
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

// Enhanced Instagram Post Component
const InstagramPost = ({ 
  imageUrl, 
  caption, 
  hashtags, 
  likes,
  comments
}: { 
  imageUrl: string; 
  caption: string; 
  hashtags: string; 
  likes: number;
  comments: number;
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="overflow-hidden rounded-lg group">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          loading="lazy"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}>
          <div className="flex items-center justify-between text-white mb-1">
            <div className="flex items-center">
              <Camera size={14} className="mr-1" />
              <span className="text-sm">{likes} Likes</span>
            </div>
            <div className="flex items-center">
              <ExternalLink size={14} className="mr-1" />
              <span className="text-sm">{comments} Comments</span>
            </div>
          </div>
          <p className="text-white text-sm font-medium leading-snug">{caption}</p>
          <p className="text-white/70 text-xs mt-1">{hashtags}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
