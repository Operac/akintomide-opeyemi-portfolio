import * as React from "react"
import { useRef } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  key?: React.Key;
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
    image: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !glowRef.current) return;
    glowRef.current.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    glowRef.current.style.setProperty("--gy", `${e.clientY - rect.top}px`);
    glowRef.current.style.setProperty("--go", "1");
  };

  const handleMouseLeave = () => {
    glowRef.current?.style.setProperty("--go", "0");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      aria-label={`Project: ${project.title}`}
    >
      <div
        ref={cardRef}
        className="group flex flex-col h-full border-t border-white/8 pt-5 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Radial glow — CSS custom properties set imperatively via ref */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="card-glow pointer-events-none absolute inset-0 transition-opacity duration-500"
        />

        {/* Header row */}
        <div className="flex justify-between items-center mb-5 relative z-10">
          <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
            {String(index + 1).padStart(2, "0")} // PRJ
          </span>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/30 hover:text-foreground transition-colors duration-200 group-hover:text-muted-foreground"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/30 hover:text-foreground transition-colors duration-200 group-hover:text-muted-foreground"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Image with overlay */}
        <div className="relative aspect-video overflow-hidden mb-5 bg-white/2">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            width={640}
            height={360}
            className="project-img object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-[#09090c]/95 via-[#09090c]/55 to-transparent">
            <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500 flex gap-3 flex-wrap">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-widest font-sans text-black bg-white font-medium hover:opacity-90"
                  aria-label={`Open ${project.title} live demo`}
                >
                  Live Demo
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-widest font-sans text-white border border-white/30 hover:border-white transition-colors"
                aria-label={`View ${project.title} source code`}
              >
                Source
                <Github className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading italic mb-3 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 grow font-sans font-light relative z-10">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 relative z-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[8px] uppercase tracking-widest font-mono text-muted-foreground border border-white/6 hover:border-white/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
