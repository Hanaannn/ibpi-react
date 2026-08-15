import { useEffect, useState } from "react";

/**
 * Watches a list of section ids and reports whichever one currently
 * occupies the middle band of the viewport, so the navbar can highlight
 * the section the visitor is actually reading.
 */
export function useActiveSection(sectionIds, { rootMargin = "-45% 0px -45% 0px" } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
