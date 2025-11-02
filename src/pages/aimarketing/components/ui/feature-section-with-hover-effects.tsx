import { cn } from "./utils";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactElement<LucideIcon>;
}

interface FeaturesSectionWithHoverEffectsProps {
  features: Feature[];
}

export function FeaturesSectionWithHoverEffects({ features }: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-5xl mx-auto gap-px bg-gray-200 rounded-lg overflow-hidden" style={{ perspective: '1500px' }}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} totalCount={features.length} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  totalCount,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalCount: number;
}) => {
  const row = Math.floor(index / 3);
  const col = index % 3;

  return (
    <motion.div 
      initial={{ 
        opacity: 0, 
        y: 80,
        rotateX: 45,
        z: -100
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        z: 0
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{
        y: -10,
        rotateY: col === 0 ? 5 : col === 2 ? -5 : 0,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="flex flex-col p-6 relative group/feature bg-white hover:bg-purple-50/30 transition-colors duration-200"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Icon */}
      <div className="mb-3 relative z-10 text-purple-600">
        <motion.div 
          className="w-fit p-2 bg-purple-50 rounded-lg group-hover/feature:bg-purple-100 transition-colors"
          whileHover={{ 
            rotateY: 180,
            scale: 1.15
          }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {icon && (
            <div className="[&>svg]:w-5 [&>svg]:h-5">
              {icon}
            </div>
          )}
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="mb-2 relative z-10 text-card-title text-gray-900 group-hover/feature:text-purple-700 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
};
