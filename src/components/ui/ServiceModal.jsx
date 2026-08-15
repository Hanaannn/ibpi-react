import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { ILLUSTRATIONS } from "../../assets/illustrations/index.js";
import CornerFrame from "./CornerFrame.jsx";
import Badge from "./Badge.jsx";
import Eyebrow from "./Eyebrow.jsx";
import Button from "./Button.jsx";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";
import { BUILD_PROCESS } from "../../data/services.js";
import { scrollToId } from "../../utils/scrollToId.js";
import { useProjectInquiry } from "../../context/ProjectInquiryContext.jsx";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Detail popup for a service card. Shares layoutId with its ServiceCard
 * counterpart so framer-motion morphs the card's size/position into the
 * modal instead of just fading a new element in.
 */
export default function ServiceModal({ service, onClose }) {
  useLockBodyScroll(true);
  const { requestProjectType } = useProjectInquiry();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const Illustration = ILLUSTRATIONS[service.illustration];

  const handleCta = () => {
    requestProjectType(service.title);
    onClose();
    // Let the close animation start before the page scrolls.
    setTimeout(() => scrollToId("contact"), 150);
  };

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
      <motion.article
        layoutId={`service-container-${service.id}`}
        onClick={(event) => event.stopPropagation()}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="my-auto flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-paper-50/10 bg-paper-50 shadow-card-dark sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`service-modal-title-${service.id}`}
      >
        <div className="relative">
          <CornerFrame className="m-5 mb-0" tone="blueprint">
            <motion.div
              layoutId={`service-image-${service.id}`}
              className="aspect-[10/7] overflow-hidden rounded-xl bg-paper-100"
            >
              <Illustration className="h-full w-full" />
            </motion.div>
          </CornerFrame>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail layanan"
            className="absolute right-8 top-8 flex h-9 w-9 items-center justify-center rounded-full border border-graphite-900/15 bg-paper-50 text-graphite-900 transition-colors hover:border-amber-500 hover:text-amber-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <motion.div layoutId={`service-eyebrow-${service.id}`}>
            <Eyebrow>{service.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h3
            layoutId={`service-title-${service.id}`}
            id={`service-modal-title-${service.id}`}
            className="mt-4 font-display text-2xl font-semibold leading-snug text-graphite-900 sm:text-3xl"
          >
            {service.title}
          </motion.h3>
          <motion.p
            layoutId={`service-description-${service.id}`}
            className="mt-3 text-sm leading-relaxed text-graphite-700/75 sm:text-base"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          >
            <p className="mt-4 text-sm leading-relaxed text-graphite-700/75">{service.detail}</p>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-graphite-900/8 pt-5">
              {service.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="mt-8 border-t border-graphite-900/8 pt-6">
              <Eyebrow>Proses Kerja</Eyebrow>
              <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                {BUILD_PROCESS.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="font-mono text-xs text-amber-600">0{index + 1}</span>
                    <div>
                      <p className="font-display text-sm font-semibold text-graphite-900">{step.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-graphite-700/70">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <Button className="mt-8 w-full sm:w-auto" onClick={handleCta}>
              Konsultasi Proyek Ini
            </Button>
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
}
