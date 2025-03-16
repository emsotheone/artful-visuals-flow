
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  media?: string[];
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(true);
  const portfolioRef = useRef<HTMLDivElement>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Aerial Frankfurt",
      category: "Videografie",
      imageUrl: "https://images.unsplash.com/photo-1592562653516-aaff2e95e80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Cinematic Aerial Aufnahmen der Skyline von Frankfurt. Eine epische Perspektive auf die Finanzmetropole, die ihre architektonische Schönheit und urbane Dynamik einfängt.",
      media: [
        "https://images.unsplash.com/photo-1592562653516-aaff2e95e80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1577351945770-83f3f9895f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 2,
      title: "Urban Portraits",
      category: "Fotografie",
      imageUrl: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Urbane Portraitfotografie in den Straßen von Frankfurt. Authentische Momente, die die Persönlichkeit in der urbanen Umgebung zum Leben erwecken.",
      media: [
        "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 3,
      title: "Produktvisualisierung",
      category: "Fotografie",
      imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Professionelle Produktfotografie mit kinematischem Look. Durch kreative Beleuchtung und Komposition setzen wir Ihre Produkte perfekt in Szene.",
      media: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 4,
      title: "Musikvideo",
      category: "Videografie",
      imageUrl: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Musikvideo mit emotionaler Tiefe und visueller Intensität. Wir erschaffen visuelle Geschichten, die die Musik zum Leben erwecken und emotional berühren.",
      media: [
        "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 5,
      title: "Architekturfotografie",
      category: "Fotografie",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Architekturfotografie mit einzigartigem Blick für Details. Wir betonen die einzigartigen Linien, Formen und Texturen jeder architektonischen Kreation.",
      media: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 6,
      title: "Werbespot",
      category: "Videografie",
      imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Professionelle Werbespots mit cinematic Flair. Wir kreieren überzeugende visuelle Botschaften, die Ihre Marke unvergesslich machen.",
      media: [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611162616475-46592b321512?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
  ];

  const categories = ['Alle', 'Fotografie', 'Videografie'];

  const filteredProjects = selectedCategory && selectedCategory !== 'Alle'
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  // Set projects as initially visible
  useEffect(() => {
    setContentLoaded(true);
  }, []);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeProjectDetails = () => {
    setIsDialogOpen(false);
  };

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 cinematic-text">
            Portfolio
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Eine Auswahl meiner besten Arbeiten aus den Bereichen Fotografie und Videografie
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#FFCC00] text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Artistic Container Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {filteredProjects.map((project, index) => {
            // Alternate sizes and grid positions for artistic layout
            const isLarge = index % 3 === 0;
            const gridPos = index % 2 === 0 
              ? 'md:col-span-7' 
              : 'md:col-span-5 md:col-start-6';
            
            return (
              <motion.div
                key={project.id}
                className={`relative overflow-hidden rounded-lg ${isLarge ? 'md:col-span-8' : gridPos} 
                            h-[400px] md:h-[500px] ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: contentLoaded ? 1 : 0, y: contentLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openProjectDetails(project)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-[#FFCC00]/90 text-black rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-4">{project.description}</p>
                    <motion.button
                      className="inline-flex items-center px-4 py-2 bg-[#FFCC00] text-black text-sm rounded-full hover:bg-[#FFCC00]/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={16} className="mr-2" /> Details ansehen
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black/95 border-white/10 text-white max-w-4xl p-0 overflow-hidden">
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <DialogClose className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
                    <X size={24} />
                  </DialogClose>
                  
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">{selectedProject.title}</h2>
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider bg-[#FFCC00]/90 text-black rounded-full">
                      {selectedProject.category}
                    </span>
                    <p className="text-white/80 mb-8">{selectedProject.description}</p>
                    
                    {selectedProject.media && selectedProject.media.length > 0 && (
                      <Carousel className="w-full mb-8">
                        <CarouselContent>
                          {selectedProject.media.map((src, idx) => (
                            <CarouselItem key={idx} className="h-[450px]">
                              <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-md">
                                <img 
                                  src={src} 
                                  alt={`${selectedProject.title} - Bild ${idx + 1}`} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-black/50 hover:bg-black/70 text-white border-0" />
                        <CarouselNext className="right-4 bg-black/50 hover:bg-black/70 text-white border-0" />
                      </Carousel>
                    )}
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                      <Button 
                        className="px-8 py-6 bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 rounded-full text-sm uppercase tracking-wider"
                        asChild
                      >
                        <a href="/kontakt">Jetzt Projekt anfragen</a>
                      </Button>
                      <Button 
                        className="px-8 py-6 bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 rounded-full text-sm uppercase tracking-wider"
                        onClick={closeProjectDetails}
                      >
                        Zurück zum Portfolio
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <motion.a 
            href="/kontakt"
            className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lass uns deine Geschichte erzählen
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
