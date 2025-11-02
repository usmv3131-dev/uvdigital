import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Sparkles, Zap, Stars, Cpu } from "lucide-react";
import { memo, useRef, MouseEvent } from "react";
import { fadeInUpVariants, floatingAnimation, floatingTransition } from "../lib/motion-variants";
import { BackgroundDecoration } from "./shared/BackgroundDecoration";
import { SparkleButton } from "./ui/sparkle-button";
import { MagneticButton } from "./shared/MagneticButton";

function HeroSectionComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(smoothMouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-15, 15]);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToContact = () => {
    const contactSection =
      window.__SCOPED_ROOTS__?.contentai?.querySelector("#contact") ||
      document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExamples = () => {
    const examplesSection =
      window.__SCOPED_ROOTS__?.contentai?.querySelector("#examples") ||
      document.getElementById("examples") ||
      window.__SCOPED_ROOTS__?.contentai?.querySelector("#how-it-works") ||
      document.getElementById("how-it-works");
    examplesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors"
      aria-labelledby="hero-title"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background Layers */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{ 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        aria-hidden="true"
      >
        <BackgroundDecoration variant="hero" />
      </motion.div>

      {/* 3D Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          rotateY: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants.container}
          className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Badge with 3D effect */}
          <motion.div 
            variants={fadeInUpVariants.item}
            whileHover={{ 
              scale: 1.05,
              rotateX: 10,
              z: 50 
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 dark:bg-blue-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/50 rounded-full shadow-lg dark:shadow-blue-500/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-blue-500 dark:text-blue-400" aria-hidden="true" />
              </motion.div>
              <span className="text-sm text-blue-700 dark:text-blue-400">Для салонов красоты</span>
            </div>
          </motion.div>

          {/* 3D Heading with perspective */}
          <motion.div
            variants={fadeInUpVariants.item}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1 
              id="hero-title"
              className="text-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-300 dark:via-blue-400 dark:to-cyan-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ 
                fontFamily: 'var(--font-heading)',
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="inline-block"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ 
                  display: "inline-block",
                  textShadow: "0 0 60px rgba(59, 130, 246, 0.3)",
                }}
              >
                Content AI
              </motion.span>
            </motion.h1>

            {/* 3D Decorative elements around title */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <motion.div
                className="absolute top-0 left-1/4 text-blue-500/20 dark:text-blue-400/20"
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Zap size={40} />
              </motion.div>
              
              <motion.div
                className="absolute top-10 right-1/4 text-cyan-500/20 dark:text-cyan-400/20"
                animate={{
                  y: [0, 20, 0],
                  rotateZ: [0, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Stars size={35} />
              </motion.div>

              <motion.div
                className="absolute -top-5 right-1/3 text-purple-500/20 dark:text-purple-400/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Cpu size={30} />
              </motion.div>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            variants={fadeInUpVariants.item} 
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-cyan-300/80 leading-relaxed max-w-3xl mx-auto" 
            style={{ 
              fontFamily: 'var(--font-body)', 
              letterSpacing: '0.01em',
              transformStyle: "preserve-3d",
            }}
          >
            AI-контент бот для вашего салона красоты. Создает контент-план, настраивается под вас, соединяется с Beauty AI и улучшает контент
          </motion.p>

          {/* 3D CTA Buttons */}
          <motion.div 
            variants={fadeInUpVariants.item} 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <SparkleButton
                onClick={scrollToContact}
                className="shadow-2xl shadow-blue-300/40 dark:shadow-blue-500/60"
              >
                <span className="flex items-center gap-2">
                  Запустить бесплатно
                  <ArrowRight size={20} aria-hidden="true" />
                </span>
              </SparkleButton>
            </motion.div>

            <MagneticButton
              onClick={scrollToExamples}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/60 dark:bg-blue-500/10 backdrop-blur-sm text-blue-900 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/50 rounded-2xl hover:bg-white/80 dark:hover:bg-blue-500/20 transition-all font-semibold tracking-wide shadow-lg"
              strength={0.2}
            >
              Посмотреть примеры
            </MagneticButton>
          </motion.div>

          {/* 3D Floating Status Card */}
          <motion.div
            variants={fadeInUpVariants.item}
            className="inline-block mt-10 sm:mt-12"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-blue-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/50 rounded-2xl shadow-xl dark:shadow-blue-500/40"
              animate={{
                ...floatingAnimation,
                rotateX: [-5, 5, -5],
                rotateY: [-3, 3, -3],
              }}
              transition={{
                ...floatingTransition,
                rotateX: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.05,
                rotateX: 0,
                rotateY: 0,
                z: 100
              }}
              style={{ transformStyle: "preserve-3d" }}
              role="status"
              aria-live="polite"
            >
              <motion.div 
                className="w-3 h-3 bg-green-400 dark:bg-blue-400 rounded-full shadow-lg dark:shadow-blue-400/50" 
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(74, 222, 128, 0.7)",
                    "0 0 0 10px rgba(74, 222, 128, 0)",
                    "0 0 0 0 rgba(74, 222, 128, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true" 
              />
              <span className="text-blue-800 dark:text-cyan-300">Контент каждый день</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 3D Grid Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(59 130 246 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59 130 246 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center bottom"
        }}
        aria-hidden="true"
      />
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);
