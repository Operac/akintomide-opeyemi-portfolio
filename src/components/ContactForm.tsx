import * as React from "react"
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Contact error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6">04 // Access</span>
            <h3 className="text-4xl md:text-5xl font-heading italic tracking-tight mb-8">
              Let's build <br />
              something <span className="text-primary italic">extraordinary</span>.
            </h3>
             <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-sans font-light mb-12">
              I'm currently open to full-time roles, freelance projects, and collaboration opportunities. Whether you need a complete web application or want to discuss tech let's talk.
            </p>

            <div className="space-y-8">
              <div className="group">
                <p className="text-[10px] uppercase text-[#555] mb-2 tracking-widest">Source Control</p>
                <a 
                  href="https://github.com/Operac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-heading hover:italic transition-all inline-block"
                >
                  github.com/Operac
                </a>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase text-[#555] mb-2 tracking-widest">Professional Network</p>
                <a 
                  href="https://linkedin.com/in/akintomideopeyemi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-heading hover:italic transition-all inline-block"
                >
                  linkedin.com/in/opeyemi
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="border border-white/10 p-8 md:p-12 bg-white/2">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4 text-left">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">01 / Full Name</label>
                    <input 
                      required 
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none font-sans"
                      placeholder="Jane Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-4 text-left">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">02 / Digital Address</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none font-sans"
                      placeholder="jane@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">03 / Message</label>
                  <textarea 
                    required 
                    placeholder="Tell me about your project..." 
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none font-sans min-h-[100px] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="rounded-none h-14 px-12 text-[10px] uppercase tracking-[0.3em] font-sans font-medium hover:bg-white hover:text-black transition-all" disabled={loading}>
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : success ? (
                    "Transmission Sent"
                  ) : (
                    "Dispatch Message"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
