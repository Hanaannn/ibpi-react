import { cn } from "../../utils/cn.js";

export default function FormField({
  as = "input",
  label,
  name,
  error,
  className,
  ...props
}) {
  const Tag = as;

  return (
    <label className={cn("block", className)}>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-100/50">
        {label}
      </span>
      <Tag
        name={name}
        id={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "mt-2 w-full border-b bg-transparent py-2.5 text-sm text-paper-50 placeholder:text-paper-100/30",
          "transition-colors duration-200 focus:outline-none",
          error ? "border-red-400/70" : "border-paper-50/20 focus:border-amber-500",
          as === "textarea" && "resize-none",
          as === "select" && "appearance-none [&>option]:text-graphite-900"
        )}
        {...props}
      />
      {error && (
        <span id={`${name}-error`} className="mt-1.5 block text-xs text-red-400">
          {error}
        </span>
      )}
    </label>
  );
}
