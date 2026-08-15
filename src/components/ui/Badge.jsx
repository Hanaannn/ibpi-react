import { cn } from "../../utils/cn.js";

export default function Badge({ children, tone = "light", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide",
        tone === "light"
          ? "border-graphite-900/10 bg-graphite-900/[0.04] text-graphite-700"
          : "border-paper-50/15 bg-paper-50/5 text-paper-100",
        className
      )}
    >
      {children}
    </span>
  );
}
