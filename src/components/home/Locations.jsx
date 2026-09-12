import Link from "next/link";

const locations = [
  {
    name: "Kochi",
    slug: "jobs-in-kochi",
    short: "KO",
    description: "IT, Infopark, startup and corporate opportunities",
  },
  {
    name: "Trivandrum",
    slug: "jobs-in-trivandrum",
    short: "TV",
    description: "Technopark, government and private sector jobs",
  },
  {
    name: "Calicut",
    slug: "jobs-in-calicut",
    short: "CL",
    description: "Cyberpark, software and business opportunities",
  },
  {
    name: "Malappuram",
    slug: "jobs-in-malappuram",
    short: "ML",
    description: "Private jobs, freshers and local hiring updates",
  },
  {
    name: "Thrissur",
    slug: "jobs-in-thrissur",
    short: "TS",
    description: "Finance, sales, IT and private company vacancies",
  },
  {
    name: "Kannur",
    slug: "jobs-in-kannur",
    short: "KN",
    description: "Latest openings across multiple industries",
  },
  {
    name: "Kollam",
    slug: "jobs-in-kollam",
    short: "KL",
    description: "Career opportunities for freshers and professionals",
  },
  {
    name: "Kottayam",
    slug: "jobs-in-kottayam",
    short: "KT",
    description: "Private, education and office-based job updates",
  },
  {
    name: "Palakkad",
    slug: "jobs-in-palakkad",
    short: "PK",
    description: "Industrial, private and entry-level opportunities",
  },
  {
    name: "Alappuzha",
    slug: "jobs-in-alappuzha",
    short: "AL",
    description: "Latest jobs and career opportunities in Alappuzha",
  },
  {
    name: "Wayanad",
    slug: "jobs-in-wayanad",
    short: "WY",
    description: "Local hiring and private sector opportunities",
  },
  {
    name: "Kasaragod",
    slug: "jobs-in-kasaragod",
    short: "KS",
    description: "Explore growing career opportunities in Kasaragod",
  },
];

export default function Locations() {
  return (
   <section
  id="locations"
  className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20 lg:py-24"
>
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#3047D8]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#3047D8] sm:text-sm">
                Jobs Across Kerala
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
              Find Opportunities
              <span className="block text-[#3047D8]">
                Near Your Location
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              Explore job updates from Kerala&apos;s major cities and districts.
              Choose your preferred location and discover career opportunities
              closer to you.
            </p>
          </div>

          <Link
            href="/jobs-in-kerala"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#3047D8]/20 bg-white px-5 py-3 text-sm font-semibold text-[#3047D8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8] hover:shadow-lg"
          >
            View All Kerala Jobs

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F7FF] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#3047D8] group-hover:text-white">
              →
            </span>
          </Link>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[0.9fr_2.1fr] lg:gap-7">
          {/* FEATURED CARD */}
          <div className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#11194F] via-[#182463] to-[#3047D8] p-6 text-white shadow-xl sm:p-8 lg:min-h-full">
            {/* DECORATIVE CIRCLES */}
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10" />

            <div className="absolute -right-6 top-8 h-28 w-28 rounded-full border border-white/10" />

            <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col">
              {/* FEATURED ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21C12 21 18 15.8 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 15.8 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="12"
                    cy="10.5"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
                Kerala Opportunities
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Jobs from all major districts
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
                Discover IT jobs, fresher jobs, government opportunities,
                internships, walk-ins and private vacancies from across Kerala.
              </p>

              {/* STATS */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">
                    12+
                  </p>

                  <p className="mt-1 text-xs text-blue-100">
                    Major Locations
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">
                    Kerala
                  </p>

                  <p className="mt-1 text-xs text-blue-100">
                    Statewide Updates
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/jobs-in-kerala"
                  className="group/button inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#11194F] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Kerala Jobs

                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* LOCATION GRID */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="group relative min-h-[180px] overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-[0_4px_25px_rgba(17,25,79,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/20 hover:shadow-[0_16px_40px_rgba(48,71,216,0.12)] sm:p-6"
              >
                {/* CORNER GRADIENT */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#3047D8]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#3047D8]/10" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    {/* LOCATION ICON */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                      {location.short}
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                      →
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                      Jobs in {location.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {location.description}
                    </p>
                  </div>

                  {/* LOCATION-SPECIFIC CTA */}
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#3047D8]">
                      Jobs in {location.name}

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}