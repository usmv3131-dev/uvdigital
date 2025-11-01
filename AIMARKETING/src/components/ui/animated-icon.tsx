import { motion, useReducedMotion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  variant?: 'spin' | 'bounce' | 'pulse' | 'float' | '3d-rotate';
}

export function AnimatedIcon({ 
  icon: Icon, 
  className = "",
  variant = 'float'
}: AnimatedIconProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Icon className={className} />;
  }

  const animations = {
    spin: {
      animate: { rotate: 360 },
      transition: { duration: 3, repeat: Infinity, ease: "linear" }
    },
    bounce: {
      animate: { y: [-3, 3, -3] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    pulse: {
      animate: { scale: [1, 1.1, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    float: {
      animate: { y: [-5, 5, -5] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    '3d-rotate': {
      animate: { rotateY: [0, 360] },
      transition: { duration: 4, repeat: Infinity, ease: "linear" }
    }
  };

  const config = animations[variant];

  return (
    <motion.div
      animate={config.animate}
      transition={config.transition}
      style={{ display: 'inline-block' }}
    >
      <Icon className={className} />
    </motion.div>
  );
}

// Hover-animated icon
export function HoverAnimatedIcon({ 
  icon: Icon, 
  className = ""
}: { icon: LucideIcon; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Icon className={className} />;
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotateZ: 360,
        transition: { duration: 0.5 }
      }}
      style={{ display: 'inline-block' }}
    >
      <Icon className={className} />
    </motion.div>
  );
}
