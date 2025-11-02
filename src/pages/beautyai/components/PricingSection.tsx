import { motion, useInView } from "motion/react";
import { Check, Zap, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { useRef, memo, useCallback } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";
import { BackgroundDecoration } from "./shared/BackgroundDecoration";
import { ButtonGradient } from "./ui/button-gradient";
import { ButtonGlass } from "./ui/button-glass";
import { scrollToElement } from "../lib/utils";

const firstMonthFeatures = [
  "Полная настройка под ваш бизнес",
  "Интеграция с существующими системами",
  "Обучение AI агента",
  "Совместное сопровождение 30 дней",
  "Неограниченные правки и оптимизация",
] as const;

const monthlyFeatures = [
  "Постоянная техническая поддержка",
  "Регулярные обновления AI модели",
  "Мониторинг и оптимизация",
  "Базовое количество диалогов",
  "Доплата при большом объёме*",
] as const;

function PricingSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollToContact = useCallback(() => scrollToElement("contact"), []);

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden transition-colors" aria-labelledby="pricing-title">
      <BackgroundDecoration variant="pricing" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants.container}
        >
          {/* Section Header */}
          <div id="pricing-title" className="sr-only">Цены и подключение</div>
          <SectionHeader
            badgeIcon={Zap}
            badgeText="Прозрачные цены"
            title="Подключение"
            description="Простая система оплаты без скрытых платежей"
            variants={fadeInUpVariants.item}
          />

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* First Month Card */}
            <motion.article variants={fadeInUpVariants.item} className="relative group">
              <div className="relative h-full bg-gradient-to-br from-rose-50 to-pink-50 dark:from-purple-900/30 dark:to-fuchsia-900/30 backdrop-blur-sm border border-rose-200/50 dark:border-purple-500/30 rounded-3xl p-8 overflow-hidden hover:shadow-xl dark:hover:shadow-purple-500/30 transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-pink-100/30 dark:from-purple-500/10 dark:to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                
                {/* Badge */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-200/30 dark:bg-purple-500/30 border border-rose-300/50 dark:border-purple-400/50 rounded-full">
                    <Sparkles size={14} className="text-rose-600 dark:text-purple-400" aria-hidden="true" />
                    <span className="text-xs text-rose-700 dark:text-purple-300">Старт</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-rose-900 dark:text-purple-100 mb-2">
                      Установка и первый месяц
                    </h3>
                    <p className="text-rose-700/70 dark:text-purple-300/70 text-sm leading-relaxed">
                      Полная настройка AI агента и совместное сопровождение в течение первого месяца
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-rose-900 dark:text-purple-100 text-5xl tracking-tight">60 000</span>
                    <span className="text-rose-700/70 dark:text-purple-300/70 text-lg">₽</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3" role="list">
                    {firstMonthFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-200/50 dark:bg-purple-500/30 flex items-center justify-center mt-0.5" aria-hidden="true">
                          <Check size={12} className="text-rose-600 dark:text-purple-400" />
                        </div>
                        <span className="text-rose-800 dark:text-purple-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ButtonGradient
                      onClick={scrollToContact}
                      className="w-full rounded-2xl"
                      aria-label="Начать проект"
                    >
                      Начать проект
                      <ArrowRight size={18} aria-hidden="true" />
                    </ButtonGradient>
                  </motion.div>
                </div>
              </div>
            </motion.article>

            {/* Monthly Subscription Card */}
            <motion.article variants={fadeInUpVariants.item} className="relative group">
              <div className="relative h-full bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-purple-500/30 rounded-3xl p-8 overflow-hidden hover:shadow-xl dark:hover:shadow-purple-500/30 transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 dark:from-blue-500/0 dark:to-cyan-500/0 group-hover:from-blue-100/20 group-hover:to-cyan-100/20 dark:group-hover:from-blue-500/10 dark:group-hover:to-cyan-500/10 transition-all duration-300" aria-hidden="true" />
                
                {/* Badge */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 dark:bg-blue-500/30 border border-blue-300/50 dark:border-blue-400/50 rounded-full">
                    <TrendingUp size={14} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span className="text-xs text-blue-700 dark:text-blue-300">Подписка</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-rose-900 dark:text-purple-100 mb-2">
                      Ежемесячный тариф
                    </h3>
                    <p className="text-rose-700/70 dark:text-purple-300/70 text-sm leading-relaxed">
                      Продолжение работы AI агента с поддержкой и обновлениями
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-rose-900 dark:text-purple-100 text-5xl tracking-tight">15 000</span>
                    <span className="text-rose-700/70 dark:text-purple-300/70 text-lg">₽ / мес</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3" role="list">
                    {monthlyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100/50 dark:bg-blue-500/30 flex items-center justify-center mt-0.5" aria-hidden="true">
                          <Check size={12} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-rose-800 dark:text-purple-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div className="pt-2 border-t border-rose-200/30 dark:border-purple-500/30">
                    <p className="text-rose-600/60 dark:text-purple-400/60 text-xs leading-relaxed">
                      * Доплата рассчитывается по тарифной сетке при превышении базового количества диалогов
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ButtonGlass
                      onClick={scrollToContact}
                      className="w-full rounded-2xl"
                      aria-label="Узнать подробнее"
                    >
                      Узнать подробнее
                      <ArrowRight size={18} aria-hidden="true" />
                    </ButtonGlass>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Bottom Info */}
          <motion.div variants={fadeInUpVariants.item} className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-rose-50 dark:bg-purple-900/30 border border-rose-200/50 dark:border-purple-500/50 rounded-full backdrop-blur-sm">
              <Sparkles size={16} className="text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
              <span className="text-rose-800 dark:text-purple-200 text-sm">
                Индивидуальные условия для крупных сетей салонов
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const PricingSection = memo(PricingSectionComponent);
