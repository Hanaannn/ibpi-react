import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "../../hooks/useScrolled.js";

export default function BackToTopButton() {
  const visible = useScrolled(560);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          aria-label="Kembali ke atas"
          className="fixed bottom-7 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-graphite-900/10 bg-paper-50 text-graphite-900 shadow-card transition-colors duration-200 hover:border-amber-500 hover:text-amber-600 sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
