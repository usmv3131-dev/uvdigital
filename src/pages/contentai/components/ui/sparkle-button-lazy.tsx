import { lazy, Suspense, ComponentProps } from "react";
import { cn } from "./utils";

/**
 * 🚀 Lazy-loaded Sparkle Button
 * Use this for better initial bundle size
 * Falls back to regular gradient button while loading
 */

// Lazy load the actual SparkleButton
const SparkleButtonComponent = lazy(() => 
  import("./sparkle-button").then(module => ({ 
    default: module.SparkleButton 
  }))
);

// Fallback button while loading particles
function FallbackButton({ 
  children, 
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group relative rounded-full bg-gradient-to-r from-blue-300/30 via-blue-500/30 via-40% to-cyan-500/30 p-1 text-white transition-transform hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        className
      )}
    >
      <div className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 via-40% to-cyan-500 px-6 py-3 text-white">
        <span className="font-semibold tracking-wide relative z-10">{children}</span>
      </div>
    </button>
  );
}

// Main export with Suspense wrapper
export function SparkleButtonLazy(props: ComponentProps<typeof SparkleButtonComponent>) {
  return (
    <Suspense fallback={<FallbackButton {...props as any} />}>
      <SparkleButtonComponent {...props} />
    </Suspense>
  );
}

export default SparkleButtonLazy;
