import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const qualifications = [
  {
    title: "10th Pass Jobs in Kerala",
    href: "/10th-pass-jobs-kerala",
  },
  {
    title: "Plus Two Jobs in Kerala",
    href: "/plus-two-jobs-kerala",
  },
  {
    title: "ITI Jobs in Kerala",
    href: "/iti-jobs-kerala",
  },
  {
    title: "Diploma Jobs in Kerala",
    href: "/diploma-jobs-kerala",
  },
  {
    title: "Degree Jobs in Kerala",
    href: "/degree-jobs-kerala",
  },
  {
    title: "BTech Jobs in Kerala",
    href: "/btech-jobs-kerala",
  },
  {
    title: "BCA Jobs in Kerala",
    href: "/bca-jobs-kerala",
  },
  {
    title: "MCA Jobs in Kerala",
    href: "/mca-jobs-kerala",
  },
  {
    title: "BCom Jobs in Kerala",
    href: "/bcom-jobs-kerala",
  },
  {
    title: "MBA Jobs in Kerala",
    href: "/mba-jobs-kerala",
  },
  {
    title: "Any Degree Jobs in Kerala",
    href: "/any-degree-jobs-kerala",
  },
];

export default function Qualifications() {
  const qualificationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.siteUrl}/#jobs-by-qualification`,
    name: "Jobs by Qualification in Kerala",
    description:
      "Explore Kerala jobs by qualification including 10th pass, Plus Two, ITI, diploma, degree, BTech, BCA, MCA, BCom, MBA and any degree jobs.",
    numberOfItems: qualifications.length,

    itemListElement: qualifications.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,

      item: {
        "@type": "CollectionPage",
        name: item.title,
        url: `${siteConfig.siteUrl}${item.href}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qualificationSchema),
        }}
      />

      <section
        aria-labelledby="jobs-by-qualification-heading"
        className="bg-[#F8FAFC] py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#3047D8]">
              Jobs by Qualification in Kerala
            </p>

            <h2
              id="jobs-by-qualification-heading"
              className="mt-3 text-3xl font-bold text-[#11194F] md:text-4xl"
            >
              Find Jobs Based on Your Qualification
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore Kerala job opportunities based on your educational
              qualification, from 10th pass and Plus Two to degree, BTech,
              BCA, MCA, BCom and MBA levels.
            </p>
          </div>

          <div
            aria-label="Jobs by qualification in Kerala"
            className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {qualifications.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={`Explore ${item.title}`}
                className="rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-[#3047D8] hover:shadow-md"
              >
                <h3 className="font-bold text-[#11194F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[#3047D8]">
                  Explore Jobs →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}