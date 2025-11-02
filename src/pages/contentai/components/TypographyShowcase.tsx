import { memo } from "react";

/**
 * Typography Showcase Component
 * Демонстрирует новую шрифтовую систему: Manrope + Inter
 * 
 * Используйте этот компонент для тестирования типографики
 */
function TypographyShowcaseComponent() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
          Новая типографика
        </h1>
        <p className="text-slate-600 dark:text-cyan-300/70 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Manrope для заголовков • Inter для текста
        </p>
      </div>

      {/* Headings */}
      <section className="space-y-6">
        <div className="text-sm text-slate-500 dark:text-cyan-400/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
          Заголовки (Manrope)
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-xs text-slate-400 mb-1">h1 • 800 weight • -0.03em</div>
            <h1 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Content AI для салонов
            </h1>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-1">h2 • 700 weight • -0.02em</div>
            <h2 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Создаём контент каждый день
            </h2>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-1">h3 • 700 weight • -0.015em</div>
            <h3 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Анализ бренда и целевой аудитории
            </h3>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-1">h4 • 600 weight • -0.01em</div>
            <h4 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Интеграция с Beauty AI
            </h4>
          </div>
        </div>
      </section>

      {/* Body Text */}
      <section className="space-y-6">
        <div className="text-sm text-slate-500 dark:text-cyan-400/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
          Основной текст (Inter)
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-xs text-slate-400 mb-1">Paragraph • 400 weight • 1.65 line-height</div>
            <p className="text-slate-600 dark:text-cyan-300/70" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.005em' }}>
              AI-контент бот для вашего салона красоты. Создает контент-план, настраивается под вас, 
              соединяется с Beauty AI и улучшает контент. Анализирует эффективность постов и 
              автоматически оптимизирует стратегию для максимальной вовлеченности аудитории.
            </p>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-1">Label • 500 weight</div>
            <label className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-body)' }}>
              Название салона
            </label>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-1">Small text • 400 weight</div>
            <p className="text-sm text-slate-500 dark:text-cyan-400/60" style={{ fontFamily: 'var(--font-body)' }}>
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <div className="text-sm text-slate-500 dark:text-cyan-400/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
          Кнопки (Manrope SemiBold)
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white rounded-2xl shadow-lg">
            Запустить бесплатно
          </button>

          <button className="px-8 py-4 bg-white dark:bg-blue-500/10 text-blue-900 dark:text-blue-400 border border-blue-200 dark:border-blue-500/50 rounded-2xl">
            Посмотреть примеры
          </button>

          <button className="px-6 py-3 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-xl">
            Узнать подробнее
          </button>
        </div>
      </section>

      {/* Cyrillic Test */}
      <section className="space-y-6 border-t border-blue-200 dark:border-blue-500/30 pt-8">
        <div className="text-sm text-slate-500 dark:text-cyan-400/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
          Тест кириллицы
        </div>
        
        <div className="space-y-4">
          <h2 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
            АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
          </h2>
          <h2 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
            абвгдеёжзийклмнопрстуфхцчшщъыьэюя
          </h2>
          <p className="text-slate-600 dark:text-cyan-300/70 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Съешь ещё этих мягких французских булок да выпей чаю. 
            Широкая электрификация южных губерний даст мощный толчок подъёму экономики.
          </p>
        </div>
      </section>

      {/* Numbers Test */}
      <section className="space-y-6">
        <div className="text-sm text-slate-500 dark:text-cyan-400/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
          Цифры и специальные символы
        </div>
        
        <div className="space-y-4">
          <h1 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
            0123456789 • ₽45,000 / месяц
          </h1>
          <p className="text-slate-600 dark:text-cyan-300/70" style={{ fontFamily: 'var(--font-body)' }}>
            Цена: 45 000₽ • Email: info@salon.ru • Телефон: +7 (999) 123-45-67
          </p>
        </div>
      </section>

      {/* Mixed Content Example */}
      <section className="space-y-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-500/30">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/50 rounded-full">
          <span className="text-sm text-blue-700 dark:text-blue-400" style={{ fontFamily: 'var(--font-body)' }}>
            Реальный пример
          </span>
        </div>

        <h2 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
          Запустим контент для вашего салона
        </h2>

        <p className="text-slate-600 dark:text-cyan-300/70 text-lg" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
          AI анализирует ваш бренд, целевую аудиторию и создает персональный контент-план. 
          Ежедневная генерация постов, Stories и Reels с учетом вашего стиля и предпочтений клиентов.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg">
            Начать бесплатно
          </button>
          <button className="px-8 py-4 bg-white dark:bg-blue-500/10 text-blue-900 dark:text-blue-400 border border-blue-200 dark:border-blue-500/50 rounded-2xl">
            Подробнее
          </button>
        </div>
      </section>

      {/* Font Info */}
      <section className="border-t border-blue-200 dark:border-blue-500/30 pt-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Manrope
            </h4>
            <p className="text-sm text-slate-600 dark:text-cyan-300/70" style={{ fontFamily: 'var(--font-body)' }}>
              Современный геометрический шрифт с отличной поддержкой кириллицы. 
              Используется для всех заголовков и кнопок.
            </p>
            <div className="text-xs text-slate-400">
              Веса: 400, 500, 600, 700, 800
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-blue-900 dark:text-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Inter
            </h4>
            <p className="text-sm text-slate-600 dark:text-cyan-300/70" style={{ fontFamily: 'var(--font-body)' }}>
              Золотой стандарт для UI. Оптимизирован для экранов с идеальной 
              читаемостью кириллицы.
            </p>
            <div className="text-xs text-slate-400">
              Веса: 300, 400, 500, 600, 700
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const TypographyShowcase = memo(TypographyShowcaseComponent);
