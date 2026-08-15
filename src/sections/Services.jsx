import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import ServiceCard from "../components/ui/ServiceCard.jsx";
import ServiceModal from "../components/ui/ServiceModal.jsx";
import RevealOnScroll from "../components/motion/RevealOnScroll.jsx";
import { StaggerGroup, StaggerItem } from "../components/motion/StaggerGroup.jsx";
import { SERVICES } from "../data/services.js";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="relative overflow-hidden bg-graphite-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-30" aria-hidden="true" />

      <Container className="relative">
        <RevealOnScroll className="mx-auto max-w-xl text-center">
          <Eyebrow tone="light" className="justify-center">
            Layanan Kami
          </Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-paper-50 text-balance sm:text-4xl">
            Tiga skala pekerjaan, satu standar mutu yang sama.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper-100/55">
            Dari hunian pribadi hingga fasilitas industri bentang lebar, setiap proyek
            direncanakan, dihitung, dan diawasi oleh tim yang sama.
          </p>
        </RevealOnScroll>

        <StaggerGroup className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard service={service} onSelect={setActiveService} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>

      <AnimatePresence>
        {activeService && (
          <ServiceModal key={activeService.id} service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
