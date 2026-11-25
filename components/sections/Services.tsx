import { Section } from "@/components/Section";

const offers = [
  {
    title: "Backend and integrations",
    description:
      "APIs, event-driven services and integrations that have to keep working under load. Java, Spring Boot, Kafka.",
  },
  {
    title: "From idea to a working pilot",
    description:
      "A usable product with sign-in, data and deployment in place, built on Next.js or Expo with Supabase. Serenia and Aljarafe+ started this way.",
  },
  {
    title: "Automation with AI",
    description:
      "Workflows with n8n, APIs and language models that remove repetitive work, with checks around the parts a model shouldn't decide alone.",
  },
];

const toolbox = [
  { area: "Backend", tools: "Java 21, Spring Boot, Kafka, JMS/AMQ, JPA/Hibernate, OpenAPI" },
  { area: "Data and platform", tools: "PostgreSQL, DB2, MongoDB, OpenShift, Docker, Grafana, GitHub Actions" },
  { area: "Product and AI", tools: "Next.js, React, Expo, TypeScript, Supabase, AI SDK, n8n" },
];

export function Services() {
  return (
    <Section
      id="services"
      title="Freelance"
      intro="I take on occasional freelance projects."
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {offers.map((offer) => (
          <div key={offer.title}>
            <h3 className="text-lg font-bold tracking-tight">{offer.title}</h3>
            <p className="mt-2 leading-[1.6] text-muted">{offer.description}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-16 text-lg font-bold tracking-tight">Toolbox</h3>
      <dl className="mt-4 divide-y divide-rule border-y border-rule">
        {toolbox.map((row) => (
          <div key={row.area} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <dt className="font-semibold">{row.area}</dt>
            <dd className="text-muted">{row.tools}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
