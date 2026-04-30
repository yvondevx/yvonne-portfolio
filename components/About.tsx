"use client";

import { useEffect, useRef } from "react";
import { resumeData } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            entry.target.classList.remove("aos-hidden");
          }
        });
      },
      { threshold: 0.1 },
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => {
      el.classList.add("aos-hidden");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: "💼", label: "Experience", value: "10+ Years" },
    { icon: "🌐", label: "Specialty", value: "Full-Stack" },
    { icon: "📱", label: "Mobile Dev", value: "React Native" },
    { icon: "🇵🇭", label: "Location", value: "Philippines" },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-[#050505] relative overflow-hidden"
    >
      {/* Soft background decor */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #be185d, transparent)" }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #be185d, #ec4899)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — visual card */}
          <div className="reveal relative flex justify-center">
            <div className="relative">
              {/* Big soft circle */}
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0b14 0%, #0f0a0e 100%)",
                }}
              />

              {/* Centered avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full glass-card flex items-center justify-center text-8xl shadow-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  👩‍💻
                </div>
              </div>

              {/* Education badge */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-xl max-w-48 border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <p className="text-xs text-pink-500 font-semibold mb-1">
                  🎓 Education
                </p>
                <p className="text-xs font-bold text-white leading-snug">
                  Advanced Diploma in Computer Studies
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Informatics, QC • 2006–2008
                </p>
              </div>

              {/* Years badge */}
              <div className="absolute -top-4 -left-4 glass-card rounded-2xl px-5 py-3 shadow-xl text-center bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <p className="font-display text-3xl font-bold gradient-text">
                  10+
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Years of Exp.
                </p>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="space-y-6">
            <div className="reveal">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Senior Full-Stack Developer passionate about{" "}
                <span className="gradient-text">clean code</span>
              </h3>
              <p className="font-body text-gray-400 leading-relaxed text-base">
                {resumeData.summary}
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 reveal">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-pink-500/20 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-transparent transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="text-2xl block group-hover:scale-110 transition-transform duration-300">
                    {h.icon}
                  </span>
                  <p className="font-body text-xs text-pink-500 font-semibold mt-2 tracking-wide uppercase">
                    {h.label}
                  </p>
                  <p className="font-display text-lg font-bold text-white mt-0.5">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Info rows */}
            <div className="space-y-3 reveal">
              {[
                { label: "Email", value: resumeData.email, icon: "📧" },
                { label: "Phone", value: resumeData.phone, icon: "📱" },
                { label: "Location", value: resumeData.location, icon: "📍" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {info.icon}
                  </span>
                  <div>
                    <p className="text-xs text-pink-500 font-semibold">
                      {info.label}
                    </p>
                    <p className="text-sm text-gray-300 font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <div className="reveal pt-2">
              <a
                href="/resume.pdf"
                download="Yvonne_Montefrio_Resume.pdf"
                className="inline-flex items-center gap-3 btn-primary px-8 py-3.5 rounded-full font-semibold text-base shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
