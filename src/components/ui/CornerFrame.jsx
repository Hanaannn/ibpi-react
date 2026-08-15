import { cn } from "../../utils/cn.js";

const CORNERS = [
  "-top-2.5 -left-2.5 border-t-2 border-l-2",
  "-top-2.5 -right-2.5 border-t-2 border-r-2",
  "-bottom-2.5 -left-2.5 border-b-2 border-l-2",
  "-bottom-2.5 -right-2.5 border-b-2 border-r-2",
];

/**
 * Wraps its child with four L-shaped drafting-corner marks, echoing the
 * annotation marks on an architectural drawing. This is the page's single
 * recurring signature element — used only on featured imagery, not on
 * every card, so it stays meaningful rather than decorative noise.
 */
export default function CornerFrame({ children, tone = "amber", className }) {
  const toneClass = tone === "amber" ? "border-amber-500" : "border-blueprint-300";

  return (
    <div className={cn("relative", className)}>
      {children}
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn("pointer-events-none absolute h-6 w-6", position, toneClass)}
        />
      ))}
    </div>
  );
}
