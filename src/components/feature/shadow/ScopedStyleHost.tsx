import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ScopedStyleHostProps = PropsWithChildren<{
  styles: string;
  fallback?: ReactNode;
  scopeId?: string;
}>;

declare global {
  interface Window {
    __SCOPED_ROOTS__?: Record<string, HTMLElement>;
  }
}

function registerScopedRoot(scopeId: string | undefined, element: HTMLElement | null) {
  if (!scopeId) return;
  window.__SCOPED_ROOTS__ = window.__SCOPED_ROOTS__ || {};
  if (element) {
    window.__SCOPED_ROOTS__[scopeId] = element;
  } else {
    delete window.__SCOPED_ROOTS__?.[scopeId];
  }
}

export function ScopedStyleHost({ styles, children, fallback = null, scopeId }: ScopedStyleHostProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hostRef.current) {
      return;
    }

    const shadow = hostRef.current.attachShadow({ mode: "open" });
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    shadow.appendChild(styleEl);

    const container = document.createElement("div");
    if (scopeId) {
      container.setAttribute("data-scoped-root", scopeId);
    }
    shadow.appendChild(container);
    containerRef.current = container;

    const cloneClassesAndAttributes = () => {
      if (!containerRef.current) return;
      containerRef.current.className = document.documentElement.className;
      Array.from(document.documentElement.attributes).forEach((attr) => {
        containerRef.current?.setAttribute(attr.name, attr.value);
      });
    };

    // синхронизуем классы/атрибуты html внутри shadow root,
    // чтобы работали темы (light/dark) и другие глобальные классы
    cloneClassesAndAttributes();

    const observer = new MutationObserver(cloneClassesAndAttributes);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "data-mode"],
    });
    setPortalTarget(container);

    registerScopedRoot(scopeId, container);

    return () => {
      observer.disconnect();
      setPortalTarget(null);
      containerRef.current = null;
      registerScopedRoot(scopeId, null);
      while (shadow.firstChild) {
        shadow.removeChild(shadow.firstChild);
      }
    };
  }, [styles]);

  return <div ref={hostRef}>{portalTarget ? createPortal(children, portalTarget) : fallback}</div>;
}
