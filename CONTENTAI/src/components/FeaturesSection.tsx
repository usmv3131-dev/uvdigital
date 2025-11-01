import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { Calendar, Wand2, Link2, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import { useRef, memo, MouseEvent, useState } from "react";
import { fadeInUpVariants } from "../lib/motion-variants";
import { SectionHeader } from "./shared/SectionHeader";
import { BackgroundDecoration } from "./shared/BackgroundDecoration";

const features = [
  {
    icon: Calendar,
    title: "Контент-план на месяц",
    description: "AI анализирует тренды и создает персональный план публикаций с учетом вашей специфики",
    backDescription: "Получайте готовый контент-календарь с идеями для постов, Stories и Reels на весь месяц вперед",
    gradient: "from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500",
    iconBg: "bg-blue-100 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Wand2,
    title: "Настройка под вас",
    description: "Адаптируется под ваш стиль, tone of voice и предпочтения клиентов",
    backDescription: "AI учится на вашем бренде и создает контент, который звучит именно как вы",
    gradient: "from-cyan-400 to-blue-400 dark:from-cyan-500 dark:to-blue-500",
    iconBg: "bg-cyan-100 dark:bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: Link2,
    title: "Интеграция с Beauty AI",
    description: "Соединяется с Beauty AI и использует данные о клиентах для персонализации контента",
    backDescription: "Синхронизация с вашей CRM для создания персонализированных постов о процедурах и акциях",
    gradient: "from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Улучшает контент",
    description: "Анализирует эффективность постов и автоматически оптимизирует стратегию",
    backDescription: "Постоянная A/B тестирование и оптимизация для максимального engagement",
    gradient: "from-green-400 to-emerald-400 dark:from-emerald-500 dark:to-teal-500",
    iconBg: "bg-green-100 dark:bg-emerald-500/10",
    iconColor: "text-green-600 dark:text-emerald-400",
  },
] as const;

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), {
    stiffness: 400,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), {
    stiffness: 400,
    damping: 30
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={fadeInUpVariants.item}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateX: isFlipped ? 0 : rotateX,
          rotateY: isFlipped ? 180 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative h-full min-h-[300px]"
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative group h-full">
            <div className="relative h-full bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/30 rounded-3xl p-8 overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-500/40 transition-all duration-300">
              {/* Animated gradient overlay */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                aria-hidden="true" 
              />
              
              {/* 3D Floating Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl ${feature.iconBg} border border-blue-200/30 dark:border-blue-500/30 shadow-lg dark:shadow-blue-500/30`}
                whileHover={{
                  rotateY: 360,
                  scale: 1.1,
                }}
                transition={{
                  rotateY: { duration: 0.8 },
                  scale: { duration: 0.2 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                aria-hidden="true"
              >
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </motion.div>

              {/* Content */}
              <div className="relative mt-4 space-y-4">
                <h3 className="text-blue-900 dark:text-blue-400 font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-cyan-300/70 leading-relaxed" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
                  {feature.description}
                </p>

                {/* Animated decorative line */}
                <motion.div 
                  className="pt-4" 
                  aria-hidden="true"
                  whileHover={{ scale: 1.5, x: 10 }}
                >
                  <div className={`h-1 w-16 bg-gradient-to-r ${feature.gradient} rounded-full shadow-lg dark:shadow-blue-500/50`} />
                </motion.div>

                {/* Click to flip hint */}
                <motion.div
                  className="absolute bottom-4 right-4 text-xs text-blue-400/50 dark:text-cyan-400/50"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Нажми для деталей
                </motion.div>
              </div>

              {/* 3D Corner decoration */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/0 to-cyan-100/50 dark:from-blue-500/0 dark:to-cyan-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                aria-hidden="true" 
              />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 dark:from-blue-900/50 dark:to-purple-900/50 backdrop-blur-sm border border-blue-400/50 dark:border-cyan-400/50 rounded-3xl p-8 overflow-hidden shadow-2xl">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30" aria-hidden="true" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isFlipped ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <feature.icon className="w-16 h-16 text-cyan-300 dark:text-blue-300" />
              </motion.div>

              <motion.h3
                className="text-white dark:text-cyan-200 font-bold text-xl"
                style={{ fontFamily: 'var(--font-heading)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isFlipped ? 0 : 20, opacity: isFlipped ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className="text-cyan-100 dark:text-blue-200 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isFlipped ? 0 : 20, opacity: isFlipped ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                {feature.backDescription}
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-300/50" />
              </motion.div>

              <motion.div
                className="text-xs text-cyan-300/70 dark:text-blue-300/70 mt-auto"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Нажми снова
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function FeaturesSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-slate-900 transition-colors overflow-hidden" aria-labelledby="features-title">
      <BackgroundDecoration />

      {/* Parallax floating elements */}
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />

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
            title="Умный контент"
            description="AI берёт на себя создание контента и ведение соцсетей салона"
            variants={fadeInUpVariants.item}
          />

          {/* 3D Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          {/* Bottom CTA with 3D effect */}
          <motion.div variants={fadeInUpVariants.item} className="text-center mt-16">
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white dark:text-white rounded-2xl hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-300 dark:hover:to-cyan-300 transition-all shadow-lg shadow-blue-300/30 dark:shadow-blue-500/50 font-semibold tracking-wide"
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              aria-label="Попробовать бесплатно"
            >
              <Sparkles size={20} aria-hidden="true" />
              <span>Попробовать бесплатно</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const FeaturesSection = memo(FeaturesSectionComponent);
