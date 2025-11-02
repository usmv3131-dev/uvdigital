import { motion, Variants } from "motion/react";
import { Sparkles, Star, Zap } from "lucide-react";
import { memo } from "react";

interface FloatingElementProps {
  Icon: typeof Sparkles;
  className: string;
  variants: Variants;
  duration: number;
}

const FloatingElement = memo(({ Icon, className, variants, duration }: FloatingElementProps) => (
  <motion.div
    className="absolute"
    variants={variants}
    animate="animate"
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className={className} />
  </motion.div>
));
FloatingElement.displayName = "FloatingElement";

const floatingElements = [
  {
    Icon: Sparkles,
    className: "w-6 h-6 text-rose-300/20 dark:text-purple-400/20",
    variants: {
      animate: {
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 180, 360],
      },
    },
    style: { top: "25%", left: "25%" },
    duration: 8,
  },
  {
    Icon: Star,
    className: "w-5 h-5 text-pink-300/15 dark:text-fuchsia-400/15",
    variants: {
      animate: {
        y: [0, 40, 0],
        x: [0, -15, 0],
        rotate: [0, -180, -360],
        scale: [1, 1.2, 1],
      },
    },
    style: { top: "33%", right: "25%" },
    duration: 10,
  },
  {
    Icon: Zap,
    className: "w-4 h-4 text-rose-200/20 dark:text-purple-300/20",
    variants: {
      animate: {
        y: [0, -25, 0],
        x: [0, 25, 0],
        rotate: [0, 90, 180],
      },
    },
    style: { bottom: "25%", left: "33%" },
    duration: 7,
  },
  {
    Icon: Sparkles,
    className: "w-5 h-5 text-pink-200/20 dark:text-fuchsia-300/20",
    variants: {
      animate: {
        y: [0, 35, 0],
        x: [0, -20, 0],
        rotate: [360, 180, 0],
      },
    },
    style: { bottom: "33%", right: "33%" },
    duration: 9,
  },
  {
    Icon: Star,
    className: "w-6 h-6 text-rose-300/15 dark:text-purple-400/15",
    variants: {
      animate: {
        y: [0, -20, 0],
        x: [0, 30, 0],
        rotate: [0, 270, 360],
        scale: [1, 0.8, 1],
      },
    },
    style: { top: "66%", left: "66%" },
    duration: 11,
  },
] as const;

const particles = Array.from({ length: 8 }, (_, i) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
  y: -Math.random() * 100 - 50,
  x: Math.random() * 50 - 25,
}));

export const FloatingElements = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden" aria-hidden="true">
    {floatingElements.map((element, index) => (
      <FloatingElement
        key={index}
        Icon={element.Icon}
        className={element.className}
        variants={element.variants}
        duration={element.duration}
      />
    ))}

    {/* Floating particles */}
    {particles.map((particle, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-rose-400/20 dark:bg-purple-400/20 rounded-full"
        style={{
          top: particle.top,
          left: particle.left,
        }}
        animate={{
          y: [0, particle.y, 0],
          x: [0, particle.x, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: particle.delay,
        }}
      />
    ))}
  </div>
));

FloatingElements.displayName = "FloatingElements";
