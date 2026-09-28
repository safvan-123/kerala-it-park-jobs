import { seoPages } from "@/data/seoPages";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  const seoUrls = Object.entries(seoPages)
    // Don't include redirect / alias pages in sitemap
    .filter(([, page]) => page.pageType !== "alias")
    .map(([slug, page]) => ({
      url: `${baseUrl}/${slug}`,

      // Add lastModified only when we really know the update date
      ...(page.updatedAt
        ? { lastModified: new Date(page.updatedAt) }
        : {}),
    }));

  const staticPages = [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/community`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/resources`,
    },
    {
      url: `${baseUrl}/resources/job-search-guide-kerala`,
    },
    {
      url: `${baseUrl}/resources/resume-guide-for-freshers`,
    },
    {
      url: `${baseUrl}/resources/interview-preparation`,
    },
    {
      url: `${baseUrl}/resources/software-career-roadmap`,
    },
    {
      url: `${baseUrl}/resources/placement-preparation`,
    },
    {
      url: `${baseUrl}/resources/kerala-it-parks-guide`,
    },
  ];

  return [...staticPages, ...seoUrls];
}