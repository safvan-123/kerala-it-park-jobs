import Link from "next/link";
import "./categories.css";

const categories = [
  {
    title: "IT Jobs",
    description: "Software, developer, testing and IT opportunities",
    href: "/it-jobs-kerala",
    short: "IT",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop",
  },
  {
    title: "Fresher Jobs",
    description: "Latest opportunities for freshers and graduates",
    href: "/fresher-jobs-kerala",
    short: "FR",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop",
  },
  {
    title: "Government Jobs",
    description: "Government recruitment opportunities across Kerala",
    href: "/government-jobs-kerala",
    short: "GV",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop",
  },
  {
    title: "Non-IT Jobs",
    description: "HR, accounts, sales, marketing and other opportunities",
    href: "/non-it-jobs-kerala",
    short: "NI",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop",
  },
  {
    title: "Walk-in Jobs",
    description: "Latest walk-in interviews and hiring drives",
    href: "/walk-in-jobs-kerala",
    short: "WI",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop",
  },
  {
    title: "Internships",
    description: "Internship and training opportunities across Kerala",
    href: "/internships-kerala",
    short: "IN",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop",
  },
  {
    title: "Work From Home",
    description: "Remote and work-from-home job opportunities",
    href: "/work-from-home-jobs-kerala",
    short: "WF",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop",
  },
  {
    title: "Private Jobs",
    description: "Latest private company vacancies across Kerala",
    href: "/private-jobs-kerala",
    short: "PR",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gray-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gray-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gray-700" />

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-700 sm:text-sm">
              Explore Opportunities
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
            Find Jobs in Kerala
            <span className="text-gray-700"> by Category</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
            Explore popular career categories and discover IT jobs, fresher
            opportunities, government jobs, internships, walk-ins and more
            across Kerala.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className="
                category-card
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
              "
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  flex
                  h-[165px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gray-50
                  sm:h-[170px]
                  md:h-[175px]
                  lg:h-[165px]
                "
              >
                <img
                  src={`${category.image}&w=800&q=72`}
                  srcSet={`
                    ${category.image}&w=400&q=72 400w,
                    ${category.image}&w=600&q=72 600w,
                    ${category.image}&w=800&q=72 800w
                  `}
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    25vw
                  "
                  width="800"
                  height="450"
                  alt={`${category.title} opportunities in Kerala`}
                  loading="lazy"
                  decoding="async"
                  className="
                    block
                    h-full
                    w-full
                    object-contain
                    object-center
                    transition-transform
                    duration-500
                    ease-out
                    sm:object-cover
                    md:group-hover:scale-105
                  "
                />

                {/* Short badge */}
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
                    rounded-xl
                    border
                    border-gray-200
                    bg-white/95
                    text-sm
                    font-bold
                    text-gray-800
                    shadow-md
                    backdrop-blur-sm
                  "
                >
                  {category.short}
                </div>

                {/* Arrow */}
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
                    border-gray-200
                    bg-white/95
                    text-sm
                    font-bold
                    text-gray-800
                    shadow-md
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    md:group-hover:translate-x-1
                    md:group-hover:bg-gray-900
                    md:group-hover:text-white
                  "
                >
                  →
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-5 sm:p-6">
                <div
                  className="
                    category-hover-background
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-gray-50
                    via-white
                    to-white
                  "
                />

                <div className="relative z-10">
                  <h3 className="category-title text-lg font-bold text-[#11194F] sm:text-xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-800">
                    <span>Explore Jobs</span>

                    <span className="category-bottom-arrow transition-transform duration-300 md:group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom helper text */}
        <div className="mt-10 text-center">
          <p className="text-sm leading-6 text-gray-500">
            Explore the category that matches your career interest and
            qualification.
          </p>
        </div>
      </div>
    </section>
  );
}