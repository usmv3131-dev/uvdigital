import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface Interactive3DSectionProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function Interactive3DSection({ 
  children, 
  className = "",
  intensity = 0.02
}: Interactive3DSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity * 10, -intensity * 10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity * 10, intensity * 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Wrapper для карточек с depth layers
interface Card3DLayerProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function Card3DLayer({ children, depth = 50, className = "" }: Card3DLayerProps) {
  return (
    <div
      className={className}
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
