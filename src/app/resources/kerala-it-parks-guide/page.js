import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Kerala IT Parks Guide | Infopark, Technopark & Cyberpark",

  description:
    "A career-focused guide to Kerala IT parks including Infopark, Technopark, Cyberpark and SmartCity Kochi for students, freshers and job seekers.",

  alternates: {
    canonical: "/resources/kerala-it-parks-guide",
  },
};

const parks = [
  {
    title: "Infopark",
    location: "Kochi",
    text: "One of Kerala's major technology hubs with companies across software development, IT services, support, engineering and related sectors.",
    href: "/infopark-jobs",
  },
  {
    title: "Technopark",
    location: "Thiruvananthapuram",
    text: "A major technology ecosystem in Kerala with organisations operating across software, services, engineering and technology-driven industries.",
    href: "/technopark-jobs",
  },
  {
    title: "Cyberpark",
    location: "Kozhikode",
    text: "A growing technology hub serving North Kerala and creating opportunities across software and technology-related businesses.",
    href: "/cyberpark-jobs",
  },
  {
    title: "SmartCity Kochi",
    location: "Kochi",
    text: "A technology and business destination connected with Kerala's wider IT ecosystem and professional opportunities.",
    href: "/smartcity-kochi-jobs",
  },
];

export default function KeralaITParksGuidePage() {
  return (
    <>
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
            Understanding Kerala's technology hubs can help you identify where
            companies are located, which cities to follow and where to focus
            your job search.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
                Why It Matters
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
                Follow Locations, Not Only Job Titles
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Companies often cluster around technology hubs. Following the
              companies, locations and surrounding business ecosystem can help
              you discover opportunities that you may miss when searching only
              by one job title.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {parks.map((park) => (
              <Link
                key={park.title}
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
                  Explore {park.title} Opportunities →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[#11194F] sm:text-3xl">
            How to Use IT Park Information in Your Job Search
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Identify Companies",
                text: "Build a list of companies operating in locations relevant to your career.",
              },
              {
                title: "Follow Their Careers Pages",
                text: "Check official company career pages and professional channels regularly.",
              },
              {
                title: "Track Your Applications",
                text: "Maintain a simple record of companies, roles, applications and follow-ups.",
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
            Explore Opportunities Across Kerala's Technology Hubs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Keep your search broad enough to discover opportunities across
            different companies, locations and technology parks.
          </p>

          <Link
            href="/it-jobs-kerala"
            className="mt-7 inline-flex rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
          >
            Explore Kerala IT Opportunities →
          </Link>
        </div>
      </section>
    </>
  );
}