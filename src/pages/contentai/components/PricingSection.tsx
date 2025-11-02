import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, memo, MouseEvent } from "react";
import { Pricing } from "./ui/pricing";
import { BackgroundDecoration } from "./shared/BackgroundDecoration";
import { Star, Sparkles } from "lucide-react";

function PricingSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection =
      window.__SCOPED_ROOTS__?.contentai?.querySelector("#contact") ||
      document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Настройка + Первый месяц",
      price: "45000",
      yearlyPrice: "36000",
      period: "разово",
      features: [
        "Анализ бренда и целевой аудитории",
        "Создание контент-стратегии",
        "Обучение AI под ваш стиль",
        "Интеграция с Beauty AI",
        "Контент-план на первый месяц",
        "30 постов для соцсетей",
      ],
      description: "Полная настройка Content AI под ваш салон",
      buttonText: "Начать проект",
      onClick: scrollToContact,
      isPopular: true,
    },
    {
      name: "Ежемесячная подписка",
      price: "20000",
      yearlyPrice: "16000",
      period: "месяц",
      features: [
        "Ежедневная генерация контента",
        "Посты, Stories, Reels",
        "Анализ эффективности",
        "Оптимизация стратегии",
        "Техническая поддержка",
        "30 постов в месяц",
      ],
      description: "Постоянная генерация контента и ведение соцсетей",
      buttonText: "Узнать подробнее",
      onClick: scrollToContact,
      isPopular: false,
    },
  ];

  return (
    <section 
      id="pricing"
      className="relative py-16 md:py-32 bg-white dark:bg-slate-900 overflow-hidden transition-colors" 
      aria-labelledby="pricing-title"
      ref={ref}
    >
      {/* Animated 3D Background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
        aria-hidden="true"
      />

      <BackgroundDecoration variant="pricing" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="pricing-title" className="sr-only">Цены и подключение</div>
        
        <Pricing
          plans={plans}
          title="Подключение"
          description="Простая система оплаты за качественный контент каждый день"
        />

        {/* 3D Bottom Info Badge */}
        <motion.div 
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <ThreeDDiscountBadge />
        </motion.div>
      </div>
    </section>
  );
}

function ThreeDDiscountBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-50, 50], [10, -10]), {
    stiffness: 400,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-50, 50], [-10, 10]), {
    stiffness: 400,
    damping: 30
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!badgeRef.current) return;
    
    const rect = badgeRef.current.getBoundingClientRect();
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
    <motion.div
      ref={badgeRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200/50 dark:border-yellow-500/50 rounded-2xl backdrop-blur-sm shadow-xl dark:shadow-yellow-500/30"
      >
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-yellow-500/30 dark:to-orange-500/30 rounded-2xl blur-xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />

        {/* Rotating stars */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400 fill-yellow-500" />
        </motion.div>

        <div className="relative z-10">
          <span className="text-blue-900 dark:text-yellow-300 font-bold text-base sm:text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
            Скидки при совместной покупке с Beauty AI
          </span>
        </div>

        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Sparkles className="w-5 h-5 text-orange-500 dark:text-orange-400" />
        </motion.div>

        {/* 3D depth elements */}
        <div
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-md opacity-50"
          style={{ transform: "translateZ(-20px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-md opacity-50"
          style={{ transform: "translateZ(-20px)" }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}

export const PricingSection = memo(PricingSectionComponent);
