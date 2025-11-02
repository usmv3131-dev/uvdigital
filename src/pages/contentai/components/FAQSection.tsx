import { motion, useInView } from "motion/react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useRef, memo, useState } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";

const faqs = [
  {
    question: "Что такое Content AI?",
    answer: "Content AI — это AI-контент бот для салонов красоты, который автоматически создает контент-план, генерирует посты, Stories и Reels, анализирует эффективность и оптимизирует стратегию контента. Бот адаптируется под ваш стиль, tone of voice и предпочтения клиентов.",
    category: "Основное"
  },
  {
    question: "Как работает интеграция с Beauty AI?",
    answer: "Content AI соединяется с Beauty AI для доступа к данным о клиентах, записях и услугах. Это позволяет создавать персонализированный контент, основанный на реальных данных вашего салона: акции для постоянных клиентов, анонсы ��овых услуг, рекомендации мастеров.",
    category: "Интеграция"
  },
  {
    question: "Сколько стоит Content AI?",
    answer: "Настройка + первый месяц: 45 000₽ (разовый платеж). Включает анализ бренда, создание контент-стратегии, обучение AI и контент-план. Ежемесячная подписка: 20 000₽/месяц — постоянная генерация контента. При годовой оплате действует скидка 20%.",
    category: "Цены"
  },
  {
    question: "Для каких соцсетей подходит Content AI?",
    answer: "Content AI генерирует контент для Instagram, VK, Telegram и других площадок. Поддерживаются все популярные форматы: посты для ленты, Stories, Reels, карусели. Можете использовать бот сразу для нескольких соцсетей.",
    category: "Функционал"
  },
  {
    question: "Как часто генерируется контент?",
    answer: "Контент генерируется ежедневно по вашему контент-плану. По умолчанию — 30 постов в месяц (1 пост в день), но частоту можно настроить под ваши нужды. Все посты проходят проверку качества перед публикацией.",
    category: "Функционал"
  },
  {
    question: "Можно ли редактировать сгенерированный контент?",
    answer: "Да, абсолютно! Все сгенерированные материалы вы получаете для проверки и можете редактировать перед публикацией. AI учится на ваших правках и со временем будет генерировать контент все точнее под ваши требования.",
    category: "Настройка"
  },
  {
    question: "Нужна ли техническая подготовка?",
    answer: "Нет, никаких технических знаний не требуется. Мы полностью настраиваем систему под вас, обучаем AI и создаем контент-план. Вам остается только проверять и публиковать готовый контент. Также предоставляется техническая поддержка.",
    category: "Настройка"
  },
  {
    question: "Как быстро можно запустить Content AI?",
    answer: "Полная настройка и запуск занимают 3-5 рабочих дней. За это время мы анализируем ваш бренд, обучаем AI, создаем первый контент-план и генерируем пробные материалы. После утверждения начинается регулярная генерация контента.",
    category: "Запуск"
  }
] as const;

function FAQSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="relative py-16 md:py-32 bg-white dark:bg-slate-900 transition-colors" 
      aria-labelledby="faq-title"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants.container}
        >
          {/* Section Header */}
          <div id="faq-title" className="sr-only">Часто задаваемые вопросы</div>
          <SectionHeader
            badgeIcon={HelpCircle}
            badgeText="FAQ"
            badgeVariant="purple"
            title="Часто задаваемые вопросы"
            description="Ответы на популярные вопросы о Content AI"
            variants={fadeInUpVariants.item}
          />

          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants.item}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 border border-blue-200/50 dark:border-blue-500/30 rounded-2xl overflow-hidden hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300">
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 text-left hover:bg-white/50 dark:hover:bg-slate-700/30 transition-colors"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex-1">
                      <h3 
                        className="text-blue-900 dark:text-blue-400 font-bold tracking-tight pr-4" 
                        style={{ fontFamily: 'var(--font-heading)' }}
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      {openIndex !== index && (
                        <span className="text-xs text-slate-500 dark:text-cyan-400/60 mt-1 inline-block">
                          {faq.category}
                        </span>
                      )}
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-blue-500 dark:text-blue-400">
                      {openIndex === index ? (
                        <Minus size={20} aria-hidden="true" />
                      ) : (
                        <Plus size={20} aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-2">
                      <div className="pt-3 border-t border-blue-200/50 dark:border-blue-500/20">
                        <p 
                          className="text-slate-600 dark:text-cyan-300/70 leading-relaxed" 
                          style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 dark:bg-blue-500/10 rounded-full">
                          <span className="text-xs text-blue-700 dark:text-blue-400">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUpVariants.item} className="mt-10 md:mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 border border-blue-200/50 dark:border-blue-500/30 rounded-3xl">
              <p className="text-slate-600 dark:text-cyan-300/70" style={{ fontFamily: 'var(--font-body)' }}>
                Не нашли ответ на свой вопрос?
              </p>
              <button
                onClick={() => {
                const contactSection =
                  window.__SCOPED_ROOTS__?.contentai?.querySelector("#contact") ||
                  document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-300 dark:hover:to-cyan-300 transition-all shadow-lg shadow-blue-300/30 dark:shadow-blue-500/50 font-semibold tracking-wide"
              >
                Задайте вопрос нам
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const FAQSection = memo(FAQSectionComponent);
