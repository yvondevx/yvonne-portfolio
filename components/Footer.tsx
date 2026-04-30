"use client";

import { resumeData } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden py-12 px-6 md:px-12"
      style={{
        background: "linear-gradient(135deg, #1a0a12, #2d1020, #3d1535)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f9a8d4, transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold gradient-text mb-2">
              Yvonne Montefrio
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Full-Stack Web Developer building scalable web & mobile
              experiences with 10+ years of expertise.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">
              Quick Links
            </p>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200 flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(link.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-pink-500" />
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">
              Contact
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${resumeData.email}`}
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors flex items-center gap-2"
              >
                <span>📧</span> {resumeData.email}
              </a>
              <a
                href={`tel:${resumeData.phone}`}
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors flex items-center gap-2"
              >
                <span>📱</span> {resumeData.phone}
              </a>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span>📍</span> {resumeData.location}
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                >
                  GitHub
                </a>
                <span className="text-gray-600">·</span>
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {year} Yvonne Montefrio. Crafted with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
