import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">Let&apos;s talk about backend, product or automation work.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
          I am open to senior engineering roles, tech lead opportunities, freelance projects and collaborations around reliable backend systems, MVPs and AI-enabled automation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={`mailto:${profile.email}`} className="inline-flex items-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            <Mail className="mr-2 h-4 w-4" /> {profile.email}
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
          <Link href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </div>
        <div className="mt-8 flex justify-center text-sm text-slate-500">
          <MapPin className="mr-2 h-4 w-4" /> {profile.location}
        </div>
      </div>
    </section>
  );
}
