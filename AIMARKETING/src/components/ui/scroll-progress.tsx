import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 origin-left z-50"
      style={{ 
        scaleX,
        transformOrigin: "0%"
      }}
    />
  );
}

// Reveal на scroll с оптимизацией
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ScrollReveal({ 
  children, 
  className = "",
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) {
  const ref = useRef(null);
  
  const variants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1 
      }}
      viewport={{ 
        once: true, 
        margin: "-80px",
        amount: 0.3
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
