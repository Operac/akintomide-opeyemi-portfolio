import { motion, type Variants } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const techTags = ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "React", "Three.js"];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "110%", skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    skewY: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: EASE },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4 + i * 0.1, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Large watermark */}
      <div
        aria-hidden="true"
        className="absolute top-[-8vh] right-[-4vw] text-[18vw] font-heading italic pointer-events-none select-none uppercase tracking-tighter hidden lg:block text-[rgba(79,144,255,0.03)]"
      >
        MERN
      </div>

      {/* Subtle horizontal rule decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-px origin-left bg-[linear-gradient(90deg,var(--highlight)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 items-end">

          {/* Left: Name + Bio */}
          <div className="col-span-12 lg:col-span-8">
            {/* Available pill */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 border text-[10px] uppercase tracking-[0.2em] font-mono"
              style={{ borderColor: "var(--highlight-border)", color: "var(--highlight)", background: "var(--highlight-muted)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Hire
            </motion.div>

            {/* Name — word-by-word reveal */}
            <h1 className="leading-[0.82] font-heading font-light tracking-tighter uppercase overflow-hidden">
              {["OPEYEMI", "AKINTOMIDE"].map((word, i) => (
                <div key={word} className="overflow-hidden block">
                  <motion.span
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`block text-[13vw] sm:text-[100px] ${i === 1 ? "italic ml-[0.4em] sm:ml-[1ch]" : ""}`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Bio */}
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-sans font-light"
            >
              I'm Opeyemi, a full stack developer and{" "}
              <span className="text-foreground font-normal">AI automation specialist</span> based in{" "}
              <span className="text-foreground font-normal">Lagos, Nigeria</span>. Before I wrote code
              professionally, I spent 7 years running operations, building businesses, and solving problems at
              the ground level. That background is not separate from my technical work. It's the reason I build
              software that actually fits how businesses operate. If you need someone who understands your{" "}
              <span className="text-foreground font-normal">product, your process, and your people</span>,
              not just your stack. Let's work together.
            </motion.p>

            {/* Location + social row */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-6 mt-8"
            >
              <span className="flex items-center gap-2 text-[11px] text-muted-foreground uppercase tracking-widest font-mono">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                Nigeria — Remote Available
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Operac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/akintomideopeyemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="mailto:akintomide.opeyemi83@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 border border-white/10 px-8 py-4 text-[11px] uppercase tracking-widest font-sans hover:bg-white hover:text-black transition-all duration-300 hover:border-white"
              >
                Let's Work Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 ml-6 text-[11px] uppercase tracking-widest font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                View Work
                <span className="block w-6 h-px bg-current group-hover:w-10 transition-all duration-300" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Right: Photo + Tags */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-7 lg:pb-2">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-56 h-72 lg:w-64 lg:h-80 group overflow-hidden"
              style={{ border: "1px solid rgba(79,144,255,0.15)" }}
            >
              <img
                src="/profile.jpg"
                alt="Opeyemi Akintomide — Full Stack Developer"
                className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                width={256}
                height={320}
              />
              {/* Inner border frame */}
              <div className="absolute inset-0 border-10 border-background pointer-events-none" aria-hidden="true" />
              {/* Blue accent corner */}
              <div
                className="absolute bottom-0 left-0 w-8 h-8 bg-highlight opacity-60"
                aria-hidden="true"
              />
            </motion.div>

            {/* Tech tags — staggered */}
            <motion.div
              className="flex flex-wrap gap-2 justify-start lg:justify-end"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
              }}
            >
              {techTags.map((tech) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-mono transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Status text */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-left lg:text-right"
            >
              <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-mono leading-relaxed">
                Currently Architecting<br />Digital Solutions
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20 flex items-center gap-3 text-[9px] text-muted-foreground/40 uppercase tracking-[0.3em] font-mono"
          aria-hidden="true"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-8 bg-muted-foreground/30"
          />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
