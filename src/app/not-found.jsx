import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center bg-[#F4F7FF]">

      <div className="mx-auto max-w-3xl px-6 py-20 text-center">

        <p className="text-sm font-semibold uppercase tracking-wide text-[#3047D8]">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#11194F] md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          The page you are looking for could not be found.
          Explore the latest Kerala job searches from our homepage.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-[#3047D8] px-6 py-3 font-semibold text-white hover:bg-[#2538B8]"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
}