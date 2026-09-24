import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "About Kerala IT Park Jobs | Kerala Jobs & Career Community",

  description:
    "Learn about Kerala IT Park Jobs, a Kerala-focused career community sharing IT jobs, fresher jobs, Infopark jobs, Technopark jobs, Cyberpark jobs, internships, walk-in interviews and career updates.",

  keywords: [
    "Kerala IT Park Jobs",
    "Kerala jobs",
    "IT jobs Kerala",
    "Infopark jobs",
    "Technopark jobs",
    "Cyberpark jobs",
    "fresher jobs Kerala",
    "software jobs Kerala",
    "internships Kerala",
    "walk in interviews Kerala",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Kerala IT Park Jobs",
    description:
      "Kerala-focused job and career community sharing IT jobs, fresher opportunities, internships and recruitment updates across Kerala.",
    url: "/about",
    siteName: "Kerala IT Park Jobs",
    type: "website",
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kerala IT Park Jobs",
    description:
      "Kerala IT Park Jobs is a Kerala-focused career community helping job seekers discover IT jobs, fresher opportunities, internships, walk-in interviews and recruitment updates.",
    url: `${siteConfig.siteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Kerala IT Park Jobs",
      url: siteConfig.siteUrl,
      description:
        "Kerala-focused career platform sharing job opportunities and career updates from Infopark, Technopark, Cyberpark and locations across Kerala.",
      sameAs: [siteConfig.instagramUrl],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Breadcrumb
        items={[
          {
            name: "About Us",
          },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4F7FF]">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
                About Us
              </span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
              <div className="group relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_8px_24px_rgba(17,25,79,0.14)] sm:h-14 sm:w-14 md:h-16 md:w-16">
                <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px]">
                  <Image
                    src="/images/kerala_it_park_jobs_ (1).jpeg"
                    alt="Kerala IT Park Jobs"
                    fill
                    sizes="(max-width: 640px) 50px, (max-width: 768px) 56px, 64px"
                    className="scale-[1.10] object-cover object-center transition-transform duration-500 group-hover:scale-[1.16]"
                    priority
                  />
                </div>

                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[#3047D8]/10" />
              </div>

              <h1 className="text-left text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
                Kerala IT Park Jobs
              </h1>
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              A Kerala-focused job and career community helping job seekers
              discover IT jobs, fresher opportunities, internships, walk-in
              interviews and recruitment updates from across Kerala.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/community"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2538B8] hover:shadow-lg"
              >
                Join Our Community

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#3047D8]/20 bg-white px-6 py-3.5 text-sm font-bold text-[#3047D8] transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8] hover:shadow-md"
              >
                Follow Instagram

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
                Our Community
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-[#11194F] sm:text-3xl lg:text-4xl">
                Helping Kerala Job Seekers Discover Better Career Opportunities
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                <p>
                  Kerala IT Park Jobs is a Kerala-focused career platform
                  created to help job seekers discover relevant employment
                  opportunities and recruitment updates in one place.
                </p>

                <p>
                  We cover IT jobs, software jobs, fresher opportunities,
                  internships, private-sector vacancies, government
                  recruitment and walk-in interviews across Kerala.
                </p>

                <p>
                  Our coverage includes Kochi, Trivandrum, Kozhikode,
                  Malappuram, Thrissur and Kannur, together with major
                  technology hubs such as Infopark Kochi, Technopark
                  Trivandrum, Cyberpark Kozhikode and SmartCity Kochi.
                </p>

                <p>
                  Job seekers can also explore updates related to software
                  development, testing, data analytics, digital marketing,
                  engineering, HR and other career categories through our
                  website and online communities.
                </p>

                <p>
                  Kerala IT Park Jobs works together with our Instagram and
                  WhatsApp communities to help candidates stay connected with
                  regular job and career information from across the state.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#11194F] via-[#182463] to-[#3047D8] p-6 text-white shadow-xl sm:p-8">
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-4 top-12 h-24 w-24 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/5 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="group relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px]">
                    <Image
                      src="/images/kerala_it_park_jobs_ (1).jpeg"
                      alt="Kerala IT Park Jobs"
                      fill
                      sizes="(max-width: 640px) 50px, (max-width: 768px) 56px, 64px"
                      className="scale-[1.10] object-cover object-center transition-transform duration-500 group-hover:scale-[1.16]"
                      priority
                    />

                    <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />
                  </div>

                  <div className="min-w-0 text-left">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
                      Kerala Career Community
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/90">
                      Kerala IT Park Jobs
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                  One Place for Kerala Job & Career Updates
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-100">
                  Discover career updates from Kerala's major cities,
                  technology parks and growing employment sectors through our
                  online community.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "IT & Software Jobs",
                    "Fresher Opportunities",
                    "Internships & Walk-ins",
                    "Infopark, Technopark & Cyberpark Updates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-100"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">
                        ✓
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Kerala Focused",
                text: "Career opportunities and recruitment updates from major cities and IT parks across Kerala.",
              },
              {
                number: "02",
                title: "Multiple Career Categories",
                text: "Software, IT, fresher, internship, private-sector, government and walk-in opportunities.",
              },
              {
                number: "03",
                title: "Stay Connected",
                text: "Follow Kerala IT Park Jobs through our website, Instagram and WhatsApp community.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/25 hover:shadow-[0_16px_35px_rgba(48,71,216,0.10)]"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#3047D8] transition-all duration-500 group-hover:w-full" />

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                  {item.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#11194F] py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#3047D8]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#3B5BFF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Stay Connected
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Join Kerala IT Park Jobs Community
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Follow Kerala IT Park Jobs on Instagram and WhatsApp to stay
            connected with job opportunities, career updates and recruitment
            information from across Kerala.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-lg"
            >
              Join WhatsApp Channel

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