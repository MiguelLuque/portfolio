import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-slate-800 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Side projects as product and automation practice."
          description="A curated set of tools and planned products that connect backend thinking, product engineering and practical AI automation."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{project.status}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-50">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.github ? <Link href={project.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100" aria-label={`${project.title} GitHub`}><Github className="h-4 w-4" /></Link> : null}
                  {project.demo ? <Link href={project.demo} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100" aria-label={`${project.title} demo`}><ExternalLink className="h-4 w-4" /></Link> : null}
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <p className="mt-3 text-sm leading-7 text-slate-500"><span className="text-slate-300">Problem:</span> {project.problem}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
