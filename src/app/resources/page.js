import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Career Resources for Freshers in Kerala | Kerala IT Park Jobs",

  description:
    "Practical career resources for freshers in Kerala including resume preparation, interview guidance, job search strategies, software career roadmaps and placement preparation.",

  alternates: {
    canonical: "/resources",
  },
};

const resources = [
  {
    number: "01",
    label: "Job Search",
    title: "Job Search Guide for Freshers in Kerala",
    description:
      "Learn how to search smarter, identify suitable opportunities, avoid common mistakes and build a consistent job-search routine.",
    href: "/resources/job-search-guide-kerala",
    accent: "from-[#3047D8] to-[#3B5BFF]",
  },
  {
    number: "02",
    label: "Resume",
    title: "Resume Guide for Freshers",
    description:
      "Build a clear, professional resume that highlights your education, projects, skills and strengths in the right way.",
    href: "/resources/resume-guide-for-freshers",
    accent: "from-[#11194F] to-[#3047D8]",
  },
  {
    number: "03",
    label: "Interview",
    title: "Interview Preparation",
    description:
      "Prepare for HR, technical and behavioural questions with practical guidance that improves clarity and confidence.",
    href: "/resources/interview-preparation",
    accent: "from-[#3047D8] to-[#6B7BFF]",
  },
  {
    number: "04",
    label: "Career",
    title: "Software Career Roadmap",
    description:
      "Understand popular software career paths and identify the skills, projects and learning direction that match your goals.",
    href: "/resources/software-career-roadmap",
    accent: "from-[#11194F] to-[#3B5BFF]",
  },
  {
    number: "05",
    label: "Placement",
    title: "Placement Preparation",
    description:
      "Prepare for aptitude tests, communication rounds, technical interviews, projects, portfolios and campus placements.",
    href: "/resources/placement-preparation",
    accent: "from-[#3047D8] to-[#4F65FF]",
  },
  {
    number: "06",
    label: "Kerala IT",
    title: "Kerala IT Parks Guide",
    description:
      "Understand Kerala's major technology hubs including Infopark, Technopark, Cyberpark and SmartCity Kochi.",
    href: "/resources/kerala-it-parks-guide",
    accent: "from-[#11194F] to-[#3047D8]",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose a Clear Direction",
    text: "Identify the role or career path you want to target instead of applying everywhere without a focused plan.",
  },
  {
    number: "02",
    title: "Strengthen Your Profile",
    text: "Improve your resume, projects, communication and professional presence before sending more applications.",
  },
  {
    number: "03",
    title: "Stay Consistent",
    text: "A focused routine and steady improvement usually create better results than random applications.",
  },
];

const highlights = [
  "Practical fresher-focused guidance",
  "Kerala career and IT ecosystem focus",
  "Simple, actionable preparation steps",
  "Useful internal links to job opportunities",
];

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Career Resources" }]} />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4F7FF]">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3B5BFF]/10 blur-3xl" />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#11194F 1px, transparent 1px), linear-gradient(90deg, #11194F 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white/90 px-4 py-2 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#3047D8] sm:text-sm">
                Career Resources
              </span>
            </div>

            {/* Title */}
            <h1 className="mx-auto mt-6 max-w-5xl text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
              Build a Stronger Career with Better Preparation
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              Practical career guidance for freshers who want to prepare
              better, apply smarter and build a stronger profile for real
              opportunities across Kerala and beyond.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/resources/job-search-guide-kerala"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(48,71,216,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2538B8] hover:shadow-[0_16px_38px_rgba(48,71,216,0.28)]"
              >
                Start Your Career Preparation

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/fresher-jobs-kerala"
                className="inline-flex items-center justify-center rounded-xl border border-[#3047D8]/15 bg-white/90 px-6 py-3.5 text-sm font-bold text-[#3047D8] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8]/40 hover:bg-white hover:shadow-md"
              >
                Explore Fresher Opportunities
              </Link>
            </div>

            {/* Mini highlights */}
            <div className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-2.5">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#3047D8]/10 bg-white/80 px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8]/25 hover:text-[#3047D8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#3047D8]/15 to-transparent" />
      </section>

      {/* =========================================================
          INTRO / MOTIVATION
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left */}
            <div>
              <div className="inline-flex rounded-full bg-[#F4F7FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
                Start with a Plan
              </div>

              <h2 className="mt-5 max-w-xl text-2xl font-bold leading-tight text-[#11194F] sm:text-3xl lg:text-4xl">
                Your Career Progress Starts Before the Application
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                A good opportunity becomes more valuable when you are prepared
                for it. Your resume, projects, communication, technical
                knowledge and career direction all influence how employers see
                your profile.
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#3047D8]/8 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-[#3047D8]/10 bg-[#11194F] p-6 text-white shadow-[0_24px_70px_rgba(17,25,79,0.18)] sm:p-8">
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#3B5BFF]/20 blur-2xl" />

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
                  Keep Moving Forward
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                  Your First Opportunity May Take Time — Your Progress Does Not
                  Have To
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                  Every useful project, application, interview and improvement
                  to your profile can move you closer to the right role. Focus
                  on consistent progress instead of expecting instant results.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:bg-white/[0.09]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
                    ✓
                  </div>

                  <p className="text-sm leading-6 text-gray-200">
                    Improve one meaningful part of your career profile every
                    week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESOURCE CARDS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
              Explore Career Guides
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Practical Resources to Help You Move Forward
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Choose the area you want to improve and start with one practical
              step today.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/25 hover:shadow-[0_22px_55px_rgba(17,25,79,0.12)]"
              >
                {/* Animated top bar */}
                <div
                  className={`absolute left-0 top-0 h-1.5 w-0 bg-gradient-to-r ${resource.accent} transition-all duration-500 group-hover:w-full`}
                />

                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${resource.accent} opacity-[0.05] blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.10]`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${resource.accent} text-xs font-bold text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {resource.number}
                    </div>

                    <span className="rounded-full border border-[#3047D8]/10 bg-[#F4F7FF] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#3047D8]">
                      {resource.label}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-snug text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {resource.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#3047D8]">
                      Read Guide

                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3 STEP CAREER PLAN
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-[#F4F7FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              A Better Approach
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Build Your Career One Step at a Time
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              A simple, focused process can make your preparation more
              effective and less confusing.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {/* Connecting line desktop */}
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#3047D8]/20 to-transparent md:block" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-[24px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/25 hover:shadow-lg"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#11194F] text-xs font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3047D8]">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#11194F]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK SUPPORT STRIP
      ========================================================= */}
      <section className="bg-[#F4F7FF] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Need Resume Help?",
                text: "Start by improving how you present your skills, projects and strengths.",
                href: "/resources/resume-guide-for-freshers",
              },
              {
                title: "Preparing for an Interview?",
                text: "Practise common questions and learn how to communicate your value clearly.",
                href: "/resources/interview-preparation",
              },
              {
                title: "Not Sure Which IT Career to Choose?",
                text: "Explore popular software career paths before deciding what to learn next.",
                href: "/resources/software-career-roadmap",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-[#3047D8]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3047D8]/25 hover:shadow-md"
              >
                <h3 className="font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#3047D8]">
                  Explore Guide
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#11194F] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3047D8]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3B5BFF]" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
              Keep Improving
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Small Improvements Today Can Create Better Opportunities Tomorrow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Improve your profile step by step, stay consistent with your job
            search and keep learning from every application and interview.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
            >
              Join Our Community
            </Link>

            <Link
              href="/resources/job-search-guide-kerala"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.10]"
            >
              Start Job Search Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}