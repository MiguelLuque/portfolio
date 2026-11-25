import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { experiments, projects, type Project } from "@/data/projects";

const frame = "h-auto w-full rounded-xl border border-rule bg-surface";

function Screenshot({ project }: { project: Project }) {
  const { image, mobileImage, secondImage } = project;
  // Two images side by side share one height: each column is as wide as its aspect ratio.
  const pair = secondImage
    ? { gridTemplateColumns: `${image.width / image.height}fr ${secondImage.width / secondImage.height}fr` }
    : undefined;
  return (
    <figure>
      <div className={pair ? "hidden gap-4 sm:grid" : undefined} style={pair}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={pair ? "(min-width: 1024px) 34rem, 60vw" : "(min-width: 1024px) 56rem, 100vw"}
          className={`${frame} ${mobileImage && !pair ? "hidden sm:block" : ""}`}
        />
        {secondImage ? (
          <Image
            src={secondImage.src}
            alt={secondImage.alt}
            width={secondImage.width}
            height={secondImage.height}
            sizes="(min-width: 1024px) 22rem, 40vw"
            className={frame}
          />
        ) : null}
      </div>
      {mobileImage ? (
        <Image
          src={mobileImage.src}
          alt={image.alt}
          width={mobileImage.width}
          height={mobileImage.height}
          sizes="18rem"
          className={`${frame} max-w-[18rem] sm:hidden`}
        />
      ) : null}
    </figure>
  );
}

function Details({ project }: { project: Project }) {
  return (
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
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
          {project.note ? <span className="text-muted">{project.note}</span> : null}
        </dd>
      </div>
    </dl>
  );
}

function Intro({ project }: { project: Project }) {
  return (
    <>
      <p className="text-[0.95rem] text-muted">{project.status}</p>
      <h3
        id={`${project.slug}-title`}
        className="mt-1 scroll-mt-24 text-3xl font-extrabold tracking-tight"
      >
        {project.title}
      </h3>
      <p className="mt-2 text-lg font-medium leading-snug">{project.pitch}</p>
      <div className="mt-5 space-y-4 leading-[1.65]">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <Section
      id="products"
      title="Products"
      intro="Things I design, build and run myself, from the database to the copy."
    >
      <div className="space-y-20">
        {projects.map((project) => (
          <article key={project.slug} aria-labelledby={`${project.slug}-title`}>
            <Screenshot project={project} />
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_15rem] md:gap-12">
              <div className="max-w-prose">
                <Intro project={project} />
              </div>
              <Details project={project} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-rule pt-8">
        <h3 className="text-lg font-bold tracking-tight">Smaller experiments</h3>
        <ul className="mt-4 divide-y divide-rule">
          {experiments.map((item) => (
            <li key={item.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-semibold sm:w-40">{item.title}</span>
              <span className="flex-1 text-muted">{item.description}</span>
              <span className="flex gap-5">
                {item.links.map((link) => (
                  <ExternalLink key={link.href} href={link.href}>
                    {link.label}
                  </ExternalLink>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
