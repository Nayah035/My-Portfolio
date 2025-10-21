"use client";

import { motion } from "framer-motion";

export function Hero() {

  return (
    <section className="container pt-16 md:pt-24 pb-12" id="home">
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
        <div className="order-2 md:order-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl leading-tight"
          >
            Dennis Muiruri Mbugua
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-accent font-medium"
          >
            Cybersecurity Professional | Web Developer | Designer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-muted max-w-[60ch]"
          >
            I build secure, scalable, and elegant web applications with a security-first mindset.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md bg-accent/90 text-[#0b1020] font-medium hover:bg-accent transition-colors"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md border border-white/15 hover:bg-white/5 transition-colors"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Fsh3MLmPnuhXOvcgUKeY6BvZggCRWX17/view?usp=sharing"
              className="px-5 py-2.5 rounded-md border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
              download
            >
              Download CV
            </a>
            <a
              href="https://github.com/Nayah035"
              className="px-5 py-2.5 rounded-md border border-white/15 hover:bg-white/5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="order-1 md:order-1 flex items-center justify-center md:justify-start"
        >
          <div className="group relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] shadow-lg shadow-[color-mix(in_oklab,theme(colors.accent)_/_30%,transparent)] group-hover:shadow-[color-mix(in_oklab,theme(colors.accent-2)_/_35%,transparent)] transition-shadow duration-300" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dennis-profile-pic.jpg"
              alt="Profile photo"
              className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


