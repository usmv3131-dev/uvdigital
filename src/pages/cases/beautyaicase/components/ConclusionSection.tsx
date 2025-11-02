import { motion } from 'motion/react';
import { Lightbulb, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const insights = [
  {
    icon: Lightbulb,
    title: 'Глубокое понимание пользователя',
    description:
      'Тесное взаимодействие с владельцами салонов на всех этапах разработки позволило создать действительно полезный продукт, который решает реальные проблемы бизнеса.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Итеративный подход',
    description:
      'Регулярные тестирования на реальных салонах и быстрая адаптация к обратной связи стали ключом к созданию гибкого и эффективного решения.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'AI как инструмент роста',
    description:
      'Интеграция AI-технологий в традиционный бизнес салонов красоты доказала, что инновации могут радикально улучшить эффективность без усложнения процессов.',
    color: 'from-purple-500 to-pink-500',
  },
];

export function ConclusionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">Выводы и дальнейшие планы</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ключевые инсайты и уроки, извлечённые в процессе разработки Beauty AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 bg-gradient-to-br ${insight.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <insight.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="mb-4">{insight.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{insight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Future Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-3xl p-12 border border-primary/20 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(255, 59, 143, 0.1), transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1), transparent 50%)',
                'radial-gradient(circle at 0% 100%, rgba(255, 59, 143, 0.1), transparent 50%)',
                'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.1), transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(255, 59, 143, 0.1), transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3>Планы развития</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Мобильное приложение',
                  description: 'Нативное приложение для клиентов с функциями записи и AI-генерации',
                  quarter: 'Q1 2025',
                },
                {
                  title: 'Интеграция с мессенджерами',
                  description: 'Запись через WhatsApp, Telegram и другие популярные платформы',
                  quarter: 'Q2 2025',
                },
                {
                  title: 'Персонализированные рекомендации',
                  description: 'AI-анализ предпочтений для предложения подходящих процедур',
                  quarter: 'Q2 2025',
                },
                {
                  title: 'Marketplace услуг',
                  description: 'Платформа для поиска салонов и бронирования процедур',
                  quarter: 'Q3 2025',
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-6 rounded-2xl glass border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-sm">{plan.title}</h4>
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {plan.quarter}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60">{plan.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass rounded-3xl px-12 py-8 border border-primary/20"
          >
            <p className="text-2xl mb-4">
              Beauty AI продолжает трансформировать индустрию красоты,
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                делая высокие технологии доступными для каждого салона
              </span>
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Запущено в июне 2025</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
