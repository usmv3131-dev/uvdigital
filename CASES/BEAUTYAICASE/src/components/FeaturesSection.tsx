import { motion } from 'motion/react';
import { Database, Calendar, Bell, TrendingUp, Sparkles, Wand2 } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

const features = [
  {
    icon: Wand2,
    title: 'Улучшает работу Content AI',
    description:
      'Система даёт базу для новых тем и обучается за счет диалогов с клиентами, постоянно совершенствуя качество ответов.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Database,
    title: 'CRM и База данных',
    description:
      'Единая система для хранения информации о клиентах, истории посещений и предпочтениях с автоматическими отчётами.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Calendar,
    title: 'Автоматическая запись',
    description:
      'Клиенты записываются онлайн в удобное время. Система автоматически управляет расписанием мастеров.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bell,
    title: 'Авто-уведомления',
    description:
      'Автоматическая отправка SMS и push-уведомлений о предстоящих записях, акциях и персональных предложениях.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Повышение доходов',
    description:
      'AI-генерация качественных фото для соцсетей привлекает новых клиентов. Аналитика оптимизирует загрузку.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Персонализация',
    description:
      'AI анализирует предпочтения клиентов и автоматически предлагает подходящие процедуры и акции.',
    gradient: 'from-pink-500 to-purple-500',
  },
];

export function FeaturesSection() {
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Ключевые возможности</span>
          </motion.div>
          <h2 className="mb-6">Всё для роста вашего салона</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Комплексная платформа, объединяющая AI-технологии, CRM и автоматизацию для максимальной
            эффективности
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  className="mt-6 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"
                />
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
