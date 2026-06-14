import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-slate-800 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Product lab: shipped demos, beta products and SaaS candidates."
          description="A curated view of products I am building, validating or preparing to redesign. Some are live betas, others are functional demos with clear next steps."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/45 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{project.status}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-50">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.github ? <Link href={project.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100" aria-label={`${project.title} GitHub`}><Github className="h-4 w-4" /></Link> : null}
                  {project.demo ? <Link href={project.demo} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100" aria-label={`${project.title} demo`}><ExternalLink className="h-4 w-4" /></Link> : null}
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <p className="mt-3 text-sm leading-7 text-slate-500"><span className="text-slate-300">Problem:</span> {project.problem}</p>
              <p className="mt-3 text-sm leading-7 text-slate-500"><span className="text-slate-300">Next:</span> {project.next}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300">{tech}</span>
                ))}
              </div>
              {project.demo ? (
                <Link href={project.demo} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100">
                  View live demo <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
