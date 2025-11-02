import { motion } from 'motion/react';
import { Check, Zap, Star } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

const plans = [
  {
    name: 'Подключение Beauty AI',
    price: '60 000',
    period: 'единоразово за первый месяц',
    description: 'Внедрение и запуск под конкретный салон или сеть',
    popular: false,
    features: [
      'Discovery и аудит каналов коммуникации',
      'Подготовка tone of voice и сценариев',
      'Интеграция с CRM и календарями',
      'Обучение AI на исторических диалогах',
      'Запуск пилота и приёмочное тестирование',
    ],
  },
  {
    name: 'Сопровождение сети',
    price: '15 000',
    period: 'в месяц за один салон',
    description: 'Поддержка, аналитика и развитие после запуска',
    popular: true,
    features: [
      'Оптимизация апселлов и скриптов',
      'Мониторинг SLA и отчётность',
      'Регулярные обновления AI-модели',
      'Поддержка 24/7 и персональный менеджер',
      'Совместные A/B-тесты и гипотезы по маркетингу',
      'Расширение на новые каналы и филиалы',
    ],
  },
];

export function PricingSection() {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm">Простое ценообразование</span>
          </motion.div>
          <h2 className="mb-6">Выберите подходящий тариф</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Все тарифы включают 14 дней бесплатного доступа
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative h-full glass rounded-3xl p-8 border transition-all ${
                  plan.popular
                    ? 'border-primary shadow-2xl shadow-primary/20'
                    : 'border-primary/20 hover:border-primary/40'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm shadow-lg">
                      <Star className="w-4 h-4 fill-white" />
                      Популярный
                    </div>
                  </motion.div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      {plan.price} ₽
                    </motion.span>
                  </div>
                  <p className="text-sm text-foreground/60">{plan.period}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl mb-8 flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40'
                      : 'glass border border-primary/30 hover:border-primary/50'
                  }`}
                >
                  <Zap className="w-5 h-5" />
                  Начать бесплатно
                </motion.button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 0%, rgba(255, 59, 143, 0.1), transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(255, 59, 143, 0.1), transparent 50%)',
                        'radial-gradient(circle at 0% 0%, rgba(255, 59, 143, 0.1), transparent 50%)',
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/60">
            Нужен индивидуальный план для сети салонов?{' '}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/beautyai#contact"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Свяжитесь с нами
              <Zap className="w-4 h-4" />
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
