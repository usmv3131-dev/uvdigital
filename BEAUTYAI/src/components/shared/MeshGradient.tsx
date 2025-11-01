import { motion } from "motion/react";

interface MeshGradientProps {
  variant?: "primary" | "secondary" | "accent";
  animate?: boolean;
}

export function MeshGradient({ variant = "primary", animate = true }: MeshGradientProps) {
  const variants = {
    primary: {
      colors: [
        "from-rose-300/40 via-pink-300/40 to-rose-400/40",
        "dark:from-purple-600/20 dark:via-fuchsia-600/20 dark:to-purple-700/20",
      ],
      blur: "blur-[120px]",
    },
    secondary: {
      colors: [
        "from-pink-300/30 via-rose-300/30 to-orange-300/30",
        "dark:from-fuchsia-600/15 dark:via-purple-600/15 dark:to-pink-600/15",
      ],
      blur: "blur-[100px]",
    },
    accent: {
      colors: [
        "from-blue-300/25 via-cyan-300/25 to-blue-400/25",
        "dark:from-blue-600/15 dark:via-cyan-600/15 dark:to-blue-700/15",
      ],
      blur: "blur-[80px]",
    },
  };

  const config = variants[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Blob 1 */}
      <motion.div
        className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br ${config.colors[0]} ${config.colors[1]} ${config.blur}`}
        style={{ top: "10%", left: "10%" }}
        animate={
          animate
            ? {
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }
            : {}
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className={`absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br ${config.colors[0]} ${config.colors[1]} ${config.blur}`}
        style={{ bottom: "10%", right: "10%" }}
        animate={
          animate
            ? {
                x: [0, -80, 0],
                y: [0, 80, 0],
                scale: [1, 1.15, 1],
                rotate: [0, -90, 0],
              }
            : {}
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className={`absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br ${config.colors[0]} ${config.colors[1]} ${config.blur}`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        animate={
          animate
            ? {
                x: [0, 60, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 0],
              }
            : {}
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
