import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Team Lead and Senior Backend Engineer in Seville. Java, Kafka and high-volume invoicing systems at work; AI products with a human in the loop on my own time.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.displayName}, Team Lead and Senior Backend Engineer`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.displayName}, Team Lead and Senior Backend Engineer`,
    description,
    url: "/",
    siteName: profile.displayName,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
