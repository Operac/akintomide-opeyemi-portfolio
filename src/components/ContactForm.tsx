import { motion } from "motion/react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 border-t border-white/[0.07]" aria-label="Contact">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left panel — info + socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 font-mono">
              05 // Access
            </span>
            <h3 className="text-4xl md:text-5xl font-heading italic tracking-tight mb-8">
              Let's build{" "}
              <span className="block">something</span>
              <span style={{ color: "var(--highlight)" }} className="italic">
                extraordinary.
              </span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-light mb-12">
              Open to full-time roles, freelance projects, and collaboration opportunities.
              Whether you need a complete web application or want to talk tech, let's connect.
            </p>

            {/* Contact links */}
            <div className="space-y-7">
              {[
                {
                  label: "Source Control",
                  text: "github.com/Operac",
                  href: "https://github.com/Operac",
                },
                {
                  label: "Professional Network",
                  text: "linkedin.com/in/opeyemi",
                  href: "https://linkedin.com/in/akintomideopeyemi",
                },
                {
                  label: "Direct Line",
                  text: "akintomide.opeyemi83@gmail.com",
                  href: "mailto:akintomide.opeyemi83@gmail.com",
                },
              ].map(({ label, text, href }) => (
                <div key={label}>
                  <p className="text-[9px] uppercase text-muted-foreground/50 mb-1.5 tracking-widest font-mono">
                    {label}
                  </p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-base font-heading hover:italic transition-all inline-block hover:opacity-70 break-all"
                  >
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right panel — Typeform embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.01)" }}>
              <iframe
                src="https://form.typeform.com/to/rx3gbqpn"
                width="100%"
                height="650"
                frameBorder="0"
                title="Contact form"
                style={{
                  display: "block",
                }}
                allow="geolocation; microphone; camera"
              />
            </div>
            <p className="text-[9px] text-muted-foreground/30 font-mono uppercase tracking-widest mt-4">
              I reply within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
