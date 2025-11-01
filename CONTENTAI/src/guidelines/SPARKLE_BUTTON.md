# ✨ Sparkle Button Component

## Interactive Particle Effect Button

---

## 🎯 Overview

**SparkleButton** — это интерактивная кнопка с эффектом частиц и анимированными звездочками. При наведении курсора активируются частицы, создавая магический эффект.

### Features:
- ✨ Animated sparkle icons
- 🎨 Particle effects on hover
- 🌈 Gradient background
- 🎭 Dark mode support
- ♿ Accessible (ARIA labels, disabled state)
- 📱 Responsive & mobile-friendly

---

## 📦 Installation

### 1. Dependencies

Установите необходимые пакеты:

```bash
npm install tsparticles @tsparticles/react @tsparticles/engine lucide-react
```

### 2. Files

Компонент находится в:
```
/components/ui/sparkle-button.tsx
```

### 3. CSS Animation

Добавлено в `/styles/globals.css`:

```css
@keyframes sparkle {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
}

.animate-sparkle {
  animation: sparkle 2s ease-in-out infinite;
}
```

---

## 💡 Usage

### Basic Example

```tsx
import { SparkleButton } from './components/ui/sparkle-button';

function MyComponent() {
  return (
    <SparkleButton onClick={() => console.log('Clicked!')}>
      Click Me
    </SparkleButton>
  );
}
```

### With Icons

```tsx
import { SparkleButton } from './components/ui/sparkle-button';
import { Send } from 'lucide-react';

<SparkleButton onClick={handleSubmit}>
  <Send size={20} className="mr-1" />
  Отправить
</SparkleButton>
```

### Full Width

```tsx
<SparkleButton 
  type="submit"
  className="w-full"
>
  Получить контент-план
</SparkleButton>
```

### Disabled State

```tsx
<SparkleButton 
  disabled={isLoading}
  onClick={handleSubmit}
>
  {isLoading ? 'Загрузка...' : 'Отправить'}
</SparkleButton>
```

### Without Sparkles

```tsx
<SparkleButton 
  showSparkles={false}
  onClick={handleClick}
>
  Clean Button
</SparkleButton>
```

---

## 🎨 Props

```tsx
interface SparkleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showSparkles?: boolean;
}
```

### Props Description

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Содержимое кнопки (текст, иконки) |
| `className` | `string` | `""` | Дополнительные CSS классы |
| `onClick` | `() => void` | `undefined` | Обработчик клика |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | HTML type кнопки |
| `disabled` | `boolean` | `false` | Состояние disabled |
| `showSparkles` | `boolean` | `true` | Показывать ли sparkle иконки |

---

## 🎨 Customization

### Custom Colors

Измените градиент в `className`:

```tsx
<SparkleButton 
  className="bg-gradient-to-r from-purple-300/30 via-pink-500/30 to-red-500/30"
>
  Custom Gradient
</SparkleButton>
```

### Custom Size

```tsx
// Small
<SparkleButton className="px-4 py-2 text-sm">
  Small Button
</SparkleButton>

// Large
<SparkleButton className="px-10 py-5 text-lg">
  Large Button
</SparkleButton>
```

### Custom Shadow

```tsx
<SparkleButton className="shadow-2xl shadow-purple-500/50">
  Big Shadow
</SparkleButton>
```

---

## 🎯 Where It's Used

### Current Implementation:

1. **HeroSection** — Primary CTA
   ```tsx
   <SparkleButton onClick={scrollToContact}>
     Запустить бесплатно
     <ArrowRight size={20} />
   </SparkleButton>
   ```

2. **ContactFormSection** — Submit Button
   ```tsx
   <SparkleButton type="submit" className="w-full">
     <Send size={20} />
     Получить контент-план
   </SparkleButton>
   ```

---

## ⚡ How It Works

### 1. Sparkle Icons

4 sparkle icons with different:
- Sizes (1px - 5px)
- Positions
- Animation delays
- Rotation angles

```tsx
<Sparkle className="size-5 animate-sparkle fill-white" />
<Sparkle 
  style={{ animationDelay: "1s" }}
  className="absolute size-2 rotate-12 animate-sparkle"
/>
```

### 2. Particle System

Uses **tsparticles** engine:

```tsx
const particlesOptions: ISourceOptions = {
  particles: {
    number: { value: 20 },
    color: { value: ["#3b82f6", "#22d3ee", ...] },
    shape: { type: "star" },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 4 } },
    // ...
  },
  emitters: [...],
  absorbers: [...]
}
```

**Emitter** создает частицы от центра кнопки
**Absorber** притягивает их к точке

### 3. Hover State

```tsx
const [isHovering, setIsHovering] = useState(false);

onMouseEnter={() => setIsHovering(true)}
onMouseLeave={() => setIsHovering(false)}

// Particles autoPlay when hovering
options.autoPlay = isHovering;
```

---

## 🎨 Particle Colors

Current color palette (Content AI blue/cyan):

```tsx
color: {
  value: [
    "#3b82f6", // blue-500
    "#22d3ee", // cyan-500
    "#60a5fa", // blue-400
    "#06b6d4", // cyan-600
    "#0ea5e9", // sky-500
    "#ffffff", // white
    "#38bdf8", // sky-400
  ],
}
```

### Custom Particle Colors

Create new particle options:

```tsx
const customOptions = {
  ...particlesOptions,
  particles: {
    ...particlesOptions.particles,
    color: {
      value: ["#purple", "#pink", "#red"]
    }
  }
};
```

---

## 📱 Responsive Behavior

### Mobile:
- Touch feedback (scales down on tap)
- Particles disabled on first touch (performance)
- Sparkles still animate

### Desktop:
- Full particle effect on hover
- Smooth scale transitions
- Glow shadow effect

---

