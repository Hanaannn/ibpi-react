import Container from "../components/ui/Container.jsx";
import MarqueeRow from "../components/ui/MarqueeRow.jsx";
import RevealOnScroll from "../components/motion/RevealOnScroll.jsx";
import { PARTNERS } from "../data/partners.js";

export default function Partners() {
  return (
    <section className="border-y border-graphite-900/8 bg-paper-100/60 py-14">
      <Container>
        <RevealOnScroll className="mb-8 text-center font-mono text-xs uppercase tracking-[0.24em] text-graphite-700/50">
          Dipercaya oleh berbagai institusi
        </RevealOnScroll>
      </Container>

      <MarqueeRow
        items={PARTNERS}
        renderItem={(partner) => (
          <span className="font-display text-2xl font-semibold tracking-tight text-graphite-900/25 transition-colors duration-300 hover:text-graphite-900/60 sm:text-3xl">
            {partner.name}
          </span>
        )}
      />
    </section>
  );
}
