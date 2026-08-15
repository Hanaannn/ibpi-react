import { AnimatePresence, motion } from "framer-motion";
import logoMark from "../../assets/Logo.png";

const BEAT_TIMES = [0, 0.15, 0.35, 0.55, 0.75, 1];
const BEAT_EASE = ["easeOut", "easeOut", "easeIn", "easeOut", "easeIn"];

export default function PageLoader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-graphite-950"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <motion.div
              aria-hidden="true"
              className="absolute inset-[-14px] rounded-full bg-amber-500/40 blur-xl"
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.9, 0.15, 0.6, 0.1, 0.1],
                scale: [0.8, 1, 0.85, 0.95, 0.85, 0.85],
              }}
              transition={{
                duration: 1.4,
                times: BEAT_TIMES,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: BEAT_EASE,
              }}
            />

            <motion.img
              src={logoMark}
              alt="Inti Bangun Perkasa Indonesia"
              className="relative h-12 w-12 object-contain"
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{
                opacity: [0, 1, 0.45, 0.85, 0.45, 0.45],
                scale: [0.92, 1, 0.97, 1, 0.97, 0.97],
              }}
              transition={{
                duration: 1.4,
                times: BEAT_TIMES,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: BEAT_EASE,
              }}
            />
          </div>

          <div className="h-px w-32 overflow-hidden bg-paper-50/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-amber-500"
              style={{ willChange: "transform" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}