import { TrendingUp, DollarSign, Users, Zap, Shield, Headphones } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, MouseEvent } from "react";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

const advantages = [
  {
    icon: TrendingUp,
    title: "Рост продаж до 40%",
    description: "AI-боты работают 24/7, не упускают заявки и конвертируют больше клиентов",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    title: "Экономия до 60%",
    description: "Сокращение расходов на персонал и ручную обработку запросов",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Быстрое внедрение",
    description: "Запуск готового решения от 2 недель, интеграция за несколько дней",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Довольные клиенты",
    description: "Мгновенные ответы, персонализация и качественный сервис",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Надежность и безопасность",
    description: "Защита данных, резервное копирование и стабильная работа",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Техническая поддержка, обновления и консультации в любое время",
    color: "from-pink-500 to-rose-500"
  }
];

const trustIndicators = [
  { emoji: "🚀", label: "Быстрый старт" },
  { emoji: "💎", label: "Премиум качество" },
  { emoji: "🎯", label: "Точные решения" },
  { emoji: "🤝", label: "Долгосрочное партнерство" }
];

// 3D Advantage Card
function AdvantageCard3D({
  advantage,
  index,
  reducedMotion,
}: {
  advantage: any;
  index: number;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 50, rotateX: reducedMotion ? 0 : -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: reducedMotion ? 0 : 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(event) => {
        if (!reducedMotion) handleMouseMove(event);
      }}
      onMouseEnter={() => {
        if (!reducedMotion) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!reducedMotion) handleMouseLeave();
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          z: reducedMotion ? 0 : isHovered ? 30 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-br ${advantage.color} opacity-0 blur-xl rounded-xl`}
          animate={{
            opacity: reducedMotion ? 0 : isHovered ? 0.4 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div 
          className="relative bg-white rounded-xl p-6 border border-gray-100 hover:border-purple-200 transition-colors duration-300"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Icon with depth */}
          <motion.div 
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4`}
            style={{ transform: "translateZ(40px)" }}
            animate={
              reducedMotion
                ? { rotateZ: 0, scale: 1 }
                : { rotateZ: isHovered ? [0, 10, -10, 0] : 0, scale: isHovered ? 1.1 : 1 }
            }
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <advantage.icon className="w-6 h-6 text-white" />
          </motion.div>

          <motion.h3 
            className="text-xl mb-2"
            style={{ transform: "translateZ(30px)" }}
          >
            {advantage.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600"
            style={{ transform: "translateZ(25px)" }}
          >
            {advantage.description}
          </motion.p>

          {/* Floating accent */}
          <motion.div
            className={`absolute top-2 right-2 w-16 h-16 bg-gradient-to-br ${advantage.color} opacity-10 blur-xl rounded-full`}
            animate={
              reducedMotion
                ? { scale: 1, opacity: 0.1 }
                : { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />

          {/* Light reflection */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 rounded-xl pointer-events-none"
            animate={{
              opacity: reducedMotion ? 0 : isHovered ? 0.5 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(45px)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// 3D Trust Indicator
function TrustIndicator3D({
  indicator,
  index,
  reducedMotion,
}: {
  indicator: any;
  index: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.div 
      className="text-center"
      initial={{
        opacity: 0,
        scale: reducedMotion ? 1 : 0.5,
        rotateY: reducedMotion ? 0 : -90,
      }}
      whileInView={{ opacity: 1, scale: 1, rotateY: reducedMotion ? 0 : 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              scale: 1.1,
              rotateX: 10,
              rotateY: -10,
              transition: { duration: 0.3 },
            }
      }
      style={{ perspective: "600px" }}
    >
      <div className="inline-flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl px-4 py-3 shadow-sm">
        <span className="text-2xl md:text-3xl">{indicator.emoji}</span>
        <span className="text-sm text-gray-700">{indicator.label}</span>
      </div>
    </motion.div>
  );
}

export function Advantages() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="advantages"
      className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden"
    >
      {/* Animated background accents */}
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.1 }
            : { scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute -top-24 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.1 }
            : { scale: [1.1, 0.9, 1.1], opacity: [0.05, 0.15, 0.05] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }
        className="absolute -bottom-40 left-10 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-4">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600">
              Почему выбирают нас
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Преимущества работы с UVDigital
          </h2>

          <p className="text-gray-600 text-lg">
            Команда с опытом внедрения AI-решений с реальными результатами: увеличиваем конверсию, сокращаем расходы и повышаем эффективность команд.
            Предлагаем комплексный подход от идеи до поддержки.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard3D
              key={advantage.title}
              advantage={advantage}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
            <span className="text-sm uppercase tracking-[0.4em] text-gray-500">
              Нам доверяют
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {trustIndicators.map((indicator, index) => (
              <TrustIndicator3D
                key={indicator.label}
                indicator={indicator}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
