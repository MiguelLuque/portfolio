'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import skills from "@/data/skills"
import experience from "@/data/experience"
import projects from "@/data/projects"
import {
  Github, Linkedin, Mail, ChevronDown, Menu, User, Code, Briefcase,
  FolderOpen, MapPin, ExternalLink, ArrowRight, X, ChevronRight,
  Server, Layers, Zap, Database, Cloud
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ─── Constants ───────────────────────────────────────────────────────────────

const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "3", label: "Sectors" },
  { value: "12+", label: "Technologies" },
]

const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
]

const SKILL_CATEGORIES = [
  { name: "Backend", icon: Server, color: "text-blue-400" },
  { name: "Frontend", icon: Layers, color: "text-violet-400" },
  { name: "Database", icon: Database, color: "text-emerald-400" },
  { name: "Cloud & DevOps", icon: Cloud, color: "text-orange-400" },
]

const ABOUT_CARDS = [
  {
    icon: Server,
    title: "Backend Engineering",
    body: "Expert in Java and Spring Boot ecosystem. Designed microservices architectures for enterprise applications across banking, energy, and retail sectors.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Layers,
    title: "Full-Stack Capabilities",
    body: "Beyond backend, I build engaging UIs with React, Next.js, and Angular. Developed mobile apps using Flutter with Supabase integration for real-time features.",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    body: "Driven by complex challenges. From scalable batch processes to real-time systems with Kafka — I architect elegant solutions to hard engineering problems.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
]

// ─── Types ────────────────────────────────────────────────────────────────────

type ExperienceJob = {
  role: string
  company: string
  location: string
  period: string
  projects: {
    sector: string
    description: string
    responsibilities: string[]
    technologies: string[]
  }
}

type Project = {
  title: string
  description: string
  sector: string
  technologies: string[]
  github: string | null
  web: string | null
  inProgress: boolean
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('')
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
              ML
            </div>
            <span className="font-semibold text-slate-200 tracking-tight">Miguel Luque</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-slate-800 text-blue-400'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop social + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="https://github.com/miguelluque" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-200 rounded-lg">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/miguel-luque-mu%C3%B1oz-software-developer/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-200 rounded-lg">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:miguel.luque.dev@gmail.com">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm h-9 px-4">
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map(item => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 text-sm font-medium transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                )
              })}
              <div className="pt-3 border-t border-slate-800 flex gap-3 justify-center">
                <Link href="https://github.com/miguelluque" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/miguel-luque-mu%C3%B1oz-software-developer/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="mailto:miguel.luque.dev@gmail.com">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200">
                    <Mail className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────────────────────────── */}
        <section className="relative py-24 lg:py-36 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-violet-950/20 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Open to new opportunities
              </div>

              {/* Name */}
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-5 leading-[1.1]">
                <span className="text-slate-100">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
                  Miguel Luque
                </span>
              </h1>

              {/* Role */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-violet-500 shrink-0" />
                <p className="text-xl lg:text-2xl text-slate-300 font-medium">Senior Software Engineer</p>
              </div>

              {/* Bio */}
              <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-2xl">
                Backend specialist with{' '}
                <span className="text-slate-200 font-medium">7+ years of experience</span>{' '}
                building scalable microservices and enterprise APIs. Expert in Java & Spring Boot,
                with proven delivery across{' '}
                <span className="text-slate-200 font-medium">banking, energy, and retail</span>{' '}
                sectors.
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-10">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Seville, Spain</span>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mb-16">
                <Link href="mailto:miguel.luque.dev@gmail.com">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-lg font-medium">
                    <Mail className="h-4 w-4 mr-2" />
                    Get in touch
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-600 px-6 rounded-lg font-medium bg-transparent"
                  onClick={() => scrollToSection('projects')}
                >
                  View my work
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                    <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
        <section id="about" className="py-20 border-t border-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="About" title="Who I am" />
            <div className="grid lg:grid-cols-3 gap-4 mt-10">
              {ABOUT_CARDS.map((card) => {
                const CardIcon = card.icon
                return (
                  <div
                    key={card.title}
                    className={`p-6 rounded-2xl border ${card.border} bg-slate-900/50 hover:bg-slate-900 transition-all duration-200`}
                  >
                    <div className={`inline-flex p-2.5 rounded-xl ${card.bg} mb-4`}>
                      <CardIcon className={`h-5 w-5 ${card.accent}`} />
                    </div>
                    <h3 className="text-base font-semibold text-slate-100 mb-2">{card.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
        <section id="skills" className="py-20 border-t border-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Skills" title="Technologies I work with" />
            <div className="mt-10 space-y-10">
              {SKILL_CATEGORIES.map((category) => {
                const CategoryIcon = category.icon
                const categorySkills = skills.filter(s => s.category === category.name)
                if (!categorySkills.length) return null
                return (
                  <div key={category.name}>
                    <div className="flex items-center gap-2.5 mb-4">
                      <CategoryIcon className={`h-4 w-4 ${category.color}`} />
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{category.name}</h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 transition-all duration-150 cursor-default"
                        >
                          <div className="w-9 h-9 flex items-center justify-center">
                            <Image
                              src={skill.logo}
                              alt={skill.name}
                              width={30}
                              height={30}
                              className="group-hover:scale-110 transition-transform duration-150"
                            />
                          </div>
                          <span className="text-xs text-slate-500 group-hover:text-slate-300 text-center font-medium leading-tight transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ─────────────────────────────────────────────────────── */}
        <section id="experience" className="py-20 border-t border-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Experience" title="Where I've worked" />
            <div className="mt-10 space-y-3">
              {(experience as ExperienceJob[]).map((job, index) => (
                <ExperienceCard
                  key={index}
                  job={job}
                  expanded={expandedJob === `job-${index}`}
                  onToggle={() => setExpandedJob(expandedJob === `job-${index}` ? null : `job-${index}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ───────────────────────────────────────────────────────── */}
        <section id="projects" className="py-20 border-t border-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Projects" title="What I've built" />
            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {(projects as Project[]).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-lg mx-auto">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                Let&apos;s build something together
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Currently open to new opportunities — full-time roles, freelance projects, or just a
                conversation about tech. I&apos;d love to hear from you.
              </p>
              <Link href="mailto:miguel.luque.dev@gmail.com">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-11 rounded-lg text-sm font-medium">
                  <Mail className="h-4 w-4 mr-2" />
                  miguel.luque.dev@gmail.com
                </Button>
              </Link>
              <div className="flex justify-center gap-2 mt-6">
                <Link href="https://github.com/miguelluque" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-slate-500 hover:text-slate-300 gap-2 text-sm">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/miguel-luque-mu%C3%B1oz-software-developer/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-slate-500 hover:text-slate-300 gap-2 text-sm">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Miguel Luque. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">{label}</p>
      <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
    </div>
  )
}

function ExperienceCard({
  job,
  expanded,
  onToggle,
}: {
  job: ExperienceJob
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 rounded-2xl transition-all duration-200 overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-slate-100 mb-1">{job.role}</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-blue-400 font-medium text-sm">{job.company}</span>
              <span className="text-slate-600 text-sm flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {job.location}
              </span>
            </div>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 whitespace-nowrap self-start">
            {job.period}
          </span>
        </div>

        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {job.projects.sector}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.projects.technologies.slice(0, 8).map((tech, i) => (
            <span key={i} className="px-2 py-0.5 text-xs text-slate-500 bg-slate-800/60 rounded border border-slate-700/50">
              {tech}
            </span>
          ))}
          {job.projects.technologies.length > 8 && (
            <span className="px-2 py-0.5 text-xs text-slate-600 bg-slate-800/40 rounded border border-slate-700/30">
              +{job.projects.technologies.length - 8} more
            </span>
          )}
        </div>

        <button
          onClick={onToggle}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors font-medium"
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          {expanded ? 'Hide details' : 'View responsibilities'}
        </button>
      </div>

      {expanded && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-slate-800/60">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{job.projects.description}</p>
          <ul className="space-y-2">
            {job.projects.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <ChevronRight className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                {resp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <h3 className="text-base font-semibold text-slate-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            {project.inProgress && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                In progress
              </span>
            )}
          </div>
          <span className="text-xs text-slate-600">{project.sector}</span>
        </div>
        <div className="flex gap-1 shrink-0">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-slate-800 transition-all"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {project.web && (
            <Link
              href={project.web}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-slate-800 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-0.5 text-xs text-slate-500 bg-slate-800/60 rounded border border-slate-700/50">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
