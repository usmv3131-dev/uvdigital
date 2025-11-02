# 💎 Примеры использования типографики

## 🎨 Hero секция

```tsx
// Заголовок Hero
<h1 
  className="text-5xl md:text-6xl lg:text-7xl text-blue-900 dark:text-blue-400" 
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Content AI
</h1>

// Подзаголовок
<p 
  className="text-xl md:text-2xl text-slate-600 dark:text-cyan-300/80" 
  style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}
>
  AI-контент бот для вашего салона красоты
</p>

// CTA кнопка
<button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold">
  Запустить бесплатно
</button>
```

**Результат:**
- **h1**: Manrope ExtraBold 800, драматичный, крупный
- **p**: Inter Regular 400, читаемый, с лёгким tracking
- **button**: Manrope SemiBold 600, акцентный

---

## 📋 Секция с карточками

```tsx
// Заголовок секции
<h2 
  className="text-blue-900 dark:text-blue-400 font-bold" 
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Как это работает
</h2>

// Описание секции
<p 
  className="text-slate-600 dark:text-cyan-300/70 text-lg max-w-2xl mx-auto" 
  style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}
>
  Три простых шага до ежедневного качественного контента
</p>

// Карточка
<div className="bg-white dark:bg-slate-800/50 rounded-3xl p-8">
  {/* Заголовок карточки */}
  <h3 
    className="text-blue-900 dark:text-blue-400 font-bold" 
    style={{ fontFamily: 'var(--font-heading)' }}
  >
    Анализ бренда
  </h3>
  
  {/* Текст карточки */}
  <p 
    className="text-slate-600 dark:text-cyan-300/70" 
    style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}
  >
    Изучаем ваш бренд, целевую аудиторию и конкурентов
  </p>
</div>
```

**Иерархия:**
- **h2**: Manrope Bold 700 — основной заголовок секции
- **p (описание)**: Inter Regular 400 — поддерживающий текст
- **h3**: Manrope Bold 700 — заголовок карточки
- **p (карточка)**: Inter Regular 400 — описание

---

## 💰 Pricing секция

```tsx
// Название тарифа
<p className="text-base font-semibold text-slate-600 dark:text-cyan-300/70 uppercase tracking-wider">
  Настройка + Первый месяц
</p>

// Цена (с NumberFlow)
<NumberFlow
  value={45000}
  className="text-5xl font-bold text-blue-900 dark:text-blue-400"
  style={{ fontFamily: 'var(--font-heading)' }}
/>

// Список возможностей
<ul className="space-y-3">
  <li className="flex items-start gap-3">
    <Check className="text-blue-600 dark:text-blue-400" />
    <span 
      className="text-slate-800 dark:text-cyan-200 text-sm"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      Анализ бренда и целевой аудитории
    </span>
  </li>
</ul>

// Кнопка CTA
<button className="w-full py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold">
  Начать проект
</button>
```

**Детали:**
- **Название тарифа**: Inter SemiBold, uppercase, wide tracking
- **Цена**: Manrope ExtraBold 800 — максимально акцентный
- **Список**: Inter Regular 400 — удобочитаемый
- **Кнопка**: Manrope SemiBold 600 — призыв к действию

---

## 📝 Форма контакта

```tsx
// Заголовок формы
<h2 
  className="text-blue-900 dark:text-blue-400 font-bold" 
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Запустим контент для вашего салона
</h2>

// Label поля
<Label 
  htmlFor="name" 
  className="text-blue-900 dark:text-blue-400"
>
  Ваше имя *
</Label>

// Input (шрифт применяется автоматически)
<Input
  id="name"
  placeholder="Анна"
  className="bg-white dark:bg-slate-900/50"
/>

// Текст под формой
<p 
  className="text-slate-500 dark:text-cyan-400/60 text-xs text-center"
  style={{ fontFamily: 'var(--font-body)' }}
>
  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
</p>
```

**Типографика:**
- **h2**: Manrope Bold 700 — заголовок формы
- **Label**: Inter Medium 500 — метки полей
- **Input**: Inter Regular 400 — вводимый текст
- **Small text**: Inter Regular 400, меньший размер

---

