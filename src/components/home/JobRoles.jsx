import Link from "next/link";

const roles = [
  {
    title: "Software Developer",
    href: "/software-developer-jobs-kerala",
    short: "SD",
  },
  {
    title: "Frontend Developer",
    href: "/frontend-developer-jobs-kerala",
    short: "FE",
  },
  {
    title: "React Developer",
    href: "/react-developer-jobs-kerala",
    short: "RE",
  },
  {
    title: "Full Stack Developer",
    href: "/full-stack-developer-jobs-kerala",
    short: "FS",
  },
  {
    title: "Python Developer",
    href: "/python-jobs-kerala",
    short: "PY",
  },
  {
    title: "Java Developer",
    href: "/java-jobs-kerala",
    short: "JV",
  },
  {
    title: "Software Testing",
    href: "/software-testing-jobs-kerala",
    short: "ST",
  },
  {
    title: "QA Engineer",
    href: "/qa-jobs-kerala",
    short: "QA",
  },
  {
    title: "Data Analyst",
    href: "/data-analyst-jobs-kerala",
    short: "DA",
  },
  {
    title: "Accountant",
    href: "/accountant-jobs-kerala",
    short: "AC",
  },
  {
    title: "HR",
    href: "/hr-jobs-kerala",
    short: "HR",
  },
  {
    title: "Digital Marketing",
    href: "/marketing-jobs-kerala",
    short: "DM",
  },
];

export default function JobRoles() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3047D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
              Career Categories
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
            Popular Job Roles
            <span className="text-[#3047D8]"> in Kerala</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Explore popular IT and non-IT career roles and find job
            opportunities that match your skills and career interests.
          </p>
        </div>

        {/* ROLE GRID */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roles.map((role) => (
            <Link
              key={role.href}
              href={role.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3047D8]/30 hover:shadow-[0_15px_35px_rgba(48,71,216,0.10)]"
            >
              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#3047D8]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#3047D8]/10" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  {/* INITIAL BADGE */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                    {role.short}
                  </div>

                  {/* ARROW */}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-lg">
                  {role.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Explore {role.title} opportunities across Kerala.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#3047D8]">
                  <span>{role.title} Jobs</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/software-jobs-kerala"
            className="group inline-flex items-center gap-3 rounded-full border border-[#3047D8]/20 bg-white px-5 py-3 text-sm font-semibold text-[#3047D8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8] hover:shadow-lg"
          >
            Explore Software Jobs

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F7FF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#3047D8] group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}