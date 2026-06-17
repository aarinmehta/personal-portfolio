import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import resume from "../../assets/Aarin Resume.pdf";
import headshot from "../../assets/grad headshot.jpeg";

const googleDots = [
  { color: "#4285F4", delay: 0 },
  { color: "#EA4335", delay: 0.1 },
  { color: "#FBBC05", delay: 0.2 },
  { color: "#34A853", delay: 0.3 },
];

const rotatingPhrases = [
  { text: "full-stack apps.", color: "#4285F4" },
  { text: "backend APIs.", color: "#EA4335" },
  { text: "cloud infrastructure.", color: "#34A853" },
  { text: "things people use.", color: "#FBBC05" },
];

function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const phrase = rotatingPhrases[index];

  return (
    <h1
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
        lineHeight: 1.12,
        letterSpacing: "-0.025em",
        color: "#141414",
        whiteSpace: "nowrap",
        minHeight: "2.25rem",
      }}
    >
      I build{" "}
      <span style={{ display: "inline-block", position: "relative", verticalAlign: "top" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={phrase.text}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: "inline-block", color: phrase.color }}
          >
            {phrase.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#202124 1px, transparent 1px), linear-gradient(90deg, #202124 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Colored accent blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#4285F4" }} />
      <div className="absolute bottom-32 left-[5%] w-56 h-56 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#34A853" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="block"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#888",
              }}
            >
              Software Engineer
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-3"
            >
              <RotatingHeadline />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 mb-8 max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "#5f6368",
              }}
            >
              Software engineer with internship experience at Amazon, UMass IT, and Expedia. I like building things that are fast, clean, and actually useful — full-stack apps, backend APIs, and cloud infrastructure. When I'm not coding, you'll find me at the gym or watching a movie.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="mailto:aarin1951@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#4285F4", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                <Mail size={15} />
                Get in touch
              </a>
              <a
                href="https://github.com/aarinmehta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm border transition-all duration-200 hover:bg-gray-50"
                style={{ borderColor: "rgba(0,0,0,0.15)", color: "#202124", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mehtaaarin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm border transition-all duration-200 hover:bg-gray-50"
                style={{ borderColor: "rgba(0,0,0,0.15)", color: "#202124", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={resume}
                download="Aarin_Mehta_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm border transition-all duration-200 hover:bg-gray-50"
                style={{ borderColor: "rgba(0,0,0,0.15)", color: "#202124", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right — headshot + stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col items-center gap-5"
          >
            {/* Headshot */}
            <div className="relative">
              {/* Google-colored ring */}
              <div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: "conic-gradient(#4285F4 0deg, #4285F4 90deg, #EA4335 90deg, #EA4335 180deg, #FBBC05 180deg, #FBBC05 270deg, #34A853 270deg, #34A853 360deg)",
                  borderRadius: "50%",
                  padding: 3,
                }}
              />
              <div
                className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white"
                style={{ backgroundColor: "#e8f0fe" }}
              >
                <img
                  src={headshot}
                  alt="Aarin Mehta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stat pills */}
            <div className="flex gap-3">
              {[
                { label: "GPA", value: "3.83", color: "#4285F4" },
                { label: "Internships", value: "3+", color: "#EA4335" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-5 py-4 shadow-sm border text-center"
                  style={{ borderColor: "rgba(0,0,0,0.07)" }}
                >
                  <div
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: stat.color, fontSize: "1.5rem", letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#5f6368", fontSize: "0.75rem", marginTop: 2 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Google dots row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 mt-16"
        >
          {googleDots.map((dot, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: dot.color }} />
          ))}
          <div className="h-px flex-1 ml-2" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
          <button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs hover:text-[#4285F4] transition-colors"
            style={{ color: "#5f6368", fontFamily: "'Inter', sans-serif" }}
          >
            Scroll to explore <ArrowDown size={12} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
