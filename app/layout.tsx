import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel Luque — Senior Software Engineer',
  description: 'Senior Software Engineer with 7+ years of experience building scalable microservices and enterprise APIs. Expert in Java, Spring Boot, and modern backend architecture. Based in Seville, Spain.',
  keywords: ['Senior Software Engineer', 'Java Developer', 'Spring Boot', 'Microservices', 'Backend Developer', 'Seville', 'Full Stack', 'React', 'Angular'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
