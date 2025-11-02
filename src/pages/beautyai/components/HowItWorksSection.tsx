import { motion, useInView } from "motion/react";
import { MessageCircle, Settings, Rocket } from "lucide-react";
import { useRef, memo } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";
import { ScrollReveal } from "./shared/ScrollReveal";
import { Card3D } from "./ui/card-3d";
import { GlassPanel } from "./shared/GlassPanel";
import { FloatingShape3D } from "./shared/FloatingShape3D";
import { MeshGradient } from "./shared/MeshGradient";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Консультация",
    description: "Обсуждаем ваши задачи и особенности салона",
  },
  {
    number: "02",
    icon: Settings,
    title: "Настройка",
    description: "Создаём и обучаем AI агента под ваш бизнес",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Запуск",
    description: "Начинаем принимать заявки и общаться с клиентами",
  },
] as const;

function HowItWorksSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30 dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-900 transition-colors overflow-hidden" aria-labelledby="how-it-works-title">
      {/* Mesh Gradient */}
      <MeshGradient variant="secondary" />

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
            description="Три простых шага до полной автоматизации вашего салона"
            variants={fadeInUpVariants.item}
          />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.15} direction="up">
                <Card3D intensity={12}>
                  <GlassPanel variant="accent" className="h-full">
                    <motion.article
                      className="relative p-8 h-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* 3D Number Badge */}
                      <FloatingShape3D duration={4 + index} delay={index * 0.3} distance={8}>
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 dark:from-purple-500 dark:via-fuchsia-500 dark:to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl dark:shadow-purple-500/60 transform hover:scale-110 hover:rotate-12 transition-all" aria-hidden="true">
                          <span className="text-white text-2xl font-bold">{step.number}</span>
                        </div>
                      </FloatingShape3D>

                      <div className="space-y-6 pt-4">
                        {/* 3D Icon */}
                        <FloatingShape3D duration={5 + index} delay={index * 0.2} distance={12}>
                          <motion.div 
                            className="inline-flex p-5 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 dark:from-purple-800/40 dark:to-purple-900/20 border border-white/50 dark:border-purple-500/40 shadow-xl dark:shadow-purple-500/30 backdrop-blur-md" 
                            whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: "preserve-3d" }}
                            aria-hidden="true"
                          >
                            <step.icon className="w-10 h-10 text-rose-600 dark:text-purple-300" />
                          </motion.div>
                        </FloatingShape3D>

                        {/* Title */}
                        <h3 className="text-2xl bg-gradient-to-br from-rose-800 to-pink-700 dark:from-purple-100 dark:to-fuchsia-100 bg-clip-text text-transparent">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-rose-700/90 dark:text-purple-200/90 leading-relaxed text-lg">
                          {step.description}
                        </p>

                        {/* Decorative line */}
                        <motion.div 
                          className="pt-4" 
                          aria-hidden="true"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        >
                          <div className="h-1.5 w-20 bg-gradient-to-r from-rose-400 to-pink-400 dark:from-purple-400 dark:to-fuchsia-400 rounded-full shadow-lg dark:shadow-purple-400/50" />
                        </motion.div>
                      </div>
                    </motion.article>
                  </GlassPanel>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          {/* 3D Video placeholder */}
          <motion.div variants={fadeInUpVariants.item} className="mt-20 max-w-4xl mx-auto" id="demo">
            <Card3D intensity={10}>
              <GlassPanel variant="primary">
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden"
                  role="img"
                  aria-label="Демонстрационное видео работы AI агента"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 dark:from-purple-900/50 dark:via-fuchsia-900/50 dark:to-purple-900/50" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FloatingShape3D duration={4} distance={15}>
                      <motion.button
                        className="relative w-24 h-24"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Воспроизвести видео"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-purple-600/80 dark:to-fuchsia-600/60 rounded-full shadow-2xl dark:shadow-purple-500/50 backdrop-blur-md" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-rose-500 dark:border-l-white border-b-[12px] border-b-transparent ml-2" />
                        </div>
                      </motion.button>
                    </FloatingShape3D>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg text-rose-800 dark:text-purple-200 font-medium">
                      Демо работы AI агента
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </Card3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const HowItWorksSection = memo(HowItWorksSectionComponent);
