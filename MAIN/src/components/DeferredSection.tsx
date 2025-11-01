import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";

type DeferredSectionProps = PropsWithChildren<{
  fallback?: ReactNode;
  rootMargin?: string;
}>;

export function DeferredSection({
  children,
  fallback = null,
  rootMargin = "200px",
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef}>
      {isVisible ? children : fallback}
    </div>
  );
}
