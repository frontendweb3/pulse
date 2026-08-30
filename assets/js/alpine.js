// Initialize Alpine.js
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

export function initAlpine() {
  // Register plugins
  Alpine.plugin(collapse);

  // Make Alpine available globally for use in HTML
  window.Alpine = Alpine;
  
  // Start Alpine
  Alpine.start();
}

// Auto-initialize Alpine
initAlpine();
