/**
 * Smooth-scrolls to an in-page section, accounting for the fixed navbar
 * height so headings don't end up hidden behind it.
 */
export function scrollToId(id, offset = 84) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
