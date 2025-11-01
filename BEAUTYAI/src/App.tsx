import { lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ThemeProvider } from "./lib/theme-context";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";

// Lazy load sections for better performance
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
      <div className="w-8 h-8 border-4 border-rose-300 dark:border-purple-500 border-t-rose-600 dark:border-t-purple-300 rounded-full animate-spin" />
      <span className="sr-only">Загрузка...</span>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      {/* SEO Meta Tags */}
      <SEO />
      
      {/* Structured Data for Search Engines & AI */}
      <StructuredData />
      
      <div className="min-h-screen bg-rose-50 dark:bg-slate-950 transition-colors">
        <Navigation />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionSkeleton />}>
            <HowItWorksSection />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <FeaturesSection />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <PricingSection />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <FAQSection />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <ContactFormSection />
          </Suspense>
        </main>
        
        {/* Footer for better semantic structure */}
        <footer className="bg-white dark:bg-slate-900 border-t border-rose-200/30 dark:border-purple-500/30 py-8 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <p className="text-rose-700/60 dark:text-purple-300/60 text-sm">
                © 2024 Beauty AI. Все права защищены.
              </p>
              <p className="text-rose-600/50 dark:text-purple-400/50 text-xs">
                AI-администратор для автоматизации салонов красоты
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
