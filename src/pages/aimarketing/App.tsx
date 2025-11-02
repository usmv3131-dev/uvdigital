import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'motion/react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Check, Target, Users, Lightbulb, TrendingUp, Clock, Brain, MessageSquare, Sparkles, ArrowRight, ChevronRight, Zap, BarChart3, UserCheck, CreditCard, LineChart, Star, Shield } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { FeaturesSectionWithHoverEffects } from './components/ui/feature-section-with-hover-effects';
import { ScrollProgress } from './components/ui/scroll-progress';
import { FloatingElement, PulseGlow, RotatingElement } from './components/ui/floating-elements';
import { ThreeDCard, ThreeDCardSimple } from './components/ui/3d-card-effect';
import { MagneticButton } from './components/ui/magnetic-button';
import { OptimizedFadeIn, Optimized3DHover } from './components/ui/optimized-motion';
import { Hero3DBackground } from './components/ui/hero-3d-background';
import { Interactive3DSection } from './components/ui/interactive-3d-section';

// Lazy load тяжелых компонентов для оптимизации
const MultiStepForm = lazy(() => import('./components/ui/multi-step-form'));

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax для hero секции
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
    
    // Оптимизация: установка CSS переменных для плавных анимаций
    document.documentElement.style.setProperty('--scroll-progress', '0');
  }, []);

  const scrollToSection = (id: string) => {
    const scopedRoot = window.__SCOPED_ROOTS__?.aimarketing;
    const element = scopedRoot?.querySelector(`#${id}`) || document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problems = [
    {
      icon: MessageSquare,
      text: 'Реклама не работает — непонятно, что в ней писать',
    },
    {
      icon: Users,
      text: 'Люди заходят на сайт, но не покупают',
    },
    {
      icon: TrendingUp,
      text: 'Конкуренты активно растут, а вы топчетесь на месте',
    },
    {
      icon: Target,
      text: 'Маркетинг напоминает лотерею — непредсказуемо',
    },
    {
      icon: Brain,
      text: 'Нет понятной стратегии — всё делается наугад',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Глубокое понимание вашей аудитории',
      description: 'Боли, страхи, мотивация клиентов • Где искать и как говорить',
      result: 'Теперь вы не продаёте "всем подряд", а точно знаете, кому и как предлагать свои услуги.',
    },
    {
      icon: Sparkles,
      title: 'УТП, которое реально работает',
      description: 'Оффер, от которого сложно отказаться • Готовые сообщения и шаблоны',
      result: 'Ваши тексты, сайт и реклама наконец-то начнут приносить продажи.',
    },
    {
      icon: Target,
      title: 'Детальный анализ конкурентов',
      description: 'Как они работают • Где вы можете быть сильнее',
      result: 'Вы выделяетесь среди конкурентов и создаёте уникальное позиционирование.',
    },
    {
      icon: TrendingUp,
      title: 'Готовый маркетинг-план',
      description: 'Шаг за шагом: что делать, куда двигаться • Тексты, шаблоны, каналы',
      result: 'Просто берите и внедряйте — ничего не нужно придумывать самостоятельно.',
    },
  ];

  const advantages = [
    {
      icon: TrendingUp,
      title: 'Больше заявок без лишних затрат',
      description: 'Привлекайте нужную аудиторию эффективнее и экономьте бюджет.',
    },
    {
      icon: Clock,
      title: 'Экономия времени — всё уже готово',
      description: 'Получите проверенные шаблоны и стратегии для мгновенного внедрения.',
    },
    {
      icon: Sparkles,
      title: 'Рост продаж за счёт чёткого позиционирования',
      description: 'Станьте заметными на фоне конкурентов и привлекайте больше клиентов.',
    },
    {
      icon: Brain,
      title: 'Использование ИИ без головной боли',
      description: 'Мы берём на себя всю техническую часть, а вы наслаждаетесь результатом.',
    },
    {
      icon: MessageSquare,
      title: 'Понимание, что и куда писать',
      description: 'Готовые тексты и рекомендации для всех каналов коммуникации.',
    },
    {
      icon: Lightbulb,
      title: 'Долгосрочный рост благодаря аналитике',
      description: 'Постоянное улучшение кампаний на основе данных и инсайтов.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Анализ конкурентов',
      description: 'Мы детально изучаем ваших конкурентов, их стратегии и слабые места, чтобы найти золотые возможности для вашего роста.',
    },
    {
      number: '02',
      title: 'Исследование вашей аудитории',
      description: 'С помощью ИИ мы выявляем боли, страхи и настоящую мотивацию ваших клиентов, чтобы говорить с ними на одном языке.',
    },
    {
      number: '03',
      title: 'Создание офферов и контента',
      description: 'Разрабатываем уникальные предложения и готовые материалы, которые цепляют внимание и продают.',
    },
    {
      number: '04',
      title: 'Готовый медиаплан и стратегия',
      description: 'Составляем понятный план действий с текстами, шаблонами и каналами — просто берите и внедряйте!',
    },
  ];

  const cases = [
    {
      title: 'Увеличение продаж онлайн-школы на 50% за 1 месяц',
      description: 'Полная автоматизация маркетинга с помощью AI: анализ аудитории, создание контента и настройка рекламных кампаний. Результат — стабильный рост продаж и снижение стоимости привлечения клиента.',
      metric: '+50%',
      metricLabel: 'рост продаж',
    },
    {
      title: 'Подключение комплекса AI агентов аудитора/маркетолога/smm-копирайтера за 1 день',
      description: 'Внедрение полного набора AI-инструментов для автоматизации маркетинга: аудит конкурентов, генерация контента и аналитика. Команда из 3 специалистов заменена AI-агентами за один день.',
      metric: '24ч',
      metricLabel: 'запуск системы',
    },
    {
      title: 'Концепция и презентация для тендера: AI и агент в тандеме',
      description: 'Концепция и презентация для участия в тендере — сделана AI + агент. Мы не победили в тот раз, но только потому что конкурент предложил более низкую цену.',
      metric: '100%',
      metricLabel: 'автоматизация',
    },
  ];

  const pricing = [
    {
      title: 'Анализ конкурентов',
      price: 'От 200.000 ₽',
      description: 'Мы изучаем ваших конкурентов, их стратегии и слабые места, чтобы найти возможности для роста именно вашего бизнеса.',
    },
    {
      title: 'Исследование вашей аудитории',
      price: 'От 50.000 ₽',
      description: 'С помощью нейросетей определяем боли, страхи и мотивацию вашей целевой аудитории — вы точно знаете, как и с кем говорить.',
    },
    {
      title: 'Создание офферов и контента',
      price: 'От 50.000 ₽',
      description: 'Мы разрабатываем уникальные предложения и готовые материалы, которые привлекают внимание и продают.',
    },
    {
      title: 'Готовый план действий',
      price: 'От 150.000 ₽',
      description: 'Вы получаете чёткий пошаговый медиаплан: что делать, куда идти, какие тексты использовать. Просто берите и внедряйте.',
    },
  ];

  const targetAudience = [
    'Бизнесу, который устал "пробовать вслепую"',
    'Предпринимателям, которым некогда разбираться в тонкостях маркетинга',
    'Онлайн-школам, коучам, экспертам, врачам и салонам красоты',
    'Тем, кто хочет выделиться и перестать слепо копировать конкурентов',
  ];

  const socialProof = [
    { icon: Users, value: '500+', label: 'довольных клиентов' },
    { icon: TrendingUp, value: '30%', label: 'средний рост продаж' },
    { icon: Star, value: '4.9', label: 'средняя оценка' },
    { icon: Shield, value: '100%', label: 'гарантия результата' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <PulseGlow className="top-20 -left-20" color="purple" size={600} duration={6} />
        <PulseGlow className="bottom-40 -right-40" color="blue" size={500} duration={8} />
      </div>
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm"
        style={{ 
          boxShadow: useTransform(
            scrollYProgress,
            [0, 0.05],
            ['0 0 0 rgba(0,0,0,0)', '0 4px 6px rgba(0,0,0,0.05)']
          ) as any
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <Brain className="w-6 h-6 text-purple-600" />
              <span className="text-lg font-semibold gradient-text-purple">
                AIМаркетинг
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('solution')} className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                О решении
              </button>
              <button onClick={() => scrollToSection('who')} className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Для кого
              </button>
              <button onClick={() => scrollToSection('how')} className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Как работает
              </button>
              <Button 
                onClick={() => scrollToSection('pricing')} 
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 shadow-sm"
              >
                Получить решение
              </Button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <Hero3DBackground>
        <section className="relative bg-gradient-to-b from-purple-50/50 to-white py-16 md:py-24 overflow-hidden" style={{ perspective: '1500px' }}>
          <motion.div 
            className="container mx-auto px-4 relative z-10"
            style={{
              transformStyle: 'preserve-3d',
              opacity: heroOpacity
            }}
          >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring",
                stiffness: 100
              }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-100/50 text-purple-700 rounded-full text-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Внедрение ИИ в бизнес</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 80
              }}
              className="text-hero mb-6 text-gray-900"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Получите на{' '}
              <motion.span 
                className="gradient-text-vibrant inline-block"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                30% больше клиентов
              </motion.span>
              {' '}с помощью ИИ
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lead mx-auto mb-8"
            >
              Получите готовый маркетинговый план, который начнёт приносить клиентов уже через неделю
            </motion.p>
            
            <OptimizedFadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-7 rounded-lg shadow-2xl shadow-purple-500/40 group relative overflow-hidden"
                strength={0.2}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center" onClick={() => scrollToSection('contact')}>
                  Хочу готовый маркетинг
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>
              
              <MagneticButton 
                className="text-lg px-10 py-7 border-2 border-purple-200 hover:border-purple-400 bg-white hover:bg-purple-50 rounded-lg transition-colors"
                strength={0.2}
              >
                <span onClick={() => scrollToSection('how')}>Как это работает</span>
              </MagneticButton>
            </OptimizedFadeIn>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {socialProof.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -5,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col items-center gap-1.5"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="p-2 bg-purple-50 rounded-xl"
                    whileHover={{ rotateZ: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  <div className="text-2xl gradient-text-purple">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        </section>
      </Hero3DBackground>

      {/* Problems Section */}
      <section className="py-16 bg-white" style={{ perspective: '1000px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-section-title mb-3">Вам это знакомо?</h2>
              <p className="text-lead">Проблемы, с которыми сталкивается каждый предприниматель</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <OptimizedFadeIn key={index} delay={index * 0.1}>
                  <ThreeDCardSimple className="group">
                    <Card className="p-5 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-lg bg-white h-full group-hover:shadow-purple-100">
                      <div className="flex items-start gap-4">
                        <FloatingElement delay={index * 0.2} duration={3} yOffset={5}>
                          <motion.div 
                            className="p-2.5 bg-purple-50 rounded-xl shrink-0 group-hover:bg-purple-100 transition-colors"
                            whileHover={{ rotateZ: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <problem.icon className="w-5 h-5 text-purple-600" />
                          </motion.div>
                        </FloatingElement>
                        <p className="text-sm text-gray-700 leading-relaxed mt-1">{problem.text}</p>
                      </div>
                    </Card>
                  </ThreeDCardSimple>
                </OptimizedFadeIn>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-50/50 rounded-xl"
              >
                <Users className="w-5 h-5 text-purple-600" />
                <p className="text-sm text-gray-700">
                  Именно с такими проблемами к нам приходят предприниматели
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="solution" className="py-16 bg-gray-50/50" style={{ perspective: '1200px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-section-title mb-3">
                Что вы получите с <span className="gradient-text-purple">"AIМаркетингом"</span>
              </h2>
              <p className="text-lead">Что внутри коробки:</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <OptimizedFadeIn key={index} delay={index * 0.15}>
                  <ThreeDCard className="group" intensity={10} enableGlow>
                    <Card className="p-6 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl bg-white h-full">
                      <div className="flex items-start gap-3 mb-4">
                        <FloatingElement delay={index * 0.3} duration={4} yOffset={6}>
                          <motion.div 
                            className="p-2.5 bg-purple-50 rounded-xl shrink-0 group-hover:bg-gradient-to-br group-hover:from-purple-100 group-hover:to-blue-100 transition-all"
                            whileHover={{ 
                              rotateY: 180,
                              scale: 1.15
                            }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            <benefit.icon className="w-5 h-5 text-purple-600" />
                          </motion.div>
                        </FloatingElement>
                        <div>
                          <h3 className="text-card-title mb-1">{benefit.title}</h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600 leading-relaxed">– {benefit.description}</p>
                        <motion.div 
                          className="pt-3 border-t border-gray-100"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-sm text-purple-700 flex items-start gap-2 leading-relaxed">
                            <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>{benefit.result}</span>
                          </p>
                        </motion.div>
                      </div>
                    </Card>
                  </ThreeDCard>
                </OptimizedFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white" style={{ perspective: '1500px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-section-title text-center mb-10"
            >
              Что даст вам <span className="gradient-text-vibrant">AIМаркетинг</span>?
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80, rotateX: 60, z: -150 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 70
                  }}
                  whileHover={{
                    y: -15,
                    rotateZ: 2,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="p-5 text-center border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md bg-white h-full">
                    <motion.div 
                      className="inline-flex p-3 bg-purple-50 rounded-2xl mb-4"
                      whileHover={{ 
                        rotateY: 360,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <advantage.icon className="w-6 h-6 text-purple-600" />
                    </motion.div>
                    <h3 className="text-card-title mb-2">{advantage.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-2xl text-white mx-12 inline-flex items-center gap-2 opacity-90">
              <Sparkles className="w-5 h-5" />
              AIМаркетинг
            </span>
          ))}
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="who" className="py-16 bg-gray-50/50" style={{ perspective: '1200px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-section-title text-center mb-10"
            >
              Кому особенно подойдёт?
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: index % 2 === 0 ? 3 : -3,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="p-5 border border-purple-200 bg-white hover:shadow-md transition-all hover:border-purple-300 h-full">
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shrink-0 mt-0.5"
                        whileHover={{ 
                          scale: 1.2,
                          rotateZ: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                      <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how" className="py-16 bg-white" style={{ perspective: '1200px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-section-title mb-3">
                4 шага к готовому маркетингу
              </h2>
              <p className="text-lead">Простой и понятный процесс</p>
            </motion.div>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100, rotateY: -45 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{
                    x: 10,
                    rotateY: 3,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="p-6 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md bg-white">
                    <div className="flex flex-col md:flex-row gap-5 items-start">
                      <motion.div 
                        className="text-4xl gradient-text-purple opacity-80 shrink-0"
                        whileHover={{ 
                          scale: 1.3,
                          rotateZ: 360
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-card-title mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-50/50 rounded-xl">
                <Brain className="w-5 h-5 text-purple-600" />
                <p className="text-sm text-gray-700">
                  На основе нейросетей и опыта агентства UVDigital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 bg-gray-50/50" style={{ perspective: '1500px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-section-title mb-3">
                Реальные результаты наших клиентов
              </h2>
              <p className="text-lead">Кейсы, которые говорят сами за себя</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: 60, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 70
                  }}
                  whileHover={{
                    y: -15,
                    rotateY: 8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="overflow-hidden border border-gray-200 hover:border-purple-300 transition-all hover:shadow-lg bg-white h-full">
                    <motion.div 
                      className="relative aspect-video bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative z-10 text-center">
                        <motion.div 
                          className="text-3xl gradient-text-purple mb-1"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {caseItem.metric}
                        </motion.div>
                        <div className="text-xs text-purple-600 uppercase tracking-wide">
                          {caseItem.metricLabel}
                        </div>
                      </div>
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <TrendingUp className="absolute bottom-2 right-2 w-10 h-10 text-purple-200/50" />
                      </motion.div>
                    </motion.div>
                    <div className="p-5">
                      <h3 className="text-card-title mb-2">{caseItem.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{caseItem.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white" style={{ perspective: '1500px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-section-title mb-3">
                Одно из самых <span className="gradient-text-vibrant">эффективных решений</span> на рынке
              </h2>
              <p className="text-lead">
                Объединяющее ИИ и маркетинг для бизнеса
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {pricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    rotateY: index === 0 ? 5 : -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="p-5 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md bg-white h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-card-title flex-1">{item.title}</h3>
                      <span className="text-xl gradient-text-purple ml-3">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 80, rotateX: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.9, 
                delay: 0.3,
                type: "spring",
                stiffness: 70
              }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="relative p-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0 overflow-hidden shadow-lg">
              <div className="text-center relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs uppercase tracking-wide mb-4">
                  <Star className="w-3.5 h-3.5" />
                  Тариф ПРО
                </div>
                
                <h3 className="text-2xl md:text-3xl mb-3">Полный маркетинг под ключ</h3>
                <p className="text-lg mb-6 opacity-90">Всё, что вам нужно для успеха</p>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-xl line-through opacity-70">450.000 ₽</span>
                  <span className="text-4xl md:text-5xl">100.000 ₽</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-sm">Экономия 350.000 ₽</span>
                </div>
                
                <p className="mb-6 max-w-xl mx-auto opacity-90 text-sm leading-relaxed">
                  С нашим полным маркетингом под ключ вы получаете всё необходимое для успешного продвижения вашего бизнеса.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    className="bg-white text-purple-600 hover:bg-gray-100 px-6 shadow-lg"
                    onClick={() => scrollToSection('contact')}
                  >
                    Заказать полный маркетинг под ключ
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50/50" style={{ perspective: '1200px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-section-title mb-3">Частые вопросы</h2>
              <p className="text-lead">
                Ответы на самые популярные вопросы
              </p>
            </motion.div>
            
            <Accordion type="single" collapsible className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <AccordionItem value="item-1" className="bg-white border border-gray-200 hover:border-purple-300 rounded-xl px-5 shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="text-base hover:text-purple-600 py-4">
                  Нужно ли мне разбираться в маркетинге?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  Абсолютно нет! Именно поэтому мы создали AIМаркетинг — чтобы вы получили готовое решение без необходимости становиться экспертом. Мы всё делаем за вас, вам остаётся только внедрять.
                </AccordionContent>
              </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
              <AccordionItem value="item-2" className="bg-white border border-gray-200 hover:border-purple-300 rounded-xl px-5 shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="text-base hover:text-purple-600 py-4">
                  А если у меня совсем маленький бизнес?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  AIМаркетинг создан специально для малого бизнеса и ИП. Неважно, насколько большой ваш бизнес сейчас — наши решения масштабируются и работают для компаний любого размера.
                </AccordionContent>
              </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
              <AccordionItem value="item-3" className="bg-white border border-gray-200 hover:border-purple-300 rounded-xl px-5 shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="text-base hover:text-purple-600 py-4">
                  Подходит ли для онлайн-бизнеса?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  Да, отлично подходит! Наши решения работают как для онлайн, так и для офлайн бизнеса. Мы адаптируем стратегию под ваш формат работы и каналы продвижения.
                </AccordionContent>
              </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
              <AccordionItem value="item-4" className="bg-white border border-gray-200 hover:border-purple-300 rounded-xl px-5 shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="text-base hover:text-purple-600 py-4">
                  А если у меня уже есть реклама?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  Прекрасно! Мы проанализируем вашу текущую рекламу, выявим точки роста и поможем сделать её эффективнее. Наше решение дополнит и усилит то, что у вас уже работает.
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-white via-purple-50/20 to-white" style={{ perspective: '1200px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="text-center mb-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h2 className="text-section-title mb-4 leading-tight">
                Внедрение ИИ в маркетинг малого бизнеса — готовое решение от UVDigital
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Автоматизируйте маркетинг, получайте стабильный поток клиентов и развивайте бизнес с помощью искусственного интеллекта
              </p>
            </motion.div>
            
            <FeaturesSectionWithHoverEffects 
              features={[
                {
                  title: 'Готовые маркетинговые решения',
                  description: 'UVDigital помогает малому бизнесу и ИП внедрять искусственный интеллект в маркетинг, автоматизировать процессы и получать стабильный поток клиентов. Мы предлагаем готовые маркетинговые решения, в том числе нейросети, digital-стратегии и упаковку под ключ.',
                  icon: <Zap />,
                },
                {
                  title: 'Понятная стратегия продвижения',
                  description: 'Если реклама не даёт результата, нет заявок, или непонятно, с чего начать продвижение — мы предложим понятную стратегию. С помощью ИИ можно привлекать клиентов, увеличивать продажи даже без большого бюджета и выделяться на фоне конкурентов.',
                  icon: <Target />,
                },
                {
                  title: 'Анализ аудитории и создание офферов',
                  description: 'Наши инструменты анализируют аудиторию, выявляют боли клиента и помогают создать действительно работающий оффер. Маркетинговая стратегия формируется под задачи бизнеса с учётом ниши и поведения целевой аудитории.',
                  icon: <BarChart3 />,
                },
                {
                  title: 'Умный маркетинг на автопилоте',
                  description: 'UVDigital подходит для ИП, самозанятых, онлайн-школ, врачей, магазинов, курсов и локальных сервисов. Мы создаём умный маркетинг, который работает автоматически, без вашего постоянного участия.',
                  icon: <UserCheck />,
                },
                {
                  title: 'Гибкие форматы сотрудничества',
                  description: 'Предлагаем маркетинг как сервис — без переплат и сложных брифов. Всё можно оформить по подписке или разово. Если вы не знаете, как настроить рекламу, что писать, и как продавать с помощью ИИ — мы поможем.',
                  icon: <CreditCard />,
                },
                {
                  title: 'Система роста на основе данных',
                  description: 'Закажите маркетинг для бизнеса с ИИ — и вы получите не только упаковку, но и чёткую систему привлечения клиентов. UVDigital — это инструмент роста для предпринимателей, основанный на данных, а не догадках.',
                  icon: <LineChart />,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 text-white relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="max-w-3xl mx-auto text-center mb-16"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl mb-8 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Хватит теряться в маркетинге — мы всё сделаем за вас
            </motion.h2>
            <motion.p 
              className="text-2xl mb-4 opacity-90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ delay: 0.2 }}
            >
              Оставьте заявку и получите понятную систему привлечения клиентов с Искусственным Интеллектом
            </motion.p>
          </motion.div>
          
          <OptimizedFadeIn delay={0.3}>
            <Suspense fallback={
              <div className="flex items-center justify-center py-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full"
                />
              </div>
            }>
              <MultiStepForm />
            </Suspense>
          </OptimizedFadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Brain className="w-8 h-8 text-purple-400" />
                <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full" />
              </div>
              <span className="text-lg">© 2025 AIМаркетинг</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors relative group">
                Политика конфиденциальности
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors relative group flex items-center gap-2"
              >
                Наверх
                <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
