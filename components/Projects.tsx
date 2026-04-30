"use client";

import { useEffect, useRef } from "react";
import { resumeData } from "@/lib/data";

const extendedProjects = [
  {
    name: "propertyasia.ph",
    description:
      "Full-featured real estate web platform built with Fuel CMS. Integrated third-party APIs, payment gateways, and hybrid mobile CRM systems for property listings and management.",
    tech: [
      "PHP",
      "October CMS",
      "Fuel CMS",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    icon: "🏠",
    color: "#be185d",
  },
  {
    name: "taladnudbaan.com",
    description:
      "Full-featured real estate web platform built with Laravel, featuring custom CRM systems, and enhanced UX improvements for the client's growing marketplace.",
    tech: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap"],
    icon: "🛒",
    color: "#ec4899",
  },
  {
    name: "Enterprise Web App (Apptega)",
    description:
      "Enterprise-level security compliance web application at Eclaro Business Solutions. Built scalable Angular front-end with Laravel/Node.js backend and secure RESTful APIs.",
    tech: ["Angular", "Laravel", "Node.js", "MySQL", "MongoDB"],
    icon: "🔐",
    color: "#f472b6",
  },
  {
    name: "Cross-Platform Mobile Apps",
    description:
      "Built cross-platform mobile applications using React Native (Expo) and TypeScript at SpaceTech Services. Integrated with .NET backend APIs for seamless compatibility.",
    tech: ["React Native", "Expo", "TypeScript", "REST APIs", ".NET"],
    icon: "📱",
    color: "#be185d",
  },
  {
    name: "CMS & WordPress Projects",
    description:
      "Multiple international client projects using WordPress, Joomla, and Drupal. Included PayPal gateway integrations, custom plugin development, and CMS migrations.",
    tech: ["WordPress", "Joomla", "Drupal", "PHP", "MySQL", "PayPal API"],
    icon: "🌐",
    color: "#ec4899",
  },
  {
    name: "Marketing & Design Projects",
    description:
      "Designed and produced marketing materials including logos, apparel graphics, promotional content, and video editing for clients during 2020–2021 freelance work.",
    tech: ["Adobe Photoshop", "Filmora", "Canva"],
    icon: "🎨",
    color: "#f472b6",
  },
];

export default function Projects() {
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
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050505 0%, #0a0a0a 100%)",
      }}
    >
      {/* Background decor */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />
      <div
        className="absolute bottom-10 left-20 w-48 h-48 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #f9a8d4, transparent)" }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #be185d, #ec4899)" }}
          />
          <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of projects from 10+ years of professional development
            experience
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extendedProjects.map((project, idx) => (
            <div
              key={project.name}
              className="reveal glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-white/5"
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              {/* Card top banner */}
              <div
                className="h-2 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, #f9a8d4)`,
                }}
              />

              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-snug">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(236, 72, 153, 0.1)",
                        color: project.color,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 reveal">
          <div
            className="rounded-3xl p-8 md:p-10 text-white"
            style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "6+", label: "Companies Worked" },
                { value: "20+", label: "Projects Built" },
                { value: "5+", label: "Tech Stacks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-pink-100 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
