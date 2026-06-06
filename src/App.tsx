/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

/* ─── Custom spring cursor ─────────────────────────────────────────────── */
function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);

  const springCfg = { stiffness: 320, damping: 28, mass: 0.4 };
  const ringX = useSpring(mouseX, springCfg);
  const ringY = useSpring(mouseY, springCfg);

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", (e) => {
      const el = (e.target as Element).closest("a, button, input, textarea, [role='button']");
      el ? enter() : leave();
    });
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const size = hovering ? 40 : 28;

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          borderColor: hovering ? "var(--highlight)" : "rgba(255,255,255,0.25)",
          transition: "width 0.2s ease, height 0.2s ease, margin 0.2s ease, border-color 0.2s ease",
        }}
      />
      {/* Inner dot — instant */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-[5px] h-[5px] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          marginLeft: -2.5,
          marginTop: -2.5,
          backgroundColor: hovering ? "var(--highlight)" : "white",
          transition: "background-color 0.15s ease",
        }}
      />
    </>
  );
}

/* ─── Marquee tech ticker ───────────────────────────────────────────────── */
const techItems = [
  "React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL",
  "MongoDB", "Socket.io", "WebRTC", "Three.js", "Docker", "REST APIs",
  "JWT Auth", "Redis", "Vite", "Tailwind CSS",
];

