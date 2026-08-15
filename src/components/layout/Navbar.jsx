import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Container from "../ui/Container.jsx";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import HamburgerButton from "./HamburgerButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { NAV_LINKS } from "../../constants/navigation.js";
import { useScrolled } from "../../hooks/useScrolled.js";
import { useActiveSection } from "../../hooks/useActiveSection.js";
import { scrollToId } from "../../utils/scrollToId.js";
import { cn } from "../../utils/cn.js";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(32);
  const activeId = useActiveSection(SECTION_IDS);

  const handleNavigate = (event, link) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToId(link.id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-paper-50/10 bg-graphite-950/85 backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={(event) => handleNavigate(event, { id: "home" })}
            aria-label="Kembali ke beranda"
          >
            <Logo tone="light" />
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavigate(event, link)}
                    className={cn(
                      "relative px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-all duration-300",
                      "hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.85),0_0_20px_rgba(255,255,255,0.55)]",
                      activeId === link.id
                        ? "text-blueprint-300 [text-shadow:0_0_6px_rgba(74,145,201,0.6),0_0_14px_rgba(74,145,201,0.35)]"
                        : "text-blueprint-500"
                    )}
                  >
                    {link.label}
                    {activeId === link.id && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blueprint-300 shadow-[0_0_6px_rgba(74,145,201,0.85),0_0_12px_rgba(74,145,201,0.5)]"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                as="a"
                href="#contact"
                onClick={(event) => handleNavigate(event, { id: "contact" })}
                variant="primary"
              >
                Konsultasi Gratis
              </Button>
            </div>
            <a
              href="#contact"
              onClick={(event) => handleNavigate(event, { id: "contact" })}
              aria-label="Konsultasi Gratis"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-50/20 transition-colors duration-200 hover:border-blueprint-300 lg:hidden"
            >
              <Send className="h-4 w-4 text-blueprint-300" />
            </a>

            <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
          </div>
        </Container>
      </motion.header>

      <MobileMenu open={menuOpen} activeId={activeId} onNavigate={handleNavigate} />
    </>
  );
}