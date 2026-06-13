import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#top" className="flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-200">ML</span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:inline">{profile.displayName}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-slate-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={profile.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 transition hover:bg-slate-900 hover:text-slate-100" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 transition hover:bg-slate-900 hover:text-slate-100" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href={`mailto:${profile.email}`} className="hidden rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:inline-flex">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
