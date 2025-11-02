import { motion } from 'motion/react';
import { Briefcase, User, Clock, Calendar } from 'lucide-react';

interface ProjectOverviewProps {
  client: string;
  duration: string;
  role: string;
  year: string;
}

const icons = {
  client: Briefcase,
  role: User,
  duration: Clock,
  year: Calendar,
};

export function ProjectOverview({ client, duration, role, year }: ProjectOverviewProps) {
  const items = [
    { label: 'Клиент', value: client, icon: icons.client },
    { label: 'Роль', value: role, icon: icons.role },
    { label: 'Продолжительность', value: duration, icon: icons.duration },
    { label: 'Год', value: year, icon: icons.year },
  ];

  return (
    <section className="relative py-16 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all"
              >
                <Icon className="w-6 h-6 text-primary mb-3" />
                <div className="text-sm text-foreground/60 mb-2">{item.label}</div>
                <div className="font-medium">{item.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
