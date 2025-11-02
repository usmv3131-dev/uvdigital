import BeautyAIApp from "./App";
import beautyStyles from "./index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";
import { SeoHead } from "../../components/feature/seo/SeoHead";

const META = {
  title: "Beauty AI — цифровой администратор салона красоты | UVDigital",
  description:
    "Beauty AI автоматизирует запись клиентов, обработку заявок и коммуникации салона красоты. Интеграция с CRM, аналитика и работа 24/7.",
  keywords:
    "Beauty AI, администратор салона, запись клиентов, AI для индустрии красоты, UVDigital",
  canonical: "https://uvdigital.ru/beautyai",
  image: "https://uvdigital.ru/og-image.jpg",
};

export default function BeautyAIPage() {
  return (
    <>
      <SeoHead
        title={META.title}
        description={META.description}
        keywords={META.keywords}
        canonical={META.canonical}
        image={META.image}
      />
      <ScopedStyleHost styles={beautyStyles} scopeId="beautyai">
        <BeautyAIApp />
      </ScopedStyleHost>
    </>
  );
}
