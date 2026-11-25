import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-rule bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28">
      <div className="mx-auto max-w-page">
        <h2 id="contact-title" className="max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          Hiring for a backend or tech lead role, or need something built?
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-[1.6] text-paper/75">
          Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block break-all text-[clamp(1.25rem,3.4vw,2.25rem)] font-bold underline decoration-albero decoration-2 underline-offset-8 transition-colors hover:text-albero"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
          <li>
            <a href={profile.cvPath} className="underline decoration-paper/30 underline-offset-[5px] hover:decoration-paper">
              Download CV (PDF)
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-paper/30 underline-offset-[5px] hover:decoration-paper">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline decoration-paper/30 underline-offset-[5px] hover:decoration-paper">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
