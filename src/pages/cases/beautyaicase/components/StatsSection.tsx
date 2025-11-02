import { motion } from 'motion/react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Stat {
  icon: any;
  target: number;
  label: string;
  change: string;
  color: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    target: 38,
    prefix: '+',
    suffix: '%',
    label: 'Рост повторных записей',
    change: 'за первые 90 дней запуска',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Users,
    target: 1200,
    suffix: '+',
    label: 'Диалогов в месяц',
    change: 'Beauty AI обрабатывает без участия администратора',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    target: 16,
    suffix: ' ч/нед',
    label: 'Освобождено времени команды',
    change: 'администраторы переключены на сервис и продажи',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    target: 4.8,
    decimals: 1,
    suffix: ' / 5',
    label: 'Оценка клиентов',
    change: 'по опросу постоянных гостей сети',
    color: 'from-amber-500 to-orange-500',
  },
];

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timer = setTimeout(() => {
      let current = 0;
      const precision = stat.decimals ? Math.pow(10, stat.decimals) : 1;
      const increment = Math.max(stat.target / 60, 1 / precision);
      intervalId = setInterval(() => {
        current = Math.min(current + increment, stat.target);
        setCount(current);
        if (current >= stat.target) {
          clearInterval(intervalId);
        }
      }, 30);
    }, index * 100);

    return () => {
      clearTimeout(timer);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [stat.target, stat.decimals, index]);

  const decimals = stat.decimals ?? 0;
  const numericValue =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
  const displayValue = `${stat.prefix ?? ''}${numericValue}${stat.suffix ?? ''}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="mb-2"
        >
          <span className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {displayValue}
          </span>
        </motion.div>

        <h4 className="mb-2">{stat.label}</h4>
        <p className="text-sm text-foreground/60">{stat.change}</p>

        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background:
              'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 59, 143, 0.1), transparent 40%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">Результаты, которые говорят сами за себя</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Реальные метрики от салонов, использующих Beauty AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
