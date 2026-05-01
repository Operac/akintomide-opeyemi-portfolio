import * as React from "react"
import { motion } from "motion/react";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "RESTful APIs", "Socket.io", "Authentication (JWT)"]
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "Firebase (Firestore)", "Redis"]
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Vite", "Postman", "Linux", "Netlify/Vercel"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-background border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6">02 // Core Capabilities</span>
            <h3 className="text-4xl font-heading italic tracking-tight">Technical <br/>Proficiency</h3>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono text-[#444]">0{idx + 1}</span>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#AAA]">
                    {category.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {skill}{idx < category.skills.length - 1 ? <span className="opacity-20 ml-2 italic">/</span> : ""}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
