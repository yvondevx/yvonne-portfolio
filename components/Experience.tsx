"use client";

import { useEffect, useRef } from "react";
import { resumeData } from "@/lib/data";

export default function Experience() {
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

  return (
    <section
      id="experience"
      className="section-padding bg-[#050505] relative overflow-hidden"
    >
      {/* Decorative bg */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3">
            My journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #be185d, #ec4899)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, #ec4899, #f9a8d4, #fce7f3)",
            }}
          />

          <div className="space-y-12">
            {resumeData.experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`reveal relative flex gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ml-16 md:ml-0 ${isLeft ? "md:pr-14" : "md:pl-14"}`}
                  >
                    <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/5">
                      {/* Period */}
                      <span
                        className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #fce7f3, #f9a8d4)",
                          color: "#be185d",
                        }}
                      >
                        📅 {exp.period}
                      </span>

                      {/* Title & Company */}
                      <h3 className="font-display text-lg font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-body text-pink-400 font-semibold text-sm mb-4 flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {exp.company}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, #be185d, #ec4899)",
                              }}
                            />
                            <span className="font-body text-sm text-gray-400 leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot — centered on line */}
                  <div
                    className={`absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 z-10`}
                  >
                    <div className="timeline-dot w-5 h-5 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Education card */}
        <div className="reveal mt-16">
          <div
            className="rounded-3xl p-8 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #be185d, #ec4899, #f472b6)",
            }}
          >
            {/* Decorative circle */}
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                🎓
              </div>
              <div>
                <p className="text-pink-100 text-sm font-semibold tracking-widest uppercase mb-1">
                  Education
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                  {resumeData.education.degree}
                </h3>
                <p className="text-pink-100 font-medium">
                  {resumeData.education.school} &mdash;{" "}
                  {resumeData.education.location}
                </p>
                <p className="text-pink-200 text-sm mt-1">
                  {resumeData.education.period}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
