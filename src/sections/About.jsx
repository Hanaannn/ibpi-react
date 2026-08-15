import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import StatCounter from "../components/ui/StatCounter.jsx";
import RevealOnScroll from "../components/motion/RevealOnScroll.jsx";
import { StaggerGroup, StaggerItem } from "../components/motion/StaggerGroup.jsx";
import { STATS } from "../data/stats.js";
import { SITE } from "../constants/site.js";

export default function About() {
  return (
    <section id="about" className="relative bg-paper-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <RevealOnScroll>
            <Eyebrow>Semua Tentang Kami</Eyebrow>
            <h2 className="mt-5 max-w-lg font-display text-3xl font-semibold leading-tight text-graphite-900 text-balance sm:text-4xl">
              Mitra konstruksi yang mengutamakan mutu, jadwal, dan komunikasi yang jelas.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-graphite-700/80">
              {SITE.legalName} berdiri sejak tahun {SITE.foundedYear}, melayani pembangunan
              rumah tinggal, kos-kosan, gudang, dan hangar. Setiap proyek dikawal oleh tim
              perencana dan pengawas lapangan sendiri, sehingga mutu struktur dan ketepatan
              jadwal tetap terjaga dari awal hingga serah terima kunci.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat) => (
            <StaggerItem key={stat.id}>
              <StatCounter
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                linkTo={stat.linkTo}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
