import { CheckCircle2, Target, Lightbulb, Rocket, BarChart, Wrench, TestTube, Sparkles, ArrowRight, AlertCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const steps = [
  {
    number: 1,
    title: 'Цели и задачи',
    duration: '3-5 дней',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    tasks: ['Определить цель', 'Выявить проблемы', 'Установить KPI'],
    tip: 'Начните с одной задачи'
  },
  {
    number: 2,
    title: 'Сценарии',
    duration: '1-2 недели',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500',
    tasks: ['Карта диалогов', 'Список запросов', 'Прототипы'],
    tip: 'Используйте реальные данные'
  },
  {
    number: 3,
    title: 'Платформа',
    duration: '3-5 дней',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    tasks: ['Выбор канала', 'Платформа разработки', 'План интеграций'],
    tip: 'No-code для простых, custom для сложных'
  },
  {
    number: 4,
    title: 'Разработка',
    duration: '2-8 недель',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
    tasks: ['Создать структуру', 'Настроить сценарии', 'Интеграции'],
    tip: 'Разрабатывайте итеративно'
  },
  {
    number: 5,
    title: 'Тестирование',
    duration: '1-2 недели',
    icon: TestTube,
    color: 'from-indigo-500 to-purple-500',
    tasks: ['Тест сценариев', 'Альфа/бета', 'Исправление багов'],
    tip: 'Тестируйте edge cases'
  },
  {
    number: 6,
    title: 'Запуск',
    duration: '1 неделя',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-500',
    tasks: ['Документация', 'Обучение команды', 'Soft launch'],
    tip: 'Начните с 10-20% трафика'
  },
  {
    number: 7,
    title: 'Оптимизация',
    duration: 'Постоянно',
    icon: TrendingUp,
    color: 'from-teal-500 to-cyan-500',
    tasks: ['Мониторинг метрик', 'Сбор feedback', 'Доработка'],
    tip: 'Первые 2 недели критичны'
  }
];

const metrics = [
  { metric: 'Completion', target: '> 70%', icon: '✅' },
  { metric: 'Containment', target: '> 60%', icon: '🎯' },
  { metric: 'CSAT', target: '> 4.0', icon: '⭐' },
  { metric: 'Response', target: '< 3 сек', icon: '⚡' }
];

const mistakes = [
  { mistake: 'Автоматизировать всё сразу', solution: 'Начните с 1-2 сценариев' },
  { mistake: 'Нет fallback-сценариев', solution: 'Всегда путь к оператору' },
  { mistake: 'Роботизированный тон', solution: 'Пишите естественно + эмодзи' }
];

export function LaunchPlan() {
  return (
    <div className="space-y-6">
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          План запуска за 7 шагов
        </motion.h2>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          От идеи до работающего решения
        </motion.p>
      </motion.div>

      {/* Visual Timeline */}
      <div className="relative" style={{ perspective: '1500px' }}>
        {/* Connection Line - Desktop Only */}
        <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300" />
        
        <div className="grid md:grid-cols-7 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4 + idx * 0.1,
                  ease: [0.6, 0.05, 0.01, 0.9]
                }}
                whileHover={{ 
                  scale: 1.05,
                  z: 50,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="h-full cursor-pointer hover:shadow-2xl transition-shadow overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
                  
                  <CardHeader className="relative z-10 pb-3">
                    {/* Number Circle */}
                    <motion.div 
                      className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <span className="text-xl">{step.number}</span>
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div 
                      className="flex justify-center mb-2"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-6 h-6 text-gray-700`} />
                    </motion.div>
                    
                    <CardTitle className="text-center text-sm">{step.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 space-y-3">
                    {/* Tasks - Compact */}
                    <div className="space-y-1">
                      {step.tasks.map((task, taskIdx) => (
                        <div key={taskIdx} className="text-xs flex items-start gap-1">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span className="text-gray-600">{task}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tip */}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-xs text-yellow-600 flex items-start gap-1">
                        <span>💡</span>
                        <span>{step.tip}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Metrics - Visual Cards */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BarChart className="w-5 h-5 text-green-600" />
            Метрики успеха
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {metrics.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-4 text-center space-y-2 shadow-md border-2 border-green-100"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 0.8 + idx * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="text-xs text-gray-600">{item.metric}</div>
                <motion.div 
                  className="text-xl text-green-600"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.target}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes - Compact */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Типичные ошибки
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mistakes.map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-lg p-3 border-l-4 border-red-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-sm text-red-700 mb-0.5">❌ {item.mistake}</div>
                <div className="text-sm text-green-700">✅ {item.solution}</div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Button */}
      <div className="flex justify-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="/aimarketing"
            className="relative group block"
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: { scale: 1.05 },
              tap: { scale: 0.98 }
            }}
          >
            {/* Pulsating glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-75"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Button */}
            <motion.div
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-[2px] shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white rounded-2xl px-8 py-5 flex items-center gap-4 group-hover:bg-opacity-95 transition-all">
                <motion.div
                  variants={{
                    hover: {
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </motion.div>

                <div className="flex flex-col">
                  <motion.span 
                    className="text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    style={{ backgroundSize: '200% 100%' }}
                  >
                    Автоматизировать маркетинг
                  </motion.span>
                  <span className="text-xs text-gray-500">Узнайте больше о наших услугах</span>
                </div>

                <motion.div
                  variants={{
                    hover: {
                      x: 10,
                      transition: {
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.6
                      }
                    }
                  }}
                >
                  <ArrowRight className="w-6 h-6 text-purple-600" />
                </motion.div>
              </div>
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
              variants={{
                hover: {
                  x: ['-100%', '100%'],
                }
              }}
              transition={{ duration: 0.6 }}
              style={{ 
                transform: 'skewX(-20deg)',
                pointerEvents: 'none'
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
