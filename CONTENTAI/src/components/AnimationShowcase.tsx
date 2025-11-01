import { memo } from "react";
import { Sparkles, Zap, Rocket, Star } from "lucide-react";
import {
  FadeInUpContainer,
  ScaleInContainer,
  BlurInContainer,
  ElasticInContainer,
  FloatingElement,
  PulsingElement,
  GlowingElement,
  HoverCard,
  GlowCard,
  AnimatedButton,
  PulseButton,
  RotatingIcon,
  BouncingIcon,
  AnimatedGradientBg,
  FloatingOrb,
  AnimatedProgressBar,
  SpinningLoader,
  FadeInText,
  GradientText,
  RevealOnScroll,
  StaggerContainer,
} from "./AnimatedElements";

/**
 * 🎨 Animation Showcase
 * Демонстрация всех доступных анимаций Motion
 * Используйте для тестирования или как референс
 */
function AnimationShowcaseComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-blue-900 dark:text-blue-400">
            Motion Animations Showcase
          </h1>
          <p className="text-xl text-slate-600 dark:text-cyan-300/70">
            Полная библиотека анимаций для Content AI
          </p>
        </div>

        {/* Section 1: Fade Animations */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            📐 Fade Animations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInUpContainer className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Fade In Up
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Плавное появление снизу вверх
              </p>
            </FadeInUpContainer>

            <ScaleInContainer className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Scale In
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Появление с увеличением
              </p>
            </ScaleInContainer>

            <BlurInContainer className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Blur In
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Проявление с blur эффектом
              </p>
            </BlurInContainer>
          </div>
        </section>

        {/* Section 2: Continuous Animations */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            💫 Continuous Animations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <FloatingElement>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-white" />
                </div>
              </FloatingElement>
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2 text-center">
                Floating
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70 text-center">
                Плавающий элемент
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <PulsingElement>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" />
                </div>
              </PulsingElement>
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2 text-center">
                Pulsing
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70 text-center">
                Пульсирующий эффект
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <GlowingElement>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" />
                </div>
              </GlowingElement>
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2 text-center">
                Glowing
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70 text-center">
                Светящийся эффект
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Cards */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🎴 Interactive Cards
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <HoverCard className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30 cursor-pointer">
              <Rocket className="text-blue-500 dark:text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Hover Card
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Наведите мышь чтобы увидеть эффект подъема
              </p>
            </HoverCard>

            <GlowCard className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30 cursor-pointer">
              <Star className="text-blue-500 dark:text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Glow Card
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Наведите мышь чтобы увидеть свечение
              </p>
            </GlowCard>
          </div>
        </section>

        {/* Section 4: Buttons */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🔘 Animated Buttons
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <AnimatedButton className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg">
              Animated Button
            </AnimatedButton>

            <PulseButton className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg">
              Pulse Button
            </PulseButton>

            <AnimatedButton className="px-8 py-4 bg-white dark:bg-blue-500/10 text-blue-900 dark:text-blue-400 border border-blue-200 dark:border-blue-500/50 rounded-2xl">
              Outline Button
            </AnimatedButton>
          </div>
        </section>

        {/* Section 5: Icons */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🎯 Animated Icons
          </h2>
          
          <div className="flex gap-8 justify-center">
            <div className="text-center">
              <RotatingIcon className="w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Sparkles className="text-blue-500 dark:text-blue-400" />
              </RotatingIcon>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">Rotating</p>
            </div>

            <div className="text-center">
              <BouncingIcon className="w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Zap className="text-blue-500 dark:text-blue-400" />
              </BouncingIcon>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">Bouncing</p>
            </div>
          </div>
        </section>

        {/* Section 6: Background Elements */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🌈 Background Elements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-3xl overflow-hidden border border-blue-200/50 dark:border-blue-500/30">
              <AnimatedGradientBg className="absolute inset-0" />
              <div className="relative z-10 p-8 flex items-center justify-center h-full">
                <h3 className="font-bold text-blue-900 dark:text-blue-400 text-xl">
                  Animated Gradient
                </h3>
              </div>
            </div>

            <div className="relative h-64 bg-slate-900 rounded-3xl overflow-hidden border border-blue-200/50 dark:border-blue-500/30">
              <FloatingOrb className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <FloatingOrb
                className="absolute top-1/4 left-1/4"
                size={200}
                color="rgba(34, 211, 238, 0.15)"
                duration={6}
              />
              <div className="relative z-10 p-8 flex items-center justify-center h-full">
                <h3 className="font-bold text-white text-xl">Floating Orbs</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Progress & Loading */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            📊 Progress & Loading
          </h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70 mb-2">
                Progress Bar (75%)
              </p>
              <AnimatedProgressBar progress={75} className="h-2" />
            </div>

            <div className="flex items-center gap-4">
              <SpinningLoader />
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Spinning Loader
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Text Animations */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🎪 Text Animations
          </h2>
          
          <div className="space-y-6">
            <div>
              <FadeInText className="text-2xl font-bold text-blue-900 dark:text-blue-400">
                Fade In Text Animation
              </FadeInText>
            </div>

            <div>
              <GradientText className="text-4xl font-bold">
                Animated Gradient Text
              </GradientText>
            </div>
          </div>
        </section>

        {/* Section 9: Reveal Animations */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🎯 Reveal on Scroll
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <RevealOnScroll direction="up" className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Reveal from Bottom
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Появляется при прокрутке снизу
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="left" className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30">
              <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                Reveal from Right
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyan-300/70">
                Появляется при прокрутке справа
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Section 10: Stagger Container */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🎨 Stagger Animation
          </h2>
          
          <StaggerContainer className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <FadeInUpContainer
                key={item}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-2xl border border-blue-200/50 dark:border-blue-500/30 text-center"
              >
                <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">
                  {item}
                </div>
              </FadeInUpContainer>
            ))}
          </StaggerContainer>
        </section>

        {/* Section 11: Elastic Animation */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            🌀 Elastic & Spring
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ElasticInContainer className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30 text-center">
              <Rocket className="text-blue-500 dark:text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 dark:text-blue-400">
                Elastic Animation
              </h3>
            </ElasticInContainer>

            <ElasticInContainer delay={0.2} className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30 text-center">
              <Star className="text-blue-500 dark:text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 dark:text-blue-400">
                With Delay
              </h3>
            </ElasticInContainer>

            <ElasticInContainer delay={0.4} className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl border border-blue-200/50 dark:border-blue-500/30 text-center">
              <Sparkles className="text-blue-500 dark:text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 dark:text-blue-400">
                Staggered
              </h3>
            </ElasticInContainer>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-blue-200/50 dark:border-blue-500/30">
          <p className="text-slate-600 dark:text-cyan-300/70">
            🎨 Все анимации готовы к использованию в проекте Content AI
          </p>
          <p className="text-sm text-slate-500 dark:text-cyan-400/60 mt-2">
            Импортируйте из `/components/AnimatedElements.tsx`
          </p>
        </div>
      </div>
    </div>
  );
}

export const AnimationShowcase = memo(AnimationShowcaseComponent);
