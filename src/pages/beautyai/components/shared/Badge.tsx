import { LucideIcon } from "lucide-react";

interface BadgeProps {
  icon: LucideIcon;
  text: string;
  variant?: "rose" | "green" | "blue" | "purple" | "orange";
}

const variantStyles = {
  rose: "bg-white/60 dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-700 dark:text-purple-300",
  green: "bg-white/60 dark:bg-emerald-900/30 border-green-300/50 dark:border-emerald-500/50 text-green-700 dark:text-emerald-300",
  blue: "bg-white/60 dark:bg-blue-900/30 border-blue-300/50 dark:border-blue-500/50 text-blue-700 dark:text-blue-300",
  purple: "bg-white/60 dark:bg-purple-900/30 border-purple-300/50 dark:border-purple-500/50 text-purple-700 dark:text-purple-300",
  orange: "bg-white/60 dark:bg-orange-900/30 border-orange-300/50 dark:border-orange-500/50 text-orange-700 dark:text-orange-300",
};

const iconStyles = {
  rose: "text-rose-500 dark:text-purple-400",
  green: "text-green-600 dark:text-emerald-400",
  blue: "text-blue-500 dark:text-blue-400",
  purple: "text-purple-500 dark:text-purple-400",
  orange: "text-orange-500 dark:text-orange-400",
};

export function Badge({ icon: Icon, text, variant = "rose" }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-full transition-colors ${variantStyles[variant]}`}
    >
      <Icon size={16} className={iconStyles[variant]} />
      <span className="text-sm">{text}</span>
    </div>
  );
}