function Marquee() {
  const doubled = [...techItems, ...techItems];
  return (
    <div
      className="overflow-hidden py-5 border-y border-white/[0.06]"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground/50 px-5"
          >
            <span className="w-1 h-1 rounded-full inline-block" style={{ background: "var(--highlight)", opacity: 0.5 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Experience item ───────────────────────────────────────────────────── */
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 group text-left"
    >
      <div className="text-muted-foreground/40 font-mono text-[10px] pt-1 uppercase tracking-widest">
        {period}
      </div>
      <div className="border-t border-white/[0.06] pt-5 md:pt-0 md:border-none">
        <h4 className="text-xl font-heading italic mb-2 group-hover:text-[#4F90FF] transition-colors duration-300">
          {title}
        </h4>
        <div className="text-muted-foreground/50 font-mono text-[10px] uppercase tracking-widest mb-4">
          {company}
        </div>
        <p className="text-muted-foreground max-w-2xl leading-relaxed font-sans font-light text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Stats card ────────────────────────────────────────────────────────── */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="group">
      <div
        className="text-3xl md:text-4xl font-heading italic mb-1.5 group-hover:text-[#4F90FF] transition-colors duration-300"
      >
        {value}
      </div>
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">{label}</div>
    </div>
  );
}

/* ─── Main App ──────────────────────────────────────────────────────────── */
export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects)
      .catch((err) => console.error("Failed to load projects", err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white font-sans">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        {/* Tech marquee */}
        <Marquee />

        {/* ── 01 Projects ──────────────────────────────────────── */}
        <section id="projects" className="py-24 border-t border-white/[0.07]" aria-label="Selected projects">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 lg:col-span-3"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 font-mono">
                  01 // Selected Work
                </span>
                <h3 className="text-4xl font-heading italic tracking-tight mb-6">
                  Featured<br />Installations
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  Committed to engineering high-performance systems and intuitive user experiences.
                </p>
              </motion.div>

              <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {projects.length > 0 ? (
                  projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} />
                  ))
                ) : (
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-72 w-full bg-white/[0.02] animate-pulse border border-white/[0.04]" />
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <Services />

        {/* ── 02 About ─────────────────────────────────────────── */}
        <section id="about" className="py-24 border-t border-white/[0.07]" aria-label="About">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 lg:col-span-3"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 font-mono">
                  02 // About Me
                </span>
                <h3 className="text-4xl font-heading italic tracking-tight">Bio<br />Notes</h3>
              </motion.div>

              <div className="col-span-12 lg:col-span-9">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-muted-foreground leading-relaxed font-sans font-light text-lg max-w-3xl"
                >
                  <p className="mb-6">
                    I'm a Full Stack Web Developer trained at{" "}
                    <span className="text-foreground font-normal">Anchorsoft Academy</span>,
                    specializing in the MERN stack. I transform complex problems into elegant,
                    user-friendly solutions.
                  </p>
                  <p className="mb-6">
                    My journey into tech started with a curiosity about how things work on the web.
                    Today, I build end-to-end applications from database architecture to
                    pixel-perfect interfaces with a focus on{" "}
                    <span className="text-foreground font-normal">performance and scalability</span>.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open source,
                    or refining my skills through hands-on projects.
                  </p>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-white/[0.06]"
                >
                  <StatCard value="5+" label="Projects Shipped" />
                  <StatCard value="MERN" label="Core Stack" />
                  <StatCard value="2026" label="Available Now" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 Skills ────────────────────────────────────────── */}
        <Skills />

        {/* ── 04 Experience ────────────────────────────────────── */}
        <section id="experience" className="py-24 border-t border-white/[0.07]" aria-label="Experience">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 lg:col-span-3"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 font-mono">
                  04 // Archives
                </span>
                <h3 className="text-4xl font-heading italic tracking-tight">
                  Professional<br />Narrative
                </h3>
              </motion.div>

              <div className="col-span-12 lg:col-span-9 space-y-14">
                <ExperienceItem
                  title="Full Stack Development Program"
                  company="Anchorsoft Academy — 2025/2026"
                  period="2025 – 2026"
                  description="Intensive training in modern web development. Mastered MERN stack, REST API design, authentication systems, database optimization, and deployment strategies. Completed multiple capstone projects."
                />
                <ExperienceItem
                  title="Full Stack Web Developer"
                  company="Freelance / Self-Employed"
                  period="2025 – Present"
                  description="Building full-stack MERN applications for clients. Specializing in e-commerce platforms, SaaS dashboards, and real-time applications. Focus on clean architecture and scalable solutions."
                />
                <ExperienceItem
                  title="OltraHMS — Hospital Management System"
                  company="Independent Project // Lead Architect"
                  period="2025 – 2026"
                  description="Engineered a multi-role HMS covering patient care, pharmacy, radiology, and telemedicine. Integrated real-time chat (Socket.io), WebRTC video, and offline PWA capabilities. Built with React, TypeScript, Node.js, Prisma, and PostgreSQL."
                />
                <ExperienceItem
                  title="3D Coin Sculptor"
                  company="Independent Project // AI Research"
                  period="2026"
                  description="Built a no-install 3D design tool that uses in-browser AI to convert portraits into 3D meshes for casting and printing. Powered by Three.js and ONNX Runtime."
                />
                <ExperienceItem
                  title="Ecommerce Fashion Platform"
                  company="Independent Project // Architectural Lead"
                  period="2025"
                  description="Designed and deployed a high-performance fashion retail platform. Focused on responsive UX, advanced state management, and seamless integration with payment architectures."
                />
                <ExperienceItem
                  title="Ayanfe Market & Citygrid Gas"
                  company="Independent Projects // Full Stack"
                  period="2026"
                  description="Launched an escrow marketplace platform (Prisma/Swagger) and a utility services platform (React/Vite/Tailwind) focused on energy delivery logistics."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Contact ───────────────────────────────────────── */}
        <ContactForm />
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="py-10 border-t border-white/[0.06]" role="contentinfo">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-muted-foreground/40 uppercase tracking-widest font-mono">
            <span className="italic text-muted-foreground/60">Build. Scale. Deploy.</span>
            <span className="hidden sm:block">·</span>
            <a
              href="tel:+2348166598665"
              className="hover:text-foreground transition-colors"
            >
              +234 816 659 8665
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="mailto:akintomide.opeyemi83@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              akintomide.opeyemi83@gmail.com
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="https://github.com/Operac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="https://linkedin.com/in/akintomideopeyemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="text-[10px] text-muted-foreground/30 uppercase tracking-widest font-mono whitespace-nowrap">
            © 2026 Opeyemi Akintomide
          </div>
        </div>
      </footer>
    </div>
  );
}
