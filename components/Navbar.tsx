"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-pink-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="font-display text-3xl font-bold"
        >
          <span className="gradient-text">Y</span>
          <span className="text-white">M</span>
          <span className="text-pink-300">.</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.href)}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  active === item.href.slice(1)
                    ? "text-pink-500 active"
                    : "text-gray-400 hover:text-pink-400"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          download="Yvonne_Montefrio_Resume.pdf"
          className="hidden md:flex items-center gap-2 btn-primary px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          Resume
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-600 p-2"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-pink-600 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-pink-600 my-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-pink-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-md border-t border-white/5 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                active === item.href.slice(1)
                  ? "text-pink-500"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Yvonne_Montefrio_Resume.pdf"
            className="flex items-center gap-2 btn-primary px-5 py-2.5 rounded-full text-sm font-semibold w-full justify-center mt-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
