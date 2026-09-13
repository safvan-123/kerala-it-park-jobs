import Image from "next/image";

import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Kerala IT Park Jobs",

  description:
    "Contact Kerala IT Park Jobs for job updates, collaborations, employer enquiries and Kerala career community information.",

  alternates: {
    canonical: "/contact",
  },
};

const whatsappChatUrl = "https://wa.me/917560929242";
const phoneCallUrl = "tel:+917907806819";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            name: "Contact",
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

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
                Contact Us
              </span>
            </div>

          
 {/* LOGO + TITLE */}
<div className="mt-6">
  {/* FIRST LINE - CENTERED LOGO */}
  <div className="flex justify-center">
   <div className="group relative isolate h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_8px_24px_rgba(17,25,79,0.14)] sm:h-[52px] sm:w-[52px] md:h-14 md:w-14">
  <Image
    src="/images/kerala_it_park_jobs_ (1).jpeg"
    alt="Kerala IT Park Jobs"
    fill
    sizes="(max-width: 640px) 48px, (max-width: 768px) 52px, 56px"
    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
    priority
  />

  <span className="pointer-events-none absolute inset-0 z-10 rounded-full ring-1 ring-[#3047D8]/10" />
</div>
  </div>

  {/* SECOND LINE - CENTERED TITLE */}
  <h1 className="mt-4 text-center text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
    Connect with Kerala IT Park Jobs
  </h1>
</div>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              Reach us for collaborations, employer enquiries, community
              information and Kerala career updates through Instagram,
              WhatsApp or phone.
            </p>

            {/* QUICK CONTACT */}
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-gray-500 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
                Instagram
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                WhatsApp
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
                Phone
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT OPTIONS
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Choose How You Want to Connect
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Connect with Kerala IT Park Jobs using the option that is most
              convenient for you.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* INSTAGRAM */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(17,25,79,0.10)]"
            >
              {/* TOP LINE */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 transition-all duration-500 group-hover:w-full" />

              {/* GLOW */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-pink-500/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-pink-500/10" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-xs font-bold text-white shadow-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110">
                    IG
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-pink-400 group-hover:bg-pink-500 group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-pink-500">
                  Instagram
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#11194F]">
                  Connect on Instagram
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Follow our page for Kerala job updates and connect with us
                  through Instagram.
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#3047D8]">
                    Open Instagram

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>

            {/* WHATSAPP CHANNEL */}
            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#25D366]/50 hover:shadow-[0_20px_50px_rgba(17,25,79,0.10)]"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#25D366] transition-all duration-500 group-hover:w-full" />

              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#25D366]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#25D366]/10" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-xs font-bold text-white shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                    WA
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#159447]">
                  WhatsApp Channel
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#11194F]">
                  Join Our Channel
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Join our WhatsApp Channel for regular Kerala career and
                  recruitment updates.
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#159447]">
                    Open Channel

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>

            {/* DIRECT WHATSAPP CHAT */}
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#25D366]/50 hover:shadow-[0_20px_50px_rgba(17,25,79,0.10)]"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#25D366] to-[#159447] transition-all duration-500 group-hover:w-full" />

              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#25D366]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#25D366]/10" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#159447] text-[10px] font-bold text-white shadow-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110">
                    CHAT
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#159447]">
                  Direct WhatsApp
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#11194F]">
                  Message Us
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Send us a direct WhatsApp message for collaborations,
                  employer enquiries or other information.
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#159447]">
                    Chat on WhatsApp

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>

            {/* PHONE CALL */}
            <a
              href={phoneCallUrl}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/40 hover:shadow-[0_20px_50px_rgba(17,25,79,0.10)]"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#11194F] to-[#3047D8] transition-all duration-500 group-hover:w-full" />

              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#3047D8]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#3047D8]/10" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#11194F] text-[10px] font-bold text-white shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                    CALL
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#3047D8]">
                  Phone
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#11194F]">
                  Call Us
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Call Kerala IT Park Jobs directly for business,
                  collaboration and employer-related enquiries.
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#3047D8]">
                    Call 7907806819

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* CONTACT INFO STRIP */}
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-5 sm:flex-row sm:p-6">
            <div>
              <p className="text-sm font-bold text-[#11194F]">
                Need to contact us directly?
              </p>

              <p className="mt-1 text-sm text-gray-500">
                WhatsApp for messages or call us for direct enquiries.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-center sm:flex-row">
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-md"
              >
                WhatsApp: 7560929242
              </a>

              <a
                href={phoneCallUrl}
                className="rounded-xl bg-[#11194F] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3047D8] hover:shadow-md"
              >
                Call: 7907806819
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
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

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Connect with Kerala IT Park Jobs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Follow our social platforms for Kerala job updates or contact us
            directly for business and collaboration enquiries.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {/* INSTAGRAM */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Instagram

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-lg"
            >
              Message on WhatsApp

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* CALL */}
            <a
              href={phoneCallUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              Call Us

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