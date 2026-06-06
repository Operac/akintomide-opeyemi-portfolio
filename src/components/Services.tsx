import { motion } from "motion/react";
import { Code2, Zap, Cog } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "I design and build web applications using the MERN stack. From internal tools to customer-facing products, I build for performance, clarity, and real use.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description:
      "I help businesses identify repetitive, manual processes and replace them with intelligent workflows. Whether it's automating communication, data handling, or decision support, I use AI tools to free up your team for the work that actually matters.",
  },
  {
    icon: Cog,
    title: "Digital Transformation Consulting",
    description:
      "I've led ERP integrations, restructured operations across multiple business units, and built systems that improve how organisations track, deliver, and grow. Operational process audit and mapping, ERP selection and integration guidance, workflow digitisation and automation strategy, team and tool onboarding. If your business is running on spreadsheets and WhatsApp, I can help you build something better.",
  },
];

export default function Services() {
  return (
    <section className="py-24 border-t border-white/[0.07]" aria-label="Services">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 font-mono">
            // Services
          </span>
          <h2 className="text-4xl font-heading italic tracking-tight max-w-2xl">
            What I <span style={{ color: "var(--highlight)" }}>build</span> and{" "}
            <span style={{ color: "var(--highlight)" }}>solve</span>
          </h2>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group p-8 border border-white/[0.08] transition-all duration-300 hover:border-white/[0.15]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center border border-white/[0.08] mb-6 group-hover:border-[rgba(79,144,255,0.3)] transition-colors duration-300"
                  style={{ background: "rgba(79,144,255,0.05)" }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-[#4F90FF] transition-colors duration-300" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading italic mb-4 group-hover:text-[#4F90FF] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed font-light font-sans">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 w-0 h-px group-hover:w-8 transition-all duration-500"
                  style={{ background: "var(--highlight)" }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
