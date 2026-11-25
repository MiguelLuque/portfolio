import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = `${profile.displayName}: Senior Backend Engineer and Team Lead, Seville`;
const description =
  "Senior Backend Engineer and Team Lead in Seville, Spain. Java, Spring Boot and Kafka for high-volume invoicing. Open to backend lead roles and freelance work.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: profile.displayName,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.displayName,
    locale: "en_GB",
    type: "profile",
    firstName: "Miguel",
    lastName: "Luque Muñoz",
    username: "MiguelLuque",
  },
  twitter: { card: "summary_large_image", title, description },
  // Set GOOGLE_SITE_VERIFICATION in Vercel to verify the site in Google Search Console.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f2f4f3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
