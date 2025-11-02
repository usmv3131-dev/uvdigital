import { motion, useInView } from "motion/react";
import { Database, Calendar, Bell, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { useRef, memo, useCallback } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";
import { ScrollReveal } from "./shared/ScrollReveal";
import { ButtonGradient } from "./ui/button-gradient";
import { scrollToElement } from "../lib/utils";
import { Card3D } from "./ui/card-3d";
import { GlassPanel } from "./shared/GlassPanel";
import { FloatingShape3D } from "./shared/FloatingShape3D";
import { MeshGradient } from "./shared/MeshGradient";
import { ParticleField } from "./shared/ParticleField";

const features = [
  {
    icon: Database,
    title: "С CRM и без",
    description: "Работаем с любыми системами записи или создаём собственную базу клиентов",
    gradient: "from-rose-200 to-pink-200 dark:from-purple-500 dark:to-fuchsia-500",
    iconBg: "bg-rose-100 dark:bg-purple-900/50",
    iconColor: "text-rose-600 dark:text-purple-400",
  },
  {
    icon: Calendar,
    title: "Автоматическая запись",
    description: "Бот самостоятельно записывает клиентов на удобное время без вашего участия",
    gradient: "from-pink-200 to-rose-200 dark:from-fuchsia-500 dark:to-purple-500",
    iconBg: "bg-pink-100 dark:bg-fuchsia-900/50",
    iconColor: "text-pink-600 dark:text-fuchsia-400",
  },
  {
    icon: Bell,
    title: "Авто-уведомления",
    description: "Напоминания о записи, подтверждения и персональные предложения",
    gradient: "from-rose-200 to-orange-200 dark:from-purple-500 dark:to-pink-500",
    iconBg: "bg-orange-100 dark:bg-pink-900/50",
    iconColor: "text-orange-600 dark:text-pink-400",
  },
  {
    icon: MessageCircle,
    title: "Полноценные диалоги",
    description: "Естественное общение с клиентами, консультации и ответы на вопросы 24/7",
    gradient: "from-green-200 to-emerald-200 dark:from-emerald-500 dark:to-teal-500",
    iconBg: "bg-green-100 dark:bg-emerald-900/50",
    iconColor: "text-green-600 dark:text-emerald-400",
  },
] as const;

function FeaturesSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollToContact = useCallback(() => scrollToElement("contact"), []);

  return (
    <section id="features" className="relative py-20 md:py-32 bg-gradient-to-br from-rose-50 via-orange-50/50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 transition-colors overflow-hidden" aria-labelledby="features-title">
      <MeshGradient variant="accent" />
      <ParticleField count={40} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants.container}
        >
          {/* Section Header */}
          <div id="features-title" className="sr-only">Возможности</div>
          <SectionHeader
            badgeIcon={CheckCircle2}
            badgeText="Возможности"
            badgeVariant="green"
            title="Всё просто"
            description="AI агент берёт на себя рутинные задачи и общение с клиентами"
            variants={fadeInUpVariants.item}
          />

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.12} direction={index % 2 === 0 ? "left" : "right"}>
                <Card3D intensity={15}>
                  <GlassPanel variant="secondary" className="h-full">
                    <motion.article
                      className="relative p-8 h-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-6">
                        {/* 3D Icon */}
                        <FloatingShape3D duration={5 + index} delay={index * 0.2} distance={10}>
                          <motion.div 
                            className={`inline-flex p-5 rounded-3xl ${feature.iconBg} border border-rose-200/40 dark:border-purple-500/40 shadow-xl dark:shadow-purple-500/30 backdrop-blur-sm`}
                            whileHover={{ 
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.15,
                            }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: "preserve-3d" }}
                            aria-hidden="true"
                          >
                            <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                          </motion.div>
                        </FloatingShape3D>

                        {/* Title */}
                        <h3 className="text-2xl bg-gradient-to-br from-rose-800 to-pink-700 dark:from-purple-100 dark:to-fuchsia-100 bg-clip-text text-transparent">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-rose-700/90 dark:text-purple-200/90 leading-relaxed text-lg">
                          {feature.description}
                        </p>

                        {/* Decorative line */}
                        <motion.div 
                          className="pt-4" 
                          aria-hidden="true"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                        >
                          <div className={`h-1.5 w-20 bg-gradient-to-r ${feature.gradient} rounded-full shadow-lg dark:shadow-purple-500/50`} />
                        </motion.div>
                      </div>
                    </motion.article>
                  </GlassPanel>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUpVariants.item} className="text-center mt-20">
            <Card3D intensity={10}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonGradient
                  onClick={scrollToContact}
                  className="rounded-2xl px-10 py-5 text-lg shadow-2xl shadow-rose-500/30 dark:shadow-purple-500/40"
                  aria-label="Попробовать бесплатно"
                >
                  <Sparkles size={22} aria-hidden="true" />
                  <span>Попробовать бесплатно</span>
                </ButtonGradient>
              </motion.div>
            </Card3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const FeaturesSection = memo(FeaturesSectionComponent);
