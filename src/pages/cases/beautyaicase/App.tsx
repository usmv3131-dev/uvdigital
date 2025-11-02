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
          subtitle="Beauty AI — цифровой администратор, который берёт на себя запись, коммуникации и рекомендации салона красоты 24/7"
          imageUrl={beautyAIScreenshot}
          tags={['AI-администратор', 'Омниканальная запись', 'CRM', 'SaaS']}
        />

        <ProjectOverview
          client="Beauty Space — сеть салонов премиум-класса"
          role="Product Discovery, UX/UI, Frontend"
          duration="4,5 месяца"
          year="2024"
        />

        <ContentSection
          title="Проблема"
          content={[
            'Beauty Space управляет сетью из шести премиальных салонов. Команда администраторов работала в Excel и мессенджерах, теряя до 42% входящих заявок из-за задержек в ответах и ручного подтверждения расписания мастеров.',
            'Несогласованность коммуникаций приводила к двойным бронированиям, а маркетинговые инвестиции в таргетированную рекламу не окупались: пользователи ждали ответов по нескольку часов и уходили к конкурентам. Владельцу нужен был единый AI-инструмент, который разговаривает с клиентами на языке бренда, синхронизируется с CRM и не допускает потерянных лидов.',
          ]}
          imageUrl="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1080&q=80"
          backgroundColor="bg-transparent"
        />

        <ContentSection
          title="Решение"
          content={[
            'Мы внедрили Beauty AI — омниканального AI-администратора, который берёт на себя консультирование, подбор мастеров и автоматическую запись в удобный слот без участия оператора. Система подключена к CRM и календарям салонов, мгновенно проверяет доступность и удерживает клиента до финального подтверждения.',
            'AI обучен на бренд-буке Beauty Space и истории диалогов: бот отвечает в тоне премиального сервиса, собирает предпочтения гостей, формирует персональные предложения и отправляет динамические напоминания в Telegram, WhatsApp и через SMS.',
          ]}
          imageUrl="https://images.unsplash.com/photo-1590156513694-098c4d1c8f73?auto=format&fit=crop&w=1080&q=80"
          imagePosition="left"
          backgroundColor="bg-transparent"
        />

        <ContentSection
          title="Как проходило внедрение"
          content={[
            'Синхронизировали Beauty AI с существующей CRM и расписанием мастеров: подключили вебхуки, настроили двусторонний обмен статусами и мигрировали историю посещений за 18 месяцев.',
            'Подготовили тональность и сценарии: описали 120 типовых ситуаций, разметили FAQ, выгрузили прайс и фото-портфолио мастеров. AI использует эти данные, чтобы подбирать услуги и делать апсейл.',
            'Запустили A/B-тест в трёх салонах, затем масштабировали на всю сеть. Параллельно обучили администраторов работать с аналитикой и обновлять базы прямо из интерфейса Beauty AI.',
          ]}
          imageUrl="https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1080&q=80"
          backgroundColor="bg-transparent"
        />

        <ContentSection
          title="Результаты и диагностика"
          content={[
            'Через две недели после запуска AI-администратор взял на себя 86% всех входящих диалогов. Время первой реакции сократилось с 28 минут до 12 секунд, а среднее время закрытия записи — до трёх сообщений.',
            'Beauty AI собирает данные о предпочтениях гостей, автоматически обновляет CRM и отправляет отчёты владельцу сети: видно загрузку мастеров, источники лидов и конверсию по каналам. Эти инсайты легли в основу новой программы лояльности и рекомендательной витрины услуг.',
          ]}
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
