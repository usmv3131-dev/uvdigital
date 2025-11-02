import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Target, Lightbulb, TrendingUp, Code, Palette, Zap, ArrowLeft, Sparkles } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import projectImage1 from "figma:asset/52988874fd1be18b3f1272ac5c76061fe3d9b968.png";
import projectImage2 from "figma:asset/7be08111b4085c66c2e426ee30d3b3cb055a9f95.png";
import { useNavigate } from "react-router-dom";

export function ProjectCaseStudy() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Motion",
    "Next.js",
    "AI API Integration"
  ];

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Современный дизайн",
      description: "Премиум темная тема с градиентами и glassmorphism эффектами"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "3D Анимации",
      description: "Плавные Motion анимации с 3D трансформациями"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Чистый код",
      description: "Модульная архитектура и переиспользуемые компоненты"
    }
  ];

  const results = [
    { metric: "45 000 ₽", label: "Минимальный тариф" },
    { metric: "20 000 ₽", label: "Базовый тариф" },
    { metric: "100%", label: "Адаптивность" },
    { metric: "8+", label: "Секций на странице" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-blue-400/20 rounded-full pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Header */}
      <motion.header 
        className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05, x: -5 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              onClick={() => navigate("/50bots")}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              50 ботов для бизнеса
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 relative">
        <motion.div 
          className="max-w-5xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 backdrop-blur-sm">
              Веб-разработка • UI/UX дизайн • AI
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`
            }}
          >
            Content AI
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AI-платформа для создания контента с интеграцией Beauty AI и умным редактором. Премиум дизайн с 3D анимациями для современного бизнеса.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => navigate("/contentai")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Посмотреть проект
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                Изучить детали
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Image */}
      <section className="container mx-auto px-4 pb-24">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-2"
            whileHover={{ 
              scale: 1.02,
              rotateX: 2,
              rotateY: 2,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <img 
              src={projectImage1} 
              alt="Content AI главная страница" 
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Overview */}
      <section id="overview" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Обзор проекта
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, borderColor: "border-l-blue-500", iconColor: "text-blue-400", title: "Задача", text: "Создать современный лендинг для AI-сервиса с акцентом на простоту использования и визуальную привлекательность" },
              { icon: Lightbulb, borderColor: "border-l-purple-500", iconColor: "text-purple-400", title: "Решение", text: "Разработан адаптивный интерфейс с градиентными элементами, 3D анимациями и интерактивными секциями" },
              { icon: TrendingUp, borderColor: "border-l-pink-500", iconColor: "text-pink-400", title: "Результат", text: "Полностью функциональный лендинг с формами, FAQ, тарифными планами и премиум дизайном" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                }}
              >
                <Card className={`border-l-4 ${item.borderColor} bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all h-full`}>
                  <CardContent className="pt-6">
                    <item.icon className={`w-10 h-10 ${item.iconColor} mb-4`} />
                    <h3 className="mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ключевые особенности
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Image */}
      <section id="solution" className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Детальная проработка
            </h2>
            <p className="text-gray-300">
              FAQ секция и форма обратной связи для повышения конверсии
            </p>
          </motion.div>
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={projectImage2} 
              alt="Content AI FAQ и форма" 
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              className="mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Технологии
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Badge 
                    variant="secondary"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 backdrop-blur-sm cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Результаты
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
              >
                <h3 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {result.metric}
                </h3>
                <p className="text-gray-400">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/20 backdrop-blur-xl text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50" />
            <CardContent className="p-12 md:p-16 text-center space-y-8 relative z-10">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
              >
                Обсудим ваш проект?
              </motion.h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Готов помочь создать современное веб-приложение или лендинг для вашего бизнеса с премиум дизайном и 3D анимациями
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50">
                    Написать в Telegram
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white/30 hover:bg-white/10"
                onClick={() => navigate("/cases/beautyaicase")}
                  >
                    Посмотреть другие работы
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Content AI Case Study. Создано для портфолио.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
