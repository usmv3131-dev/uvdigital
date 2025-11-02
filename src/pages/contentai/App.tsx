import { lazy, Suspense } from "react";
import { ThemeProvider } from "./lib/theme-context";
import { Navigation } from "./components/Navigation";
import { SEOHead, StructuredData } from "./components/SEOHead";

// Lazy load heavy sections for better performance
const HeroSection = lazy(() =>
  import("./components/HeroSection").then((module) => ({
    default: module.HeroSection,
  }))
);

const HowItWorksSection = lazy(() =>
  import("./components/HowItWorksSection").then((module) => ({
    default: module.HowItWorksSection,
  }))
);

const FeaturesSection = lazy(() =>
  import("./components/FeaturesSection").then((module) => ({
    default: module.FeaturesSection,
  }))
);

const PricingSection = lazy(() =>
  import("./components/PricingSection").then((module) => ({
    default: module.PricingSection,
  }))
);

const FAQSection = lazy(() =>
  import("./components/FAQSection").then((module) => ({
    default: module.FAQSection,
  }))
);

const ContactFormSection = lazy(() =>
  import("./components/ContactFormSection").then((module) => ({
    default: module.ContactFormSection,
  }))
);

// Simple loading fallback
function SectionSkeleton() {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center" role="status" aria-live="polite">
      <div className="w-8 h-8 border-4 border-blue-300 dark:border-blue-500 border-t-blue-600 dark:border-t-blue-300 rounded-full animate-spin" />
      <span className="sr-only">Загрузка контента...</span>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      {/* SEO Meta Tags & Structured Data */}
      <SEOHead />
      <StructuredData />

      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Header Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Hero Section */}
          <Suspense fallback={<SectionSkeleton />}>
            <HeroSection />
          </Suspense>

          {/* How It Works Section */}
          <Suspense fallback={<SectionSkeleton />}>
            <HowItWorksSection />
          </Suspense>

          {/* Features Section */}
          <Suspense fallback={<SectionSkeleton />}>
            <FeaturesSection />
          </Suspense>

          {/* Pricing Section */}
          <Suspense fallback={<SectionSkeleton />}>
            <PricingSection />
          </Suspense>

          {/* FAQ Section - Important for SEO */}
          <Suspense fallback={<SectionSkeleton />}>
            <FAQSection />
          </Suspense>

          {/* Contact Form Section */}
          <Suspense fallback={<SectionSkeleton />}>
            <ContactFormSection />
          </Suspense>
        </main>

        {/* Footer (optional, можно добавить позже) */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8 border-t border-slate-800 dark:border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2">
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                © 2025 Content AI. Все права защищены.
              </p>
              <p className="text-xs text-slate-500">
                AI-контент бот для салонов красоты | Автоматизация SMM
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
