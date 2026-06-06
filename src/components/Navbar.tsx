import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = ["Projects", "About", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  /* Scroll: backdrop + hide-on-scroll-down */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 80) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.toLowerCase());
    const map = new Map<Element, string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = map.get(e.target);
          if (id && e.isIntersecting) setActiveSection(id);
        });
      },
      { threshold: 0.25, rootMargin: "-60px 0px -40% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) { map.set(el, id); observer.observe(el); }
    });

    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      animate={{ y: hidden && !mobileOpen ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      {/* Reading progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
        style={{ scaleX, background: "var(--highlight)" }}
      />

      <div className="container px-4 mx-auto py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-0.5 font-mono">
            v2.4 // 2026
          </span>
          <a
            href="#"
            className="text-xl font-heading italic tracking-tight hover:opacity-70 transition-opacity"
          >
            Opeyemi Akintomide
          </a>
        </div>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-sans text-muted-foreground"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative py-1 transition-colors duration-200 group ${
                  isActive ? "text-foreground" : "hover:text-foreground"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: isActive ? "var(--highlight)" : "var(--foreground)",
                  }}
                />
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-md border-b border-white/[0.06]"
          >
            <nav className="container px-4 mx-auto py-8 flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((item, i) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item}
                    href={`#${id}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className={`text-[13px] uppercase tracking-[0.3em] font-sans py-3 border-b border-white/[0.04] transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={isActive ? { color: "var(--highlight)" } : {}}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
