import { Bot, Workflow, MessageSquare, BarChart, Sparkles, Clock } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, MouseEvent } from "react";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

const services = [
  {
    icon: Bot,
    title: "AI-боты для бизнеса",
    description: "Умные чат-боты для Telegram, WhatsApp и веб-сайтов. Обработка заявок, консультации и продажи 24/7.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Workflow,
    title: "Автоматизация процессов",
    description: "Настройка автоматических сценариев для CRM, маркетинга, продаж и клиентского сервиса.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "AI-ассистенты",
    description: "Персональные AI-помощники для салонов красоты, клиник, студий и других бизнесов.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: BarChart,
    title: "Аналитика и отчеты",
    description: "Автоматический сбор данных, аналитика эффективности и создание отчетов.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Контент-генерация",
    description: "AI-инструменты для создания текстов, постов, описаний товаров и маркетинговых материалов.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Clock,
    title: "Интеграции",
    description: "Подключение AI-решений к вашим существующим системам, CRM и сервисам.",
    color: "from-violet-500 to-purple-500"
  }
];

// 3D Service Card Component
function ServiceCard3D({
  service,
  index,
  reducedMotion,
}: {
  service: any;
  index: number;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
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
      initial={{ opacity: 0, y: reducedMotion ? 0 : 50, rotateX: reducedMotion ? 0 : -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: reducedMotion ? 0 : 0 }}
      viewport={{ once: true, margin: "-100px" }}
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
      className="group"
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
          className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 blur-xl rounded-2xl`}
          animate={{
            opacity: reducedMotion ? 0 : isHovered ? 0.4 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div 
          className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Icon with enhanced depth */}
          <motion.div 
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
            style={{ transform: "translateZ(40px)" }}
            animate={
              reducedMotion
                ? { rotateZ: 0, scale: 1 }
                : { rotateZ: isHovered ? [0, 5, -5, 0] : 0, scale: isHovered ? 1.1 : 1 }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <service.icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content with depth */}
          <motion.h3 
            className="text-xl mb-3"
            style={{ transform: "translateZ(30px)" }}
          >
            {service.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600"
            style={{ transform: "translateZ(25px)" }}
          >
            {service.description}
          </motion.p>

          {/* Floating particles */}
          <motion.div
            className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-full`}
            animate={
              reducedMotion
                ? { scale: 1, opacity: 0.1 }
                : { scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />

          {/* Light reflection */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 rounded-2xl pointer-events-none"
            animate={{
              opacity: reducedMotion ? 0 : isHovered ? 0.5 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(50px)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.1 }
            : { scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute -top-32 -left-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
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
            : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }
        className="absolute -bottom-40 -right-20 w-[420px] h-[420px] bg-pink-400/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600">
              Наши услуги
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Решения, которые повышают эффективность вашего бизнеса
          </h2>
          <p className="text-gray-600 text-lg">
            Команда UVDigital внедряет AI-инструменты под задачи вашего бизнеса:
            от автоматизации коммуникаций и продаж до аналитики и контент-маркетинга.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard3D
              key={service.title}
              service={service}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
