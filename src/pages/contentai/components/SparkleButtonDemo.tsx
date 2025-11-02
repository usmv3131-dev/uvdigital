import { memo, useState } from "react";
import { SparkleButton } from "./ui/sparkle-button";
import { Send, Download, Rocket, Zap, Heart, Star, CheckCircle } from "lucide-react";

/**
 * 🎨 Sparkle Button Demo
 * Демонстрация всех вариантов SparkleButton
 */
function SparkleButtonDemoComponent() {
  const [clicked, setClicked] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (buttonName: string) => {
    setClicked(buttonName);
    setTimeout(() => setClicked(null), 2000);
  };

  const handleLoadingClick = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ✨ Sparkle Button Demo
          </h1>
          <p className="text-xl text-slate-600 dark:text-cyan-300/70">
            Interactive button with particle effects
          </p>
          {clicked && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
              <CheckCircle size={16} />
              <span>Clicked: {clicked}</span>
            </div>
          )}
        </div>

        {/* Section 1: Basic Variants */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Basic Variants
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Default sparkle buttons with different content
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <SparkleButton onClick={() => handleClick('Basic Button')}>
              Click Me
            </SparkleButton>

            <SparkleButton onClick={() => handleClick('With Icon')}>
              <Send size={20} className="mr-1" />
              With Icon
            </SparkleButton>

            <SparkleButton onClick={() => handleClick('Rocket Button')}>
              <Rocket size={20} className="mr-1" />
              Get Started
            </SparkleButton>

            <SparkleButton onClick={() => handleClick('Heart Button')}>
              <Heart size={20} className="mr-1" />
              Like This
            </SparkleButton>
          </div>
        </section>

        {/* Section 2: Sizes */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Different Sizes
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Customize size with Tailwind classes
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <SparkleButton 
              className="px-3 py-1.5 text-sm"
              onClick={() => handleClick('Small')}
            >
              Small
            </SparkleButton>

            <SparkleButton onClick={() => handleClick('Medium')}>
              Medium (Default)
            </SparkleButton>

            <SparkleButton 
              className="px-10 py-5 text-lg"
              onClick={() => handleClick('Large')}
            >
              <Star size={24} className="mr-2" />
              Large Button
            </SparkleButton>
          </div>
        </section>

        {/* Section 3: States */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Button States
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Loading and disabled states
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <SparkleButton onClick={() => handleClick('Normal State')}>
              Normal State
            </SparkleButton>

            <SparkleButton disabled={true}>
              Disabled State
            </SparkleButton>

            <SparkleButton 
              disabled={loading}
              onClick={handleLoadingClick}
            >
              <Zap size={20} className="mr-1" />
              {loading ? 'Loading...' : 'Click to Load'}
            </SparkleButton>
          </div>
        </section>

        {/* Section 4: Without Sparkles */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Without Sparkles
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Clean version without sparkle icons
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <SparkleButton 
              showSparkles={false}
              onClick={() => handleClick('No Sparkles 1')}
            >
              Clean Button
            </SparkleButton>

            <SparkleButton 
              showSparkles={false}
              onClick={() => handleClick('No Sparkles 2')}
            >
              <Download size={20} className="mr-1" />
              Download
            </SparkleButton>
          </div>
        </section>

        {/* Section 5: Full Width */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Full Width
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Great for forms and call-to-actions
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <SparkleButton 
              className="w-full"
              onClick={() => handleClick('Full Width 1')}
            >
              <Send size={20} className="mr-1" />
              Full Width Button
            </SparkleButton>

            <SparkleButton 
              className="w-full"
              type="submit"
              onClick={() => handleClick('Full Width Submit')}
            >
              <CheckCircle size={20} className="mr-1" />
              Submit Form
            </SparkleButton>
          </div>
        </section>

        {/* Section 6: Custom Shadows */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Custom Shadows
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Add different shadow effects
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <SparkleButton 
              className="shadow-sm"
              onClick={() => handleClick('Small Shadow')}
            >
              Small Shadow
            </SparkleButton>

            <SparkleButton 
              className="shadow-lg shadow-blue-300/30 dark:shadow-blue-500/50"
              onClick={() => handleClick('Medium Shadow')}
            >
              Medium Shadow
            </SparkleButton>

            <SparkleButton 
              className="shadow-2xl shadow-blue-400/60 dark:shadow-blue-500/80"
              onClick={() => handleClick('Large Shadow')}
            >
              Large Shadow
            </SparkleButton>
          </div>
        </section>

        {/* Section 7: Form Example */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Form Example
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              How it looks in a real form
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/30 rounded-3xl p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-blue-900 dark:text-blue-400 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-blue-200/50 dark:border-blue-500/50 rounded-xl text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-blue-900 dark:text-blue-400 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-blue-200/50 dark:border-blue-500/50 rounded-xl text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 focus:outline-none focus:border-blue-400"
                />
              </div>

              <SparkleButton 
                type="submit"
                className="w-full shadow-lg shadow-blue-300/30 dark:shadow-blue-500/50"
                onClick={() => handleClick('Form Submit')}
              >
                <Send size={20} className="mr-1" />
                Submit Form
              </SparkleButton>
            </div>
          </div>
        </section>

        {/* Section 8: CTA Examples */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              Call-to-Action Examples
            </h2>
            <p className="text-slate-600 dark:text-cyan-300/70">
              Real-world CTA button examples
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <SparkleButton 
              className="shadow-2xl shadow-blue-500/50"
              onClick={() => handleClick('Get Started')}
            >
              <Rocket size={20} className="mr-1" />
              Get Started Free
            </SparkleButton>

            <SparkleButton 
              className="shadow-2xl shadow-cyan-500/50"
              onClick={() => handleClick('Download')}
            >
              <Download size={20} className="mr-1" />
              Download Now
            </SparkleButton>

            <SparkleButton 
              className="shadow-2xl shadow-blue-400/50"
              onClick={() => handleClick('Learn More')}
            >
              <Star size={20} className="mr-1" />
              Learn More
            </SparkleButton>
          </div>
        </section>

        {/* Section 9: Tips */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">
              💡 Tips & Best Practices
            </h2>
          </div>

          <div className="bg-blue-50/50 dark:bg-slate-800/50 border border-blue-200/50 dark:border-blue-500/30 rounded-3xl p-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-1">
                  Use for Primary CTAs Only
                </h3>
                <p className="text-slate-600 dark:text-cyan-300/70 text-sm">
                  Sparkle buttons should be used sparingly for the most important actions on the page
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-1">
                  Hover to See Effects
                </h3>
                <p className="text-slate-600 dark:text-cyan-300/70 text-sm">
                  Particle effects activate on hover — make sure to hover over buttons to see the magic!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-1">
                  Mobile Friendly
                </h3>
                <p className="text-slate-600 dark:text-cyan-300/70 text-sm">
                  Works great on mobile with touch feedback and optimized performance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-1">
                  Accessibility First
                </h3>
                <p className="text-slate-600 dark:text-cyan-300/70 text-sm">
                  Fully keyboard accessible with proper ARIA labels and disabled state support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-blue-200/50 dark:border-blue-500/30">
          <p className="text-slate-600 dark:text-cyan-300/70 mb-4">
            ✨ Sparkle Button Component — Ready to use in Content AI
          </p>
          <p className="text-sm text-slate-500 dark:text-cyan-400/60">
            Import from <code className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded">/components/ui/sparkle-button.tsx</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export const SparkleButtonDemo = memo(SparkleButtonDemoComponent);
