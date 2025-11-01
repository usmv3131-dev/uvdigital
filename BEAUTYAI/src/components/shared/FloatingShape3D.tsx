import { motion } from "motion/react";
import { ReactNode } from "react";

interface FloatingShape3DProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
}

export function FloatingShape3D({
  children,
  duration = 6,
  delay = 0,
  distance = 20,
  className = "",
}: FloatingShape3DProps) {
  return (
    <motion.div
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: [0, -distance, 0],
        rotateX: [0, 10, 0],
        rotateY: [0, 10, 0],
        z: [0, 50, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
