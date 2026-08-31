// Initialize Lucide icons
import { createIcons, Search, Share2, Globe, Grid2x2, Grid3x3, LayoutGrid, Check, Copy, Link, ArrowRight, ArrowUpRight, ChevronRight, ChevronLeft, UserRound, User, LogIn, UserPlus, Rss, MessageSquare, Tag, Sparkles, Star } from 'lucide';

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
      ArrowUpRight,
      ChevronRight,
      ChevronLeft,
      UserRound,
      User,
      LogIn,
      UserPlus,
      Rss,
      MessageSquare,
      Tag,
      Sparkles,
      Star
    }
  });
}

// Auto-initialize icons
initIcons();