// Initialize Alpine.js
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';

export function initAlpine() {
  // Register plugins
  Alpine.plugin(collapse);
  Alpine.plugin(intersect);

  // Make Alpine available globally for use in HTML
  window.Alpine = Alpine;
  
  // Start Alpine
  Alpine.start();
}

// Auto-initialize Alpine
initAlpine();
