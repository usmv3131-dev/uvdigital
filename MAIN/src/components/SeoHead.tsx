import { useEffect } from "react";

type SeoHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
};

const DEFAULT_META: Required<SeoHeadProps> = {
  title: "UVDigital — AI-решения для автоматизации маркетинга и продаж",
  description:
    "UVDigital строит и сопровождает AI-ботов, маркетинговые ассистенты и автоматизацию воронок продаж. Запуск под ключ, аналитика и поддержка команды.",
  keywords:
    "UVDigital, AI автоматизация, чат-боты для бизнеса, автоматизация маркетинга, AI продажи, AI ассистенты, внедрение AI",
  canonical: "https://uvdigital.ru",
  image: "https://uvdigital.ru/og-image.jpg",
};

const SITE_NAME = "UVDigital";

export function SeoHead({
  title = DEFAULT_META.title,
  description = DEFAULT_META.description,
  keywords = DEFAULT_META.keywords,
  canonical = DEFAULT_META.canonical,
  image = DEFAULT_META.image,
}: SeoHeadProps) {
  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      if (!content) return;
      let tag = document.head.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setMetaProperty = (property: string, content: string) => {
      if (!content) return;
      let tag = document.head.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    document.title = title;
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "UVDigital Team");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("language", "ru-RU");
    setMeta("format-detection", "telephone=no");

    setMetaProperty("og:type", "website");
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:image", image);
    setMetaProperty("og:url", canonical);
    setMetaProperty("og:site_name", SITE_NAME);
    setMetaProperty("og:locale", "ru_RU");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setMeta("twitter:site", "@uvdigital");

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let alternate = document.querySelector('link[rel="alternate"][hreflang="ru"]') as HTMLLinkElement | null;
    if (!alternate) {
      alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.hreflang = "ru";
      document.head.appendChild(alternate);
    }
    alternate.href = canonical;
  }, [title, description, keywords, canonical, image]);

  return null;
}

export function StructuredDataMain() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: DEFAULT_META.canonical,
        logo: "https://uvdigital.ru/logo.png",
        sameAs: [
          "https://t.me/uvdigital",
          "mailto:info@uvdigital.ru",
          "tel:+79999999999",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+7-999-999-99-99",
            contactType: "sales",
            areaServed: "RU",
            availableLanguage: ["ru", "en"],
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: DEFAULT_META.canonical,
        description: DEFAULT_META.description,
        inLanguage: "ru-RU",
        potentialAction: {
          "@type": "SearchAction",
          target: `${DEFAULT_META.canonical}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI-автоматизация маркетинга и продаж",
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: DEFAULT_META.canonical,
        },
        serviceType: "AI Automation",
        description:
          "Разработка и внедрение AI-ботов, ассистентов и автоматизации для отделов маркетинга, продаж и клиентского сервиса.",
        areaServed: {
          "@type": "Country",
          name: "Russia",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Тарифы UVDigital",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Внедрение AI-бота",
              priceCurrency: "RUB",
              price: "60000",
              description: "Анализ, прототипирование, разработка и запуск AI-бота под задачу бизнеса.",
            },
            {
              "@type": "Offer",
              name: "Поддержка и развитие",
              priceCurrency: "RUB",
              price: "15000",
              description: "Мониторинг, аналитика, оптимизация сценариев, обучение команды.",
            },
          ],
        },
      },
    ];

    const scriptId = "uvdigital-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);

    return () => {
      script?.parentElement?.removeChild(script);
    };
  }, []);

  return null;
}
