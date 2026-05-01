import * as React from "react"
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20 origin-left"
        style={{ scaleX }}
      />
      <div className="container px-4 mx-auto py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-1">Portfolio v2.4 // 2026</span>
          <a href="#" className="text-xl font-heading italic tracking-tight hover:opacity-70 transition-opacity">
            Opeyemi Akintomide
          </a>
        </div>

        <nav className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-sans text-muted-foreground">
          {["Projects", "Experience", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-foreground transition-colors relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
