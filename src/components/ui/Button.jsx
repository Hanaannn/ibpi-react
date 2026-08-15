import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.js";

const VARIANTS = {
  primary:
    "bg-amber-500 text-graphite-950 hover:bg-amber-400 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset]",
  secondary:
    "bg-transparent text-graphite-900 border border-graphite-900/20 hover:border-graphite-900/40 hover:bg-graphite-900/[0.03]",
  "secondary-dark":
    "bg-transparent text-paper-50 border border-paper-50/25 hover:border-paper-50/50 hover:bg-paper-50/[0.06]",
  ghost: "bg-transparent text-graphite-900 hover:text-amber-600",
};

/**
 * Polymorphic action element. Pass `as="a"` + `href` for links,
 * or leave as the default `button` for form actions.
 */
export default function Button({
  as = "button",
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...props
}) {
  const MotionTag = useMemo(
    () => (typeof as === "string" ? motion[as] ?? motion.button : motion(as)),
    [as]
  );

  return (
    <MotionTag
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3",
        "font-medium text-sm tracking-wide transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </MotionTag>
  );
}
