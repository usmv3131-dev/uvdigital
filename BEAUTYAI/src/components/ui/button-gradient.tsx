import { Button, ButtonProps } from "./button";
import { cn } from "./utils";
import { forwardRef, useMemo } from "react";
import { ShineEffect, GradientGlow } from "./button-effects";

interface ButtonGradientProps extends ButtonProps {
  variant?: "primary" | "secondary" | "success";
}

const VARIANT_STYLES = {
  primary: {
    gradient: "from-rose-400 via-pink-400 to-rose-500 dark:from-purple-500 dark:via-fuchsia-500 dark:to-purple-600",
    glow: "shadow-rose-300/40 dark:shadow-purple-500/50",
    hoverGradient: "group-hover:from-rose-500 group-hover:via-pink-500 group-hover:to-rose-600 dark:group-hover:from-purple-600 dark:group-hover:via-fuchsia-600 dark:group-hover:to-purple-700",
  },
  secondary: {
    gradient: "from-blue-400 via-cyan-400 to-blue-500 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-600",
    glow: "shadow-blue-300/40 dark:shadow-blue-500/50",
    hoverGradient: "group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-blue-600 dark:group-hover:from-blue-600 dark:group-hover:via-cyan-600 dark:group-hover:to-blue-700",
  },
  success: {
    gradient: "from-green-400 via-emerald-400 to-green-500 dark:from-green-500 dark:via-emerald-500 dark:to-green-600",
    glow: "shadow-green-300/40 dark:shadow-green-500/50",
    hoverGradient: "group-hover:from-green-500 group-hover:via-emerald-500 group-hover:to-green-600 dark:group-hover:from-green-600 dark:group-hover:via-emerald-600 dark:group-hover:to-green-700",
  },
} as const;

export const ButtonGradient = forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    const { gradient, glow, hoverGradient } = useMemo(() => VARIANT_STYLES[variant], [variant]);

    return (
      <Button
        ref={ref}
        className={cn(
          "relative h-auto px-6 py-3 overflow-hidden",
          "transition-all duration-300",
          "group",
          "border-0",
          "motion-reduce:transition-none",
          className
        )}
        {...props}
      >
        {/* Gradient background */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            "bg-gradient-to-r",
            gradient,
            "transition-all duration-300",
            "motion-reduce:transition-none",
            hoverGradient
          )}
          aria-hidden="true"
        />

        {/* Shine effect */}
        <ShineEffect className="motion-reduce:hidden" />

        {/* Glow effect */}
        <GradientGlow gradient={gradient} className={cn(glow, "motion-reduce:hidden")} />

        {/* Content */}
        <span className="relative flex items-center justify-center gap-2 text-white font-heading">
          {children}
        </span>
      </Button>
    );
  }
);

ButtonGradient.displayName = "ButtonGradient";
