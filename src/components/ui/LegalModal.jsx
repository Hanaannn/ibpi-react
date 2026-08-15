import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import CornerFrame from "../ui/CornerFrame.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";
import { LEGAL_CONTENT } from "../../data/legalContent.js";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Opens like a rolled blueprint sheet being unrolled downward from a
 * "roller bar" at the top — a clip-path reveal rather than a scale, so
 * the text doesn't visibly squash while it animates.
 */
export default function LegalModal({ docId, onClose }) {
  useLockBodyScroll(true);
  const doc = LEGAL_CONTENT[docId];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!doc) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-graphite-950/70 p-4 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="my-auto flex w-full max-w-xl flex-col items-center sm:max-w-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Roller bar — the "tube" the sheet unrolls from */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0.4 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="z-10 flex h-4 w-[92%] items-center justify-center gap-1.5 rounded-full bg-graphite-800 shadow-card-dark"
          aria-hidden="true"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-paper-50/25" />
          ))}
        </motion.div>

        {/* The sheet itself — reveals top-to-bottom via clip-path, like unrolling */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="relative -mt-1 w-full overflow-hidden rounded-b-2xl rounded-t-sm border border-paper-50/10 bg-graphite-950 shadow-card-dark"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`legal-modal-title-${docId}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-30" aria-hidden="true" />

          <div className="relative max-h-[75vh] overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-paper-50/10 bg-graphite-950/95 px-6 pb-5 pt-6 backdrop-blur-sm sm:px-8">
              <div>
                <Eyebrow tone="light">Dokumen</Eyebrow>
                <h2
                  id={`legal-modal-title-${docId}`}
                  className="mt-3 font-display text-2xl font-semibold text-paper-50 sm:text-3xl"
                >
                  {doc.title}
                </h2>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-paper-100/40">
                  {doc.updated}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup dokumen"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper-50/15 text-paper-100/70 transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8">
              {doc.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-display text-sm font-semibold text-amber-500">{section.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-100/65">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
