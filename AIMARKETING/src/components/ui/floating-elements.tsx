import { motion } from "motion/react";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3,
  yOffset = 10,
  className = ""
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

export function RotatingElement({ 
  children, 
  duration = 20,
  className = ""
}: Omit<FloatingElementProps, 'delay' | 'yOffset'>) {
  return (
    <motion.div
      animate={{
        rotate: 360
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

interface PulseGlowProps {
  className?: string;
  color?: string;
  size?: number;
  duration?: number;
}

export function PulseGlow({ 
  className = "",
  color = "purple",
  size = 400,
  duration = 4
}: PulseGlowProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color === 'purple' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(59, 130, 246, 0.4)'} 0%, transparent 70%)`
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Оптимизированный parallax эффект
export function ParallaxElement({ 
  children, 
  speed = 0.5,
  className = ""
}: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      style={{
        y: 0,
        willChange: "transform"
      }}
      viewport={{ once: false }}
      whileInView={{
        y: speed * 50
      }}
      transition={{
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
}
