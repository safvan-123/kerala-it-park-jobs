import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Breadcrumb({ items = [] }) {
  const breadcrumbItems = [
    {
      name: "Home",
      href: "/",
    },
    ...items,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => {
      const isLast = index === breadcrumbItems.length - 1;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(!isLast && item.href
          ? {
              item: `${siteConfig.siteUrl}${item.href}`,
            }
          : {}),
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

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
              const isLast = index === items.length - 1;

              return (
                <li
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-2"
                >
                  <span aria-hidden="true">/</span>

                  {isLast || !item.href ? (
                    <span
                      className="font-medium text-gray-700"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition hover:text-[#3047D8]"
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
    </>
  );
}