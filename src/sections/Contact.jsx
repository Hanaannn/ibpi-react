import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import RevealOnScroll from "../components/motion/RevealOnScroll.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import { SITE } from "../constants/site.js";

const INFO_ITEMS = [
  { icon: MapPin, label: "Lokasi", value: SITE.address },
  { icon: Phone, label: "Telepon", value: SITE.phone },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Clock, label: "Jam Operasional", value: "Senin – Sabtu, 08.00 – 17.00" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-paper-100/60 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <RevealOnScroll>
          <Eyebrow>Hubungi Kami</Eyebrow>
          <h2 className="mt-5 max-w-sm font-display text-3xl font-semibold leading-tight text-graphite-900 text-balance sm:text-4xl">
            Mari diskusikan rencana bangunan Anda.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-graphite-700/75">
            Kirimkan detail proyek Anda dan tim kami akan menghubungi kembali untuk
            menjadwalkan survei dan konsultasi awal tanpa biaya.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-graphite-900/10 bg-paper-50 text-amber-600">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-700/50">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-graphite-900">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <ContactForm />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
