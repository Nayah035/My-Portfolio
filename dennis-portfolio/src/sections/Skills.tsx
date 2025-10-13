"use client";

import { motion } from "framer-motion";

const categories: { title: string; skills: string[] }[] = [
  {
    title: "Programming",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express"],
  },
  {
    title: "Security",
    skills: [
      "Network Security",
      "Vulnerability Assessment",
      "Penetration Testing",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Linux", "Wireshark"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl">Skills</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <h3 className="text-accent font-medium">{cat.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full border border-accent/30 text-sm text-accent/95 bg-accent/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


