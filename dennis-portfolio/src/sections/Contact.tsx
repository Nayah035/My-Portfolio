"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl">Contact</h2>
      <p className="mt-2 text-muted">Have an opportunity or collaboration in mind? Let’s talk.</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-md border border-white/15 bg-white/[0.02] px-3 py-2 outline-none focus:ring-2 focus:ring-accent/40"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full rounded-md border border-white/15 bg-white/[0.02] px-3 py-2 outline-none focus:ring-2 focus:ring-accent/40"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          rows={5}
          className="w-full rounded-md border border-white/15 bg-white/[0.02] px-3 py-2 outline-none focus:ring-2 focus:ring-accent/40"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-2.5 rounded-md bg-accent/90 text-[#0b1020] font-medium hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
      </form>
      <div className="mt-6 flex gap-5 text-sm">
        <a href="https://github.com/Nayah035" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/dennis-muiruri-5ba74a259/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
        <a href="https://x.com/Nayah_ke?t=K2QK7iNnyvju9fhD0CRq5g&s=09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Twitter</a>
        <a href="mailto:muiridennis35@gmail.com" className="text-accent hover:underline">Email</a>
      </div>
    </section>
  );
}


