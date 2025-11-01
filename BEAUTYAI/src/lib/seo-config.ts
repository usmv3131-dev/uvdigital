/**
 * SEO Configuration для Beauty AI
 * Централизованная конфигурация для лучшей поддержки и обновления
 */

export const seoConfig = {
  // Основная информация
  siteName: "Beauty AI",
  siteUrl: "https://beauty-ai.ru",
  defaultTitle: "Beauty AI - AI Администратор для Салонов Красоты | Запуск за 3 дня",
  defaultDescription:
    "AI-администратор для салонов красоты. Автоматическая запись клиентов 24/7, умные уведомления, интеграция с CRM. Запуск за 3 дня. Первый месяц 60 000₽, далее от 15 000₽/мес.",
  
  // Ключевые слова для SEO
  keywords: [
    "AI администратор салона",
    "автоматизация салона красоты",
    "чат-бот для записи",
    "AI для beauty",
    "запись клиентов онлайн",
    "CRM для салона",
    "автоматические уведомления",
    "Beauty AI",
    "AI агент для бизнеса",
    "автоматическая запись клиентов",
    "виртуальный администратор",
    "бот для салона красоты",
    "автоматизация записи",
    "AI чат-бот для бизнеса",
  ],
  
  // Open Graph изображение
  ogImage: {
    url: "https://beauty-ai.ru/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Beauty AI - AI Администратор для салонов красоты",
  },
  
  // Социальные сети (добавить когда появятся)
  social: {
    telegram: "",
    vk: "",
    instagram: "",
  },
  
  // Контактная информация
  contact: {
    email: "info@beauty-ai.ru",
    phone: "+7 (XXX) XXX-XX-XX",
  },
  
  // Локализация
  locale: "ru_RU",
  language: "ru",
  
  // Для structured data
  organization: {
    name: "Beauty AI",
    legalName: "Beauty AI",
    description: "AI-администратор для автоматизации салонов красоты",
    foundingDate: "2024",
    areaServed: "Russia",
  },
  
  // Pricing для schema
  pricing: {
    setup: {
      amount: 60000,
      currency: "RUB",
      description: "Установка и первый месяц работы",
    },
    monthly: {
      amount: 15000,
      currency: "RUB",
      description: "Ежемесячная подписка",
      billingPeriod: "P1M",
    },
  },
};

/**
 * Генератор keywords строки
 */
export function getKeywordsString(): string {
  return seoConfig.keywords.join(", ");
}

/**
 * Генератор полного title
 */
export function generateTitle(pageTitle?: string): string {
  if (!pageTitle) return seoConfig.defaultTitle;
  return `${pageTitle} | ${seoConfig.siteName}`;
}

/**
 * Генератор canonical URL
 */
export function generateCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${seoConfig.siteUrl}${cleanPath}`;
}
