import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";
import { seoPages } from "@/data/seoPages";


const sharedUpdates = [
  {
    code: "01",
    title: "IT & Software Jobs",
    description:
      "Explore software, development, testing, support and other technology opportunities.",
  },
  {
    code: "02",
    title: "Fresher Opportunities",
    description:
      "Stay updated with trainee, graduate, internship and entry-level openings.",
  },
  {
    code: "03",
    title: "Government Jobs",
    description:
      "Discover relevant government recruitment and public-sector opportunities.",
  },
  {
    code: "04",
    title: "Private Company Jobs",
    description:
      "Find hiring updates from private companies across different industries.",
  },
  {
    code: "05",
    title: "Walk-in Interviews",
    description:
      "Stay informed about direct hiring drives and walk-in recruitment events.",
  },
  {
    code: "06",
    title: "Internships & Trainee Jobs",
    description:
      "Explore internship and training opportunities for students and fresh graduates.",
  },
];

export default function SeoLandingPage({ page }) {
  return (
    <>
      <Breadcrumb
        items={[
          {
            name: page.title,
          },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4F7FF]">
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
          {/* HERO TEXT */}
          <div className="mx-auto max-w-4xl text-center">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#3047D8] sm:text-sm">
                Kerala IT Park Jobs
              </span>
            </div>

            {/* H1 */}
            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
              {page.heading}
            </h1>

            {/* INTRO */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:mt-6 md:text-lg">
              {page.intro}
            </p>
          </div>

          {/* PAGE IMAGE */}
          {page.image && (
            <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
              <div className="group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.10)] sm:rounded-[28px]">
                {/* IMAGE CONTAINER */}
                <div
                  className="
                    relative
                    flex
                    h-[190px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gray-50

                    sm:h-[280px]
                    md:h-[340px]
                    lg:h-[390px]
                  "
                >
                  <img
                    src={page.image}
                    alt={`${page.heading} - Kerala IT Park Jobs`}
                    loading="eager"
                    decoding="async"
                    className="
                      block
                      h-full
                      w-full
                      object-contain
                      object-center
                      transition-transform
                      duration-700

                      sm:object-cover
                      md:group-hover:scale-[1.03]
                    "
                  />

                  {/* DESKTOP/TABLET OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#11194F]/65 via-transparent to-transparent sm:block" />

                  {/* IMAGE INFO */}
                  <div className="absolute inset-x-0 bottom-0 hidden items-end justify-between gap-4 p-5 sm:flex sm:p-6 lg:p-8">
                    <div className="text-left">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                        Kerala Career Opportunities
                      </p>

                      <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                        {page.heading}
                      </h2>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-lg text-white backdrop-blur-sm sm:h-11 sm:w-11">
                      ↓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-7 sm:py-4"
            >
              View Latest Jobs on Instagram

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-lg sm:px-7 sm:py-4"
            >
              Join WhatsApp Channel

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* SMALL INFO STRIP */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-gray-500 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
              Kerala-focused updates
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
              Fresher friendly
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
              IT & Non-IT opportunities
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F7FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#3047D8]">
                Career Guide
              </div>

              <h2 className="mt-5 max-w-3xl text-2xl font-bold leading-tight text-[#11194F] sm:text-3xl lg:text-4xl">
                Find {page.title} with Kerala IT Park Jobs
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                <p>
                  Kerala IT Park Jobs helps job seekers stay informed about
                  career opportunities shared across Kerala. We regularly share
                  updates related to IT jobs, non-IT jobs, fresher vacancies,
                  government recruitment, internships, private company jobs and
                  walk-in interviews.
                </p>

                <p>
                  Our community is designed to make job discovery easier by
                  bringing important career updates together through Instagram,
                  WhatsApp Channels and WhatsApp job communities.
                </p>

                <p>
                  If you are searching for {page.title.toLowerCase()}, follow
                  our social channels to receive regular updates and discover
                  relevant opportunities more easily.
                </p>
              </div>
            </div>

            {/* SIDE CARD */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#11194F] p-6 text-white shadow-xl sm:p-7 lg:sticky lg:top-24">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#3047D8]/40 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
                  Stay Updated
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  Looking for {page.title}?
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Follow Kerala IT Park Jobs and receive regular job updates
                  through Instagram and WhatsApp.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Regular Kerala job updates",
                    "Fresher & experienced opportunities",
                    "IT, non-IT & government jobs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-200"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-blue-200">
                        ✓
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#11194F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Follow on Instagram

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SHARE */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#3047D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#3047D8]">
                Career Updates
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-[#11194F] sm:text-4xl">
              Job Updates We Share
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Stay updated with different career opportunities from across
              Kerala through our growing job community.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sharedUpdates.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-[0_18px_45px_rgba(48,71,216,0.10)]"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#3047D8] to-[#3B5BFF] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                    {item.code}
                  </div>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#3047D8]/20 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#3047D8]" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR SEARCHES */}
      {page.keywords?.length > 0 && (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3047D8]">
                  Related Keywords
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#11194F] sm:text-3xl">
                  Popular Searches
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-6 text-gray-500">
                Explore common searches related to this career category.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {page.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="cursor-default rounded-full border border-[#3047D8]/10 bg-[#F4F7FF] px-4 py-2 text-xs font-semibold text-[#3047D8] transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8]/30 hover:bg-white hover:shadow-md sm:text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PAGES */}
      {page.related?.length > 0 && (
        <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3047D8]">
                  Continue Exploring
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#11194F] sm:text-3xl">
                  Explore Related Job Searches
                </h2>
              </div>

              <Link
                href="/jobs-in-kerala"
                className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#3047D8]"
              >
                View Kerala Jobs

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.related.map((slug) => {
                const relatedPage = seoPages[slug];

                if (!relatedPage) return null;

                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3047D8]/30 hover:shadow-[0_15px_35px_rgba(48,71,216,0.09)] sm:p-6"
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#3047D8]/5 transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-bold leading-6 text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-lg">
                          {relatedPage.title}
                        </h3>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                          →
                        </span>
                      </div>

                      <p className="mt-4 text-sm font-semibold text-[#3047D8]">
                        Explore Jobs
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* COMMUNITY CTA */}
      <section className="relative overflow-hidden bg-[#11194F] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3047D8]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Kerala Job Community
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Join Kerala IT Park Jobs Community
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            Follow our Instagram page and join our WhatsApp communities to stay
            updated with job opportunities from across Kerala.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-7"
            >
              Follow Instagram

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-lg sm:px-7"
            >
              Join WhatsApp Channel

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={siteConfig.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 sm:px-7"
            >
              Join WhatsApp Groups

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}