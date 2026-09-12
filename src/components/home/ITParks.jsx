import Link from "next/link";

const parks = [
  {
    title: "Infopark Kochi",
    description:
      "Explore IT, software, fresher and technology opportunities in Infopark Kochi.",
    href: "/infopark-jobs",
    code: "01",
    location: "Kochi",
  },
  {
    title: "Technopark Trivandrum",
    description:
      "Discover software, IT and fresher jobs from Technopark Trivandrum.",
    href: "/technopark-jobs",
    code: "02",
    location: "Trivandrum",
  },
  {
    title: "Cyberpark Kozhikode",
    description:
      "Stay updated with IT and technology opportunities from Cyberpark Kozhikode.",
    href: "/cyberpark-jobs",
    code: "03",
    location: "Kozhikode",
  },
  {
    title: "SmartCity Kochi",
    description:
      "Explore technology and corporate career opportunities in SmartCity Kochi.",
    href: "/smartcity-kochi-jobs",
    code: "04",
    location: "Kochi",
  },
];

export default function ITParks() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-[#F4F7FF] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#3047D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
                Kerala Technology Hubs
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
              Explore Kerala&apos;s
              <span className="block text-[#3047D8]">
                Leading IT Parks
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              Discover software, IT, technology and fresher opportunities from
              Kerala&apos;s major technology parks.
            </p>
          </div>

          <Link
            href="/it-jobs-kerala"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#3047D8]/20 bg-white px-5 py-3 text-sm font-semibold text-[#3047D8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8] hover:shadow-lg"
          >
            View All IT Jobs

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F7FF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#3047D8] group-hover:text-white">
              →
            </span>
          </Link>
        </div>

        {/* PARK CARDS */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-6">
          {parks.map((park) => (
            <Link
              key={park.href}
              href={park.href}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(48,71,216,0.12)] sm:p-7 lg:p-8"
            >
              {/* DECORATIVE GLOW */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#3047D8]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#3047D8]/10" />

              {/* TOP ACCENT */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#3047D8] to-[#3B5BFF] transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* NUMBER BADGE */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[#3047D8] shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                      {park.code}
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                        IT Park
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#3047D8]">
                        {park.location}
                      </p>
                    </div>
                  </div>

                  {/* ARROW BUTTON */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                    →
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-2xl">
                  {park.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                  {park.description}
                </p>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-gray-200/80 pt-5">
                  <span className="text-sm font-bold text-[#3047D8]">
                    Jobs in {park.title}
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM INFO STRIP */}
        <div className="mt-10 rounded-3xl border border-[#3047D8]/10 bg-gradient-to-r from-[#F4F7FF] to-white px-5 py-5 sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-[#11194F]">
                Looking for Kerala IT opportunities?
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Explore developer, testing, software and fresher opportunities
                across Kerala&apos;s technology hubs.
              </p>
            </div>

            <Link
              href="/it-jobs-kerala"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#3047D8]"
            >
              Explore IT Jobs

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}