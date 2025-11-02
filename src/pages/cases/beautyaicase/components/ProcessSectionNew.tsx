import { motion } from 'motion/react';
import { Search, Settings, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Консультация',
    description:
      'Проведение интервью с владельцами салонов, анализ текущих процессов и выявление болевых точек.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Settings,
    title: 'Настройка',
    description:
      'Создание дизайн-системы и прототипов, настройка AI-модели для генерации профессиональных фото.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Разработка',
    description:
      'Итеративная разработка платформы с регулярным тестированием на реальных салонах-партнерах.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Rocket,
    title: 'Запуск',
    description:
      'Плавное внедрение в салонах-партнёрах с полным обучением персонала и техподдержкой.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function ProcessSectionNew() {
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
          <h2 className="mb-6">Процесс разработки</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            От идеи до запуска — структурированный подход к созданию инновационного продукта
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary origin-left"
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all h-full"
                >
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-lg"
                  >
                    <span className="text-xl">{index + 1}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="text-sm text-primary mb-2">Этап {index + 1}</div>
                  <h3 className="mb-4">{step.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>

                  {/* Animated progress bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className={`mt-6 h-1 bg-gradient-to-r ${step.color} rounded-full origin-left`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
