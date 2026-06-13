import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-slate-800 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Backend depth, delivery ownership and product curiosity."
          description="I am a Team Lead and Senior Backend Engineer with over 6 years of experience designing, building and maintaining scalable backend systems, microservices and event-driven architectures."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold text-slate-50">Reliable backend systems</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              My professional background is mainly focused on Java, Spring Boot, Kafka, databases, CI/CD and cloud-native environments for enterprise-grade systems.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold text-slate-50">Technical leadership</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              I coordinate delivery, support teammates, review technical solutions and help keep production-oriented engineering decisions grounded and maintainable.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold text-slate-50">AI-enabled products</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Beyond backend work, I build personal projects with Next.js, TypeScript and Supabase, exploring automation, coding agents, embeddings, semantic search and RAG-based applications.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
