import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEOHead({
  title = '50 вариантов ботов для бизнеса | Готовые решения автоматизации',
  description = 'Полный каталог из 50+ готовых ботов для автоматизации бизнеса. Примеры внедрения, расчет ROI, стоимость разработки и пошаговый план запуска. Боты для e-commerce, поддержки клиентов, продаж, маркетинга и HR.',
  keywords = 'боты для бизнеса, чат-боты, автоматизация бизнеса, бот-консультант, telegram бот, whatsapp бот, автоматизация продаж, автоматизация поддержки, ROI бота, стоимость бота, внедрение чат-бота, бизнес-автоматизация',
  canonicalUrl = 'https://yoursite.com',
  ogImage = 'https://yoursite.com/og-image.jpg',
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Установка title
    document.title = title;

    // Функция для обновления или создания meta тега
    const updateMetaTag = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Основные мета-теги
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#3b82f6');

    // Open Graph мета-теги (для социальных сетей)
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:locale', 'ru_RU', 'property');
    updateMetaTag('og:site_name', '50 вариантов ботов для бизнеса', 'property');

    // Twitter Card мета-теги
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Дополнительные мета-теги для SEO
    updateMetaTag('author', 'Бот-эксперты');
    updateMetaTag('language', 'Russian');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');

    // Мета-теги для Яндекса
    updateMetaTag('yandex-verification', 'YOUR_YANDEX_VERIFICATION_CODE');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Структурированные данные JSON-LD
    const defaultStructuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${canonicalUrl}/#website`,
          'url': canonicalUrl,
          'name': '50 вариантов ботов для бизнеса',
          'description': description,
          'inLanguage': 'ru-RU',
          'publisher': {
            '@type': 'Organization',
            'name': '50 вариантов ботов для бизнеса',
          }
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}/#webpage`,
          'url': canonicalUrl,
          'name': title,
          'description': description,
          'isPartOf': {
            '@id': `${canonicalUrl}/#website`
          },
          'inLanguage': 'ru-RU',
          'potentialAction': {
            '@type': 'ReadAction',
            'target': [canonicalUrl]
          }
        },
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}/#article`,
          'headline': title,
          'description': description,
          'author': {
            '@type': 'Organization',
            'name': 'Бот-эксперты'
          },
          'publisher': {
            '@type': 'Organization',
            'name': '50 вариантов ботов для бизнеса',
          },
          'articleSection': 'Бизнес-автоматизация',
          'keywords': keywords,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}/#webpage`
          }
        },
        {
          '@type': 'ItemList',
          'name': 'Каталог ботов для бизнеса',
          'description': '50+ готовых решений для автоматизации бизнес-процессов',
          'numberOfItems': 50,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Боты для E-commerce',
              'description': 'Автоматизация интернет-магазинов и онлайн-продаж'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Боты для поддержки клиентов',
              'description': 'Автоматизация клиентского сервиса 24/7'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Боты для продаж и маркетинга',
              'description': 'Генерация лидов и автоматизация маркетинга'
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': 'Боты для внутренних процессов',
              'description': 'Автоматизация HR, документооборота и управления'
            }
          ]
        },
        {
          '@type': 'HowTo',
          'name': 'Как запустить бот для бизнеса',
          'description': 'Пошаговый план запуска бота за 7 этапов',
          'step': [
            {
              '@type': 'HowToStep',
              'position': 1,
              'name': 'Аудит процессов',
              'text': 'Анализ бизнес-процессов и выявление задач для автоматизации'
            },
            {
              '@type': 'HowToStep',
              'position': 2,
              'name': 'Выбор платформы',
              'text': 'Определение оптимальных каналов коммуникации с клиентами'
            },
            {
              '@type': 'HowToStep',
              'position': 3,
              'name': 'Проектирование',
              'text': 'Создание сценариев диалогов и user flow'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Сколько стоит разработка бота для бизнеса?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Стоимость разработки бота варьируется от 50 000 до 500 000 рублей в зависимости от сложности. Простые боты стоят 50-150 тыс. руб., средней сложности - 150-300 тыс. руб., сложные enterprise-решения - от 300 тыс. руб.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Сколько времени занимает разработка бота?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Разработка простого бота занимает 2-4 недели, бота средней сложности - 1-2 месяца, сложного решения - 2-4 месяца.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Какой ROI можно получить от внедрения бота?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'ROI от внедрения бота варьируется от 200% до 500% в год. Боты помогают сократить нагрузку на поддержку на 60-80%, увеличить конверсию на 25-40% и снизить операционные расходы на 30-50%.'
              }
            }
          ]
        }
      ]
    };

    const dataToUse = structuredData || defaultStructuredData;

    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(dataToUse);

    // Добавление языка к html элементу
    document.documentElement.lang = 'ru';

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null;
}
