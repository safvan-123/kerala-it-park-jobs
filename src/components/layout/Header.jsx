"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/data/siteConfig";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "IT Jobs",
    href: "/it-jobs-kerala",
  },
  {
    name: "Freshers",
    href: "/fresher-jobs-kerala",
  },
 {
  name: "Resources",
  href: "/resources",
},
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    // Homepage section links like /#locations
    if (href.startsWith("/#")) {
      return false;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* BRAND */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-3"
        >
          {/* LOGO */}
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-md transition duration-300 group-hover:scale-105">
            <Image
              src="/images/kerala_it_park_jobs_ (1).jpeg"
              alt="Kerala IT Park Jobs"
              fill
              sizes="48px"
              className="scale-[1.10] object-cover object-center"
              priority
            />

            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
          </div>

          {/* BRAND TEXT */}
          <div className="flex min-w-0 flex-col justify-center">
            <p className="truncate text-[15px] font-bold leading-tight text-[#11194F] sm:text-lg">
              Kerala IT Park Jobs
            </p>

            <p className="mt-1 hidden whitespace-nowrap text-[11px] font-medium leading-tight text-gray-500 sm:block">
              Latest Job Updates Across Kerala
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2.5 text-sm font-semibold transition duration-200 ${
                  active
                    ? "text-[#3047D8]"
                    : "text-gray-700 hover:bg-[#F4F7FF] hover:text-[#3047D8]"
                }`}
              >
                {item.name}

                {/* ACTIVE UNDERLINE */}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#3047D8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-2 xl:flex">
          {/* INSTAGRAM */}
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="relative z-10">Follow Instagram</span>

            <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition duration-500 group-hover:translate-x-[120%]" />
          </Link>

          {/* COMMUNITY */}
          <Link
            href="/community"
            className="rounded-xl border border-[#3047D8]/25 bg-[#F4F7FF] px-4 py-2.5 text-sm font-semibold text-[#3047D8] transition duration-300 hover:-translate-y-0.5 hover:border-[#3047D8] hover:bg-white"
          >
            Community
          </Link>

          {/* WHATSAPP */}
          <Link
            href={siteConfig.whatsappChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-md"
          >
            Join WhatsApp
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#11194F] shadow-sm transition duration-300 hover:border-blue-200 hover:bg-[#F4F7FF] lg:hidden"
        >
          <div className="relative h-5 w-5">
            {/* TOP LINE */}
            <span
              className={`absolute left-0 top-[3px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />

            {/* MIDDLE LINE */}
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen
                  ? "scale-x-0 opacity-0"
                  : "scale-x-100 opacity-100"
              }`}
            />

            {/* BOTTOM LINE */}
            <span
              className={`absolute left-0 top-[15px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU WRAPPER */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[720px] border-gray-100 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 transition-all duration-300 sm:px-6 ${
            menuOpen ? "translate-y-0 py-5" : "-translate-y-3 py-0"
          }`}
        >
          {/* MOBILE NAV */}
          <nav aria-label="Mobile navigation" className="space-y-1">
            {navigation.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition duration-200 ${
                    active
                      ? "bg-[#F4F7FF] text-[#3047D8]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#3047D8]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3">
                    {/* SMALL INDICATOR */}
                    <span
                      className={`h-2 w-2 rounded-full transition ${
                        active
                          ? "bg-[#3047D8]"
                          : "bg-gray-200 group-hover:bg-[#3047D8]"
                      }`}
                    />

                    {item.name}
                  </span>

                  <span className="text-gray-400 transition duration-200 group-hover:translate-x-1 group-hover:text-[#3047D8]">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* DIVIDER */}
          <div className="my-5 h-px bg-gray-100" />

          {/* MOBILE SOCIAL SECTION */}
          <div>
            <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Stay Connected
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* INSTAGRAM */}
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-5 py-4 text-center text-sm font-semibold text-white shadow-sm transition duration-300 active:scale-[0.98]"
              >
                <span className="relative z-10">Follow Instagram</span>

                <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition duration-500 group-hover:translate-x-[120%]" />
              </Link>

              {/* WHATSAPP */}
              <Link
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-xl bg-[#25D366] px-5 py-4 text-center text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#20BD5A] active:scale-[0.98]"
              >
                Join WhatsApp
              </Link>
            </div>
          </div>

          {/* SECONDARY MOBILE LINKS */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link
              href="/community"
              onClick={closeMenu}
              className="rounded-xl border border-blue-100 bg-[#F4F7FF] px-4 py-3 text-center text-sm font-semibold text-[#3047D8] transition hover:border-[#3047D8]"
            >
              Community
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-[#11194F] transition hover:border-[#3047D8] hover:text-[#3047D8]"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE FOOT NOTE */}
          <div className="mt-5 rounded-xl bg-[#F8FAFC] px-4 py-3 text-center">
            <p className="text-xs leading-5 text-gray-500">
              IT Jobs • Fresher Jobs • Kerala Locations • Career Updates
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}