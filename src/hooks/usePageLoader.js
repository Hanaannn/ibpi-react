import { useEffect, useState } from "react";
import { PAGE_LOADER_DURATION } from "../constants/motion.js";

/**
 * Keeps the entrance loader on screen just long enough to feel like a
 * deliberate transition rather than a layout flash — skipped entirely
 * for visitors who prefer reduced motion.
 */
export function usePageLoader(minDuration = PAGE_LOADER_DURATION) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setLoading(false);
      return undefined;
    }

    const timer = setTimeout(() => setLoading(false), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  return loading;
}
