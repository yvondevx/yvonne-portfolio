"use client";

import { useEffect, useRef } from "react";
import { resumeData } from "@/lib/data";

const extendedProjects = [
  {
    name: "Enterprise Web App (Apptega)",
    description:
      "Enterprise-level security compliance web application at Eclaro Business Solutions. Built scalable Angular front-end with Laravel/Node.js backend and secure RESTful APIs.",
    tech: ["Angular", "Laravel", "Node.js", "MySQL", "MongoDB"],
    features: [
      "Built scalable front-end architecture using Angular component-based design.",
      "Developed backend systems using Laravel (MySQL) with reusable components and service-layer functions, alongside Node.js (MongoDB)",
      "Designed and implemented secure RESTful APIs.",
      "Implemented real-time data syncing from third-party services to the Apptega platform using WebSockets.",
    ],
    icon: "🔐",
    color: "#f472b6",
  },
  {
    name: "propertyasia.ph & taladnudbaan.com (Chanz IT)",
    description:
      "Full-featured real estate web platform built with Fuel CMS. Integrated third-party APIs, payment gateways, and hybrid mobile CRM systems for property listings and management.",
    tech: [
      "PHP",
      "Laravel",
      "October CMS",
      "Fuel CMS",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    features: [
      "Developed and maintained scalable real estate websites and CRM systems",
      "Integrated third-party APIs for property data, geolocation, and payment processing.",
      "Built a hybrid mobile CRM system for real estate agents to manage leads and clients on the go.",
    ],
    icon: "🏠",
    color: "#be185d",
  },
  {
    name: "Cross-Platform Mobile Apps",
    description:
      "Built cross-platform mobile applications using React Native (Expo) and TypeScript at SpaceTech Services. Integrated with .NET backend APIs for seamless compatibility.",
    tech: ["React Native", "Expo", "TypeScript", "REST APIs"],
    features: [
      "Barcode/QR code scanning for product lookup",
      "Point-of-sale (POS) cashier mode",
      "Thermal receipt generation and printing",
      "Stock level tracking and alerts",
    ],
    icon: "📱",
    color: "#be185d",
  },
  {
    name: "Admin Dashboard",
    description:
      "A powerful management dashboard for monitoring business performance. Features real-time sales and revenue charts, income vs. expense trend analysis, and exportable reports (PDF/Excel) with role-based access control.",
    tech: ["Laravel", "MYSQL", "Bootstrap"],
    features: [
      "Real-time sales and revenue charts",
      "Income vs. expense tracking with trend analysis",
      "Exportable management reports (PDF, Excel)",
      "Role-based access for admin and staff views",
    ],
    icon: "📊",
    color: "#ec4899",
  },
  {
    name: "API Development & AI Integration",
    description:
      "Enterprise-grade backend API development using Laravel with AI integration (OpenAI/Claude/Gemini). Features secure JWT authentication, Swagger documentation, and integrations with payment gateways, SMS, and email services.",
    tech: ["Laravel", "OpenAI", "JWT", "REST API", "MYSQL"],
    features: [
      "RESTful API design with Swagger/OpenAPI documentation",
      "Third-party service integrations (SMS, email, payment gateways)",
      "AI LLM integration (OpenAI, Claude, Gemini) for smart features",
      "Secure authentication with JWT and OAuth2",
    ],
    icon: "⚙️",
    color: "#be185d",
  },
  {
    name: "CMS & WordPress Projects",
    description:
      "Multiple international client projects using WordPress, Joomla, and Drupal. Included PayPal gateway integrations, custom plugin development, and CMS migrations.",
    tech: ["WordPress", "Joomla", "Drupal", "PHP", "MySQL", "PayPal API"],
    features: [
      "Custom WordPress plugin development for enhanced functionality",
      "CMS migrations and performance optimizations",
      "PayPal payment gateway integrations for e-commerce solutions",
    ],
    icon: "🌐",
    color: "#ec4899",
  },
  {
    name: "Marketing & Design Projects",
    description:
      "Designed and produced marketing materials including logos, apparel graphics, promotional content, and video editing for clients during 2020–2021 freelance work.",
    tech: ["Adobe Photoshop", "Filmora", "Canva"],
    features: [
      "Logo and brand identity design",
      "Apparel graphics for merchandise",
      "Promotional content creation for social media and print",
      "Video editing for marketing campaigns",
    ],
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

                {/* Features List */}
                {(project as any).features && (
                  <ul className="">
                    {(project as any).features.map(
                      (feature: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[11px] text-gray-400"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-white flex-shrink-0" />
                          {feature}
                        </li>
                      ),
                    )}
                  </ul>
                )}

                <div className="mt-4 space-y-2 border-t border-white/5 pt-4"></div>

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
