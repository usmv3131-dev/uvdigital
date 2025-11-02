import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export function GlassPanel({ children, className = "", variant = "primary" }: GlassPanelProps) {
  const variants = {
    primary: {
      bg: "bg-white/10 dark:bg-purple-900/10",
      border: "border-white/20 dark:border-purple-500/20",
      shadow: "shadow-2xl shadow-rose-500/10 dark:shadow-purple-500/20",
    },
    secondary: {
      bg: "bg-rose-50/50 dark:bg-slate-900/50",
      border: "border-rose-200/30 dark:border-purple-500/30",
      shadow: "shadow-xl shadow-pink-500/10 dark:shadow-fuchsia-500/15",
    },
    accent: {
      bg: "bg-gradient-to-br from-white/20 to-white/5 dark:from-purple-900/20 dark:to-fuchsia-900/5",
      border: "border-white/30 dark:border-purple-400/30",
      shadow: "shadow-2xl shadow-rose-300/20 dark:shadow-purple-400/25",
    },
  };

  const config = variants[variant];

  return (
    <motion.div
      className={`
        relative overflow-hidden
        backdrop-blur-xl
        ${config.bg}
        border ${config.border}
        ${config.shadow}
        rounded-3xl
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{
          translateX: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 5,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
