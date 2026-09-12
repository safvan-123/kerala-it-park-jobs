import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

const whatsappChatUrl = "https://wa.me/917560929242";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B123F] text-white">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3047D8]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* TOP COMMUNITY STRIP */}
        <div className="mb-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-6 lg:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-100">
                  Stay Connected
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                Get Kerala Job Updates on Instagram & WhatsApp
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-gray-300">
                Follow our community for fresher jobs, IT opportunities,
                government jobs, walk-ins and career updates from across Kerala.
              </p>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Instagram

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-lg"
              >
                WhatsApp Channel

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/15"
              >
                Message Us

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* BRAND */}
          <div>
           <Link
  href="/"
  className="group inline-flex items-center gap-3"
>
  {/* LOGO */}
  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
    <Image
      src="/images/kerala_it_park_jobs_ (1).jpeg"
      alt="Kerala IT Park Jobs"
      fill
      sizes="44px"
      className="scale-[1.10] object-cover object-center"
    />

    <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />
  </div>

  {/* BRAND TEXT */}
  <div>
    <p className="font-bold text-white transition-colors duration-300 group-hover:text-blue-200">
      Kerala IT Park Jobs
    </p>

    <p className="mt-0.5 text-xs text-gray-400">
      Kerala Job Community
    </p>
  </div>
</Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Discover IT jobs, fresher opportunities, government jobs,
              private vacancies, internships and career updates from across
              Kerala.
            </p>

            {/* SOCIAL MINI LINKS */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/30 hover:text-white"
              >
                Instagram
              </a>

              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400/30 hover:text-white"
              >
                Channel
              </a>

              <a
                href={siteConfig.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400/30 hover:text-white"
              >
                Groups
              </a>
            </div>
          </div>

          {/* POPULAR SEARCHES */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-white">
              Popular Job Searches
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              {[
                ["IT Jobs in Kerala", "/it-jobs-kerala"],
                ["Fresher Jobs in Kerala", "/fresher-jobs-kerala"],
                ["Government Jobs", "/government-jobs-kerala"],
                ["Private Jobs", "/private-jobs-kerala"],
                ["Walk-in Interviews", "/walk-in-jobs-kerala"],
                ["Internships", "/internships-kerala"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8] transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-300" />

                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* LOCATIONS */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-white">
              Jobs by Location
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              {[
                ["Jobs in Kochi", "/jobs-in-kochi"],
                ["Jobs in Trivandrum", "/jobs-in-trivandrum"],
                ["Jobs in Calicut", "/jobs-in-calicut"],
                ["Jobs in Malappuram", "/jobs-in-malappuram"],
                ["Jobs in Thrissur", "/jobs-in-thrissur"],
                ["Jobs in Kannur", "/jobs-in-kannur"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8] transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-300" />

                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* COMMUNITY */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-white">
              Kerala IT Park Jobs
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/community"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Our Community
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Contact Us
              </Link>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 transition hover:text-pink-300"
              >
                Instagram
              </a>

              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 transition hover:text-green-300"
              >
                WhatsApp Channel
              </a>

              <a
                href={siteConfig.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 transition hover:text-green-300"
              >
                WhatsApp Groups
              </a>

              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-lg"
              >
                Chat on WhatsApp

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14">
          <div className="flex flex-col gap-3 text-center text-xs leading-6 text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">
            <p>
              © {new Date().getFullYear()} Kerala IT Park Jobs. All rights
              reserved.
            </p>

            <p>
              Helping Kerala job seekers discover opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}