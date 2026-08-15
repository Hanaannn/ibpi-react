import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation.js";
import { SOCIAL_LINKS } from "../../constants/site.js";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";

const SOCIAL_ICONS = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook };

export default function MobileMenu({ open, activeId, onNavigate }) {
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-graphite-950/98 backdrop-blur-sm lg:hidden"
        >
          <nav
            aria-label="Navigasi mobile"
            className="flex h-full flex-col justify-between px-8 pb-10 pt-28"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(event) => onNavigate(event, link)}
                    className={`flex items-baseline gap-4 border-b border-paper-50/10 py-4 font-display text-3xl font-medium transition-colors ${
                      activeId === link.id ? "text-amber-400" : "text-paper-50"
                    }`}
                  >
                    <span className="font-mono text-xs text-paper-50/40">0{index + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-5"
            >
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-50/15 text-paper-50/70 transition-colors hover:border-amber-500 hover:text-amber-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
