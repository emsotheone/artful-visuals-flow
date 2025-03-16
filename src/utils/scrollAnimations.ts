
/**
 * Utility function to initialize scroll animations
 * This was moved from index.css to fix PostCSS errors
 */
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll').forEach(item => {
    observer.observe(item);
  });
};
