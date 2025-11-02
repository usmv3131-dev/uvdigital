import AIMarketingApp from "./App";
import marketingStyles from "./index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";
import { SeoHead } from "../../components/feature/seo/SeoHead";

const META = {
  title: "AI Marketing — стратегия и автоматизация маркетинга | UVDigital",
  description:
    "AI Marketing от UVDigital: анализ конкурентов, позиционирование, AI-воронки и готовый маркетинг-план для роста заявок и продаж.",
  keywords:
    "AI маркетинг, стратегия продаж, автоматизация маркетинга, позиционирование, UVDigital",
  canonical: "https://uvdigital.ru/aimarketing",
  image: "https://uvdigital.ru/og-image.jpg",
};

export default function AIMarketingPage() {
  return (
    <>
      <SeoHead
        title={META.title}
        description={META.description}
        keywords={META.keywords}
        canonical={META.canonical}
        image={META.image}
      />
      <ScopedStyleHost styles={marketingStyles} scopeId="aimarketing">
        <AIMarketingApp />
      </ScopedStyleHost>
    </>
  );
}
