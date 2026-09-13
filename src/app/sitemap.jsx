// import { seoPages } from "@/data/seoPages";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap() {
  const seoUrls = Object.keys(seoPages).map((slug) => ({
    url: `${siteConfig.siteUrl}/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: siteConfig.siteUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.siteUrl}/community`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticPages, ...seoUrls];
}