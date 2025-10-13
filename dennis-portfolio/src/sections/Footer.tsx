export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container py-6 text-sm text-muted flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Dennis Muiruri Mbugua. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#skills" className="hover:text-foreground">Skills</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#experience" className="hover:text-foreground">Experience</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}


