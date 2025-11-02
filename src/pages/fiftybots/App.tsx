import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bot, TrendingUp, DollarSign, Clock, CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { BotCatalog } from './components/BotCatalog';
import { ImplementationGuide } from './components/ImplementationGuide';
import { PricingTimeline } from './components/PricingTimeline';
import { LaunchPlan } from './components/LaunchPlan';
import { SEOHead } from './components/SEOHead';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      id: 0, 
      title: '50 вариантов ботов для бизнеса | Главная',
      description: 'Полный каталог из 50+ готовых ботов для автоматизации бизнеса. Примеры внедрения и ROI.',
      component: <TitleSlide /> 
    },
    { 
      id: 1, 
      title: 'Каталог из 50 ботов для бизнеса | Готовые решения автоматизации',
      description: '50+ готовых решений ботов для E-commerce, поддержки клиентов, продаж, маркетинга и HR. Подробное описание функций и ROI.',
      component: <BotCatalog /> 
    },
    { 
      id: 2, 
      title: 'Примеры внедрения ботов | Реальные кейсы и метрики ROI',
      description: 'Детальные кейсы внедрения чат-ботов с реальными метриками: рост конверсии, снижение затрат, окупаемость.',
      component: <ImplementationGuide /> 
    },
    { 
      id: 3, 
      title: 'Стоимость разработки бота и сроки | Калькулятор цен',
      description: 'Прозрачное ценообразование на разработку ботов: от 50 000 руб. Калькулятор окупаемости и timeline проектов.',
      component: <PricingTimeline /> 
    },
    { 
      id: 4, 
      title: 'Пошаговый план запуска бота | 7 этапов от идеи до внедрения',
      description: 'Подробный план запуска бота для бизнеса за 7 шагов: от аудита процессов до масштабирования.',
      component: <LaunchPlan /> 
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Обновление SEO при смене слайда
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    document.title = currentSlideData.title;
    
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = currentSlideData.description;
    }
  }, [currentSlide, slides]);

  return (
    <>
      <SEOHead />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 py-8 max-w-7xl" style={{ perspective: '2000px' }}>
        {/* Navigation */}
        <nav aria-label="Навигация по слайдам презентации">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Bot className="w-8 h-8 text-blue-600" />
            </motion.div>
            <span>Слайд {currentSlide + 1} из {slides.length}</span>
          </motion.div>
          
          <div className="flex gap-2" role="tablist" aria-label="Выбор слайда">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                animate={{
                  width: currentSlide === index ? 32 : 8,
                  scale: currentSlide === index ? 1 : 0.8,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`Перейти к слайду ${index + 1}: ${slide.title.split('|')[0].trim()}`}
              />
            ))}
          </div>
          </motion.div>
        </nav>

        {/* Slide Content */}
        <article 
          role="tabpanel" 
          aria-label={slides[currentSlide].title.split('|')[0].trim()}
          itemScope 
          itemType="https://schema.org/PresentationDigitalDocument"
        >
          <motion.div 
            className="min-h-[600px]"
            key={currentSlide}
            initial={{ opacity: 0, rotateY: -15, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            exit={{ opacity: 0, rotateY: 15, z: -100 }}
            transition={{ 
              duration: 0.7,
              ease: [0.6, 0.05, 0.01, 0.9]
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {slides[currentSlide].component}
          </motion.div>
        </article>

        {/* Navigation Buttons */}
        {currentSlide !== 4 && (
          <motion.div 
            className="flex justify-between mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="lg"
                aria-label="Перейти к предыдущему слайду"
              >
                <ChevronLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                Назад
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                size="lg"
                aria-label="Перейти к следующему слайду"
              >
                Далее
                <ChevronRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>
        )}
        
        {/* SEO-friendly footer */}
        <footer className="mt-16 text-center text-sm text-gray-600" itemScope itemType="https://schema.org/WPFooter">
          <p itemProp="copyrightNotice">
            © 2025 50 вариантов ботов для бизнеса. Все права защищены.
          </p>
          <p className="mt-2" itemProp="description">
            Профессиональная разработка чат-ботов для автоматизации бизнес-процессов. 
            Telegram боты, WhatsApp боты, веб-чаты для интернет-магазинов, поддержки клиентов, 
            продаж и маркетинга. Готовые решения с гарантией ROI.
          </p>
        </footer>
        </div>
      </main>
    </>
  );
}

function TitleSlide() {
  const features = [
    { icon: Bot, title: '50+', subtitle: 'Решений', color: 'text-blue-600', gradient: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, title: 'ROI', subtitle: '250-400%', color: 'text-green-600', gradient: 'from-green-500 to-emerald-500' },
    { icon: DollarSign, title: 'От 50К', subtitle: 'Стоимость', color: 'text-yellow-600', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Clock, title: '2-12', subtitle: 'Недель', color: 'text-purple-600', gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center space-y-8 py-16" itemScope itemType="https://schema.org/Service">
      <motion.div 
        className="relative"
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ 
          duration: 1.2,
          ease: [0.6, 0.05, 0.01, 0.9],
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            z: [0, 50, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Bot className="w-32 h-32 text-blue-600 relative z-10" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
          itemProp="name"
        >
          50 вариантов ботов для бизнеса
        </motion.h1>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          itemProp="description"
        >
          Готовые решения автоматизации для бизнеса с гарантией результата
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl" role="list">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateX: -90, z: -100 }}
              animate={{ opacity: 1, rotateX: 0, z: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.9 + index * 0.1,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              role="listitem"
            >
              <Card className={`relative overflow-hidden text-center p-6 cursor-pointer hover:shadow-2xl transition-all bg-gradient-to-br ${feature.gradient} border-2`} itemScope itemType="https://schema.org/Offer">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-3"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    aria-hidden="true"
                  >
                    <div className="p-3 bg-white rounded-full shadow-lg">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-3xl text-white mb-1"
                    itemProp="name"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 1 + index * 0.1
                    }}
                  >
                    {feature.title}
                  </motion.div>
                  <div className="text-sm text-white/90">{feature.subtitle}</div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
