import { ArrowUpRight } from "lucide-react";
import { useCountUp } from "../../hooks/useCountUp.js";
import { scrollToId } from "../../utils/scrollToId.js";

export default function StatCounter({ label, value, suffix = "", linkTo }) {
  const [ref, count] = useCountUp(value);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col justify-between gap-8 rounded-2xl border border-graphite-900/10 bg-paper-50 p-7 shadow-card transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(11,13,15,0.08),0_20px_44px_-16px_rgba(11,13,15,0.28)]"
    >
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-graphite-700/60">
        {label}
      </h3>

      <div className="flex items-end justify-between">
        <p className="font-display text-5xl font-semibold tabular-nums text-graphite-900 sm:text-6xl">
          {count}
          <span className="text-amber-500">{suffix}</span>
        </p>

        {linkTo && (
          <button
            type="button"
            onClick={() => scrollToId(linkTo)}
            className="mb-1 inline-flex items-center gap-1 rounded-full border border-graphite-900/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-graphite-700 transition-colors duration-200 hover:border-amber-500 hover:text-amber-600"
          >
            Detail
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        )}
      </div>
    </div>
  );
}
