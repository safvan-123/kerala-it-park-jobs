import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title:
    "Kerala IT Parks Guide | Infopark, Technopark, Cyberpark & IT Jobs",

  description:
    "Explore Kerala IT parks including Infopark Kochi, Technopark Trivandrum, Cyberpark Kozhikode and SmartCity Kochi. Find IT jobs, fresher opportunities and career information across Kerala's technology hubs.",

  alternates: {
    canonical: "/resources/kerala-it-parks-guide",
  },

  openGraph: {
    title:
      "Kerala IT Parks Guide | Infopark, Technopark, Cyberpark & IT Jobs",
    description:
      "Career guide to Kerala IT parks including Infopark, Technopark, Cyberpark and SmartCity Kochi for freshers and IT job seekers.",
    url: "https://keralaitparkjobs.in/resources/kerala-it-parks-guide",
    siteName: "Kerala IT Park Jobs",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const parks = [
  {
    title: "Infopark Jobs in Kochi",
    shortTitle: "Infopark",
    location: "Kochi",
    text: "Infopark Kochi is one of Kerala's major technology hubs, with companies working across software development, IT services, testing, engineering, support and other technology sectors.",
    href: "/infopark-jobs",
  },
  {
    title: "Technopark Jobs in Trivandrum",
    shortTitle: "Technopark",
    location: "Thiruvananthapuram",
    text: "Technopark Trivandrum is one of Kerala's major IT ecosystems, with opportunities across software development, testing, engineering, IT services, support and technology-driven industries.",
    href: "/technopark-jobs",
  },
  {
    title: "Cyberpark Jobs in Kozhikode",
    shortTitle: "Cyberpark",
    location: "Kozhikode",
    text: "Cyberpark Kozhikode is an important technology hub in North Kerala, supporting software companies, IT services and growing technology-related career opportunities.",
    href: "/cyberpark-jobs",
  },
  {
    title: "SmartCity Kochi Jobs",
    shortTitle: "SmartCity Kochi",
    location: "Kochi",
    text: "SmartCity Kochi is part of Kerala's growing technology and business ecosystem, offering access to companies and professional opportunities across IT and related sectors.",
    href: "/smartcity-kochi-jobs",
  },
];

export default function KeralaITParksGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Kerala IT Parks Guide - Infopark, Technopark, Cyberpark and SmartCity Kochi",
    description:
      "Career-focused guide to Kerala IT parks including Infopark Kochi, Technopark Trivandrum, Cyberpark Kozhikode and SmartCity Kochi.",
    url: "https://keralaitparkjobs.in/resources/kerala-it-parks-guide",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://keralaitparkjobs.in/resources/kerala-it-parks-guide",
    },
    publisher: {
      "@type": "Organization",
      name: "Kerala IT Park Jobs",
      url: "https://keralaitparkjobs.in",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Career Resources",
        item: "https://keralaitparkjobs.in/resources",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kerala IT Parks Guide",
        item:
          "https://keralaitparkjobs.in/resources/kerala-it-parks-guide",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Major IT Parks in Kerala",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Infopark Kochi",
        url: "https://keralaitparkjobs.in/infopark-jobs",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technopark Trivandrum",
        url: "https://keralaitparkjobs.in/technopark-jobs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cyberpark Kozhikode",
        url: "https://keralaitparkjobs.in/cyberpark-jobs",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "SmartCity Kochi",
        url: "https://keralaitparkjobs.in/smartcity-kochi-jobs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Kerala IT Parks Guide" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
            Kerala Technology Hubs
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
            Kerala IT Parks Guide for Job Seekers
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            Explore Kerala's major IT parks including Infopark Kochi,
            Technopark Trivandrum, Cyberpark Kozhikode and SmartCity Kochi.
            Understanding these technology hubs can help freshers and
            experienced professionals focus their IT job search across Kerala.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Why It Matters
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Find IT Jobs by Following Kerala's Technology Hubs
            </h2>
          </div>

          <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Many technology companies operate in and around Kerala's major IT
            parks. Following Infopark, Technopark, Cyberpark and SmartCity
            Kochi can help you discover software jobs, IT vacancies, fresher
            opportunities, internships and company recruitment updates that
            you may miss when searching only by a single job title.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {parks.map((park) => (
              <Link
                key={park.shortTitle}
                href={park.href}
                className="group relative overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg sm:p-7"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#3047D8] transition-all duration-500 group-hover:w-full" />

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
                  {park.location}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#11194F]">
                  {park.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {park.text}
                </p>

                <span className="mt-6 inline-flex text-sm font-bold text-[#3047D8]">
                  Explore {park.shortTitle} Jobs →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[#11194F] sm:text-3xl">
            How to Use Kerala IT Park Information in Your Job Search
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Identify IT Companies",
                text: "Build a list of software and technology companies operating in Infopark, Technopark, Cyberpark, SmartCity Kochi and other locations relevant to your career.",
              },
              {
                title: "Follow Company Careers Pages",
                text: "Check official company career pages, LinkedIn updates and trusted recruitment channels regularly for new IT job openings and fresher opportunities.",
              },
              {
                title: "Track Your Applications",
                text: "Maintain a simple record of companies, job roles, locations, dates applied, application status and follow-ups to keep your IT job search organised.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30"
              >
                <span className="text-xs font-bold text-[#3047D8]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#11194F]">
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

      <section className="bg-[#11194F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Explore IT Jobs Across Kerala's Technology Hubs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Explore software jobs, IT vacancies, fresher opportunities and
            career information from Infopark, Technopark, Cyberpark,
            SmartCity Kochi and other technology locations across Kerala.
          </p>

          <Link
            href="/it-jobs-kerala"
            className="mt-7 inline-flex rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
          >
            Explore IT Jobs in Kerala →
          </Link>
        </div>
      </section>
    </>
  );
}