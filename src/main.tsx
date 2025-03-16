
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initScrollAnimations } from './utils/scrollAnimations'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize scroll animations after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, initializing scroll animations');
  initScrollAnimations();
});

// Also initialize after window load as a fallback
window.addEventListener('load', () => {
  console.log('Window loaded, initializing scroll animations (fallback)');
  initScrollAnimations();
});
