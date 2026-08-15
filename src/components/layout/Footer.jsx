import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import Container from "../ui/Container.jsx";
import Logo from "../ui/Logo.jsx";
import LegalModal from "../ui/LegalModal.jsx";
import { NAV_LINKS, FOOTER_LEGAL_LINKS } from "../../constants/navigation.js";
import { SITE, SOCIAL_LINKS } from "../../constants/site.js";
import { scrollToId } from "../../utils/scrollToId.js";

const SOCIAL_ICONS = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook };

export default function Footer() {
  const year = new Date().getFullYear();
  const [activeLegalDoc, setActiveLegalDoc] = useState(null);

  return (
    <footer className="bg-graphite-950 text-paper-100">
      <Container className="grid gap-14 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-paper-100/60">
            {SITE.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-100/15 text-paper-100/60 transition-colors duration-200 hover:border-amber-500 hover:text-amber-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Tautan navigasi">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper-100/40">
            Navigasi
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToId(link.id);
                  }}
                  className="text-sm text-paper-100/70 transition-colors duration-200 hover:text-amber-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Tautan legal">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper-100/40">
            Legal
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => setActiveLegalDoc(link.id)}
                  className="text-sm text-paper-100/70 transition-colors duration-200 hover:text-amber-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper-100/40">
            Kontak
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-paper-100/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-amber-500" />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-amber-400">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-amber-500" />
              <a href={`mailto:${SITE.email}`} className="hover:text-amber-400">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper-100/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper-100/40 sm:flex-row">
          <p>
            &copy; {year} {SITE.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Membangun sejak {SITE.foundedYear}
          </p>
        </Container>
      </div>

      <AnimatePresence>
        {activeLegalDoc && <LegalModal docId={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />}
      </AnimatePresence>
    </footer>
  );
}
