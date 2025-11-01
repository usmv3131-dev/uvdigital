import { DollarSign, Clock, Zap, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface PricingTier {
  name: string;
  price: string;
  timeline: string;
  features: string[];
  examples: string[];
  color: string;
  icon: any;
  percentage: number;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Простой бот',
    price: '50-150 тыс. ₽',
    timeline: '2-3 недели',
    features: [
      'Линейный сценарий',
      'До 20 ответов',
      'Базовые интеграции',
      'Поддержка 3 мес'
    ],
    examples: ['FAQ', 'Запись', 'Статус заказа'],
    color: 'from-green-50 to-emerald-100',
    icon: Zap,
    percentage: 30
  },
  {
    name: 'Средний бот',
    price: '150-400 тыс. ₽',
    timeline: '4-6 недель',
    features: [
      'Разветвленные сценарии',
      'До 100 диалогов',
      'CRM/ERP интеграция',
      'Персонализация',
      'Поддержка 6 мес'
    ],
    examples: ['E-commerce', 'Поддержка', 'Лидогенерация'],
    color: 'from-blue-50 to-cyan-100',
    icon: Sparkles,
    percentage: 50
  },
  {
    name: 'Сложный бот',
    price: '400-1000+ тыс. ₽',
    timeline: '8-12 недель',
    features: [
      'AI и ML',
      'NLP',
      'Множественные интеграции',
      'Голосовые возможности',
      'Поддержка 12 мес'
    ],
    examples: ['Ассистент', 'ML-рекомендации', 'Омниканальный'],
    color: 'from-purple-50 to-pink-100',
    icon: TrendingUp,
    percentage: 90
  }
];

const costFactors = [
  { factor: 'Интеграции', impact: '+15-30 тыс.', icon: '🔗' },
  { factor: 'AI и NLP', impact: '+100-300 тыс.', icon: '🧠' },
  { factor: 'Каналы', impact: '+20-40 тыс.', icon: '📱' },
  { factor: 'Дизайн', impact: '+30-80 тыс.', icon: '🎨' }
];

export function PricingTimeline() {
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
          Стоимость и сроки
        </motion.h2>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Прозрачное ценообразование
        </motion.p>
      </motion.div>

      {/* Pricing Cards - More Visual */}
      <div className="grid md:grid-cols-3 gap-4" style={{ perspective: '1500px' }}>
        {pricingTiers.map((tier, idx) => {
          const Icon = tier.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, rotateY: -60, z: -200 }}
              animate={{ opacity: 1, rotateY: 0, z: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4 + idx * 0.15,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className={`bg-gradient-to-br ${tier.color} border-2 hover:shadow-2xl transition-all cursor-pointer h-full relative overflow-hidden`}>
                {/* Animated background circle */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="p-2 bg-white rounded-lg shadow-md"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <CardTitle>{tier.name}</CardTitle>
                  </div>
                  
                  <motion.div 
                    className="text-3xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.5 + idx * 0.1
                    }}
                  >
                    {tier.price}
                  </motion.div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <Clock className="w-4 h-4" />
                    {tier.timeline}
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="mt-3 space-y-1">
                    <div className="text-xs text-gray-500">Сложность</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                    >
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${tier.percentage}%` }}
                          transition={{ 
                            duration: 1.5,
                            delay: 0.8 + idx * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <div>
                    <div className="text-xs text-gray-600 mb-2">Включено:</div>
                    <div className="space-y-1.5">
                      {tier.features.map((feature, featureIdx) => (
                        <motion.div
                          key={featureIdx}
                          className="text-sm flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4,
                            delay: 0.9 + idx * 0.1 + featureIdx * 0.05
                          }}
                        >
                          <span className="text-green-600 text-xs">✓</span>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-600 mb-2">Примеры:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.examples.map((example, exampleIdx) => (
                        <Badge key={exampleIdx} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Cost Factors - Compact & Visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <DollarSign className="w-5 h-5 text-orange-600" />
              Что влияет на стоимость
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {costFactors.map((factor, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white rounded-lg p-4 text-center space-y-2 border-2 border-orange-100 hover:border-orange-300 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-3xl">{factor.icon}</div>
                  <div className="text-sm">{factor.factor}</div>
                  <div className="text-xs text-orange-600">{factor.impact}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timeline - Visual Roadmap */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            Этапы внедрения
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {[
                { phase: 'Анализ', duration: '1-2 нед', icon: '🎯' },
                { phase: 'Разработка', duration: '2-6 нед', icon: '⚙️' },
                { phase: 'Тестирование', duration: '1 нед', icon: '🧪' },
                { phase: 'Запуск', duration: '1 нед', icon: '🚀' }
              ].map((phase, idx) => (
                <motion.div 
                  key={idx}
                  className="relative flex items-center justify-between md:justify-center gap-4"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
                >
                  {/* Left Content (Desktop) */}
                  <div className="flex-1 md:text-right">
                    {idx % 2 === 0 && (
                      <div className="hidden md:block">
                        <div className="">{phase.phase}</div>
                        <Badge variant="outline" className="mt-1">{phase.duration}</Badge>
                      </div>
                    )}
                  </div>

                  {/* Circle */}
                  <motion.div 
                    className="relative z-10 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {phase.icon}
                  </motion.div>

                  {/* Right Content (Desktop) / All Content (Mobile) */}
                  <div className="flex-1">
                    <div className="md:hidden">
                      <div className="">{phase.phase}</div>
                      <Badge variant="outline" className="mt-1">{phase.duration}</Badge>
                    </div>
                    {idx % 2 === 1 && (
                      <div className="hidden md:block">
                        <div className="">{phase.phase}</div>
                        <Badge variant="outline" className="mt-1">{phase.duration}</Badge>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ROI Calculator - More Visual */}
      <Card className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 overflow-hidden relative">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <CardContent className="p-6 relative z-10">
          <div className="text-center mb-4">
            <motion.div 
              className="text-2xl mb-1"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💰 Окупаемость
            </motion.div>
            <div className="text-sm text-gray-600">Средний срок возврата инвестиций</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Простой', value: '2-4', color: 'from-green-500 to-emerald-500' },
              { label: 'Средний', value: '4-8', color: 'from-blue-500 to-cyan-500' },
              { label: 'Сложный', value: '6-12', color: 'from-purple-500 to-pink-500' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center p-4 bg-white rounded-xl shadow-md"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 1.2 + idx * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`text-3xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.value}
                </motion.div>
                <div className="text-xs text-gray-500 mt-1">{item.label} мес</div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
