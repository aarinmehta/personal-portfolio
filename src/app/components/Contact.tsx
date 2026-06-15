import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "aarin1951@gmail.com", href: "mailto:aarin1951@gmail.com", color: "#EA4335" },
  { icon: Github, label: "github.com/aarinmehta", href: "https://github.com/aarinmehta", color: "#202124" },
  { icon: Linkedin, label: "linkedin.com/in/mehtaaarin", href: "https://linkedin.com/in/mehtaaarin/", color: "#0077b5" },
  { icon: Phone, label: "(267) 721-3457", href: "tel:2677213457", color: "#34A853" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
            ))}
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#5f6368", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contact
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              letterSpacing: "-0.03em",
              color: "#202124",
              marginBottom: "1rem",
            }}
          >
            Let's work together
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {links.map(({ icon: Icon, label, href, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 bg-white p-4 rounded-2xl border hover:shadow-md transition-all duration-200 group"
                style={{ borderColor: "rgba(0,0,0,0.07)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <span
                  className="text-sm group-hover:underline"
                  style={{ color: "#202124", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
