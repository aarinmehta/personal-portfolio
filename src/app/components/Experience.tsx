import { motion } from "motion/react";

const jobs = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "New York, NY",
    color: "#FF9900",
    logo: "amzn",
    bullets: [
      "Designed and developed an internal portal system, reducing network configuration lookup time by 70%",
      "Architected secure backend auth using AWS Cognito, API Gateway, and internal services — 40% better access control",
      "Achieved 99.9% availability and 60% faster API response via serverless architecture (Lambda + API Gateway)",
      "Built monitoring with CloudWatch and X-Ray, increasing incident detection speed by 45%",
    ],
    tags: ["AWS Lambda", "Cognito", "API Gateway", "CloudWatch", "X-Ray"],
  },
  {
    company: "UMass Amherst IT",
    role: "Software Engineering Intern",
    period: "Dec 2023 – Apr 2025",
    location: "Amherst, MA",
    color: "#881c1c",
    logo: "umass",
    bullets: [
      "Launched 6+ pages with custom routing for agile form submission, improving ease of use for 200 employees",
      "Refactored public dispatch logs site enabling message pinning, adopted by 50+ users — 30% faster lookup",
      "Designed RSpec test suite, boosting test accuracy and reducing time-to-market",
      "Implemented duplicate-trip feature for similar routes, saving analysts 7+ minutes daily",
    ],
    tags: ["Ruby on Rails", "RSpec", "JavaScript", "PostgreSQL"],
  },
  {
    company: "Expedia Group",
    role: "Technology Extern",
    period: "Jul 2024 – Aug 2024",
    location: "San Jose, CA",
    color: "#00355F",
    logo: "expedia",
    bullets: [
      "Conducted in-depth analysis of pricing strategies of 10 major players in the digital advertising space",
      "Utilized advanced analytics tools and methodologies, improving research accuracy and efficiency by 30%",
    ],
    tags: ["Analytics", "Research", "Digital Advertising"],
  },
  {
    company: "Captionex",
    role: "Web Development Intern",
    period: "May 2023 – Aug 2023",
    location: "Philadelphia, PA",
    color: "#6366f1",
    logo: "captionex",
    bullets: [
      "Built a responsive dashboard using React.js, reducing load time by 40% and improving engagement by 25%",
      "Integrated automated testing using Jest, increasing code coverage from 60% to 85%",
    ],
    tags: ["React.js", "Jest", "CSS"],
  },
];

const accentColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

export function Experience() {
  return (
    <section id="experience" className="py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            {accentColors.map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
            ))}
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#5f6368", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Work Experience
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
            Where I've worked
          </h2>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-[#f8f9fa] rounded-2xl p-7 border hover:shadow-md transition-all duration-300 group"
              style={{ borderColor: "rgba(0,0,0,0.07)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Color bar */}
                <div
                  className="w-1 rounded-full self-stretch hidden md:block shrink-0"
                  style={{ backgroundColor: accentColors[i % 4], minHeight: 60 }}
                />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "#202124",
                        }}
                      >
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: accentColors[i % 4], fontSize: "0.9rem" }}>
                          {job.company}
                        </span>
                        <span style={{ color: "#5f6368", fontSize: "0.8rem" }}>· {job.location}</span>
                      </div>
                    </div>
                    <div
                      className="shrink-0 px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "#f1f3f4",
                        color: "#5f6368",
                        fontFamily: "'JetBrains Mono', monospace",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#5f6368", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColors[i % 4] }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#5f6368",
                          border: "1px solid rgba(0,0,0,0.1)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
