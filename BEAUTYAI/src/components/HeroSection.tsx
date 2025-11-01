import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Zap, Stars, Wand2 } from "lucide-react";
import { memo, useCallback, useRef } from "react";
import { fadeInUpVariants, floatingAnimation, floatingTransition, glowPulseAnimation, glowPulseTransition } from "../lib/motion-variants";
import { ButtonGradient } from "./ui/button-gradient";
import { ButtonGlass } from "./ui/button-glass";
import { scrollToElement } from "../lib/utils";
import { MeshGradient } from "./shared/MeshGradient";
import { ParticleField } from "./shared/ParticleField";
import { FloatingShape3D } from "./shared/FloatingShape3D";
import { Card3D } from "./ui/card-3d";

function HeroSectionComponent() {
  const scrollToContact = useCallback(() => scrollToElement("contact"), []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 overflow-hidden transition-colors"
      aria-labelledby="hero-title"
    >
      {/* Mesh Gradient Background */}
      <MeshGradient variant="primary" />
      
      {/* Particle Field */}
      <ParticleField count={60} />

      {/* Animated Grid */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants.container}
          className="text-center space-y-8 sm:space-y-10 max-w-4xl mx-auto"
        >
          {/* Refined Floating Badge */}
          <motion.div variants={fadeInUpVariants.item} className="flex justify-center">
            <FloatingShape3D duration={5} distance={12}>
              <motion.div
                className="inline-flex items-center gap-2.5 px-5 py-2 bg-gradient-to-r from-white/50 via-white/30 to-white/50 dark:from-purple-900/50 dark:via-purple-800/30 dark:to-purple-900/50 backdrop-blur-xl border border-white/40 dark:border-purple-500/40 rounded-full shadow-xl dark:shadow-purple-500/30"
                whileHover={{ scale: 1.03 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={14} className="text-rose-500 dark:text-purple-400" aria-hidden="true" />
                </motion.div>
                <span className="text-sm bg-gradient-to-r from-rose-600 to-pink-600 dark:from-purple-300 dark:to-fuchsia-300 bg-clip-text text-transparent font-medium tracking-wide">
                  Для салонов красоты
                </span>
                <Stars size={12} className="text-pink-500 dark:text-fuchsia-400" aria-hidden="true" />
              </motion.div>
            </FloatingShape3D>
          </motion.div>

          {/* Elegant Title - Reduced size */}
          <motion.div variants={fadeInUpVariants.item}>
            <motion.h1 
              id="hero-title"
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1]"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.01 }}
              >
                <span className="block bg-gradient-to-br from-rose-600 via-pink-500 to-orange-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-2xl font-light">
                  Beauty AI
                </span>
                
                {/* 3D Shadow layers */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-br from-rose-600/15 via-pink-500/15 to-orange-500/15 dark:from-purple-400/15 dark:via-fuchsia-400/15 dark:to-pink-400/15 bg-clip-text text-transparent blur-2xl"
                  style={{ transform: "translateZ(-30px)" }}
                  aria-hidden="true"
                >
                  Beauty AI
                </motion.span>
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Refined Subheading - More elegant */}
          <motion.p 
            variants={fadeInUpVariants.item} 
            className="text-base sm:text-lg md:text-xl text-rose-700/80 dark:text-purple-200/80 leading-relaxed max-w-3xl mx-auto font-light"
          >
            <span className="bg-gradient-to-r from-rose-700 to-pink-600 dark:from-purple-300 dark:to-fuchsia-300 bg-clip-text text-transparent font-normal">
              AI-администратор
            </span>
            {" "}для вашего салона красоты.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-1 sm:mt-0">
              Автоматическая запись, консультации и уведомления{" "}
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-fuchsia-300 dark:to-purple-300 bg-clip-text text-transparent font-medium">
                24/7
              </span>
              <motion.span
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-pink-500 to-rose-500 dark:from-fuchsia-400 dark:to-purple-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.p>

          {/* Refined CTA Buttons */}
          <motion.div variants={fadeInUpVariants.item} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Card3D intensity={8}>
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <ButtonGradient
                  onClick={scrollToContact}
                  className="rounded-full px-8 py-3.5 text-base shadow-2xl shadow-rose-500/25 dark:shadow-purple-500/35"
                  aria-label="Запустить бесплатно"
                >
                  <Zap size={18} className="animate-pulse" aria-hidden="true" />
                  <span className="font-medium">Запустить бесплатно</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonGradient>
              </motion.div>
            </Card3D>

            <Card3D intensity={6}>
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <ButtonGlass
                  className="rounded-full px-8 py-3.5 text-base shadow-lg"
                  aria-label="Посмотреть демо"
                >
                  <Wand2 size={16} aria-hidden="true" />
                  <span className="font-medium">Посмотреть демо</span>
                </ButtonGlass>
              </motion.div>
            </Card3D>
          </motion.div>

          {/* Refined Status Card */}
          <motion.div
            variants={fadeInUpVariants.item}
            className="inline-block mt-12"
          >
            <FloatingShape3D duration={6} distance={15}>
              <Card3D intensity={10} glare>
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/70 via-white/50 to-white/70 dark:from-purple-900/70 dark:via-purple-800/50 dark:to-purple-900/70 backdrop-blur-xl border border-white/50 dark:border-purple-400/50 rounded-full shadow-2xl dark:shadow-purple-500/40"
                  whileHover={{ scale: 1.03 }}
                  role="status"
                  aria-live="polite"
                >
                  <motion.div 
                    className="relative"
                    animate={glowPulseAnimation}
                    transition={glowPulseTransition}
                  >
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/60" aria-hidden="true" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-sm" aria-hidden="true" />
                  </motion.div>
                  <span className="text-sm font-medium bg-gradient-to-r from-rose-700 to-pink-600 dark:from-purple-200 dark:to-fuchsia-200 bg-clip-text text-transparent">
                    Запуск за 3 дня
                  </span>
                  <Sparkles size={14} className="text-rose-500 dark:text-purple-400" aria-hidden="true" />
                </motion.div>
              </Card3D>
            </FloatingShape3D>
          </motion.div>

          {/* Refined Feature Pills */}
          <motion.div 
            variants={fadeInUpVariants.item}
            className="flex flex-wrap gap-3 justify-center pt-6 max-w-2xl mx-auto"
          >
            {["AI консультант", "Авто-запись", "CRM интеграция", "24/7 поддержка"].map((feature, i) => (
              <FloatingShape3D key={feature} duration={5 + i * 0.5} delay={i * 0.15} distance={8}>
                <motion.div
                  className="px-5 py-2 bg-white/40 dark:bg-purple-900/40 backdrop-blur-md border border-white/50 dark:border-purple-500/50 rounded-full shadow-md text-sm"
                  whileHover={{ scale: 1.05, rotateZ: 3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="text-rose-700 dark:text-purple-300 font-medium">
                    {feature}
                  </span>
                </motion.div>
              </FloatingShape3D>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Refined Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);
