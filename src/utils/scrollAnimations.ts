
/**
 * Utility function to initialize scroll animations
 */
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // Make sure elements exist before observing them
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length > 0) {
    animatedElements.forEach(item => {
      observer.observe(item);
    });
    console.log(`Initialized scroll animations for ${animatedElements.length} elements`);
  } else {
    console.log('No animated elements found for scroll animations');
    // Try again after a short delay to ensure DOM is fully loaded
    setTimeout(() => {
      const delayedElements = document.querySelectorAll('.animate-on-scroll');
      if (delayedElements.length > 0) {
        delayedElements.forEach(item => {
          observer.observe(item);
        });
        console.log(`Initialized delayed scroll animations for ${delayedElements.length} elements`);
      }
    }, 1000);
  }
};
