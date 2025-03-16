
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface ServiceFeature {
  id: number;
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  shortDescription: string;
  features: ServiceFeature[];
  media?: string[];
}

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Commercial');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(true);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Sample services data
  const services: Service[] = [
    {
      id: 1,
      title: "Werbefilmproduktion",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Fesselnde Werbefilme, die deine Marke zum Leben erwecken.",
      description: "Von der Konzeption bis zur finalen Nachbearbeitung schaffen wir Werbefilme, die deine Zielgruppe begeistern und überzeugen. Mit einem Auge für cineastische Details und einem tiefen Verständnis für effektives Storytelling kreieren wir Inhalte, die nicht nur informieren, sondern auch inspirieren.",
      features: [
        { id: 1, title: "Kreative Konzeption", description: "Individuelle Storytelling-Ansätze für deine Marke" },
        { id: 2, title: "High-End Produktion", description: "Modernste Technik für cineastische Qualität" },
        { id: 3, title: "Post-Production", description: "Professionelles Color Grading und Visual Effects" }
      ],
      media: [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611162616475-46592b321512?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 2,
      title: "Produkt-Visualisierung",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Deine Produkte in perfektem Licht und aus jedem Blickwinkel.",
      description: "Professionelle Produktvisualisierung mit kinematischem Look. Durch kreative Beleuchtung und Komposition setzen wir deine Produkte nicht nur in Szene – wir erzählen ihre Geschichte und bringen ihre Einzigartigkeit zum Ausdruck.",
      features: [
        { id: 1, title: "360° Ansichten", description: "Vollständige Produktdarstellung aus allen Perspektiven" },
        { id: 2, title: "Detailaufnahmen", description: "Präzise Nahaufnahmen für wichtige Produktmerkmale" },
        { id: 3, title: "Lifestyle-Integration", description: "Produkte im realen Anwendungskontext" }
      ],
      media: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 3,
      title: "Musikvideos",
      category: "Music",
      imageUrl: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Visuelle Geschichten, die die Emotion deiner Musik einfangen.",
      description: "Musikvideos mit emotionaler Tiefe und visueller Intensität. Wir erschaffen visuelle Geschichten, die die Musik zum Leben erwecken und emotional berühren – vom Konzept bis zum fertigen Video, das dein Publikum in seinen Bann zieht.",
      features: [
        { id: 1, title: "Konzeptentwicklung", description: "Kreative Visualisierung deiner musikalischen Botschaft" },
        { id: 2, title: "Performance-Shooting", description: "Professionelle Aufnahmen mit dynamischen Kamerabewegungen" },
        { id: 3, title: "Narrative Elemente", description: "Erzählerische Komponenten, die deine Musik ergänzen" }
      ],
      media: [
        "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 4,
      title: "Event Coverage",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Fange jeden bedeutsamen Moment deines Events perfekt ein.",
      description: "Professionelle Event-Dokumentation, die jeden magischen Moment festhält. Vom intimen Firmenevent bis zur großen Gala – wir sorgen dafür, dass kein wichtiger Augenblick verloren geht und dein Event in seiner besten Form verewigt wird.",
      features: [
        { id: 1, title: "Live-Capturing", description: "Spontane Momente in höchster Qualität festhalten" },
        { id: 2, title: "Highlight-Videos", description: "Zusammenfassungen für Social Media und Marketing" },
        { id: 3, title: "Interview-Segmente", description: "Professionelle Teilnehmer-Interviews" }
      ],
      media: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 5,
      title: "Luftaufnahmen",
      category: "Aerial",
      imageUrl: "https://images.unsplash.com/photo-1592562653516-aaff2e95e80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Atemberaubende Perspektiven aus der Vogelperspektive.",
      description: "Cinematic Aerial Aufnahmen, die neue Perspektiven eröffnen. Mit modernster Drohnentechnik und jahrelanger Erfahrung erschaffen wir epische Aufnahmen, die deinem Projekt eine zusätzliche Dimension verleihen und deine Zuschauer beeindrucken.",
      features: [
        { id: 1, title: "Komplexe Flugmanöver", description: "Dynamische Kamerafahrten für cinematischen Look" },
        { id: 2, title: "4K/6K Auflösung", description: "Höchste Bildqualität und Detailschärfe" },
        { id: 3, title: "Standort-Scouting", description: "Identifikation optimaler Aufnahmeorte" }
      ],
      media: [
        "https://images.unsplash.com/photo-1592562653516-aaff2e95e80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1577351945770-83f3f9895f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 6,
      title: "Hochzeitsfilme",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Emotionale Momente für die Ewigkeit festgehalten.",
      description: "Hochzeitsfilme, die eure schönsten Momente für immer bewahren. Mit einem unaufdringlichen Ansatz und einem Auge für authentische Emotionen erschaffen wir einen Film, der die Magie eures besonderen Tages für immer festhält und jede Träne und jedes Lachen lebendig erhält.",
      features: [
        { id: 1, title: "Dokumentarischer Stil", description: "Natürliche und authentische Momentaufnahmen" },
        { id: 2, title: "Emotionale Narrative", description: "Erzählerische Gestaltung eurer einzigartigen Geschichte" },
        { id: 3, title: "Cinematic Look", description: "Hochwertige Farbkorrektur und Bearbeitung" }
      ],
      media: [
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
  ];

  const categories = ['Commercial', 'Events', 'Music', 'Aerial'];

  const filteredServices = services.filter(service => service.category === selectedCategory);

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const closeServiceDetails = () => {
    setIsDialogOpen(false);
  };

  return (
    <section id="services" className="py-20 px-6 md:px-12 relative" ref={servicesRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 cinematic-text">
            Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-3">
            Individuelle Medienproduktionen für deine Vision
          </p>
          <p className="text-white/60 max-w-2xl mx-auto">
            Von kreativen Werbeproduktionen bis hin zu einzigartigen Event-Coverages – entdecke meine Services, die Geschichten lebendig machen.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="sticky top-24 z-10 py-4 bg-black/80 backdrop-blur-sm mb-12">
          <div className="flex justify-center space-x-4 overflow-x-auto scrollbar-none pb-2">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap ${
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
        </div>

        {/* Full-Width, Alternating Layout */}
        <div className="space-y-32">
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: contentLoaded ? 1 : 0, y: contentLoaded ? 0 : 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Full-Width Image Container */}
                <div 
                  className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openServiceDetails(service)}
                >
                  <motion.div 
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    {/* Content Overlay - Always Visible */}
                    <div className={`absolute ${isReversed ? 'left-0' : 'right-0'} bottom-0 p-8 w-full md:w-1/2 transition-all duration-300`}>
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-[#FFCC00]/90 text-black rounded-full">
                        {service.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/80 mb-6 transform transition-all duration-300">{service.shortDescription}</p>
                      
                      {/* Feature List - Visible on larger screens */}
                      <div className="hidden md:block space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <HoverCard key={feature.id}>
                            <HoverCardTrigger asChild>
                              <div className="flex items-start space-x-3 cursor-pointer">
                                <div className="shrink-0 mt-0.5">
                                  <div className="w-5 h-5 rounded-full bg-[#FFCC00] flex items-center justify-center">
                                    <ChevronRight size={14} className="text-black" />
                                  </div>
                                </div>
                                <p className="font-medium text-white/90">{feature.title}</p>
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="bg-black/95 border-white/20 text-white w-80">
                              <div className="space-y-2">
                                <h4 className="font-semibold">{feature.title}</h4>
                                <p className="text-sm text-white/80">{feature.description}</p>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                      
                      {/* Play Button Overlay - Center of Image */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div 
                          className="p-4 rounded-full bg-[#FFCC00]"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="text-black" size={24} />
                        </motion.div>
                      </div>
                      
                      {/* CTA Button */}
                      <motion.button
                        className="px-6 py-3 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openServiceDetails(service);
                        }}
                      >
                        Jetzt anfragen
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black/95 border-white/10 text-white max-w-4xl p-0 overflow-hidden">
            <AnimatePresence>
              {selectedService && (
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">{selectedService.title}</h2>
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider bg-[#FFCC00]/90 text-black rounded-full">
                      {selectedService.category}
                    </span>
                    <p className="text-white/80 mb-8">{selectedService.description}</p>
                    
                    {selectedService.media && selectedService.media.length > 0 && (
                      <Carousel className="w-full mb-8">
                        <CarouselContent>
                          {selectedService.media.map((src, idx) => (
                            <CarouselItem key={idx} className="h-[450px]">
                              <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-md">
                                <img 
                                  src={src} 
                                  alt={`${selectedService.title} - Bild ${idx + 1}`} 
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
                    
                    <div className="space-y-5 mb-8">
                      <h3 className="text-xl font-semibold mb-4">Das bieten wir dir:</h3>
                      {selectedService.features.map((feature) => (
                        <div key={feature.id} className="flex items-start space-x-3">
                          <div className="shrink-0 mt-0.5">
                            <div className="w-5 h-5 rounded-full bg-[#FFCC00] flex items-center justify-center">
                              <ChevronRight size={14} className="text-black" />
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">{feature.title}</p>
                            <p className="text-sm text-white/70 mt-1">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                      <Button 
                        className="px-8 py-6 bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 rounded-full text-sm uppercase tracking-wider"
                        asChild
                      >
                        <a href="/kontakt">Jetzt Projekt starten</a>
                      </Button>
                      <Button 
                        className="px-8 py-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-sm uppercase tracking-wider"
                        onClick={closeServiceDetails}
                      >
                        Zurück zu Services
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* Services CTA */}
        <div className="text-center mt-20">
          <motion.a 
            href="/kontakt"
            className="px-8 py-4 bg-[#FFCC00] text-black rounded-full hover:bg-[#FFCC00]/90 transition-all duration-300 text-sm uppercase tracking-wider inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lass uns deine Vision verwirklichen
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
