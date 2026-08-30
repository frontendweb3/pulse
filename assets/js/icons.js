// Initialize Lucide icons
import { createIcons, Search, Share2, Globe, Grid2x2, Grid3x3, LayoutGrid, Check, Copy, Link, ArrowRight, ChevronRight, UserRound, Rss, MessageSquare } from 'lucide';

export function initIcons() {
  createIcons({
    icons: {
      Search,
      Share2,
      Globe,
      Grid2x2,
      Grid3x3,
      LayoutGrid,
      Check,
      Copy,
      Link,
      ArrowRight,
      ChevronRight,
      UserRound,
      Rss,
      MessageSquare
    }
  });
}

// Auto-initialize icons
initIcons();