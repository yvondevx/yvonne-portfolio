"use client";

import { useEffect, useRef, useState } from "react";
import { resumeData } from "@/lib/data";

const skillCategories = [
  {
    title: "Languages",
    icon: "💬",
    items: resumeData.skills.languages,
    color: "#be185d",
  },
  {
    title: "Front-End",
    icon: "🎨",
    items: resumeData.skills.frontend,
    color: "#ec4899",
  },
  {
    title: "Back-End",
    icon: "⚙️",
    items: resumeData.skills.backend,
    color: "#f472b6",
  },
  {
    title: "Mobile Dev",
    icon: "📱",
    items: resumeData.skills.mobile,
    color: "#be185d",
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: resumeData.skills.databases,
    color: "#ec4899",
  },
  {
    title: "Frameworks & CMS",
    icon: "🏗️",
    items: resumeData.skills.frameworksCMS,
    color: "#f472b6",
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    items: resumeData.skills.tools,
    color: "#be185d",
  },
  {
    title: "Design & AI Tools",
    icon: "✨",
    items: [...resumeData.skills.design, ...resumeData.skills.ai],
    color: "#ec4899",
  },
];

const proficiencyBars = [
  { name: "React.js / React Native", level: 80 },
  { name: "TypeScript / JavaScript", level: 82 },
  { name: "Laravel / PHP", level: 88 },
  { name: "Angular", level: 85 },
  { name: "Node.js", level: 82 },
  { name: "MySQL / MongoDB", level: 87 },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            entry.target.classList.remove("aos-hidden");
            setAnimated(true);
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
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #050505 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f9a8d4, transparent)" }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #be185d, #ec4899)" }}
          />
        </div>

        {/* Proficiency bars */}
        <div className="glass-card bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-12 reveal">
          <h3 className="font-display text-xl font-bold text-white mb-8 flex items-center gap-2">
            <span>⚡</span> Core Proficiency
          </h3>
          <div className="space-y-6">
            {proficiencyBars.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-body text-sm font-semibold text-gray-300">
                    {skill.name}
                  </span>
                  <span className="font-mono text-sm font-medium text-pink-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="skill-bar"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="reveal glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/5"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {cat.icon}
                </span>
                <h3 className="font-display font-bold text-white text-sm">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(236, 72, 153, 0.1)",
                      color: cat.color,
                      border: `1px solid ${cat.color}20`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core tech marquee */}
        <div className="mt-12 overflow-hidden reveal">
          <p className="text-center text-xs font-semibold text-pink-400 tracking-widest uppercase mb-6">
            Core Technologies
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {resumeData.coreTech.map((tech) => (
              <div
                key={tech}
                className="glass-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-xl px-5 py-2.5 font-mono text-sm font-medium text-pink-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
