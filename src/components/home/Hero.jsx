import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FF]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-[#3047D8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-wide text-[#3047D8] sm:text-sm">
                Kerala Job Updates
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.12] text-[#11194F] sm:text-5xl lg:mx-0 lg:text-6xl">
              Find the Latest

              <span className="relative mx-2 inline-block text-[#3047D8]">
                Jobs in Kerala

                <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#3047D8]/10" />
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
              Discover IT jobs, fresher opportunities, government jobs,
              private vacancies, internships, walk-in interviews and career
              updates from across Kerala.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              {/* Instagram */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-[#3047D8]
                  px-7 py-4
                  text-sm font-semibold text-white
                  shadow-lg shadow-blue-200
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:bg-[#2538B8]
                  hover:shadow-xl

                  active:-translate-y-1
                  active:bg-[#2538B8]
                  active:shadow-xl
                "
              >
                Follow on Instagram

                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-active:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  border border-[#3047D8]
                  bg-white
                  px-7 py-4
                  text-sm font-semibold text-[#3047D8]
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:bg-blue-50
                  hover:shadow-md

                  active:-translate-y-1
                  active:bg-blue-50
                  active:shadow-md
                "
              >
                Join WhatsApp Channel

                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-active:translate-x-1
                  "
                >
                  →
                </span>
              </a>

            </div>

            {/* QUICK LINKS */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">

              <span className="mr-1 text-sm font-medium text-gray-500">
                Explore:
              </span>

              <Link
                href="/fresher-jobs-kerala"
                className="
                  rounded-full
                  border border-blue-100
                  bg-white
                  px-4 py-2
                  text-sm font-medium text-[#3047D8]
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-[#3047D8]
                  hover:shadow-sm

                  active:-translate-y-0.5
                  active:border-[#3047D8]
                  active:shadow-sm
                "
              >
                Fresher Jobs
              </Link>

              <Link
                href="/it-jobs-kerala"
                className="
                  rounded-full
                  border border-blue-100
                  bg-white
                  px-4 py-2
                  text-sm font-medium text-[#3047D8]
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-[#3047D8]
                  hover:shadow-sm

                  active:-translate-y-0.5
                  active:border-[#3047D8]
                  active:shadow-sm
                "
              >
                IT Jobs
              </Link>

              <Link
                href="/jobs-in-kochi"
                className="
                  rounded-full
                  border border-blue-100
                  bg-white
                  px-4 py-2
                  text-sm font-medium text-[#3047D8]
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-[#3047D8]
                  hover:shadow-sm

                  active:-translate-y-0.5
                  active:border-[#3047D8]
                  active:shadow-sm
                "
              >
                Kochi Jobs
              </Link>

              <Link
                href="/infopark-jobs"
                className="
                  rounded-full
                  border border-blue-100
                  bg-white
                  px-4 py-2
                  text-sm font-medium text-[#3047D8]
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-[#3047D8]
                  hover:shadow-sm

                  active:-translate-y-0.5
                  active:border-[#3047D8]
                  active:shadow-sm
                "
              >
                Infopark Jobs
              </Link>

            </div>
          </div>

          {/* RIGHT SIDE VISUAL */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            <div className="relative rounded-[28px] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-100/70 sm:p-7">

              {/* Top line */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">

                <div>
                  <p className="text-sm font-semibold text-[#11194F]">
                    Kerala Career Updates
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Explore opportunities across Kerala
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FF]">
                  <span className="text-lg font-bold text-[#3047D8]">
                    K
                  </span>
                </div>

              </div>

              {/* CARDS */}
              <div className="mt-5 space-y-3">

                {/* IT JOBS */}
                <Link
                  href="/it-jobs-kerala"
                  className="
                    group
                    flex items-center justify-between
                    rounded-2xl
                    border border-gray-100
                    bg-[#F8FAFC]
                    p-4
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:bg-white
                    hover:shadow-md

                    active:-translate-y-1
                    active:border-blue-200
                    active:bg-white
                    active:shadow-md
                  "
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg">
                      💻
                    </div>

                    <div>
                      <p className="font-bold text-[#11194F]">
                        IT & Software Jobs
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Developer, Testing, QA & more
                      </p>
                    </div>

                  </div>

                  <span
                    className="
                      text-[#3047D8]
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-active:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* FRESHER JOBS */}
                <Link
                  href="/fresher-jobs-kerala"
                  className="
                    group
                    flex items-center justify-between
                    rounded-2xl
                    border border-gray-100
                    bg-[#F8FAFC]
                    p-4
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:bg-white
                    hover:shadow-md

                    active:-translate-y-1
                    active:border-blue-200
                    active:bg-white
                    active:shadow-md
                  "
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg">
                      🎓
                    </div>

                    <div>
                      <p className="font-bold text-[#11194F]">
                        Fresher Opportunities
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Entry-level & graduate jobs
                      </p>
                    </div>

                  </div>

                  <span
                    className="
                      text-[#3047D8]
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-active:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* GOVERNMENT JOBS */}
                <Link
                  href="/government-jobs-kerala"
                  className="
                    group
                    flex items-center justify-between
                    rounded-2xl
                    border border-gray-100
                    bg-[#F8FAFC]
                    p-4
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:bg-white
                    hover:shadow-md

                    active:-translate-y-1
                    active:border-blue-200
                    active:bg-white
                    active:shadow-md
                  "
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg">
                      🏛️
                    </div>

                    <div>
                      <p className="font-bold text-[#11194F]">
                        Government Jobs
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Kerala & all-India recruitment
                      </p>
                    </div>

                  </div>

                  <span
                    className="
                      text-[#3047D8]
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-active:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

              </div>

              {/* BOTTOM CTA */}
              <Link
                href="/community"
                className="
                  group
                  mt-5 block
                  rounded-2xl
                  bg-[#11194F]
                  p-5
                  text-left text-white
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:bg-[#182162]
                  hover:shadow-lg

                  active:-translate-y-1
                  active:bg-[#182162]
                  active:shadow-lg
                "
              >
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="font-semibold">
                      Never miss an opportunity
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-300">
                      Follow our community for regular Kerala job updates.
                    </p>
                  </div>

                  <div
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-full
                      bg-white/10
                      transition-all duration-300

                      group-hover:translate-x-1
                      group-hover:bg-white/20

                      group-active:translate-x-1
                      group-active:bg-white/20
                    "
                  >
                    →
                  </div>

                </div>
              </Link>

            </div>

            {/* Floating badge 1 */}
            <div className="absolute -left-3 -top-5 hidden animate-bounce rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-semibold text-[#3047D8]">
                Freshers
              </p>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                <p className="text-xs font-semibold text-[#11194F]">
                  New Updates
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}