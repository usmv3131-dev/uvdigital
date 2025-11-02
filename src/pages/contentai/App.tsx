import { lazy, Suspense, ReactNode } from "react";
import { ThemeProvider } from "./lib/theme-context";
import { Navigation } from "./components/Navigation";
import { SEOHead, StructuredData } from "./components/SEOHead";
import { HeroSection } from "./components/HeroSection";
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

function SectionFallback({ sectionId }: { sectionId: string }) {
  return (
    <section id={sectionId} data-section-id={sectionId} aria-hidden="true">
      <SectionSkeleton />
    </section>
  );
}

function SuspenseSection({ sectionId, children }: { sectionId: string; children: ReactNode }) {
  return <Suspense fallback={<SectionFallback sectionId={sectionId} />}>{children}</Suspense>;
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
        <main id="main-content" role="main" className="pt-24 sm:pt-28 lg:pt-32">
          {/* Hero Section */}
          <SuspenseSection sectionId="hero">
            <HeroSection />
          </SuspenseSection>

          {/* How It Works Section */}
          <SuspenseSection sectionId="how-it-works">
            <HowItWorksSection />
          </SuspenseSection>

          {/* Features Section */}
          <SuspenseSection sectionId="features">
            <FeaturesSection />
          </SuspenseSection>

          {/* Pricing Section */}
          <SuspenseSection sectionId="pricing">
            <PricingSection />
          </SuspenseSection>

          {/* FAQ Section - Important for SEO */}
          <SuspenseSection sectionId="faq">
            <FAQSection />
          </SuspenseSection>

          {/* Contact Form Section */}
          <SuspenseSection sectionId="contact">
            <ContactFormSection />
          </SuspenseSection>
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
