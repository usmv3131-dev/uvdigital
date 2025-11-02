import { memo, useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: "website" | "article" | "product";
  locale?: string;
}

/**
 * SEO Head Component
 * Оптимизировано для поисковых систем и AI-парсинга
 * Включает: Meta tags, Open Graph, Twitter Card, Schema.org
 */
const YANDEX_VERIFICATION = import.meta.env.VITE_YANDEX_VERIFICATION ?? "";
const GOOGLE_VERIFICATION = import.meta.env.VITE_GOOGLE_VERIFICATION ?? "";

function SEOHeadComponent({
  title = "Content AI — AI-контент бот для салонов красоты | Автоматизация SMM",
  description = "Content AI создаёт персональный контент-план и автоматически выпускает посты, Stories и Reels для салонов красоты. Интеграция с Beauty AI, аналитика эффективности и оптимизация контента.",
  keywords = "Content AI, AI-контент, генерация контента, SMM, Beauty AI, автоворонки, контент бот",
  ogImage = "https://uvdigital.ru/assets/og-contentai.jpg",
  canonicalUrl = "https://uvdigital.ru/contentai",
  type = "website",
  locale = "ru_RU",
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Content AI Team");
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("bingbot", "index, follow");
    
    // Viewport (if not in HTML)
    updateMetaTag("viewport", "width=device-width, initial-scale=1, maximum-scale=5");
    
    // Language
    updateMetaTag("language", "ru-RU");

    // Open Graph
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:alt", "Content AI — AI-контент бот для салонов красоты", true);
    updateMetaTag("og:locale", locale, true);
    updateMetaTag("og:site_name", "Content AI", true);
    updateMetaTag("og:image:secure_url", ogImage, true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:image:alt", "Content AI — AI-контент бот для салонов красоты");
    
    // Additional SEO
    updateMetaTag("theme-color", "#3b82f6");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "default");
    updateMetaTag("format-detection", "telephone=yes");
    if (GOOGLE_VERIFICATION) {
      updateMetaTag("google-site-verification", GOOGLE_VERIFICATION);
    }
    if (YANDEX_VERIFICATION) {
      updateMetaTag("yandex-verification", YANDEX_VERIFICATION);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
    
    // Alternate for locale
    let alternate = document.querySelector('link[rel="alternate"][hreflang="ru"]');
    if (!alternate) {
      alternate = document.createElement("link");
      alternate.setAttribute("rel", "alternate");
      alternate.setAttribute("hreflang", "ru");
      document.head.appendChild(alternate);
    }
    alternate.setAttribute("href", canonicalUrl);

    const html = document.documentElement;
    if (html) {
      html.lang = locale.split("_")[0]?.toLowerCase() ?? "ru";
    }

  }, [title, description, keywords, ogImage, canonicalUrl, type, locale]);

  return null;
}

export const SEOHead = memo(SEOHeadComponent);

/**
 * Structured Data (JSON-LD) Component
 * Schema.org разметка для поисковых систем и AI
 */
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Content AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://uvdigital.ru/contentai",
    "description": "AI-контент бот для салонов красоты. Автоматическая генерация контента, создание контент-плана, интеграция с Beauty AI",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "RUB",
      "lowPrice": "20000",
      "highPrice": "45000",
      "priceSpecification": [
        {
          "@type": "UnitPriceSpecification",
          "price": "45000",
          "priceCurrency": "RUB",
          "name": "Настройка + Первый месяц",
          "description": "Полная настройка Content AI под ваш салон"
        },
        {
          "@type": "UnitPriceSpecification",
          "price": "20000",
          "priceCurrency": "RUB",
          "name": "Ежемесячная подписка",
          "description": "Постоянная генерация контента и ведение соцсетей"
        }
      ]
    },
    "featureList": [
      "Контент-план на месяц",
      "Настройка под бренд",
      "Интеграция с Beauty AI",
      "Анализ эффективности",
      "Генерация постов, Stories, Reels",
      "Оптимизация контента"
    ],
    "screenshot": "https://uvdigital.ru/assets/screenshots/contentai-hero.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Content Generation",
    "provider": {
      "@type": "Organization",
      "name": "Content AI",
      "url": "https://contentai.beauty"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Russia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Тарифы Content AI",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Настройка + Первый месяц",
            "description": "Анализ бренда, создание контент-стратегии, обучение AI, интеграция с Beauty AI, контент-план"
          },
          "price": "45000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ежемесячная подписка",
            "description": "Ежедневная генерация контента, посты, Stories, Reels, анализ эффективности"
          },
          "price": "20000",
          "priceCurrency": "RUB"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое Content AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Content AI — это AI-контент бот для салонов красоты, который автоматически создает контент-план, генерирует посты, Stories и Reels, анализирует эффективность и оптимизирует стратегию контента."
        }
      },
      {
        "@type": "Question",
        "name": "Как работает интеграция с Beauty AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Content AI соединяется с Beauty AI для доступа к данным о клиентах, записях и услугах. Это позволяет создавать персонализированный контент, основанный на реальных данных вашего салона."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит Content AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Настройка + первый месяц: 45 000₽ (разовый платеж). Ежемесячная подписка: 20 000₽/месяц. При годовой оплате действует скидка 20%."
        }
      },
      {
        "@type": "Question",
        "name": "Для каких соцсетей подходит Content AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Content AI генерирует контент для Instagram, VK, Telegram и других площадок. Поддерживаются все популярные форматы: посты, Stories, Reels."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://contentai.beauty"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Как это работает",
        "item": "https://contentai.beauty#how-it-works"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Возможности",
        "item": "https://contentai.beauty#features"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Тарифы",
        "item": "https://contentai.beauty#pricing"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Контакты",
        "item": "https://contentai.beauty#contact"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Content AI",
    "url": "https://contentai.beauty",
    "description": "AI-контент бот для салонов красоты",
    "inLanguage": "ru",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://contentai.beauty/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
