import { notFound } from "next/navigation";
import { seoPages } from "@/data/seoPages";
import { siteConfig } from "@/data/siteConfig";
import SeoLandingPage from "@/components/seo/SeoLandingPage";

export function generateStaticParams() {
  return Object.keys(seoPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const page = seoPages[slug];

  if (!page) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,

    alternates: {
      canonical: `${siteConfig.siteUrl}/${slug}`,
    },

    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `${siteConfig.siteUrl}/${slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function SeoPage({ params }) {
  const { slug } = await params;

  const page = seoPages[slug];

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}