import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./variants.js";

/** Parent: animates its direct motion children in sequence on scroll-into-view. */
export function StaggerGroup({ children, className, ...props }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Child: pairs with StaggerGroup via shared variants. */
export function StaggerItem({ children, className, ...props }) {
  return (
    <motion.div variants={staggerItem} className={className} {...props}>
      {children}
    </motion.div>
  );
}
