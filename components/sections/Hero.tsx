import { profile } from "@/data/profile";

const facts = [
  { term: "Now", detail: "Team Lead at Minsait" },
  { term: "Based in", detail: profile.location },
  { term: "Building software since", detail: "2019" },
  { term: "Open to", detail: "Senior backend and tech lead roles, and freelance work" },
];

export function Hero() {
  return (
    <section id="top" className="px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-page">
        <h1 className="max-w-[16ch] text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
          Backend lead for systems that can&apos;t get the numbers wrong.
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div className="max-w-prose space-y-5 text-[1.125rem] leading-[1.65]">
            <p>
              I&apos;m Miguel Luque, Team Lead and Senior Backend Engineer at Minsait in Seville. My team runs
              the platform that issues invoices and legal documents for a global fashion retailer&apos;s online
              sales: Java, Kafka and more than half a million transactions a day.
            </p>
            <p className="text-muted">
              On my own time I build products end to end, using AI where it helps and plain rules where it
              shouldn&apos;t guess.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-base">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-ink px-5 py-3 font-semibold text-paper transition-colors hover:bg-tile"
              >
                Email me
              </a>
              <a href={profile.cvPath} className="link">
                Download CV (PDF)
              </a>
              <a href={profile.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} className="link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <dl className="grid content-start gap-5 border-l-2 border-albero pl-6 text-[0.95rem]">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-muted">{fact.term}</dt>
                <dd className="mt-0.5 font-semibold">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
