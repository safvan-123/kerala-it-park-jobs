import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const searches = [
  {
    name: "IT Jobs in Kerala",
    href: "/it-jobs-kerala",
  },
  {
    name: "Fresher Jobs in Kerala",
    href: "/fresher-jobs-kerala",
  },
  {
    name: "Jobs in Kochi",
    href: "/jobs-in-kochi",
  },
  {
    name: "Infopark Jobs in Kochi",
    href: "/infopark-jobs",
  },
  {
    name: "Technopark Jobs in Trivandrum",
    href: "/technopark-jobs",
  },
  {
    name: "Cyberpark Jobs in Kozhikode",
    href: "/cyberpark-jobs",
  },
  {
    name: "Software Jobs in Kerala",
    href: "/software-jobs-kerala",
  },
  {
    name: "React Developer Jobs in Kerala",
    href: "/react-developer-jobs-kerala",
  },
  {
    name: "Software Testing Jobs in Kerala",
    href: "/software-testing-jobs-kerala",
  },
  {
    name: "Accountant Jobs in Kerala",
    href: "/accountant-jobs-kerala",
  },
  {
    name: "HR Jobs in Kerala",
    href: "/hr-jobs-kerala",
  },
  {
    name: "Walk-in Interviews in Kerala",
    href: "/walk-in-jobs-kerala",
  },
];

export default function PopularSearches() {
  const searchesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.siteUrl}/#popular-job-searches`,
    name: "Popular Job Searches in Kerala",
    description:
      "Popular Kerala job searches including IT jobs, fresher jobs, Infopark jobs, Technopark jobs, Cyberpark jobs, software jobs, testing jobs, HR jobs and walk-in interviews.",
    numberOfItems: searches.length,

    itemListElement: searches.map((search, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CollectionPage",
        name: search.name,
        url: `${siteConfig.siteUrl}${search.href}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(searchesSchema),
        }}
      />

      <section
        aria-labelledby="popular-job-searches-heading"
        className="bg-white py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#3047D8]">
              Popular Kerala Job Searches
            </p>

            <h2
              id="popular-job-searches-heading"
              className="mt-3 text-3xl font-bold text-[#11194F] md:text-4xl"
            >
              Popular Job Searches in Kerala
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore popular job searches in Kerala including IT jobs, fresher
              jobs, IT park vacancies, software roles and other career
              opportunities across the state.
            </p>
          </div>

          <nav
            aria-label="Popular job searches in Kerala"
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {searches.map((search) => (
              <Link
                key={search.href}
                href={search.href}
                aria-label={`Explore ${search.name}`}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-[#3047D8] hover:bg-[#F4F7FF] hover:text-[#3047D8]"
              >
                {search.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}