import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const parks = [
  {
    title: "Infopark Kochi",
    description:
      "Explore the latest IT jobs, software jobs, fresher jobs and career opportunities at Infopark Kochi.",
    href: "/infopark-jobs",
    code: "01",
    location: "Kochi",
    image: "/images/infopark-kochi.jpg",
  },
  {
    title: "Technopark Trivandrum",
    description:
      "Discover the latest IT jobs, software jobs and fresher opportunities at Technopark Trivandrum.",
    href: "/technopark-jobs",
    code: "02",
    location: "Trivandrum",
    image: "/images/technopark-trivandrum.jpg",
  },
  {
    title: "Cyberpark Kozhikode",
    description:
      "Find IT jobs, software jobs, fresher openings and technology careers at Cyberpark Kozhikode.",
    href: "/cyberpark-jobs",
    code: "03",
    location: "Kozhikode",
    image: "/images/cyberpark-kozhikode.jpg",
  },
  {
    title: "SmartCity Kochi",
    description:
      "Explore software jobs, technology careers and corporate job opportunities at SmartCity Kochi.",
    href: "/smartcity-kochi-jobs",
    code: "04",
    location: "Kochi",
    image: "/images/smartcity-kochi.jpg",
  },
];

export default function ITParks() {
  const parksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.siteUrl}/#kerala-it-parks`,
    name: "Kerala IT Parks and Job Opportunities",
    description:
      "Explore jobs and career opportunities in Kerala's major IT parks including Infopark Kochi, Technopark Trivandrum, Cyberpark Kozhikode and SmartCity Kochi.",
    numberOfItems: parks.length,

    itemListElement: parks.map((park, index) => ({
      "@type": "ListItem",
      position: index + 1,

      item: {
        "@type": "CollectionPage",
        name: `${park.title} Jobs`,
        description: park.description,
        url: `${siteConfig.siteUrl}${park.href}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(parksSchema),
        }}
      />

      <section
        aria-labelledby="kerala-it-parks-heading"
        className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#1F218F]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#3436C8]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1F218F]/10 bg-[#F5F6FF] px-4 py-2">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 animate-pulse rounded-full bg-[#1F218F]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1F218F] sm:text-sm">
                  Kerala IT Parks & Job Hubs
                </span>
              </div>

              <h2
                id="kerala-it-parks-heading"
                className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl"
              >
                Explore Kerala&apos;s

                <span className="block text-[#1F218F]">
                  Leading IT Parks
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
                Discover the latest IT jobs, software jobs, fresher openings and
                technology career opportunities across Kerala&apos;s major IT
                parks.
              </p>
            </div>

            <Link
              href="/it-jobs-kerala"
              aria-label="View all IT Jobs in Kerala"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-[#1F218F]/20
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-[#1F218F]
                shadow-sm
                transition-all
                duration-300
                md:hover:-translate-y-1
                md:hover:border-[#1F218F]/50
                md:hover:shadow-lg
              "
            >
              View All IT Jobs in Kerala

              <span
                aria-hidden="true"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1F218F]
                  text-white
                  transition-all
                  duration-300
                  md:bg-[#F5F6FF]
                  md:text-[#1F218F]
                  md:group-hover:translate-x-1
                  md:group-hover:bg-[#1F218F]
                  md:group-hover:text-white
                "
              >
                →
              </span>
            </Link>
          </div>

          {/* Cards */}
          <div
            className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-7"
            aria-label="Major IT parks in Kerala"
          >
            {parks.map((park) => (
              <Link
                key={park.href}
                href={park.href}
                aria-label={`Explore ${park.title} jobs and career opportunities`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#1F218F]/20
                  bg-white
                  shadow-[0_16px_40px_rgba(31,33,143,0.10)]
                  transition-all
                  duration-300
                  md:border-gray-200
                  md:bg-white
                  md:shadow-sm
                  md:hover:-translate-y-2
                  md:hover:border-[#1F218F]/30
                  md:hover:shadow-[0_22px_55px_rgba(31,33,143,0.14)]
                "
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden sm:h-52 lg:h-56">
                  <Image
                    src={park.image}
                    alt={`${park.title} IT park and job opportunities`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      md:group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#11194F]/70 via-[#11194F]/10 to-transparent"
                  />

                  {/* Number badge */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#1F218F]
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      sm:left-6
                      sm:top-6
                    "
                  >
                    {park.code}
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                      Kerala IT Park
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {park.location}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white
                      text-[#1F218F]
                      shadow-md
                      transition-all
                      duration-300
                      sm:bottom-6
                      sm:right-6
                      md:group-hover:translate-x-1
                      md:group-hover:bg-[#1F218F]
                      md:group-hover:text-white
                    "
                  >
                    →
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-7 lg:p-8">
                  {/* Decorative glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-12 h-36 w-36 rounded-full bg-[#1F218F]/5 blur-2xl"
                  />

                  <div className="relative z-10">
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#1F218F]
                        transition-colors
                        duration-300
                        sm:text-2xl
                        md:text-[#11194F]
                        md:group-hover:text-[#1F218F]
                      "
                    >
                      {park.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                      {park.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-200/80 pt-5">
                      <span className="text-sm font-bold text-[#1F218F]">
                        Jobs in {park.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          translate-x-1
                          text-lg
                          font-semibold
                          text-[#1F218F]
                          transition-transform
                          duration-300
                          md:translate-x-0
                          md:group-hover:translate-x-1.5
                        "
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom info strip */}
          <div className="mt-10 rounded-3xl border border-[#1F218F]/10 bg-gradient-to-r from-[#F5F6FF] via-white to-white px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-[#11194F]">
                  Looking for IT jobs in Kerala?
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Explore developer, software testing, QA and fresher jobs
                  across Kerala&apos;s leading technology parks.
                </p>
              </div>

              <Link
                href="/it-jobs-kerala"
                aria-label="Explore all IT Jobs in Kerala"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#1F218F]"
              >
                Explore IT Jobs in Kerala

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 md:group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}