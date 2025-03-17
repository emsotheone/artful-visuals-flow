
'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  items: {
    id: number;
    title: string;
    category: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export function ContainerScroll({
  titleComponent,
  items,
  className,
}: ContainerScrollProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(true);

  // Update viewport height on mount and resize
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  // Get scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // For iPad rotation effect
  const rotate = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  // For service transitions
  const serviceSectionScrollProgress = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    [0, 1]
  );

  // Watch for changes in scroll progress and update active item
  useEffect(() => {
    const unsubscribe = serviceSectionScrollProgress.on('change', (value) => {
      if (value >= 0.2) {
        // iPad is fully up, we're in the services section
        setScrollLocked(true);
        
        // Calculate current active item based on scroll position
        const itemCount = items.length;
        const itemProgress = Math.min(
          Math.max(0, (value - 0.2) / 0.6), // normalize to 0-1 for service section
          0.999
        );
        const newIndex = Math.floor(itemProgress * itemCount);
        
        if (newIndex !== activeItemIndex) {
          setActiveItemIndex(newIndex);
        }
        
        // When we reach the last item, allow scrolling again
        if (newIndex >= items.length - 1 && value > 0.75) {
          setScrollLocked(false);
        }
      } else {
        setScrollLocked(false);
      }
    });
    
    return () => unsubscribe();
  }, [serviceSectionScrollProgress, items.length, activeItemIndex]);

  // Handle the scroll lock effect
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollLocked && shouldScroll) {
        const direction = e.deltaY > 0 ? 1 : -1;
        
        if (direction > 0 && activeItemIndex < items.length - 1) {
          // Scrolling down and not at last item
          setActiveItemIndex((prev) => Math.min(prev + 1, items.length - 1));
          setShouldScroll(false);
          setTimeout(() => setShouldScroll(true), 800); // Debounce
          e.preventDefault();
        } else if (direction < 0 && activeItemIndex > 0) {
          // Scrolling up and not at first item
          setActiveItemIndex((prev) => Math.max(prev - 1, 0));
          setShouldScroll(false);
          setTimeout(() => setShouldScroll(true), 800); // Debounce
          e.preventDefault();
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollLocked, activeItemIndex, items.length, shouldScroll]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative h-[300vh]", className)}
    >
      <div 
        ref={stickyContainerRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden"
      >
        {/* Title Section */}
        <div className="w-full max-w-7xl px-6 md:px-10 pt-10 md:pt-24 relative z-10">
          {typeof titleComponent === 'string' ? (
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 uppercase tracking-wide ${
              theme === "dark" ? "text-white" : "text-black"
            }`}>
              {titleComponent}
            </h1>
          ) : (
            titleComponent
          )}
        </div>
        
        {/* iPad Container */}
        <div className="flex-1 w-full flex items-center justify-center perspective-[1200px] p-4 mt-8">
          <motion.div
            style={{
              rotateX: rotate,
              scale,
              opacity,
            }}
            className="w-full max-w-5xl aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[40px] border-[12px] border-gray-700 overflow-hidden shadow-2xl flex items-center justify-center"
          >
            {/* Inner iPad Screen */}
            <div className="relative w-full h-full bg-background overflow-hidden">
              {/* Service Items */}
              <div className="absolute inset-0 flex items-center justify-center">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-12 text-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ 
                      opacity: activeItemIndex === idx ? 1 : 0,
                      y: activeItemIndex === idx ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <div className="mb-6">
                      <span className={`inline-block px-4 py-1 rounded-full ${
                        theme === "dark" 
                          ? "bg-white/10 text-white/90" 
                          : "bg-black/10 text-black/90"
                      } text-sm font-medium mb-4`}>
                        {item.category}
                      </span>
                      <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}>
                        {item.title}
                      </h2>
                    </div>
                    <div className="w-full max-w-xl">
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Service Indicator */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {items.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeItemIndex === idx 
                        ? 'bg-[#FFCC00] w-8' 
                        : theme === 'dark' 
                          ? 'bg-white/30' 
                          : 'bg-black/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 transition-opacity duration-300 ${
          scrollLocked && activeItemIndex < items.length - 1 ? "opacity-100" : "opacity-0"
        }`}>
          <div className="text-sm font-medium">
            <span className="text-[#FFCC00]">{activeItemIndex + 1}</span>
            <span className={theme === "dark" ? "text-white/60" : "text-black/60"}>/{items.length}</span>
          </div>
          <div className={`px-3 py-1 rounded-full ${
            theme === "dark" ? "bg-white/10" : "bg-black/10"
          } text-xs`}>
            Scroll for more
          </div>
        </div>
      </div>
    </div>
  );
}
