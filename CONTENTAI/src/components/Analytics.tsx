import { memo, useEffect } from "react";

/**
 * Analytics Component
 * Отслеживание для Google Analytics, Yandex Metrica и других
 * 
 * Подключите после запуска сайта
 */

// Google Analytics 4
export const GoogleAnalytics = memo(function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !measurementId) return;

    // Load gtag.js
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });

    // Cleanup
    return () => {
      script.remove();
    };
  }, [measurementId]);

  return null;
});

// Yandex Metrica
export const YandexMetrica = memo(function YandexMetrica({ counterId }: { counterId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !counterId) return;

    // Initialize Yandex Metrica
    (function(m: any, e: any, t: any, r: any, i: any, k: any, a: any) {
      m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
      };
      m[i].l = 1 * new Date() as any;
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode?.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    (window as any).ym(counterId, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }, [counterId]);

  return (
    <noscript>
      <div>
        <img 
          src={`https://mc.yandex.ru/watch/${counterId}`} 
          style={{ position: 'absolute', left: '-9999px' }} 
          alt="" 
        />
      </div>
    </noscript>
  );
});

// Facebook Pixel (опционально)
export const FacebookPixel = memo(function FacebookPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !pixelId) return;

    // Facebook Pixel Code
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window as any).fbq('init', pixelId);
    (window as any).fbq('track', 'PageView');
  }, [pixelId]);

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
});

// VK Pixel (опционально)
export const VKPixel = memo(function VKPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !pixelId) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("${pixelId}"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
    `;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pixelId]);

  return (
    <noscript>
      <img 
        src={`https://vk.com/rtrg?p=${pixelId}`} 
        style={{ position: 'fixed', left: '-999px' }} 
        alt=""
      />
    </noscript>
  );
});

/**
 * Unified Analytics Component
 * Включите все нужные трекеры
 */
interface AnalyticsConfig {
  googleAnalytics?: string;
  yandexMetrica?: string;
  facebookPixel?: string;
  vkPixel?: string;
}

export const Analytics = memo(function Analytics({
  googleAnalytics,
  yandexMetrica,
  facebookPixel,
  vkPixel,
}: AnalyticsConfig) {
  return (
    <>
      {googleAnalytics && <GoogleAnalytics measurementId={googleAnalytics} />}
      {yandexMetrica && <YandexMetrica counterId={yandexMetrica} />}
      {facebookPixel && <FacebookPixel pixelId={facebookPixel} />}
      {vkPixel && <VKPixel pixelId={vkPixel} />}
    </>
  );
});

/**
 * Event Tracking Helpers
 */
export const trackEvent = {
  // Google Analytics
  ga: (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  },

  // Yandex Metrica
  ym: (counterId: string, eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(counterId, 'reachGoal', eventName, params);
    }
  },

  // Facebook Pixel
  fb: (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, params);
    }
  },

  // Universal tracker (sends to all)
  all: (eventName: string, params?: Record<string, any>) => {
    trackEvent.ga(eventName, params);
    // Add Yandex and FB if needed
  }
};

/**
 * Usage Example:
 * 
 * // In App.tsx:
 * import { Analytics } from './components/Analytics';
 * 
 * <Analytics 
 *   googleAnalytics="G-XXXXXXXXXX"
 *   yandexMetrica="12345678"
 * />
 * 
 * // Track events:
 * import { trackEvent } from './components/Analytics';
 * 
 * const handleSubmit = () => {
 *   trackEvent.ga('form_submit', { form_name: 'contact' });
 *   trackEvent.ym('12345678', 'form_submit');
 * };
 */

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    ym?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default Analytics;
