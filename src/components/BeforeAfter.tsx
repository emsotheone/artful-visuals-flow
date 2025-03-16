
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: string;
}

const BeforeAfter = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  height = '500px',
}: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const offsetX = clientX - containerRect.left;
    
    // Calculate percentage (constrained between 0 and 100)
    const percentage = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="before-after-container relative rounded-lg overflow-hidden select-none shadow-lg w-full h-full"
      style={{ height }}
    >
      {/* "After" image (full width background) */}
      <img 
        src={afterImage} 
        alt={afterLabel} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* "Before" image (controlled by slider) */}
      <div 
        className="before-after-slider h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt={beforeLabel} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Vertical line with handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 backdrop-blur-sm z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider handle */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-ew-resize z-20 shadow-md border border-white/30"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="flex items-center justify-center">
            {/* Left arrow correctly pointing left */}
            <span className="transform -translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </span>
            {/* Right arrow correctly pointing right */}
            <span className="transform translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-5 left-5 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full font-medium z-10">
        {beforeLabel}
      </div>
      
      <div className="absolute top-5 right-5 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full font-medium z-10">
        {afterLabel}
      </div>
      
      {/* Slide to compare text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full font-medium z-10">
        Slide to compare
      </div>
    </div>
  );
};

export default BeforeAfter;
