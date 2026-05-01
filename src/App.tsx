/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects", err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="projects" className="py-24 border-t border-white/10">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 lg:col-span-3 sticky top-32">
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6">01 // Selected Work</span>
                <h3 className="text-4xl font-heading italic tracking-tight mb-8">Featured <br/>Installations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  Committed to engineering high-performance systems and intuitive user experiences.
                </p>
              </div>
              
              <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.length > 0 ? (
                  projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} />
                  ))
                ) : (
                  Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-80 w-full bg-muted/5 animate-pulse" />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <Skills />

        <section id="experience" className="py-24 border-t border-white/10">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6">03 // Archives</span>
                <h3 className="text-4xl font-heading italic tracking-tight">Professional <br/>Narrative</h3>
              </div>
              
              <div className="col-span-12 lg:col-span-9 space-y-16">
                <ExperienceItem 
                  title="OltraHMS — Hospital Management System"
                  company="Independent Project // Lead Architect"
                  period="2024"
                  description="Engineered a multi-role HMS covering patient care, pharmacy, radiology, and telemedicine. Integrated real-time chat (Socket.io), WebRTC video, and offline PWA capabilities. Built with React, TypeScript, Node.js, Prisma, and PostgreSQL."
                  index={1}
                />
                <ExperienceItem 
                  title="3D Coin Sculptor"
                  company="Independent Project // AI Research"
                  period="2024"
                  description="Built a no-install 3D design tool that uses in-browser AI to convert portraits into 3D meshes for casting and printing. Powered by Three.js and ONNX."
                  index={2}
                />
                <ExperienceItem 
                  title="Ecommerce Fashion"
                  company="Independent Project // Architectural Lead"
                  period="2024"
                  description="Designed and deployed a high-performance fashion retail platform. Focused on responsive UX, advanced state management, and seamless integration with payment architectures."
                  index={3}
                />
                <ExperienceItem 
                  title="Ayanfe Market & Citygrid Gas"
                  company="Independent Project // Full Stack"
                  period="2023 — 2024"
                  description="Launched an escrow marketplace platform (Prisma/Swagger) and a utility services platform (React/Vite/Tailwind) focused on energy delivery logistics."
                  index={4}
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="opacity-5" />
        
        <ContactForm />
      </main>

      <footer className="py-12 border-t border-white/10 bg-background relative overflow-hidden">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-baseline gap-8">
          <div className="text-[10px] text-[#444] uppercase tracking-widest italic flex flex-wrap items-center gap-4">
            Build. Scaled. Deployed.
            <div className="w-1 h-1 rounded-full bg-[#444]"></div>
            +234 816 659 8665
            <div className="w-1 h-1 rounded-full bg-[#444]"></div>
            <a href="mailto:akintomide.opeyemi83@gmail.com" className="hover:text-white transition-colors">akintomide.opeyemi83@gmail.com</a>
            <div className="w-1 h-1 rounded-full bg-[#444]"></div>
            <a href="https://github.com/Operac" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <div className="w-1 h-1 rounded-full bg-[#444]"></div>
            <a href="https://linkedin.com/in/akintomideopeyemi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="text-[10px] text-[#444] uppercase tracking-widest">
            © 2026 Opeyemi Akintomide. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceItem({ title, company, period, description, index }: any) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 group text-left">
      <div className="text-[#444] font-mono text-[10px] pt-1 uppercase tracking-widest">
        {period} // 0{index}
      </div>
      <div>
        <h4 className="text-2xl font-heading italic mb-2 group-hover:text-primary transition-colors">{title}</h4>
        <div className="text-muted-foreground font-sans text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-2 inline-block">
          {company}
        </div>
        <p className="text-muted-foreground max-w-2xl leading-relaxed font-sans font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
