interface BackgroundDecorationProps {
  variant?: "default" | "hero" | "pricing";
}

export function BackgroundDecoration({ variant = "default" }: BackgroundDecorationProps) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/20 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/20 dark:bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-300/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>
    );
  }

  if (variant === "pricing") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-20 w-96 h-96 bg-rose-100/30 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-pink-100/30 dark:bg-fuchsia-500/20 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/10 dark:bg-fuchsia-500/10 rounded-full blur-3xl" />
    </div>
  );
}
