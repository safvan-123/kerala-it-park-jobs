import Link from "next/link";

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
    name: "Infopark Jobs",
    href: "/infopark-jobs",
  },
  {
    name: "Technopark Jobs",
    href: "/technopark-jobs",
  },
  {
    name: "Cyberpark Jobs",
    href: "/cyberpark-jobs",
  },
  {
    name: "Software Jobs",
    href: "/software-jobs-kerala",
  },
  {
    name: "React Developer Jobs",
    href: "/react-developer-jobs-kerala",
  },
  {
    name: "Software Testing Jobs",
    href: "/software-testing-jobs-kerala",
  },
  {
    name: "Accountant Jobs",
    href: "/accountant-jobs-kerala",
  },
  {
    name: "HR Jobs",
    href: "/hr-jobs-kerala",
  },
  {
    name: "Walk-in Interviews",
    href: "/walk-in-jobs-kerala",
  },
];

export default function PopularSearches() {
  return (
    <section className="bg-white py-16 md:py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#3047D8]">
            Popular Searches
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#11194F] md:text-4xl">
            Popular Job Searches in Kerala
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Explore some of the most commonly searched career categories,
            locations and job opportunities across Kerala.
          </p>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {searches.map((search) => (
            <Link
              key={search.href}
              href={search.href}
              className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-[#3047D8] hover:bg-[#F4F7FF] hover:text-[#3047D8]"
            >
              {search.name}
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}