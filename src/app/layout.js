import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  title: {
    default:
      "Kerala Jobs 2026 | IT, Fresher, Government & Private Jobs",
    template: "%s | Kerala IT Park Jobs",
  },

  description:
    "Find latest jobs in Kerala including IT jobs, fresher jobs, government jobs, private jobs, internships, walk-in interviews, Infopark jobs, Technopark jobs and Cyberpark jobs.",

  keywords: [
    "Kerala jobs",
    "Kerala IT jobs",
    "jobs in Kerala",
    "Kerala job vacancy",
    "latest jobs Kerala",
    "IT jobs Kerala",
    "IT Park Jobs in Kerala",
    "fresher jobs Kerala",
    "government jobs Kerala",
    "private jobs Kerala",
    "Infopark jobs",
    "Technopark jobs",
    "Cyberpark jobs",
    "jobs in Kochi",
    "jobs in Trivandrum",
    "jobs in Calicut",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kerala Jobs 2026 | Kerala IT Park Jobs",

    description:
      "Latest IT, non-IT, fresher, government and private job updates from across Kerala.",

    url: siteConfig.siteUrl,

    siteName: siteConfig.name,

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Kerala Jobs 2026 | Kerala IT Park Jobs",

    description:
      "Latest Kerala IT, fresher, government and private job updates.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: siteConfig.name,

    url: siteConfig.siteUrl,

    description: siteConfig.description,

    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.whatsappChannelUrl,
    ].filter((url) => url && url !== "#"),
  };

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.siteUrl,

    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}