import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="font-display text-lg tracking-wide">
            <span className="text-accent">&lt;/&gt;</span> Dennis Muiruri
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
