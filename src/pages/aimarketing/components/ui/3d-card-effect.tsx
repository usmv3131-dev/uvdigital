import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState, useCallback } from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  enableGlow?: boolean;
}

export function ThreeDCard({ 
  children, 
  className = "", 
  intensity = 12,
  enableGlow = false 
}: ThreeDCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Градиент для glow эффекта
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }, [x, y, shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative ${className}`}
    >
      {enableGlow && isHovered && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(168, 85, 247, 0.15), transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

// Simplified version для лучшей производительности
export function ThreeDCardSimple({ 
  children, 
  className = ""
}: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
