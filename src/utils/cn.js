import clsx from "clsx";

/**
 * Thin wrapper around clsx so every component imports class-merging
 * from one place. Swap in tailwind-merge later without touching call sites.
 */
export function cn(...inputs) {
  return clsx(...inputs);
}
