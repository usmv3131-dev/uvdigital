# 🎨 Типографическая система Content AI

## Шрифты

### 📐 Архитектура шрифтов

**Основные семейства:**
- **Заголовки**: `Manrope` — современный геометрический шрифт
- **Текст**: `Inter` — золотой стандарт для UI
- **Кнопки**: `Manrope SemiBold` — читаемый и акцентный

### 🎯 Почему эта комбинация?

**Manrope для заголовков:**
- ✅ Отличная поддержка кириллицы
- ✅ Геометрический, но читаемый
- ✅ Современный tech-стиль
- ✅ Высокие x-height для удобочитаемости
- ✅ Варианты весов: 400, 500, 600, 700, 800

**Inter для текста:**
- ✅ Оптимизирован для экранов
- ✅ Идеальная кириллица
- ✅ Высокая читаемость
- ✅ Используется в лучших tech-продуктах
- ✅ Варианты весов: 300, 400, 500, 600, 700

---

## 📊 Типографическая шкала

### Заголовки (Manrope)

```css
h1 {
  font-family: 'Manrope';
  font-weight: 800 (ExtraBold);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

h2 {
  font-family: 'Manrope';
  font-weight: 700 (Bold);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

h3 {
  font-family: 'Manrope';
  font-weight: 700 (Bold);
  line-height: 1.35;
  letter-spacing: -0.015em;
}

h4 {
  font-family: 'Manrope';
  font-weight: 600 (SemiBold);
  line-height: 1.5;
  letter-spacing: -0.01em;
}
```

### Текст (Inter)

```css
p {
  font-family: 'Inter';
  font-weight: 400 (Regular);
  line-height: 1.65;
  letter-spacing: 0.005em;
}

label {
  font-family: 'Inter';
  font-weight: 500 (Medium);
  line-height: 1.5;
  letter-spacing: 0.002em;
}
```

### UI элементы (Manrope)

```css
button {
  font-family: 'Manrope';
  font-weight: 600 (SemiBold);
  line-height: 1.4;
  letter-spacing: 0.005em;
}
```

---

## 🎨 Применение

### В CSS переменных

```css
:root {
  --font-heading: 'Manrope', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-button: 'Manrope', system-ui, sans-serif;
}
```

### В Tailwind/Inline стилях

```jsx
// Заголовок
<h1 style={{ fontFamily: 'var(--font-heading)' }}>
  Content AI
</h1>

// Текст
<p style={{ fontFamily: 'var(--font-body)' }}>
  AI-контент бот для салонов красоты
</p>

// Кнопка (автоматически применяется через base styles)
<button>Запустить</button>
```

---

## 💡 Правила использования

### ✅ DO

- **Используйте Manrope** для всех заголовков и акцентов
- **Используйте Inter** для основного текста и форм
- **Соблюдайте веса**: 
  - h1: 800
  - h2, h3: 700
  - h4, button: 600
  - p: 400
  - label: 500
- **Negative letter-spacing** для крупных заголовков
- **Positive letter-spacing** для текста (улучшает читаемость)

### ❌ DON'T

- Не смешивайте шрифты внутри одного элемента
- Не используйте веса меньше 400 для заголовков
- Не используйте веса больше 600 для текста
- Не изменяйте letter-spacing без причины

---

## 📱 Адаптивность

```css
/* Mobile first */
--text-base: 16px;
--text-lg: 18px;
--text-xl: 24px;
--text-2xl: 32px;

/* Desktop (md+) */
@media (min-width: 768px) {
  --text-xl: 30px;
  --text-2xl: 48px;
}

/* Large desktop (lg+) */
@media (min-width: 1024px) {
  --text-2xl: 56px;
}
```

---

## 🎯 Примеры использования

### Hero заголовок
```jsx
<h1 className="text-5xl md:text-6xl lg:text-7xl" 
    style={{ fontFamily: 'var(--font-heading)' }}>
  Content AI
</h1>
```

### Описание секции
```jsx
<p className="text-lg" 
   style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
  AI анализирует тренды и создает персональный план публикаций
</p>
```

### CTA кнопка
```jsx
<button className="px-8 py-4 rounded-2xl font-semibold">
  Запустить бесплатно
</button>
```

---

## 🔗 CDN ссылка

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 📈 Performance

- **Загружаемые веса**: Только необходимые (400-800)
- **Display**: `swap` для быстрой загрузки
- **Fallback**: `system-ui, -apple-system, sans-serif`
- **Preload**: Рекомендуется для critical fonts

```html
<link rel="preload" href="manrope-font.woff2" as="font" type="font/woff2" crossorigin>
```

---

**Обновлено:** 31.10.2025  
**Версия:** 2.0 (Manrope + Inter)
