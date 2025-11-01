import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

// Оптимизированные пресеты анимаций для максимальной производительности
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1] // Custom easing для плавности
  }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1]
  }
};

export const spring3D = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20
};

// GPU-accelerated 3D transform settings
export const gpu3DProps = {
  style: { 
    transformStyle: "preserve-3d" as const,
    willChange: "transform",
  }
};

interface OptimizedMotionDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: any;
  [key: string]: any;
}

// Компонент с автоматическим respect prefers-reduced-motion
export function OptimizedFadeIn({ 
  children, 
  className = "", 
  delay = 0,
  viewport = { once: true, margin: "-50px" },
  ...props 
}: OptimizedMotionDivProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Оптимизированный 3D hover эффект
export function Optimized3DHover({ 
  children, 
  className = "",
  intensity = 5,
  ...props 
}: OptimizedMotionDivProps & { intensity?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateY: intensity,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      style={{ 
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger children для списков
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
