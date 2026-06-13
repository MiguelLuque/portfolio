import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 py-14 sm:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.12),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            {profile.availability}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">{profile.role}</h1>
          <p className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-cyan-200 sm:text-3xl">Building reliable distributed systems and AI-enabled products.</p>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">{profile.subheadline}</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View my work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href={`mailto:${profile.email}`} className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
              Contact me
            </Link>
            <Link href={profile.cvPath} className="inline-flex items-center rounded-lg border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-900">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-cyan-950/20">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm font-medium text-slate-500">Current focus</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50">Backend leadership for critical distributed systems</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Leading delivery in a global ecommerce invoicing and legal document generation platform, where reliability, traceability and country-specific requirements matter every day.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-2xl font-semibold text-cyan-300">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Core stack</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Java 21, Spring Boot, Kafka, PostgreSQL, DB2, MongoDB, OpenShift, GitHub Actions, Next.js, Supabase, n8n.</p>
          </div>
        </div>
      </div>
    </section>
  );
}



