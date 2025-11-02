import { motion, useInView } from "motion/react";
import { MessageCircle, Settings, Rocket } from "lucide-react";
import { useRef, memo } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Анализ",
    description: "Изучаем ваш бренд, целевую аудиторию и конкурентов",
  },
  {
    number: "02",
    icon: Settings,
    title: "Контент-план",
    description: "AI создает индивидуальный план публикаций и тем",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Генерация",
    description: "Ежедневное создание постов, Stories и Reels",
  },
] as const;

function HowItWorksSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-white dark:bg-slate-900 transition-colors" aria-labelledby="how-it-works-title">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants.container}
        >
          {/* Section Header */}
          <div id="how-it-works-title" className="sr-only">Как это работает</div>
          <SectionHeader
            badgeIcon={Rocket}
            badgeText="Простой процесс"
            title="Как это работает"
            description="Три простых шага до ежедневного качественного контента"
            variants={fadeInUpVariants.item}
          />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                variants={fadeInUpVariants.item}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 border border-blue-200/50 dark:border-blue-500/30 rounded-3xl p-8 overflow-hidden hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300">
                  {/* Number */}
                  <div className="absolute top-4 right-4 text-6xl font-light text-blue-200/40 dark:text-blue-500/20" aria-hidden="true">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-2xl bg-white/80 dark:bg-blue-500/10 border border-blue-200/30 dark:border-blue-500/30 shadow-sm dark:shadow-blue-500/20" aria-hidden="true">
                      <step.icon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-blue-900 dark:text-blue-400 font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-cyan-300/70 leading-relaxed" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
                      {step.description}
                    </p>

                    {/* Decorative line */}
                    <div className="pt-4" aria-hidden="true">
                      <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-lg dark:shadow-blue-500/50" />
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 dark:from-blue-500/0 dark:to-cyan-500/0 group-hover:from-blue-100/30 group-hover:to-cyan-100/30 dark:group-hover:from-blue-500/10 dark:group-hover:to-cyan-500/10 transition-all duration-300 rounded-3xl" aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Video placeholder */}
          <motion.div variants={fadeInUpVariants.item} className="mt-16 max-w-3xl mx-auto" id="examples">
            <div 
              className="relative aspect-[9/16] md:aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl overflow-hidden shadow-2xl dark:shadow-blue-500/30 border border-blue-200/50 dark:border-blue-500/30"
              role="img"
              aria-label="Примеры сгенерированного контента"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <button
                    onClick={() => {
                      const examplesSection =
                        window.__SCOPED_ROOTS__?.contentai?.querySelector("#examples") ||
                        document.getElementById("examples");
                      examplesSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-20 h-20 bg-white/80 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto shadow-lg dark:shadow-blue-500/50 backdrop-blur-sm hover:scale-110 transition-transform border dark:border-blue-500/50"
                    aria-label="Посмотреть примеры"
                  >
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-500 dark:border-l-blue-400 border-b-8 border-b-transparent ml-1" />
                  </button>
                  <p className="text-slate-600 dark:text-cyan-300/70">Примеры контента</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const HowItWorksSection = memo(HowItWorksSectionComponent);
