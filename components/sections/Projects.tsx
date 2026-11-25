import Image from "next/image";
import { Section } from "@/components/Section";
import { experiments, projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="products"
      title="Products"
      intro="Things I design, build and run myself, from the database to the copy."
    >
      <div className="space-y-24">
        {projects.map((project, index) => (
          <article key={project.slug} aria-labelledby={`${project.slug}-title`}>
            <figure className="overflow-hidden rounded-xl border border-rule bg-surface">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1024px) 56rem, 100vw"
                priority={index === 0}
                className="h-auto w-full"
              />
            </figure>

            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_15rem] md:gap-12">
              <div className="max-w-prose">
                <p className="flex items-center gap-2 text-[0.95rem] text-muted">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-albero" />
                  {project.status}
                </p>
                <h3 id={`${project.slug}-title`} className="mt-2 text-3xl font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-lg font-medium leading-snug">{project.pitch}</p>
                <div className="mt-5 space-y-4 leading-[1.65]">
                  {project.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <dl className="space-y-5 text-[0.95rem] leading-relaxed">
                <div>
                  <dt className="text-muted">My part</dt>
                  <dd className="mt-1">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted">Built with</dt>
                  <dd className="mt-1">{project.stack}</dd>
                </div>
                <div>
                  <dt className="sr-only">Links</dt>
                  <dd className="flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                    {project.note ? <span className="text-muted">{project.note}</span> : null}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-rule pt-8">
        <h3 className="text-lg font-bold tracking-tight">Smaller experiments</h3>
        <ul className="mt-4 divide-y divide-rule">
          {experiments.map((item) => (
            <li key={item.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-semibold sm:w-40">{item.title}</span>
              <span className="flex-1 text-muted">{item.description}</span>
              <span className="flex gap-5">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} className="link" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
