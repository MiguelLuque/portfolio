type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-page gap-8 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight">
            {title}
          </h2>
          {intro ? <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted">{intro}</p> : null}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
