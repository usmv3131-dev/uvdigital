import { motion } from 'motion/react';
import { Code2, Database, Server, Sparkles } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

const techStack = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '✨' },
    ],
  },
  {
    category: 'Backend',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'Node.js 20', icon: '🟢' },
      { name: 'NestJS', icon: '🚀' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Prisma', icon: '🧩' },
    ],
  },
  {
    category: 'AI/ML',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
    technologies: [
      { name: 'GPT-4o', icon: '🧠' },
      { name: 'Claude 3', icon: '🪄' },
      { name: 'Stable Diffusion XL', icon: '🎨' },
      { name: 'LangChain', icon: '🔗' },
    ],
  },
  {
    category: 'Инфраструктура',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Grafana + Prometheus', icon: '📈' },
      { name: 'S3 совместимые хранилища', icon: '🗃️' },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm">Технологии</span>
          </motion.div>
          <h2 className="mb-6">Современный технологический стек</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Используем передовые технологии для создания быстрого, надёжного и масштабируемого
            решения
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((stack, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <stack.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="mb-6">{stack.category}</h3>

                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl glass border border-primary/10 hover:border-primary/30 transition-all cursor-default"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass rounded-3xl p-12 border border-primary/20 text-center"
        >
          <h3 className="mb-4">Производительность и надёжность</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Архитектура платформы спроектирована для высокой производительности и масштабируемости.
            Время отклика API {'<'} 90ms, доступность 99.95%
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '< 90ms', label: 'Отклик API' },
              { value: '99.95%', label: 'Доступность' },
              { value: '1.8s', label: 'Загрузка SPA' },
              { value: '2.5K+', label: 'Диалогов/мин' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-foreground/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
