"use client";

import { motion } from "framer-motion";

type Project = {
  name: string;
  stack: string[];
  description: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    name: "Secure Smart Water Billing System",
    stack: ["React", "Node.js", "MongoDB", "JWT", "RBAC"],
    description:
      "End-to-end secure billing with role-based access, audit logging, and encrypted data at rest.",
    github: "https://github.com/Nayah035/water-billing",
  },
  {
    name: "POS System",
    stack: ["React", "Express", "MongoDB"],
    description:
      "Robust point-of-sale for SMEs with offline-first sync and secure user management.",
    github: "https://github.com/Nayah035/pos-system",
  },
  {
    name: "Laundry Web App",
    stack: ["Next.js", "Tailwind", "MongoDB"],
    description: "Modern booking and order tracking interface with responsive UI.",
    github: "https://github.com/Nayah035/laundry-app",
  },
  {
    name: "Portfolio Website",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    description: "This portfolio site with dark mode and animations.",
    github: "https://github.com/Nayah035/My-Portfolio",
  },
  {
    name: "Hackathon Project 1",
    stack: ["React", "Python", "API"],
    description: "Security-focused solution built under time constraints.",
  },
  {
    name: "Hackathon Project 2",
    stack: ["Node.js", "Express", "PostgreSQL"],
    description: "Collaborative project integrating threat intel feeds.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl">Projects</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 flex flex-col"
          >
            <h3 className="text-lg font-medium">{p.name}</h3>
            <p className="mt-2 text-sm text-muted">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-full text-xs border border-white/15 bg-white/[0.03]"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {p.github && (
                <a className="text-accent hover:underline" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {p.demo && (
                <a className="text-accent hover:underline" href={p.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


