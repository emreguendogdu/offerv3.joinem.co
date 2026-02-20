import { useEffect, useRef, useState } from 'react';

type UseRevealOnInViewOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  hiddenClassName?: string;
  visibleClassName?: string;
};

const DEFAULT_HIDDEN_CLASS = 'opacity-0 translate-y-[150px]';
const DEFAULT_VISIBLE_CLASS = 'opacity-100 translate-y-0';

export function useRevealOnInView<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = '0px',
  once = true,
  hiddenClassName = `${DEFAULT_HIDDEN_CLASS} motion-reduce:opacity-100 motion-reduce:translate-y-0`,
  visibleClassName = DEFAULT_VISIBLE_CLASS,
}: UseRevealOnInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPainted, setHasPainted] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setHasPainted(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !hasPainted || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (once) {
            if (entry.isIntersecting) {
              window.requestAnimationFrame(() => {
                setIsVisible(true);
              });
              observer.unobserve(entry.target);
            }
            return;
          }

          window.requestAnimationFrame(() => {
            setIsVisible(entry.isIntersecting);
          });
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasPainted, isVisible, once, rootMargin, threshold]);

  return {
    ref,
    isVisible,
    revealClassName: isVisible ? visibleClassName : hiddenClassName,
  };
}
