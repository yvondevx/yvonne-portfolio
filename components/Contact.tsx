"use client";

import { useEffect, useRef, useState } from "react";
import { resumeData } from "@/lib/data";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState("");

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

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const contacts = [
    {
      label: "Phone",
      value: resumeData.phone,
      icon: "📱",
      action: () => copy(resumeData.phone, "Phone"),
      href: `tel:${resumeData.phone}`,
    },
    {
      label: "Location",
      value: resumeData.location,
      icon: "📍",
      action: () => copy(resumeData.location, "Location"),
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-[#050505] relative overflow-hidden"
    >
      {/* Background decor */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #f9a8d4, transparent)" }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #be185d, #ec4899)" }}
          />
          <p className="font-body text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            I&apos;m open to new opportunities, collaborations, and exciting
            projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact cards */}
          <div className="space-y-4 reveal">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-all duration-300 group border border-white/5"
              >
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {c.icon}
                </span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex-1 min-w-0"
                >
                  <p className="text-xs text-pink-500 font-semibold tracking-wide uppercase">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium text-gray-300 truncate">
                    {c.value}
                  </p>
                </a>
                {c.label !== "GitHub" &&
                  c.label !== "LinkedIn" &&
                  c.label !== "Location" && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        c.action();
                      }}
                      className="text-pink-400 hover:text-pink-600 transition-colors flex-shrink-0"
                      title="Copy"
                    >
                      {copied === c.label ? (
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
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
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                {(c.label === "GitHub" || c.label === "LinkedIn") && (
                  <svg
                    className="w-4 h-4 text-pink-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>
            ))}

            {/* Social icons */}
            <div className="glass-card rounded-2xl p-3 border border-white/5">
              <div className="flex gap-4">
                {[
                  {
                    href: resumeData.github,
                    label: "GitHub",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: resumeData.linkedin,
                    label: "LinkedIn",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    href: `mailto:${resumeData.email}`,
                    label: "Email",
                    icon: (
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
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex-1 flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors text-pink-400 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — availability card + social */}
          <div className="space-y-6 reveal">
            {/* Availability card */}
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #be185d, #ec4899, #f472b6)",
              }}
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/10" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-green-300 animate-pulse" />
                  <span className="font-semibold text-sm tracking-wide">
                    Available for new Opportunities
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Let&apos;s build something amazing together!
                </h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Whether it&apos;s a full-stack web app, mobile solution, or
                  API development— I bring 10+ years of experience to every
                  project.
                </p>

                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "React", label: "Frontend" },
                    { value: "Laravel", label: "Backend" },
                    { value: "RN", label: "Mobile" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-display font-bold text-lg">
                        {item.value}
                      </p>
                      <p className="text-pink-200 text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
