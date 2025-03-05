'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import AboutMe from "@/data/about"
import skills from "@/data/skills"
import experience from "@/data/experience"
import { Github, Linkedin, Mail, ChevronDown, Globe, MessageCircle, X, Clock, Menu, Home, User, Code, Briefcase, FolderOpen } from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useRef } from "react"
import projects from "@/data/projects"

export default function Component() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleSection = (section: string) => {
    setExpandedJob(expandedJob === section ? null : section)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      smoothScroll(elementPosition - offset, 1000)
    }
  }

  // Custom smooth scrolling function
  const smoothScroll = (target: number, duration: number) => {
    const start = window.pageYOffset
    const distance = target - start
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = ease(timeElapsed, start, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'personal-projects']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          } else {
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }])
      setInputMessage('')
      // Simulate bot response (replace with actual logic later)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! I'll get back to you soon.", sender: 'bot' }])
      }, 1000)
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans overflow-hidden">
      <div className="relative z-10">
        <header className="sticky top-0 z-20 backdrop-blur-sm bg-white/75 dark:bg-black/75 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Miguel</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'personal-projects', label: 'Personal Projects', icon: FolderOpen }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm relative group flex items-center gap-1.5 py-2 px-1 ${activeSection === section.id
                    ? 'font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                  {React.createElement(section.icon, {
                    className: `h-4 w-4 ${activeSection === section.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                      }`
                  })}
                  <span className={`${activeSection === section.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : ''}`}>
                    {section.label}
                  </span>
                  <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${activeSection === section.id ? 'scale-x-100' : ''
                    }`} />
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <div className="hidden md:flex space-x-2">
                <Link href="mailto:miguel.luque.dev@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
                <Link href="https://github.com/miguelluque" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                    <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/miguel-luque-mu%C3%B1oz-software-developer/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-lg z-30">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {[
                    { id: 'about', label: 'About', icon: User },
                    { id: 'skills', label: 'Skills', icon: Code },
                    { id: 'experience', label: 'Experience', icon: Briefcase },
                    { id: 'personal-projects', label: 'Personal Projects', icon: FolderOpen }
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleNavigation(section.id)}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${activeSection === section.id
                        ? 'bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                        }`}
                    >
                      {React.createElement(section.icon, {
                        className: `h-5 w-5 ${activeSection === section.id
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400'
                          }`
                      })}
                      <span className={`${activeSection === section.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium' : ''}`}>
                        {section.label}
                      </span>
                    </button>
                  ))}

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-2">
                    <div className="flex justify-center space-x-4">
                      <Link href="mailto:miguel.luque.dev@gmail.com">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                          <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <span className="sr-only">Email</span>
                        </Button>
                      </Link>
                      <Link href="https://github.com/miguelluque" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                          <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                      <Link href="https://www.linkedin.com/in/miguel-luque-mu%C3%B1oz-software-developer/" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                          <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 py-8">
          <section id="about" className="mb-16 pt-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <AboutMe />
          </section>

          <section id="skills" className="mb-16 pt-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative p-6 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="experience" className="mb-16 pt-16 relative">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 mb-8 ml-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg" />

                  <div className="relative p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{job.role}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">{job.company}</p>
                        <p className="text-gray-500 dark:text-gray-500 flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          {job.location}
                        </p>
                      </div>
                      <p className="text-gray-500 dark:text-gray-500 font-medium">{job.period}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.projects.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => toggleSection(`job-${index}`)}
                      className="mt-4 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                    >
                      {expandedJob === `job-${index}` ? "Hide Details" : "Show Details"}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${expandedJob === `job-${index}` ? "rotate-180" : ""
                          }`}
                      />
                    </Button>

                    {expandedJob === `job-${index}` && (
                      <div className="mt-6 space-y-4 animate-fadeIn">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                          <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project Overview</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{job.projects.description}</p>
                          <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Sector: {job.projects.sector}
                          </p>
                          <h5 className="font-medium text-lg mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Key Responsibilities:</h5>
                          <ul className="space-y-2">
                            {job.projects.responsibilities.map((resp, respIndex) => (
                              <li
                                key={respIndex}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="personal-projects" className="mb-16 pt-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="text-yellow-600 dark:text-yellow-400 flex items-center text-sm px-3 py-1 rounded-full border border-yellow-200 dark:border-yellow-800">
                          <Clock className="h-4 w-4 mr-2" />
                          In progress
                        </span>
                      )}
                    </div>

                    <div className="flex-grow mb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        {project.sector}
                      </span>
                      <div className="flex gap-4">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        )}
                        {project.web && (
                          <Link
                            href={project.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                          >
                            <Globe className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-gray-100 dark:bg-gray-900 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Miguel. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Floating Chat Button */}
      {/* <Button
        className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg z-50"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button> */}

      {/* Chat Interface */}
      {/* {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chat with Miguel</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 mr-2"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )} */}
    </div>
  )
}