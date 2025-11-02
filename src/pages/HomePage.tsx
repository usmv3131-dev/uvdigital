import { Suspense, lazy } from "react";
import { Navbar } from "../components/Navbar";
import { HeroModern } from "../components/HeroModern";
import { SeoHead, StructuredDataMain } from "../components/SeoHead";
import { Footer } from "../components/Footer";
import { DeferredSection } from "../components/DeferredSection";

const ServicesSection = lazy(() =>
  import("../components/Services").then((module) => ({
    default: module.Services,
  }))
);

const ProjectsSection = lazy(() =>
  import("../components/Projects").then((module) => ({
    default: module.Projects,
  }))
);

const AdvantagesSection = lazy(() =>
  import("../components/Advantages").then((module) => ({
    default: module.Advantages,
  }))
);

const ContactFormSection = lazy(() =>
  import("../components/ContactForm").then((module) => ({
    default: module.ContactForm,
  }))
);

function SectionPlaceholder({ title }: { title: string }) {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4">
        <div className="h-6 w-28 animate-pulse rounded-full bg-slate-200" />
        <div className="h-8 w-64 animate-pulse rounded-full bg-slate-200" />
        <div className="h-32 animate-pulse rounded-3xl bg-slate-100" />
        <div className="h-32 animate-pulse rounded-3xl bg-slate-100" />
        <span className="sr-only">{title} загружается...</span>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SeoHead />
      <StructuredDataMain />
      <Navbar />
      <main id="main-content">
        <HeroModern />
        <DeferredSection sectionId="services" fallback={<SectionPlaceholder title="Услуги" />}>
          <Suspense fallback={<SectionPlaceholder title="Услуги" />}>
            <ServicesSection />
          </Suspense>
        </DeferredSection>
        <DeferredSection sectionId="projects" fallback={<SectionPlaceholder title="Проекты" />}>
          <Suspense fallback={<SectionPlaceholder title="Проекты" />}>
            <ProjectsSection />
          </Suspense>
        </DeferredSection>
        <DeferredSection sectionId="advantages" fallback={<SectionPlaceholder title="Преимущества" />}>
          <Suspense fallback={<SectionPlaceholder title="Преимущества" />}>
            <AdvantagesSection />
          </Suspense>
        </DeferredSection>
        <DeferredSection sectionId="contact" fallback={<SectionPlaceholder title="Контакты" />}>
          <Suspense fallback={<SectionPlaceholder title="Контакты" />}>
            <ContactFormSection />
          </Suspense>
        </DeferredSection>
      </main>
      <Footer />
    </div>
  );
}
