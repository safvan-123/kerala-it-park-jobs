const features = [
  {
    number: "01",
    title: "Daily Job Updates",
    description:
      "Stay informed with job opportunities shared regularly through our community.",
  },
  {
    number: "02",
    title: "IT & Non-IT Jobs",
    description:
      "Discover technology, private-sector and non-technical career opportunities.",
  },
  {
    number: "03",
    title: "Fresher Opportunities",
    description:
      "We share opportunities relevant to fresh graduates and entry-level candidates.",
  },
  {
    number: "04",
    title: "Jobs Across Kerala",
    description:
      "Explore opportunities from Kochi, Trivandrum, Calicut, Malappuram and other locations.",
  },
  {
    number: "05",
    title: "Walk-in Interviews",
    description:
      "Stay updated with direct recruitment events and walk-in hiring opportunities.",
  },
  {
    number: "06",
    title: "Government Jobs",
    description:
      "Discover relevant government recruitment and public-sector job updates.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
              Kerala Job Community
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
            Why Follow
            <span className="text-[#3047D8]"> Kerala IT Park Jobs?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Stay connected with a Kerala-focused job community that makes it
            easier to discover relevant career opportunities across different
            industries and locations.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[24px] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-[0_18px_45px_rgba(48,71,216,0.12)] sm:p-7"
            >
              {/* DECORATIVE GLOW */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3047D8]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#3047D8]/10" />

              {/* TOP LINE */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#3047D8] to-[#3B5BFF] transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">
                {/* NUMBER + DECORATION */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F7FF] text-sm font-bold text-[#3047D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3047D8] group-hover:text-white">
                    {feature.number}
                  </div>

                  <div className="h-2.5 w-2.5 rounded-full bg-[#3047D8]/20 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#3047D8]" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {feature.description}
                </p>

                {/* BOTTOM DECORATIVE LINE */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-[2px] w-8 rounded-full bg-[#3047D8]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#3047D8]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 transition-colors duration-300 group-hover:text-[#3047D8]">
                    Kerala Jobs
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-10 rounded-3xl border border-[#3047D8]/10 bg-white/80 p-5 text-center shadow-sm backdrop-blur sm:p-6">
          <p className="text-sm leading-7 text-gray-600 sm:text-base">
            Follow Kerala IT Park Jobs to stay connected with fresher,
            IT, non-IT, government, walk-in and career opportunities across Kerala.
          </p>
        </div>
      </div>
    </section>
  );
}