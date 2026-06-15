import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "WorldWide News",
    tagline: "Interactive global news explorer",
    description:
      "Full-stack web app that lets users explore top news articles from any country via an interactive globe, with relevancy filters that adjust results by topic and scoring. Sourced live data from the GDELT 2.0 API with unit-tested backend logic and a documented manual test suite.",
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "GDELT 2.0 API"],
    color: "#4285F4",
    metrics: "Live news · 195+ countries · relevancy scoring",
    link: null,
    github: "https://github.com/aarinmehta/worldwide-news",
  },
  {
    name: "Rideshare UMass",
    tagline: "Rideshare coordination for students",
    description:
      "Web app simplifying rideshare coordination for international and out-of-state UMass students commuting to Boston Logan Airport. Facilitated over 150 rides in pilot with 50 users.",
    tech: ["Ruby on Rails", "JavaScript", "SCSS", "HTML"],
    color: "#34A853",
    metrics: "150+ rides · 40% less coordination time",
    link: null,
    github: "https://github.com/aarinmehta/Rideshare-UMass",
  },
];

const accentColors = ["#4285F4", "#34A853"];

export function Projects() {
  return (
    <section id="projects" className="py-24" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
            ))}
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#5f6368", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Projects
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              letterSpacing: "-0.03em",
              color: "#202124",
            }}
          >
            Things I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 flex flex-col"
              style={{ borderColor: "rgba(0,0,0,0.07)" }}
            >
              {/* Top color bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: accentColors[i] }} />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#202124",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p style={{ color: accentColors[i], fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.85rem" }}>
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={16} color="#5f6368" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={16} color="#5f6368" />
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className="flex-1 mb-5"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#5f6368", fontSize: "0.9rem", lineHeight: 1.65 }}
                >
                  {project.description}
                </p>

                <div
                  className="mb-5 px-3 py-2 rounded-lg text-xs"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: accentColors[i],
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  ↗ {project.metrics}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs"
                      style={{
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "#5f6368",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
