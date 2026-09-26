import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  title: {
    default: "Kerala IT Park Jobs | IT & Fresher Jobs in Kerala 2026",
    template: "%s | Kerala IT Park Jobs",
  },

  description:
    "Find IT jobs and fresher jobs in Kerala including Infopark jobs, Technopark jobs, Cyberpark jobs, software jobs, internships, walk-in interviews, private jobs and career opportunities.",

  applicationName: "Kerala IT Park Jobs",

  authors: [
    {
      name: "Kerala IT Park Jobs",
      url: siteConfig.siteUrl,
    },
  ],

  creator: "Kerala IT Park Jobs",

  publisher: "Kerala IT Park Jobs",

  category: "Jobs and Careers",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Kerala IT Park Jobs | IT & Fresher Jobs in Kerala 2026",

    description:
      "Explore IT jobs, fresher opportunities, software careers, Infopark jobs, Technopark jobs and Cyberpark jobs across Kerala.",

    url: siteConfig.siteUrl,

    siteName: siteConfig.name,

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Kerala IT Park Jobs | IT & Fresher Jobs in Kerala",

    description:
      "Explore Kerala IT jobs, fresher jobs, software careers, Infopark, Technopark and Cyberpark opportunities.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${siteConfig.siteUrl}/#organization`,

    name: siteConfig.name,

    alternateName: "Kerala IT Park Jobs",

    url: siteConfig.siteUrl,

    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}/images/kerala_it_park_jobs_ (1).jpeg`,
      contentUrl: `${siteConfig.siteUrl}/images/kerala_it_park_jobs_ (1).jpeg`,
    },

    description:
      "Kerala IT Park Jobs is a Kerala-focused jobs and career platform covering IT jobs, fresher opportunities, software careers, Infopark, Technopark, Cyberpark and career resources.",

    sameAs: [siteConfig.instagramUrl].filter(
      (url) => url && url !== "#"
    ),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${siteConfig.siteUrl}/#website`,

    name: siteConfig.name,

    alternateName: "Kerala IT Park Jobs",

    url: siteConfig.siteUrl,

    description:
      "Kerala IT jobs and career platform covering fresher jobs, software careers, Infopark jobs, Technopark jobs, Cyberpark jobs and opportunities across Kerala.",

    publisher: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },

    inLanguage: "en-IN",
  };

  return (
    <html lang="en-IN">
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