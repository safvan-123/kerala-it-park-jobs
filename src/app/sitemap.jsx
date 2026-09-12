import { seoPages } from "@/data/seoPages";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap() {
  const now = new Date();

  const seoUrls = Object.keys(seoPages).map((slug) => ({
    url: `${siteConfig.siteUrl}/${slug}`,

    lastModified: now,

    changeFrequency: "weekly",

    priority: 0.8,
  }));

  const staticPages = [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${siteConfig.siteUrl}/community`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${siteConfig.siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [
    ...staticPages,
    ...seoUrls,
  ];
}