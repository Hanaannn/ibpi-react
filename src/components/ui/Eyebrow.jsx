import { cn } from "../../utils/cn.js";

export default function Eyebrow({ children, tone = "dark", className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em]",
        tone === "light" ? "text-paper-100/80" : "text-graphite-700/70",
        className
      )}
    >
      <span className="h-px w-9 bg-amber-500" aria-hidden="true" />
      {children}
    </div>
  );
}
