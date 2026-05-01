import * as React from "react"
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  key?: string | number;
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group flex flex-col h-full border-t border-white/10 pt-6">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            {index + 1 < 10 ? `0${index + 1}` : index + 1} // PRJ
          </span>
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="w-4 h-4" />
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-muted/5">
          <img 
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
          />
        </div>

        <h3 className="text-2xl font-heading italic mb-4 group-hover:translate-x-2 transition-transform duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow font-sans font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="rounded-none border-white/5 text-[9px] uppercase tracking-widest font-sans px-2 py-0.5">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
