import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Kerala Jobs WhatsApp & Instagram Community",

  description:
    "Join Kerala IT Park Jobs on Instagram, WhatsApp Channel and WhatsApp groups for IT jobs, fresher jobs, government jobs and career updates across Kerala.",

  alternates: {
    canonical: "/community",
  },
};

const communityOptions = [
  {
    type: "INSTAGRAM",
    title: "Follow Our Instagram",
    description:
      "Discover regular job posts, fresher opportunities, recruitment updates and career information.",
    href: siteConfig.instagramUrl,
    buttonText: "Follow Instagram",
    badgeClass:
      "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white",
    iconClass:
      "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white",
    borderHover: "hover:border-pink-300",
  },
  {
    type: "WHATSAPP CHANNEL",
    title: "Join WhatsApp Channel",
    description:
      "Receive important Kerala career and recruitment updates directly through WhatsApp.",
    href: siteConfig.whatsappChannelUrl,
    buttonText: "Join Channel",
    badgeClass: "bg-[#EAFBF0] text-[#159447]",
    iconClass: "bg-[#25D366] text-white",
    borderHover: "hover:border-[#25D366]/50",
  },
  {
    type: "WHATSAPP GROUPS",
    title: "Join Job Groups",
    description:
      "Connect with our Kerala job communities and stay informed about new career opportunities.",
    href: siteConfig.whatsappGroupUrl,
    buttonText: "Join Groups",
    badgeClass: "bg-[#F4F7FF] text-[#3047D8]",
    iconClass: "bg-[#3047D8] text-white",
    borderHover: "hover:border-[#3047D8]/40",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            name: "Community",
          },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4F7FF]">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
                Kerala Job Community
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
              Join Kerala IT Park Jobs Community
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              Stay connected with Kerala job opportunities through our
              Instagram page, WhatsApp Channel and WhatsApp job groups.
            </p>

            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-gray-500 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
                Kerala Job Updates
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
                Fresher Friendly
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3047D8]" />
                IT & Non-IT Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY CARDS */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Stay Connected
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Choose How You Want to Get Updates
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Connect with Kerala IT Park Jobs through your preferred platform.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {communityOptions.map((item, index) => (
              <a
                key={item.type}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(17,25,79,0.10)] sm:p-7 ${item.borderHover}`}
              >
                {/* TOP LINE */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#3047D8] to-[#3B5BFF] transition-all duration-500 group-hover:w-full" />

                {/* DECORATIVE CIRCLE */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#3047D8]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#3047D8]/10" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold shadow-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 ${item.iconClass}`}
                    >
                      {index + 1}
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3047D8] group-hover:bg-[#3047D8] group-hover:text-white">
                      →
                    </span>
                  </div>

                  <div className="mt-6">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide ${item.badgeClass}`}
                    >
                      {item.type}
                    </span>

                    <h2 className="mt-4 text-xl font-bold leading-tight text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-2xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#3047D8]">
                      {item.buttonText}

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE CTA */}
      <section className="relative overflow-hidden bg-[#11194F] py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#3047D8]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#3B5BFF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Kerala Career Updates
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Stay Connected. Never Miss an Opportunity.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Follow Kerala IT Park Jobs on Instagram and WhatsApp for regular
            career and recruitment updates from across Kerala.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
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

            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-lg"
            >
              WhatsApp Channel

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={siteConfig.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              WhatsApp Groups

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