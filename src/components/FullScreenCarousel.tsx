
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

interface FullScreenCarouselProps {
  currentProject: Project;
  projects: Project[];
  onClose: () => void;
}

const FullScreenCarousel = ({ currentProject, projects, onClose }: FullScreenCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Find the index of the current project
    const index = projects.findIndex(project => project.id === currentProject.id);
    setCurrentIndex(index >= 0 ? index : 0);

    // Add keyboard event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigateTo('prev');
      } else if (e.key === 'ArrowRight') {
        navigateTo('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentProject.id, projects, onClose]);

  const navigateTo = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + projects.length) % projects.length
      : (currentIndex + 1) % projects.length;
      
    setCurrentIndex(newIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // If swipe is significant
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next
        navigateTo('next');
      } else {
        // Swipe right, go to previous
        navigateTo('prev');
      }
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 ${theme === 'dark' ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-white'} flex items-center justify-center`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className={`absolute top-6 right-6 z-20 ${theme === 'dark' ? 'text-white hover:text-white/70' : 'text-black hover:text-black/70'} transition-colors p-2`}
        aria-label="Schließen"
      >
        <X size={32} />
      </button>
      
      {/* Left navigation */}
      <button 
        onClick={() => navigateTo('prev')}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 z-20 ${
          theme === 'dark' 
            ? 'text-white hover:text-white/70 bg-black/30' 
            : 'text-black hover:text-black/70 bg-gray-200/70'
        } transition-colors p-3 rounded-full backdrop-blur-sm`}
        aria-label="Vorheriges Projekt"
      >
        <ChevronLeft size={32} />
      </button>
      
      {/* Carousel content */}
      <div className="w-full h-full flex items-center justify-center">
        <div 
          className={`relative w-full h-full transform transition-all duration-600 ${
            isTransitioning ? 'opacity-80 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <img
            src={projects[currentIndex].imageUrl}
            alt={projects[currentIndex].title}
            className="w-full h-full object-contain"
          />
          
          {/* Project info */}
          <div className={`absolute bottom-0 left-0 right-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-t from-black/90 to-transparent' 
              : 'bg-gradient-to-t from-white/90 to-transparent'
          } p-8 pb-12`}>
            <div className="max-w-4xl mx-auto">
              <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-sm uppercase tracking-wider`}>
                {projects[currentIndex].category}
              </span>
              <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl md:text-4xl font-display mt-2 mb-3`}>
                {projects[currentIndex].title}
              </h2>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl`}>
                {projects[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right navigation */}
      <button 
        onClick={() => navigateTo('next')}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 z-20 ${
          theme === 'dark' 
            ? 'text-white hover:text-white/70 bg-black/30' 
            : 'text-black hover:text-black/70 bg-gray-200/70'
        } transition-colors p-3 rounded-full backdrop-blur-sm`}
        aria-label="Nächstes Projekt"
      >
        <ChevronRight size={32} />
      </button>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index 
                ? theme === 'dark' ? 'bg-white w-6' : 'bg-black w-6' 
                : theme === 'dark' ? 'bg-white/40' : 'bg-black/40'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Gehe zu Projekt ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullScreenCarousel;
