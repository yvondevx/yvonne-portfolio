"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050505 0%, #0f0a0e 50%, #1a0b14 100%)",
      }}
    >
      <div className="md:mt-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large soft blob top right */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #be185d, transparent)",
            }}
          />
          {/* Medium blob bottom left */}
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(circle, #ec4899, transparent)",
            }}
          />
          {/* Spinning ring */}
          <div
            className="spin-ring absolute top-20 right-40 w-48 h-48 rounded-full opacity-10"
            style={{
              border: "2px dashed #ec4899",
            }}
          />
          {/* Small dots */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="float-dot absolute rounded-full"
              style={{
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
                background: i % 2 === 0 ? "#ec4899" : "#be185d",
                top: `${10 + i * 12}%`,
                left: `${5 + i * 11}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-24 md:py-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile visual */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Outer decorative ring */}
              <div
                className="spin-ring absolute w-80 h-80 md:w-96 md:h-96 rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ border: "1.5px dashed #ec4899" }}
              />
              {/* Inner ring */}
              <div
                className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  border: "8px solid transparent",
                  background:
                    "linear-gradient(135deg, #be185d, #ec4899) border-box",
                }}
              />

              {/* Avatar card */}
              <div className="relative z-10 glass-card bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl max-w-xs w-full">
                <p className="font-body text-pink-500 text-lg font-medium tracking-widest uppercase mb-2">
                  Hello, I&apos;m
                </p>

                {/* Avatar placeholder */}
                <div className="relative w-48 h-48 mb-2 mx-auto flex items-center justify-center">
                  {/* RIGHT AVATAR */}
                  <div className="flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* OUTER RING */}
                      <div className="absolute w-80 h-80 rounded-full border border-dashed border-pink-500/20 animate-spin-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                      {/* AVATAR */}
                      <motion.div
                        className="relative z-10 w-40 h-40 group"
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover="hover"
                      >
                        {/* RING */}
                        <motion.div
                          className="absolute -inset-3 border border-dashed rounded-full"
                          variants={{
                            hover: {
                              rotate: 180,
                              borderColor: "rgba(236,72,153,0.5)",
                            },
                          }}
                          transition={{ duration: 1 }}
                        />

                        {/* GLOW */}
                        <motion.div
                          className="absolute inset-0 bg-pink-500/20 rounded-full blur-2xl"
                          variants={{
                            hover: {
                              scale: 1.2,
                              opacity: 0.8,
                            },
                          }}
                        />

                        {/* IMAGE CONTAINER */}
                        <motion.div
                          className="relative w-full h-full rounded-full overflow-hidden border border-white/20"
                          variants={{
                            hover: { scale: 1.05 },
                          }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <motion.div
                            className="w-full h-full"
                            variants={{
                              hover: { scale: 1.1 },
                            }}
                          >
                            <Image
                              src="https://drive.google.com/uc?export=view&id=1jmhILcmBa88-pQq9qx3tPdOWiS4GK8M6"
                              alt="Yvonne"
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <h1 className="font-display font-bold leading-tight text-3xl">
                  <span className="gradient-text">Yvonne </span>
                  <span className="text-white">Montefrio</span>
                </h1>
                <p className="font-body text-gray-300 text-sm font-medium">
                  {resumeData.title}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { value: "10+", label: "Years" },
                    { value: "6+", label: "Companies" },
                    { value: "Laravel", label: "Expert" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-2 rounded-xl"
                      style={{ background: "rgba(255, 255, 255, 0.03)" }}
                    >
                      <p className="font-display font-bold text-pink-400 text-lg">
                        {stat.value}
                      </p>
                      <p className="font-body text-xs text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 glass-card bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg animate-float">
                <p className="text-xs font-semibold text-pink-700">
                  ⚡ Full-Stack Dev
                </p>
              </div>
              {/* Badge */}
              <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-white/5 border border-pink-500/20 backdrop-blur-md rounded-full px-4 py-2 text-xs font-medium text-green-300 shadow-lg animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                Available for work
              </div>
            </div>

            {/* Text Content */}
            <div ref={containerRef} className="space-y-6  mt-10">
              {/* Role */}
              <div className="flex items-center gap-3">
                <p className="font-body text-gray-300 text-5xl font-bold">
                  {resumeData.title}
                </p>
              </div>

              {/* Summary short */}
              <p className="font-body text-gray-400 text-base leading-relaxed max-w-lg">
                10+ years crafting scalable web & mobile apps. Specialized in
                React, React Native, Angular and Laravel. Experienced in RESTful
                API development, database design, and cross-platform mobile
                applications with a passion for clean code and performance.
              </p>

              {/* Core tech pills */}
              <div className="flex flex-wrap gap-2">
                {resumeData.coreTech.slice(0, 6).map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-primary px-8 py-3.5 rounded-full font-semibold text-base shadow-lg"
                >
                  Get In Touch
                </button>
                <a
                  href="/resume.pdf"
                  download="Yvonne_Montefrio_Resume.pdf"
                  className="btn-outline px-8 py-3.5 rounded-full font-semibold text-base flex items-center gap-2"
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
                  Download CV
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="w-10 h-10 rounded-full glass-card bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-200"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
