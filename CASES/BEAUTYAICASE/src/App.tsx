import { motion } from 'motion/react';
import { useNavigate } from "react-router-dom";
import { ProjectHeroNew } from './components/ProjectHeroNew';
import { ProjectOverview } from './components/ProjectOverview';
import { ContentSection } from './components/ContentSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProcessSectionNew } from './components/ProcessSectionNew';
import { StatsSection } from './components/StatsSection';
import { PricingSection } from './components/PricingSection';
import { TechStackSection } from './components/TechStackSection';
import { ConclusionSection } from './components/ConclusionSection';
import beautyAIScreenshot from 'figma:asset/965928fe63141698447f5b6e638a608c35001c2f.png';

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground rounded-full border border-primary/20 hover:border-primary/40 transition-all backdrop-blur-sm flex items-center gap-2"
            onClick={() => navigate("/")}
            type="button"
          >
            <span className="text-primary">←</span>
            Назад
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center gap-2"
            onClick={() => navigate("/50bots")}
            type="button"
          >
            50 ботов для бизнеса
            <span>→</span>
          </motion.button>
        </div>
      </motion.nav>

      <div className="pt-20">
        <ProjectHeroNew
          title="Beauty AI"
          subtitle="AI-администратор для вашего салона красоты. Автоматическая запись, консультации и уведомления 24/7"
          imageUrl={beautyAIScreenshot}
          tags={['AI/ML', 'UX/UI Дизайн', 'CRM', 'SaaS']}
        />

        <ProjectOverview
          client="Beauty Tech Group"
          role="Product Designer & Frontend Lead"
          duration="5 месяцев"
          year="2025"
        />

        <ContentSection
          title="Проблема"
          content={[
            'Салоны красоты сталкиваются с несколькими ключевыми проблемами: низкое качество клиентских фотографий для портфолио, отсутствие единой системы для управления записями и клиентской базой, а также высокие затраты на маркетинг и привлечение новых клиентов.',
            'Многие владельцы салонов используют разрозненные инструменты — отдельно мессенджеры для записи, таблицы для учёта, социальные сети для продвижения. Это создаёт хаос в работе и теряется контроль над бизнес-процессами. В результате — потеря клиентов, снижение доходов и высокая загруженность персонала рутинными задачами.',
          ]}
          imageUrl="https://images.unsplash.com/photo-1750263160581-d332256293bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjE5MjE4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          backgroundColor="bg-transparent"
        />

        <ContentSection
          title="Решение"
          content={[
            'Мы создали комплексную платформу Beauty AI, которая объединяет в себе три ключевых компонента: AI-генерацию профессиональных селфи-фото, CRM-систему для управления клиентской базой и автоматическую систему записи с уведомлениями.',
            'Нейросеть анализирует фотографии клиентов и создаёт стилизованные селфи-фото высокого качества в стиле салона, которые можно использовать в маркетинге. Интегрированная CRM позволяет вести базу клиентов, отслеживать историю посещений, автоматически напоминать о записях и формировать аналитические отчёты для оптимизации бизнеса.',
          ]}
          imageUrl="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MzY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          imagePosition="left"
          backgroundColor="bg-transparent"
        />

        <FeaturesSection />

        <ProcessSectionNew />

        <StatsSection />

        <PricingSection />

        <TechStackSection />

        <ConclusionSection />

        {/* Footer */}
        <footer className="relative py-16 overflow-hidden border-t border-primary/10">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(255, 59, 143, 0.05), transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.05), transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(255, 59, 143, 0.05), transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <div>
                  <div className="mb-1">Beauty AI</div>
                  <div className="text-sm text-foreground/60">
                    Трансформируем индустрию красоты с помощью AI
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="text-sm text-foreground/60">© 2025 Beauty AI. Все права защищены.</div>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <motion.a
                    whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Политика конфиденциальности
                  </motion.a>
                  <span>•</span>
                  <motion.a
                    whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Условия использования
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
