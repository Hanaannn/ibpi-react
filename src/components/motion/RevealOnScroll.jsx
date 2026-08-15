import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Fades and slides content up once it scrolls into view. Runs once per
 * element (viewport.once) so re-scrolling past a section doesn't replay
 * the animation and feel gimmicky.
 */
export default function RevealOnScroll({
  children,
  as = "div",
  delay = 0,
  y = 28,
  duration = 0.65,
  className,
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
