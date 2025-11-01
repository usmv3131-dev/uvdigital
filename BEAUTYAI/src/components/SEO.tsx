import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const defaultSEO = {
  title: "Beauty AI - AI Администратор для Салонов Красоты | Запуск за 3 дня",
  description:
    "AI-администратор для салонов красоты. Автоматическая запись клиентов 24/7, умные уведомления, интеграция с CRM. Запуск за 3 дня. Первый месяц 60 000₽, далее от 15 000₽/мес.",
  keywords:
    "AI администратор салона, автоматизация салона красоты, чат-бот для записи, AI для beauty, запись клиентов онлайн, CRM для салона, автоматические уведомления, Beauty AI, AI агент для бизнеса",
  ogImage: "https://beauty-ai.ru/og-image.jpg",
  canonical: "https://beauty-ai.ru",
};

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  canonical = defaultSEO.canonical,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    // Basic SEO meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Beauty AI");
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph meta tags (Facebook, LinkedIn)
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", canonical, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:locale", "ru_RU", true);
    updateMetaTag("og:site_name", "Beauty AI", true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", canonical);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Additional meta tags for better AI understanding
    updateMetaTag("language", "Russian");
    updateMetaTag("coverage", "Russia");
    updateMetaTag("target", "beauty салоны, салоны красоты, spa салоны, парикмахерские");
    updateMetaTag("classification", "Business Software, Beauty Industry, AI Automation");

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Alternative language links (для будущей локализации)
    let altLangLink = document.querySelector('link[rel="alternate"][hreflang="ru"]') as HTMLLinkElement;
    if (!altLangLink) {
      altLangLink = document.createElement("link");
      altLangLink.rel = "alternate";
      altLangLink.hreflang = "ru";
      document.head.appendChild(altLangLink);
    }
    altLangLink.href = canonical;
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}
