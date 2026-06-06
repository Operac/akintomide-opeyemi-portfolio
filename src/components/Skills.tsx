import { motion } from "motion/react";
import { Code2, Server, Database, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Three.js"],
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "RESTful APIs", "Socket.io", "WebRTC", "JWT Auth"],
  },
  {
    name: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase", "Redis"],
  },
  {
    name: "Tools & Infra",
    icon: Wrench,
    skills: ["Git", "Docker", "Vite", "Postman", "Linux", "Vercel", "Netlify"],
  },
  {
    name: "LLM Integration & Prompt Engineering",
    icon: Code2,
    skills: ["Multi-provider LLM Integration", "Prompt Design", "System Prompt Architecture", "Function Calling", "Tool Use"],
  },
  {
    name: "AI Agents & Workflows",
    icon: Zap,
    skills: ["AI Agent Development", "Function Calling", "Tool Use", "AI Chatbots", "Agentic Patterns"],
  },
  {
    name: "Automation Platforms",
    icon: Wrench,
    skills: ["n8n", "Make", "Zapier", "Webhooks", "Google Apps Script"],
  },
  {
    name: "Web Automation",
    icon: Code2,
    skills: ["Playwright", "Puppeteer", "Web Scraping", "Browser Automation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.07]" aria-label="Technical skills">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Label */}
          <div className="col-span-12 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 font-mono">
                03 // Core Capabilities
              </span>
              <h3 className="text-4xl font-heading italic tracking-tight mb-6">
                Technical<br />Proficiency
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-xs">
                A battle-tested toolkit refined across real-world projects, from hospital systems to 3D rendering engines.
              </p>
            </motion.div>
          </div>

          {/* Skill cards */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="group p-6 border border-white/[0.07] transition-all duration-300 hover:border-white/[0.15]"
                  style={{ background: "rgba(255,255,255,0.01)" }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-8 h-8 flex items-center justify-center border border-white/[0.08] group-hover:border-[rgba(79,144,255,0.3)] transition-colors duration-300"
                      style={{ background: "rgba(79,144,255,0.06)" }}
                    >
                      <Icon
                        className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[#4F90FF] transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {category.name}
                    </h4>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap">
                    {category.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="text-sm font-sans text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200"
                      >
                        {skill}
                        {i < category.skills.length - 1 && (
                          <span className="opacity-20 mx-1.5 italic text-xs">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
