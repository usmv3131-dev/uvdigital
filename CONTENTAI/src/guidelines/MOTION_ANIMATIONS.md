# 🎨 Motion Animations Guide

## Comprehensive Animation Library for Content AI

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Animation Variants](#animation-variants)
3. [Animated Components](#animated-components)
4. [Usage Examples](#usage-examples)
5. [Best Practices](#best-practices)
6. [Performance Tips](#performance-tips)

---

## 🎯 Overview

Content AI использует **Motion** (бывший Framer Motion) для создания плавных, производительных анимаций.

### Основные файлы:

- **`/lib/motion-variants.ts`** — Библиотека вариантов анимаций
- **`/components/AnimatedElements.tsx`** — Готовые анимированные компоненты
- **`/components/AnimationShowcase.tsx`** — Демонстрация всех анимаций

---

## 📐 Animation Variants

### 1. Fade Animations

#### fadeInUpVariants
```tsx
import { fadeInUpVariants } from '../lib/motion-variants';

<motion.div
  variants={fadeInUpVariants.item}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**Использование:**
- Основные секции сайта
- Карточки features
- Текстовые блоки

#### fadeInLeftVariants / fadeInRightVariants
```tsx
import { fadeInLeftVariants, fadeInRightVariants } from '../lib/motion-variants';

// Слева направо
<motion.div variants={fadeInLeftVariants} />

// Справа налево  
<motion.div variants={fadeInRightVariants} />
```

**Использование:**
- Чередующиеся секции
- Image + Text layouts

---

### 2. Scale Animations

#### scaleInVariants
```tsx
import { scaleInVariants } from '../lib/motion-variants';

<motion.div
  variants={scaleInVariants}
  initial="hidden"
  whileInView="visible"
>
  Content
</motion.div>
```

**Эффект:** Элемент появляется с увеличением от 0.8 до 1.0

**Использование:**
- Модальные окна
- Popovers
- Иконки

#### popInVariants
```tsx
import { popInVariants } from '../lib/motion-variants';

<motion.div variants={popInVariants} />
```

**Эффект:** Быстрое "выстреливание" со spring эффектом

**Использование:**
- Notifications
- Badges
- Success messages

---

### 3. Rotation Animations

#### rotateInVariants
```tsx
import { rotateInVariants } from '../lib/motion-variants';

<motion.div variants={rotateInVariants} />
```

**Эффект:** Появление с небольшим поворотом (-10° → 0°)

**Использование:**
- Логотипы
- Иконки
- Decorative elements

#### spinAnimation + spinTransition
```tsx
import { spinAnimation, spinTransition } from '../lib/motion-variants';

<motion.div
  animate={spinAnimation}
  transition={spinTransition}
/>
```

**Эффект:** Непрерывное вращение 360°

**Использование:**
- Loading spinners
- Decorative elements

---

### 4. Continuous Animations

#### floatingAnimation + floatingTransition
```tsx
import { floatingAnimation, floatingTransition } from '../lib/motion-variants';

<motion.div
  animate={floatingAnimation}
  transition={floatingTransition}
/>
```

**Эффект:** Плавное движение вверх-вниз

**Использование:**
- Hero section elements
- Decorative icons
- Call-to-action buttons

#### pulseAnimation + pulseTransition
```tsx
import { pulseAnimation, pulseTransition } from '../lib/motion-variants';

<motion.div
  animate={pulseAnimation}
  transition={pulseTransition}
/>
```

**Эффект:** Пульсация (scale + opacity)

**Использование:**
- Important notifications
- Live indicators
- New feature badges

#### glowAnimation + glowTransition
```tsx
import { glowAnimation, glowTransition } from '../lib/motion-variants';

<motion.div
  animate={glowAnimation}
  transition={glowTransition}
/>
```

**Эффект:** Светящийся box-shadow

**Использование:**
- Primary CTA buttons
- Featured cards
- Highlighted elements

---

### 5. Card & Hover Animations

#### cardHoverVariants
```tsx
import { cardHoverVariants } from '../lib/motion-variants';

<motion.div
  variants={cardHoverVariants}
  initial="rest"
  whileHover="hover"
>
  Card Content
</motion.div>
```

**Эффект:** Подъем + увеличение при hover

**Использование:**
- Feature cards
- Pricing cards
- Blog post cards

#### hoverGlowVariants
```tsx
import { hoverGlowVariants } from '../lib/motion-variants';

<motion.div
  variants={hoverGlowVariants}
  initial="rest"
  whileHover="hover"
/>
```

**Эффект:** Появление glow shadow при hover

---

### 6. Stagger Animations

#### staggerContainerVariants
```tsx
import { staggerContainerVariants, fadeInUpVariants } from '../lib/motion-variants';

<motion.div
  variants={staggerContainerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeInUpVariants.item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Эффект:** Дочерние элементы появляются по очереди

**Варианты:**
- `staggerContainerVariants` — обычная скорость (0.12s)
- `staggerFastContainerVariants` — быстро (0.08s)
- `staggerSlowContainerVariants` — медленно (0.2s)

---

### 7. Special Effects

#### blurInVariants
```tsx
import { blurInVariants } from '../lib/motion-variants';

<motion.div variants={blurInVariants} />
```

**Эффект:** Проявление с blur → sharp

**Использование:**
- Images
- Hero backgrounds
- Modal overlays

#### elasticInVariants
```tsx
import { elasticInVariants } from '../lib/motion-variants';

<motion.div variants={elasticInVariants} />
```

**Эффект:** Упругое появление (spring animation)

**Использование:**
- Playful elements
- Success states
- Celebrations

---

## 🎨 Animated Components

### Ready-to-use Components

#### FadeInUpContainer
```tsx
import { FadeInUpContainer } from './components/AnimatedElements';

<FadeInUpContainer className="..." delay={0.2}>
  <h2>Your Content</h2>
</FadeInUpContainer>
```

#### FloatingElement
```tsx
import { FloatingElement } from './components/AnimatedElements';

<FloatingElement>
  <Sparkles />
</FloatingElement>
```

#### HoverCard
```tsx
import { HoverCard } from './components/AnimatedElements';

<HoverCard
  className="p-6 bg-white rounded-xl"
  onClick={() => console.log('clicked')}
>
  <h3>Card Title</h3>
  <p>Card content...</p>
</HoverCard>
```

#### AnimatedButton
```tsx
import { AnimatedButton } from './components/AnimatedElements';

<AnimatedButton
  className="px-8 py-4 bg-blue-500 text-white rounded-xl"
  onClick={handleClick}
>
  Click Me
</AnimatedButton>
```

#### GradientText
```tsx
import { GradientText } from './components/AnimatedElements';

<h1>
  <GradientText>Amazing Title</GradientText>
</h1>
```

#### FloatingOrb
```tsx
import { FloatingOrb } from './components/AnimatedElements';

<div className="relative">
  <FloatingOrb
    size={300}
    color="rgba(59, 130, 246, 0.15)"
    duration={8}
  />
  <YourContent />
</div>
```

---

## 💡 Usage Examples

### Example 1: Animated Hero Section

```tsx
import { motion } from 'motion/react';
import { heroAnimationPreset } from '../lib/motion-variants';

function HeroSection() {
  return (
    <motion.section
      variants={heroAnimationPreset}
      initial="hidden"
      animate="visible"
      className="..."
    >
      <h1>Content AI</h1>
      <p>AI-контент бот для салонов красоты</p>
    </motion.section>
  );
}
```

### Example 2: Staggered Card Grid

```tsx
import { motion } from 'motion/react';
import { staggerContainerVariants, cardAnimationPreset } from '../lib/motion-variants';

function FeaturesGrid() {
  const features = [...];

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-6"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={cardAnimationPreset}
          whileHover="hover"
          className="p-6 bg-white rounded-xl"
        >
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Example 3: Animated CTA Button

```tsx
import { motion } from 'motion/react';
import { buttonHoverVariants } from '../lib/motion-variants';

function CTAButton() {
  return (
    <motion.button
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl"
    >
      Запустить бесплатно
    </motion.button>
  );
}
```

### Example 4: Reveal on Scroll

```tsx
import { RevealOnScroll } from './components/AnimatedElements';

function ContentSection() {
  return (
    <section className="space-y-8">
      <RevealOnScroll direction="up">
        <h2>Section Title</h2>
      </RevealOnScroll>

      <RevealOnScroll direction="left">
        <p>Content from right...</p>
      </RevealOnScroll>

      <RevealOnScroll direction="right">
        <p>Content from left...</p>
      </RevealOnScroll>
    </section>
  );
}
```

### Example 5: Floating Background Elements

```tsx
import { FloatingOrb, AnimatedGradientBg } from './components/AnimatedElements';

function DecorativeBackground() {
  return (
    <div className="relative">
      {/* Animated gradient background */}
      <AnimatedGradientBg className="absolute inset-0" />
      
      {/* Floating orbs */}
      <FloatingOrb 
        className="absolute top-1/4 left-1/4"
        size={300}
        color="rgba(59, 130, 246, 0.15)"
        duration={8}
      />
      <FloatingOrb
        className="absolute bottom-1/4 right-1/4"
        size={250}
        color="rgba(34, 211, 238, 0.12)"
        duration={10}
      />
      
      {/* Your content */}
      <div className="relative z-10">
        <YourContent />
      </div>
    </div>
  );
}
```

---

## ✨ Best Practices

### 1. Performance

**DO:**
```tsx
// ✅ Use whileInView for scroll animations
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
/>
```

**DON'T:**
```tsx
// ❌ Don't animate on every scroll
<motion.div
  animate={isInView ? "visible" : "hidden"}
  viewport={{ once: false }} // Bad for performance
/>
```

### 2. Accessibility

**DO:**
```tsx
// ✅ Respect reduced motion
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.5,
    // Respects prefers-reduced-motion
  }}
/>
```

**Use CSS:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3. Easing Functions

**Recommended easings:**

```tsx
// Smooth deceleration
ease: [0.22, 1, 0.36, 1] // ✅ Best for most animations

// Quick entrance
ease: "easeOut" // ✅ Good for modals, tooltips

// Bouncy
ease: "anticipate" // ✅ Playful elements

// Linear
ease: "linear" // ✅ Continuous rotations, gradients
```

### 4. Durations

**Recommended:**
- **Micro interactions**: 0.2s - 0.3s (buttons, hover)
- **Standard**: 0.5s - 0.6s (cards, sections)
- **Large elements**: 0.8s - 1s (modals, pages)
- **Continuous**: 2s - 5s (floating, gradients)

### 5. Stagger Timing

```tsx
// Small items (badges, tags)
staggerChildren: 0.05

// Medium items (cards)
staggerChildren: 0.12

// Large sections
staggerChildren: 0.2
```

---

## ⚡ Performance Tips

### 1. Use transform & opacity

**Fast (GPU accelerated):**
```tsx
// ✅ These properties are fast
animate={{
  x: 100,
  y: 100,
  scale: 1.1,
  rotate: 45,
  opacity: 0.5,
}}
```

**Slow (causes reflow):**
```tsx
// ❌ Avoid animating these
animate={{
  width: "100%",
  height: "100%",
  top: 100,
  left: 100,
}}
```

### 2. Lazy load animations

```tsx
// ✅ Only animate when visible
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
/>
```

### 3. Reduce unnecessary re-renders

```tsx
// ✅ Use memo for animated components
export const AnimatedCard = memo(function AnimatedCard({ ... }) {
  return <motion.div ... />;
});
```

### 4. Use `layout` prop carefully

```tsx
// Only use layout when necessary
<motion.div layout /> // Can be expensive
```

---

## 🎯 Animation Presets

### Quick start with presets:

```tsx
import {
  heroAnimationPreset,
  cardAnimationPreset,
  navigationAnimationPreset,
} from '../lib/motion-variants';

// Hero
<motion.section variants={heroAnimationPreset} />

// Card
<motion.div
  variants={cardAnimationPreset}
  initial="hidden"
  whileInView="visible"
  whileHover="hover"
/>

// Navigation
<motion.nav variants={navigationAnimationPreset} />
```

---

## 📱 Mobile Considerations

### Touch-friendly animations:

```tsx
<motion.button
  whileHover={{ scale: 1.05 }} // Desktop
  whileTap={{ scale: 0.95 }}   // Mobile tap feedback
>
  Button
</motion.button>
```

### Mobile-specific animations:

```tsx
import { slideInFromBottomVariants } from '../lib/motion-variants';

// Good for mobile sheets, modals
<motion.div variants={slideInFromBottomVariants} />
```

---

## 🎨 Theming Animations

### Dark mode transitions:

```tsx
<motion.div
  animate={{
    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
  }}
  transition={{ duration: 0.3 }}
/>
```

---

## 📚 Full Component List

### Containers:
- `FadeInUpContainer`
- `ScaleInContainer`
- `BlurInContainer`
- `ElasticInContainer`
- `StaggerContainer`

### Continuous:
- `FloatingElement`
- `PulsingElement`
- `GlowingElement`

### Interactive:
- `HoverCard`
- `GlowCard`
- `AnimatedButton`
- `PulseButton`

### Icons:
- `RotatingIcon`
- `BouncingIcon`

### Background:
- `AnimatedGradientBg`
- `FloatingOrb`

### UI Elements:
- `AnimatedProgressBar`
- `SpinningLoader`

### Text:
- `FadeInText`
- `GradientText`

### Utility:
- `RevealOnScroll`

---

## 🚀 Testing Animations

Используйте AnimationShowcase для тестирования:

```tsx
import { AnimationShowcase } from './components/AnimationShowcase';

// В App.tsx или отдельном route
<AnimationShowcase />
```

---

**Все анимации готовы! Создавайте плавные, производительные UI! 🎉**

**Updated:** 31.10.2025
