
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

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);
