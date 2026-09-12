import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

export default function Community() {
  return (
    <section className="relative overflow-hidden bg-[#0F1748] py-16 text-white sm:py-20 lg:py-24">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#3047D8]/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3B5BFF]/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-300" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200 sm:text-sm">
              Stay Connected
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Join the Kerala IT Park Jobs
            <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
              Community
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base lg:text-lg">
            Follow our Instagram page and join our WhatsApp communities to stay
            updated with job opportunities, walk-ins, fresher openings and
            career updates across Kerala.
          </p>
        </div>

        {/* SOCIAL CARDS */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {/* INSTAGRAM */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[1px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)]"
          >
            <div className="relative h-full rounded-[27px] bg-[#141B50]/95 p-6 sm:p-7">
              {/* GLOW */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-pink-400/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-sm font-bold text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                    IG
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#11194F]">
                    →
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Instagram
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Follow daily job posts, fresher opportunities, walk-ins and
                  career updates.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-pink-200">
                  Follow Instagram

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* WHATSAPP CHANNEL */}
          <a
            href={siteConfig.whatsappChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#25D366] to-[#128C7E] p-[1px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,211,102,0.22)]"
          >
            <div className="relative h-full rounded-[27px] bg-[#141B50]/95 p-6 sm:p-7">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#25D366]/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-sm font-bold text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    WA
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#11194F]">
                    →
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  WhatsApp Channel
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Receive important Kerala job updates directly through our
                  WhatsApp Channel.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-green-300">
                  Join WhatsApp Channel

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* WHATSAPP GROUP */}
          <a
            href={siteConfig.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.06] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-white/[0.09] hover:shadow-[0_20px_50px_rgba(59,91,255,0.16)] sm:p-7"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-bold text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#3047D8]">
                  WG
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#11194F]">
                  →
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                WhatsApp Groups
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Join our job seeker communities and stay connected with Kerala
                career updates.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-200">
                Join WhatsApp Groups

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* BOTTOM TRUST STRIP */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur sm:px-7 sm:py-6">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="font-bold text-white">
                One community. Multiple ways to stay updated.
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-300">
                Choose Instagram, WhatsApp Channel or our WhatsApp job
                communities based on how you prefer to receive updates.
              </p>
            </div>

            <div className="flex justify-center sm:justify-end">
              {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />
                Kerala Job Updates
              </span> */}
              <Link
  href={siteConfig.instagramUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/40 hover:bg-white/15 hover:text-white hover:shadow-lg"
>
  <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />

  Kerala Job Updates

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}