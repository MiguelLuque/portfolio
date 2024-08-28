'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import AboutMe from "@/data/about"
import skills from "@/data/skills"
import experience from "@/data/experience"
import { Github, Linkedin, Mail, ChevronDown, Globe, MessageCircle, X, Clock } from "lucide-react"
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

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans overflow-hidden">
      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Miguel</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['about', 'skills', 'experience', 'personal-projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${activeSection === section ? 'text-black dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {section === 'personal-projects' ? 'Personal Projects' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
            <div className="flex space-x-2">
              <Link href="mailto:miguel.luque.dev@gmail.com">
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="https://github.com/miguelluque" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/miguel-luque-mu%C3%B1oz-software-developer/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section id="about" className="mb-16 pt-16">
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <AboutMe />
          </section>

          <section id="skills" className="mb-16 pt-16">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="mb-16 pt-16">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {experience.map((job, index) => (
              <Card key={index} className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{job.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-500">{job.location}</p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-500">{job.period}</p>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.projects.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  onClick={() => toggleSection(`job-${index}`)}
                  className="mt-2 p-0 h-auto font-normal text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  {expandedJob === `job-${index}` ? "Hide Projects" : "Show Projects"}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expandedJob === `job-${index}` ? "rotate-180" : ""}`} />
                </Button>
                {expandedJob === `job-${index}` && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-lg mb-2">Project</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{job.projects.description}</p>
                      <p className="text-gray-500 dark:text-gray-400 mb-2">Sector: {job.projects.sector}</p>
                      <h5 className="font-medium text-md mb-2">Responsibilities:</h5>
                      <ul className="list-disc list-inside mb-2">
                        {job.projects.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-600 dark:text-gray-300">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </section>

          <section id="personal-projects" className="mb-16 pt-16">
            <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    {project.inProgress && (
                      <span className="text-yellow-500 flex items-center text-xs">
                        <Clock className="h-4 w-4 mr-1" />
                        In progress
                      </span>
                    )}
                  </div>
                  <div className="flex-grow overflow-auto mb-4" style={{ maxHeight: '100px' }}>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Sector: {project.sector}
                    </span>
                    <div className="flex gap-2">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Github className="h-4 w-4 mr-1" />
                          GitHub
                        </Button>
                      </Link>
                      {project.web && (
                        <Link href={project.web} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="text-xs">
                            <Globe className="h-4 w-4 mr-1" />
                            Web
                          </Button>
                        </Link>
                      )}
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
            <h3 className="font-bold">Chat with Miguel</h3>
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