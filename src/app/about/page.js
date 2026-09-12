import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "About Kerala IT Park Jobs",

  description:
    "Learn about Kerala IT Park Jobs, a Kerala job community sharing IT jobs, fresher opportunities, government jobs, private jobs, internships and career updates.",

  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            name: "About Us",
          },
        ]}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4F7FF]">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* ABOUT BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
                About Us
              </span>
            </div>

            {/* LOGO + TITLE */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
              {/* LOGO */}
            <div className="group relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_8px_24px_rgba(17,25,79,0.14)] sm:h-14 sm:w-14 md:h-16 md:w-16">
  <Image
    src="/images/kerala_it_park_jobs_ (1).jpeg"
    alt="Kerala IT Park Jobs"
    fill
    sizes="(max-width: 640px) 50px, (max-width: 768px) 56px, 64px"
    className="scale-[1.10] object-cover object-center transition-transform duration-500 group-hover:scale-[1.16]"
    priority
  />

  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[#3047D8]/10" />
</div>

              {/* TITLE */}
              <h1 className="text-left text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
                Kerala IT Park Jobs
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              A Kerala-focused career community helping job seekers discover
              job opportunities, recruitment updates and career information
              through Instagram and WhatsApp.
            </p>

            {/* HERO BUTTONS */}
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

      {/* =========================================================
          ABOUT CONTENT
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
                Our Community
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-[#11194F] sm:text-3xl lg:text-4xl">
                Helping Kerala Job Seekers Stay Updated
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                <p>
                  Kerala IT Park Jobs was created to make it easier for job
                  seekers to discover career opportunities from across Kerala.
                </p>

                <p>
                  We share updates covering IT jobs, software jobs, fresher
                  opportunities, non-IT vacancies, government recruitment,
                  internships, private-sector vacancies and walk-in interviews.
                </p>

                <p>
                  Our coverage includes major locations such as Kochi,
                  Trivandrum, Calicut, Malappuram, Thrissur and Kannur, along
                  with technology hubs including Infopark, Technopark,
                  Cyberpark and SmartCity Kochi.
                </p>

                <p>
                  The website works together with our Instagram and WhatsApp
                  communities so job seekers can discover useful career
                  information and stay connected with regular updates.
                </p>
              </div>
            </div>

            {/* RIGHT COMMUNITY CARD */}
            <div className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#11194F] via-[#182463] to-[#3047D8] p-6 text-white shadow-xl sm:p-8">
              {/* DECORATION */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-4 top-12 h-24 w-24 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/5 blur-2xl" />

              <div className="relative z-10">
                {/* LOGO + BRAND */}
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-white shadow-lg transition-all duration-500 group-hover:scale-110">
                    <Image
                      src="/images/kerala_it_park_jobs_ (1).jpeg"
                      alt="Kerala IT Park Jobs"
                      fill
                      sizes="64px"
                      className="scale-[1.10] object-cover object-center"
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

                {/* CARD TITLE */}
                <h3 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                  One Place for Kerala Job Updates
                </h3>

                {/* CARD DESCRIPTION */}
                <p className="mt-4 text-sm leading-7 text-blue-100">
                  Stay connected with useful job and career updates from across
                  Kerala through our growing online community.
                </p>

                {/* FEATURES */}
                <div className="mt-6 space-y-3">
                  {[
                    "IT & Non-IT Jobs",
                    "Fresher Opportunities",
                    "Government Jobs",
                    "Internships & Walk-ins",
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

      {/* =========================================================
          SIMPLE INFO CARDS
      ========================================================= */}
      <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Kerala Focused",
                text: "Career updates and opportunities from locations across Kerala.",
              },
              {
                number: "02",
                title: "Different Job Categories",
                text: "IT, non-IT, fresher, government, internship and private jobs.",
              },
              {
                number: "03",
                title: "Stay Connected",
                text: "Follow through Instagram and WhatsApp for regular updates.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/25 hover:shadow-[0_16px_35px_rgba(48,71,216,0.10)]"
              >
                {/* TOP ANIMATION LINE */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#3047D8] transition-all duration-500 group-hover:w-full" />

                {/* NUMBER */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                  {item.number}
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-lg font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#11194F] py-14 text-white sm:py-16 lg:py-20">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#3047D8]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#3B5BFF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Stay Connected
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Join Kerala IT Park Jobs Community
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Follow our Instagram page and join our WhatsApp community to stay
            updated with opportunities from across Kerala.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {/* INSTAGRAM */}
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

            {/* WHATSAPP */}
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