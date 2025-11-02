import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { Bot, Sparkles, Zap, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useRef, useState, MouseEvent } from "react";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

// 3D Card component with mouse tracking
function Card3D({
  stat,
  index,
  reducedMotion,
}: {
  stat: any;
  index: number;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
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

  const Icon = stat.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 40, z: reducedMotion ? 0 : -50 }}
      animate={{
        opacity: 1,
        y: reducedMotion ? 0 : 0,
        z: reducedMotion ? 0 : 0,
      }}
      transition={{
        duration: 0.8,
        delay: 1 + index * 0.15,
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
      className="group relative"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          z: reducedMotion ? 0 : isHovered ? 50 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="relative"
      >
        {/* Enhanced glow effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-br ${stat.gradient} opacity-0 blur-2xl rounded-3xl`}
          animate={{
            opacity: reducedMotion ? 0 : isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content */}
        <div
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl p-3 md:p-7 xl:p-8 hover:border-white/30 hover:bg-white/[0.12] transition-all duration-300"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Floating icon */}
          <motion.div
            className={`w-7 h-7 md:w-11 md:h-11 xl:w-12 xl:h-12 bg-gradient-to-br ${stat.gradient} rounded-lg md:rounded-2xl flex items-center justify-center mb-2 md:mb-4`}
            style={{ transform: "translateZ(40px)" }}
            animate={
              reducedMotion
                ? { rotateZ: 0 }
                : {
                    rotateZ: isHovered ? [0, 5, -5, 0] : 0,
                  }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white" />
          </motion.div>

          {/* Value with enhanced gradient */}
          <motion.div
            className={`text-lg md:text-4xl xl:text-5xl mb-1 md:mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
            style={{ transform: "translateZ(30px)" }}
          >
            {stat.value}
          </motion.div>

          {/* Label */}
          <motion.div
            className="text-[10px] md:text-base xl:text-lg text-white/70 group-hover:text-white/90 transition-colors leading-tight"
            style={{ transform: "translateZ(25px)" }}
          >
            {stat.label}
          </motion.div>

          {/* Animated particles */}
          <motion.div
            className={`absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br ${stat.gradient} opacity-30 blur-2xl rounded-full`}
            style={{ transform: "translateZ(10px)" }}
            animate={
              reducedMotion
                ? { scale: 1, opacity: 0.3 }
                : { scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />

          {/* Light reflection effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 rounded-xl md:rounded-3xl"
            animate={{
              opacity: reducedMotion ? 0 : isHovered ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(35px)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Layered parallax for orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  const scrollToContact = () => {
    const target =
      document.getElementById("contact") ||
      (document.querySelector('[data-section-id="contact"]') as HTMLElement | null);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const target =
      document.getElementById("projects") ||
      (document.querySelector('[data-section-id="projects"]') as HTMLElement | null);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[50vh] md:min-h-screen overflow-hidden bg-black"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 pointer-events-none" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Floating orbs with layered parallax */}
      <motion.div
        style={reducedMotion ? undefined : { y: orbY1 }}
        animate={
          reducedMotion
            ? { opacity: 0.25 }
            : { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 180, 360] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute top-10 -left-20 w-48 h-48 md:w-80 md:h-80 xl:w-96 xl:h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={reducedMotion ? undefined : { y: orbY2 }}
        animate={
          reducedMotion
            ? { opacity: 0.2 }
            : { scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15], rotate: [360, 180, 0] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 25, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute -bottom-10 -right-20 w-56 h-56 md:w-96 md:h-96 xl:w-[400px] xl:h-[400px] bg-pink-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Additional depth layers */}
      <motion.div
        style={
          reducedMotion ? undefined : { y: useTransform(scrollYProgress, [0, 1], ["0%", "45%"]) }
        }
        animate={
          reducedMotion
            ? { opacity: 0.2 }
            : { scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Hero Content */}
      <motion.div
        style={reducedMotion ? undefined : { y, opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8 md:pb-0"
      >
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-full mb-3 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400" />
            <span className="text-xs text-white/95">
              AI-решения нового поколения
            </span>
            <div className="hidden sm:flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-black" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-black" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 border-2 border-black" />
            </div>
          </div>
        </motion.div>

        {/* Main headline with 3D effect */}
        <div
          className="text-center max-w-5xl mx-auto mb-3 md:mb-6"
          style={{ perspective: "1000px" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 md:mb-5"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              className="block mb-1"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transform: "translateZ(20px)" }}
            >
              <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Автоматизация
              </span>
            </motion.span>
            <motion.span
              className="block"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              style={{ transform: "translateZ(40px)" }}
            >
              <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                бизнеса с AI
              </span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-lg md:text-xl xl:text-2xl text-white/80 max-w-2xl mx-auto mb-4 md:mb-8 leading-relaxed px-2"
          >
            Создаем умных ботов и автоматизируем процессы для вашего бизнеса.
            <br className="hidden md:block" />
            <span className="text-white/60 text-xs sm:text-base xl:text-lg">
              Увеличиваем продажи, сокращаем расходы, освобождаем время команды.
            </span>
          </motion.p>

        {/* CTA Buttons with 3D hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: -5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 md:px-6 py-3 md:py-5 rounded-2xl overflow-hidden border-0 text-sm md:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Начать проект
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              rotateX: -5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="group border-2 border-white/20 text-white hover:bg-white/10 px-4 md:px-6 py-3 md:py-5 rounded-2xl backdrop-blur-sm bg-white/5 hover:border-white/40 transition-all text-sm md:text-base"
            >
              <span className="flex items-center gap-2">
                <PlayCircle className="w-3 h-3 md:w-4 md:h-4" />
                Наши работы
              </span>
            </Button>
          </motion.div>
        </motion.div>
        </div>

        {/* 3D Cards Section */}
        <div className="grid grid-cols-3 gap-2 md:gap-5 xl:gap-6 max-w-6xl mx-auto mt-6 md:mt-16">
          {[
            {
              icon: Zap,
              value: "50+",
              label: "Успешных проектов",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Bot,
              value: "24/7",
              label: "Работа ботов",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Sparkles,
              value: "98%",
              label: "Удовлетворенность пользователей",
              gradient: "from-pink-500 to-orange-500",
            },
          ].map((stat, index) => (
            <Card3D
              key={stat.label}
              stat={stat}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