## 🏷️ Badge компонент

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/50 rounded-full">
  <Sparkles className="text-blue-500 dark:text-blue-400" />
  <span 
    className="text-sm text-blue-700 dark:text-blue-400"
    style={{ fontFamily: 'var(--font-body)' }}
  >
    Для салонов красоты
  </span>
</div>
```

**Стиль:**
- **Badge text**: Inter Regular 400, small size
- Лёгкий, ненавязчивый

---

## 🎯 Navigation

```tsx
// Logo текст
<span 
  className="text-blue-900 dark:text-blue-400 font-bold" 
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Content AI
</span>

// CTA кнопка в nav
<button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold">
  Связаться
</button>
```

**Детали:**
- **Logo**: Manrope Bold 700 — узнаваемый, акцентный
- **Nav button**: Manrope SemiBold 600 — призыв к действию

---

## 📊 Информационные карточки

```tsx
<div className="space-y-4">
  {/* Иконка + заголовок */}
  <div className="flex items-center gap-2">
    <Sparkles className="text-blue-500 dark:text-blue-400" />
    <h4 
      className="text-blue-900 dark:text-blue-400"
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      Ответим за 24 часа
    </h4>
  </div>
  
  {/* Описание */}
  <p 
    className="text-slate-600 dark:text-cyan-300/70 text-sm"
    style={{ fontFamily: 'var(--font-body)' }}
  >
    Наша команда свяжется с вами в течение суток
  </p>
</div>
```

---

## 🎨 Цветные акценты с типографикой

### Синий (primary)
```tsx
<h3 
  className="text-blue-900 dark:text-blue-400" 
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Основной заголовок
</h3>
```

### Серый (secondary text)
```tsx
<p 
  className="text-slate-600 dark:text-cyan-300/70" 
  style={{ fontFamily: 'var(--font-body)' }}
>
  Вторичный текст или описание
</p>
```

### Приглушённый (muted)
```tsx
<p 
  className="text-slate-500 dark:text-cyan-400/60 text-sm" 
  style={{ fontFamily: 'var(--font-body)' }}
>
  Мелкий текст, disclaimer, hints
</p>
```

---

## 💡 Best Practices

### ✅ DO

```tsx
// ✅ Используйте style для кастомных компонентов
<h1 style={{ fontFamily: 'var(--font-heading)' }}>
  Заголовок
</h1>

// ✅ Добавляйте letter-spacing для текста
<p style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
  Текст с улучшенной читаемостью
</p>

// ✅ Используйте font-semibold/font-bold в Tailwind
<h2 className="font-bold">Заголовок</h2>

// ✅ Uppercase + tracking для labels
<label className="uppercase tracking-wider">Название</label>
```

### ❌ DON'T

```tsx
// ❌ Не задавайте font-family в Tailwind классах
<h1 className="font-['Space Grotesk']">Нет!</h1>

// ❌ Не используйте слишком жирные веса для текста
<p className="font-extrabold">Слишком жирно</p>

// ❌ Не забывайте про letter-spacing
<h1 style={{ letterSpacing: '0.5em' }}>Слишком wide!</h1>

// ❌ Не смешивайте шрифты без причины
<h2 style={{ fontFamily: 'Comic Sans' }}>Зачем?</h2>
```

---

## 🎯 Итоговая шпаргалка

| Элемент | Шрифт | Вес | Размер | Letter-spacing |
|---------|-------|-----|--------|----------------|
| Hero h1 | Manrope | 800 | 3-4rem | -0.03em |
| Section h2 | Manrope | 700 | 1.5-2rem | -0.02em |
| Card h3 | Manrope | 700 | 1.25rem | -0.015em |
| Small h4 | Manrope | 600 | 1rem | -0.01em |
| Body text | Inter | 400 | 1rem | 0.005em |
| Large text | Inter | 400 | 1.125rem | 0.01em |
| Label | Inter | 500 | 0.875-1rem | 0.002em |
| Button | Manrope | 600 | 0.875-1rem | 0.005em |
| Small text | Inter | 400 | 0.75-0.875rem | 0.005em |

---

**Используйте эти примеры как референс при создании новых компонентов!** ✨
