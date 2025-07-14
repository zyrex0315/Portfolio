// Centralized animation config for Framer Motion

export const defaultTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

export const defaultStagger = {
  staggerChildren: 0.1,
};

// Helper to check for reduced motion
export function usePrefersReducedMotion() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
} 