import { motion, useInView } from "motion/react";
import { HelpCircle, Plus } from "lucide-react";
import { useRef, memo, useState, useCallback } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";
import { ButtonGlass } from "./ui/button-glass";
import { scrollToElement } from "../lib/utils";

const faqs = [
  {
    question: "Сколько стоит Beauty AI?",
    answer:
      "Установка и первый месяц работы стоит 60 000₽. Это включает полную настройку под ваш салон, интеграцию с CRM, обучение AI агента и совместное сопровождение 30 дней. Далее ежемесячная подписка от 15 000₽/мес с технической поддержкой, обновлениями и базовым количеством диалогов.",
  },
  {
    question: "Как быстро можно запустить AI агента?",
    answer:
      "Запуск занимает всего 3 дня! За это время мы проведём консультацию, настроим AI под особенности вашего салона, интегрируем с существующими системами и обучим агента общаться с вашими клиентами. Уже на 4-й день AI начнёт принимать заявки.",
  },
  {
    question: "Работает ли Beauty AI с моей CRM системой?",
    answer:
      "Да! Beauty AI легко интегрируется с популярными CRM: YClients, AmoCRM и другими системами записи. Если вы пока не используете CRM, мы создадим собственную базу клиентов с нуля. Интеграция занимает 1-2 дня.",
  },
  {
    question: "Что конкретно умеет делать AI администратор?",
    answer:
      "AI администратор работает как настоящий сотрудник: автоматически записывает клиентов на удобное время, отправляет напоминания о визите, подтверждает записи, отвечает на частые вопросы о услугах и ценах, консультирует по процедурам и работает 24/7 без выходных и больничных.",
  },
  {
    question: "Нужны ли мне технические знания для работы?",
    answer:
      "Абсолютно нет! Вам не нужны никакие технические навыки. Мы полностью настроим систему, обучим AI под ваш салон и будем сопровождать вас первый месяц. Вам нужно только принимать довольных клиентов, всё остальное сделает AI.",
  },
  {
    question: "Как AI общается с клиентами?",
    answer:
      "AI общается естественным языком через популярные мессенджеры (WhatsApp, Telegram, VK). Клиенты пишут как обычному администратору, AI понимает запросы и отвечает быстро и по делу. При необходимости может переключить на живого сотрудника.",
  },
  {
    question: "Что если у меня несколько мастеров или салонов?",
    answer:
      "Beauty AI прекрасно работает с любым количеством мастеров и даже сетями салонов. AI автоматически распределяет клиентов по свободному времени мастеров, учитывает их специализацию и расписание. Для сетей салонов предлагаем индивидуальные условия.",
  },
  {
    question: "Что входит в ежемесячную подписку?",
    answer:
      "Ежемесячная подписка 15 000₽ включает: постоянную техническую поддержку, регулярные обновления AI модели для улучшения качества ответов, мониторинг работы системы, оптимизацию диалогов и базовое количество обработанных диалогов. При большом объёме - гибкая тарификация.",
  },
] as const;

function FAQSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollToContact = useCallback(() => scrollToElement("contact"), []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-20 md:py-32 bg-white dark:bg-slate-900 transition-colors"
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
          <div id="faq-title" className="sr-only">
            Часто задаваемые вопросы
          </div>
          <SectionHeader
            badgeIcon={HelpCircle}
            badgeText="FAQ"
            badgeVariant="blue"
            title="Частые вопросы"
            description="Ответы на популярные вопросы о Beauty AI"
            variants={fadeInUpVariants.item}
          />

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants.item}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 border border-rose-200/50 dark:border-purple-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/20">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3
                      className="text-rose-900 dark:text-purple-100 pr-4 group-hover:text-rose-700 dark:group-hover:text-purple-200 transition-colors"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <Plus
                        size={24}
                        className="text-rose-500 dark:text-purple-400"
                      />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-rose-200/30 dark:border-purple-500/20">
                        <p
                          className="text-rose-700/80 dark:text-purple-300/80 leading-relaxed mt-3"
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            variants={fadeInUpVariants.item}
            className="mt-12 text-center"
          >
            <p className="text-rose-700/70 dark:text-purple-300/70 mb-4">
              Не нашли ответ на свой вопрос?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonGlass
                onClick={scrollToContact}
                className="rounded-2xl"
                aria-label="Задать вопрос"
              >
                <HelpCircle size={18} aria-hidden="true" />
                Задать вопрос
              </ButtonGlass>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const FAQSection = memo(FAQSectionComponent);
