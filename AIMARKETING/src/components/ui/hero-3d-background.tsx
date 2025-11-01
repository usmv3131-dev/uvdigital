import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, ReactNode } from "react";

interface Hero3DBackgroundProps {
  children: ReactNode;
}

export function Hero3DBackground({ children }: Hero3DBackgroundProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax эффекты для разных слоев
  const x1 = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const y1 = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);
  
  const x2 = useTransform(mouseX, [0, window.innerWidth], [-40, 40]);
  const y2 = useTransform(mouseY, [0, window.innerHeight], [-40, 40]);

  const x3 = useTransform(mouseX, [0, window.innerWidth], [-60, 60]);
  const y3 = useTransform(mouseY, [0, window.innerHeight], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1 - Slowest */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"
          style={{
            x: x1,
            y: y1,
            top: '10%',
            left: '10%'
          }}
        />
        
        {/* Layer 2 - Medium */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"
          style={{
            x: x2,
            y: y2,
            top: '50%',
            right: '10%'
          }}
        />
        
        {/* Layer 3 - Fastest */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-pink-300/20 blur-3xl"
          style={{
            x: x3,
            y: y3,
            bottom: '20%',
            left: '30%'
          }}
        />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(147, 51, 234, 0.15) 0, transparent 50%),
              radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.15) 0, transparent 50%),
              radial-gradient(at 40% 80%, rgba(236, 72, 153, 0.15) 0, transparent 50%)
            `,
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
