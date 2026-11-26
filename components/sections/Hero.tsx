import { ExternalLink } from "@/components/ExternalLink";
import { profile } from "@/data/profile";

const facts = [
  { term: "Experience", detail: "7 years in backend, the last 2 leading a team" },
  { term: "Stack", detail: "Java 21, Spring Boot, Kafka" },
  { term: "Based in", detail: profile.location },
  { term: "Open to", detail: "Senior backend and tech lead roles, and freelance work" },
];

const products = [
  { href: "#serenia-title", name: "Serenia", what: "AI support for anxiety with clinician review" },
  { href: "#aljarafe-title", name: "Aljarafe+", what: "a civic app for Seville and the Aljarafe towns" },
  { href: "#pokeplus-title", name: "PokePlus", what: "a team-preview assistant for competitive Pokémon" },
  { href: "#one-more-room-title", name: "One More Room", what: "a live logic game" },
];

export function Hero() {
  return (
    <section id="top" className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-page">
        <h1 className="max-w-[22ch] text-[clamp(2.4rem,5.6vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em] [text-wrap:balance]">
          Backend lead for systems that can&apos;t get the numbers wrong.
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div className="max-w-prose space-y-5 text-[1.125rem] leading-[1.65]">
            <p>
              I&apos;m Miguel Luque, Team Lead and Senior Backend Engineer at Minsait in Seville. My team runs
              the platform that issues invoices and legal documents for a global fashion retailer&apos;s online
              sales: Java, Kafka and more than half a million transactions a day.
            </p>
            <p className="text-muted">
              On my own time I design, build and run my own products:{" "}
              {products.map((product, index) => (
                <span key={product.href}>
                  <a href={product.href} className="font-medium text-ink underline decoration-rule underline-offset-[5px] hover:decoration-ink">
                    {product.name}
                  </a>
                  , {product.what}
                  {index < products.length - 2 ? "; " : index === products.length - 2 ? "; and " : "."}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-base">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-ink px-5 py-3 font-semibold text-paper transition-colors hover:bg-tile"
              >
                Email me
              </a>
              <a href={profile.cvPath} download className="link">
                Download CV (PDF)
              </a>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
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
