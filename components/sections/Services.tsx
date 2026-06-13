import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="border-t border-slate-800 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Freelance services for practical business outcomes."
          description="I help professionals and teams turn ideas, workflows and technical bottlenecks into reliable web products, automations and backend integrations."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6 transition hover:border-cyan-400/35 hover:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-50">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