## ♿ Accessibility

### Features:
- ✅ Keyboard accessible
- ✅ ARIA labels supported
- ✅ Disabled state properly handled
- ✅ Focus visible
- ✅ Screen reader friendly

### Usage:

```tsx
<SparkleButton 
  aria-label="Отправить заявку"
  disabled={isSubmitting}
>
  {isSubmitting ? 'Отправка...' : 'Отправить'}
</SparkleButton>
```

---

## 🎭 Dark Mode

Automatically adapts to theme:

```tsx
// Light theme
bg-gradient-to-r from-blue-300/30 via-blue-500/30 to-cyan-500/30

// Dark theme
Same gradient (works in both themes)

// Inner gradient
from-blue-500 via-blue-500 to-cyan-500
```

---

## ⚡ Performance

### Optimizations:

1. **Lazy particle init**
   ```tsx
   useEffect(() => {
     initParticlesEngine(async (engine) => {
       await loadFull(engine);
     }).then(() => setParticlesReady("loaded"));
   }, []);
   ```

2. **Conditional rendering**
   ```tsx
   {!!particleState && <Particles ... />}
   ```

3. **FPS limit**
   ```tsx
   fpsLimit: 120
   ```

4. **Particle count**
   ```tsx
   number: { value: 20 } // Not too many
   ```

---

## 🐛 Troubleshooting

### Particles not showing?

**Check:**
1. Dependencies installed
   ```bash
   npm list tsparticles @tsparticles/react @tsparticles/engine
   ```

2. Particle state
   ```tsx
   console.log(particleState); // Should be "ready"
   ```

3. Hover state
   ```tsx
   console.log(isHovering); // Should be true on hover
   ```

### Sparkles not animating?

**Check:**
1. CSS animation added to `globals.css`
2. Class name correct: `.animate-sparkle`
3. No CSS conflicts

### Button too large?

**Adjust padding:**
```tsx
<SparkleButton className="px-4 py-2">
  Smaller Button
</SparkleButton>
```

---

## 🎨 Variants

### Variant 1: Minimal (No Sparkles)

```tsx
<SparkleButton showSparkles={false}>
  Clean
</SparkleButton>
```

### Variant 2: Large Hero

```tsx
<SparkleButton className="px-10 py-5 text-xl">
  Запустить бесплатно
</SparkleButton>
```

### Variant 3: Icon Only

```tsx
<SparkleButton className="px-4 py-4" showSparkles={false}>
  <Send size={24} />
</SparkleButton>
```

### Variant 4: Custom Gradient

```tsx
<SparkleButton 
  className="bg-gradient-to-r from-purple-500/30 to-pink-500/30"
>
  <SparkleButton.Inner className="from-purple-500 to-pink-500">
    Custom Colors
  </SparkleButton.Inner>
</SparkleButton>
```

---

## 📊 Bundle Size

**Dependencies:**
- `tsparticles`: ~200KB
- `@tsparticles/react`: ~10KB
- `@tsparticles/engine`: ~150KB

**Total:** ~360KB (minified)

**Optimization tip:** Use dynamic import for pages that don't need particles:

```tsx
const SparkleButton = dynamic(() => import('./ui/sparkle-button'), {
  loading: () => <RegularButton />,
});
```

---

## 🚀 Future Enhancements

### Possible additions:

1. **More particle shapes**
   - Hearts, circles, custom SVGs

2. **Sound effects**
   - Click sound
   - Hover sound

3. **Haptic feedback**
   - Mobile vibration on tap

4. **Multiple themes**
   - Fire theme (red/orange particles)
   - Ocean theme (blue/teal particles)
   - Galaxy theme (purple/pink particles)

5. **Particle trails**
   - Mouse trail effect
   - Click burst effect

---

## 📚 Examples

### Example 1: CTA Button

```tsx
import { SparkleButton } from './components/ui/sparkle-button';
import { Rocket } from 'lucide-react';

function Hero() {
  return (
    <SparkleButton 
      onClick={() => window.location.href = '/signup'}
      className="shadow-2xl shadow-blue-500/50"
    >
      <Rocket size={20} className="mr-2" />
      Get Started Free
    </SparkleButton>
  );
}
```

### Example 2: Form Submit

```tsx
import { SparkleButton } from './components/ui/sparkle-button';
import { Send } from 'lucide-react';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    await submitForm();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <SparkleButton 
        type="submit" 
        disabled={loading}
        className="w-full"
      >
        <Send size={20} className="mr-1" />
        {loading ? 'Sending...' : 'Send Message'}
      </SparkleButton>
    </form>
  );
}
```

### Example 3: Download Button

```tsx
import { SparkleButton } from './components/ui/sparkle-button';
import { Download } from 'lucide-react';

function DownloadSection() {
  return (
    <SparkleButton onClick={() => downloadFile()}>
      <Download size={20} className="mr-1" />
      Download Content Plan
    </SparkleButton>
  );
}
```

---

## 🎯 Best Practices

### DO:
✅ Use for primary CTAs only
✅ Keep text concise (2-4 words)
✅ Test on mobile devices
✅ Provide loading states
✅ Add proper ARIA labels

### DON'T:
❌ Use multiple sparkle buttons on one screen
❌ Use for destructive actions (delete, etc.)
❌ Disable without visual feedback
❌ Use very long text
❌ Forget about performance

---

## 📖 Resources

**Dependencies:**
- [tsparticles](https://particles.js.org/) — Particle engine
- [lucide-react](https://lucide.dev/) — Icons
- [Tailwind CSS](https://tailwindcss.com/) — Styling

**Similar Components:**
- Shadcn Button
- Radix UI Button
- Material UI Button

---

**Sparkle Button готов! Создавайте магические UI! ✨🚀**

**Updated:** 31.10.2025
