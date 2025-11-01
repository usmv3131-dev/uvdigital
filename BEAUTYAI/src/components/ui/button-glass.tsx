import { Button, ButtonProps } from "./button";
import { cn } from "./utils";
import { forwardRef } from "react";
import { ShineEffect } from "./button-effects";

type ButtonGlassProps = ButtonProps;

export const ButtonGlass = forwardRef<HTMLButtonElement, ButtonGlassProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative h-auto px-6 py-3 overflow-hidden",
          "bg-white/60 dark:bg-purple-900/30",
          "backdrop-blur-md",
          "border border-rose-200/50 dark:border-purple-500/50",
          "text-rose-900 dark:text-purple-100",
          "transition-all duration-300",
          "motion-reduce:transition-none",
          "group",
          "hover:bg-white/80 dark:hover:bg-purple-800/40",
          "hover:border-rose-300/70 dark:hover:border-purple-400/70",
          "hover:shadow-lg hover:shadow-rose-200/30 dark:hover:shadow-purple-500/20",
          className
        )}
        {...props}
      >
        {/* Shimmer effect */}
        <ShineEffect className="bg-gradient-to-r from-transparent via-rose-200/30 dark:via-purple-400/20 to-transparent motion-reduce:hidden" />

        {/* Content */}
        <span className="relative flex items-center justify-center gap-2 font-heading">
          {children}
        </span>
      </Button>
    );
  }
);

ButtonGlass.displayName = "ButtonGlass";
