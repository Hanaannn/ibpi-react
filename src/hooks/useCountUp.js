import { useEffect, useRef, useState } from "react";

const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

/**
 * Animates a number from 0 to `end` once the returned ref scrolls into view.
 * Runs a single time per mount — re-triggering on every scroll would feel
 * gimmicky rather than premium.
 */
export function useCountUp(end, { duration = 1400 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          setValue(end);
          observer.disconnect();
          return;
        }

        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          setValue(Math.round(end * easeOutQuint(progress)));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, value];
}
