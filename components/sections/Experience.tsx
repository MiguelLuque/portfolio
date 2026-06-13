import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Critical systems, delivery and hands-on engineering."
          description="Experience across retail, energy and banking environments, with a current focus on global ecommerce invoicing and legal document generation."
        />
        <div className="mt-10 space-y-5">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">{job.role}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-300">{job.company} - {job.client}</p>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{job.summary}</p>
                </div>
                <div className="shrink-0 rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">{job.period}</div>
              </div>
              <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                {job.highlights.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-sm leading-6 text-slate-400">{item}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
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
