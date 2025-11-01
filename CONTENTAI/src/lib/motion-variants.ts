// 🎨 Advanced Motion Animation Variants Library
// Comprehensive collection of reusable animation patterns

import { Variants } from "motion/react";

// ============================================
// 📐 Basic Fade Animations
// ============================================

export const fadeInUpVariants: Variants = {
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
};

export const fadeInUpFastVariants: Variants = {
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
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// ============================================
// 🎯 Scale Animations
// ============================================

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const popInVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// ============================================
// 🌀 Rotation & Advanced Animations
// ============================================

export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const flipInVariants: Variants = {
  hidden: { opacity: 0, rotateX: -90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ============================================
// 🎪 Stagger Container Animations
// ============================================

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerFastContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

export const staggerSlowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// ============================================
// 💫 Floating & Continuous Animations
// ============================================

export const floatingAnimation = {
  y: [0, -10, 0],
};

export const floatingTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

export const floatingSlowAnimation = {
  y: [0, -15, 0],
};

export const floatingSlowTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut",
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [1, 0.8, 1],
};

export const pulseTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
};

export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 40px rgba(59, 130, 246, 0.6)",
    "0 0 20px rgba(59, 130, 246, 0.3)",
  ],
};

export const glowTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
};

// ============================================
// 🎨 Card & Element Animations
// ============================================

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const cardTapVariants: Variants = {
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const buttonHoverVariants: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

// ============================================
// 🌊 Wave & Ripple Animations
// ============================================

export const waveVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
};

export const rippleVariants: Variants = {
  initial: { scale: 0, opacity: 0.5 },
  animate: {
    scale: 1.5,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// ============================================
// 📱 Mobile-Specific Animations
// ============================================

export const slideInFromBottomVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromTopVariants: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================
// 🎯 Reveal Animations
// ============================================

export const revealVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const progressVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// ============================================
// 🌟 Special Effects
// ============================================

export const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const typewriterVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
};

export const gradientAnimationVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ============================================
// 🎭 Complex Sequence Animations
// ============================================

export const bounceInVariants: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export const elasticInVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

// ============================================
// 🔄 Rotation Loops
// ============================================

export const spinAnimation = {
  rotate: 360,
};

export const spinTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "linear",
};

export const spinSlowAnimation = {
  rotate: 360,
};

export const spinSlowTransition = {
  duration: 8,
  repeat: Infinity,
  ease: "linear",
};

// ============================================
// 🎨 Hover Effects
// ============================================

export const hoverScaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

export const hoverLiftVariants: Variants = {
  rest: { y: 0, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
  hover: {
    y: -4,
    boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
  },
};

export const hoverGlowVariants: Variants = {
  rest: {
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
  },
  hover: {
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
  },
};

// ============================================
// 📊 Counter & Number Animations
// ============================================

export const counterVariants = (from: number, to: number) => ({
  initial: { value: from },
  animate: {
    value: to,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
});

// ============================================
// 🎪 Page Transition Variants
// ============================================

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================================
// 🌈 Gradient & Color Animations
// ============================================

export const gradientShiftAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

export const gradientShiftTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "linear",
};

// ============================================
// 🎯 Utility Functions
// ============================================

export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => ({
  delay: index * baseDelay,
});

export const getRandomFloatAnimation = (min: number = -10, max: number = 10) => ({
  y: [0, Math.random() * (max - min) + min, 0],
  x: [0, (Math.random() - 0.5) * 10, 0],
});

export const getRandomFloatTransition = (duration: number = 3) => ({
  duration: duration + Math.random() * 2,
  repeat: Infinity,
  ease: "easeInOut",
  delay: Math.random() * 2,
});

// ============================================
// 🎨 Preset Combinations
// ============================================

export const heroAnimationPreset: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardAnimationPreset: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const navigationAnimationPreset: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ============================================
// 🎯 Export All
// ============================================

export default {
  fadeInUpVariants,
  fadeInUpFastVariants,
  fadeInDownVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInVariants,
  scaleInVariants,
  scaleUpVariants,
  popInVariants,
  rotateInVariants,
  flipInVariants,
  staggerContainerVariants,
  staggerFastContainerVariants,
  staggerSlowContainerVariants,
  floatingAnimation,
  floatingTransition,
  floatingSlowAnimation,
  floatingSlowTransition,
  pulseAnimation,
  pulseTransition,
  glowAnimation,
  glowTransition,
  cardHoverVariants,
  cardTapVariants,
  buttonHoverVariants,
  waveVariants,
  rippleVariants,
  slideInFromBottomVariants,
  slideInFromTopVariants,
  revealVariants,
  progressVariants,
  blurInVariants,
  typewriterVariants,
  gradientAnimationVariants,
  bounceInVariants,
  elasticInVariants,
  spinAnimation,
  spinTransition,
  spinSlowAnimation,
  spinSlowTransition,
  hoverScaleVariants,
  hoverLiftVariants,
  hoverGlowVariants,
  pageTransitionVariants,
  gradientShiftAnimation,
  gradientShiftTransition,
  heroAnimationPreset,
  cardAnimationPreset,
  navigationAnimationPreset,
};
