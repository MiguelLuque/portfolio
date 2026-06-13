import Link from "next/link";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export function Cv() {
  return (
    <section id="cv" className="border-t border-slate-800 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="CV"
          title="A concise view of my professional background."
          description="The downloadable PDF is available now, and this HTML summary highlights the parts most relevant for senior backend, tech lead and product engineering roles."
        />
        <div className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-sm font-semibold text-slate-50">Education</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Bachelor&apos;s in Software Engineering, University of Seville (2015 - 2019)</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-sm font-semibold text-slate-50">Certifications</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">AWS Certified Solutions Architect - Associate. Certified Professional Scrum Master.</p>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm font-semibold text-slate-50">Languages</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Spanish and English.</p>
          </div>
          <Link href={profile.cvPath} className="mt-6 inline-flex items-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
