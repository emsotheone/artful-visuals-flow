
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FullScreenCarousel from './FullScreenCarousel';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Aerial Frankfurt",
      category: "Videografie",
      imageUrl: "https://images.unsplash.com/photo-1592562653516-aaff2e95e80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Cinematic Aerial Aufnahmen der Skyline von Frankfurt."
    },
    {
      id: 2,
      title: "Urban Portraits",
      category: "Fotografie",
      imageUrl: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Urbane Portraitfotografie in den Straßen von Frankfurt."
    },
    {
      id: 3,
      title: "Produktvisualisierung",
      category: "Fotografie",
      imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Professionelle Produktfotografie mit kinematischem Look."
    },
    {
      id: 4,
      title: "Musikvideo",
      category: "Videografie",
      imageUrl: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Musikvideo mit emotionaler Tiefe und visueller Intensität."
    },
    {
      id: 5,
      title: "Architekturfotografie",
      category: "Fotografie",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Architekturfotografie mit einzigartigem Blick für Details."
    },
    {
      id: 6,
      title: "Werbespot",
      category: "Videografie",
      imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Professionelle Werbespots mit cinematic Flair."
    },
  ];

  const categories = ['Alle', 'Fotografie', 'Videografie'];

  const filteredProjects = selectedCategory && selectedCategory !== 'Alle'
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
      observer.observe(project);
    });

    return () => {
      projects.forEach(project => {
        observer.unobserve(project);
      });
    };
  }, [filteredProjects]);

  const openFullScreen = (project: Project) => {
    setSelectedProject(project);
    setIsFullScreenOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullScreen = () => {
    setIsFullScreenOpen(false);
    document.body.style.overflow = '';
  };

  const scrollPortfolio = (direction: 'left' | 'right') => {
    if (portfolioRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      portfolioRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 cinematic-text">
            Portfolio
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Eine Auswahl meiner besten Arbeiten aus den Bereichen Fotografie und Videografie
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category || (category === 'Alle' && !selectedCategory)
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Horizontal Scroll */}
        <div className="relative overflow-hidden my-12">
          <button 
            onClick={() => scrollPortfolio('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition-all"
            aria-label="Nach links scrollen"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={portfolioRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="project-item flex-shrink-0 w-[350px] h-[500px] relative overflow-hidden rounded-md snap-start opacity-0"
                onClick={() => openFullScreen(project)}
              >
                <div className="image-container h-full">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover image-saturate-hover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white text-2xl font-display mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  <button className="self-start px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-colors">
                    Details anzeigen
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scrollPortfolio('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition-all"
            aria-label="Nach rechts scrollen"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Full Portfolio Grid */}
        <div className="portfolio-gallery mt-20">
          {filteredProjects.map((project) => (
            <div 
              key={`grid-${project.id}`}
              className="project-item relative overflow-hidden rounded-md opacity-0 cursor-pointer"
              onClick={() => openFullScreen(project)}
            >
              <div className="image-container h-full">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white/70 text-sm uppercase tracking-wider">{project.category}</span>
                <h3 className="text-white text-2xl font-display mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-20">
          <a 
            href="/kontakt"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 text-sm uppercase tracking-wider inline-block"
          >
            Lass uns deine Geschichte erzählen
          </a>
        </div>
      </div>

      {/* Full Screen Carousel */}
      {isFullScreenOpen && selectedProject && (
        <FullScreenCarousel 
          currentProject={selectedProject}
          projects={filteredProjects}
          onClose={closeFullScreen}
        />
      )}
    </section>
  );
};

export default Portfolio;
