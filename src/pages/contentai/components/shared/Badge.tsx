import { LucideIcon } from "lucide-react";

interface BadgeProps {
  icon: LucideIcon;
  text: string;
  variant?: "blue" | "green" | "purple" | "orange" | "cyan";
}

const variantStyles = {
  blue: "bg-white/60 dark:bg-blue-500/10 border-blue-200/50 dark:border-blue-500/50 text-blue-700 dark:text-blue-400",
  green: "bg-white/60 dark:bg-emerald-500/10 border-green-300/50 dark:border-emerald-400/50 text-green-700 dark:text-emerald-400",
  purple: "bg-white/60 dark:bg-purple-500/10 border-purple-300/50 dark:border-purple-500/50 text-purple-700 dark:text-purple-400",
  orange: "bg-white/60 dark:bg-orange-500/10 border-orange-300/50 dark:border-orange-400/50 text-orange-700 dark:text-orange-400",
  cyan: "bg-white/60 dark:bg-cyan-500/10 border-cyan-300/50 dark:border-cyan-400/50 text-cyan-700 dark:text-cyan-400",
};

const iconStyles = {
  blue: "text-blue-500 dark:text-blue-400",
  green: "text-green-600 dark:text-emerald-400",
  purple: "text-purple-500 dark:text-purple-400",
  orange: "text-orange-500 dark:text-orange-400",
  cyan: "text-cyan-500 dark:text-cyan-400",
};

export function Badge({ icon: Icon, text, variant = "blue" }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-full transition-colors ${variantStyles[variant]}`}
    >
      <Icon size={16} className={iconStyles[variant]} />
      <span className="text-sm">{text}</span>
    </div>
  );
}
