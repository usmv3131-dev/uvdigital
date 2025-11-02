// Shared Motion animation variants (Only used variants - optimized for bundle size)

// ===== FADE IN VARIANTS =====
export const fadeInUpVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
} as const;

export const fadeInUpFastVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
} as const;

// ===== FLOATING ANIMATIONS =====
export const floatingAnimation = {
  y: [0, -10, 0],
} as const;

export const floatingTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

// ===== PULSE ANIMATIONS =====
export const glowPulseAnimation = {
  opacity: [0.5, 1, 0.5],
  scale: [1, 1.1, 1],
} as const;

export const glowPulseTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

// ===== CARD HOVER VARIANTS =====
export const cardHoverVariants = {
  initial: { 
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

// ===== SCROLL REVEAL VARIANTS =====
export const scrollRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

// ===== EASING FUNCTIONS =====
export const easings = {
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
  },
  springBouncy: {
    type: "spring" as const,
    stiffness: 200,
    damping: 10,
  },
} as const;
