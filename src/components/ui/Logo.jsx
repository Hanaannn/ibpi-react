import { cn } from "../../utils/cn.js";
import logoMark from "../../assets/Logo.png";

export default function Logo({ tone = "dark", iconOnly = false, className }) {
  const textTone = tone === "light" ? "text-paper-50" : "text-graphite-900";

  if (iconOnly) {
    return (
      <img
        src={logoMark}
        alt="Inti Bangun Perkasa Indonesia"
        className={cn("h-8 w-8 object-contain", className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img src={logoMark} alt="Inti Bangun Perkasa Indonesia" className="h-9 w-9 shrink-0 object-contain" />
      <span className={cn("font-display text-[15px] font-semibold leading-none tracking-tight text-blueprint-500")}>
        Inti Bangun
        <span className="block text-[11px] font-medium tracking-[0.18em] text-blueprint-500 mt-0.5">
          PERKASA INDONESIA
        </span>
      </span>
    </div>
  );
}