import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const locations = [
  {
    name: "Kochi",
    slug: "jobs-in-kochi",
    short: "KO",
    description:
      "Explore IT jobs, Infopark openings, startup jobs and corporate vacancies in Kochi.",
  },
  {
    name: "Trivandrum",
    slug: "jobs-in-trivandrum",
    short: "TV",
    description:
      "Find Technopark jobs, government vacancies and private sector jobs in Trivandrum.",
  },
  {
    name: "Calicut",
    slug: "jobs-in-calicut",
    short: "CL",
    description:
      "Explore Cyberpark jobs, software jobs, fresher openings and business roles in Calicut.",
  },
  {
    name: "Malappuram",
    slug: "jobs-in-malappuram",
    short: "ML",
    description:
      "Find private jobs, fresher vacancies and local hiring opportunities in Malappuram.",
  },
  {
    name: "Thrissur",
    slug: "jobs-in-thrissur",
    short: "TS",
    description:
      "Explore finance jobs, sales roles, IT jobs and private company vacancies in Thrissur.",
  },
  {
    name: "Kannur",
    slug: "jobs-in-kannur",
    short: "KN",
    description:
      "Discover fresher jobs, private vacancies and career opportunities across Kannur.",
  },
  {
    name: "Kollam",
    slug: "jobs-in-kollam",
    short: "KL",
    description:
      "Explore fresher jobs, private vacancies and career opportunities for professionals in Kollam.",
  },
  {
    name: "Kottayam",
    slug: "jobs-in-kottayam",
    short: "KT",
    description:
      "Find private jobs, education vacancies and office-based opportunities in Kottayam.",
  },
  {
    name: "Palakkad",
    slug: "jobs-in-palakkad",
    short: "PK",
    description:
      "Explore industrial jobs, private vacancies and entry-level opportunities in Palakkad.",
  },
  {
    name: "Alappuzha",
    slug: "jobs-in-alappuzha",
    short: "AL",
    description:
      "Discover the latest jobs, fresher openings and career opportunities in Alappuzha.",
  },
  {
    name: "Wayanad",
    slug: "jobs-in-wayanad",
    short: "WY",
    description:
      "Find local jobs, private sector vacancies and career opportunities across Wayanad.",
  },
  {
    name: "Kasaragod",
    slug: "jobs-in-kasaragod",
    short: "KS",
    description:
      "Explore private jobs, fresher openings and growing career opportunities in Kasaragod.",
  },
];

