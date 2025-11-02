import { useEffect, useMemo, useState, ReactNode, memo } from "react";
import { Sparkle } from "lucide-react";
import { loadFull } from "tsparticles";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { cn } from "./utils";

/**
 * 🎨 Optimized Sparkle Button with Singleton Pattern
 * Particles engine initialized once globally
 */

// Singleton: particles engine initialization
let particlesEngineInitialized = false;
let particlesEnginePromise: Promise<void> | null = null;

const initParticlesEngineSingleton = () => {
  if (!particlesEnginePromise) {
    particlesEnginePromise = initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      particlesEngineInitialized = true;
    });
  }
  return particlesEnginePromise;
};

// Optimized particles configuration
const particlesOptions: ISourceOptions = {
  key: "star",
  name: "Star",
  particles: {
    number: {
      value: 15, // Reduced from 20 for better performance
      density: {
        enable: false,
      },
    },
    color: {
      value: ["#3b82f6", "#22d3ee", "#60a5fa", "#06b6d4", "#0ea5e9", "#ffffff", "#38bdf8"],
    },
    shape: {
      type: "star",
      options: {
        star: {
          sides: 4,
        },
      },
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: { min: 1, max: 4 },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      enable: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 10,
        sync: false,
      },
    },
    links: {
      enable: false,
    },
    reduceDuplicates: true,
    move: {
      enable: true,
      center: {
        x: 120,
        y: 45,
      },
    },
  },
  interactivity: {
    events: {},
  },
  smooth: true,
  fpsLimit: 60, // Reduced from 120 for better mobile performance
  background: {
    color: "transparent",
    size: "cover",
  },
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
  absorbers: [
    {
      enable: true,
      opacity: 0,
      size: {
        value: 1,
        density: 1,
        limit: {
          radius: 5,
          mass: 5,
        },
      },
      position: {
        x: 110,
        y: 45,
      },
    },
  ],
  emitters: [
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: true,
      },
      rate: {
        quantity: 4, // Reduced from 5
        delay: 0.5,
      },
      position: {
        x: 110,
        y: 45,
      },
    },
  ],
};

interface SparkleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showSparkles?: boolean;
  "aria-label"?: string;
}

// Memoized sparkle icons component
const SparkleIcons = memo(function SparkleIcons() {
  return (
    <>
      <Sparkle 
        className="size-5 -translate-y-0.5 animate-sparkle fill-white" 
        aria-hidden="true"
      />
      <Sparkle
        style={{
          animationDelay: "1s",
        }}
        className="absolute bottom-2.5 left-3.5 z-20 size-2 rotate-12 animate-sparkle fill-white"
        aria-hidden="true"
      />
      <Sparkle
        style={{
          animationDelay: "1.5s",
          animationDuration: "2.5s",
        }}
        className="absolute left-5 top-2.5 size-1 -rotate-12 animate-sparkle fill-white"
        aria-hidden="true"
      />
      <Sparkle
        style={{
          animationDelay: "0.5s",
          animationDuration: "2.5s",
        }}
        className="absolute left-3 top-3 size-1.5 animate-sparkle fill-white"
        aria-hidden="true"
      />
    </>
  );
});

function SparkleButtonComponent({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  showSparkles = true,
  "aria-label": ariaLabel,
}: SparkleButtonProps) {
  const [particleState, setParticlesReady] = useState<"loading" | "loaded" | "ready">("loading");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Use singleton initialization
    initParticlesEngineSingleton().then(() => {
      setParticlesReady("loaded");
    });
  }, []);

  // Memoize options to prevent unnecessary recalculations
  const modifiedOptions = useMemo(() => {
    const options = { ...particlesOptions };
    options.autoPlay = isHovering;
    return options;
  }, [isHovering]);

  // Generate stable ID (only once)
  const particlesId = useMemo(() => `sparkle-particles-${Math.random().toString(36).slice(2, 9)}`, []);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group relative rounded-full bg-gradient-to-r from-blue-300/30 via-blue-500/30 via-40% to-cyan-500/30 p-1 text-white transition-transform hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        className
      )}
      onMouseEnter={() => !disabled && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label={ariaLabel}
    >
      <div className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 via-40% to-cyan-500 px-6 py-3 text-white">
        {showSparkles && <SparkleIcons />}
        <span className="font-semibold tracking-wide relative z-10">{children}</span>
      </div>
      
      {particleState !== "loading" && (
        <Particles
          id={particlesId}
          className={cn(
            "pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity duration-300",
            {
              "group-hover:opacity-100": particleState === "ready" && !disabled,
            }
          )}
          particlesLoaded={async () => {
            setParticlesReady("ready");
          }}
          options={modifiedOptions}
        />
      )}
    </button>
  );
}

// Export memoized version
export const SparkleButton = memo(SparkleButtonComponent);

export default SparkleButton;
