import { profile } from "@/data/profile";

const personId = `${profile.siteUrl}/#person`;
const websiteId = `${profile.siteUrl}/#website`;

/** schema.org graph for the home page: who the site is about and what the site is. */
export function homeJsonLd(dateModified: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: profile.siteUrl,
        name: profile.displayName,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${profile.siteUrl}/#profile`,
        url: profile.siteUrl,
        name: `${profile.displayName}, Senior Backend Engineer and Team Lead`,
        isPartOf: { "@id": websiteId },
        inLanguage: "en",
        dateModified,
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: profile.displayName,
        givenName: "Miguel",
        familyName: "Luque Muñoz",
        jobTitle: "Team Lead and Senior Backend Engineer",
        worksFor: { "@type": "Organization", name: "Minsait", url: "https://www.minsait.com" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Sevilla", url: "https://www.us.es" },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Certified Professional Scrum Master",
          credentialCategory: "certification",
        },
        address: { "@type": "PostalAddress", addressLocality: "Seville", addressRegion: "Andalusia", addressCountry: "ES" },
        email: `mailto:${profile.email}`,
        url: profile.siteUrl,
        image: `${profile.siteUrl}/opengraph-image`,
        knowsLanguage: ["es", "en"],
        knowsAbout: [
          "Backend development",
          "Java",
          "Spring Boot",
          "Apache Kafka",
          "Event-driven architecture",
          "Microservices",
          "PostgreSQL",
          "Technical leadership",
          "Electronic invoicing",
        ],
        sameAs: [profile.github, profile.linkedin],
      },
    ],
  };
}

/** Serialise for a <script type="application/ld+json"> without letting "<" close the tag. */
export function toJsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
