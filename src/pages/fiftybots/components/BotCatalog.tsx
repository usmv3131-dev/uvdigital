import { useState } from 'react';
import { Bot, ShoppingCart, MessageSquare, Calendar, Users, FileText, TrendingUp, Heart, GraduationCap, Home, Utensils, Briefcase, Plane, Building2, Zap, Shield, Package, Search, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';

interface BotInfo {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  roi: string;
  icon: any;
  complexity: 'Простой' | 'Средний' | 'Сложный';
}

const bots: BotInfo[] = [
  // E-commerce (10 ботов)
  {
    id: 1,
    name: 'Бот-консультант в интернет-магазине',
    category: 'ecommerce',
    description: 'Помогает клиентам найти товары, отвечает на вопросы о продукции',
    features: ['Поиск товаров', 'Рекомендации', 'FAQ', 'Проверка наличия'],
    roi: '+40% конверсия',
    icon: ShoppingCart,
    complexity: 'Средний'
  },
  {
    id: 2,
    name: 'Бот для возврата товаров',
    category: 'ecommerce',
    description: 'Автоматизирует процесс оформления возврата и обмена товаров',
    features: ['Оформление возврата', 'Отслеживание статуса', 'Печать этикеток'],
    roi: '-60% нагрузка на поддержку',
    icon: Package,
    complexity: 'Простой'
  },
  {
    id: 3,
    name: 'Бот для брошенных корзин',
    category: 'ecommerce',
    description: 'Напоминает о незавершенных покупках и предлагает скидки',
    features: ['Автонапоминания', 'Персональные скидки', 'История корзины'],
    roi: '+25% возврат клиентов',
    icon: ShoppingCart,
    complexity: 'Средний'
  },
  {
    id: 4,
    name: 'Бот отслеживания заказов',
    category: 'ecommerce',
    description: 'Информирует о статусе доставки в режиме реального времени',
    features: ['Отслеживание посылки', 'Push-уведомления', 'Оценка доставки'],
    roi: '-50% запросы "где заказ"',
    icon: Package,
    complexity: 'Простой'
  },
  {
    id: 5,
    name: 'Бот персональных рекомендаций',
    category: 'ecommerce',
    description: 'Анализирует покупки и предлагает релевантные товары',
    features: ['ML-рекомендации', 'История покупок', 'Тренды'],
    roi: '+35% средний чек',
    icon: TrendingUp,
    complexity: 'Сложный'
  },
  {
    id: 6,
    name: 'Бот программы лояльности',
    category: 'ecommerce',
    description: 'Управляет бонусами, баллами и специальными предложениями',
    features: ['Начисление баллов', 'История бонусов', 'Эксклюзивные предложения'],
    roi: '+30% повторные покупки',
    icon: Heart,
    complexity: 'Средний'
  },
  {
    id: 7,
    name: 'Бот для сравнения товаров',
    category: 'ecommerce',
    description: 'Помогает сравнить характеристики и цены товаров',
    features: ['Сравнение параметров', 'Таблицы сравнения', 'Подбор по критериям'],
    roi: '+20% скорость принятия решения',
    icon: Search,
    complexity: 'Средний'
  },
  {
    id: 8,
    name: 'Бот размерной сетки',
    category: 'ecommerce',
    description: 'Помогает подобрать правильный размер одежды и обуви',
    features: ['Калькулятор размера', 'Таблицы размеров', 'Советы по подбору'],
    roi: '-40% возвраты из-за размера',
    icon: Users,
    complexity: 'Простой'
  },
  {
    id: 9,
    name: 'Бот уведомлений о поступлении',
    category: 'ecommerce',
    description: 'Оповещает когда нужный товар появляется в наличии',
    features: ['Подписка на товар', 'Уведомления о скидках', 'Резервирование'],
    roi: '+45% продажи отсутствующих товаров',
    icon: Zap,
    complexity: 'Простой'
  },
  {
    id: 10,
    name: 'Бот подарочных сертификатов',
    category: 'ecommerce',
    description: 'Продажа и активация подарочных карт',
    features: ['Покупка сертификатов', 'Проверка баланса', 'Активация карт'],
    roi: '+20% новые клиенты',
    icon: Heart,
    complexity: 'Простой'
  },

  // Клиентский сервис (10 ботов)
  {
    id: 11,
    name: 'Бот техподдержки 24/7',
    category: 'support',
    description: 'Отвечает на типовые вопросы в любое время суток',
    features: ['База знаний', 'Чат с оператором', 'Тикет-система'],
    roi: '-70% нагрузка на операторов',
    icon: MessageSquare,
    complexity: 'Средний'
  },
  {
    id: 12,
    name: 'Бот сбора обратной связи',
    category: 'support',
    description: 'Собирает отзывы и оценки после покупки',
    features: ['Опросы', 'NPS-метрика', 'Аналитика отзывов'],
    roi: '+60% собранных отзывов',
    icon: MessageSquare,
    complexity: 'Простой'
  },
  {
    id: 13,
    name: 'Бот онбординга клиентов',
    category: 'support',
    description: 'Помогает новым клиентам начать работу с продуктом',
    features: ['Пошаговый гид', 'Обучающие видео', 'FAQ новичков'],
    roi: '-50% время адаптации',
    icon: GraduationCap,
    complexity: 'Средний'
  },
  {
    id: 14,
    name: 'Бот FAQ',
    category: 'support',
    description: 'Автоматически отвечает на часто задаваемые вопросы',
    features: ['Поиск по базе', 'Категории вопросов', 'Обновление базы'],
    roi: '-80% повторяющиеся вопросы',
    icon: FileText,
    complexity: 'Простой'
  },
  {
    id: 15,
    name: 'Бот регистрации жалоб',
    category: 'support',
    description: 'Принимает и обрабатывает жалобы клиентов',
    features: ['Форма жалобы', 'Отслеживание статуса', 'Эскалация'],
    roi: '+40% скорость обработки',
    icon: Shield,
    complexity: 'Средний'
  },
  {
    id: 16,
    name: 'Бот технической диагностики',
    category: 'support',
    description: 'Помогает выявить и решить технические проблемы',
    features: ['Пошаговая диагностика', 'Решения проблем', 'Удаленная помощь'],
    roi: '-60% технические обращения',
    icon: Zap,
    complexity: 'Сложный'
  },
  {
    id: 17,
    name: 'Бот управления подпиской',
    category: 'support',
    description: 'Позволяет управлять подписками и платежами',
    features: ['Изменение тарифа', 'Отмена подписки', 'История платежей'],
    roi: '-40% churn rate',
    icon: FileText,
    complexity: 'Средний'
  },
  {
    id: 18,
    name: 'Бот гарантийного обслуживания',
    category: 'support',
    description: 'Обрабатывает гарантийные случаи',
    features: ['Проверка гарантии', 'Регистрация случая', 'Сервисные центры'],
    roi: '-50% время обработки',
    icon: Shield,
    complexity: 'Средний'
  },
  {
    id: 19,
    name: 'Бот multilingual поддержки',
    category: 'support',
    description: 'Поддерживает клиентов на разных языках',
    features: ['Автоперевод', '20+ языков', 'Культурная адаптация'],
    roi: '+80% международные клиенты',
    icon: Users,
    complexity: 'Сложный'
  },
  {
    id: 20,
    name: 'Бот самообслуживания',
    category: 'support',
    description: 'Позволяет клиентам решать задачи без оператора',
    features: ['Смена данных', 'Загрузка документов', 'Оплата счетов'],
    roi: '-65% простые запросы',
    icon: Users,
    complexity: 'Средний'
  },

  // Запись и бронирование (10 ботов)
  {
    id: 21,
    name: 'Бот записи к врачу',
    category: 'booking',
    description: 'Запись на прием, напоминания, отмена визитов',
    features: ['Выбор специалиста', 'Календарь', 'SMS-напоминания'],
    roi: '-90% пропущенные записи',
    icon: Calendar,
    complexity: 'Средний'
  },
  {
    id: 22,
    name: 'Бот бронирования столиков',
    category: 'booking',
    description: 'Резервирование мест в ресторанах и кафе',
    features: ['Выбор времени', 'Меню', 'Спецпредложения'],
    roi: '+50% бронирований',
    icon: Utensils,
    complexity: 'Простой'
  },
  {
    id: 23,
    name: 'Бот записи в салон красоты',
    category: 'booking',
    description: 'Запись на услуги, выбор мастера, управление записями',
    features: ['Выбор услуги', 'Портфолио мастеров', 'История визитов'],
    roi: '+35% постоянные клиенты',
    icon: Heart,
    complexity: 'Средний'
  },
  {
    id: 24,
    name: 'Бот бронирования отелей',
    category: 'booking',
    description: 'Поиск и бронирование номеров в отелях',
    features: ['Поиск номеров', 'Фотогалерея', 'Онлайн-оплата'],
    roi: '+40% прямые бронирования',
    icon: Building2,
    complexity: 'Сложный'
  },
  {
    id: 25,
    name: 'Бот записи на тренировки',
    category: 'booking',
    description: 'Запись в фитнес-клуб, выбор тренера и занятий',
    features: ['Расписание групповых занятий', 'Персональные тренировки', 'Абонементы'],
    roi: '+45% посещаемость',
    icon: Heart,
    complexity: 'Средний'
  },
  {
    id: 26,
    name: 'Бот бронирования авиабилетов',
    category: 'booking',
    description: 'Поиск и покупка авиабилетов',
    features: ['Поиск рейсов', 'Выбор мест', 'Регистрация на рейс'],
    roi: '+30% онлайн-продажи',
    icon: Plane,
    complexity: 'Сложный'
  },
  {
    id: 27,
    name: 'Бот записи на мероприятия',
    category: 'booking',
    description: 'Регистрация на конференции, вебинары, мастер-классы',
    features: ['Календарь событий', 'Электронные билеты', 'Напоминания'],
    roi: '+55% регистрации',
    icon: Calendar,
    complexity: 'Средний'
  },
  {
    id: 28,
    name: 'Бот аренды автомобилей',
    category: 'booking',
    description: 'Бронирование аренды авто с выбором модели и сроков',
    features: ['Каталог авто', 'Расчет стоимости', 'Договор онлайн'],
    roi: '+40% конверсия',
    icon: Briefcase,
    complexity: 'Средний'
  },
  {
    id: 29,
    name: 'Бот записи на курсы',
    category: 'booking',
    description: 'Регистрация на образовательные курсы и программы',
    features: ['Каталог курсов', 'Расписание', 'Оплата обучения'],
    roi: '+50% записей',
    icon: GraduationCap,
    complexity: 'Средний'
  },
  {
    id: 30,
    name: 'Бот записи к юристу',
    category: 'booking',
    description: 'Запись на консультацию к юристу или нотариусу',
    features: ['Выбор специализации', 'Онлайн-консультации', 'Документы'],
    roi: '+60% новые клиенты',
    icon: Briefcase,
    complexity: 'Средний'
  },

  // HR и рекрутинг (10 ботов)
  {
    id: 31,
    name: 'Бот подбора кандидатов',
    category: 'hr',
    description: 'Первичный скрининг резюме и кандидатов',
    features: ['Анализ резюме', 'Тестирование', 'Назначение интервью'],
    roi: '-60% время подбора',
    icon: Users,
    complexity: 'Сложный'
  },
  {
    id: 32,
    name: 'Бот онбординга сотрудников',
    category: 'hr',
    description: 'Адаптация новых сотрудников в компании',
    features: ['Welcome-гид', 'Документы', 'Обучающие материалы'],
    roi: '-50% время адаптации',
    icon: GraduationCap,
    complexity: 'Средний'
  },
  {
    id: 33,
    name: 'Бот HR-справочник',
    category: 'hr',
    description: 'Отвечает на вопросы сотрудников о политиках компании',
    features: ['База знаний HR', 'Отпуска и больничные', 'Льготы и бонусы'],
    roi: '-70% HR-запросы',
    icon: FileText,
    complexity: 'Простой'
  },
  {
    id: 34,
    name: 'Бот заявок на отпуск',
    category: 'hr',
    description: 'Оформление заявок на отпуск и согласование',
    features: ['Календарь отпусков', 'Согласование', 'Баланс дней'],
    roi: '-80% время обработки',
    icon: Calendar,
    complexity: 'Средний'
  },
  {
    id: 35,
    name: 'Бот обучения сотрудников',
    category: 'hr',
    description: 'Обучающие курсы и тестирование персонала',
    features: ['Курсы', 'Тесты', 'Сертификаты'],
    roi: '+40% вовлеченность в обучение',
    icon: GraduationCap,
    complexity: 'Средний'
  },
  {
    id: 36,
    name: 'Бот опросов сотрудников',
    category: 'hr',
    description: 'Сбор обратной связи и опросы персонала',
    features: ['Анонимные опросы', 'Пульс-опросы', 'Аналитика'],
    roi: '+80% участие в опросах',
    icon: MessageSquare,
    complexity: 'Простой'
  },
  {
    id: 37,
    name: 'Бот табеля рабочего времени',
    category: 'hr',
    description: 'Учет рабочего времени и переработок',
    features: ['Отметка прихода/ухода', 'Отчеты', 'Переработки'],
    roi: '+95% точность учета',
    icon: Calendar,
    complexity: 'Средний'
  },
  {
    id: 38,
    name: 'Бот заявок в IT-поддержку',
    category: 'hr',
    description: 'Прием заявок на техническую поддержку от сотрудников',
    features: ['Создание тикетов', 'Статус заявки', 'База решений'],
    roi: '-50% время реакции',
    icon: Zap,
    complexity: 'Средний'
  },
  {
    id: 39,
    name: 'Бот корпоративного питания',
    category: 'hr',
    description: 'Заказ обедов и управление корпоративным питанием',
    features: ['Меню на день', 'Заказ обеда', 'Диетические предпочтения'],
    roi: '-60% время на организацию',
    icon: Utensils,
    complexity: 'Простой'
  },
  {
    id: 40,
    name: 'Бот бронирования переговорных',
    category: 'hr',
    description: 'Резервирование переговорных комнат и рабочих мест',
    features: ['Календарь комнат', 'Оборудование', 'Отмена броней'],
    roi: '+70% эффективность использования',
    icon: Building2,
    complexity: 'Простой'
  },

  // Финансы и продажи (10 ботов)
  {
    id: 41,
    name: 'Бот лидогенерации',
    category: 'sales',
    description: 'Квалификация и сбор контактов потенциальных клиентов',
    features: ['Квалификация лидов', 'Сбор данных', 'Передача в CRM'],
    roi: '+100% квалифицированные лиды',
    icon: TrendingUp,
    complexity: 'Средний'
  },
  {
    id: 42,
    name: 'Бот расчета стоимости',
    category: 'sales',
    description: 'Калькулятор стоимости услуг и продуктов',
    features: ['Калькулятор', 'Конфигуратор', 'Коммерческое предложение'],
    roi: '+45% скорость сделки',
    icon: DollarSign,
    complexity: 'Средний'
  },
  {
    id: 43,
    name: 'Бот выставления счетов',
    category: 'sales',
    description: 'Автоматическое создание и отправка счетов',
    features: ['Генерация счетов', 'Email-рассылка', 'Контроль оплаты'],
    roi: '-70% время выставления',
    icon: FileText,
    complexity: 'Средний'
  },
  {
    id: 44,
    name: 'Бот напоминаний об оплате',
    category: 'sales',
    description: 'Напоминает клиентам о неоплаченных счетах',
    features: ['Автонапоминания', 'Эскалация', 'История платежей'],
    roi: '+55% своевременные платежи',
    icon: DollarSign,
    complexity: 'Простой'
  },
  {
    id: 45,
    name: 'Бот квалификации сделок',
    category: 'sales',
    description: 'Помогает менеджерам квалифицировать возможности',
    features: ['Скоринг сделок', 'Приоритизация', 'Прогноз закрытия'],
    roi: '+40% win rate',
    icon: TrendingUp,
    complexity: 'Сложный'
  },
  {
    id: 46,
    name: 'Бот кросс-продаж',
    category: 'sales',
    description: 'Предлагает дополнительные продукты существующим клиентам',
    features: ['Анализ покупок', 'Персональные предложения', 'Upsell'],
    roi: '+60% дополнительные продажи',
    icon: ShoppingCart,
    complexity: 'Сложный'
  },
  {
    id: 47,
    name: 'Бот квотирования',
    category: 'sales',
    description: 'Быстрое создание коммерческих предложений',
    features: ['Шаблоны КП', 'Автозаполнение', 'E-подпись'],
    roi: '-80% время на КП',
    icon: FileText,
    complexity: 'Средний'
  },
  {
    id: 48,
    name: 'Бот реактивации клиентов',
    category: 'sales',
    description: 'Возвращает неактивных клиентов',
    features: ['Сегментация', 'Персональные офферы', 'Win-back кампании'],
    roi: '+35% реактивированные клиенты',
    icon: Users,
    complexity: 'Средний'
  },
  {
    id: 49,
    name: 'Бот отчетности по продажам',
    category: 'sales',
    description: 'Автоматические отчеты по KPI и метрикам продаж',
    features: ['Дашборды', 'Еженедельные отчеты', 'Экспорт данных'],
    roi: '-90% время на отчеты',
    icon: TrendingUp,
    complexity: 'Сложный'
  },
  {
    id: 50,
    name: 'Бот конкурентного анализа',
    category: 'sales',
    description: 'Мониторинг цен и предложений конкурентов',
    features: ['Отслеживание цен', 'Анализ предложений', 'Alerts'],
    roi: '+25% конкурентное преимущество',
    icon: Search,
    complexity: 'Сложный'
  },
];

export function BotCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все боты', count: bots.length },
    { id: 'ecommerce', name: 'E-commerce', count: bots.filter(b => b.category === 'ecommerce').length },
    { id: 'support', name: 'Поддержка', count: bots.filter(b => b.category === 'support').length },
    { id: 'booking', name: 'Бронирование', count: bots.filter(b => b.category === 'booking').length },
    { id: 'hr', name: 'HR', count: bots.filter(b => b.category === 'hr').length },
    { id: 'sales', name: 'Продажи', count: bots.filter(b => b.category === 'sales').length },
  ];

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bot.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bot.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Простой': return 'bg-green-100 text-green-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Сложный': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
          Каталог из 50 ботов
        </motion.h2>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          itemProp="description"
        >
          Готовые решения для автоматизации: E-commerce, поддержка, продажи, HR
        </motion.p>
      </motion.div>

      {/* Search */}
      <motion.div 
        className="flex items-center gap-2 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Search className="w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Поиск по названию или описанию..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            {categories.map(cat => (
              <TabsTrigger key={cat.id} value={cat.id} className="text-sm">
                {cat.name} ({cat.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Bot Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2" style={{ perspective: '1500px' }}>
        {filteredBots.map((bot, index) => {
          const Icon = bot.icon;
          return (
            <motion.div
              key={bot.id}
              initial={{ opacity: 0, rotateX: -60, z: -200 }}
              animate={{ opacity: 1, rotateX: 0, z: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.6 + (index % 9) * 0.05,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="hover:shadow-2xl transition-shadow h-full cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="p-2 bg-blue-100 rounded-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Icon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base leading-tight">{bot.name}</CardTitle>
                    </div>
                  </div>
                  <Badge className={getComplexityColor(bot.complexity)} variant="secondary">
                    {bot.complexity}
                  </Badge>
                </div>
                <CardDescription className="text-sm mt-2">{bot.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Функции:</div>
                    <div className="flex flex-wrap gap-1">
                      {bot.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm text-gray-600">ROI:</span>
                    <span className="text-sm text-green-600">{bot.roi}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          );
        })}
      </div>

      {filteredBots.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Ботов по вашему запросу не найдено
        </div>
      )}
    </div>
  );
}
