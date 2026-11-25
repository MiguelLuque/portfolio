import { Section } from "@/components/Section";
import { credentials, experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="work"
      title="Work"
      intro="Seven years on backend systems for retail, energy and banking, the last two leading a team."
    >
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-8">
            <p className="pt-1 text-[0.95rem] tabular-nums text-muted">{job.period}</p>
            <div className="max-w-prose">
              <h3 className="text-xl font-bold tracking-tight">{job.role}</h3>
              <p className="mt-1 text-[0.95rem] text-muted">
                {job.company}, {job.context}
              </p>
              <p className="mt-4 leading-[1.65]">{job.summary}</p>
              {job.highlights.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-[1.6] marker:text-albero">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">{job.stack}</p>
            </div>
          </li>
        ))}
      </ol>

      <dl className="mt-16 grid gap-6 border-t border-rule pt-8 sm:grid-cols-3">
        {credentials.map((item) => (
          <div key={item.label}>
            <dt className="text-[0.95rem] text-muted">{item.label}</dt>
            <dd className="mt-1 leading-snug">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
