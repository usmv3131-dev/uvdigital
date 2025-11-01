import { motion } from "motion/react";
import { Badge } from "./Badge";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  badgeVariant?: "blue" | "green" | "purple" | "orange" | "cyan";
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
      <h2 className="text-blue-900 dark:text-blue-400 font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h2>
      {description && (
        <p className="text-slate-600 dark:text-cyan-300/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
