import { useEffect } from "react";

/**
 * Locks body scroll while `locked` is true. Used by the mobile menu and
 * service detail overlays so the page behind them doesn't scroll along.
 *
 * Also compensates for the scrollbar disappearing/reappearing (which
 * shifts the whole page horizontally by the scrollbar's width) by adding
 * matching right padding — otherwise anything with a shared layoutId
 * animating back onto the page (e.g. the service modal closing) lands
 * a few pixels off from its target and visibly "jumps".
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const currentPaddingRight = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [locked]);
}
