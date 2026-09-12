import Link from "next/link";

const qualifications = [
  {
    title: "10th Pass Jobs",
    href: "/10th-pass-jobs-kerala",
  },
  {
    title: "Plus Two Jobs",
    href: "/plus-two-jobs-kerala",
  },
  {
    title: "ITI Jobs",
    href: "/iti-jobs-kerala",
  },
  {
    title: "Diploma Jobs",
    href: "/diploma-jobs-kerala",
  },
  {
    title: "Degree Jobs",
    href: "/degree-jobs-kerala",
  },
  {
    title: "BTech Jobs",
    href: "/btech-jobs-kerala",
  },
  {
    title: "BCA Jobs",
    href: "/bca-jobs-kerala",
  },
  {
    title: "MCA Jobs",
    href: "/mca-jobs-kerala",
  },
  {
    title: "BCom Jobs",
    href: "/bcom-jobs-kerala",
  },
  {
    title: "MBA Jobs",
    href: "/mba-jobs-kerala",
  },
  {
    title: "Any Degree Jobs",
    href: "/any-degree-jobs-kerala",
  },
];

export default function Qualifications() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#3047D8]">
            Jobs by Qualification
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#11194F] md:text-4xl">
            Find Jobs Based on Your Qualification
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Explore Kerala job searches for different educational
            qualifications and career levels.
          </p>

        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {qualifications.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-[#3047D8] hover:shadow-md"
            >
              <h3 className="font-bold text-[#11194F]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#3047D8]">
                Explore →
              </p>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}