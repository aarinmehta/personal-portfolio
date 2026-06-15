import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Languages",
    color: "#4285F4",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Swift", "Ruby", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    color: "#EA4335",
    skills: ["React", "React Native", "SwiftUI", "SCSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Tools",
    color: "#FBBC05",
    skills: ["Node.js", "Vapor", "Ruby on Rails", "Git", "GitHub", "Jest", "RSpec", "Jira", "Agile"],
  },
  {
    category: "AWS / Cloud",
    color: "#34A853",
    skills: ["Lambda", "Cognito", "API Gateway", "CloudWatch", "X-Ray", "DynamoDB"],
  },
];

const education = {
  school: "University of Massachusetts Amherst",
  degree: "BS in Computer Science",
  gpa: "3.83",
  grad: "May 2026",
  honors: ["Dean's Honors List", "Chancellor's Award"],
  courses: ["Computer Systems & Networks", "Data Management", "Discrete Math", "Algorithms"],
};

export function Skills() {
  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "#ffffff" }}>
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
              Skills & Education
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
            What I work with
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Skills */}
          <div className="lg:col-span-3 space-y-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 items-start"
              >
                <div
                  className="shrink-0 w-1 rounded-full mt-1"
                  style={{ backgroundColor: group.color, height: "calc(100% - 4px)", minHeight: 48 }}
                />
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-2"
                    style={{ color: group.color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                  >
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:shadow-sm cursor-default"
                        style={{
                          backgroundColor: "#f8f9fa",
                          color: "#202124",
                          border: "1px solid rgba(0,0,0,0.08)",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-2xl p-7 border h-full"
              style={{ backgroundColor: "#f8f9fa", borderColor: "rgba(0,0,0,0.07)" }}
            >
              <div
                className="text-xs uppercase tracking-wider mb-4"
                style={{ color: "#4285F4", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
              >
                Education
              </div>

              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#202124",
                  lineHeight: 1.3,
                }}
              >
                {education.school}
              </h3>
              <p style={{ color: "#5f6368", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", marginTop: 4 }}>
                {education.degree}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "#e8f0fe" }}
                >
                  <span style={{ color: "#4285F4", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>
                    {education.gpa}
                  </span>
                  <span style={{ color: "#4285F4", fontSize: "0.7rem", marginLeft: 3 }}>GPA</span>
                </div>
                <span style={{ color: "#5f6368", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>
                  {education.grad}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                {education.honors.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FBBC05" }} />
                    <span style={{ color: "#202124", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ color: "#5f6368", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#5f6368",
                        border: "1px solid rgba(0,0,0,0.1)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
