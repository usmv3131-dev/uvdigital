import LeadMagnetApp from "./App";
import leadMagnetStyles from "./index.css?inline";
import { ScopedStyleHost } from "../../components/ScopedStyleHost";
import { SeoHead } from "../../components/feature/seo/SeoHead";

const META = {
  title: "50 готовых сценариев AI-ботов — Lead Magnet UVDigital",
  description:
    "Скачайте 50 готовых сценариев AI-ботов для продаж и маркетинга. Быстрый старт автоматизации с шаблонами от UVDigital.",
  keywords:
    "lead magnet, 50 ботов, AI сценарии, шаблоны ботов, UVDigital",
  canonical: "https://uvdigital.ru/50bots",
  image: "https://uvdigital.ru/og-image.jpg",
};

export default function LeadMagnetPage() {
  return (
    <>
      <SeoHead
        title={META.title}
        description={META.description}
        keywords={META.keywords}
        canonical={META.canonical}
        image={META.image}
      />
      <ScopedStyleHost styles={leadMagnetStyles}>
        <LeadMagnetApp />
      </ScopedStyleHost>
    </>
  );
}
