import * as React from "react"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 overflow-hidden bg-background">
      {/* Background Graphic Element */}
      <div className="absolute top-[-10vh] right-[-5vw] text-[20vw] font-heading italic text-white/5 pointer-events-none select-none uppercase tracking-tighter">
        MERN
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-12 gap-8 items-end"
        >
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-[12vw] sm:text-[100px] leading-[0.85] font-heading font-light tracking-tighter uppercase">
              OPEYEMI<br/>
              <span className="italic ml-[0.5em]">AKINTOMIDE</span>
            </h1>
             <p className="mt-12 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-sans font-light">
               I build production-grade web applications end-to-end—from database schema to deployed UI. 
               Specializing in JavaScript/TypeScript ecosystems with a focus on scalability and precision.
            </p>
          </div>
          
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-8 pb-4">
            <div className="relative w-52 h-64 lg:w-64 lg:h-64 mb-4 border border-white/10 group overflow-hidden">
               <img 
                 src="/profile.jpg" 
                 alt="Opeyemi Akintomide"
                 className="object-fill w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 border-[12px] border-background pointer-events-none" />
            </div>

            <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
              {["TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "React", "Three.js"].map((tech) => (
                <div key={tech} className="px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans">
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="text-left lg:text-right text-[11px] text-[#666] leading-relaxed uppercase tracking-widest space-y-1">
              <p>Currently Architecting Digital Solutions</p>
              <p>Available for Selective Collaborations</p>
            </div>

            <Button variant="outline" className="rounded-none border-white/10 group hover:border-white/40 transition-colors bg-white/5" asChild>
              <a href="#contact" className="flex items-center gap-4 py-6 px-8">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[11px] uppercase tracking-widest">Available for Hire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}