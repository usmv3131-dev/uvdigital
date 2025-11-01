import { motion, Variants } from "motion/react";
import { useMemo } from "react";

interface GradientBlobProps {
  color?: "rose" | "purple" | "pink" | "fuchsia";
  size?: "sm" | "md" | "lg" | "xl";
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
}

const SIZE_CLASSES = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
} as const;

const COLOR_CLASSES = {
  rose: "bg-rose-200/20 dark:bg-rose-500/10",
  purple: "bg-purple-200/20 dark:bg-purple-500/10",
  pink: "bg-pink-200/20 dark:bg-pink-500/10",
  fuchsia: "bg-fuchsia-200/20 dark:bg-fuchsia-500/10",
} as const;

const blobVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
    rotate: [0, 90, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function GradientBlob({
  color = "rose",
  size = "lg",
  position = { top: "0", left: "0" },
  delay = 0,
}: GradientBlobProps) {
  const className = useMemo(
    () => `absolute ${SIZE_CLASSES[size]} ${COLOR_CLASSES[color]} rounded-full blur-3xl motion-reduce:animate-none`,
    [size, color]
  );

  return (
    <motion.div
      className={className}
      style={position}
      variants={blobVariants}
      animate="animate"
      transition={{ delay }}
      aria-hidden="true"
    />
  );
}
