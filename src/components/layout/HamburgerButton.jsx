import { cn } from "../../utils/cn.js";

export default function HamburgerButton({ open, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
      aria-expanded={open}
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "border border-paper-50/20 transition-colors duration-200 hover:border-amber-500 lg:hidden",
        className
      )}
    >
      <span className="relative block h-3.5 w-4">
        <span
          className={cn(
            "absolute left-0 top-0 h-[1.5px] w-full bg-paper-50 transition-all duration-300 ease-out",
            open && "top-1/2 -translate-y-1/2 rotate-45"
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-paper-50 transition-opacity duration-200",
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "absolute bottom-0 left-0 h-[1.5px] w-full bg-paper-50 transition-all duration-300 ease-out",
            open && "bottom-1/2 translate-y-1/2 -rotate-45"
          )}
        />
      </span>
    </button>
  );
}
