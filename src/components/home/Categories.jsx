import Link from "next/link";

const categories = [
  {
    title: "IT Jobs",
    description: "Software, developer, testing and IT opportunities",
    href: "/it-jobs-kerala",
    short: "IT",
  },
  {
    title: "Fresher Jobs",
    description: "Latest opportunities for freshers and graduates",
    href: "/fresher-jobs-kerala",
    short: "FR",
  },
  {
    title: "Government Jobs",
    description: "Government recruitment opportunities across Kerala",
    href: "/government-jobs-kerala",
    short: "GV",
  },
  {
    title: "Non-IT Jobs",
    description: "HR, accounts, sales, marketing and other opportunities",
    href: "/non-it-jobs-kerala",
    short: "NI",
  },
  {
    title: "Walk-in Jobs",
    description: "Latest walk-in interviews and hiring drives",
    href: "/walk-in-jobs-kerala",
    short: "WI",
  },
  {
    title: "Internships",
    description: "Internship and training opportunities across Kerala",
    href: "/internships-kerala",
    short: "IN",
  },
  {
    title: "Work From Home",
    description: "Remote and work-from-home job opportunities",
    href: "/work-from-home-jobs-kerala",
    short: "WF",
  },
  {
    title: "Private Jobs",
    description: "Latest private company vacancies across Kerala",
    href: "/private-jobs-kerala",
    short: "PR",
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#F4F7FF] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3047D8]" />

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3047D8] sm:text-sm">
              Explore Opportunities
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
            Find Jobs in Kerala
            <span className="text-[#3047D8]"> by Category</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
            Explore popular career categories and discover IT jobs, fresher
            opportunities, government jobs, internships, walk-ins and more
            across Kerala.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/40 hover:shadow-xl sm:p-6"
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {/* hover background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F4F7FF] via-white to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* top accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#3047D8] transition-all duration-300 group-hover:w-full" />

              <div className="relative z-10">
                {/* icon badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F7FF] text-sm font-bold text-[#3047D8] transition duration-300 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                    {category.short}
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                    →
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-xl">
                  {category.title}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-600">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#3047D8]">
                  <span>Explore Jobs</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* bottom helper text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Explore the category that matches your career interest and
            qualification.
          </p>
        </div>
      </div>
    </section>
  );
}