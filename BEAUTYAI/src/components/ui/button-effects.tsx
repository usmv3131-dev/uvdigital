// Shared button effect components for DRY principle
import { cn } from "./utils";
import { memo } from "react";

interface ShineEffectProps {
  className?: string;
}

export const ShineEffect = memo(({ className }: ShineEffectProps) => (
  <div
    className={cn(
      "absolute inset-0 pointer-events-none",
      "bg-gradient-to-r from-transparent via-white/20 to-transparent",
      "translate-x-[-100%] group-hover:translate-x-[100%]",
      "transition-transform duration-700",
      className
    )}
    aria-hidden="true"
  />
));
ShineEffect.displayName = "ShineEffect";

interface GradientGlowProps {
  gradient: string;
  className?: string;
}

export const GradientGlow = memo(({ gradient, className }: GradientGlowProps) => (
  <div
    className={cn(
      "absolute inset-0 -z-10 pointer-events-none",
      "bg-gradient-to-r",
      gradient,
      "blur-xl opacity-0 group-hover:opacity-70",
      "transition-opacity duration-300",
      className
    )}
    aria-hidden="true"
  />
));
GradientGlow.displayName = "GradientGlow";
