import { motion } from "motion/react";
import { ReactNode, memo } from "react";
import {
  fadeInUpVariants,
  scaleInVariants,
  floatingAnimation,
  floatingTransition,
  pulseAnimation,
  pulseTransition,
  cardHoverVariants,
  buttonHoverVariants,
  rotateInVariants,
  blurInVariants,
  elasticInVariants,
  hoverGlowVariants,
  glowAnimation,
  glowTransition,
} from "../lib/motion-variants";

/**
 * 🎨 Animated Elements Library
 * Ready-to-use animated components with Motion
 */

// ============================================
// 🎯 Animated Containers
// ============================================

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUpContainer = memo(function FadeInUpContainer({
  children,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInUpVariants.item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
});

export const ScaleInContainer = memo(function ScaleInContainer({
  children,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
});

export const BlurInContainer = memo(function BlurInContainer({
  children,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      variants={blurInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
});

export const ElasticInContainer = memo(function ElasticInContainer({
  children,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      variants={elasticInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
});

// ============================================
// ✨ Floating & Continuous Animations
// ============================================

export const FloatingElement = memo(function FloatingElement({
  children,
  className = "",
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      animate={floatingAnimation}
      transition={floatingTransition}
    >
      {children}
    </motion.div>
  );
});

export const PulsingElement = memo(function PulsingElement({
  children,
  className = "",
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      animate={pulseAnimation}
      transition={pulseTransition}
    >
      {children}
    </motion.div>
  );
});

export const GlowingElement = memo(function GlowingElement({
  children,
  className = "",
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      animate={glowAnimation}
      transition={glowTransition}
    >
      {children}
    </motion.div>
  );
});

// ============================================
// 🎴 Animated Cards
// ============================================

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const HoverCard = memo(function HoverCard({
  children,
  className = "",
  onClick,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
});

export const GlowCard = memo(function GlowCard({
  children,
  className = "",
  onClick,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      variants={hoverGlowVariants}
      initial="rest"
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
});

// ============================================
// 🔘 Animated Buttons
// ============================================

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const AnimatedButton = memo(function AnimatedButton({
  children,
  className = "",
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      className={className}
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
});

export const PulseButton = memo(function PulseButton({
  children,
  className = "",
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={pulseAnimation}
      transition={{ ...pulseTransition, duration: 3 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
});

// ============================================
// 🎯 Animated Icons
// ============================================

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
}

export const RotatingIcon = memo(function RotatingIcon({
  children,
  className = "",
}: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      variants={rotateInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
});

export const BouncingIcon = memo(function BouncingIcon({
  children,
  className = "",
}: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
});

// ============================================
// 🌈 Animated Background Elements
// ============================================

export const AnimatedGradientBg = memo(function AnimatedGradientBg({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      style={{
        background:
          "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))",
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
});

export const FloatingOrb = memo(function FloatingOrb({
  className = "",
  size = 300,
  color = "rgba(59, 130, 246, 0.15)",
  duration = 8,
}: {
  className?: string;
  size?: number;
  color?: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(40px)",
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});

// ============================================
// 📊 Progress & Loading Animations
// ============================================

export const AnimatedProgressBar = memo(function AnimatedProgressBar({
  progress = 0,
  className = "",
}: {
  progress: number;
  className?: string;
}) {
  return (
    <div className={`bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
    </div>
  );
});

export const SpinningLoader = memo(function SpinningLoader({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={className}
      style={{
        width: size,
        height: size,
        border: "3px solid rgba(59, 130, 246, 0.2)",
        borderTopColor: "rgb(59, 130, 246)",
        borderRadius: "50%",
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
});

// ============================================
// 🎪 Text Animations
// ============================================

export const FadeInText = memo(function FadeInText({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  );
});

export const GradientText = memo(function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      style={{
        background: "linear-gradient(90deg, #3b82f6, #22d3ee, #3b82f6)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% center", "200% center", "0% center"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
});

// ============================================
// 🎯 Reveal Animations
// ============================================

export const RevealOnScroll = memo(function RevealOnScroll({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
});

// ============================================
// 🎨 Stagger Children Wrapper
// ============================================

export const StaggerContainer = memo(function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        staggerChildren: staggerDelay,
      }}
    >
      {children}
    </motion.div>
  );
});

export default {
  FadeInUpContainer,
  ScaleInContainer,
  BlurInContainer,
  ElasticInContainer,
  FloatingElement,
  PulsingElement,
  GlowingElement,
  HoverCard,
  GlowCard,
  AnimatedButton,
  PulseButton,
  RotatingIcon,
  BouncingIcon,
  AnimatedGradientBg,
  FloatingOrb,
  AnimatedProgressBar,
  SpinningLoader,
  FadeInText,
  GradientText,
  RevealOnScroll,
  StaggerContainer,
};
