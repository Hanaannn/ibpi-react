import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Button from "../components/ui/Button.jsx";
import CornerFrame from "../components/ui/CornerFrame.jsx";
import DecodeText from "../components/motion/DecodeText.jsx";
import SitePlan from "../assets/illustrations/SitePlan.jsx";
import { SITE } from "../constants/site.js";
import { PAGE_LOADER_DURATION } from "../constants/motion.js";
import { scrollToId } from "../utils/scrollToId.js";

const HEADLINE_LINES = [
  "We Build More,",
  "Than Just Buildings.",
  "We Build Trust.",
];

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  // Hero mounts immediately (hidden behind the loader), so its entrance
  // animations need this offset — otherwise they'd finish playing before
  // the loader even fades away. Skipped for reduced-motion, since
  // usePageLoader skips the loader entirely for those visitors too.
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const START = prefersReducedMotion ? 0 : PAGE_LOADER_DURATION / 1000;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-graphite-950 pb-24 pt-32 text-paper-50 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: START, ease: EASE }}
          >
            <Eyebrow tone="light">Kontraktor Terpercaya Sejak {SITE.foundedYear}</Eyebrow>
          </motion.div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            {HEADLINE_LINES.map((line, index) => {
              const lineDelay = START + 0.25 + index * 0.25;
              return (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: lineDelay, ease: EASE }}
                  className="block"
                >
                  <DecodeText text={line} delay={lineDelay + 0.05} duration={1200} />
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: START + 0.55, ease: EASE }}
            className="mt-7 max-w-md text-base leading-relaxed text-paper-100/60"
          >
            Kami adalah perusahaan konstruksi yang membangun rumah, kos-kosan, gudang, dan
            hangar sejak tahun {SITE.foundedYear} — dari perencanaan hingga serah terima.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: START + 0.7, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              as="a"
              href="#contact"
              icon={ArrowRight}
              onClick={(event) => {
                event.preventDefault();
                scrollToId("contact");
              }}
            >
              Konsultasi Proyek
            </Button>
            <Button
              as="a"
              href={`tel:${SITE.phoneHref}`}
              variant="secondary-dark"
              icon={PhoneCall}
              iconPosition="left"
            >
              {SITE.phone}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: START + 0.3, ease: EASE }}
          className="relative mx-auto w-full max-w-md"
        >
          <CornerFrame>
            <div className="rounded-2xl border border-paper-50/10 bg-graphite-900/60 p-6 shadow-card-dark backdrop-blur-sm">
              <SitePlan className="h-auto w-full" />
            </div>
          </CornerFrame>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 -top-6 flex items-center gap-2 rounded-full border border-paper-50/10 bg-graphite-900/90 px-4 py-2 shadow-card-dark backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="font-mono text-[11px] uppercase tracking-wide text-paper-100/80">
              Denah Lokasi Proyek
            </span>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: START + 1 }}
        className="mt-20 flex justify-center"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-px bg-gradient-to-b from-amber-500 to-transparent"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
