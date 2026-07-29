import { useState } from "react";
import { Menu, X, ArrowUpRight, Github } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

interface HeaderProps {
  onContactOpen: () => void;
}

export default function Header({ onContactOpen }: HeaderProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Work", href: "#work" },
    { label: "Publications", href: "#publications" },
    { label: "Methodology", href: "#methodology" },
  ];

  return (
    <>
      <header
        id="site-header"
        className="fixed top-0 left-0 right-0 z-40 py-3 px-4 sm:px-6 md:px-12 flex justify-center pointer-events-none transition-all duration-300"
      >
        <motion.div
          animate={{
            width: scrolled ? "85%" : "100%",
            maxWidth: scrolled ? "800px" : "1100px",
            y: scrolled ? 10 : 0,
            backgroundColor: scrolled ? "rgba(10, 10, 10, 0.9)" : "rgba(10, 10, 10, 0.4)",
            backdropFilter: "blur(14px)",
            borderRadius: scrolled ? "999px" : "12px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            paddingLeft: scrolled ? "1.75rem" : "1.25rem",
            paddingRight: scrolled ? "1.75rem" : "1.25rem",
            boxShadow: scrolled ? "0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.03)" : "none",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="w-full flex justify-between items-center py-2 sm:py-2.5 px-4 pointer-events-auto"
        >
          {/* Logo / Brand */}
          <a
            href="#"
            id="brand-logo"
            className="font-brand text-base sm:text-lg md:text-xl font-normal tracking-tight text-[#dfccb7] hover:text-[#f3e4d3] transition-colors lowercase"
          >
            muhammad ali<span className="text-amber-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-7">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-[9px] uppercase tracking-[0.22em] text-neutral-400 hover:text-white transition-colors relative group py-1.5"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/mohdali-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="p-2 border border-neutral-800 hover:border-amber-500/60 text-neutral-300 hover:text-amber-400 bg-neutral-900/60 transition-colors rounded-full flex items-center justify-center"
            >
              <Github size={16} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onContactOpen}
              className="px-4 py-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 font-sans text-[9px] uppercase tracking-[0.2em] font-medium text-black transition-opacity hover:opacity-95"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-30 bg-black/98 backdrop-blur-lg px-6 py-12 md:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl tracking-tight text-neutral-200 hover:text-amber-400 transition-colors py-2 flex justify-between items-center border-b border-neutral-900"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={20} className="text-neutral-600" />
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="https://github.com/mohdali-dev"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 border border-neutral-800 text-neutral-300 hover:text-amber-400 font-sans text-xs uppercase tracking-[0.25em] font-bold flex items-center justify-center gap-2"
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </motion.a>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactOpen();
                }}
                className="w-full py-4 bg-amber-500 font-sans text-xs uppercase tracking-[0.25em] font-bold text-black"
              >
                Let's Talk
              </motion.button>
              
              <div className="text-center font-mono text-[9px] text-neutral-600 uppercase tracking-widest pt-2">
                Based in Lahore, Pakistan
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
