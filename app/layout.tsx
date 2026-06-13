import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://miguelluque.dev"),
  title: "Miguel Luque - Team Lead / Senior Backend Engineer",
  description:
    "Team Lead and Senior Backend Engineer based in Seville, Spain, building reliable distributed systems, backend platforms, AI-enabled products and workflow automations.",
  keywords: [
    "Miguel Luque",
    "Team Lead",
    "Senior Backend Engineer",
    "Java",
    "Spring Boot",
    "Kafka",
    "Microservices",
    "Next.js",
    "Supabase",
    "AI automation",
    "Seville",
  ],
  openGraph: {
    title: "Miguel Luque - Team Lead / Senior Backend Engineer",
    description:
      "Reliable distributed systems, backend leadership, product engineering and AI-enabled automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