export default function Locations() {
  const locationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.siteUrl}/#kerala-job-locations`,
    name: "Jobs by Location in Kerala",
    description:
      "Explore jobs by location across Kerala including Kochi, Trivandrum, Calicut, Malappuram, Thrissur, Kannur, Kollam, Kottayam, Palakkad, Alappuzha, Wayanad and Kasaragod.",
    numberOfItems: locations.length,
    itemListElement: locations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CollectionPage",
        name: `Jobs in ${location.name}`,
        description: location.description,
        url: `${siteConfig.siteUrl}/${location.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationsSchema),
        }}
      />

      {/* SMALL AUTOMATIC ANIMATIONS */}
      <style>
        {`
          @keyframes locationFloat {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes slowFloat {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }

            50% {
              transform: translateY(-8px) translateX(4px);
            }
          }

          @keyframes softGlow {
            0%, 100% {
              opacity: 0.45;
              transform: scale(1);
            }

            50% {
              opacity: 0.8;
              transform: scale(1.08);
            }
          }

          @keyframes arrowMove {
            0%, 100% {
              transform: translateX(0);
            }

            50% {
              transform: translateX(4px);
            }
          }

          @keyframes mapPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }

            50% {
              transform: scale(1.12);
              opacity: 0.8;
            }
          }

          @keyframes shineMove {
            0% {
              transform: translateX(-140%);
            }

            60%, 100% {
              transform: translateX(180%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .location-float,
            .slow-float,
            .soft-glow,
            .arrow-auto,
            .map-pulse,
            .shine-auto {
              animation: none !important;
            }
          }
        `}
      </style>

      <section
        id="locations"
        aria-labelledby="kerala-job-locations-heading"
        className="relative overflow-hidden bg-[#F7F8FC] py-14 sm:py-18 lg:py-24"
      >
        {/* BACKGROUND */}
        <div
          aria-hidden="true"
          className="soft-glow pointer-events-none absolute -left-32 top-10 h-[320px] w-[320px] rounded-full bg-[#3047D8]/10 blur-[90px]"
          style={{
            animation: "softGlow 7s ease-in-out infinite",
          }}
        />

        <div
          aria-hidden="true"
          className="slow-float pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#6D7CFF]/10 blur-[100px]"
          style={{
            animation: "slowFloat 9s ease-in-out infinite",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
        >
          <div className="absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#3047D8]/30" />
          <div className="absolute right-[13%] top-[15%] h-2 w-2 rounded-full bg-[#3047D8]/20" />
          <div className="absolute bottom-[22%] left-[7%] h-2 w-2 rounded-full bg-[#3047D8]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
              <span
                aria-hidden="true"
                className="relative flex h-2.5 w-2.5"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-30" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-xs">
                Jobs Across Kerala
              </span>
            </div>

            <h2
              id="kerala-job-locations-heading"
              className="mt-5 text-3xl font-bold leading-[1.15] text-[#11194F] sm:text-4xl lg:text-5xl"
            >
              Find Jobs Closer to

              <span className="relative ml-2 inline-block text-[#3047D8]">
                You

                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#3047D8]/20"
                />
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg">
              Explore the latest jobs across Kerala&apos;s major cities and
              districts. Choose your preferred location to find IT, fresher,
              private and local career opportunities closer to you.
            </p>

            <Link
              href="/jobs-in-kerala"
              aria-label="View all jobs in Kerala"
              className="relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#11194F] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(17,25,79,0.16)] sm:px-6"
            >
              <span className="relative z-10">
                View All Kerala Jobs
              </span>

              <span
                aria-hidden="true"
                className="arrow-auto relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/10"
                style={{
                  animation: "arrowMove 1.8s ease-in-out infinite",
                }}
              >
                →
              </span>

              <span
                aria-hidden="true"
                className="shine-auto absolute inset-y-0 left-0 w-20 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                style={{
                  animation: "shineMove 4.5s ease-in-out infinite",
                }}
              />
            </Link>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-10 grid gap-5 sm:mt-12 lg:mt-14 lg:grid-cols-[0.85fr_2.15fr] lg:gap-6">
            {/* FEATURED KERALA CARD */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#11194F] p-6 text-white shadow-[0_20px_55px_rgba(17,25,79,0.18)] sm:p-8">
              {/* DECORATION */}
              <div
                aria-hidden="true"
                className="slow-float pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#3047D8]/50 blur-3xl"
                style={{
                  animation: "slowFloat 8s ease-in-out infinite",
                }}
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/[0.05] blur-2xl"
              />

              <div
                aria-hidden="true"
                className="absolute right-5 top-5 h-24 w-24 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute right-10 top-10 h-14 w-14 rounded-full border border-white/10"
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* MAP ICON */}
                <div
                  aria-hidden="true"
                  className="map-pulse flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
                  style={{
                    animation: "mapPulse 3s ease-in-out infinite",
                  }}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21C12 21 18 15.8 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 15.8 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="12"
                      cy="10.5"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>

                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.17em] text-blue-200 sm:text-xs">
                  Kerala Job Opportunities
                </p>

                <h3 className="mt-3 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                  Jobs across Kerala&apos;s major locations
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                  Discover IT jobs, fresher jobs, government vacancies,
                  internships, walk-in interviews and private jobs from across
                  Kerala.
                </p>

                {/* STATS */}
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                    <div className="flex items-end gap-1">
                      <p className="text-2xl font-bold sm:text-3xl">
                        12
                      </p>

                      <span className="mb-1 text-sm font-bold text-blue-200">
                        +
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] leading-5 text-gray-300 sm:text-xs">
                      Major Locations
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                    <p className="text-xl font-bold sm:text-2xl">
                      Statewide
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-gray-300 sm:text-xs">
                      Kerala Job Updates
                    </p>
                  </div>
                </div>

                <div className="mt-7 lg:mt-auto lg:pt-8">
                  <Link
                    href="/jobs-in-kerala"
                    aria-label="Explore jobs across Kerala"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#11194F] shadow-lg sm:w-auto"
                  >
                    Explore Kerala Jobs

                    <span
                      aria-hidden="true"
                      className="arrow-auto"
                      style={{
                        animation: "arrowMove 1.8s ease-in-out infinite",
                      }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* LOCATION GRID */}
            <div
              aria-label="Jobs by location in Kerala"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {locations.map((location, index) => (
                <Link
                  key={location.slug}
                  href={`/${location.slug}`}
                  aria-label={`Explore jobs in ${location.name}`}
                  className="
                    location-float
                    relative
                    min-h-[170px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-gray-200/80
                    bg-white
                    p-5
                    shadow-[0_8px_30px_rgba(17,25,79,0.055)]
                    sm:min-h-[185px]
                    sm:rounded-[24px]
                    sm:p-6
                  "
                  style={{
                    animation: `locationFloat ${
                      5.4 + (index % 3) * 0.5
                    }s ease-in-out infinite`,
                    animationDelay: `${(index % 4) * 0.3}s`,
                  }}
                >
                  {/* TOP ACCENT */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#3047D8] via-[#6576FF] to-transparent opacity-80"
                  />

                  {/* DECORATIVE CIRCLE */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3047D8]/[0.045]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 rounded-full border border-[#3047D8]/[0.06]"
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      {/* SHORT CODE */}
                      <div
                        aria-hidden="true"
                        className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F1F4FF] text-xs font-extrabold text-[#3047D8]"
                      >
                        {location.short}

                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#3047D8]" />
                      </div>

                      {/* ARROW */}
                      <span
                        aria-hidden="true"
                        className="arrow-auto flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-bold text-[#3047D8]"
                        style={{
                          animation: `arrowMove ${
                            1.8 + (index % 3) * 0.2
                          }s ease-in-out infinite`,
                        }}
                      >
                        →
                      </span>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-lg font-bold leading-tight text-[#11194F] sm:text-xl">
                        Jobs in {location.name}
                      </h3>

                      <p className="mt-2.5 text-sm leading-6 text-gray-500">
                        {location.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3047D8]">
                          Explore Jobs in {location.name}
                        </span>

                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#3047D8]/40"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* BOTTOM MOBILE-FRIENDLY MESSAGE */}
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center shadow-sm sm:mt-12">
            <p className="text-xs leading-6 text-gray-500 sm:text-sm">
              Select your preferred Kerala city or district to explore relevant
              job vacancies, fresher openings and career opportunities near you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}