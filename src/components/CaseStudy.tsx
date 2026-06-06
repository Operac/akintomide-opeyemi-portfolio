import { motion } from "motion/react";
import { ArrowUpRight, AlertCircle, CheckCircle2 } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="py-24 border-t border-white/[0.07]" aria-label="Case study: OltraHMS">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4 font-mono">
            // Case Study
          </span>
          <h2 className="text-4xl font-heading italic tracking-tight">
            OltraHMS<br />Hospital Management System
          </h2>
        </motion.div>

        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-start"
        >
          {/* Problem text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-5 h-5" style={{ color: "var(--highlight)" }} aria-hidden="true" />
              <h3 className="text-xl font-heading italic">The Problem</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Most hospitals in Nigeria still run on paper. Patient files get lost, lab results are delayed, billing is
              manual, and patients have no digital access to their own records or appointments.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Revenue leaks through untracked payments, insurance claims go unmanaged, and staff operate with no
              real-time visibility across departments.
            </p>
            <p className="text-foreground font-normal leading-relaxed text-lg italic">
              This is not a niche problem. It is the default reality for the majority of Nigerian healthcare
              facilities.
            </p>
          </div>

          {/* Problem stats */}
          <div className="space-y-4">
            {[
              { label: "Hospitals running on paper", value: "80%+" },
              { label: "Lost patient files annually", value: "Uncounted" },
              { label: "Revenue leakage rate", value: "15–30%" },
              { label: "Insurance claim success rate", value: "<50%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-l-2 border-white/[0.1] pl-4 py-2 group hover:border-[var(--highlight)] transition-colors duration-300"
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-mono">
                  {stat.label}
                </p>
                <p className="text-2xl font-heading italic group-hover:text-[var(--highlight)] transition-colors duration-300">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-5 h-5" style={{ color: "var(--highlight)" }} aria-hidden="true" />
            <h3 className="text-xl font-heading italic">What I Built</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed font-light text-lg max-w-3xl mb-10">
            A full-stack hospital management system that digitizes the entire patient journey, from check-in to
            discharge, across every department. Built for the Nigerian clinical environment, not a generic template.
          </p>

          {/* Tech specs grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "User Roles", value: "12" },
              { label: "Database Models", value: "60+" },
              { label: "API Endpoints", value: "100+" },
            ].map((spec) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 border border-white/[0.08] hover:border-white/[0.15] transition-colors"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-mono mb-2">
                  {spec.label}
                </p>
                <p className="text-4xl font-heading italic" style={{ color: "var(--highlight)" }}>
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features list */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6">
              Real clinical workflows including:
            </p>
            {[
              "Triage & Patient Check-in",
              "Pharmacy Dispensing & Inventory",
              "Telemedicine & Consultations",
              "Insurance Claims Management",
              "Inpatient Management & Billing",
              "AI-Assisted Clinical Decision Support",
              "Real-Time Department Visibility",
              "Payment Clearance & Revenue Tracking",
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-sm text-muted-foreground font-light"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--highlight)" }}
                  aria-hidden="true"
                />
                {feature}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed font-light text-base mt-8 pt-8 border-t border-white/[0.06]"
          >
            Every service is gated behind a payment clearance system that eliminates revenue leakage, with a full
            audit trail on every transaction.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="https://oltra-hms-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-[11px] uppercase tracking-widest font-sans hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            View Live Demo
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Operac/oltra-hms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-widest font-sans text-muted-foreground hover:text-foreground transition-colors"
          >
            View Source Code →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
