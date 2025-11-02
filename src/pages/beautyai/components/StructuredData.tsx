import { useEffect } from "react";

/**
 * Structured Data для улучшения SEO и понимания нейросетями
 * Использует Schema.org разметку в формате JSON-LD
 */
export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Beauty AI",
      description:
        "AI-администратор для автоматизации салонов красоты. Запись клиентов, уведомления и консультации 24/7.",
      url: "https://beauty-ai.ru",
      logo: "https://beauty-ai.ru/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        availableLanguage: ["Russian"],
        areaServed: "RU",
      },
      sameAs: [
        // Добавить социальные сети когда появятся
      ],
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "AI Автоматизация для Салонов Красоты",
      provider: {
        "@type": "Organization",
        name: "Beauty AI",
      },
      areaServed: {
        "@type": "Country",
        name: "Russia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Beauty AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Установка и первый месяц работы AI агента",
              description:
                "Полная настройка AI администратора под ваш салон, интеграция с CRM, обучение агента, совместное сопровождение 30 дней",
            },
            price: "60000",
            priceCurrency: "RUB",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ежемесячная подписка AI агента",
              description:
                "Техническая поддержка, обновления AI модели, мониторинг и оптимизация",
            },
            price: "15000",
            priceCurrency: "RUB",
            billingDuration: "P1M",
          },
        ],
      },
    };

    // Software Application Schema
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Beauty AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Cloud",
      offers: {
        "@type": "Offer",
        price: "15000",
        priceCurrency: "RUB",
        billingDuration: "P1M",
      },
      description:
        "AI-администратор для салонов красоты с автоматической записью клиентов, уведомлениями и поддержкой 24/7",
      featureList: [
        "Автоматическая запись клиентов 24/7",
        "Интеграция с CRM системами (YClients, AmoCRM и другие)",
        "Умные уведомления и напоминания",
        "Естественное общение с клиентами",
        "Консультации и ответы на вопросы",
        "Настройка под любой салон красоты",
      ],
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько стоит Beauty AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Установка и первый месяц работы - 60 000₽. Это включает полную настройку, интеграцию с вашей CRM, обучение AI агента и совместное сопровождение. Далее ежемесячная подписка от 15 000₽/мес с технической поддержкой и обновлениями.",
          },
        },
        {
          "@type": "Question",
          name: "Как быстро можно запустить AI агента?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Запуск занимает всего 3 дня! За это время мы настроим AI под ваш салон, интегрируем с вашими системами и обучим агента работать с вашими клиентами.",
          },
        },
        {
          "@type": "Question",
          name: "Работает ли Beauty AI с моей CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да! Beauty AI интегрируется с популярными CRM системами: YClients, AmoCRM и другими. Также можем создать собственную базу клиентов, если вы пока не используете CRM.",
          },
        },
        {
          "@type": "Question",
          name: "Что умеет AI администратор?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI администратор автоматически записывает клиентов на удобное время, отправляет напоминания о визите, отвечает на частые вопросы, консультирует по услугам и работает 24/7 без выходных.",
          },
        },
        {
          "@type": "Question",
          name: "Нужны ли технические знания для работы с Beauty AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, технические знания не требуются. Мы полностью настроим систему под ваш салон, обучим AI и будем сопровождать вас в течение первого месяца. Вам нужно только принимать клиентов.",
          },
        },
      ],
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: "https://beauty-ai.ru",
        },
      ],
    };

    // Aggregate all schemas
    const schemas = [
      organizationSchema,
      serviceSchema,
      softwareSchema,
      faqSchema,
      breadcrumbSchema,
    ];

    // Remove existing script if present
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new script
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
