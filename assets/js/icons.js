// Initialize Lucide icons
import { createIcons, Search, Share2, Globe, Grid2x2, Grid3x3, LayoutGrid, Check, Copy, Link, ArrowRight, ChevronRight, ChevronLeft, UserRound, Rss, MessageSquare, Tag } from 'lucide';

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
      ChevronLeft,
      UserRound,
      Rss,
      MessageSquare,
      Tag
    }
  });
}

// Auto-initialize icons
initIcons();