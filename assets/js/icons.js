// Initialize Lucide icons

import {
  createIcons, Search, Share2, Globe, Grid2x2, Grid3x3, LayoutGrid, Check, Copy, Link, ArrowRight, ArrowUpRight, ChevronRight, ChevronLeft, UserRound, User, LogIn, LogOut, UserPlus, Rss, MessageSquare, Tag, Sparkles, Star, Compass, Clock, ArrowLeft, Heart
} from 'lucide';

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
      LogOut,
      UserPlus,
      Rss,
      MessageSquare,
      Tag,
      Sparkles,
      Star,
      Compass,
      Clock,
      ArrowLeft,
      Heart
    }
  });
}

// Auto-initialize icons
initIcons();