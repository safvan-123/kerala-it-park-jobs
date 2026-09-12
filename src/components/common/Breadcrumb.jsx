import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">

        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">

          <li>
            <Link
              href="/"
              className="transition hover:text-[#3047D8]"
            >
              Home
            </Link>
          </li>

          {items.map((item, index) => {
            const last = index === items.length - 1;

            return (
              <li
                key={`${item.name}-${index}`}
                className="flex items-center gap-2"
              >
                <span aria-hidden="true">
                  /
                </span>

                {last || !item.href ? (
                  <span className="font-medium text-gray-700">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#3047D8]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}

        </ol>

      </div>
    </nav>
  );
}