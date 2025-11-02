import { motion } from "motion/react";
import { Badge } from "./Badge";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  badgeVariant?: "rose" | "green" | "blue" | "purple" | "orange";
  title: string;
  description?: string;
  variants: any;
}

export function SectionHeader({
  badgeIcon,
  badgeText,
  badgeVariant,
  title,
  description,
  variants,
}: SectionHeaderProps) {
  return (
    <motion.div variants={variants} className="text-center space-y-4 mb-16">
      <Badge icon={badgeIcon} text={badgeText} variant={badgeVariant} />
      <h2 className="text-rose-900 dark:text-purple-100">{title}</h2>
      {description && (
        <p className="text-rose-700/70 dark:text-purple-300/70 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
