import { motion } from "framer-motion";
import { ILLUSTRATIONS } from "../../assets/illustrations/index.js";
import CornerFrame from "./CornerFrame.jsx";
import Badge from "./Badge.jsx";
import Eyebrow from "./Eyebrow.jsx";

export default function ServiceCard({ service, onSelect }) {
  const Illustration = ILLUSTRATIONS[service.illustration];

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(service);
    }
  };

  return (
    <motion.article
      layoutId={`service-container-${service.id}`}
      id={`service-${service.id}`}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={() => onSelect(service)}
      onKeyDown={handleKeyDown}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full scroll-mt-24 cursor-pointer flex-col overflow-hidden rounded-2xl border border-paper-50/10 bg-paper-50 text-left shadow-card-dark transition-transform duration-500 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2"
    >
      <CornerFrame className="m-5 mb-0" tone="blueprint">
        <motion.div layoutId={`service-image-${service.id}`} className="aspect-[10/7] overflow-hidden rounded-xl bg-paper-100">
          <Illustration className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        </motion.div>
      </CornerFrame>

      <div className="flex flex-1 flex-col p-7 mt-3">
        <motion.div layoutId={`service-eyebrow-${service.id}`}>
          <Eyebrow>{service.eyebrow}</Eyebrow>
        </motion.div>
        <motion.h3
          layoutId={`service-title-${service.id}`}
          className="mt-4 line-clamp-2 min-h-[3.5rem] font-display text-xl font-semibold leading-snug text-graphite-900"
        >
          {service.title}
        </motion.h3>
        <motion.p
          layoutId={`service-description-${service.id}`}
          className="mt-3 line-clamp-3 text-sm leading-relaxed text-graphite-700/75"
        >
          {service.description}
        </motion.p>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-graphite-900/8 pt-5">
          {service.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
