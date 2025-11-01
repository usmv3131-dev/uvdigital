import { CheckCircle2, TrendingUp, Users, Clock, DollarSign, ArrowUpRight, Target, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const caseStudies = [
  {
    industry: 'E-commerce',
    company: 'Магазин электроники',
    bot: 'Бот-консультант',
    timeline: '6 недель',
    challenge: 'Высокая нагрузка на поддержку в пиковые часы',
    solution: 'Автоматизация 70% типовых вопросов',
    results: [
      { icon: TrendingUp, value: '+35%', metric: 'Конверсия' },
      { icon: Users, value: '-60%', metric: 'Нагрузка' },
      { icon: DollarSign, value: '+28%', metric: 'Средний чек' },
      { icon: Clock, value: '-80%', metric: 'Время ответа' },
    ],
    team: '2 разработчика + PM',
    roi: '320%'
  },
  {
    industry: 'Медицина',
    company: 'Сеть клиник',
    bot: 'Бот записи к врачу',
    timeline: '4 недели',
    challenge: 'Пропущенные записи и высокая no-show rate',
    solution: 'Автоматические напоминания и переназначение',
    results: [
      { icon: CheckCircle2, value: '-90%', metric: 'Пропуски' },
      { icon: Users, value: '+45%', metric: 'Записи' },
      { icon: TrendingUp, value: '+40%', metric: 'Загрузка врачей' },
      { icon: DollarSign, value: '+52%', metric: 'Выручка' },
    ],
    team: '1 разработчик + дизайнер',
    roi: '280%'
  },
  {
    industry: 'Ресторан',
    company: 'Сеть ресторанов',
    bot: 'Бот доставки',
    timeline: '5 недель',
    challenge: 'Сложность обработки заказов по телефону',
    solution: 'Интеграция с меню и системой заказов',
    results: [
      { icon: TrendingUp, value: '+65%', metric: 'Онлайн-заказы' },
      { icon: Clock, value: '-70%', metric: 'Время заказа' },
      { icon: Users, value: '+30%', metric: 'Повторные заказы' },
      { icon: DollarSign, value: '+42%', metric: 'Прибыль' },
    ],
    team: '2 разработчика',
    roi: '410%'
  },
  {
    industry: 'SaaS',
    company: 'B2B платформа',
    bot: 'Бот поддержки',
    timeline: '8 недель',
    challenge: 'Долгое время отклика службы поддержки',
    solution: 'База знаний + AI для сложных вопросов',
    results: [
      { icon: Users, value: '-75%', metric: 'Тикеты' },
      { icon: Clock, value: '< 1 мин', metric: 'Время ответа' },
      { icon: TrendingUp, value: '+85%', metric: 'CSAT' },
      { icon: DollarSign, value: '-50%', metric: 'Затраты' },
    ],
    team: '3 разработчика + AI специалист',
    roi: '380%'
  },
  {
    industry: 'Образование',
    company: 'Онлайн-школа',
    bot: 'Бот регистрации',
    timeline: '3 недели',
    challenge: 'Низкая конверсия в оплату курсов',
    solution: 'Персонализированные предложения и воронка',
    results: [
      { icon: TrendingUp, value: '+55%', metric: 'Конверсия' },
      { icon: Users, value: '+40%', metric: 'Лиды' },
      { icon: DollarSign, value: '+68%', metric: 'Продажи' },
      { icon: CheckCircle2, value: '+90%', metric: 'Engagement' },
    ],
    team: '1 разработчик + маркетолог',
    roi: '295%'
  },
  {
    industry: 'Недвижимость',
    company: 'Агентство недвижимости',
    bot: 'Бот показов',
    timeline: '7 недель',
    challenge: 'Много запросов на просмотры, мало конверсия',
    solution: 'Квалификация лидов и автоматическое назначение',
    results: [
      { icon: Target, value: '+75%', metric: 'Квалификация' },
      { icon: TrendingUp, value: '+35%', metric: 'Показы' },
      { icon: DollarSign, value: '+48%', metric: 'Сделки' },
      { icon: Clock, value: '-65%', metric: 'Время обработки' },
    ],
    team: '2 разработчика',
    roi: '350%'
  }
];

export function ImplementationGuide() {
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
          itemProp="headline"
        >
          Примеры внедрения
        </motion.h2>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          itemProp="description"
        >
          Реальные кейсы с измеримым ROI
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Tabs defaultValue="0" className="w-full">
          <div className="relative w-full overflow-x-auto pb-2">
            <TabsList className="inline-flex w-auto min-w-full md:grid md:w-full md:grid-cols-6">
              {caseStudies.map((cs, idx) => (
                <TabsTrigger 
                  key={idx} 
                  value={idx.toString()} 
                  className="text-xs md:text-sm whitespace-nowrap px-3 md:px-4"
                >
                  {cs.industry}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {caseStudies.map((caseStudy, idx) => (
            <TabsContent key={idx} value={idx.toString()} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, rotateX: -30, z: -100 }}
                animate={{ opacity: 1, rotateX: 0, z: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="flex items-center gap-2">
                          {caseStudy.company}
                          <Badge className="bg-blue-100 text-blue-800">{caseStudy.bot}</Badge>
                        </CardTitle>
                        <CardDescription className="mt-2 flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {caseStudy.timeline}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            ROI {caseStudy.roi}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6 space-y-6">
                    {/* Challenge & Solution - Compact */}
                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-1">
                        <div className="text-xs text-red-600 flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Проблема
                        </div>
                        <p className="text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-green-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Решение
                        </div>
                        <p className="text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results - Visual Cards */}
                    <div>
                      <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        Результаты
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {caseStudy.results.map((result, resultIdx) => {
                          const Icon = result.icon;
                          return (
                            <motion.div
                              key={resultIdx}
                              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                              transition={{ 
                                duration: 0.5,
                                delay: 0.2 + resultIdx * 0.1,
                                ease: [0.6, 0.05, 0.01, 0.9]
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                rotateY: 10,
                                z: 30,
                                transition: { duration: 0.3 }
                              }}
                              style={{ transformStyle: 'preserve-3d' }}
                            >
                              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 cursor-pointer border-2 border-green-100 hover:border-green-300 transition-colors">
                                <CardContent className="p-4 text-center space-y-2">
                                  <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                  >
                                    <Icon className="w-5 h-5 mx-auto text-green-600" />
                                  </motion.div>
                                  <motion.div 
                                    className="text-2xl text-green-700"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ 
                                      type: "spring",
                                      stiffness: 200,
                                      delay: 0.3 + resultIdx * 0.1
                                    }}
                                  >
                                    {result.value}
                                  </motion.div>
                                  <div className="text-xs text-gray-600">{result.metric}</div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Team Info - Compact */}
                    <div className="flex items-center justify-between pt-3 border-t text-sm">
                      <div className="text-gray-600">
                        <span className="text-gray-400">Команда:</span> {caseStudy.team}
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Внедрено</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      {/* ROI Summary - More Visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-2"
              >
                <div className="text-sm text-gray-600">Средний ROI</div>
                <motion.div 
                  className="text-4xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  320%
                </motion.div>
                <div className="text-xs text-gray-500">за первый год</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-2"
              >
                <div className="text-sm text-gray-600">Окупаемость</div>
                <motion.div 
                  className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  2-4 мес
                </motion.div>
                <div className="text-xs text-gray-500">в среднем</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="space-y-2"
              >
                <div className="text-sm text-gray-600">Снижение затрат</div>
                <motion.div 
                  className="text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  -60%
                </motion.div>
                <div className="text-xs text-gray-500">на операционные расходы</div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
