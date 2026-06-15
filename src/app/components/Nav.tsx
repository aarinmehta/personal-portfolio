import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("about")}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#202124",
            letterSpacing: "-0.01em",
          }}
        >
          Aarin Mehta
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#5f6368" }}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(0,0,0,0.08)] px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left px-4 py-3 rounded-xl hover:bg-[#e8f0fe] text-sm"
              style={{ fontFamily: "'Inter', sans-serif", color: "#202124" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
