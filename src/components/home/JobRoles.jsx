// import Link from "next/link";

const roles = [
  {
    title: "Software Developer",
    href: "/software-developer-jobs-kerala",
    short: "SD",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop",
  },
  {
    title: "Frontend Developer",
    href: "/frontend-developer-jobs-kerala",
    short: "FE",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop",
  },
  {
    title: "React Developer",
    href: "/react-developer-jobs-kerala",
    short: "RE",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop",
  },
  {
    title: "Full Stack Developer",
    href: "/full-stack-developer-jobs-kerala",
    short: "FS",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop",
  },
  {
    title: "Python Developer",
    href: "/python-jobs-kerala",
    short: "PY",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop",
  },
  {
    title: "Java Developer",
    href: "/java-jobs-kerala",
    short: "JV",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop",
  },
  {
    title: "Software Testing",
    href: "/software-testing-jobs-kerala",
    short: "ST",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop",
  },
  {
    title: "QA Engineer",
    href: "/qa-jobs-kerala",
    short: "QA",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop",
  },
  {
    title: "Data Analyst",
    href: "/data-analyst-jobs-kerala",
    short: "DA",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop",
  },
  {
    title: "Accountant",
    href: "/accountant-jobs-kerala",
    short: "AC",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop",
  },
  {
    title: "HR",
    href: "/hr-jobs-kerala",
    short: "HR",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    href: "/marketing-jobs-kerala",
    short: "DM",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop",
  },
];

export default function JobRoles() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
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
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roles.map((role) => (
            <Link
              key={role.href}
              href={role.href}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-gray-200
                bg-white
                shadow-[0_8px_28px_rgba(17,25,79,0.07)]
                transition-all
                duration-300
                md:hover:-translate-y-1.5
                md:hover:border-[#3047D8]/20
                md:hover:shadow-[0_18px_42px_rgba(48,71,216,0.13)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-[190px] w-full overflow-hidden sm:h-[185px] md:h-[180px] lg:h-[175px]">
                <img
                  src={`${role.image}&w=800&q=72`}
                  srcSet={`
                    ${role.image}&w=400&q=72 400w,
                    ${role.image}&w=600&q=72 600w,
                    ${role.image}&w=800&q=72 800w
                  `}
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 767px) 50vw,
                    (max-width: 1023px) 33vw,
                    25vw
                  "
                  width="800"
                  height="450"
                  alt={`${role.title} jobs in Kerala`}
                  loading="lazy"
                  decoding="async"
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    md:group-hover:scale-[1.05]
                  "
                />

                {/* VERY LIGHT BOTTOM SHADE */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/[0.04] to-transparent" />

                {/* INITIAL BADGE */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-white/60
                    bg-white/95
                    text-xs
                    font-extrabold
                    text-[#3047D8]
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  {role.short}
                </div>

                {/* ARROW */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/60
                    bg-white/95
                    text-sm
                    font-bold
                    text-[#3047D8]
                    shadow-md
                    backdrop-blur-md
                  "
                >
                  →
                </div>

                {/* ROLE NAME ON IMAGE - MOBILE */}
                <div className="absolute inset-x-0 bottom-0 px-4 pb-4 sm:hidden">
                  <h3 className="text-xl font-bold leading-tight text-white drop-shadow-sm">
                    {role.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-5 sm:p-5 lg:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#3047D8]/[0.035]" />

                <div className="relative z-10">
                  {/* DESKTOP / TABLET TITLE */}
                  <h3 className="hidden text-lg font-bold leading-tight text-[#11194F] sm:block">
                    {role.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-500 sm:mt-2.5">
                    Explore {role.title} opportunities across Kerala.
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 sm:mt-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.11em] text-[#3047D8] sm:text-xs">
                      Explore Jobs
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F7FF] text-xs font-bold text-[#3047D8]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/software-jobs-kerala"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#11194F]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(17,25,79,0.16)]
            "
          >
            Explore Software Jobs

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}